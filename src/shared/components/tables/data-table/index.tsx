import React, { useState, useRef, useEffect } from 'react';
import {
    Search, SlidersHorizontal, RotateCcw, Trash2, X
} from 'lucide-react';
import TablePagination from '@/shared/components/tables/table-pagination';
import EmptyState from '@/shared/components/tables/empty-state';
import TableSearch from '@/shared/components/tables/table-search';
import TableFilter from '@/shared/components/tables/table-filter';
import TableColumnToggle from '@/shared/components/tables/table-column-toggle';
import TableToolbar from '@/shared/components/tables/table-toolbar';

export interface Column<T = any> {
    id: string;
    label: string;
    render?: (item: T) => React.ReactNode;
}

export interface DataTableProps<T = any> {
    data: T[];
    columns: Column<T>[];
    searchPlaceholder?: string;
    onDeleteSelected?: (selectedIds: number[]) => void;
    keyExtractor?: (item: T) => number | string;
    actions?: (item: T) => React.ReactNode;
    filterContent?: React.ReactNode;
    customHeaderActions?: React.ReactNode;
    compact?: boolean;
    dateValue?: string;
    onDateChange?: (date: string) => void;
}

export default function DataTable<T extends Record<string, any>>({
    data,
    columns,
    searchPlaceholder = "Search...",
    onDeleteSelected,
    keyExtractor = (item: any) => item.id,
    actions,
    filterContent,
    customHeaderActions,
    compact = false,
    dateValue: propDateValue,
    onDateChange: propOnDateChange
}: DataTableProps<T>) {
    const [search, setSearch] = useState('');
    const [dateFilter, setDateFilter] = useState(propDateValue || '');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedIds, setSelectedIds] = useState<(number | string)[]>([]);
    const [visibleColumns, setVisibleColumns] = useState<string[]>(columns.map(c => c.id));
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    // Reset to page 1 when search or date changes
    useEffect(() => {
        setCurrentPage(1);
    }, [search, dateFilter]);

    const handleDateChange = (val: string) => {
        setDateFilter(val);
        if (propOnDateChange) propOnDateChange(val);
    };

    // Apply Search & Date Filtering
    const filteredData = data.filter(item => {
        if (search) {
            const matchesSearch = Object.values(item).some(val =>
                String(val).toLowerCase().includes(search.toLowerCase())
            );
            if (!matchesSearch) return false;
        }
        if (dateFilter) {
            const matchesDate = Object.values(item).some(val =>
                String(val).includes(dateFilter)
            );
            if (!matchesDate) return false;
        }
        return true;
    });

    // Pagination Logic
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / perPage);
    const startIndex = (currentPage - 1) * perPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + perPage);

    const toggleColumn = (id: string) => {
        setVisibleColumns(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]);
    };

    const toggleSelectAll = () => {
        if (selectedIds.length === paginatedData.length && paginatedData.length > 0) {
            setSelectedIds([]);
        } else {
            setSelectedIds(paginatedData.map(item => keyExtractor(item)));
        }
    };

    const handleSelectAll = () => {
        setSelectedIds(filteredData.map(item => keyExtractor(item)));
    };

    const toggleSelect = (id: number | string) => {
        setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    return (
        <div className="bg-white rounded-lg border border-slate-200/80 shadow-2xs relative z-10">
            <div className="animate-in fade-in duration-300">
                {/* Toolbar (Polaris Style) */}
                <TableToolbar
                    selectedCount={selectedIds.length}
                    totalCount={totalItems}
                    onClearSelection={() => setSelectedIds([])}
                    onDeleteSelected={onDeleteSelected ? () => onDeleteSelected(selectedIds as number[]) : undefined}
                    onSelectAll={handleSelectAll}
                >
                    <TableSearch
                        value={search}
                        onChange={setSearch}
                        placeholder={searchPlaceholder}
                    />
                    <div className="flex items-center gap-2 flex-wrap">
                        {customHeaderActions}
                        <TableFilter
                            dateValue={dateFilter}
                            onDateChange={handleDateChange}
                        />

                        <div className="w-[1px] h-4 bg-slate-200 mx-1"></div>

                        <TableColumnToggle
                            columns={columns}
                            visibleColumns={visibleColumns}
                            onToggleColumn={toggleColumn}
                        />
                    </div>
                </TableToolbar>

                {/* Filter Content Area */}
                {showFilters && filterContent && (
                    <div className="p-4 border-b border-slate-200/80 bg-slate-50/50 animate-in slide-in-from-top-2 duration-200">
                        {filterContent}
                    </div>
                )}

                {/* Data Table */}
                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#F8FAFC] border-b border-slate-200 text-[11.5px] font-semibold text-slate-600 tracking-tight">
                                <th className="px-2.5 py-1.5 w-[36px] text-center">
                                    <div className="flex items-center justify-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedIds.length === paginatedData.length && paginatedData.length > 0}
                                            onChange={toggleSelectAll}
                                            className="w-3.5 h-3.5 text-indigo-600 border-slate-300 rounded-xs focus:ring-indigo-500 cursor-pointer" />
                                    </div>
                                </th>
                                {columns.map(col => visibleColumns.includes(col.id) && (
                                    <th key={col.id} className={`px-3 py-1.5 ${col.id === 'actions' ? 'text-right pr-3' : 'text-left'}`}>{col.label}</th>
                                ))}
                                {actions && <th className="px-3 py-1.5 text-right pr-3">Actions</th>}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100/80">
                            {paginatedData.length === 0 ? (
                                <tr>
                                    <td colSpan={columns.length + (actions ? 2 : 1)} className="p-0">
                                        <EmptyState />
                                    </td>
                                </tr>
                            ) : (
                                paginatedData.map(item => {
                                    const id = keyExtractor(item);
                                    const isSelected = selectedIds.includes(id);
                                    return (
                                        <tr key={id} className={`transition-colors group ${isSelected ? 'bg-indigo-50/40' : 'hover:bg-slate-50/60'}`}>
                                            <td className="px-2.5 py-1.5 whitespace-nowrap text-center">
                                                <div className="flex items-center justify-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={isSelected}
                                                        onChange={() => toggleSelect(id)}
                                                        className="w-3.5 h-3.5 text-indigo-600 border-slate-300 rounded-xs focus:ring-indigo-500 cursor-pointer" />
                                                </div>
                                            </td>
                                            {columns.map(col => visibleColumns.includes(col.id) && (
                                                <td key={col.id} className={`px-3 py-1.5 whitespace-nowrap text-[12px] text-slate-700 font-medium ${col.id === 'actions' ? 'text-right pr-3 ml-auto' : 'text-left'}`}>
                                                    {col.id === 'actions' ? (
                                                        <div className="flex justify-end items-center ml-auto w-full">
                                                            {col.render ? col.render(item) : item[col.id]}
                                                        </div>
                                                    ) : (
                                                        col.render ? col.render(item) : item[col.id]
                                                    )}
                                                </td>
                                            ))}
                                            {actions && (
                                                <td className="px-3 py-1.5 whitespace-nowrap text-right pr-3">
                                                    <div className="flex justify-end items-center ml-auto w-full">
                                                        {actions(item)}
                                                    </div>
                                                </td>
                                            )}
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <TablePagination
                    total={totalItems}
                    fromIdx={totalItems > 0 ? startIndex + 1 : 0}
                    toIdx={Math.min(startIndex + perPage, totalItems)}
                    perPage={perPage}
                    onPerPageChange={(val) => {
                        setPerPage(Number(val));
                        setCurrentPage(1);
                    }}
                    onPrevPage={() => setCurrentPage(p => Math.max(1, p - 1))}
                    onNextPage={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    hasPrev={currentPage > 1}
                    hasNext={currentPage < totalPages}
                />
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Database, Plus } from 'lucide-react';
import DataTable, { Column } from '@/shared/components/tables/data-table';
import TableActions from '@/shared/components/tables/table-actions';
import Button from '@/shared/components/ui/button';
import { MASTER_CATEGORIES, MasterDataItem } from './MasterData/types';
import { MasterDataFormModal } from './MasterData/components/MasterDataFormModal';

export default function MasterDataPage() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'company_types';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MasterDataItem | null>(null);

  const [items, setItems] = useState<MasterDataItem[]>([
    { id: '1', code: 'CT-01', name: 'Parent Company', category: 'company_types', description: 'Main enterprise', isSystem: true, status: 'Active' },
    { id: '2', code: 'CT-02', name: 'Subsidiary', category: 'company_types', description: 'Controlled entity', isSystem: false, status: 'Active' },
    { id: '3', code: 'IND-01', name: 'Real Estate', category: 'industries', description: 'Property development', isSystem: false, status: 'Active' },
    { id: '4', code: 'IND-02', name: 'Technology', category: 'industries', description: 'IT & Software', isSystem: false, status: 'Active' },
    { id: '5', code: 'CNT-01', name: 'Bangladesh', category: 'countries', description: 'South Asia', isSystem: false, status: 'Active' },
    { id: '6', code: 'CNT-02', name: 'United States', category: 'countries', description: 'North America', isSystem: false, status: 'Active' },
    { id: '7', code: 'CUR-01', name: 'BDT (৳)', category: 'currencies', description: 'Bangladeshi Taka', isSystem: false, status: 'Active' },
    { id: '8', code: 'CUR-02', name: 'USD ($)', category: 'currencies', description: 'US Dollar', isSystem: false, status: 'Active' },
    { id: '9', code: 'DT-01', name: 'Operations', category: 'department_types', description: 'Core operational dept', isSystem: false, status: 'Active' },
    { id: '10', code: 'DL-01', name: 'Executive', category: 'designation_levels', description: 'C-Level Management', isSystem: false, status: 'Active' },
    { id: '11', code: 'ES-01', name: 'Full-Time Permanent', category: 'employment_statuses', description: 'Permanent staff', isSystem: false, status: 'Active' },
    { id: '12', code: 'BC-01', name: 'Headquarters', category: 'branch_categories', description: 'Main office branch', isSystem: false, status: 'Active' },
  ]);

  const activeCategoryObj = MASTER_CATEGORIES.find((c) => c.id === selectedCategory);
  const filteredItems = items.filter((i) => i.category === selectedCategory);

  const handleOpenAdd = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: MasterDataItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleSaveItem = (savedItem: MasterDataItem) => {
    if (editingItem) {
      setItems((prev) => prev.map((i) => (i.id === savedItem.id ? { ...i, ...savedItem } : i)));
    } else {
      setItems((prev) => [...prev, { ...savedItem, category: selectedCategory }]);
    }
  };

  const columns: Column<MasterDataItem>[] = [
    { id: 'code', label: 'Code', render: (item) => <span className="font-mono text-[12px] text-slate-500">{item.code}</span> },
    { id: 'name', label: 'Name', render: (item) => <span className="font-bold text-slate-800 text-[13px]">{item.name}</span> },
    { id: 'status', label: 'Status', render: (item) => <span className="px-2 py-0.5 text-[11px] bg-emerald-50 text-emerald-600 rounded-full">{item.status}</span> },
    {
      id: 'actions',
      label: 'Actions',
      render: (item) => (
        <TableActions
          item={item}
          onEdit={() => handleOpenEdit(item)}
          onDelete={() => setItems((prev) => prev.filter((i) => i.id !== item.id))}
        />
      ),
    },
  ];

  return (
    <div className="p-4 md:p-6 mx-auto bg-[#F4F6F9] min-h-screen text-slate-800 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3">
        <div>
          <h1 className="text-[19px] font-bold text-slate-900 flex items-center gap-2">
            <Database size={22} className="text-indigo-600" /> {activeCategoryObj?.name || 'Master Data Management'}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">Manage enterprise options for {activeCategoryObj?.name.toLowerCase() || 'master categories'}</p>
        </div>
        <Button onClick={handleOpenAdd} className="bg-indigo-600 text-white flex items-center gap-1.5 self-start sm:self-auto">
          <Plus size={16} /> Add Option
        </Button>
      </div>

      {/* Main Full-Width DataTable */}
      <DataTable data={filteredItems} columns={columns} searchPlaceholder={`Search ${activeCategoryObj?.name}...`} />

      <MasterDataFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingItem(null);
        }}
        initialData={editingItem}
        categoryName={activeCategoryObj?.name || ''}
        onSave={handleSaveItem}
      />
    </div>
  );
}

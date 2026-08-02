import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  FileCheck,
  Share2,
  Clock,
  Plus,
  Upload,
  Eye,
  Edit2,
  Trash2,
  MoreVertical,
  ArrowUpRight,
  LayoutGrid,
  List,
  X,
  FileCode,
} from 'lucide-react';
import DataTable, { Column } from '@/shared/components/tables/data-table';
import Select from '@/shared/components/ui/select';
import Modal from '@/shared/components/modals/modal';

export default function CustomReportsPage() {
  const navigate = useNavigate();
  const [selectedModule, setSelectedModule] = useState('all');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importFile, setImportFile] = useState<File | null>(null);

  const moduleOptions = [
    { id: 'all', name: 'All Modules' },
    { id: 'sales', name: 'Sales' },
    { id: 'projects', name: 'Projects' },
    { id: 'crm', name: 'CRM' },
    { id: 'property', name: 'Property' },
    { id: 'finance', name: 'Finance' },
    { id: 'hr', name: 'HR' },
  ];

  // Top 4 KPI Cards
  const kpis = [
    { label: 'Total Reports', val: '48', change: '18.6%', isPos: true, icon: FileText, color: 'bg-purple-50 text-purple-600 border-purple-100' },
    { label: 'Active Reports', val: '35', change: '12.4%', isPos: true, icon: FileCheck, color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
    { label: 'Shared Reports', val: '15', change: '8.7%', isPos: true, icon: Share2, color: 'bg-amber-50 text-amber-600 border-amber-100' },
    { label: 'Recently Updated', val: '8', change: '3.2%', isPos: true, icon: Clock, color: 'bg-rose-50 text-rose-600 border-rose-100' },
  ];

  // Raw Table Data
  const reports = [
    { id: 1, name: 'Sales Performance Report', module: 'Sales', owner: 'John Doe', modified: 'May 28, 2025 10:30 AM', schedule: 'Daily', status: 'Active' },
    { id: 2, name: 'Project Profitability Report', module: 'Projects', owner: 'Sarah Johnson', modified: 'May 27, 2025 09:15 AM', schedule: 'Monthly', status: 'Active' },
    { id: 3, name: 'Customer Conversion Report', module: 'CRM', owner: 'Mike Wilson', modified: 'May 26, 2025 04:45 PM', schedule: 'Weekly', status: 'Active' },
    { id: 4, name: 'Property Inventory Report', module: 'Property', owner: 'Emily Davis', modified: 'May 25, 2025 02:20 PM', schedule: '-', status: 'Inactive' },
    { id: 5, name: 'Collection Summary Report', module: 'Finance', owner: 'David Brown', modified: 'May 24, 2025 11:10 AM', schedule: 'Monthly', status: 'Active' },
    { id: 6, name: 'Employee Attendance Report', module: 'HR', owner: 'Jane Smith', modified: 'May 23, 2025 08:30 AM', schedule: 'Daily', status: 'Active' },
    { id: 7, name: 'Inventory Movement Report', module: 'Inventory', owner: 'John Doe', modified: 'May 22, 2025 05:15 PM', schedule: 'Daily', status: 'Active' },
    { id: 8, name: 'Lead Acquisition Report', module: 'CRM', owner: 'Mike Wilson', modified: 'May 21, 2025 11:00 AM', schedule: 'Weekly', status: 'Active' },
  ];

  // Column definitions for reusable DataTable
  const columns: Column[] = [
    {
      id: 'name',
      label: 'Report Name',
      render: (item) => <span className="font-semibold text-slate-800">{item.name}</span>,
    },
    {
      id: 'module',
      label: 'Module',
      render: (item) => <span className="text-slate-600 font-medium">{item.module}</span>,
    },
    {
      id: 'owner',
      label: 'Owner',
      render: (item) => <span className="text-slate-700 font-medium">{item.owner}</span>,
    },
    {
      id: 'modified',
      label: 'Last Modified',
      render: (item) => <span className="text-slate-500 text-[12px]">{item.modified}</span>,
    },
    {
      id: 'schedule',
      label: 'Schedule',
      render: (item) => <span className="text-slate-600">{item.schedule}</span>,
    },
    {
      id: 'status',
      label: 'Status',
      render: (item) => (
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-bold ${
            item.status === 'Active'
              ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
              : 'bg-slate-100 text-slate-500 border border-slate-200'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
          {item.status}
        </span>
      ),
    },
  ];

  const filteredReports = selectedModule === 'all'
    ? reports
    : reports.filter((r) => r.module.toLowerCase() === selectedModule.toLowerCase());

  // Custom Header Actions inside Table Toolbar
  const headerActionsNode = (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5">
        <span className="text-[11.5px] font-medium text-slate-500 whitespace-nowrap">Filter by Module:</span>
        <div className="w-[140px]">
          <Select
            value={selectedModule}
            onChange={(e) => setSelectedModule(e.target.value)}
            options={moduleOptions}
            showSearch={false}
            size="sm"
          />
        </div>
      </div>

      <div className="w-[1px] h-4 bg-[#ebebeb] mx-0.5"></div>

      <div className="flex items-center gap-1">
        <span className="text-[11.5px] font-medium text-slate-400"></span>
        <div className="flex items-center border border-slate-200 rounded bg-white p-0.5 shadow-2xs">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1 rounded transition-colors cursor-pointer ${
              viewMode === 'grid' ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-400 hover:text-slate-600'
            }`}
            title="Grid View"
          >
            <LayoutGrid size={14} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-1 rounded transition-colors cursor-pointer ${
              viewMode === 'list' ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-400 hover:text-slate-600'
            }`}
            title="Table View"
          >
            <List size={14} />
          </button>
        </div>
      </div>
    </div>
  );

  const handleImportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!importFile) return;
    alert(`Report "${importFile.name}" imported successfully!`);
    setIsImportModalOpen(false);
    setImportFile(null);
  };

  return (
    <div className="w-full px-4 md:px-6 py-3.5 md:py-4 bg-[#F8FAFC] space-y-3.5 min-h-screen">
      {/* Breadcrumb & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-[11.5px] text-slate-400 font-medium mb-1">
            <span>Reports</span>
            <span>&gt;</span>
            <span className="text-slate-600 font-semibold">Custom Reports</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Custom Reports</h1>
          <p className="text-[12.5px] text-slate-500 font-normal mt-0.5">
            Create, manage and share custom reports
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsImportModalOpen(true)}
            className="px-3.5 py-1.5 rounded-md border border-slate-300 bg-white text-slate-700 text-[12px] font-semibold hover:bg-slate-50 transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
          >
            <Upload size={14} />
            <span>Import Report</span>
          </button>
          <button
            onClick={() => navigate('/admin/reports/builder')}
            className="px-3.5 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-[12px] font-semibold transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
          >
            <Plus size={15} />
            <span>Create New Report</span>
          </button>
        </div>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="bg-white p-3.5 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-[11px] font-medium text-slate-500 block mb-0.5">{kpi.label}</span>
                <span className="text-[20px] font-black text-slate-900 leading-tight block">{kpi.val}</span>
                <span className="inline-flex items-center gap-0.5 text-[10.5px] font-bold text-emerald-600 mt-1">
                  <ArrowUpRight size={12} />
                  <span>{kpi.change}</span>
                  <span className="text-slate-400 font-normal ml-0.5">vs last month</span>
                </span>
              </div>
              <div className={`w-9 h-9 rounded-md border ${kpi.color} flex items-center justify-center shrink-0`}>
                <Icon size={18} />
              </div>
            </div>
          );
        })}
      </div>

      {/* View Mode Switcher Rendering */}
      {viewMode === 'list' ? (
        /* Reusable Enterprise DataTable Component with customHeaderActions inside toolbar */
        <DataTable
          data={filteredReports}
          columns={columns}
          searchPlaceholder="Search custom reports..."
          keyExtractor={(item) => item.id}
          customHeaderActions={headerActionsNode}
          onDeleteSelected={(ids) => alert(`Deleted reports with IDs: ${ids.join(', ')}`)}
          actions={(item) => (
            <div className="flex items-center justify-center gap-1 text-slate-400">
              <button
                onClick={() => navigate('/admin/reports/builder')}
                className="p-1 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors cursor-pointer"
                title="View"
              >
                <Eye size={14} />
              </button>
              <button
                onClick={() => navigate('/admin/reports/builder')}
                className="p-1 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors cursor-pointer"
                title="Edit"
              >
                <Edit2 size={14} />
              </button>
              <button className="p-1 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors cursor-pointer" title="Delete">
                <Trash2 size={14} />
              </button>
              <button className="p-1 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors cursor-pointer" title="More">
                <MoreVertical size={14} />
              </button>
            </div>
          )}
        />
      ) : (
        /* Grid View Cards */
        <div className="space-y-3">
          {/* Header Controls for Grid View */}
          <div className="bg-white p-3 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between">
            {headerActionsNode}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filteredReports.map((r) => (
              <div
                key={r.id}
                className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                      {r.module}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        r.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                          : 'bg-slate-100 text-slate-500 border border-slate-200'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${r.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                      {r.status}
                    </span>
                  </div>

                  <h4 className="text-[13px] font-bold text-slate-900 leading-tight pt-1">{r.name}</h4>
                  <div className="text-[11.5px] text-slate-500 space-y-0.5">
                    <p><span className="font-medium text-slate-400">Owner:</span> {r.owner}</p>
                    <p><span className="font-medium text-slate-400">Modified:</span> {r.modified}</p>
                    <p><span className="font-medium text-slate-400">Schedule:</span> {r.schedule}</p>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-1.5 pt-3 border-t border-slate-100 mt-3 text-slate-400">
                  <button
                    onClick={() => navigate('/admin/reports/builder')}
                    className="p-1 hover:text-indigo-600 hover:bg-indigo-50 rounded cursor-pointer"
                    title="View"
                  >
                    <Eye size={14} />
                  </button>
                  <button
                    onClick={() => navigate('/admin/reports/builder')}
                    className="p-1 hover:text-indigo-600 hover:bg-indigo-50 rounded cursor-pointer"
                    title="Edit"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button className="p-1 hover:text-rose-600 hover:bg-rose-50 rounded cursor-pointer" title="Delete">
                    <Trash2 size={14} />
                  </button>
                  <button className="p-1 hover:text-slate-700 hover:bg-slate-100 rounded cursor-pointer" title="More">
                    <MoreVertical size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Import Report Modal using Reusable Modal Component */}
      <Modal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        size="md"
        title={
          <div className="flex items-center gap-2">
            <FileCode size={18} className="text-indigo-600" />
            <span>Import Custom Report Template</span>
          </div>
        }
      >
        <form onSubmit={handleImportSubmit} className="space-y-4">
          <div className="border-2 border-dashed border-slate-200 hover:border-indigo-400 rounded-md p-6 flex flex-col items-center justify-center bg-slate-50/50 transition-colors">
            <Upload size={28} className="text-slate-400 mb-2" />
            <p className="text-[12px] font-medium text-slate-700 text-center">
              Drag and drop report definition file here, or{' '}
              <label className="text-indigo-600 font-bold hover:underline cursor-pointer">
                browse
                <input
                  type="file"
                  accept=".json,.xml,.csv"
                  className="hidden"
                  onChange={(e) => setImportFile(e.target.files?.[0] || null)}
                />
              </label>
            </p>
            <span className="text-[10px] text-slate-400 mt-1">Supports JSON, XML, CSV format templates</span>

            {importFile && (
              <div className="mt-3 p-2 bg-indigo-50 border border-indigo-100 rounded text-[11.5px] text-indigo-700 font-medium flex items-center gap-1.5">
                <FileCheck size={14} />
                <span>{importFile.name}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsImportModalOpen(false)}
              className="px-3.5 py-1.5 text-[12px] font-semibold text-slate-600 hover:bg-slate-100 rounded-md cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!importFile}
              className="px-4 py-1.5 text-[12px] font-semibold bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 cursor-pointer shadow-2xs"
            >
              Import Template
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  Mail,
  Clock,
  Plus,
  Edit2,
  Play,
  Trash2,
  MoreVertical,
  ArrowUpRight,
  LayoutGrid,
  List,
} from 'lucide-react';
import DataTable, { Column } from '@/shared/components/tables/data-table';
import Select from '@/shared/components/ui/select';

export default function ScheduledReportsPage() {
  const [selectedModule, setSelectedModule] = useState('all');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const moduleOptions = [
    { id: 'all', name: 'All Modules' },
    { id: 'sales', name: 'Sales' },
    { id: 'finance', name: 'Finance' },
    { id: 'projects', name: 'Projects' },
    { id: 'hr', name: 'HR' },
    { id: 'inventory', name: 'Inventory' },
  ];

  // Top 4 KPI Cards
  const kpis = [
    { label: 'Total Scheduled', val: '32', change: '9.6%', isPos: true, icon: Calendar, color: 'bg-blue-50 text-blue-600 border-blue-100' },
    { label: 'Active Schedules', val: '24', change: '10.2%', isPos: true, icon: CheckCircle2, color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
    { label: 'Emails Sent (This Month)', val: '156', change: '15.7%', isPos: true, icon: Mail, color: 'bg-purple-50 text-purple-600 border-purple-100' },
    { label: 'Next Run (Overall)', val: 'Today, 11:00 AM', change: '', isPos: true, icon: Clock, color: 'bg-amber-50 text-amber-600 border-amber-100', isTextVal: true },
  ];

  // Scheduled Items
  const schedules = [
    { id: 1, name: 'Daily Sales Summary', module: 'Sales', freq: 'Daily at 09:00 AM', next: 'Today, 09:00 AM', recipient: 'sales@company.com', status: 'Active' },
    { id: 2, name: 'Weekly Revenue Report', module: 'Finance', freq: 'Every Monday, 08:00 AM', next: 'Jun 02, 2025 08:00 AM', recipient: 'finance@company.com', status: 'Active' },
    { id: 3, name: 'Monthly Collection Report', module: 'Finance', freq: '1st Day of Month, 10:00 AM', next: 'Jun 01, 2025 10:00 AM', recipient: 'accounts@company.com', status: 'Active' },
    { id: 4, name: 'Project Progress Report', module: 'Projects', freq: 'Every Friday, 05:00 PM', next: 'May 30, 2025 05:00 PM', recipient: 'pm@company.com', status: 'Active' },
    { id: 5, name: 'Employee Attendance Summary', module: 'HR', freq: 'Daily at 08:30 AM', next: 'Today, 08:30 AM', recipient: 'hr@company.com', status: 'Active' },
    { id: 6, name: 'Inventory Status Report', module: 'Inventory', freq: 'Daily at 11:00 AM', next: 'Today, 11:00 AM', recipient: 'inventory@company.com', status: 'Paused' },
  ];

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
      id: 'freq',
      label: 'Frequency',
      render: (item) => <span className="text-slate-600">{item.freq}</span>,
    },
    {
      id: 'next',
      label: 'Next Run',
      render: (item) => <span className="text-slate-700 font-medium">{item.next}</span>,
    },
    {
      id: 'recipient',
      label: 'Recipient(s)',
      render: (item) => <span className="font-mono text-[11.5px] text-indigo-600">{item.recipient}</span>,
    },
    {
      id: 'status',
      label: 'Status',
      render: (item) => (
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-bold ${item.status === 'Active'
            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
            : 'bg-amber-50 text-amber-600 border border-amber-200'
            }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
          {item.status}
        </span>
      ),
    },
  ];

  const filteredSchedules = selectedModule === 'all'
    ? schedules
    : schedules.filter((s) => s.module.toLowerCase() === selectedModule.toLowerCase());

  // Custom Header Actions inside Table Toolbar
  const headerActionsNode = (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5">
        <span className="text-[11.5px] font-medium text-slate-500 whitespace-nowrap"></span>
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
            className={`p-1 rounded transition-colors cursor-pointer ${viewMode === 'grid' ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-400 hover:text-slate-600'
              }`}
            title="Grid View"
          >
            <LayoutGrid size={14} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-1 rounded transition-colors cursor-pointer ${viewMode === 'list' ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-400 hover:text-slate-600'
              }`}
            title="Table View"
          >
            <List size={14} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full p-4 md:p-6 bg-[#F8FAFC] space-y-4 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-[11.5px] text-slate-400 font-medium mb-1">
            <span>Reports</span>
            <span>&gt;</span>
            <span className="text-slate-600 font-semibold">Scheduled Reports</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Scheduled Reports</h1>
          <p className="text-[12.5px] text-slate-500 font-normal mt-0.5">
            Manage your scheduled and automated reports
          </p>
        </div>

        <button className="px-3.5 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-[12px] font-semibold transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer">
          <Plus size={15} />
          <span>Schedule New Report</span>
        </button>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="bg-white p-3.5 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-[11px] font-medium text-slate-500 block mb-0.5">{kpi.label}</span>
                <span className={`${kpi.isTextVal ? 'text-[15px]' : 'text-[20px]'} font-black text-slate-900 leading-tight block`}>
                  {kpi.val}
                </span>
                {kpi.change ? (
                  <span className="inline-flex items-center gap-0.5 text-[10.5px] font-bold text-emerald-600 mt-1">
                    <ArrowUpRight size={12} />
                    <span>{kpi.change}</span>
                    <span className="text-slate-400 font-normal ml-0.5">vs last month</span>
                  </span>
                ) : (
                  <span className="text-[10.5px] text-slate-400 block mt-1">Automated Schedule</span>
                )}
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
          data={filteredSchedules}
          columns={columns}
          searchPlaceholder="Search schedules..."
          keyExtractor={(item) => item.id}
          customHeaderActions={headerActionsNode}
          onDeleteSelected={(ids) => alert(`Deleted schedules with IDs: ${ids.join(', ')}`)}
          actions={(item) => (
            <div className="flex items-center justify-center gap-1 text-slate-400">
              <button className="p-1 hover:text-indigo-600 hover:bg-indigo-50 rounded cursor-pointer" title="Edit">
                <Edit2 size={14} />
              </button>
              <button className="p-1 hover:text-emerald-600 hover:bg-emerald-50 rounded cursor-pointer" title="Run Now">
                <Play size={14} />
              </button>
              <button className="p-1 hover:text-rose-600 hover:bg-rose-50 rounded cursor-pointer" title="Delete">
                <Trash2 size={14} />
              </button>
              <button className="p-1 hover:text-slate-700 hover:bg-slate-100 rounded cursor-pointer" title="More">
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
            {filteredSchedules.map((s) => (
              <div
                key={s.id}
                className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                      {s.module}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${s.status === 'Active'
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                        : 'bg-amber-50 text-amber-600 border border-amber-200'
                        }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${s.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      {s.status}
                    </span>
                  </div>

                  <h4 className="text-[13px] font-bold text-slate-900 leading-tight pt-1">{s.name}</h4>
                  <div className="text-[11.5px] text-slate-500 space-y-0.5">
                    <p><span className="font-medium text-slate-400">Frequency:</span> {s.freq}</p>
                    <p><span className="font-medium text-slate-400">Next Run:</span> {s.next}</p>
                    <p><span className="font-medium text-slate-400">Recipient:</span> <span className="font-mono text-indigo-600">{s.recipient}</span></p>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-1.5 pt-3 border-t border-slate-100 mt-3 text-slate-400">
                  <button className="p-1 hover:text-indigo-600 hover:bg-indigo-50 rounded cursor-pointer" title="Edit">
                    <Edit2 size={14} />
                  </button>
                  <button className="p-1 hover:text-emerald-600 hover:bg-emerald-50 rounded cursor-pointer" title="Run Now">
                    <Play size={14} />
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
    </div>
  );
}

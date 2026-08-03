import React, { useState } from 'react';
import DataTable, { Column } from '@/shared/components/tables/data-table';
import Select from '@/shared/components/ui/select';
import Input from '@/shared/components/ui/input';
import Button from '@/shared/components/ui/button';

export default function ActivityLogsList() {
  const [userFilter, setUserFilter] = useState('All Users');
  const [moduleFilter, setModuleFilter] = useState('All Modules');
  const [actionFilter, setActionFilter] = useState('All Actions');

  const data = [
    { id: 1, name: 'John Doe', module: 'Users', action: 'iCreate', description: 'Created new user: Jane Smith', date: '10 May 2024, 10:30 AM', ip: '192.168.1.1' },
    { id: 2, name: 'Jane Smith', module: 'Users', action: 'iUpdate', description: 'Updated user profile', date: '10 May 2024, 10:28 AM', ip: '192.168.1.2' },
    { id: 3, name: 'Robert Brown', module: 'Users', action: 'iUpdate', description: 'Changed user status', date: '10 May 2024, 10:23 AM', ip: '192.168.1.3' },
    { id: 4, name: 'Emily Davis', module: 'Users', action: 'Reset Password', description: 'Reset password for user', date: '10 May 2024, 10:20 AM', ip: '192.168.1.4' },
    { id: 5, name: 'Michael Wilson', module: 'Settings', action: 'iUpdate', description: 'Changed system settings', date: '10 May 2024, 10:15 AM', ip: '192.168.1.5' },
  ];

  const columns: Column[] = [
    {
      id: 'name',
      label: 'User',
      render: (item) => (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">
            {item.name.substring(0, 2).toUpperCase()}
          </div>
          <span className="font-bold text-slate-800 text-xs">{item.name}</span>
        </div>
      ),
    },
    { id: 'module', label: 'Module', render: (item) => <span className="text-xs font-semibold text-slate-700">{item.module}</span> },
    {
      id: 'action',
      label: 'Action',
      render: (item) => (
        <span className="px-2 py-0.5 text-[11px] font-semibold rounded bg-indigo-50 text-indigo-600 border border-indigo-200 font-mono">
          {item.action}
        </span>
      ),
    },
    { id: 'description', label: 'Description', render: (item) => <span className="text-xs text-slate-600">{item.description}</span> },
    { id: 'date', label: 'Date & Time', render: (item) => <span className="font-mono text-xs text-slate-500">{item.date}</span> },
    { id: 'ip', label: 'IP Address', render: (item) => <span className="font-mono text-xs text-slate-600">{item.ip}</span> },
  ];

  const renderFilters = (
    <div className="flex flex-wrap items-center gap-3">
      <div className="w-full sm:w-[180px]">
        <Input label="Date Range" type="text" defaultValue="01 May 2024 - 10 May 2024" />
      </div>
      <div className="w-full sm:w-[140px]">
        <Select label="User" value={userFilter} onChange={(e) => setUserFilter(e.target.value)} options={[
          { label: 'All Users', value: 'All Users' },
        ]} />
      </div>
      <div className="w-full sm:w-[140px]">
        <Select label="Module" value={moduleFilter} onChange={(e) => setModuleFilter(e.target.value)} options={[
          { label: 'All Modules', value: 'All Modules' },
        ]} />
      </div>
      <div className="w-full sm:w-[140px]">
        <Select label="Action" value={actionFilter} onChange={(e) => setActionFilter(e.target.value)} options={[
          { label: 'All Actions', value: 'All Actions' },
        ]} />
      </div>
      <div className="mt-5">
        <Button className="bg-indigo-600 text-white">Filter</Button>
      </div>
    </div>
  );

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-24 space-y-6">
      <div>
        <h1 className="text-[22px] font-bold text-slate-900">Activity Logs</h1>
        <p className="text-xs text-slate-500 mt-0.5">Home / User Management / Activity Logs</p>
      </div>

      <DataTable
        data={data}
        columns={columns}
        searchPlaceholder="Search activity logs..."
        filterContent={renderFilters}
      />
    </div>
  );
}

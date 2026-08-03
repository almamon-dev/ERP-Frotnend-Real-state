import React, { useState } from 'react';
import DataTable, { Column } from '@/shared/components/tables/data-table';
import Select from '@/shared/components/ui/select';
import Input from '@/shared/components/ui/input';
import Button from '@/shared/components/ui/button';

export default function LoginHistoryList() {
  const [userFilter, setUserFilter] = useState('All Users');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const data = [
    { id: 1, name: 'John Doe', ip: '192.168.1.1', browser: 'Chrome', device: 'Windows 10', loginTime: '10 May 2024, 10:30 AM', logoutTime: '18 May 2024, 04:30 PM', status: 'Success' },
    { id: 2, name: 'Jane Smith', ip: '192.168.1.2', browser: 'Firefox', device: 'Windows 10', loginTime: '10 May 2024, 10:28 AM', logoutTime: '18 May 2024, 05:10 PM', status: 'Success' },
    { id: 3, name: 'Robert Brown', ip: '192.168.1.3', browser: 'Safari', device: 'macOS', loginTime: '10 May 2024, 10:23 AM', logoutTime: '18 May 2024, 03:40 PM', status: 'Success' },
    { id: 4, name: 'Emily Davis', ip: '192.168.1.4', browser: 'Chrome', device: 'Android', loginTime: '10 May 2024, 10:20 AM', logoutTime: '-', status: 'Logged In' },
    { id: 5, name: 'Michael Wilson', ip: '192.168.1.5', browser: 'Edge', device: 'Windows 10', loginTime: '10 May 2024, 10:15 AM', logoutTime: '18 May 2024, 02:15 PM', status: 'Success' },
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
    { id: 'ip', label: 'IP Address', render: (item) => <span className="font-mono text-xs text-slate-600">{item.ip}</span> },
    { id: 'browser', label: 'Browser', render: (item) => <span className="text-xs text-slate-600">{item.browser}</span> },
    { id: 'device', label: 'Device', render: (item) => <span className="text-xs text-slate-600">{item.device}</span> },
    { id: 'loginTime', label: 'Login Time', render: (item) => <span className="font-mono text-xs text-slate-500">{item.loginTime}</span> },
    { id: 'logoutTime', label: 'Logout Time', render: (item) => <span className="font-mono text-xs text-slate-500">{item.logoutTime}</span> },
    {
      id: 'status',
      label: 'Status',
      render: (item) => (
        <span className={`px-2 py-0.5 text-[11px] font-semibold rounded-full ${item.status === 'Logged In' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'}`}>
          {item.status}
        </span>
      ),
    },
  ];

  const renderFilters = (
    <div className="flex flex-wrap items-center gap-3">
      <div className="w-full sm:w-[180px]">
        <Input label="Date Range" type="text" defaultValue="01 May 2024 - 10 May 2024" />
      </div>
      <div className="w-full sm:w-[150px]">
        <Select label="User" value={userFilter} onChange={(e) => setUserFilter(e.target.value)} options={[
          { label: 'All Users', value: 'All Users' },
          { label: 'John Doe', value: 'John Doe' },
        ]} />
      </div>
      <div className="w-full sm:w-[140px]">
        <Select label="Status" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} options={[
          { label: 'All Status', value: 'All Status' },
          { label: 'Success', value: 'Success' },
          { label: 'Logged In', value: 'Logged In' },
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
        <h1 className="text-[22px] font-bold text-slate-900">Login History</h1>
        <p className="text-xs text-slate-500 mt-0.5">Home / User Management / Login History</p>
      </div>

      <DataTable
        data={data}
        columns={columns}
        searchPlaceholder="Search login history..."
        filterContent={renderFilters}
      />
    </div>
  );
}

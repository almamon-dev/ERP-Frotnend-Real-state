import React, { useState } from 'react';
import { Sliders, Plus } from 'lucide-react';
import DataTable, { Column } from '@/shared/components/tables/data-table';
import Button from '@/shared/components/ui/button';
import TableActions from '@/shared/components/tables/table-actions';

interface CustomReport {
  id: string;
  name: string;
  module: string;
  createdBy: string;
  createdAt: string;
  status: string;
}

export default function CustomReportsPage() {
  const [reports, setReports] = useState<CustomReport[]>([
    { id: 'CR-101', name: 'Lead Conversion Ratio', module: 'CRM', createdBy: 'Admin User', createdAt: '25 Jul 2026', status: 'Active' },
    { id: 'CR-102', name: 'Project Milestone Delay', module: 'Projects', createdBy: 'Manager', createdAt: '20 Jul 2026', status: 'Active' },
  ]);

  const columns: Column<CustomReport>[] = [
    { id: 'id', label: 'ID', render: (item) => <span className="font-mono text-slate-500 text-[12px]">{item.id}</span> },
    { id: 'name', label: 'Report Name', render: (item) => <span className="font-bold text-slate-900 text-[13px]">{item.name}</span> },
    { id: 'module', label: 'Module' },
    { id: 'createdBy', label: 'Created By' },
    { id: 'createdAt', label: 'Created Date' },
    {
      id: 'actions',
      label: 'Actions',
      render: (item) => (
        <TableActions item={item}
          onView={() => alert(`View ${item.name}`)}
          onExport={() => alert(`Export ${item.name}`)}
          onEdit={() => alert(`Edit ${item.name}`)}
          onDelete={() => setReports((prev) => prev.filter((r) => r.id !== item.id))}
        />
      ),
    },
  ];

  return (
    <div className="p-4 md:p-6 mx-auto bg-[#F4F6F9] min-h-screen text-slate-800 space-y-4">
      <div className="flex justify-between items-center border-b pb-3">
        <h1 className="text-[19px] font-bold text-slate-900 flex items-center gap-2">
          <Sliders size={22} className="text-indigo-600" /> Custom Reports Studio
        </h1>
        <Button className="bg-indigo-600 text-white flex items-center gap-1.5 text-[12px]"><Plus size={16} /> New Custom Report</Button>
      </div>
      <DataTable data={reports} columns={columns} searchPlaceholder="Search custom reports..." />
    </div>
  );
}

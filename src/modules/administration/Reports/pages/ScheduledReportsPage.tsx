import React, { useState } from 'react';
import { Calendar, Plus } from 'lucide-react';
import DataTable, { Column } from '@/shared/components/tables/data-table';
import Button from '@/shared/components/ui/button';
import { ScheduledReport } from './ScheduledReports/types';
import { INITIAL_SCHEDULED_REPORTS } from './ScheduledReports/mockData';
import TableActions from '@/shared/components/tables/table-actions';

export default function ScheduledReportsPage() {
  const [reports, setReports] = useState<ScheduledReport[]>(INITIAL_SCHEDULED_REPORTS);

  const columns: Column<ScheduledReport>[] = [
    { id: 'id', label: 'ID', render: (item) => <span className="font-mono text-[12px] text-slate-500">{item.id}</span> },
    { id: 'name', label: 'Report Name', render: (item) => <span className="font-bold text-slate-900 text-[13px]">{item.name}</span> },
    { id: 'reportType', label: 'Type' },
    { id: 'frequency', label: 'Frequency' },
    { id: 'nextRun', label: 'Next Execution', render: (item) => <span className="text-[12px] text-slate-600">{item.nextRun}</span> },
    { id: 'format', label: 'Format', render: (item) => <span className="px-2 py-0.5 text-[11px] font-mono bg-slate-100 rounded text-slate-700">{item.format}</span> },
    { id: 'status', label: 'Status', render: (item) => <span className={`px-2 py-0.5 text-[11px] rounded-full ${item.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{item.status}</span> },
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
        <div>
          <h1 className="text-[19px] font-bold text-slate-900 flex items-center gap-2">
            <Calendar size={22} className="text-indigo-600" /> Scheduled Automated Reports
          </h1>
        </div>
        <Button className="bg-indigo-600 text-white flex items-center gap-1.5">
          <Plus size={16} /> Schedule New Report
        </Button>
      </div>

      <DataTable data={reports} columns={columns} searchPlaceholder="Search scheduled reports..." />
    </div>
  );
}

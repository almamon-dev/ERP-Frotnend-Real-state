import React, { useState } from 'react';
import DataTable, { Column } from '@/shared/components/tables/data-table';
import { ReportItem } from '../types';
import { ReportsHeaderSection } from '../sections/ReportsHeaderSection';
import { ReportKpiCardsSection } from '../sections/ReportKpiCardsSection';
import TableActions from '@/shared/components/tables/table-actions';

export default function AdminReportsOverviewPage() {
  const [reports, setReports] = useState<ReportItem[]>([
    { id: '1', name: 'Monthly Financial Audit', category: 'Finance', frequency: 'Monthly', lastGenerated: '01 Aug 2026', format: 'PDF', status: 'Ready' },
    { id: '2', name: 'Property Inventory Summary', category: 'Inventory', frequency: 'Weekly', lastGenerated: '02 Aug 2026', format: 'Excel', status: 'Ready' },
    { id: '3', name: 'User Access Log Audit', category: 'Security', frequency: 'Daily', lastGenerated: 'Today', format: 'CSV', status: 'Ready' },
    { id: '4', name: 'Sales & Booking Performance', category: 'Sales', frequency: 'Monthly', lastGenerated: '28 Jul 2026', format: 'PDF', status: 'Ready' },
  ]);

  const columns: Column<ReportItem>[] = [
    { id: 'name', label: 'Report Name', render: (item) => <span className="font-bold text-slate-900 text-[13px]">{item.name}</span> },
    { id: 'category', label: 'Category' },
    { id: 'frequency', label: 'Frequency' },
    { id: 'lastGenerated', label: 'Last Generated' },
    { id: 'format', label: 'Format', render: (item) => <span className="px-2 py-0.5 text-[11px] font-mono bg-slate-100 text-slate-700 rounded">{item.format}</span> },
    { id: 'status', label: 'Status', render: (item) => <span className="px-2 py-0.5 text-[11px] bg-emerald-50 text-emerald-600 rounded-full">{item.status}</span> },
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
      <ReportsHeaderSection onNewReport={() => alert('Opening Custom Report Builder')} />
      <ReportKpiCardsSection />
      <DataTable data={reports} columns={columns} searchPlaceholder="Search report name or category..." />
    </div>
  );
}

import React, { useState } from 'react';
import { Copy, Plus } from 'lucide-react';
import DataTable, { Column } from '@/shared/components/tables/data-table';
import Button from '@/shared/components/ui/button';
import TableActions from '@/shared/components/tables/table-actions';

interface TemplateItem {
  id: string;
  name: string;
  category: string;
  usageCount: number;
}

export default function ReportTemplatesPage() {
  const [templates, setTemplates] = useState<TemplateItem[]>([
    { id: 'T-01', name: 'Standard Balance Sheet Template', category: 'Accounts', usageCount: 42 },
    { id: 'T-02', name: 'Weekly Booking Register Template', category: 'Sales', usageCount: 88 },
  ]);

  const columns: Column<TemplateItem>[] = [
    { id: 'id', label: 'ID', render: (item) => <span className="font-mono text-slate-500 text-[12px]">{item.id}</span> },
    { id: 'name', label: 'Template Name', render: (item) => <span className="font-bold text-slate-900 text-[13px]">{item.name}</span> },
    { id: 'category', label: 'Category' },
    { id: 'usageCount', label: 'Usage Count' },
    {
      id: 'actions',
      label: 'Actions',
      render: (item) => (
        <TableActions item={item}
          onView={() => alert(`View ${item.name}`)}
          onExport={() => alert(`Export ${item.name}`)}
          onEdit={() => alert(`Edit ${item.name}`)}
          onDelete={() => setTemplates((prev) => prev.filter((t) => t.id !== item.id))}
        />
      ),
    },
  ];

  return (
    <div className="p-4 md:p-6 mx-auto bg-[#F4F6F9] min-h-screen text-slate-800 space-y-4">
      <div className="flex justify-between items-center border-b pb-3">
        <h1 className="text-[19px] font-bold text-slate-900 flex items-center gap-2">
          <Copy size={22} className="text-indigo-600" /> Report Templates Library
        </h1>
        <Button className="bg-indigo-600 text-white flex items-center gap-1.5 text-[12px]"><Plus size={16} /> Create Template</Button>
      </div>
      <DataTable data={templates} columns={columns} searchPlaceholder="Search templates..." />
    </div>
  );
}

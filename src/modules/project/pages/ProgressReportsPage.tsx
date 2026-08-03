import React, { useState } from 'react';
import { Plus, Eye, Edit3, Trash2 } from 'lucide-react';
import DataTable from '@/shared/components/tables/data-table';
import ProgressModal from '../components/progress/ProgressModal';

export default function ProgressReportsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reports, setReports] = useState([
    { id: '1', reportCode: 'PRG-2026-081', projectRef: 'Gulshan Crown Heights', stage: 'Foundation & Piling', progressPercent: 35, inspector: 'Engr. Masud Alam', date: '02 Aug 2026', status: 'Approved' },
    { id: '2', reportCode: 'PRG-2026-082', projectRef: 'Banani Imperial Heights', stage: '5th Floor Slab Casting', progressPercent: 62, inspector: 'Engr. Tanvir Ahmed', date: '03 Aug 2026', status: 'Pending Review' },
  ]);

  const columns = [
    {
      id: 'reportCode',
      label: 'Report Code, Project & Stage',
      render: (item: any) => (
        <div className="flex items-center gap-2 whitespace-nowrap text-[13px]">
          <span className="font-bold text-[#111827]">#{item.reportCode}</span>
          <span className="font-bold text-[#111827]">{item.projectRef}</span>
          <span className="text-[#6B7280] font-normal">({item.stage})</span>
        </div>
      ),
    },
    {
      id: 'progressPercent',
      label: 'Progress %',
      render: (item: any) => (
        <div className="w-28">
          <div className="flex justify-between text-[11.5px] font-bold text-slate-700 mb-1">
            <span>{item.progressPercent}%</span>
          </div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#006837] h-full rounded-full" style={{ width: `${item.progressPercent}%` }} />
          </div>
        </div>
      ),
    },
    {
      id: 'inspector',
      label: 'Inspector & Date',
      render: (item: any) => (
        <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px]">
          <span className="font-bold text-[#111827]">{item.inspector}</span>
          <span className="text-slate-500 font-normal">({item.date})</span>
        </div>
      ),
    },
    {
      id: 'status',
      label: 'Status',
      render: (item: any) => (
        <span className={`px-2.5 py-0.5 border text-[11px] font-bold rounded-full ${item.status === 'Approved' ? 'bg-emerald-50 border-emerald-200 text-[#006837]' : 'bg-amber-50 border-amber-200 text-amber-700'}`}>
          {item.status}
        </span>
      ),
    },
    {
      id: 'actions',
      label: 'Actions',
      render: (item: any) => (
        <div className="flex items-center justify-end gap-1.5">
          <button title="View Report" className="w-7 h-7 bg-[#6B7280] hover:bg-slate-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
            <Eye size={13} />
          </button>
          <button title="Edit Report" className="w-7 h-7 bg-[#2563EB] hover:bg-blue-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
            <Edit3 size={13} />
          </button>
          <button title="Delete Report" onClick={() => setReports(prev => prev.filter(r => r.id !== item.id))} className="w-7 h-7 bg-[#FF4D4F] hover:bg-rose-600 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
            <Trash2 size={13} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">Site Progress Reports</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">
            Land & Project / Project Management / Progress Reports
          </p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="px-3.5 py-1.5 bg-[#006837] text-white text-xs font-semibold rounded-[4px] hover:bg-[#00522b] flex items-center gap-1.5">
          <Plus size={14} /> Log Progress Report
        </button>
      </div>

      <DataTable data={reports} columns={columns} searchPlaceholder="Search progress reports by code, project, inspector..." />
      <ProgressModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={(item) => setReports(prev => [...prev, item])} />
    </div>
  );
}

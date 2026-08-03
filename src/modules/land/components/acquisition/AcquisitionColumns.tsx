import React from 'react';
import { ShoppingCart, UserCheck, Edit3, Trash2 } from 'lucide-react';
import { Column } from '@/shared/components/tables/data-table';
import StatusBadge from '@/shared/components/ui/status-badge';
import { AcquisitionItem } from '../../types/acquisition';

export const getAcquisitionColumns = (): Column<AcquisitionItem>[] => [
  {
    id: 'acqCode',
    label: 'Acquisition Code',
    render: (item) => <span className="font-mono font-bold text-[#111827]">{item.acqCode}</span>,
  },
  {
    id: 'projectTitle',
    label: 'Project & Land Title',
    render: (item) => (
      <div>
        <div className="font-bold text-[#111827] text-xs flex items-center gap-1.5">
          <ShoppingCart size={14} className="text-[#006837]" /> {item.projectTitle}
        </div>
        <div className="text-[11px] text-[#6B7280] flex items-center gap-1 mt-0.5">
          <UserCheck size={11} /> Seller: {item.sellerName}
        </div>
      </div>
    ),
  },
  {
    id: 'totalAgreedValue',
    label: 'Financial Details',
    render: (item) => (
      <div className="text-xs">
        <div className="font-extrabold text-[#006837]">Total: {item.totalAgreedValue}</div>
        <div className="text-[11px] text-slate-500">Paid: {item.advancePaid} | Due: <span className="font-semibold text-rose-600">{item.balanceDue}</span></div>
      </div>
    ),
  },
  {
    id: 'phase',
    label: 'Acquisition Phase',
    render: (item) => (
      <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded ${
        item.phase === 'Completed' ? 'bg-emerald-50 text-[#006837] border border-emerald-200' :
        item.phase === 'Deed Signed' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
        item.phase === 'Due Diligence' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
        'bg-slate-100 text-slate-700 border border-slate-200'
      }`}>
        {item.phase}
      </span>
    ),
  },
  {
    id: 'legalStatus',
    label: 'Legal Status',
    render: (item) => <StatusBadge status={item.legalStatus === 'Clear Title' ? 'Active' : 'Pending'} />,
  },
  {
    id: 'targetDate',
    label: 'Target Date',
    render: (item) => <span className="font-medium text-[#4B5563] text-xs">{item.targetDate}</span>,
  },
  {
    id: 'actions',
    label: 'Actions',
    render: () => (
      <div className="flex items-center justify-end gap-1.5">
        <button className="w-7 h-7 bg-[#2563EB] hover:bg-blue-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
          <Edit3 size={13} />
        </button>
        <button className="w-7 h-7 bg-[#FF4D4F] hover:bg-rose-600 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
          <Trash2 size={13} />
        </button>
      </div>
    ),
  },
];

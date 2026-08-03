import React from 'react';
import { FileCheck, Calendar, Download, Edit3, Trash2 } from 'lucide-react';
import { Column } from '@/shared/components/tables/data-table';
import StatusBadge from '@/shared/components/ui/status-badge';
import { LandDocumentItem } from '../../types/documents';

export const getDocumentColumns = (): Column<LandDocumentItem>[] => [
  {
    id: 'docCode',
    label: 'Doc ID',
    render: (item) => <span className="font-mono font-bold text-[#111827]">{item.docCode}</span>,
  },
  {
    id: 'docType',
    label: 'Document Type & Reference',
    render: (item) => (
      <div>
        <div className="font-bold text-[#111827] text-xs flex items-center gap-1.5">
          <FileCheck size={14} className="text-[#006837]" /> {item.docType}
        </div>
        <div className="text-[11px] text-[#6B7280] mt-0.5">Plot: {item.landReference}</div>
      </div>
    ),
  },
  {
    id: 'mouzaKhatian',
    label: 'Mouza & Khatian',
    render: (item) => <span className="text-xs font-mono font-medium text-slate-700">{item.mouzaKhatian}</span>,
  },
  {
    id: 'issueDate',
    label: 'Issue & Expiry Date',
    render: (item) => (
      <div className="text-xs">
        <div className="font-semibold text-slate-800 flex items-center gap-1">
          <Calendar size={11} className="text-slate-400" /> Issue: {item.issueDate}
        </div>
        <div className="text-[11px] text-slate-500">Expiry: {item.expiryDate}</div>
      </div>
    ),
  },
  {
    id: 'verificationStatus',
    label: 'Verification Status',
    render: (item) => (
      <StatusBadge status={item.verificationStatus === 'Verified' ? 'Active' : item.verificationStatus === 'Disputed' ? 'Rejected' : 'Pending'} />
    ),
  },
  {
    id: 'actions',
    label: 'Actions',
    render: () => (
      <div className="flex items-center justify-end gap-1.5">
        <button title="Download Document" className="w-7 h-7 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-[4px] flex items-center justify-center transition-colors">
          <Download size={13} />
        </button>
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

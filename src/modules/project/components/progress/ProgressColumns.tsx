import React from 'react';
import { FileText, User, Calendar, Camera, Edit3, Trash2 } from 'lucide-react';
import { Column } from '@/shared/components/tables/data-table';
import StatusBadge from '@/shared/components/ui/status-badge';
import { ProgressReportItem } from '../../types/progress';

export const getProgressColumns = (): Column<ProgressReportItem>[] => [
  {
    id: 'reportCode',
    label: 'Code',
    render: (item) => <span className="font-mono font-bold text-[#111827] text-xs">{item.reportCode}</span>,
  },
  {
    id: 'title',
    label: 'Title, Project & Milestone',
    render: (item) => (
      <div>
        <div className="font-bold text-[#111827] text-xs flex items-center gap-1.5">
          <FileText size={14} className="text-[#006837]" /> {item.title}
        </div>
        <div className="text-[11px] text-[#6B7280] mt-0.5">
          <span className="font-medium text-slate-700">{item.projectRef}</span> • Target: <span className="italic">{item.milestoneRef}</span>
        </div>
      </div>
    ),
  },
  {
    id: 'reportedBy',
    label: 'Inspector & Date',
    render: (item) => (
      <div className="text-xs">
        <div className="font-semibold text-slate-800 flex items-center gap-1">
          <User size={11} className="text-slate-400" /> {item.reportedBy}
        </div>
        <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
          <Calendar size={11} /> {item.reportDate}
        </div>
      </div>
    ),
  },
  {
    id: 'weeklyProgress',
    label: 'Progress Gain & Attachments',
    render: (item) => (
      <div className="flex items-center gap-2">
        <span className="font-extrabold text-[#006837] text-xs bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          +{item.weeklyProgress}%
        </span>
        <span className="text-[11px] text-slate-500 flex items-center gap-1">
          <Camera size={12} className="text-slate-400" /> {item.photoCount || 4} Photos
        </span>
      </div>
    ),
  },
  {
    id: 'qualityStatus',
    label: 'Quality Audit',
    render: (item) => <StatusBadge status={item.qualityStatus === 'Approved' ? 'Active' : 'Pending'} />,
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

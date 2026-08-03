import React from 'react';
import { Flag, Calendar, Users, Edit3, Trash2 } from 'lucide-react';
import { Column } from '@/shared/components/tables/data-table';
import StatusBadge from '@/shared/components/ui/status-badge';
import { MilestoneItem } from '../../types/milestones';

export const getMilestoneColumns = (): Column<MilestoneItem>[] => [
  {
    id: 'milestoneCode',
    label: 'Code',
    render: (item) => <span className="font-mono font-bold text-[#111827] text-xs">{item.milestoneCode}</span>,
  },
  {
    id: 'title',
    label: 'Milestone Title & Project',
    render: (item) => (
      <div>
        <div className="font-bold text-[#111827] text-xs flex items-center gap-1.5">
          <Flag size={14} className="text-[#006837]" /> {item.title}
        </div>
        <div className="text-[11px] text-[#6B7280] mt-0.5">Project: {item.projectRef}</div>
      </div>
    ),
  },
  {
    id: 'assignedTeam',
    label: 'Target & Assigned Team',
    render: (item) => (
      <div className="text-xs">
        <div className="font-semibold text-slate-800 flex items-center gap-1">
          <Calendar size={11} className="text-slate-400" /> Target: {item.targetDate}
        </div>
        <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
          <Users size={11} /> {item.assignedTeam}
        </div>
      </div>
    ),
  },
  {
    id: 'completionPercent',
    label: 'Milestone Completion',
    render: (item) => (
      <div className="w-36">
        <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-1">
          <span>{item.completionPercent}%</span>
        </div>
        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
          <div className="bg-[#006837] h-full rounded-full transition-all duration-300" style={{ width: `${item.completionPercent}%` }} />
        </div>
      </div>
    ),
  },
  {
    id: 'status',
    label: 'Status',
    render: (item) => <StatusBadge status={item.completionPercent === 100 ? 'Active' : 'Pending'} />,
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

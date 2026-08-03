import React from 'react';
import { Eye, Edit3, Trash2, MapPin } from 'lucide-react';
import { Column } from '@/shared/components/tables/data-table';
import StatusBadge from '@/shared/components/ui/status-badge';
import { ProjectItem } from '../../types/projects';

export const getProjectColumns = (
  onEdit: (item: ProjectItem) => void,
  onDelete: (id: string) => void
): Column<ProjectItem>[] => [
    {
      id: 'name',
      label: 'Project Code, Title & Location',
      render: (item) => (
        <div className="py-0.5">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[13px] text-[#111827]">
              #{item.projectCode}
            </span>
            <span className="font-bold text-[#111827] text-[13px]">
              {item.name}
            </span>
          </div>
          <div className="text-[12px] text-[#6B7280] flex items-center gap-1 mt-0.5 font-medium">
            <MapPin size={11} className="text-slate-400" /> {item.location}
          </div>
        </div>
      ),
    },
    {
      id: 'milestones',
      label: 'Assigned Milestones',
      render: (item) => (
        <div>
          <div className="font-bold text-[#111827] text-[13px]">
            {item.milestones?.length || 2} Milestones
          </div>
          <div className="text-[12px] text-slate-500 font-medium truncate max-w-[180px] mt-0.5">
            {item.milestones?.map((m) => m.title).join(', ') || 'Foundation, Slab Casting'}
          </div>
        </div>
      ),
    },
    {
      id: 'contractor',
      label: 'Contractor & Layout',
      render: (item) => (
        <div>
          <div className="font-bold text-[#111827] text-[13px]">
            {item.contractor}
          </div>
          <div className="text-[12px] text-slate-500 font-medium mt-0.5">{item.totalFloors}</div>
        </div>
      ),
    },
    {
      id: 'totalBudget',
      label: 'Budget & Disbursed',
      render: (item) => (
        <div>
          <div className="font-extrabold text-[#111827] text-[13px]">{item.totalBudget}</div>
          <div className="text-[12px] text-slate-500 font-medium mt-0.5">Paid: {item.disbursedAmount}</div>
        </div>
      ),
    },
    {
      id: 'progressPercent',
      label: 'Progress & Target',
      render: (item) => (
        <div className="w-32">
          <div className="flex justify-between text-[11.5px] font-bold text-slate-700 mb-1">
            <span>{item.progressPercent}%</span>
            <span className="text-slate-400 font-normal">{item.completionDate}</span>
          </div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#006837] h-full rounded-full transition-all duration-300" style={{ width: `${item.progressPercent}%` }} />
          </div>
        </div>
      ),
    },
    {
      id: 'status',
      label: 'Status',
      render: (item) => <StatusBadge status={item.status} />,
    },
    {
      id: 'actions',
      label: 'Actions',
      render: (item) => (
        <div className="flex items-center justify-end gap-1.5">
          <button title="View Project" className="w-7 h-7 bg-[#6B7280] hover:bg-slate-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
            <Eye size={13} />
          </button>
          <button title="Edit Project" onClick={() => onEdit(item)} className="w-7 h-7 bg-[#2563EB] hover:bg-blue-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
            <Edit3 size={13} />
          </button>
          <button title="Delete Project" onClick={() => onDelete(item.id)} className="w-7 h-7 bg-[#FF4D4F] hover:bg-rose-600 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
            <Trash2 size={13} />
          </button>
        </div>
      ),
    },
  ];

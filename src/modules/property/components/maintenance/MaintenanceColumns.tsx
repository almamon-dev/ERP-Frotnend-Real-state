import React from 'react';
import { Eye, Edit3, Trash2 } from 'lucide-react';
import { Column } from '@/shared/components/tables/data-table';
import StatusBadge from '@/shared/components/ui/status-badge';
import { MaintenanceTicketItem } from '../../types/maintenance';

export const getMaintenanceColumns = (): Column<MaintenanceTicketItem>[] => [
  {
    id: 'category',
    label: 'Code, Issue & Unit Ref',
    render: (item) => (
      <div className="flex items-center gap-2 whitespace-nowrap text-[13px]">
        <span className="font-bold text-[#111827]">#{item.ticketCode}</span>
        <span className="font-bold text-[#111827]">{item.category}</span>
        <span className="text-[#6B7280] font-normal">({item.propertyRef} • Unit: {item.unitRef})</span>
      </div>
    ),
  },
  {
    id: 'assignedTechnician',
    label: 'Technician & Date',
    render: (item) => (
      <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px]">
        <span className="font-bold text-[#111827]">{item.assignedTechnician}</span>
        <span className="text-slate-500 font-normal">({item.reportedDate})</span>
      </div>
    ),
  },
  {
    id: 'estimatedCost',
    label: 'Cost Estimate',
    render: (item) => (
      <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px]">
        <span className="font-extrabold text-[#111827]">{item.estimatedCost}</span>
      </div>
    ),
  },
  {
    id: 'status',
    label: 'Status',
    render: (item) => <StatusBadge status={item.status === 'Resolved' ? 'Active' : 'Pending'} />,
  },
  {
    id: 'actions',
    label: 'Actions',
    render: () => (
      <div className="flex items-center justify-end gap-1.5">
        <button title="View Ticket" className="w-7 h-7 bg-[#6B7280] hover:bg-slate-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
          <Eye size={13} />
        </button>
        <button title="Edit Ticket" className="w-7 h-7 bg-[#2563EB] hover:bg-blue-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
          <Edit3 size={13} />
        </button>
        <button title="Delete Ticket" className="w-7 h-7 bg-[#FF4D4F] hover:bg-rose-600 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
          <Trash2 size={13} />
        </button>
      </div>
    ),
  },
];

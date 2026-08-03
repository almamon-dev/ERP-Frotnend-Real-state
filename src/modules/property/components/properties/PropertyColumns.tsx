import React from 'react';
import { Eye, Edit3, Trash2 } from 'lucide-react';
import { Column } from '@/shared/components/tables/data-table';
import StatusBadge from '@/shared/components/ui/status-badge';
import { PropertyItem } from '../../types/properties';

export const getPropertyColumns = (
  onEdit: (item: PropertyItem) => void,
  onDelete: (id: string) => void
): Column<PropertyItem>[] => [
  {
    id: 'name',
    label: 'Property Code, Title & Location',
    render: (item) => (
      <div className="flex items-center gap-2 whitespace-nowrap text-[13px]">
        <span className="font-bold text-[#111827]">#{item.propertyCode}</span>
        <span className="font-bold text-[#111827]">{item.name}</span>
        <span className="text-[#6B7280] font-normal">({item.location})</span>
      </div>
    ),
  },
  {
    id: 'totalFloors',
    label: 'Structure & RAJUK Approval',
    render: (item) => (
      <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px]">
        <span className="font-bold text-[#111827]">{item.totalFloors}</span>
        <span className="text-slate-500 font-normal">(RAJUK: {item.rajukApprovalNo})</span>
      </div>
    ),
  },
  {
    id: 'totalUnits',
    label: 'Units & Occupancy Rate',
    render: (item) => (
      <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px]">
        <span className="font-bold text-[#111827]">{item.totalUnits} Units</span>
        <span className="text-slate-500 font-normal">({item.occupancyRate} Occupied, {item.availableUnits} Available)</span>
      </div>
    ),
  },
  {
    id: 'marketValuation',
    label: 'Valuation & Handover',
    render: (item) => (
      <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px]">
        <span className="font-extrabold text-[#111827]">{item.marketValuation}</span>
        <span className="text-slate-500 font-normal">(Handover: {item.completionYear})</span>
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
        <button title="View Property" className="w-7 h-7 bg-[#6B7280] hover:bg-slate-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
          <Eye size={13} />
        </button>
        <button title="Edit Property" onClick={() => onEdit(item)} className="w-7 h-7 bg-[#2563EB] hover:bg-blue-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
          <Edit3 size={13} />
        </button>
        <button title="Delete Property" onClick={() => onDelete(item.id)} className="w-7 h-7 bg-[#FF4D4F] hover:bg-rose-600 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
          <Trash2 size={13} />
        </button>
      </div>
    ),
  },
];

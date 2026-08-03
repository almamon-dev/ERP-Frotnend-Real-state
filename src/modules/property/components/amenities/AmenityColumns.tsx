import React from 'react';
import { Eye, Edit3, Trash2 } from 'lucide-react';
import { Column } from '@/shared/components/tables/data-table';
import StatusBadge from '@/shared/components/ui/status-badge';
import { AmenityItem } from '../../types/amenities';

export const getAmenityColumns = (): Column<AmenityItem>[] => [
  {
    id: 'name',
    label: 'Code, Amenity Title & Category',
    render: (item) => (
      <div className="flex items-center gap-2 whitespace-nowrap text-[13px]">
        <span className="font-bold text-[#111827]">#{item.code}</span>
        <span className="font-bold text-[#111827]">{item.name}</span>
        <span className="text-[#6B7280] font-normal">({item.category})</span>
      </div>
    ),
  },
  {
    id: 'propertyRef',
    label: 'Assigned Property',
    render: (item) => (
      <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px]">
        <span className="font-bold text-[#111827]">{item.propertyRef}</span>
      </div>
    ),
  },
  {
    id: 'chargeType',
    label: 'Pricing & Charge Type',
    render: (item) => (
      <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px]">
        <span className="font-extrabold text-[#111827]">{item.amount}</span>
        <span className="text-slate-500 font-normal">({item.chargeType})</span>
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
    render: () => (
      <div className="flex items-center justify-end gap-1.5">
        <button title="View Amenity" className="w-7 h-7 bg-[#6B7280] hover:bg-slate-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
          <Eye size={13} />
        </button>
        <button title="Edit Amenity" className="w-7 h-7 bg-[#2563EB] hover:bg-blue-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
          <Edit3 size={13} />
        </button>
        <button title="Delete Amenity" className="w-7 h-7 bg-[#FF4D4F] hover:bg-rose-600 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
          <Trash2 size={13} />
        </button>
      </div>
    ),
  },
];

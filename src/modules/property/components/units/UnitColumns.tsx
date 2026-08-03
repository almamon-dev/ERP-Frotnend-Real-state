import React from 'react';
import { Eye, Edit3, Trash2 } from 'lucide-react';
import { Column } from '@/shared/components/tables/data-table';
import StatusBadge from '@/shared/components/ui/status-badge';
import { UnitItem } from '../../types/units';

export const getUnitColumns = (): Column<UnitItem>[] => [
  {
    id: 'unitNo',
    label: 'Unit No & Property',
    render: (item) => (
      <div className="flex items-center gap-2 whitespace-nowrap text-[13px]">
        <span className="font-bold text-[#111827]">#{item.unitNo}</span>
        <span className="text-[#6B7280] font-normal">({item.propertyRef})</span>
      </div>
    ),
  },
  {
    id: 'floorLevel',
    label: 'Floor, Facing & Layout',
    render: (item) => (
      <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px]">
        <span className="font-bold text-[#111827]">{item.floorLevel}</span>
        <span className="text-slate-500 font-normal">({item.facingDirection} • {item.layoutType})</span>
      </div>
    ),
  },
  {
    id: 'sizeSqFt',
    label: 'Size & Rate / Sq Ft',
    render: (item) => (
      <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px]">
        <span className="font-bold text-[#111827]">{item.sizeSqFt} sq ft</span>
        <span className="text-slate-500 font-normal">(@ {item.pricePerSqFt})</span>
      </div>
    ),
  },
  {
    id: 'totalPrice',
    label: 'Total Value & Parking',
    render: (item) => (
      <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px]">
        <span className="font-extrabold text-[#111827]">{item.totalPrice}</span>
        <span className="text-slate-500 font-normal">({item.parkingSlots})</span>
      </div>
    ),
  },
  {
    id: 'occupancyStatus',
    label: 'Status',
    render: (item) => <StatusBadge status={item.occupancyStatus === 'Available' ? 'Active' : 'Pending'} />,
  },
  {
    id: 'actions',
    label: 'Actions',
    render: () => (
      <div className="flex items-center justify-end gap-1.5">
        <button title="View Unit" className="w-7 h-7 bg-[#6B7280] hover:bg-slate-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
          <Eye size={13} />
        </button>
        <button title="Edit Unit" className="w-7 h-7 bg-[#2563EB] hover:bg-blue-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
          <Edit3 size={13} />
        </button>
        <button title="Delete Unit" className="w-7 h-7 bg-[#FF4D4F] hover:bg-rose-600 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
          <Trash2 size={13} />
        </button>
      </div>
    ),
  },
];

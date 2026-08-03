import React from 'react';
import { Landmark, MapPin, Edit3, Trash2 } from 'lucide-react';
import { Column } from '@/shared/components/tables/data-table';
import StatusBadge from '@/shared/components/ui/status-badge';
import { LandPlotItem } from '../../types/plots';

export const getPlotColumns = (): Column<LandPlotItem>[] => [
  {
    id: 'plotCode',
    label: 'Plot Code',
    render: (item) => <span className="font-mono font-bold text-[#111827]">{item.plotCode}</span>,
  },
  {
    id: 'name',
    label: 'Plot Name & Location',
    render: (item) => (
      <div>
        <div className="font-bold text-[#111827] text-xs flex items-center gap-1.5">
          <Landmark size={14} className="text-[#006837]" /> {item.name}
        </div>
        <div className="text-[11px] text-[#6B7280] flex items-center gap-1 mt-0.5">
          <MapPin size={11} /> {item.location}
        </div>
      </div>
    ),
  },
  {
    id: 'mouza',
    label: 'Mouza & Khatian',
    render: (item) => (
      <div>
        <div className="font-semibold text-[#111827] text-xs">{item.mouza}</div>
        <div className="text-[11px] text-[#6B7280] font-mono">{item.khatianNo}</div>
      </div>
    ),
  },
  {
    id: 'areaKatha',
    label: 'Plot Area',
    render: (item) => (
      <span className="font-bold text-[#111827] text-xs bg-slate-100 px-2 py-0.5 rounded">
        {item.areaKatha} Katha ({(item.areaKatha * 720).toLocaleString()} Sq. Ft)
      </span>
    ),
  },
  {
    id: 'zoning',
    label: 'Zoning Type',
    render: (item) => (
      <span className="px-2.5 py-0.5 text-[11px] font-bold rounded bg-blue-50 text-blue-700 border border-blue-200">
        {item.zoning}
      </span>
    ),
  },
  {
    id: 'valuation',
    label: 'Market Valuation',
    render: (item) => <span className="font-extrabold text-[#006837] text-xs">{item.valuation}</span>,
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

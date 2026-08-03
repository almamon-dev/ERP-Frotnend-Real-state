import React, { useState } from 'react';
import { Plus, Eye, Edit3, Trash2 } from 'lucide-react';
import DataTable from '@/shared/components/tables/data-table';
import BuildingModal from '../components/buildings/BuildingModal';

export default function BuildingsPage() {
  const [isBldModalOpen, setIsBldModalOpen] = useState(false);
  const [buildings, setBuildings] = useState([
    { id: '1', projectRef: 'Gulshan Crown Heights', buildingCode: 'BLD-01', buildingName: 'Tower A (Executive Block)', tower: 'East Wing', floors: '22 Floors', units: '44 Units', status: 'Active' },
    { id: '2', projectRef: 'Banani Imperial Heights', buildingCode: 'BLD-02', buildingName: 'Tower B (Commercial Suite)', tower: 'West Wing', floors: '16 Floors', units: '60 Units', status: 'Active' },
  ]);

  const buildingColumns = [
    {
      id: 'buildingName',
      label: 'Building Code, Name & Project',
      render: (item: any) => (
        <div className="flex items-center gap-2 whitespace-nowrap text-[13px]">
          <span className="font-bold text-[#111827]">#{item.buildingCode}</span>
          <span className="font-bold text-[#111827]">{item.buildingName}</span>
          <span className="text-[#6B7280] font-normal">({item.projectRef} • {item.tower})</span>
        </div>
      ),
    },
    {
      id: 'floors',
      label: 'Structure & Capacity',
      render: (item: any) => (
        <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px]">
          <span className="font-bold text-[#111827]">{item.floors}</span>
          <span className="text-slate-500 font-normal">({item.units})</span>
        </div>
      ),
    },
    {
      id: 'status',
      label: 'Status',
      render: (item: any) => (
        <span className="px-2.5 py-0.5 bg-emerald-50 border border-emerald-200 text-[#006837] text-[11px] font-bold rounded-full">
          {item.status}
        </span>
      ),
    },
    {
      id: 'actions',
      label: 'Actions',
      render: (item: any) => (
        <div className="flex items-center justify-end gap-1.5">
          <button title="View Building" className="w-7 h-7 bg-[#6B7280] hover:bg-slate-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
            <Eye size={13} />
          </button>
          <button title="Edit Building" className="w-7 h-7 bg-[#2563EB] hover:bg-blue-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
            <Edit3 size={13} />
          </button>
          <button title="Delete Building" onClick={() => setBuildings(prev => prev.filter(b => b.id !== item.id))} className="w-7 h-7 bg-[#FF4D4F] hover:bg-rose-600 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
            <Trash2 size={13} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">Buildings & Towers</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">
            Land & Project / Project Management / Buildings & Floors
          </p>
        </div>
        <button onClick={() => setIsBldModalOpen(true)} className="px-3.5 py-1.5 bg-[#006837] text-white text-xs font-semibold rounded-[4px] hover:bg-[#00522b] flex items-center gap-1.5">
          <Plus size={14} /> Create Building
        </button>
      </div>

      <DataTable data={buildings} columns={buildingColumns} searchPlaceholder="Search buildings by name, code..." />
      <BuildingModal isOpen={isBldModalOpen} onClose={() => setIsBldModalOpen(false)} onSave={(item) => setBuildings(prev => [...prev, item])} />
    </div>
  );
}

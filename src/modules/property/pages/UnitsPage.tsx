import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from '@/shared/components/tables/data-table';
import { UnitItem } from '../types/units';
import { initialUnits } from '../data/units';
import { getUnitColumns } from '../components/units/UnitColumns';
import UnitModal from '../components/units/UnitModal';

export default function UnitsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [units, setUnits] = useState<UnitItem[]>(initialUnits);

  const handleSaveUnit = (newUnit: UnitItem) => {
    setUnits((prev) => [...prev, newUnit]);
  };

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">Units Management</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">
            Land & Project / Property Management / Units
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-3.5 py-1.5 bg-[#006837] hover:bg-[#00522b] text-white text-xs font-semibold rounded-[4px] shadow-2xs transition-colors flex items-center gap-1.5"
        >
          <Plus size={14} /> Add Property Unit
        </button>
      </div>

      <DataTable
        data={units}
        columns={getUnitColumns()}
        searchPlaceholder="Search units by unit no, floor, facing, property..."
      />

      <UnitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveUnit}
      />
    </div>
  );
}

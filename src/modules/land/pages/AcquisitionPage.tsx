import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from '@/shared/components/tables/data-table';
import { LandAcquisitionItem } from '../types/acquisition';
import { initialAcquisitions } from '../data/acquisition';
import { getAcquisitionColumns } from '../components/acquisition/AcquisitionColumns';
import AcquisitionModal from '../components/acquisition/AcquisitionModal';

export default function AcquisitionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [acquisitions, setAcquisitions] = useState<LandAcquisitionItem[]>(initialAcquisitions);

  const handleSaveAcquisition = (newAcq: LandAcquisitionItem) => {
    setAcquisitions((prev) => [...prev, newAcq]);
  };

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">Land Acquisition & Registration</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">
            Land & Project / Land Management / Acquisition
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-3.5 py-1.5 bg-[#006837] hover:bg-[#00522b] text-white text-xs font-semibold rounded-[4px] shadow-2xs transition-colors flex items-center gap-1.5"
        >
          <Plus size={14} /> New Acquisition
        </button>
      </div>

      <DataTable
        data={acquisitions}
        columns={getAcquisitionColumns()}
        searchPlaceholder="Search by acquisition code, plot, seller or phase..."
      />

      <AcquisitionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveAcquisition}
      />
    </div>
  );
}

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from '@/shared/components/tables/data-table';
import { AmenityItem } from '../types/amenities';
import { initialAmenities } from '../data/amenities';
import { getAmenityColumns } from '../components/amenities/AmenityColumns';
import AmenityModal from '../components/amenities/AmenityModal';

export default function AmenitiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amenities, setAmenities] = useState<AmenityItem[]>(initialAmenities);

  const handleSaveAmenity = (newAmn: AmenityItem) => {
    setAmenities((prev) => [...prev, newAmn]);
  };

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">Amenities & Parking</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">
            Land & Project / Property Management / Amenities & Parking
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-3.5 py-1.5 bg-[#006837] hover:bg-[#00522b] text-white text-xs font-semibold rounded-[4px] shadow-2xs transition-colors flex items-center gap-1.5"
        >
          <Plus size={14} /> Add Amenity
        </button>
      </div>

      <DataTable
        data={amenities}
        columns={getAmenityColumns()}
        searchPlaceholder="Search amenity code, title, property..."
      />

      <AmenityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveAmenity}
      />
    </div>
  );
}

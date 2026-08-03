import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import DataTable from '@/shared/components/tables/data-table';
import { PropertyItem } from '../types/properties';
import { initialProperties } from '../data/properties';
import { getPropertyColumns } from '../components/properties/PropertyColumns';
import PropertyModal from '../components/properties/PropertyModal';

export default function PropertiesPage() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<PropertyItem[]>(initialProperties);
  const [isPropModalOpen, setIsPropModalOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState<PropertyItem | null>(null);

  const handleEditProperty = (prop: PropertyItem) => {
    setEditingProperty(prop);
    setIsPropModalOpen(true);
  };

  const handleDeleteProperty = (id: string) => {
    setProperties((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSaveProperty = (prop: PropertyItem) => {
    setProperties((prev) => {
      const exists = prev.some((p) => p.id === prop.id);
      return exists ? prev.map((p) => (p.id === prop.id ? prop : p)) : [...prev, prop];
    });
  };

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">Enterprise Properties</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">
            Land & Project / Property Management / Properties
          </p>
        </div>
        <button onClick={() => navigate('/admin/property/create')} className="px-3.5 py-1.5 bg-[#006837] hover:bg-[#00522b] text-white text-xs font-semibold rounded-[4px] shadow-2xs transition-colors flex items-center gap-1.5">
          <Plus size={14} /> Add Enterprise Property
        </button>
      </div>

      <DataTable data={properties} columns={getPropertyColumns(handleEditProperty, handleDeleteProperty)} searchPlaceholder="Search properties by code, title, location, RAJUK approval..." />
      <PropertyModal isOpen={isPropModalOpen} onClose={() => setIsPropModalOpen(false)} onSave={handleSaveProperty} propertyToEdit={editingProperty} />
    </div>
  );
}

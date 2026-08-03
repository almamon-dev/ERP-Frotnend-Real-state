import React from 'react';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';

interface StepProps {
  formData: any;
  onChange: (field: string, val: any) => void;
}

export default function PropertyStepBasic({ formData, onChange }: StepProps) {
  const typeOptions = [
    { id: 'Residential', name: 'Residential' },
    { id: 'Commercial', name: 'Commercial' },
    { id: 'Industrial', name: 'Industrial' },
    { id: 'Land', name: 'Land' },
  ];

  const categoryOptions = [
    { id: 'Apartment', name: 'Apartment' },
    { id: 'Penthouse', name: 'Penthouse' },
    { id: 'Office Space', name: 'Office Space' },
    { id: 'Retail Shop', name: 'Retail Shop' },
    { id: 'Plot', name: 'Plot' },
  ];

  const statusOptions = [
    { id: 'Available', name: 'Available' },
    { id: 'Under Construction', name: 'Under Construction' },
    { id: 'Sold Out', name: 'Sold Out' },
    { id: 'Rented', name: 'Rented' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-bold text-slate-800">Basic Information</h3>
        <p className="text-xs text-slate-500">Configure essential details including code, name, and owner.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <Input label="Property Code (Auto)" value={formData.propertyCode || 'PRP-2026-901'} disabled />
        <Input label="Property Name *" required placeholder="e.g. Gulshan Crown Plaza Tower" value={formData.propertyName || ''} onChange={(e) => onChange('propertyName', e.target.value)} />
        <Select label="Property Type *" value={formData.propertyType || 'Residential'} onChange={(opt) => onChange('propertyType', opt?.id || opt)} options={typeOptions} showSearch={false} />
        <Select label="Property Category *" value={formData.propertyCategory || 'Apartment'} onChange={(opt) => onChange('propertyCategory', opt?.id || opt)} options={categoryOptions} showSearch={false} />
        <Select label="Property Status *" value={formData.propertyStatus || 'Available'} onChange={(opt) => onChange('propertyStatus', opt?.id || opt)} options={statusOptions} showSearch={false} />
        <Input label="Property Owner" placeholder="e.g. Acme Properties Ltd." value={formData.propertyOwner || ''} onChange={(e) => onChange('propertyOwner', e.target.value)} />
        <div className="col-span-2">
          <Input label="Description" placeholder="Write a detailed summary of the property..." value={formData.description || ''} onChange={(e) => onChange('description', e.target.value)} />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';

interface StepProps {
  formData: any;
  onChange: (field: string, val: any) => void;
}

export default function PropertyStepDetails({ formData, onChange }: StepProps) {
  const facingOptions = [
    { id: 'South-East', name: 'South-East' },
    { id: 'South', name: 'South' },
    { id: 'North-East', name: 'North-East' },
    { id: 'East', name: 'East' },
  ];

  const statusOptions = [
    { id: 'Ready to Move', name: 'Ready to Move' },
    { id: 'Under Construction', name: 'Under Construction' },
    { id: 'Upcoming', name: 'Upcoming' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-bold text-slate-800">Unit & Structure Details</h3>
        <p className="text-xs text-slate-500">Specify physical dimensions, bedrooms, bathrooms, and layout features.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <Input label="Area (Sq Ft) *" type="number" placeholder="e.g. 2450" value={formData.areaSqft || ''} onChange={(e) => onChange('areaSqft', e.target.value)} />
        <Input label="Bedrooms" type="number" placeholder="e.g. 4" value={formData.bedrooms || ''} onChange={(e) => onChange('bedrooms', e.target.value)} />
        <Input label="Bathrooms" type="number" placeholder="e.g. 4" value={formData.bathrooms || ''} onChange={(e) => onChange('bathrooms', e.target.value)} />
        <Input label="Balconies" type="number" placeholder="e.g. 3" value={formData.balconies || ''} onChange={(e) => onChange('balconies', e.target.value)} />
        <Input label="Kitchen Count" type="number" placeholder="e.g. 1" value={formData.kitchen || '1'} onChange={(e) => onChange('kitchen', e.target.value)} />
        <Input label="Parking Slots" placeholder="e.g. 2 Bay Parkings" value={formData.parking || ''} onChange={(e) => onChange('parking', e.target.value)} />
        <Input label="Storage Room" placeholder="e.g. 1 Servant / Storage" value={formData.storage || ''} onChange={(e) => onChange('storage', e.target.value)} />
        <Select label="Facing Direction" value={formData.facing || 'South-East'} onChange={(opt) => onChange('facing', opt?.id || opt)} options={facingOptions} showSearch={false} />
        <Input label="Floor Number" type="number" placeholder="e.g. 12" value={formData.floorNumber || ''} onChange={(e) => onChange('floorNumber', e.target.value)} />
        <Select label="Furnished Status" value={formData.furnished || 'Semi-Furnished'} onChange={(opt) => onChange('furnished', opt?.id || opt)} options={[{ id: 'Unfurnished', name: 'Unfurnished' }, { id: 'Semi-Furnished', name: 'Semi-Furnished' }, { id: 'Fully Furnished', name: 'Fully Furnished' }]} showSearch={false} />
        <div className="col-span-2">
          <Select label="Ready Status" value={formData.readyStatus || 'Ready to Move'} onChange={(opt) => onChange('readyStatus', opt?.id || opt)} options={statusOptions} showSearch={false} />
        </div>
      </div>
    </div>
  );
}

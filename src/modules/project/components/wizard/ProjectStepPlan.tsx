import React from 'react';
import Input from '@/shared/components/ui/input';

interface StepProps {
  formData: any;
  onChange: (field: string, val: any) => void;
}

export default function ProjectStepPlan({ formData, onChange }: StepProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-bold text-slate-800">Step 4 — Building Plan</h3>
        <p className="text-xs text-slate-500">Configure total buildings, towers, floor layout, units, and parking capacity.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <Input label="Total Buildings *" type="number" placeholder="e.g. 2" value={formData.totalBuildings || '2'} onChange={(e) => onChange('totalBuildings', e.target.value)} />
        <Input label="Total Towers" type="number" placeholder="e.g. 2" value={formData.totalTowers || '2'} onChange={(e) => onChange('totalTowers', e.target.value)} />
        <Input label="Total Floors Layout *" placeholder="e.g. B3 + G + 24 Floors" value={formData.totalFloors || 'B3 + G + 24 Floors'} onChange={(e) => onChange('totalFloors', e.target.value)} />
        <Input label="Total Units *" type="number" placeholder="e.g. 96" value={formData.totalUnits || '96'} onChange={(e) => onChange('totalUnits', e.target.value)} />
        <div className="col-span-2">
          <Input label="Parking Capacity (Cars / Bikes)" placeholder="e.g. 120 Car Parkings (2 Levels)" value={formData.parkingCapacity || ''} onChange={(e) => onChange('parkingCapacity', e.target.value)} />
        </div>
      </div>
    </div>
  );
}

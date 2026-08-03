import React from 'react';
import Input from '@/shared/components/ui/input';

interface StepProps {
  formData: any;
  onChange: (field: string, val: any) => void;
}

export default function ProjectStepLocation({ formData, onChange }: StepProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-bold text-slate-800">Step 2 — Location Information</h3>
        <p className="text-xs text-slate-500">Configure project country, city, address, map link, and total land area.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <Input label="Country *" value={formData.country || 'Bangladesh'} onChange={(e) => onChange('country', e.target.value)} />
        <Input label="City / Region *" placeholder="e.g. Dhaka" value={formData.city || 'Dhaka'} onChange={(e) => onChange('city', e.target.value)} />
        <div className="col-span-2">
          <Input label="Full Address *" required placeholder="e.g. Plot 42, Road 71, Gulshan 2, Dhaka" value={formData.address || ''} onChange={(e) => onChange('address', e.target.value)} />
        </div>
        <Input label="Google Map URL" placeholder="e.g. https://maps.google.com/..." value={formData.googleMap || ''} onChange={(e) => onChange('googleMap', e.target.value)} />
        <Input label="Total Land Area (Katha / Acre)" placeholder="e.g. 24 Katha (0.40 Acre)" value={formData.landArea || ''} onChange={(e) => onChange('landArea', e.target.value)} />
      </div>
    </div>
  );
}

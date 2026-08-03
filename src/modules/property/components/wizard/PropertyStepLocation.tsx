import React from 'react';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';

interface StepProps {
  formData: any;
  onChange: (field: string, val: any) => void;
}

export default function PropertyStepLocation({ formData, onChange }: StepProps) {
  const companyOptions = [
    { id: '1', name: 'Real Estate Enterprise Ltd.' },
    { id: '2', name: 'Imperial Properties Group' },
  ];

  const projectOptions = [
    { id: '1', name: 'Gulshan Heights Luxury Residency' },
    { id: '2', name: 'Banani Trade Center' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-bold text-slate-800">Project & Location Information</h3>
        <p className="text-xs text-slate-500">Specify company, project, tower, floor, and address location.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <Select label="Company *" value={formData.company || '1'} onChange={(opt) => onChange('company', opt?.id || opt)} options={companyOptions} showSearch={false} />
        <Input label="Branch *" required placeholder="e.g. Dhaka Main Branch" value={formData.branch || ''} onChange={(e) => onChange('branch', e.target.value)} />
        <Select label="Project *" value={formData.project || '1'} onChange={(opt) => onChange('project', opt?.id || opt)} options={projectOptions} showSearch={true} />
        <Input label="Phase" placeholder="e.g. Phase 1" value={formData.phase || ''} onChange={(e) => onChange('phase', e.target.value)} />
        <Input label="Building / Block" placeholder="e.g. Building A" value={formData.building || ''} onChange={(e) => onChange('building', e.target.value)} />
        <Input label="Tower" placeholder="e.g. East Tower" value={formData.tower || ''} onChange={(e) => onChange('tower', e.target.value)} />
        <Input label="Floor Level" placeholder="e.g. Level 12" value={formData.floor || ''} onChange={(e) => onChange('floor', e.target.value)} />
        <Input label="Unit Reference" placeholder="e.g. APT-12A" value={formData.unit || ''} onChange={(e) => onChange('unit', e.target.value)} />
        <Input label="City" placeholder="e.g. Dhaka" value={formData.city || 'Dhaka'} onChange={(e) => onChange('city', e.target.value)} />
        <Input label="Full Address *" required placeholder="e.g. Road 71, Gulshan 2, Dhaka" value={formData.address || ''} onChange={(e) => onChange('address', e.target.value)} />
        <div className="col-span-2">
          <Input label="Google Map Link" placeholder="e.g. https://maps.google.com/..." value={formData.googleMap || ''} onChange={(e) => onChange('googleMap', e.target.value)} />
        </div>
      </div>
    </div>
  );
}

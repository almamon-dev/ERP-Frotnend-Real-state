import React from 'react';
import Input from '@/shared/components/ui/input';

interface StepProps {
  formData: any;
  onChange: (field: string, val: any) => void;
}

export default function ProjectStepDevelopment({ formData, onChange }: StepProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-bold text-slate-800">Step 3 — Development Information</h3>
        <p className="text-xs text-slate-500">Specify timeline, project manager, engineer, architect, and main contractor.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <Input label="Start Date *" type="date" value={formData.startDate || '2026-01-15'} onChange={(e) => onChange('startDate', e.target.value)} />
        <Input label="Expected Completion Date *" type="date" value={formData.endDate || '2028-12-31'} onChange={(e) => onChange('endDate', e.target.value)} />
        <Input label="Project Manager *" required placeholder="e.g. Engr. Rafiqul Bari" value={formData.projectManager || ''} onChange={(e) => onChange('projectManager', e.target.value)} />
        <Input label="Site Engineer" placeholder="e.g. Engr. Tanvir Ahmed" value={formData.engineer || ''} onChange={(e) => onChange('engineer', e.target.value)} />
        <Input label="Consulting Architect" placeholder="e.g. Vista Architect Studio" value={formData.architect || ''} onChange={(e) => onChange('architect', e.target.value)} />
        <Input label="Main Contractor" placeholder="e.g. Spectra Engineers Ltd." value={formData.contractor || ''} onChange={(e) => onChange('contractor', e.target.value)} />
      </div>
    </div>
  );
}

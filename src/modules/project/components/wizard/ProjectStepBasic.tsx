import React from 'react';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';

interface StepProps {
  formData: any;
  onChange: (field: string, val: any) => void;
}

export default function ProjectStepBasic({ formData, onChange }: StepProps) {
  const typeOptions = [
    { id: 'Residential High-Rise', name: 'Residential High-Rise' },
    { id: 'Commercial Complex', name: 'Commercial Complex' },
    { id: 'Mixed-Use Township', name: 'Mixed-Use Township' },
    { id: 'Shopping Mall', name: 'Shopping Mall' },
  ];

  const statusOptions = [
    { id: 'In Planning', name: 'In Planning' },
    { id: 'Ongoing', name: 'Ongoing' },
    { id: 'Near Completion', name: 'Near Completion' },
    { id: 'Completed', name: 'Completed' },
  ];

  const companyOptions = [
    { id: '1', name: 'Real Estate Enterprise Ltd.' },
    { id: '2', name: 'Imperial Properties Group' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-bold text-slate-800">Step 1 — Basic Information</h3>
        <p className="text-xs text-slate-500">Specify project code, name, company, branch, and type.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <Input label="Project Code (Auto)" value={formData.projectCode || 'PRJ-2026-101'} disabled />
        <Input label="Project Name *" required placeholder="e.g. Gulshan Crown Heights" value={formData.projectName || ''} onChange={(e) => onChange('projectName', e.target.value)} />
        <Select label="Company *" value={formData.company || '1'} onChange={(opt) => onChange('company', opt?.id || opt)} options={companyOptions} showSearch={false} />
        <Input label="Branch *" required placeholder="e.g. Dhaka Corporate Office" value={formData.branch || ''} onChange={(e) => onChange('branch', e.target.value)} />
        <Select label="Project Type *" value={formData.projectType || 'Residential High-Rise'} onChange={(opt) => onChange('projectType', opt?.id || opt)} options={typeOptions} showSearch={false} />
        <Select label="Status *" value={formData.status || 'Ongoing'} onChange={(opt) => onChange('status', opt?.id || opt)} options={statusOptions} showSearch={false} />
      </div>
    </div>
  );
}

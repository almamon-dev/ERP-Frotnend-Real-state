import React from 'react';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';

interface StepProps {
  formData: any;
  onChange: (field: string, val: any) => void;
}

export default function ProjectStepFinancial({ formData, onChange }: StepProps) {
  const currencyOptions = [
    { id: 'BDT (৳)', name: 'BDT (৳) - Bangladeshi Taka' },
    { id: 'USD ($)', name: 'USD ($) - US Dollar' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-bold text-slate-800">Step 5 — Financial Information</h3>
        <p className="text-xs text-slate-500">Specify estimated budget, actual project cost, sales target, and currency.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <Select label="Currency *" value={formData.currency || 'BDT (৳)'} onChange={(opt) => onChange('currency', opt?.id || opt)} options={currencyOptions} showSearch={false} />
        <Input label="Estimated Budget *" required placeholder="e.g. ৳ 120.0 Cr" value={formData.estimatedBudget || ''} onChange={(e) => onChange('estimatedBudget', e.target.value)} />
        <Input label="Project Cost Allocation" placeholder="e.g. ৳ 95.0 Cr" value={formData.projectCost || ''} onChange={(e) => onChange('projectCost', e.target.value)} />
        <Input label="Sales Target Revenue" placeholder="e.g. ৳ 185.0 Cr" value={formData.salesTarget || ''} onChange={(e) => onChange('salesTarget', e.target.value)} />
      </div>
    </div>
  );
}

import React from 'react';
import Input from '@/shared/components/ui/input';

interface StepProps {
  formData: any;
  onChange: (field: string, val: any) => void;
}

export default function PropertyStepPricing({ formData, onChange }: StepProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-bold text-slate-800">Price Information & Payment Schedule</h3>
        <p className="text-xs text-slate-500">Configure sale price, booking money, down payment, and installment plan.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <Input label="Sale Price (৳) *" required placeholder="e.g. ৳ 3,75,00,000" value={formData.salePrice || ''} onChange={(e) => onChange('salePrice', e.target.value)} />
        <Input label="Booking Money (৳)" placeholder="e.g. ৳ 5,00,000" value={formData.bookingMoney || ''} onChange={(e) => onChange('bookingMoney', e.target.value)} />
        <Input label="Down Payment (৳)" placeholder="e.g. ৳ 25,00,000 (20%)" value={formData.downPayment || ''} onChange={(e) => onChange('downPayment', e.target.value)} />
        <Input label="Installment Plan" placeholder="e.g. 36 Monthly Installments" value={formData.installmentPlan || ''} onChange={(e) => onChange('installmentPlan', e.target.value)} />
        <Input label="Rent Price (৳ / month)" placeholder="e.g. ৳ 1,25,000" value={formData.rentPrice || ''} onChange={(e) => onChange('rentPrice', e.target.value)} />
        <Input label="Security Deposit (৳)" placeholder="e.g. ৳ 3,00,000" value={formData.securityDeposit || ''} onChange={(e) => onChange('securityDeposit', e.target.value)} />
        <div className="col-span-2">
          <Input label="Monthly Maintenance Charge (৳)" placeholder="e.g. ৳ 8,500 / month" value={formData.maintenanceCharge || ''} onChange={(e) => onChange('maintenanceCharge', e.target.value)} />
        </div>
      </div>
    </div>
  );
}

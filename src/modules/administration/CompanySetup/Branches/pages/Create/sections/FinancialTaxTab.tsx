import React from 'react';
import { CreditCard } from 'lucide-react';
import Input from '@/shared/components/ui/input';
import FormLabel from '@/shared/components/ui/label';
import { BranchFormData } from '../types';
import { TabHeader, SectionHeader } from '../components/HeaderComponents';

interface Props {
  formData: BranchFormData;
  onChange: (field: keyof BranchFormData, value: any) => void;
}

export const FinancialTaxTab: React.FC<Props> = ({ formData, onChange }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
    <TabHeader title="Financial & Tax Setup" icon={CreditCard} />
    <div>
      <FormLabel>Tax Identification Number (TIN/VAT)</FormLabel>
      <Input
        placeholder="TAX-12345678"
        value={formData.taxId}
        onChange={(e) => onChange('taxId', e.target.value)}
      />
    </div>
    <div>
      <FormLabel>Bank Name</FormLabel>
      <Input
        placeholder="e.g. City Bank Ltd"
        value={formData.bankName}
        onChange={(e) => onChange('bankName', e.target.value)}
      />
    </div>
    <SectionHeader title="Bank Account Details" />
    <div>
      <FormLabel>Account Number</FormLabel>
      <Input
        placeholder="Account Number"
        value={formData.bankAccount}
        onChange={(e) => onChange('bankAccount', e.target.value)}
      />
    </div>
    <div>
      <FormLabel>SWIFT / Routing Code</FormLabel>
      <Input
        placeholder="SWIFT Code"
        value={formData.swiftCode}
        onChange={(e) => onChange('swiftCode', e.target.value)}
      />
    </div>
  </div>
);

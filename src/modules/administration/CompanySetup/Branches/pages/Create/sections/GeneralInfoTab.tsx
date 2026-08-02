import React from 'react';
import { Building2 } from 'lucide-react';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import FormLabel from '@/shared/components/ui/label';
import { BranchFormData } from '../types';
import { TabHeader, SectionHeader } from '../components/HeaderComponents';
import { COMPANY_OPTIONS, BRANCH_TYPES, STATUS_OPTIONS } from '../mockData';

interface Props {
  formData: BranchFormData;
  onChange: (field: keyof BranchFormData, value: any) => void;
}

export const GeneralInfoTab: React.FC<Props> = ({ formData, onChange }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
    <TabHeader title="General Information" icon={Building2} />
    <div>
      <FormLabel required>Branch Code</FormLabel>
      <Input
        placeholder="e.g. BR-DHK-001"
        value={formData.code}
        onChange={(e) => onChange('code', e.target.value)}
      />
    </div>
    <div>
      <FormLabel required>Branch Name</FormLabel>
      <Input
        placeholder="e.g. Dhaka Main Branch"
        value={formData.name}
        onChange={(e) => onChange('name', e.target.value)}
      />
    </div>
    <div>
      <FormLabel required>Company</FormLabel>
      <Select
        value={formData.company}
        onChange={(e) => onChange('company', e.target.value)}
        options={COMPANY_OPTIONS}
      />
    </div>
    <div>
      <FormLabel required>Branch Type</FormLabel>
      <Select
        value={formData.type}
        onChange={(e) => onChange('type', e.target.value)}
        options={BRANCH_TYPES}
      />
    </div>
    <div>
      <FormLabel required>Status</FormLabel>
      <Select
        value={formData.status}
        onChange={(e) => onChange('status', e.target.value)}
        options={STATUS_OPTIONS}
      />
    </div>
    <div>
      <FormLabel>Opening Date</FormLabel>
      <Input
        type="date"
        value={formData.openingDate}
        onChange={(e) => onChange('openingDate', e.target.value)}
      />
    </div>
    <SectionHeader title="Localization & Currency" />
    <div>
      <FormLabel>Default Currency</FormLabel>
      <Input
        placeholder="USD / BDT"
        value={formData.currency}
        onChange={(e) => onChange('currency', e.target.value)}
      />
    </div>
    <div>
      <FormLabel>Timezone</FormLabel>
      <Input
        placeholder="e.g. Asia/Dhaka"
        value={formData.timezone}
        onChange={(e) => onChange('timezone', e.target.value)}
      />
    </div>
  </div>
);

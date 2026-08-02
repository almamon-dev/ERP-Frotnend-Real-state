import React from 'react';
import { Users, Clock } from 'lucide-react';
import Input from '@/shared/components/ui/input';
import FormLabel from '@/shared/components/ui/label';
import { BranchFormData } from '../types';
import { TabHeader, SectionHeader } from '../components/HeaderComponents';

interface Props {
  formData: BranchFormData;
  onChange: (field: keyof BranchFormData, value: any) => void;
}

export const ManagementOpsTab: React.FC<Props> = ({ formData, onChange }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
    <TabHeader title="Management & Operational Structure" icon={Users} />
    <div>
      <FormLabel>Branch Manager</FormLabel>
      <Input
        placeholder="Assign Manager"
        value={formData.manager}
        onChange={(e) => onChange('manager', e.target.value)}
      />
    </div>
    <div>
      <FormLabel>Parent Branch</FormLabel>
      <Input
        placeholder="Parent Branch"
        value={formData.parentBranch}
        onChange={(e) => onChange('parentBranch', e.target.value)}
      />
    </div>
    <SectionHeader title="Operational Hours" icon={Clock} />
    <div className="col-span-1 md:col-span-2">
      <FormLabel>Working Hours</FormLabel>
      <Input
        placeholder="e.g. Mon-Fri 09:00 AM - 06:00 PM"
        value={formData.workingHours}
        onChange={(e) => onChange('workingHours', e.target.value)}
      />
    </div>
  </div>
);

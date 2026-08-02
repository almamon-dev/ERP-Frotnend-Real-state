import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import Input from '@/shared/components/ui/input';
import FormLabel from '@/shared/components/ui/label';
import { BranchFormData } from '../types';
import { TabHeader, SectionHeader } from '../components/HeaderComponents';

interface Props {
  formData: BranchFormData;
  onChange: (field: keyof BranchFormData, value: any) => void;
}

export const ContactAddressTab: React.FC<Props> = ({ formData, onChange }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
    <TabHeader title="Contact & Address Information" icon={MapPin} />
    <div>
      <FormLabel required>Phone Number</FormLabel>
      <Input
        placeholder="+880 1700-000000"
        value={formData.phone}
        onChange={(e) => onChange('phone', e.target.value)}
      />
    </div>
    <div>
      <FormLabel required>Email Address</FormLabel>
      <Input
        type="email"
        placeholder="branch@company.com"
        value={formData.email}
        onChange={(e) => onChange('email', e.target.value)}
      />
    </div>
    <div className="col-span-1 md:col-span-2">
      <FormLabel>Website</FormLabel>
      <Input
        placeholder="https://branch.company.com"
        value={formData.website}
        onChange={(e) => onChange('website', e.target.value)}
      />
    </div>
    <SectionHeader title="Physical Location" icon={Phone} />
    <div className="col-span-1 md:col-span-2">
      <FormLabel required>Address Line 1</FormLabel>
      <Input
        placeholder="Building / Street Address"
        value={formData.addressLine1}
        onChange={(e) => onChange('addressLine1', e.target.value)}
      />
    </div>
    <div className="col-span-1 md:col-span-2">
      <FormLabel>Address Line 2</FormLabel>
      <Input
        placeholder="Suite / Floor / Landmark"
        value={formData.addressLine2}
        onChange={(e) => onChange('addressLine2', e.target.value)}
      />
    </div>
    <div>
      <FormLabel required>City</FormLabel>
      <Input
        placeholder="City"
        value={formData.city}
        onChange={(e) => onChange('city', e.target.value)}
      />
    </div>
    <div>
      <FormLabel>State / Province</FormLabel>
      <Input
        placeholder="State"
        value={formData.state}
        onChange={(e) => onChange('state', e.target.value)}
      />
    </div>
    <div>
      <FormLabel>ZIP / Postal Code</FormLabel>
      <Input
        placeholder="1205"
        value={formData.zipCode}
        onChange={(e) => onChange('zipCode', e.target.value)}
      />
    </div>
    <div>
      <FormLabel required>Country</FormLabel>
      <Input
        placeholder="Country"
        value={formData.country}
        onChange={(e) => onChange('country', e.target.value)}
      />
    </div>
  </div>
);

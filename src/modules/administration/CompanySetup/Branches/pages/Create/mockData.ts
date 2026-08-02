import { Building2, MapPin, Users, CreditCard, Settings, FileText } from 'lucide-react';

export const CREATE_TABS = [
  { id: 'general', label: 'General Info', icon: Building2 },
  { id: 'contact', label: 'Contact & Address', icon: MapPin },
  { id: 'management', label: 'Management & Ops', icon: Users },
  { id: 'finance', label: 'Financial & Tax', icon: CreditCard },
  { id: 'config', label: 'System Configuration', icon: Settings },
  { id: 'files', label: 'Documents & Notes', icon: FileText },
];

export const COMPANY_OPTIONS = [
  { value: 'GreenBuild Ltd', label: 'GreenBuild Ltd' },
  { value: 'Apex Real Estate', label: 'Apex Real Estate' },
];

export const BRANCH_TYPES = [
  { value: 'Headquarters', label: 'Headquarters' },
  { value: 'Regional Office', label: 'Regional Office' },
  { value: 'Branch Office', label: 'Branch Office' },
  { value: 'Sales Center', label: 'Sales Center' },
];

export const STATUS_OPTIONS = [
  { value: 'Active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' },
  { value: 'Pending', label: 'Pending' },
];

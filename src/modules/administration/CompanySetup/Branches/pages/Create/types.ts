export interface BranchFormData {
  code: string;
  name: string;
  type: string;
  company: string;
  status: string;
  openingDate: string;
  currency: string;
  timezone: string;
  phone: string;
  email: string;
  website: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  manager: string;
  parentBranch: string;
  workingHours: string;
  taxId: string;
  bankAccount: string;
  bankName: string;
  swiftCode: string;
  autoApproveLeave: boolean;
  allowIpLock: boolean;
  enableNotifications: boolean;
  notes: string;
}

export const initialBranchFormData: BranchFormData = {
  code: '',
  name: '',
  type: 'Branch Office',
  company: 'GreenBuild Ltd',
  status: 'Active',
  openingDate: '',
  currency: 'USD',
  timezone: 'UTC+6',
  phone: '',
  email: '',
  website: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  zipCode: '',
  country: 'Bangladesh',
  manager: '',
  parentBranch: 'Headquarters',
  workingHours: '09:00 AM - 06:00 PM',
  taxId: '',
  bankAccount: '',
  bankName: '',
  swiftCode: '',
  autoApproveLeave: false,
  allowIpLock: false,
  enableNotifications: true,
  notes: '',
};

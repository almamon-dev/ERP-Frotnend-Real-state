export interface Company {
  id: number;
  logo: string;
  code: string;
  name: string;
  type: string;
  industry: string;
  country: string;
  countryFlag: string;
  city: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  branchesCount: number;
  employeesCount: number;
  status: 'Active' | 'Inactive';
  createdAt: string;
}

export const FILTER_STATUS_OPTIONS = [
  { id: 'All', name: 'All Statuses' },
  { id: 'Active', name: 'Active' },
  { id: 'Inactive', name: 'Inactive' },
];

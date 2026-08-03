export interface MasterDataItem {
  id: string;
  code: string;
  name: string;
  category: string;
  description: string;
  isSystem: boolean;
  status: 'Active' | 'Inactive';
}

export interface MasterCategory {
  id: string;
  name: string;
  count: number;
}

export const MASTER_CATEGORIES: MasterCategory[] = [
  { id: 'company_types', name: 'Company Types', count: 4 },
  { id: 'industries', name: 'Industry Sectors', count: 6 },
  { id: 'countries', name: 'Countries & Regions', count: 5 },
  { id: 'currencies', name: 'Currencies', count: 4 },
  { id: 'department_types', name: 'Department Types', count: 3 },
  { id: 'designation_levels', name: 'Designation Levels', count: 4 },
  { id: 'employment_statuses', name: 'Employment Statuses', count: 3 },
  { id: 'branch_categories', name: 'Branch Categories', count: 2 },
];

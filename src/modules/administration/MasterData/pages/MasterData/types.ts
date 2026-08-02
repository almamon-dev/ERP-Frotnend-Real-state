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
  { id: 'industries', name: 'Industries', count: 6 },
  { id: 'countries', name: 'Countries', count: 5 },
  { id: 'currencies', name: 'Currencies', count: 4 },
];

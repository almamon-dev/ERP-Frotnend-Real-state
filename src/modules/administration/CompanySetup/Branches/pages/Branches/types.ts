export interface BranchItem {
  id: string;
  code: string;
  name: string;
  companyName: string;
  type: string;
  city: string;
  phone: string;
  status: 'Active' | 'Inactive';
}

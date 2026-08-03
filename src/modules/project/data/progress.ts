import { ProgressReportItem } from '../types/progress';

export const initialProgressReports: ProgressReportItem[] = [
  { id: '1', reportCode: 'RPT-301', title: 'Weekly Concrete Strength & Rebar Audit', projectRef: 'Gulshan Heights Luxury Residency', milestoneRef: 'Foundation & Substructure', reportedBy: 'Engr. Tanvir Ahmed (Senior QA)', reportDate: '01 Aug 2026', weeklyProgress: 3.5, qualityStatus: 'Approved', photoCount: 8 },
  { id: '2', reportCode: 'RPT-302', title: 'Superstructure Formwork & Casting Inspection', projectRef: 'Banani Trade Center', milestoneRef: 'RCC Slab Level 8 Casting', reportedBy: 'Engr. Mahmud Hasan (Site Inspector)', reportDate: '28 Jul 2026', weeklyProgress: 2.8, qualityStatus: 'Approved', photoCount: 12 },
  { id: '3', reportCode: 'RPT-303', title: 'Electrical Conduit Placement Inspection', projectRef: 'Uttara Smart City Condos', milestoneRef: 'MEP Electrical & Plumbing', reportedBy: 'Supervisor Kamrul Islam', reportDate: '25 Jul 2026', weeklyProgress: 1.5, qualityStatus: 'Under Review', photoCount: 4 },
  { id: '4', reportCode: 'RPT-304', title: 'Boundary Wall Foundation Quality Report', projectRef: 'Purbachal Green Enclave', milestoneRef: 'Land Boundary Fencing', reportedBy: 'Engr. Rafiqul Bari', reportDate: '20 Jul 2026', weeklyProgress: 4.0, qualityStatus: 'Approved', photoCount: 6 },
];

import { MilestoneItem } from '../types/milestones';

export const initialMilestones: MilestoneItem[] = [
  { id: '1', milestoneCode: 'MST-201', title: 'Piling & Substructure Foundation Complete', projectRef: 'Gulshan Heights Luxury Residency', targetDate: '30 Aug 2026', completionPercent: 100, assignedTeam: 'Structural Engineering Team A', status: 'Active' },
  { id: '2', milestoneCode: 'MST-202', title: 'RCC Superstructure Slab Casting (Level 1-12)', projectRef: 'Banani Trade Center', targetDate: '15 Dec 2026', completionPercent: 60, assignedTeam: 'Civil Works Team B', status: 'Active' },
  { id: '3', milestoneCode: 'MST-203', title: 'Exterior Glass Curtain Wall Installation', projectRef: 'Uttara Smart City Condos', targetDate: '28 Feb 2027', completionPercent: 20, assignedTeam: 'Facade & Glass Team C', status: 'Pending' },
  { id: '4', milestoneCode: 'MST-204', title: 'MEP Electrical & Plumbing Rough-In', projectRef: 'Purbachal Green Enclave', targetDate: '10 Apr 2027', completionPercent: 0, assignedTeam: 'MEP Services Team D', status: 'Pending' },
];

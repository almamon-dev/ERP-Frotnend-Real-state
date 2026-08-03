import { ProjectItem } from '../types/projects';

export const initialProjects: ProjectItem[] = [
  { id: '1', projectCode: 'PRJ-101', name: 'Gulshan Heights Luxury Residency', location: 'Gulshan 2, Dhaka', projectType: 'Residential Tower', totalBudget: '৳ 120.0 Cr', disbursedAmount: '৳ 78.5 Cr', contractor: 'Spectra Engineers Ltd.', totalFloors: 'B2 + G + 18 Floors', startDate: '01 Jan 2025', completionDate: '30 Jun 2027', progressPercent: 65, status: 'Active' },
  { id: '2', projectCode: 'PRJ-102', name: 'Banani Trade Center', location: 'Banani C/A, Dhaka', projectType: 'Commercial Complex', totalBudget: '৳ 185.0 Cr', disbursedAmount: '৳ 74.0 Cr', contractor: 'Building Technology & Ideas (bti)', totalFloors: 'B3 + G + 24 Floors', startDate: '15 Mar 2025', completionDate: '31 Dec 2027', progressPercent: 40, status: 'Active' },
  { id: '3', projectCode: 'PRJ-103', name: 'Uttara Smart City Condos', location: 'Uttara Sector 18', projectType: 'Mixed-Use Community', totalBudget: '৳ 95.0 Cr', disbursedAmount: '৳ 80.7 Cr', contractor: 'Concord Real Estate Ltd.', totalFloors: 'G + 14 Floors', startDate: '10 Jun 2025', completionDate: '15 Aug 2026', progressPercent: 85, status: 'Active' },
  { id: '4', projectCode: 'PRJ-104', name: 'Purbachal Green Enclave', location: 'Purbachal Sector 4', projectType: 'Land Development', totalBudget: '৳ 60.0 Cr', disbursedAmount: '৳ 9.0 Cr', contractor: 'Navana Real Estate Ltd.', totalFloors: 'Land Plots (120 Bigha)', startDate: '01 Nov 2025', completionDate: '30 Apr 2028', progressPercent: 15, status: 'Pending' },
];

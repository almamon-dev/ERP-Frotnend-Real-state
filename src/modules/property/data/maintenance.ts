import { MaintenanceTicketItem } from '../types/maintenance';

export const initialMaintenanceTickets: MaintenanceTicketItem[] = [
  { id: '1', ticketCode: 'MNT-401', propertyRef: 'Banani Imperial Heights', unitRef: 'APT-12A', category: 'HVAC Air Conditioning Service', reportedDate: '02 Aug 2026', assignedTechnician: 'Tech. Rashidul Islam', estimatedCost: '৳ 15,000', priority: 'High', status: 'In Progress' },
  { id: '2', ticketCode: 'MNT-402', propertyRef: 'Gulshan Crown Plaza Tower', unitRef: 'OFF-604', category: 'Plumbing Leakage & Pipe Repair', reportedDate: '30 Jul 2026', assignedTechnician: 'Tech. Alamgir Hossain', estimatedCost: '৳ 8,500', priority: 'Medium', status: 'Open' },
  { id: '3', ticketCode: 'MNT-403', propertyRef: 'Uttara Mega Shopping Mall', unitRef: 'SHOP-G12', category: 'Main Elevator Maintenance Audit', reportedDate: '25 Jul 2026', assignedTechnician: 'OTIS Elevator Services', estimatedCost: '৳ 45,000', priority: 'High', status: 'Resolved' },
  { id: '4', ticketCode: 'MNT-404', propertyRef: 'Dhanmondi Lakeview Apartments', unitRef: 'APT-4B', category: 'Electrical Breaker Panel Repair', reportedDate: '22 Jul 2026', assignedTechnician: 'Tech. Shakil Ahmed', estimatedCost: '৳ 12,000', priority: 'Medium', status: 'Resolved' },
];

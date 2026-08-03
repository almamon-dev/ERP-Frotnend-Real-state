export interface MaintenanceTicketItem {
  id: string;
  ticketCode: string;
  propertyRef: string;
  unitRef: string;
  category: string;
  reportedDate: string;
  assignedTechnician: string;
  estimatedCost: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In Progress' | 'Resolved';
}

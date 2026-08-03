export interface AcquisitionItem {
  id: string;
  acqCode: string;
  projectTitle: string;
  sellerName: string;
  totalAgreedValue: string;
  advancePaid: string;
  balanceDue: string;
  phase: 'Negotiation' | 'Due Diligence' | 'Deed Signed' | 'Completed';
  legalStatus: 'Clear Title' | 'Under Review' | 'Disputed';
  targetDate: string;
}

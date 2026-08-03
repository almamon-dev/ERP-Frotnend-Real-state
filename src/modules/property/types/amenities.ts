export interface AmenityItem {
  id: string;
  code: string;
  name: string;
  category: 'Facility' | 'Parking' | 'Security' | 'Leisure';
  propertyRef: string;
  chargeType: 'Complimentary' | 'Monthly Fee' | 'One-Time';
  amount: string;
  status: string;
}

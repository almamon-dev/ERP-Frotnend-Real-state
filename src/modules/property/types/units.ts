export interface UnitItem {
  id: string;
  unitNo: string;
  propertyRef: string;
  floorLevel: string;
  facingDirection: string;
  layoutType: string;
  sizeSqFt: number;
  pricePerSqFt: string;
  totalPrice: string;
  parkingSlots: string;
  occupancyStatus: 'Available' | 'Sold' | 'Rented' | 'Reserved';
}

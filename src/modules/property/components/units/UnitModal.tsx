import React, { useState } from 'react';
import Modal from '@/shared/components/modals/modal';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import { UnitItem } from '../../types/units';

interface UnitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (unit: UnitItem) => void;
}

export default function UnitModal({ isOpen, onClose, onSave }: UnitModalProps) {
  const [unitNo, setUnitNo] = useState('');
  const [propertyRef, setPropertyRef] = useState('Banani Imperial Heights');
  const [building, setBuilding] = useState('Building A');
  const [floorLevel, setFloorLevel] = useState('Level 12');
  const [unitType, setUnitType] = useState('Residential Apartment');
  const [sizeSqFt, setSizeSqFt] = useState('2450');
  const [bedrooms, setBedrooms] = useState('4');
  const [bathrooms, setBathrooms] = useState('4');
  const [balcony, setBalcony] = useState('3');
  const [parking, setParking] = useState('2 Bay Parkings');
  const [occupancyStatus, setOccupancyStatus] = useState<'Available' | 'Sold' | 'Rented' | 'Reserved'>('Available');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!unitNo) return;

    onSave({
      id: String(Date.now()),
      unitNo,
      propertyRef: typeof propertyRef === 'object' ? (propertyRef as any).name : propertyRef,
      floorLevel: `${floorLevel} (${building})`,
      facingDirection: 'South-East (Lake Facing)',
      layoutType: `${bedrooms} Beds / ${bathrooms} Baths / ${balcony} Balconies`,
      sizeSqFt: Number(sizeSqFt) || 2000,
      pricePerSqFt: '৳ 15,500',
      totalPrice: '৳ 3.79 Cr',
      parkingSlots: parking,
      occupancyStatus: typeof occupancyStatus === 'object' ? (occupancyStatus as any).id : occupancyStatus,
    });
    onClose();
  };

  const projectOptions = [
    { id: '1', name: 'Gulshan Crown Plaza Tower' },
    { id: '2', name: 'Banani Imperial Heights' },
    { id: '3', name: 'Uttara Mega Shopping Mall' },
    { id: '4', name: 'Dhanmondi Lakeview Condos' },
  ];

  const statusOptions = [
    { id: 'Available', name: 'Available' },
    { id: 'Sold', name: 'Sold' },
    { id: 'Rented', name: 'Rented' },
    { id: 'Reserved', name: 'Reserved' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Property Unit"
      size="xl"
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-[#006837] hover:bg-[#00522b] text-white font-semibold">Save Unit</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-xs">
        <Select label="Project *" value={propertyRef} onChange={(opt) => setPropertyRef(opt?.name || opt?.id || opt)} options={projectOptions} showSearch={true} />
        <Input label="Unit No. *" required placeholder="e.g. APT-12A" value={unitNo} onChange={(e) => setUnitNo(e.target.value)} />
        <Input label="Building" placeholder="e.g. Building A" value={building} onChange={(e) => setBuilding(e.target.value)} />
        <Input label="Floor" placeholder="e.g. Level 12" value={floorLevel} onChange={(e) => setFloorLevel(e.target.value)} />
        <Input label="Unit Type" placeholder="e.g. Residential Apartment" value={unitType} onChange={(e) => setUnitType(e.target.value)} />
        <Input label="Area (Sq Ft)" type="number" value={sizeSqFt} onChange={(e) => setSizeSqFt(e.target.value)} />
        <Input label="Bedrooms" type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
        <Input label="Bathrooms" type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
        <Input label="Balcony Count" type="number" value={balcony} onChange={(e) => setBalcony(e.target.value)} />
        <Input label="Parking" placeholder="e.g. 2 Bay Parkings" value={parking} onChange={(e) => setParking(e.target.value)} />
        <div className="col-span-2">
          <Select label="Status" value={occupancyStatus} onChange={(opt) => setOccupancyStatus(opt?.id || opt)} options={statusOptions} showSearch={false} />
        </div>
      </form>
    </Modal>
  );
}

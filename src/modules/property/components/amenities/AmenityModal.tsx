import React, { useState } from 'react';
import Modal from '@/shared/components/modals/modal';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import { AmenityItem } from '../../types/amenities';

interface AmenityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (amn: AmenityItem) => void;
}

export default function AmenityModal({ isOpen, onClose, onSave }: AmenityModalProps) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<AmenityItem['category']>('Facility');
  const [propertyRef, setPropertyRef] = useState('Gulshan Crown Plaza Tower');
  const [chargeType, setChargeType] = useState<AmenityItem['chargeType']>('Complimentary');
  const [amount, setAmount] = useState('Included');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    onSave({
      id: String(Date.now()),
      code: `AMN-${Math.floor(500 + Math.random() * 500)}`,
      name,
      category: typeof category === 'object' ? (category as any).id : category,
      propertyRef: typeof propertyRef === 'object' ? (propertyRef as any).name : propertyRef,
      chargeType: typeof chargeType === 'object' ? (chargeType as any).id : chargeType,
      amount: amount || 'Included in Service Charge',
      status: 'Active',
    });
    onClose();
  };

  const categoryOptions = [
    { id: 'Facility', name: 'Facility' },
    { id: 'Parking', name: 'Parking' },
    { id: 'Security', name: 'Security' },
    { id: 'Leisure', name: 'Leisure' },
  ];

  const propertyOptions = [
    { id: '1', name: 'Gulshan Crown Plaza Tower' },
    { id: '2', name: 'Banani Imperial Heights' },
    { id: '3', name: 'Uttara Mega Shopping Mall' },
    { id: '4', name: 'Dhanmondi Lakeview Condos' },
  ];

  const chargeOptions = [
    { id: 'Complimentary', name: 'Complimentary' },
    { id: 'Monthly Fee', name: 'Monthly Fee' },
    { id: 'One-Time', name: 'One-Time' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Property Amenity / Facility"
      size="xl"
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-[#006837] hover:bg-[#00522b] text-white font-semibold">Save Amenity</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-xs">
        <div className="col-span-2">
          <Input label="Amenity Name *" required placeholder="e.g. Rooftop Swimming Pool & Gym" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <Select label="Category" value={category} onChange={(opt) => setCategory(opt?.id || opt)} options={categoryOptions} showSearch={false} />
        <Select label="Assign Property *" value={propertyRef} onChange={(opt) => setPropertyRef(opt?.name || opt?.id || opt)} options={propertyOptions} showSearch={true} />
        <Select label="Charge Type" value={chargeType} onChange={(opt) => setChargeType(opt?.id || opt)} options={chargeOptions} showSearch={false} />
        <Input label="Price / Charge Details" placeholder="e.g. ৳ 5,000 / month or Included" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </form>
    </Modal>
  );
}

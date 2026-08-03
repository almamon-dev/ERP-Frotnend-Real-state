import React, { useState } from 'react';
import Modal from '@/shared/components/modals/modal';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';

interface ParkingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (parking: any) => void;
}

export default function ParkingModal({ isOpen, onClose, onSave }: ParkingModalProps) {
  const [parkingNumber, setParkingNumber] = useState('');
  const [parkingType, setParkingType] = useState('Underground Bay');
  const [building, setBuilding] = useState('Building A');
  const [floor, setFloor] = useState('Basement 1 (B1)');
  const [unit, setUnit] = useState('APT-12A');
  const [status, setStatus] = useState('Allocated');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parkingNumber) return;

    onSave({
      id: String(Date.now()),
      parkingNumber,
      parkingType: typeof parkingType === 'object' ? (parkingType as any).id : parkingType,
      building,
      floor,
      unit,
      status: typeof status === 'object' ? (status as any).id : status,
    });
    onClose();
  };

  const typeOptions = [
    { id: 'Underground Bay', name: 'Underground Bay' },
    { id: 'Covered Driveway', name: 'Covered Driveway' },
    { id: 'Open Ground', name: 'Open Ground' },
    { id: 'VIP / Guest Parking', name: 'VIP / Guest Parking' },
  ];

  const statusOptions = [
    { id: 'Allocated', name: 'Allocated' },
    { id: 'Available', name: 'Available' },
    { id: 'Reserved', name: 'Reserved' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Parking Allocation"
      size="xl"
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-[#006837] hover:bg-[#00522b] text-white font-semibold">Save Parking</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-xs">
        <Input label="Parking Slot Number *" required placeholder="e.g. PKG-B1-42" value={parkingNumber} onChange={(e) => setParkingNumber(e.target.value)} />
        <Select label="Parking Type" value={parkingType} onChange={(opt) => setParkingType(opt?.id || opt)} options={typeOptions} showSearch={false} />
        <Input label="Building / Block" placeholder="e.g. Building A" value={building} onChange={(e) => setBuilding(e.target.value)} />
        <Input label="Floor Level" placeholder="e.g. Basement 1 (B1)" value={floor} onChange={(e) => setFloor(e.target.value)} />
        <Input label="Assigned Unit" placeholder="e.g. APT-12A" value={unit} onChange={(e) => setUnit(e.target.value)} />
        <Select label="Status" value={status} onChange={(opt) => setStatus(opt?.id || opt)} options={statusOptions} showSearch={false} />
      </form>
    </Modal>
  );
}

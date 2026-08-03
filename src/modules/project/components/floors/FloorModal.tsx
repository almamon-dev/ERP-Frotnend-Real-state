import React, { useState } from 'react';
import Modal from '@/shared/components/modals/modal';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';

interface FloorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (flr: any) => void;
}

export default function FloorModal({ isOpen, onClose, onSave }: FloorModalProps) {
  const [projectRef, setProjectRef] = useState('Gulshan Crown Heights');
  const [buildingRef, setBuildingRef] = useState('Tower A - Executive Block');
  const [floorNo, setFloorNo] = useState('12');
  const [floorName, setFloorName] = useState('12th Floor (Apt Level A)');
  const [totalUnits, setTotalUnits] = useState('4');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!floorName) return;

    onSave({
      id: String(Date.now()),
      projectRef: typeof projectRef === 'object' ? (projectRef as any).name : projectRef,
      buildingRef: typeof buildingRef === 'object' ? (buildingRef as any).name : buildingRef,
      floorNo,
      floorName,
      totalUnits,
    });
    onClose();
  };

  const projectOptions = [
    { id: '1', name: 'Gulshan Crown Heights' },
    { id: '2', name: 'Banani Imperial Heights' },
  ];

  const buildingOptions = [
    { id: '1', name: 'Tower A - Executive Block' },
    { id: '2', name: 'Tower B - Commercial Block' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Floor Record"
      size="xl"
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-[#006837] hover:bg-[#00522b] text-white font-semibold">Save Floor</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-xs">
        <Select label="Project *" value={projectRef} onChange={(opt) => setProjectRef(opt?.name || opt?.id || opt)} options={projectOptions} showSearch={true} />
        <Select label="Building *" value={buildingRef} onChange={(opt) => setBuildingRef(opt?.name || opt?.id || opt)} options={buildingOptions} showSearch={true} />
        <Input label="Floor Number *" type="number" required value={floorNo} onChange={(e) => setFloorNo(e.target.value)} />
        <Input label="Floor Name *" required placeholder="e.g. 12th Floor (Executive)" value={floorName} onChange={(e) => setFloorName(e.target.value)} />
        <div className="col-span-2">
          <Input label="Total Units on Floor" type="number" value={totalUnits} onChange={(e) => setTotalUnits(e.target.value)} />
        </div>
      </form>
    </Modal>
  );
}

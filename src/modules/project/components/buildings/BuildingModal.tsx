import React, { useState } from 'react';
import Modal from '@/shared/components/modals/modal';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';

interface BuildingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (bld: any) => void;
}

export default function BuildingModal({ isOpen, onClose, onSave }: BuildingModalProps) {
  const [projectRef, setProjectRef] = useState('Gulshan Crown Heights');
  const [buildingName, setBuildingName] = useState('');
  const [buildingCode, setBuildingCode] = useState('');
  const [tower, setTower] = useState('Tower A (East Wing)');
  const [floors, setFloors] = useState('22');
  const [units, setUnits] = useState('44');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buildingName) return;

    onSave({
      id: String(Date.now()),
      projectRef: typeof projectRef === 'object' ? (projectRef as any).name : projectRef,
      buildingName,
      buildingCode: buildingCode || `BLD-${Math.floor(100 + Math.random() * 900)}`,
      tower,
      floors,
      units,
      status: typeof status === 'object' ? (status as any).id : status,
    });
    onClose();
  };

  const projectOptions = [
    { id: '1', name: 'Gulshan Crown Heights' },
    { id: '2', name: 'Banani Imperial Heights' },
    { id: '3', name: 'Uttara Smart City Condos' },
  ];

  const statusOptions = [
    { id: 'Active', name: 'Active' },
    { id: 'Under Construction', name: 'Under Construction' },
    { id: 'Planned', name: 'Planned' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Building / Tower"
      size="xl"
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-[#006837] hover:bg-[#00522b] text-white font-semibold">Save Building</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-xs">
        <Select label="Project *" value={projectRef} onChange={(opt) => setProjectRef(opt?.name || opt?.id || opt)} options={projectOptions} showSearch={true} />
        <Input label="Building Code" placeholder="e.g. BLD-01" value={buildingCode} onChange={(e) => setBuildingCode(e.target.value)} />
        <Input label="Building Name *" required placeholder="e.g. Tower A - Executive Block" value={buildingName} onChange={(e) => setBuildingName(e.target.value)} />
        <Input label="Tower Name" placeholder="e.g. East Wing Tower" value={tower} onChange={(e) => setTower(e.target.value)} />
        <Input label="Total Floors" type="number" value={floors} onChange={(e) => setFloors(e.target.value)} />
        <Input label="Total Units" type="number" value={units} onChange={(e) => setUnits(e.target.value)} />
        <div className="col-span-2">
          <Select label="Status" value={status} onChange={(opt) => setStatus(opt?.id || opt)} options={statusOptions} showSearch={false} />
        </div>
      </form>
    </Modal>
  );
}

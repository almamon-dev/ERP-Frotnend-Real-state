import React, { useState } from 'react';
import Modal from '@/shared/components/modals/modal';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import { MaintenanceTicketItem } from '../../types/maintenance';

interface MaintenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (ticket: MaintenanceTicketItem) => void;
}

export default function MaintenanceModal({ isOpen, onClose, onSave }: MaintenanceModalProps) {
  const [category, setCategory] = useState('');
  const [propertyRef, setPropertyRef] = useState('Banani Imperial Heights');
  const [unitRef, setUnitRef] = useState('APT-12A');
  const [assignedTechnician, setAssignedTechnician] = useState('Tech. Rashidul Islam');
  const [estimatedCost, setEstimatedCost] = useState('৳ 15,000');
  const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>('High');
  const [status, setStatus] = useState<'Open' | 'In Progress' | 'Resolved'>('Open');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category) return;

    onSave({
      id: String(Date.now()),
      ticketCode: `MNT-${Math.floor(400 + Math.random() * 600)}`,
      category,
      propertyRef: typeof propertyRef === 'object' ? (propertyRef as any).name : propertyRef,
      unitRef,
      assignedTechnician,
      reportedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      estimatedCost,
      priority: typeof priority === 'object' ? (priority as any).id : priority,
      status: typeof status === 'object' ? (status as any).id : status,
    });
    onClose();
  };

  const propertyOptions = [
    { id: '1', name: 'Gulshan Crown Plaza Tower' },
    { id: '2', name: 'Banani Imperial Heights' },
    { id: '3', name: 'Uttara Mega Shopping Mall' },
    { id: '4', name: 'Dhanmondi Lakeview Apartments' },
  ];

  const priorityOptions = [
    { id: 'High', name: 'High Priority' },
    { id: 'Medium', name: 'Medium Priority' },
    { id: 'Low', name: 'Low Priority' },
  ];

  const statusOptions = [
    { id: 'Open', name: 'Open' },
    { id: 'In Progress', name: 'In Progress' },
    { id: 'Resolved', name: 'Resolved' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Maintenance Work Ticket"
      size="xl"
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-[#006837] hover:bg-[#00522b] text-white font-semibold">Save Ticket</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-xs">
        <div className="col-span-2">
          <Input label="Issue Category *" required placeholder="e.g. HVAC Air Conditioning Repair" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <Select label="Select Property *" value={propertyRef} onChange={(opt) => setPropertyRef(opt?.name || opt?.id || opt)} options={propertyOptions} showSearch={true} />
        <Input label="Unit Reference *" required placeholder="e.g. APT-12A" value={unitRef} onChange={(e) => setUnitRef(e.target.value)} />
        <Input label="Assigned Technician / Vendor" value={assignedTechnician} onChange={(e) => setAssignedTechnician(e.target.value)} />
        <Input label="Estimated Repair Cost (৳)" value={estimatedCost} onChange={(e) => setEstimatedCost(e.target.value)} />
        <Select label="Priority Level" value={priority} onChange={(opt) => setPriority(opt?.id || opt)} options={priorityOptions} showSearch={false} />
        <Select label="Ticket Status" value={status} onChange={(opt) => setStatus(opt?.id || opt)} options={statusOptions} showSearch={false} />
      </form>
    </Modal>
  );
}

import React, { useState } from 'react';
import Modal from '@/shared/components/modals/modal';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import { MilestoneItem } from '../../types/milestones';

interface MilestoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (mst: MilestoneItem) => void;
}

export default function MilestoneModal({ isOpen, onClose, onSave }: MilestoneModalProps) {
  const [title, setTitle] = useState('');
  const [projectRef, setProjectRef] = useState('Gulshan Heights Luxury Residency');
  const [targetDate, setTargetDate] = useState('2026-12-31');
  const [assignedTeam, setAssignedTeam] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    onSave({
      id: String(Date.now()),
      milestoneCode: `MST-${Math.floor(200 + Math.random() * 800)}`,
      title,
      projectRef: typeof projectRef === 'object' ? (projectRef as any).name : projectRef,
      targetDate,
      completionPercent: 0,
      assignedTeam: assignedTeam || 'Civil Construction Team A',
      status: 'Pending',
    });
    onClose();
  };

  const projectOptions = [
    { id: '1', name: 'Gulshan Heights Luxury Residency' },
    { id: '2', name: 'Banani Trade Center' },
    { id: '3', name: 'Uttara Smart City Condos' },
    { id: '4', name: 'Purbachal Green Enclave' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Project Milestone"
      size="xl"
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-[#006837] hover:bg-[#00522b] text-white font-semibold">Save Milestone</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-xs">
        <div className="col-span-2">
          <Input label="Milestone Title *" required placeholder="e.g. Substructure Foundation Complete" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="col-span-2">
          <Select label="Select Project *" value={projectRef} onChange={(opt) => setProjectRef(opt?.name || opt?.id || opt)} options={projectOptions} showSearch={true} />
        </div>
        <Input label="Target Date" type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} />
        <Input label="Assigned Team" placeholder="e.g. Structural Engineering Team A" value={assignedTeam} onChange={(e) => setAssignedTeam(e.target.value)} />
      </form>
    </Modal>
  );
}

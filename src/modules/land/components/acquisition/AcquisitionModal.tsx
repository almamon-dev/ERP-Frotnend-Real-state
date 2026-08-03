import React, { useState } from 'react';
import Modal from '@/shared/components/modals/modal';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import { AcquisitionItem } from '../../types/acquisition';

interface AcquisitionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: AcquisitionItem) => void;
}

export default function AcquisitionModal({ isOpen, onClose, onSave }: AcquisitionModalProps) {
  const [projectTitle, setProjectTitle] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [totalAgreedValue, setTotalAgreedValue] = useState('৳ 18.5 Cr');
  const [advancePaid, setAdvancePaid] = useState('৳ 5.0 Cr');
  const [phase, setPhase] = useState('Negotiation');
  const [legalStatus, setLegalStatus] = useState('Clear Title');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectTitle || !sellerName) return;

    onSave({
      id: String(Date.now()),
      acqCode: `ACQ-${Math.floor(100 + Math.random() * 900)}`,
      projectTitle,
      sellerName,
      totalAgreedValue,
      advancePaid,
      balanceDue: '৳ 13.5 Cr',
      phase: typeof phase === 'object' ? (phase as any).id : phase,
      legalStatus: typeof legalStatus === 'object' ? (legalStatus as any).id : legalStatus,
      targetDate: '31 Dec 2026',
    });
    onClose();
  };

  const phaseOptions = [
    { id: 'Negotiation', name: 'Negotiation' },
    { id: 'Due Diligence', name: 'Due Diligence' },
    { id: 'Deed Signed', name: 'Deed Signed' },
    { id: 'Completed', name: 'Completed' },
  ];

  const legalStatusOptions = [
    { id: 'Clear Title', name: 'Clear Title' },
    { id: 'Under Review', name: 'Under Review' },
    { id: 'Disputed', name: 'Disputed' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="New Land Acquisition Record"
      size="xl"
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-[#006837] hover:bg-[#00522b] text-white font-semibold">Save Acquisition</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-xs">
        <div className="col-span-2">
          <Input label="Project & Land Title *" required placeholder="e.g. Uttara Extension Block B Phase 2" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
        </div>
        <Input label="Landowner / Seller Name *" required placeholder="e.g. Al-Haj Rafiqul Islam" value={sellerName} onChange={(e) => setSellerName(e.target.value)} />
        <Input label="Total Agreed Value (৳)" placeholder="e.g. ৳ 18.5 Cr" value={totalAgreedValue} onChange={(e) => setTotalAgreedValue(e.target.value)} />
        <Input label="Advance Amount Paid (৳)" placeholder="e.g. ৳ 5.0 Cr" value={advancePaid} onChange={(e) => setAdvancePaid(e.target.value)} />
        <Select label="Acquisition Phase" value={phase} onChange={(opt) => setPhase(opt?.id || opt)} options={phaseOptions} showSearch={false} />
        <Select label="Legal Status" value={legalStatus} onChange={(opt) => setLegalStatus(opt?.id || opt)} options={legalStatusOptions} showSearch={false} />
      </form>
    </Modal>
  );
}

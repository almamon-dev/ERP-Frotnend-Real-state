import React, { useState } from 'react';
import Modal from '@/shared/components/modals/modal';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import { LandDocumentItem } from '../../types/documents';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (doc: LandDocumentItem) => void;
}

export default function DocumentModal({ isOpen, onClose, onSave }: DocumentModalProps) {
  const [docType, setDocType] = useState('Deed of Sale (Bayamana)');
  const [landReference, setLandReference] = useState('Gulshan Lakefront Plot 42');
  const [mouzaKhatian, setMouzaKhatian] = useState('');
  const [issueDate, setIssueDate] = useState('2026-01-15');
  const [verificationStatus, setVerificationStatus] = useState('Pending Verification');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedRef = typeof landReference === 'object' ? (landReference as any).name : landReference;
    if (!selectedRef) return;

    onSave({
      id: String(Date.now()),
      docCode: `DOC-${Math.floor(800 + Math.random() * 100)}`,
      docType: typeof docType === 'object' ? (docType as any).id : docType,
      landReference: selectedRef,
      mouzaKhatian: mouzaKhatian || 'Dhaka Central Mouza | RS-100',
      issueDate,
      expiryDate: 'Permanent',
      verificationStatus: typeof verificationStatus === 'object' ? (verificationStatus as any).id : verificationStatus,
    });
    onClose();
  };

  const docTypeOptions = [
    { id: 'Deed of Sale (Bayamana)', name: 'Deed of Sale (Bayamana)' },
    { id: 'Mutation Khatian (Namjari)', name: 'Mutation Khatian (Namjari)' },
    { id: 'CS & RS Porcha Verification', name: 'CS & RS Porcha Verification' },
    { id: 'RAJUK Clearance & NOC', name: 'RAJUK Clearance & NOC' },
    { id: 'Land Development Tax Receipt (Khajna)', name: 'Land Development Tax Receipt (Khajna)' },
  ];

  const landReferenceOptions = [
    { id: 'PLT-001', name: 'Gulshan Lakefront Plot 42' },
    { id: 'PLT-002', name: 'Banani Commercial Corner' },
    { id: 'PLT-003', name: 'Uttara Model Town Plot 18' },
    { id: 'PLT-004', name: 'Purbachal Sector 4 Land' },
    { id: 'PLT-005', name: 'Dhanmondi Lakeview Plot' },
  ];

  const statusOptions = [
    { id: 'Verified', name: 'Verified' },
    { id: 'Pending Verification', name: 'Pending Verification' },
    { id: 'Disputed', name: 'Disputed' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Upload Land Legal Document"
      size="xl"
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-[#006837] hover:bg-[#00522b] text-white font-semibold">Upload Document</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-xs">
        <div className="col-span-2">
          <Select label="Document Type *" value={docType} onChange={(opt) => setDocType(opt?.id || opt)} options={docTypeOptions} showSearch={false} />
        </div>
        <div className="col-span-2">
          <Select label="Select Plot / Land Reference *" value={landReference} onChange={(opt) => setLandReference(opt?.name || opt?.id || opt)} options={landReferenceOptions} showSearch={true} />
        </div>
        <Input label="Mouza & Khatian Info" placeholder="e.g. Gulshan Mouza | RS-910" value={mouzaKhatian} onChange={(e) => setMouzaKhatian(e.target.value)} />
        <Input label="Issue Date" type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} />
        <Select label="Verification Status" value={verificationStatus} onChange={(opt) => setVerificationStatus(opt?.id || opt)} options={statusOptions} showSearch={false} />
      </form>
    </Modal>
  );
}

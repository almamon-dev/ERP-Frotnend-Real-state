import React from 'react';
import { Building2, CheckCircle } from 'lucide-react';
import Modal from '@/shared/components/modals/modal';
import { Company } from '../types';

interface Props {
  company: Company | null;
  onClose: () => void;
}

export const CompanyViewModal: React.FC<Props> = ({ company, onClose }) => {
  if (!company) return null;

  return (
    <Modal
      isOpen={!!company}
      onClose={onClose}
      title={<div className="flex items-center gap-2"><Building2 size={20} className="text-indigo-600" /><span>{company.name}</span></div>}
      size="lg"
    >
      <div className="space-y-3 p-2">
        <p><strong>Code:</strong> {company.code}</p>
        <p><strong>Email:</strong> {company.email}</p>
        <p><strong>Phone:</strong> {company.phone}</p>
        <p><strong>Country:</strong> {company.country}</p>
        <p><strong>Status:</strong> {company.status}</p>
      </div>
    </Modal>
  );
};

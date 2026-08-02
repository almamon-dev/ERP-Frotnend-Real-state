import React, { useState } from 'react';
import Modal from '@/shared/components/modals/modal';
import Input from '@/shared/components/ui/input';
import Button from '@/shared/components/ui/button';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  categoryName: string;
  onSave: (item: any) => void;
}

export const MasterDataFormModal: React.FC<Props> = ({ isOpen, onClose, categoryName, onSave }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const handleSave = () => {
    if (!name) return;
    onSave({ id: Date.now().toString(), code: code || `MD-${Date.now()}`, name, status: 'Active' });
    setName(''); setCode('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Add ${categoryName} Option`}>
      <div className="space-y-4 p-2">
        <Input label="Code" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Auto-generated if empty" />
        <Input label="Name *" value={name} onChange={(e) => setName(e.target.value)} placeholder="Option Name" />
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} className="bg-indigo-600 text-white">Save</Button>
        </div>
      </div>
    </Modal>
  );
};

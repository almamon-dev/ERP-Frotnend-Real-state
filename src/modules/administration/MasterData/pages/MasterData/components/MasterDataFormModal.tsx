import React, { useState } from 'react';
import Modal from '@/shared/components/modals/modal';
import Input from '@/shared/components/ui/input';
import Button from '@/shared/components/ui/button';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  categoryName: string;
  initialData?: any;
  onSave: (item: any) => void;
}

export const MasterDataFormModal: React.FC<Props> = ({ isOpen, onClose, categoryName, initialData, onSave }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [code, setCode] = useState(initialData?.code || '');

  React.useEffect(() => {
    setName(initialData?.name || '');
    setCode(initialData?.code || '');
  }, [initialData, isOpen]);

  const handleSave = () => {
    if (!name) return;
    onSave({
      id: initialData?.id || Date.now().toString(),
      code: code || `MD-${Date.now()}`,
      name,
      status: initialData?.status || 'Active',
    });
    setName('');
    setCode('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={initialData ? `Edit ${categoryName} Option` : `Add ${categoryName} Option`}>
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

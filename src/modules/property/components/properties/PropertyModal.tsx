import React, { useState, useEffect } from 'react';
import Modal from '@/shared/components/modals/modal';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import { PropertyItem } from '../../types/properties';

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (prop: PropertyItem) => void;
  propertyToEdit?: PropertyItem | null;
}

export default function PropertyModal({ isOpen, onClose, onSave, propertyToEdit }: PropertyModalProps) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Commercial Building');
  const [landArea, setLandArea] = useState('15 Katha');
  const [builtUpArea, setBuiltUpArea] = useState('1,20,000 Sq Ft');
  const [totalFloors, setTotalFloors] = useState('B2 + G + 18 Floors');
  const [totalUnits, setTotalUnits] = useState('48');
  const [availableUnits, setAvailableUnits] = useState('12');
  const [rajukApprovalNo, setRajukApprovalNo] = useState('RAJUK-2024-9102');
  const [marketValuation, setMarketValuation] = useState('৳ 180.0 Cr');
  const [completionYear, setCompletionYear] = useState('2024');

  useEffect(() => {
    if (propertyToEdit) {
      setName(propertyToEdit.name); setLocation(propertyToEdit.location); setPropertyType(propertyToEdit.propertyType);
      setLandArea(propertyToEdit.landArea); setBuiltUpArea(propertyToEdit.builtUpArea); setTotalFloors(propertyToEdit.totalFloors);
      setTotalUnits(String(propertyToEdit.totalUnits)); setAvailableUnits(String(propertyToEdit.availableUnits));
      setRajukApprovalNo(propertyToEdit.rajukApprovalNo); setMarketValuation(propertyToEdit.marketValuation); setCompletionYear(propertyToEdit.completionYear);
    } else {
      setName(''); setLocation(''); setTotalUnits('48'); setAvailableUnits('12');
    }
  }, [propertyToEdit, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    const tot = Number(totalUnits) || 48;
    const avail = Number(availableUnits) || 12;
    const occRate = `${Math.round(((tot - avail) / tot) * 100)}%`;

    onSave({
      id: propertyToEdit ? propertyToEdit.id : String(Date.now()),
      propertyCode: propertyToEdit ? propertyToEdit.propertyCode : `PRP-${Math.floor(100 + Math.random() * 900)}`,
      name, location: location || 'Dhaka Metropolitan Area',
      propertyType: typeof propertyType === 'object' ? (propertyType as any).id : propertyType,
      landArea: landArea || '15 Katha', builtUpArea: builtUpArea || '1,00,000 Sq Ft',
      totalFloors: totalFloors || 'G + 14 Floors', totalUnits: tot, availableUnits: avail,
      occupancyRate: occRate, rajukApprovalNo: rajukApprovalNo || 'RAJUK-2024-001',
      marketValuation: marketValuation || '৳ 150.0 Cr', completionYear: completionYear || '2024', status: 'Active',
    });
    onClose();
  };

  const typeOptions = [
    { id: 'Commercial Building', name: 'Commercial Building' },
    { id: 'Residential Complex', name: 'Residential Complex' },
    { id: 'Shopping Mall', name: 'Shopping Mall' },
    { id: 'Mixed-Use Tower', name: 'Mixed-Use Tower' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={propertyToEdit ? 'Edit Property Record' : 'Add Enterprise Property'}
      size="xl"
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-[#006837] hover:bg-[#00522b] text-white font-semibold">
            {propertyToEdit ? 'Update Property' : 'Save Property'}
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-xs">
        <div className="col-span-2">
          <Input label="Property Title *" required placeholder="e.g. Gulshan Crown Plaza Tower" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <Input label="Location Address *" required placeholder="e.g. Gulshan Avenue, Dhaka" value={location} onChange={(e) => setLocation(e.target.value)} />
        <Select label="Property Type" value={propertyType} onChange={(opt) => setPropertyType(opt?.id || opt)} options={typeOptions} showSearch={false} />
        <Input label="Total Land Area" placeholder="e.g. 18 Katha" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
        <Input label="Built-Up Area" placeholder="e.g. 1,45,000 Sq Ft" value={builtUpArea} onChange={(e) => setBuiltUpArea(e.target.value)} />
        <Input label="Total Floors Layout" placeholder="e.g. B3 + G + 22 Floors" value={totalFloors} onChange={(e) => setTotalFloors(e.target.value)} />
        <Input label="RAJUK / Plan Approval No" placeholder="e.g. RAJUK-2024-8891" value={rajukApprovalNo} onChange={(e) => setRajukApprovalNo(e.target.value)} />
        <Input label="Total Units" type="number" value={totalUnits} onChange={(e) => setTotalUnits(e.target.value)} />
        <Input label="Available Units" type="number" value={availableUnits} onChange={(e) => setAvailableUnits(e.target.value)} />
        <Input label="Handover Year" placeholder="e.g. 2024" value={completionYear} onChange={(e) => setCompletionYear(e.target.value)} />
        <Input label="Market Valuation (৳)" placeholder="e.g. ৳ 210.0 Cr" value={marketValuation} onChange={(e) => setMarketValuation(e.target.value)} />
      </form>
    </Modal>
  );
}

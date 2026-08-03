import React, { useState } from 'react';
import Modal from '@/shared/components/modals/modal';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import { LandPlotItem } from '../../types/plots';

interface PlotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (plot: LandPlotItem) => void;
}

export default function PlotModal({ isOpen, onClose, onSave }: PlotModalProps) {
  const [plotCode, setPlotCode] = useState('');
  const [plotName, setPlotName] = useState('');
  const [location, setLocation] = useState('');
  const [mouza, setMouza] = useState('');
  const [khatianNo, setKhatianNo] = useState('');
  const [areaKatha, setAreaKatha] = useState('10');
  const [zoning, setZoning] = useState('Residential');
  const [valuation, setValuation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!plotCode || !plotName) return;

    onSave({
      id: String(Date.now()),
      plotCode,
      name: plotName,
      location: location || 'Dhaka Metropolitan Area',
      mouza: mouza || 'Central Mouza',
      khatianNo: khatianNo || 'CS-100, RS-200',
      areaKatha: Number(areaKatha) || 10,
      zoning: typeof zoning === 'object' ? (zoning as any).id : zoning,
      valuation: valuation || '৳ 15.0 Cr',
      status: 'Active',
    });
    onClose();
  };

  const zoningOptions = [
    { id: 'Residential', name: 'Residential' },
    { id: 'Commercial', name: 'Commercial' },
    { id: 'Mixed-Use', name: 'Mixed-Use' },
    { id: 'Industrial', name: 'Industrial' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New Land Plot"
      size="xl"
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-[#006837] hover:bg-[#00522b] text-white font-semibold">Save Land Plot</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-xs">
        <Input label="Plot Code *" required placeholder="e.g. PLT-006" value={plotCode} onChange={(e) => setPlotCode(e.target.value)} />
        <Input label="Plot Name / Title *" required placeholder="e.g. Gulshan Lakefront Plot 42" value={plotName} onChange={(e) => setPlotName(e.target.value)} />
        <Input label="Location Address *" required placeholder="e.g. Gulshan 2, Road 71" value={location} onChange={(e) => setLocation(e.target.value)} />
        <Input label="Mouza Name *" required placeholder="e.g. Gulshan Mouza" value={mouza} onChange={(e) => setMouza(e.target.value)} />
        <Input label="CS / SA / RS / BS Khatian" placeholder="e.g. CS-402, RS-910" value={khatianNo} onChange={(e) => setKhatianNo(e.target.value)} />
        <Input label="Plot Area (in Katha)" type="number" value={areaKatha} onChange={(e) => setAreaKatha(e.target.value)} />
        <Select label="Zoning Type" value={zoning} onChange={(opt) => setZoning(opt?.id || opt)} options={zoningOptions} showSearch={false} />
        <Input label="Market Valuation (৳)" placeholder="e.g. ৳ 45.0 Cr" value={valuation} onChange={(e) => setValuation(e.target.value)} />
      </form>
    </Modal>
  );
}

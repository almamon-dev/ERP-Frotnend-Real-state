import React, { useState } from 'react';
import Modal from '@/shared/components/modals/modal';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import { ProgressReportItem } from '../../types/progress';

interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (rpt: ProgressReportItem) => void;
}

export default function ProgressModal({ isOpen, onClose, onSave }: ProgressModalProps) {
  const [projectRef, setProjectRef] = useState('Gulshan Crown Heights');
  const [reportDate, setReportDate] = useState('2026-08-01');
  const [completionPercent, setCompletionPercent] = useState('42.5');
  const [currentStage, setCurrentStage] = useState('RCC Slab Level 12 Casting');
  const [completedTasks, setCompletedTasks] = useState('Concrete strength test, Rebar inspection');
  const [pendingTasks, setPendingTasks] = useState('Electrical conduit installation');
  const [issues, setIssues] = useState('Minor rain delay on day 2');
  const [photosCount, setPhotosCount] = useState('8');
  const [remarks, setRemarks] = useState('Quality audit passed successfully');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSave({
      id: String(Date.now()),
      reportCode: `RPT-${Math.floor(300 + Math.random() * 700)}`,
      title: `${currentStage} Audit`,
      projectRef: typeof projectRef === 'object' ? (projectRef as any).name : projectRef,
      milestoneRef: currentStage,
      reportedBy: 'Engr. Tanvir Ahmed (Senior QA)',
      reportDate,
      weeklyProgress: Number(completionPercent) || 3.5,
      qualityStatus: 'Approved',
      photoCount: Number(photosCount) || 6,
    });
    onClose();
  };

  const projectOptions = [
    { id: '1', name: 'Gulshan Crown Heights' },
    { id: '2', name: 'Banani Imperial Heights' },
    { id: '3', name: 'Uttara Smart City Condos' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Submit Site Progress Report"
      size="xl"
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-[#006837] hover:bg-[#00522b] text-white font-semibold">Save Progress Report</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-xs">
        <Select label="Project *" value={projectRef} onChange={(opt) => setProjectRef(opt?.name || opt?.id || opt)} options={projectOptions} showSearch={true} />
        <Input label="Report Date *" type="date" value={reportDate} onChange={(e) => setReportDate(e.target.value)} />
        <Input label="Overall Completion (%)" type="number" step="0.1" value={completionPercent} onChange={(e) => setCompletionPercent(e.target.value)} />
        <Input label="Current Construction Stage" placeholder="e.g. RCC Slab Level 12 Casting" value={currentStage} onChange={(e) => setCurrentStage(e.target.value)} />
        <Input label="Completed Tasks Summary" placeholder="e.g. Rebar inspection, Concrete test" value={completedTasks} onChange={(e) => setCompletedTasks(e.target.value)} />
        <Input label="Pending Tasks Summary" placeholder="e.g. Electrical conduit placement" value={pendingTasks} onChange={(e) => setPendingTasks(e.target.value)} />
        <Input label="Site Issues / Delays" placeholder="e.g. Minor rain delay" value={issues} onChange={(e) => setIssues(e.target.value)} />
        <Input label="Photos Attached (Count)" type="number" value={photosCount} onChange={(e) => setPhotosCount(e.target.value)} />
        <div className="col-span-2">
          <Input label="Remarks & Quality Notes" placeholder="e.g. Approved by Senior QA Engineer" value={remarks} onChange={(e) => setRemarks(e.target.value)} />
        </div>
      </form>
    </Modal>
  );
}

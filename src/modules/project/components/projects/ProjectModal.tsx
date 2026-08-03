import React, { useState, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import Modal from '@/shared/components/modals/modal';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import { ProjectItem, ProjectMilestoneInput } from '../../types/projects';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (proj: ProjectItem) => void;
  projectToEdit?: ProjectItem | null;
}

export default function ProjectModal({ isOpen, onClose, onSave, projectToEdit }: ProjectModalProps) {
  const [projectName, setProjectName] = useState('');
  const [location, setLocation] = useState('');
  const [projectType, setProjectType] = useState('Residential Tower');
  const [contractor, setContractor] = useState('');
  const [totalFloors, setTotalFloors] = useState('');
  const [totalBudget, setTotalBudget] = useState('৳ 120.0 Cr');
  const [milestones, setMilestones] = useState<ProjectMilestoneInput[]>([
    { title: 'Foundation & Substructure', targetDate: '2026-08-30' },
  ]);

  useEffect(() => {
    if (projectToEdit) {
      setProjectName(projectToEdit.name);
      setLocation(projectToEdit.location);
      setProjectType(projectToEdit.projectType);
      setContractor(projectToEdit.contractor);
      setTotalFloors(projectToEdit.totalFloors);
      setTotalBudget(projectToEdit.totalBudget);
      setMilestones(projectToEdit.milestones?.length ? projectToEdit.milestones : [{ title: 'Foundation', targetDate: '2026-08-30' }]);
    } else {
      setProjectName(''); setLocation(''); setContractor(''); setTotalFloors('');
      setMilestones([{ title: 'Foundation & Substructure', targetDate: '2026-08-30' }]);
    }
  }, [projectToEdit, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName) return;

    onSave({
      id: projectToEdit ? projectToEdit.id : String(Date.now()),
      projectCode: projectToEdit ? projectToEdit.projectCode : `PRJ-${Math.floor(100 + Math.random() * 900)}`,
      name: projectName,
      location: location || 'Dhaka Central',
      projectType: typeof projectType === 'object' ? (projectType as any).id : projectType,
      contractor: contractor || 'Spectra Engineering Ltd.',
      totalFloors: totalFloors || 'G + 14 Floors',
      totalBudget: totalBudget || '৳ 50.0 Cr',
      disbursedAmount: projectToEdit ? projectToEdit.disbursedAmount : '৳ 10.0 Cr',
      startDate: projectToEdit ? projectToEdit.startDate : '01 Jan 2026',
      completionDate: projectToEdit ? projectToEdit.completionDate : '31 Dec 2027',
      progressPercent: projectToEdit ? projectToEdit.progressPercent : 10,
      status: projectToEdit ? projectToEdit.status : 'Active',
      milestones: milestones.filter((m) => m.title.trim() !== ''),
    });
    onClose();
  };

  const typeOptions = [
    { id: 'Residential Tower', name: 'Residential Tower' },
    { id: 'Commercial Complex', name: 'Commercial Complex' },
    { id: 'Mixed-Use Community', name: 'Mixed-Use Community' },
    { id: 'Land Development', name: 'Land Development' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={projectToEdit ? 'Edit Real Estate Project' : 'Create Real Estate Project with Milestones'}
      size="xl"
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-[#006837] hover:bg-[#00522b] text-white font-semibold">
            {projectToEdit ? 'Update Project' : 'Save Project'}
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
        <div className="grid grid-cols-2 gap-3">
          <Input label="Project Name *" required placeholder="e.g. Gulshan Heights Residency" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
          <Input label="Location Address *" required placeholder="e.g. Gulshan 2, Dhaka" value={location} onChange={(e) => setLocation(e.target.value)} />
          <Select label="Project Type" value={projectType} onChange={(opt) => setProjectType(opt?.id || opt)} options={typeOptions} showSearch={false} />
          <Input label="General Contractor" placeholder="e.g. Spectra Engineers Ltd." value={contractor} onChange={(e) => setContractor(e.target.value)} />
          <Input label="Floors / Layout" placeholder="e.g. B2 + G + 18 Floors" value={totalFloors} onChange={(e) => setTotalFloors(e.target.value)} />
          <Input label="Total Budget (৳)" placeholder="e.g. ৳ 120.0 Cr" value={totalBudget} onChange={(e) => setTotalBudget(e.target.value)} />
        </div>

        <div className="border-t border-slate-200 pt-2.5">
          <div className="flex justify-between items-center mb-1.5">
            <label className="font-bold text-slate-800 text-xs">Project Milestones</label>
            <button type="button" onClick={() => setMilestones(prev => [...prev, { title: '', targetDate: '' }])} className="text-[#006837] font-semibold text-[11.5px] hover:underline flex items-center gap-1">
              <Plus size={12} /> Add Milestone Row
            </button>
          </div>
          <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-slate-50 p-1.5 rounded border border-slate-200">
                <div className="flex-1">
                  <Input placeholder="Milestone Title" value={m.title} onChange={(e) => setMilestones(prev => prev.map((item, i) => i === idx ? { ...item, title: e.target.value } : item))} />
                </div>
                <div className="w-36">
                  <Input type="date" value={m.targetDate} onChange={(e) => setMilestones(prev => prev.map((item, i) => i === idx ? { ...item, targetDate: e.target.value } : item))} />
                </div>
                {milestones.length > 1 && (
                  <button type="button" onClick={() => setMilestones(prev => prev.filter((_, i) => i !== idx))} className="text-red-500 hover:text-red-700 p-1">
                    <Trash2 size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </form>
    </Modal>
  );
}

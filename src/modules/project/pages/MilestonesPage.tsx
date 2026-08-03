import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from '@/shared/components/tables/data-table';
import { MilestoneItem } from '../types/milestones';
import { initialMilestones } from '../data/milestones';
import { getMilestoneColumns } from '../components/milestones/MilestoneColumns';
import MilestoneModal from '../components/milestones/MilestoneModal';

export default function MilestonesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [milestones, setMilestones] = useState<MilestoneItem[]>(initialMilestones);

  const handleSaveMilestone = (newMst: MilestoneItem) => {
    setMilestones((prev) => [...prev, newMst]);
  };

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">Project Milestones</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">
            Land & Project / Project Management / Milestones
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-3.5 py-1.5 bg-[#006837] hover:bg-[#00522b] text-white text-xs font-semibold rounded-[4px] shadow-2xs transition-colors flex items-center gap-1.5"
        >
          <Plus size={14} /> Add Milestone
        </button>
      </div>

      <DataTable
        data={milestones}
        columns={getMilestoneColumns()}
        searchPlaceholder="Search milestone code, title, project, team..."
      />

      <MilestoneModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveMilestone}
      />
    </div>
  );
}

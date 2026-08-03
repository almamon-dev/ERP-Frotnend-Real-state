import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from '@/shared/components/tables/data-table';
import { ProgressReportItem } from '../types/progress';
import { initialProgressReports } from '../data/progress';
import { getProgressColumns } from '../components/progress/ProgressColumns';
import ProgressModal from '../components/progress/ProgressModal';

export default function ProgressPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reports, setReports] = useState<ProgressReportItem[]>(initialProgressReports);

  const handleSaveReport = (newRpt: ProgressReportItem) => {
    setReports((prev) => [...prev, newRpt]);
  };

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">Progress Reports</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">
            Land & Project / Project Management / Progress Reports
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-3.5 py-1.5 bg-[#006837] hover:bg-[#00522b] text-white text-xs font-semibold rounded-[4px] shadow-2xs transition-colors flex items-center gap-1.5"
        >
          <Plus size={14} /> Submit Progress Report
        </button>
      </div>

      <DataTable
        data={reports}
        columns={getProgressColumns()}
        searchPlaceholder="Search report code, title, project, inspector..."
      />

      <ProgressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveReport}
      />
    </div>
  );
}

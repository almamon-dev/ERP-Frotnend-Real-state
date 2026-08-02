import React from 'react';
import { FileText, Plus, Download, Sliders } from 'lucide-react';
import Button from '@/shared/components/ui/button';

interface Props {
  onNewReport: () => void;
}

export const ReportsHeaderSection: React.FC<Props> = ({ onNewReport }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
    <div>
      <h1 className="text-[19px] font-bold text-slate-900 flex items-center gap-2">
        <FileText size={22} className="text-indigo-600" /> Executive & Administrative Reports
      </h1>
      <p className="text-[12px] text-slate-500 mt-0.5">
        Generate, schedule, and export comprehensive enterprise analytics & audit reports.
      </p>
    </div>
    <div className="flex items-center gap-2">
      <Button onClick={onNewReport} className="bg-indigo-600 text-white flex items-center gap-1.5 text-[12px]">
        <Plus size={16} /> Create Custom Report
      </Button>
    </div>
  </div>
);

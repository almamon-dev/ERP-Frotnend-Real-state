import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from '@/shared/components/tables/data-table';
import { LandPlotItem } from '../types/plots';
import { initialPlots } from '../data/plots';
import { getPlotColumns } from '../components/plots/PlotColumns';
import PlotModal from '../components/plots/PlotModal';

export default function PlotsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plots, setPlots] = useState<LandPlotItem[]>(initialPlots);

  const handleSavePlot = (newPlot: LandPlotItem) => {
    setPlots((prev) => [...prev, newPlot]);
  };

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">Land Bank & Plot Management</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">
            Land & Project / Land Management / Land Plots
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-3.5 py-1.5 bg-[#006837] hover:bg-[#00522b] text-white text-xs font-semibold rounded-[4px] shadow-2xs transition-colors flex items-center gap-1.5"
        >
          <Plus size={14} /> Add Land Plot
        </button>
      </div>

      <DataTable
        data={plots}
        columns={getPlotColumns()}
        searchPlaceholder="Search by plot code, name, mouza or khatian..."
      />

      <PlotModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePlot}
      />
    </div>
  );
}

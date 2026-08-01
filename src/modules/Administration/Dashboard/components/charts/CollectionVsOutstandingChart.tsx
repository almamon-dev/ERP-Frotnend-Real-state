import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function CollectionVsOutstandingChart() {
  return (
    <div className="bg-white p-4 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[13.5px] font-bold text-slate-800">Collection VS Outstanding</h3>
        <div className="flex items-center gap-1 text-[11px] text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded cursor-pointer">
          <span>This Month</span>
          <ChevronDown size={12} className="text-slate-400" />
        </div>
      </div>

      <div className="flex items-center gap-4 py-2">
        {/* Donut Chart */}
        <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path stroke="#E2E8F0" strokeWidth="4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            {/* Collected: 52.1% green */}
            <path stroke="#10B981" strokeWidth="4.5" strokeDasharray="52.1, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            {/* Outstanding: 47.9% red */}
            <path stroke="#F43F5E" strokeWidth="4.5" strokeDasharray="47.9, 100" strokeDashoffset="-52.1" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-1">
            <span className="text-[12.5px] font-bold text-slate-900 leading-none">৳ 8.64 Cr</span>
            <span className="text-[9px] text-slate-400 font-medium leading-tight mt-0.5">Total Outstanding</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-3 text-[11px]">
          <div className="flex items-start gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-600 font-medium block">Collected</span>
              <span className="font-bold text-slate-800 text-[12px]">৳ 9.36 Cr</span>
              <span className="text-slate-400 font-normal text-[10.5px] ml-1">(52.1%)</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-600 font-medium block">Outstanding</span>
              <span className="font-bold text-slate-800 text-[12px]">৳ 8.64 Cr</span>
              <span className="text-slate-400 font-normal text-[10.5px] ml-1">(47.9%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

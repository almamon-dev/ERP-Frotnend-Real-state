import React from 'react';
import { leadFunnelData } from '../constants/dashboardData';

export default function LeadConversionFunnel() {
  const widths = ['w-[100%]', 'w-[85%]', 'w-[70%]', 'w-[55%]', 'w-[40%]'];

  return (
    <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-[200px]">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[13px] font-bold text-slate-900">Lead Conversion</h3>
        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">This Month</span>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-1.5">
        {leadFunnelData.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between text-[11px] gap-2">
            <div className="flex-1 flex justify-center">
              <div className={`${widths[idx]} ${item.color} text-white font-extrabold text-[10px] text-center py-0.5 rounded shadow-2xs`}>
                {item.count}
              </div>
            </div>
            <span className="w-24 text-[10.5px] font-semibold text-slate-700 truncate">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Calendar, SlidersHorizontal, ChevronDown, Building2 } from 'lucide-react';

export default function AnalyticsTopHeader() {
  const [selectedCompany, setSelectedCompany] = useState('All Companies');
  const [dateRange, setDateRange] = useState('May 01, 2025 - May 31, 2025');

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 py-1 px-0.5">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Analytics Overview</h1>
        <p className="text-[12.5px] text-slate-500 font-normal mt-0.5">Real-time insights and business intelligence</p>
      </div>

      <div className="flex items-center gap-3">
        {/* Date Range Selector */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/90 rounded-md text-[12px] text-slate-700 font-medium cursor-pointer hover:bg-slate-50 transition-colors shadow-2xs">
          <SlidersHorizontal size={14} className="text-slate-500" />
          <span>{dateRange}</span>
          <Calendar size={14} className="text-slate-500 ml-1" />
        </div>

        {/* Company Dropdown */}
        <div className="relative">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/90 rounded-md text-[12px] text-slate-700 font-medium cursor-pointer hover:bg-slate-50 transition-colors shadow-2xs">
            <Building2 size={14} className="text-slate-500" />
            <span>{selectedCompany}</span>
            <ChevronDown size={14} className="text-slate-400 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

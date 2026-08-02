import React, { useState } from 'react';
import { Calendar, Filter, RefreshCw, Download, BarChart2 } from 'lucide-react';

export default function AnalyticsHeader() {
  const [timeRange, setTimeRange] = useState('q3');
  const [selectedBranch, setSelectedBranch] = useState('all');

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200/80 bg-white p-3.5 rounded-md border border-slate-200/90 shadow-2xs">
      <div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
            <BarChart2 size={16} />
          </div>
          <h1 className="text-base font-bold text-slate-800 tracking-tight">Executive & System Analytics</h1>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
            Live Stream
          </span>
        </div>
        <p className="text-[11.5px] text-slate-500 mt-0.5">
          Real-time enterprise revenue, construction progress, API security load, and sales funnel analytics
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {/* Branch Filter */}
        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/90 px-2.5 py-1 rounded text-[11px]">
          <Filter size={12} className="text-slate-400" />
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="bg-transparent text-slate-700 font-medium focus:outline-none cursor-pointer"
          >
            <option value="all">All Enterprise Sites</option>
            <option value="dhaka">Dhaka Central Hub</option>
            <option value="ctg">Chittagong South</option>
            <option value="sylhet">Sylhet Commercial</option>
          </select>
        </div>

        {/* Date Filter */}
        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/90 px-2.5 py-1 rounded text-[11px]">
          <Calendar size={12} className="text-slate-400" />
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-transparent text-slate-700 font-medium focus:outline-none cursor-pointer"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="q3">Q3 2026</option>
            <option value="year">Full Year 2026</option>
          </select>
        </div>

        {/* Action Buttons */}
        <button
          onClick={() => window.location.reload()}
          className="p-1.5 text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded transition-colors cursor-pointer"
          title="Refresh Data"
        >
          <RefreshCw size={13} />
        </button>

        <button
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors cursor-pointer shadow-2xs"
        >
          <Download size={12} /> Export Report
        </button>
      </div>
    </div>
  );
}

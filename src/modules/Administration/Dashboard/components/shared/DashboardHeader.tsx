import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
      <div>
        <h1 className="text-[20px] font-black text-slate-900 tracking-tight flex items-center gap-1.5">
          Welcome back, Super Admin 👋
        </h1>
        <p className="text-[12px] text-slate-500 font-medium">
          Here's what's happening with your business today.
        </p>
      </div>

      <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-2xs">
        <span className="text-[12px] font-bold text-slate-700">May 20, 2025</span>
        <CalendarIcon size={14} className="text-slate-400" />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import DatePicker from '@/shared/components/ui/date-picker';

export default function DashboardHeader() {
  const [selectedDate, setSelectedDate] = useState('2026-08-02');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

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

      <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 shadow-2xs shrink-0">
        <div className="w-[125px] shrink-0">
          <DatePicker
            value={selectedDate}
            onChange={(val) => setSelectedDate(val)}
            align="right"
            variant="compact"
            size="sm"
            className="border-none bg-transparent h-7 py-0 px-1 hover:bg-transparent shadow-none font-bold text-slate-700 text-[12px]"
          />
        </div>
        <div className="w-px h-3.5 bg-slate-200 shrink-0" />
        <div className="flex items-center gap-1.5 px-1 whitespace-nowrap shrink-0">
          <Clock size={13} className="text-slate-400 shrink-0" />
          <span className="text-[12px] font-mono font-semibold text-slate-600 tabular-nums leading-none">
            {timeStr}
          </span>
        </div>
      </div>
    </div>
  );
}

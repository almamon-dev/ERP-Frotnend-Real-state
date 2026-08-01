import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CalendarEventsWidget() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 20)); // May 2025
  const [selectedDay, setSelectedDay] = useState(20);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const events: Record<number, Array<{ time: string; title: string; subtitle: string; dotColor: string }>> = {
    20: [
      { time: '10:00 AM', title: 'Project Meeting', subtitle: 'Green Park Phase 2', dotColor: 'bg-amber-400' },
      { time: '01:00 PM', title: 'Site Visit - Green Park', subtitle: 'Block A Unit 12B', dotColor: 'bg-emerald-500' },
      { time: '04:00 PM', title: 'Payment Collection Meeting', subtitle: 'Gulshan Branch', dotColor: 'bg-blue-500' },
    ],
    15: [
      { time: '11:30 AM', title: 'BOQ Requisition Review', subtitle: 'Steel & Cement', dotColor: 'bg-emerald-500' },
      { time: '03:00 PM', title: 'Contractor Bill Signoff', subtitle: 'BSRM Steels', dotColor: 'bg-blue-500' },
    ],
    25: [
      { time: '02:00 PM', title: 'Client Lease Signings', subtitle: '3 Apartments', dotColor: 'bg-rose-500' },
    ],
  };

  const activeEvents = events[selectedDay] || [
    { time: 'All Day', title: 'No events scheduled', subtitle: `Selected ${monthNames[month]} ${selectedDay}`, dotColor: 'bg-slate-300' }
  ];

  return (
    <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col mb-3">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[13px] font-bold text-slate-900">Calendar & Events</h3>
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-bold text-slate-700">{monthNames[month]} {year}</span>
          <div className="flex items-center gap-0.5 text-slate-500">
            <button onClick={handlePrevMonth} className="p-0.5 hover:bg-slate-100 rounded cursor-pointer"><ChevronLeft size={14} /></button>
            <button onClick={handleNextMonth} className="p-0.5 hover:bg-slate-100 rounded cursor-pointer"><ChevronRight size={14} /></button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-[9.5px] font-bold text-slate-400 mb-1">
        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
      </div>

      <div className="grid grid-cols-7 text-center text-[11px] font-semibold text-slate-700 gap-y-1 mb-3">
        {Array.from({ length: firstDayOfWeek }).map((_, i) => <span key={`empty-${i}`} />)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const dayNum = i + 1;
          const isSelected = dayNum === selectedDay;
          const dayEvts = events[dayNum];
          return (
            <div key={dayNum} className="relative">
              <button
                onClick={() => setSelectedDay(dayNum)}
                className={`w-full py-0.5 rounded-full cursor-pointer relative transition-none ${
                  isSelected ? 'bg-[#0D6E4F] text-white font-bold' : 'hover:bg-slate-100'
                }`}
              >
                {dayNum}
                {dayEvts && !isSelected && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500" />
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="relative space-y-3.5 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pr-1 flex-1 h-[145px] mb-3">
        <div className="absolute left-[3.5px] top-2 bottom-2 w-[1px] bg-slate-200/80 z-0" />
        {activeEvents.map((evt, idx) => (
          <div key={idx} className="relative flex items-center text-[11px]">
            <span className={`w-2 h-2 rounded-full ${evt.dotColor} shrink-0 relative z-10 ring-2 ring-white`} />
            <span className="w-20 pl-2.5 text-slate-500 font-medium text-[11px] shrink-0">
              {evt.time}
            </span>
            <div className="flex-1 min-w-0 pl-1">
              <h4 className="font-semibold text-slate-800 text-[12.5px] leading-tight truncate">
                {evt.title}
              </h4>
              <span className="text-[11px] font-normal text-slate-400 block mt-0.5">
                {evt.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-2 rounded-md bg-slate-50 hover:bg-slate-100 text-[11px] font-bold text-slate-600 transition-colors cursor-pointer border border-slate-200/80">
        View Full Calendar
      </button>
    </div>
  );
}

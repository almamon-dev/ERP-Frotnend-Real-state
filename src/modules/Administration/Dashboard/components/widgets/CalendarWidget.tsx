import React from 'react';
import { calendarEvents } from '../../constants/dashboardData';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

export default function CalendarWidget() {
  return (
    <div className="bg-white p-5 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-slate-900">Upcoming Agenda & Site Visits</h3>
        <span className="text-[11.5px] font-bold text-[#0D6E4F] hover:underline cursor-pointer">Open Calendar</span>
      </div>

      <div className="space-y-3 flex-1">
        {calendarEvents.map((evt) => (
          <div key={evt.id} className="p-3 rounded-md border border-slate-200/80 bg-slate-50/50 flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                {evt.type}
              </span>
              <h4 className="text-[12.5px] font-bold text-slate-800 mt-1">{evt.title}</h4>
            </div>

            <div className="text-right shrink-0">
              <span className="text-[11px] font-bold text-slate-700 block flex items-center gap-1 justify-end">
                <CalendarIcon size={12} className="text-slate-400" /> {evt.date}
              </span>
              <span className="text-[10px] font-semibold text-slate-400 block flex items-center gap-1 justify-end mt-0.5">
                <Clock size={11} className="text-slate-400" /> {evt.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

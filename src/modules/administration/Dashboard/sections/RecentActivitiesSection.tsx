import React from 'react';
import { recentActivities } from '../constants/dashboardData';

export default function RecentActivities() {
  return (
    <div className="bg-white p-5 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-slate-900">Recent Enterprise Activity Timeline</h3>
        <span className="text-[11.5px] font-bold text-[#0D6E4F] hover:underline cursor-pointer">View Audit Log</span>
      </div>

      <div className="space-y-3 flex-1 overflow-y-auto pr-1">
        {recentActivities.map((act) => (
          <div key={act.id} className="p-3 rounded-md border border-slate-200/80 bg-slate-50/50 flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${act.badgeColor}`}>
                  {act.type.toUpperCase()}
                </span>
                <h4 className="text-[12.5px] font-bold text-slate-800">{act.title}</h4>
              </div>
              <p className="text-[11.5px] text-slate-600 font-medium leading-snug">{act.desc}</p>
            </div>
            <span className="text-[10.5px] font-semibold text-slate-400 shrink-0">{act.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

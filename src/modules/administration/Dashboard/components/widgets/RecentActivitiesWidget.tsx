import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecentActivitiesWidget() {
  const navigate = useNavigate();

  const activities = [
    { date: '28 Jul, 2026', title: 'Casual Leave [CL]', subtitle: '2 Days', dotColor: 'bg-amber-400' },
    { date: '14 Jun, 2026', title: 'Sick Leave [SL]', subtitle: '1 Day', dotColor: 'bg-emerald-500' },
    { date: '05 Jul, 2026', title: 'Expense Claim', subtitle: 'BDT 5,240', dotColor: 'bg-emerald-500' },
    { date: '01 Jul, 2026', title: 'IOU Request', subtitle: 'BDT 10,000', dotColor: 'bg-blue-500' },
    { date: '20 Jun, 2026', title: 'Annual Leave [AL]', subtitle: '3 Days', dotColor: 'bg-rose-500' },
  ];

  return (
    <div className="bg-white p-3 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-[220px]">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[12.5px] font-semibold text-slate-800">Recent Activities</h3>
        <button
          onClick={() => navigate('/administration/dashboard/recent-activities')}
          className="text-[10.5px] font-medium text-slate-500 hover:text-slate-800 cursor-pointer hover:underline bg-transparent border-none p-0"
        >
          View All
        </button>
      </div>

      <div className="relative space-y-2.5 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pr-0.5 flex-1">
        <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-slate-200/80 z-0" />

        {activities.map((act, idx) => (
          <div key={idx} className="relative flex items-center text-[11px]">
            <span className={`w-2 h-2 rounded-full ${act.dotColor} shrink-0 relative z-10 ring-2 ring-white`} />
            <span className="w-20 pl-2 text-slate-400 font-normal text-[10.5px] shrink-0">
              {act.date}
            </span>
            <div className="flex-1 min-w-0 pl-1">
              <h4 className="font-semibold text-slate-800 text-[11.5px] leading-tight truncate">
                {act.title}
              </h4>
              <span className="text-[10px] font-normal text-slate-400 block mt-0.5">
                {act.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

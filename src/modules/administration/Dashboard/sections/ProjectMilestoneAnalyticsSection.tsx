import React from 'react';
import { Building2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ProjectMilestoneAnalytics() {
  const projects = [
    {
      name: 'Gulshan Grand Tower',
      location: 'Gulshan 2, Dhaka',
      progress: 92,
      status: 'Ahead of Schedule',
      budgetStatus: 'Within Budget',
      isOk: true,
    },
    {
      name: 'Banani Luxury Heights',
      location: 'Road 11, Banani',
      progress: 74,
      status: 'On Track',
      budgetStatus: 'Within Budget',
      isOk: true,
    },
    {
      name: 'Dhanmondi Residency',
      location: 'Road 27, Dhanmondi',
      progress: 48,
      status: 'Delayed (Rain)',
      budgetStatus: '+4.2% Variance',
      isOk: false,
    },
    {
      name: 'Uttara Smart Oasis',
      location: 'Sector 4, Uttara',
      progress: 86,
      status: 'On Track',
      budgetStatus: 'Within Budget',
      isOk: true,
    },
  ];

  return (
    <div className="bg-white p-3.5 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-2.5">
        <div>
          <h3 className="text-[12.5px] font-bold text-slate-800">Real Estate Project Milestones</h3>
          <p className="text-[10.5px] text-slate-500">Construction phase tracking & cost variance</p>
        </div>
        <span className="px-1.5 py-0.2 text-[9.5px] font-semibold text-slate-600 bg-slate-100 rounded">
          4 Sites Active
        </span>
      </div>

      <div className="space-y-2.5 flex-1">
        {projects.map((p, idx) => (
          <div key={idx} className="p-2 rounded bg-slate-50/60 border border-slate-200/60">
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-800 mb-1">
              <span className="flex items-center gap-1.5 truncate">
                <Building2 size={13} className="text-slate-500 shrink-0" />
                {p.name}
              </span>
              <span className="text-[10.5px] font-bold text-blue-700">{p.progress}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-200 rounded-full h-1.5 mb-1.5 overflow-hidden">
              <div
                className={`h-1.5 rounded-full transition-all ${
                  p.progress >= 80 ? 'bg-emerald-500' : p.progress >= 50 ? 'bg-blue-600' : 'bg-amber-500'
                }`}
                style={{ width: `${p.progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[9.5px] text-slate-500">
              <span className="flex items-center gap-1">
                {p.isOk ? <CheckCircle2 size={10} className="text-emerald-600" /> : <AlertCircle size={10} className="text-amber-600" />}
                {p.status}
              </span>
              <span className={`font-medium ${p.isOk ? 'text-slate-600' : 'text-rose-600 font-semibold'}`}>
                {p.budgetStatus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

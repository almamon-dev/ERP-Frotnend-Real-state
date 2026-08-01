import React from 'react';
import { Users, Clock, Calendar, DollarSign } from 'lucide-react';

export default function HROverview() {
  const hrMetrics = [
    { label: 'Total Employees', count: '450 Staff', icon: Users, color: 'text-cyan-600 bg-cyan-50' },
    { label: "Today's Attendance", count: '441 Present (98%)', icon: Clock, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Leave Requests', count: '4 Pending', icon: Calendar, color: 'text-amber-600 bg-amber-50' },
    { label: 'Monthly Payroll', count: '৳ 18.5M Disbursed', icon: DollarSign, color: 'text-purple-600 bg-purple-50' },
  ];

  return (
    <div className="bg-white p-5 rounded-md border border-slate-200/90 shadow-2xs">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-slate-900">HR & Workforce Operations</h3>
        <span className="text-[11.5px] font-bold text-[#0D6E4F] hover:underline cursor-pointer">HRMS Portal</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {hrMetrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-3 rounded-md border border-slate-200/80 bg-slate-50/60 flex items-center gap-3">
              <div className={`w-8 h-8 rounded-md ${item.color} flex items-center justify-center shrink-0`}>
                <Icon size={16} />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-500 block">{item.label}</span>
                <span className="text-[13px] font-black text-slate-900 leading-none">{item.count}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

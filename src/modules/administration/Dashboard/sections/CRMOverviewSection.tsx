import React from 'react';
import { Target, Users, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function CRMOverview() {
  const crmMetrics = [
    { label: 'Active Leads', count: '1,840', icon: Target, color: 'text-rose-600 bg-rose-50' },
    { label: 'Enrolled Clients', count: '12,420', icon: Users, color: 'text-purple-600 bg-purple-50' },
    { label: 'Follow-ups Due', count: '142 Today', icon: Calendar, color: 'text-amber-600 bg-amber-50' },
    { label: 'Site Visits', count: '38 Scheduled', icon: MapPin, color: 'text-blue-600 bg-blue-50' },
    { label: 'Conversion Rate', count: '24.8%', icon: TrendingUp, color: 'text-[#0D6E4F] bg-emerald-50' },
  ];

  return (
    <div className="bg-white p-5 rounded-md border border-slate-200/90 shadow-2xs">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-slate-900">CRM & Sales Funnel Pipeline</h3>
        <span className="text-[11.5px] font-bold text-[#0D6E4F] hover:underline cursor-pointer">CRM Analytics</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {crmMetrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-3 rounded-md border border-slate-200/80 bg-slate-50/60 flex items-center gap-3">
              <div className={`w-8 h-8 rounded-md ${item.color} flex items-center justify-center shrink-0`}>
                <Icon size={16} />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-500 block">{item.label}</span>
                <span className="text-[14px] font-black text-slate-900 leading-none">{item.count}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

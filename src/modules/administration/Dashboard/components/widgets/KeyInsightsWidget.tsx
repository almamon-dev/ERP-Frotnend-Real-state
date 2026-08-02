import React from 'react';
import { TrendingUp, Building2, Globe, Award, AlertCircle } from 'lucide-react';

export default function KeyInsightsWidget() {
  const insights = [
    {
      text: 'Revenue increased by 18.7% this month',
      icon: TrendingUp,
      bg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      text: 'Bookings increased by 7.2% this month',
      icon: Building2,
      bg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      text: 'Website leads are the highest (35.2%)',
      icon: Globe,
      bg: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      text: 'Green Park is the top performing project',
      icon: Award,
      bg: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      text: 'Outstanding collection is 47.9% of total',
      icon: AlertCircle,
      bg: 'bg-rose-50 text-rose-600 border-rose-100',
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full">
      <h3 className="text-[13.5px] font-bold text-slate-800 mb-3">Key Insights</h3>

      <div className="space-y-2.5 flex-1">
        {insights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2.5 text-[11.5px] text-slate-700">
              <div className={`w-6 h-6 rounded border ${item.bg} flex items-center justify-center shrink-0`}>
                <Icon size={13} />
              </div>
              <span className="font-medium leading-tight">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

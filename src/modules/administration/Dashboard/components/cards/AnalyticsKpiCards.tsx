import React from 'react';
import { DollarSign, TrendingUp, ShieldCheck, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function AnalyticsKpiCards() {
  const kpis = [
    {
      title: 'Total Gross Revenue',
      value: '৳ 14.82 Cr',
      change: '+14.2% YoY',
      isPositive: true,
      icon: DollarSign,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      title: 'Construction Progress Rate',
      value: '88.4%',
      change: '+3.1% Target',
      isPositive: true,
      icon: TrendingUp,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      title: 'System Security Health',
      value: '99.98%',
      change: '-0.02% Latency',
      isPositive: true,
      icon: ShieldCheck,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      title: 'Lead-to-Booking Rate',
      value: '18.6%',
      change: '-1.2% Conversion',
      isPositive: false,
      icon: Target,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      badgeBg: 'bg-rose-50 text-rose-700 border-rose-200'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {kpis.map((kpi, index) => {
        const Icon = kpi.icon;
        return (
          <div
            key={index}
            className="bg-white p-3 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11.5px] font-semibold text-slate-500">{kpi.title}</span>
              <div className={`w-6 h-6 rounded border ${kpi.color} flex items-center justify-center`}>
                <Icon size={13} />
              </div>
            </div>

            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-lg font-bold text-slate-800 tracking-tight">{kpi.value}</span>
              <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded text-[10px] font-bold border ${kpi.badgeBg}`}>
                {kpi.isPositive ? <ArrowUpRight size={11} /> : <ArrowDownRight size={11} />}
                {kpi.change}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

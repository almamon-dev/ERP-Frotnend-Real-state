import React from 'react';
import { BarChart3, ShoppingCart, Building2, Share2, Users, Target, ArrowUpRight } from 'lucide-react';

interface AnalyticsSummaryCardsProps {
  startDate?: string;
  endDate?: string;
  company?: string;
}

export default function AnalyticsSummaryCards({
  startDate = '2025-05-01',
  endDate = '2025-05-31',
}: AnalyticsSummaryCardsProps) {
  const dateRangeLabel = `(${startDate} to ${endDate})`;
  const cards = [
    {
      title: 'Total Revenue',
      value: '৳ 12.64 Cr',
      trend: '18.7%',
      comparison: dateRangeLabel,
      icon: BarChart3,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      title: 'Total Sales',
      value: '৳ 9.36 Cr',
      trend: '14.3%',
      comparison: dateRangeLabel,
      icon: ShoppingCart,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      title: 'Total Bookings',
      value: '856',
      trend: '7.2%',
      comparison: dateRangeLabel,
      icon: Building2,
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      title: 'Total Leads',
      value: '3,568',
      trend: '9.6%',
      comparison: dateRangeLabel,
      icon: Share2,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      title: 'Total Customers',
      value: '1,245',
      trend: '11.8%',
      comparison: dateRangeLabel,
      icon: Users,
      iconBg: 'bg-teal-50 text-teal-600 border-teal-100',
    },
    {
      title: 'Conversion Rate',
      value: '24.6%',
      trend: '3.4%',
      comparison: dateRangeLabel,
      icon: Target,
      iconBg: 'bg-rose-50 text-rose-600 border-rose-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
      {cards.map((c, idx) => {
        const IconComponent = c.icon;
        return (
          <div
            key={idx}
            className="bg-white p-3.5 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11.5px] font-medium text-slate-500">{c.title}</span>
              <div className={`w-7 h-7 rounded-md border ${c.iconBg} flex items-center justify-center`}>
                <IconComponent size={14} />
              </div>
            </div>

            <div className="mt-2.5">
              <div className="text-base xl:text-lg font-bold text-slate-900 tracking-tight">{c.value}</div>
              <div className="flex items-center gap-1 mt-1 text-[10.5px]">
                <span className="inline-flex items-center font-bold text-emerald-600">
                  <ArrowUpRight size={11} className="mr-0.5" />
                  {c.trend}
                </span>
                <span className="text-slate-400 font-normal truncate">{c.comparison}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

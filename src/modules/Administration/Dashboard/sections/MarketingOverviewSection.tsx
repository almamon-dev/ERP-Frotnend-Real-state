import React from 'react';
import { Share2, Target, DollarSign, Award } from 'lucide-react';

export default function MarketingOverview() {
  const mktgData = [
    { label: 'Active Ad Campaigns', value: '8 Campaigns', sub: 'Meta & Google Ads', icon: Share2, color: 'text-purple-600 bg-purple-50' },
    { label: 'Monthly Ad Spend', value: '৳ 1.2M Budget', sub: '82% utilized', icon: DollarSign, color: 'text-blue-600 bg-blue-50' },
    { label: 'Cost Per Lead (CPL)', value: '৳ 650 / Lead', sub: '-12% reduction', icon: Target, color: 'text-[#0D6E4F] bg-emerald-50' },
    { label: 'Campaign ROI', value: '14.5x Return', sub: 'High performing', icon: Award, color: 'text-amber-600 bg-amber-50' },
  ];

  return (
    <div className="bg-white p-5 rounded-md border border-slate-200/90 shadow-2xs">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-slate-900">Marketing & Lead Acquisition Channels</h3>
        <span className="text-[11.5px] font-bold text-[#0D6E4F] hover:underline cursor-pointer">Marketing Hub</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {mktgData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-3 rounded-md border border-slate-200/80 bg-slate-50/60 flex items-center gap-3">
              <div className={`w-8 h-8 rounded-md ${item.color} flex items-center justify-center shrink-0`}>
                <Icon size={16} />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-500 block">{item.label}</span>
                <span className="text-[14px] font-black text-slate-900 leading-none">{item.value}</span>
                <span className="text-[10px] font-medium text-slate-400 block mt-0.5">{item.sub}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

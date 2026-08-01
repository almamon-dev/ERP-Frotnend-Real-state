import React from 'react';
import { Home, CheckCircle2, Key, Clock } from 'lucide-react';

export default function PropertyOverview() {
  const propertyMetrics = [
    { label: 'Total Units', count: '3,850', icon: Home, color: 'text-[#0D6E4F] bg-emerald-50' },
    { label: 'Available Units', count: '616 (16%)', icon: Clock, color: 'text-blue-600 bg-blue-50' },
    { label: 'Sold Units', count: '2,926 (76%)', icon: CheckCircle2, color: 'text-amber-600 bg-amber-50' },
    { label: 'Rented Units', count: '308 (8%)', icon: Key, color: 'text-purple-600 bg-purple-50' },
  ];

  return (
    <div className="bg-white p-5 rounded-md border border-slate-200/90 shadow-2xs">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-slate-900">Property & Asset Portfolio</h3>
        <span className="text-[11.5px] font-bold text-[#0D6E4F] hover:underline cursor-pointer">View Properties</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {propertyMetrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-3 rounded-md border border-slate-200/80 bg-slate-50/60 flex items-center gap-3">
              <div className={`w-8 h-8 rounded-md ${item.color} flex items-center justify-center shrink-0`}>
                <Icon size={17} />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-500 block">{item.label}</span>
                <span className="text-[14px] font-black text-slate-900 leading-none">{item.count}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
        <div className="bg-[#0D6E4F] h-full" style={{ width: '76%' }} title="Sold 76%" />
        <div className="bg-blue-600 h-full" style={{ width: '16%' }} title="Available 16%" />
        <div className="bg-purple-600 h-full" style={{ width: '8%' }} title="Rented 8%" />
      </div>
    </div>
  );
}

import React from 'react';
import { HardHat, Truck, FileText, Activity } from 'lucide-react';

export default function ConstructionOverview() {
  const siteData = [
    { label: 'Active Site Machinery', value: '42 Heavy Units', icon: Truck, color: 'text-amber-600 bg-amber-50' },
    { label: 'Pending BOQ Bills', value: '৳ 4.2M Requisitions', icon: FileText, color: 'text-rose-600 bg-rose-50' },
    { label: 'Structure Castings', value: '12 Slabs Ready', icon: Activity, color: 'text-[#0D6E4F] bg-emerald-50' },
    { label: 'Sub-Contractors', value: '18 Firms Enlisted', icon: HardHat, color: 'text-blue-600 bg-blue-50' },
  ];

  return (
    <div className="bg-white p-3.5 rounded-md border border-slate-200/90 shadow-2xs">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-[13px] font-bold text-slate-900 leading-none">Construction Operations & Site Logistics</h3>
          <p className="text-[10.5px] text-slate-500 font-medium mt-0.5">Civil engineering & equipment metrics</p>
        </div>
        <span className="text-[10.5px] font-bold text-[#0D6E4F] hover:underline cursor-pointer">Logistics Hub</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {siteData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-2.5 rounded border border-slate-200/80 bg-slate-50/60 flex items-center gap-2.5">
              <div className={`w-7 h-7 rounded ${item.color} flex items-center justify-center shrink-0`}>
                <Icon size={14} />
              </div>
              <div>
                <span className="text-[10.5px] font-semibold text-slate-500 block truncate">{item.label}</span>
                <span className="text-[12.5px] font-black text-slate-900 leading-none">{item.value}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

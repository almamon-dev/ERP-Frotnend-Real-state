import React from 'react';
import { DollarSign, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function SalesOverview() {
  const salesMetrics = [
    { label: 'Q3 Sales Target', value: '৳ 250M', sub: '৳ 185M Booked (74%)', icon: DollarSign, color: 'text-[#0D6E4F] bg-emerald-50' },
    { label: 'Booking Deeds Signed', value: '142 Deeds', sub: '92% verified', icon: CheckCircle, color: 'text-blue-600 bg-blue-50' },
    { label: 'Installments Due', value: '৳ 18.2M', sub: '45 Clients pending', icon: Clock, color: 'text-amber-600 bg-amber-50' },
    { label: 'Default Risk Accounts', value: '4 Bookings', sub: 'Review required', icon: AlertCircle, color: 'text-rose-600 bg-rose-50' },
  ];

  return (
    <div className="bg-white p-5 rounded-md border border-slate-200/90 shadow-2xs">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-slate-900">Sales Performance & Revenue Recovery</h3>
        <span className="text-[11.5px] font-bold text-[#0D6E4F] hover:underline cursor-pointer">Sales Ledger</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {salesMetrics.map((item, idx) => {
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

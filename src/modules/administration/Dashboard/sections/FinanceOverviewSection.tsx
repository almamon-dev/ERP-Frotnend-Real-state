import React from 'react';
import { DollarSign, Wallet, ArrowUpRight, ArrowDownRight, Landmark } from 'lucide-react';

export default function FinanceOverview() {
  const finMetrics = [
    { label: 'Total Inflow', amount: '৳ 142.8M', isPos: true, icon: DollarSign, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Total Outflow', amount: '৳ 48.2M', isPos: false, icon: Wallet, color: 'text-rose-600 bg-rose-50' },
    { label: 'Net Profit Margin', amount: '৳ 94.6M (66%)', isPos: true, icon: ArrowUpRight, color: 'text-blue-600 bg-blue-50' },
    { label: 'Liquid Cash Balance', amount: '৳ 82.4M', isPos: true, icon: Landmark, color: 'text-purple-600 bg-purple-50' },
  ];

  return (
    <div className="bg-white p-5 rounded-md border border-slate-200/90 shadow-2xs">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-slate-900">Financial Ledger & Profitability</h3>
        <span className="text-[11.5px] font-bold text-[#0D6E4F] hover:underline cursor-pointer">Finance Hub</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {finMetrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-3.5 rounded-md border border-slate-200/80 bg-slate-50/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-md ${item.color} flex items-center justify-center shrink-0`}>
                  <Icon size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block">{item.label}</span>
                  <span className="text-[14px] font-black text-slate-900 leading-none">{item.amount}</span>
                </div>
              </div>
              {item.isPos ? (
                <ArrowUpRight size={16} className="text-emerald-600 shrink-0" />
              ) : (
                <ArrowDownRight size={16} className="text-rose-600 shrink-0" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

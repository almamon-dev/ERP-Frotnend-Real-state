import React from 'react';
import { DollarSign } from 'lucide-react';

export default function FinancialTrendChart() {
  const months = [
    { name: 'Jan', revenue: 120, expenses: 75 },
    { name: 'Feb', revenue: 145, expenses: 80 },
    { name: 'Mar', revenue: 160, expenses: 95 },
    { name: 'Apr', revenue: 135, expenses: 85 },
    { name: 'May', revenue: 190, expenses: 110 },
    { name: 'Jun', revenue: 210, expenses: 125 },
    { name: 'Jul', revenue: 240, expenses: 130 },
  ];

  const maxVal = 260;

  return (
    <div className="bg-white p-3.5 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-[12.5px] font-bold text-slate-800">Financial Trend & Operating Margin</h3>
            <span className="px-1.5 py-0.2 text-[9.5px] font-bold bg-blue-50 text-blue-700 border border-blue-200 rounded">
              Monthly
            </span>
          </div>
          <p className="text-[10.5px] text-slate-500">Gross revenue vs operational expense stream (BDT In Lacs)</p>
        </div>
        <div className="flex items-center gap-3 text-[10.5px]">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-600" />
            <span className="text-slate-600 font-medium">Revenue</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-rose-400" />
            <span className="text-slate-600 font-medium">Expenses</span>
          </div>
        </div>
      </div>

      {/* SVG Bar Visual */}
      <div className="h-44 w-full flex items-end justify-between gap-2 pt-4 px-2 border-b border-slate-100">
        {months.map((m, idx) => {
          const revHeight = (m.revenue / maxVal) * 100;
          const expHeight = (m.expenses / maxVal) * 100;
          return (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
              <div className="w-full flex items-end justify-center gap-1 h-full">
                <div
                  style={{ height: `${revHeight}%` }}
                  className="w-3/7 bg-blue-600 rounded-t transition-all group-hover:bg-blue-700 relative"
                  title={`Revenue: ৳${m.revenue} L`}
                />
                <div
                  style={{ height: `${expHeight}%` }}
                  className="w-3/7 bg-rose-400/90 rounded-t transition-all group-hover:bg-rose-500 relative"
                  title={`Expenses: ৳${m.expenses} L`}
                />
              </div>
              <span className="text-[10px] font-medium text-slate-500 group-hover:text-slate-800 transition-colors mt-1">
                {m.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Summary Footer */}
      <div className="pt-2.5 flex items-center justify-between text-[11px] text-slate-600">
        <span className="flex items-center gap-1">
          <DollarSign size={12} className="text-emerald-600" /> Net Profit Margin: <strong className="text-slate-800">45.8%</strong>
        </span>
        <span className="text-[10px] text-slate-400">Audited Q3 ERP Ledger</span>
      </div>
    </div>
  );
}

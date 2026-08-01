import React from 'react';
import { Filter, Users, ArrowDown } from 'lucide-react';

export default function SalesFunnelPerformance() {
  const funnelSteps = [
    { label: 'Total Inquiries / Leads', count: '4,850', percent: '100%', color: 'bg-blue-600' },
    { label: 'Qualified Leads', count: '2,420', percent: '49.8%', color: 'bg-indigo-600' },
    { label: 'Site Visits Arranged', count: '1,180', percent: '24.3%', color: 'bg-purple-600' },
    { label: 'Token Payments Received', count: '540', percent: '11.1%', color: 'bg-emerald-600' },
    { label: 'Final Deed Executed', count: '420', percent: '8.6%', color: 'bg-teal-600' },
  ];

  return (
    <div className="bg-white p-3.5 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-2.5">
        <div>
          <h3 className="text-[12.5px] font-bold text-slate-800">Sales & CRM Lead Conversion</h3>
          <p className="text-[10.5px] text-slate-500">Pipeline conversion velocity from inquiry to final deed</p>
        </div>
        <span className="px-1.5 py-0.2 text-[9.5px] font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded">
          Funnel Flow
        </span>
      </div>

      <div className="space-y-1.5 flex-1">
        {funnelSteps.map((step, idx) => (
          <div key={idx} className="relative">
            <div className="p-2 rounded bg-slate-50 border border-slate-200/70 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${step.color}`} />
                <span className="text-[11px] font-semibold text-slate-700">{step.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11.5px] font-bold text-slate-800 font-mono">{step.count}</span>
                <span className="text-[9.5px] font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                  {step.percent}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

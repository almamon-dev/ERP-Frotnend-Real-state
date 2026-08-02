import React from 'react';

interface FunnelStep {
  stage: string;
  count: string;
  pct: number;
  color: string;
}

interface AnalyticsFunnelChartProps {
  title: string;
  steps: FunnelStep[];
}

export default function AnalyticsFunnelChart({ title, steps }: AnalyticsFunnelChartProps) {
  return (
    <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full">
      <h4 className="text-[13px] font-bold text-slate-900 mb-3">{title}</h4>

      <div className="space-y-2 py-1 my-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-3 text-[11px]">
            <span className="w-20 text-slate-600 font-semibold truncate">{step.stage}</span>
            <div className="flex-1 bg-slate-100 h-6 rounded-md overflow-hidden flex items-center px-1">
              <div
                className="h-full rounded transition-all flex items-center justify-between px-2 text-white font-bold text-[10px]"
                style={{ width: `${step.pct}%`, backgroundColor: step.color }}
              >
                <span>{step.count}</span>
                <span className="opacity-90">{step.pct}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';

interface GroupBarData {
  label: string;
  val1: number;
  val2: number;
}

interface AnalyticsGroupedBarChartProps {
  title: string;
  subtitle?: string;
  data: GroupBarData[];
  series1Name: string;
  series1Color: string;
  series2Name: string;
  series2Color: string;
  height?: number;
}

export default function AnalyticsGroupedBarChart({
  title,
  subtitle,
  data,
  series1Name,
  series1Color = '#10B981',
  series2Name,
  series2Color = '#EF4444',
  height = 160,
}: AnalyticsGroupedBarChartProps) {
  const maxVal = Math.max(...data.map((d) => Math.max(d.val1, d.val2))) * 1.15 || 100;

  const yTicks = [
    { ratio: 0, label: `${Math.round(maxVal)}` },
    { ratio: 0.5, label: `${Math.round(maxVal * 0.5)}` },
    { ratio: 1, label: `0` },
  ];

  return (
    <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h4 className="text-[13px] font-bold text-slate-900 leading-tight">{title}</h4>
          {subtitle && <p className="text-[10.5px] text-slate-500">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-3 text-[10.5px] font-medium text-slate-600">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: series1Color }} />
            {series1Name}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: series2Color }} />
            {series2Name}
          </span>
        </div>
      </div>

      {/* SVG / CSS Container with Y-Axis */}
      <div className="w-full flex items-stretch gap-2 my-auto" style={{ height: `${height}px` }}>
        {/* Y-Axis Labels */}
        <div className="flex flex-col justify-between text-[9.5px] font-medium text-slate-400 pb-5 pr-1">
          {yTicks.map((t, idx) => (
            <span key={idx}>{t.label}</span>
          ))}
        </div>

        {/* Bars Container */}
        <div className="flex-1 flex items-end justify-between gap-2 border-b border-slate-100 pt-2 pb-1 relative">
          {data.map((d, idx) => {
            const h1 = (d.val1 / maxVal) * 100;
            const h2 = (d.val2 / maxVal) * 100;
            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                <div className="w-full flex items-end justify-center gap-1 h-full">
                  <div
                    style={{ height: `${h1}%`, backgroundColor: series1Color }}
                    className="w-1/2 rounded-t transition-all hover:opacity-90"
                    title={`${series1Name}: ${d.val1}`}
                  />
                  <div
                    style={{ height: `${h2}%`, backgroundColor: series2Color }}
                    className="w-1/2 rounded-t transition-all hover:opacity-90"
                    title={`${series2Name}: ${d.val2}`}
                  />
                </div>
                <span className="text-[9px] font-medium text-slate-400 mt-1">{d.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

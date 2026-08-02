import React from 'react';

interface Slice {
  name: string;
  value: number;
  pct: number;
  color: string;
}

interface AnalyticsDonutChartProps {
  title: string;
  slices: Slice[];
  centerLabel?: string;
  centerValue?: string;
}

export default function AnalyticsDonutChart({
  title,
  slices,
  centerLabel,
  centerValue,
}: AnalyticsDonutChartProps) {
  const total = slices.reduce((acc, s) => acc + s.value, 0);

  // Calculate SVG stroke dashes for circle arcs
  let accumulatedPct = 0;
  const radius = 38;
  const circumference = 2 * Math.PI * radius; // ~238.76

  return (
    <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full">
      <h4 className="text-[13px] font-bold text-slate-900 mb-3">{title}</h4>

      <div className="flex items-center justify-between gap-4 my-auto">
        {/* SVG Donut */}
        <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            {slices.map((slice, idx) => {
              const strokeDasharray = `${(slice.pct / 100) * circumference} ${circumference}`;
              const strokeDashoffset = -((accumulatedPct / 100) * circumference);
              accumulatedPct += slice.pct;

              return (
                <circle
                  key={idx}
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="transparent"
                  stroke={slice.color}
                  strokeWidth="14"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-300 hover:opacity-90 cursor-pointer"
                />
              );
            })}
          </svg>
          {centerValue && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[13px] font-black text-slate-900 leading-none">{centerValue}</span>
              {centerLabel && <span className="text-[9px] font-semibold text-slate-400 block mt-0.5">{centerLabel}</span>}
            </div>
          )}
        </div>

        {/* Legend on Right Side */}
        <div className="flex-1 space-y-1.5 min-w-0">
          {slices.map((slice, idx) => (
            <div key={idx} className="flex items-center justify-between text-[11px] font-medium">
              <div className="flex items-center gap-1.5 truncate">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: slice.color }} />
                <span className="text-slate-600 truncate">{slice.name}</span>
              </div>
              <span className="font-bold text-slate-900 shrink-0 ml-2">{slice.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

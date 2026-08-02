import React from 'react';
import Select from '@/shared/components/ui/select';

interface DataPoint {
  label: string;
  value: number;
}

interface AnalyticsLineChartProps {
  title: string;
  subtitle?: string;
  data: DataPoint[];
  color?: string; // hex color e.g. '#10B981' or '#3B82F6'
  gradientId: string;
  yAxisSuffix?: string;
  height?: number;
}

export default function AnalyticsLineChart({
  title,
  subtitle = 'Revenue (৳)',
  data,
  color = '#10B981',
  gradientId,
  yAxisSuffix = 'k',
  height = 170,
}: AnalyticsLineChartProps) {
  const [period, setPeriod] = React.useState('this_month');
  if (!data || data.length === 0) return null;

  const periodOptions = [
    { id: 'this_month', name: 'This Month' },
    { id: 'last_month', name: 'Last Month' },
    { id: 'this_year', name: 'This Year' },
  ];

  const rawMax = Math.max(...data.map((d) => d.value));
  const maxVal = Math.ceil((rawMax * 1.15) / 10) * 10 || 100;

  const width = 500;
  const chartHeight = 150;
  const paddingLeft = 42;
  const paddingRight = 15;
  const paddingTop = 15;
  const paddingBottom = 25;

  const innerWidth = width - paddingLeft - paddingRight;
  const innerHeight = chartHeight - paddingTop - paddingBottom;

  // Calculate Y ticks (4 levels)
  const yTicks = [
    { ratio: 0, label: `${Math.round(maxVal)}${yAxisSuffix}` },
    { ratio: 0.33, label: `${Math.round(maxVal * 0.67)}${yAxisSuffix}` },
    { ratio: 0.67, label: `${Math.round(maxVal * 0.33)}${yAxisSuffix}` },
    { ratio: 1, label: `0` },
  ];

  // Calculate SVG points
  const points = data.map((d, i) => {
    const x = paddingLeft + (i / (data.length - 1)) * innerWidth;
    const y = paddingTop + (1 - d.value / maxVal) * innerHeight;
    return { x, y, label: d.label, val: d.value };
  });

  // Construct smooth cubic bezier path
  let pathD = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const curr = points[i];
    const next = points[i + 1];
    const controlX = (curr.x + next.x) / 2;
    pathD += ` C ${controlX} ${curr.y}, ${controlX} ${next.y}, ${next.x} ${next.y}`;
  }

  const fillD = `${pathD} L ${points[points.length - 1].x} ${chartHeight - paddingBottom} L ${points[0].x} ${chartHeight - paddingBottom} Z`;

  return (
    <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h4 className="text-[13px] font-bold text-slate-900 leading-tight">{title}</h4>
          <span className="text-[10.5px] font-semibold text-slate-500 flex items-center gap-1.5 mt-0.5">
            <span className="w-2.5 h-1 rounded-full" style={{ backgroundColor: color }} />
            {subtitle}
          </span>
        </div>
        <div className="w-[110px]">
          <Select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            options={periodOptions}
            showSearch={false}
          />
        </div>
      </div>

      {/* SVG Container with Y-Axis and Horizontal Grid Lines */}
      <div className="w-full relative my-auto" style={{ height: `${height}px` }}>
        <svg
          viewBox={`0 0 ${width} ${chartHeight}`}
          preserveAspectRatio="none"
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.30" />
              <stop offset="100%" stopColor={color} stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Horizontal Grid Lines & Y-Axis Labels */}
          {yTicks.map((tick, idx) => {
            const y = paddingTop + tick.ratio * innerHeight;
            return (
              <g key={idx}>
                <text
                  x={paddingLeft - 8}
                  y={y + 3.5}
                  textAnchor="end"
                  fill="#94A3B8"
                  fontSize="9.5"
                  fontWeight="500"
                >
                  {tick.label}
                </text>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={width - paddingRight}
                  y2={y}
                  stroke="#E2E8F0"
                  strokeDasharray="3 3"
                  strokeWidth="1"
                />
              </g>
            );
          })}

          {/* Area Fill */}
          <path d={fillD} fill={`url(#${gradientId})`} />

          {/* Line Stroke */}
          <path d={pathD} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Data Points */}
          {points.map((p, i) => (
            <g key={i} className="group cursor-pointer">
              <circle cx={p.x} cy={p.y} r="3.5" fill="#FFFFFF" stroke={color} strokeWidth="2" />
              <circle cx={p.x} cy={p.y} r="6" fill={color} opacity="0" className="group-hover:opacity-20 transition-opacity" />
              <text
                x={p.x}
                y={chartHeight - 6}
                textAnchor="middle"
                fill="#94A3B8"
                fontSize="9"
                fontWeight="500"
              >
                {p.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

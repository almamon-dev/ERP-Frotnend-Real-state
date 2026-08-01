import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Select from '@/components/ui/select';

export default function RevenueOverviewChart() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');

  const periodMap: Record<string, { valueText: string; badgeText: string; data: Array<{ day: string; value: number }> }> = {
    'This Month': {
      valueText: '৳ 12.64 Crore',
      badgeText: '+18.7% vs last month',
      data: [
        { day: '01 May', value: 5.8 }, { day: '06 May', value: 9.2 }, { day: '11 May', value: 8.1 },
        { day: '16 May', value: 13.4 }, { day: '20 May', value: 10.2 }, { day: '26 May', value: 16.2 }, { day: '31 May', value: 15.5 },
      ]
    },
    '12 Months': {
      valueText: '৳ 124.50 Crore',
      badgeText: '+24.8% YoY Growth',
      data: [
        { day: 'Jan', value: 7.2 }, { day: 'Feb', value: 7.9 }, { day: 'Mar', value: 8.4 },
        { day: 'Apr', value: 9.1 }, { day: 'May', value: 10.5 }, { day: 'Jun', value: 11.2 },
        { day: 'Jul', value: 10.8 }, { day: 'Aug', value: 11.5 }, { day: 'Sep', value: 12.1 },
        { day: 'Oct', value: 13.0 }, { day: 'Nov', value: 14.2 }, { day: 'Dec', value: 15.5 },
      ]
    },
    '6 Months': {
      valueText: '৳ 68.20 Crore',
      badgeText: '+16.3% vs prev 6M',
      data: [
        { day: 'Dec', value: 9.5 }, { day: 'Jan', value: 10.2 }, { day: 'Feb', value: 10.8 },
        { day: 'Mar', value: 11.4 }, { day: 'Apr', value: 12.0 }, { day: 'May', value: 14.3 },
      ]
    },
    'Apr 2025': {
      valueText: '৳ 10.82 Crore',
      badgeText: '+12.4% vs last month',
      data: [
        { day: '01 Apr', value: 4.8 }, { day: '06 Apr', value: 7.9 }, { day: '11 Apr', value: 7.2 },
        { day: '16 Apr', value: 11.2 }, { day: '20 Apr', value: 9.1 }, { day: '26 Apr', value: 14.1 }, { day: '30 Apr', value: 13.8 },
      ]
    },
    'Mar 2025': {
      valueText: '৳ 9.65 Crore',
      badgeText: '+8.2% vs last month',
      data: [
        { day: '01 Mar', value: 4.2 }, { day: '06 Mar', value: 6.8 }, { day: '11 Mar', value: 6.5 },
        { day: '16 Mar', value: 9.8 }, { day: '20 Mar', value: 8.4 }, { day: '26 Mar', value: 12.2 }, { day: '31 Mar', value: 11.9 },
      ]
    },
  };

  const currentInfo = periodMap[selectedPeriod] || periodMap['This Month'];

  const selectOptions = [
    { id: 'This Month', name: 'This Month' },
    { id: '12 Months', name: '12 Months' },
    { id: '6 Months', name: '6 Months' },
    { id: 'Apr 2025', name: 'April 2025' },
    { id: 'Mar 2025', name: 'March 2025' },
  ];

  return (
    <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-[230px]">
      {/* Header with z-30 stack so popover sits above chart SVG */}
      <div className="flex items-center justify-between mb-1 relative z-30">
        <h3 className="text-[13px] font-bold text-slate-900">Revenue Overview</h3>
        <div className="w-28 scale-90 origin-right">
          <Select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            options={selectOptions}
            showSearch={false}
          />
        </div>
      </div>

      <div className="flex items-baseline gap-2 mb-2 relative z-10">
        <span className="text-[16px] font-black text-slate-900">{currentInfo.valueText}</span>
        <span className="text-[10.5px] font-bold text-emerald-600 bg-emerald-50/80 px-1.5 py-0.5 rounded">
          {currentInfo.badgeText}
        </span>
      </div>

      <div className="flex-1 w-full relative z-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={currentInfo.data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="revGreenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 9 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 5, 10, 15, 20]}
              domain={[0, 20]}
              tickFormatter={(v) => (v === 0 ? '0' : `${v} Cr`)}
              tick={{ fill: '#94a3b8', fontSize: 9 }}
            />
            <Tooltip contentStyle={{ borderRadius: '6px', fontSize: '10px' }} />
            <Area type="linear" dataKey="value" stroke="#22c55e" strokeWidth={1.8} fillOpacity={1} fill="url(#revGreenGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

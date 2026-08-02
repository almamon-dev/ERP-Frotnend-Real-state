import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Select from '@/shared/components/ui/select';

export default function SalesOverviewChart() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');

  const periodMap: Record<string, { valueText: string; badgeText: string; data: Array<{ day: string; value: number }> }> = {
    'This Month': {
      valueText: '৳ 9.36 Crore',
      badgeText: '+14.3% vs last month',
      data: [
        { day: '01 May', value: 5.8 }, { day: '06 May', value: 9.2 }, { day: '11 May', value: 8.1 },
        { day: '16 May', value: 13.4 }, { day: '20 May', value: 10.2 }, { day: '26 May', value: 16.2 }, { day: '31 May', value: 15.5 },
      ]
    },
    '12 Months': {
      valueText: '৳ 98.40 Crore',
      badgeText: '+21.2% YoY Growth',
      data: [
        { day: 'Jan', value: 5.4 }, { day: 'Feb', value: 6.1 }, { day: 'Mar', value: 6.8 },
        { day: 'Apr', value: 7.3 }, { day: 'May', value: 8.5 }, { day: 'Jun', value: 9.2 },
        { day: 'Jul', value: 8.9 }, { day: 'Aug', value: 9.4 }, { day: 'Sep', value: 10.1 },
        { day: 'Oct', value: 11.2 }, { day: 'Nov', value: 12.0 }, { day: 'Dec', value: 13.5 },
      ]
    },
    '6 Months': {
      valueText: '৳ 54.10 Crore',
      badgeText: '+13.8% vs prev 6M',
      data: [
        { day: 'Dec', value: 7.5 }, { day: 'Jan', value: 8.1 }, { day: 'Feb', value: 8.9 },
        { day: 'Mar', value: 9.4 }, { day: 'Apr', value: 10.0 }, { day: 'May', value: 11.2 },
      ]
    },
    'Apr 2025': {
      valueText: '৳ 8.18 Crore',
      badgeText: '+10.1% vs last month',
      data: [
        { day: '01 Apr', value: 4.5 }, { day: '06 Apr', value: 7.2 }, { day: '11 Apr', value: 6.9 },
        { day: '16 Apr', value: 10.5 }, { day: '20 Apr', value: 8.4 }, { day: '26 Apr', value: 12.8 }, { day: '30 Apr', value: 12.1 },
      ]
    },
    'Mar 2025': {
      valueText: '৳ 7.42 Crore',
      badgeText: '+6.8% vs last month',
      data: [
        { day: '01 Mar', value: 3.9 }, { day: '06 Mar', value: 6.1 }, { day: '11 Mar', value: 5.8 },
        { day: '16 Mar', value: 8.9 }, { day: '20 Mar', value: 7.2 }, { day: '26 Mar', value: 11.0 }, { day: '31 Mar', value: 10.5 },
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
      <div className="flex items-center justify-between mb-1 relative z-30">
        <h3 className="text-[13px] font-bold text-slate-900">Sales Overview</h3>
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
        <span className="text-[10.5px] font-bold text-blue-600 bg-blue-50/80 px-1.5 py-0.5 rounded">
          {currentInfo.badgeText}
        </span>
      </div>

      <div className="flex-1 w-full relative z-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={currentInfo.data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="salesBlueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.02} />
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
            <Area type="linear" dataKey="value" stroke="#3b82f6" strokeWidth={1.8} fillOpacity={1} fill="url(#salesBlueGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

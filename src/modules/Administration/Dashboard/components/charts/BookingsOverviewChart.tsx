import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Select from '@/components/ui/select';

export default function BookingsOverviewChart() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');

  const periodMap: Record<string, { valueText: string; badgeText: string; data: Array<{ day: string; value: number }> }> = {
    'This Month': {
      valueText: '856',
      badgeText: '+7.2% vs last month',
      data: [
        { day: '01 May', value: 460 }, { day: '03 May', value: 320 }, { day: '06 May', value: 200 },
        { day: '08 May', value: 330 }, { day: '11 May', value: 710 }, { day: '13 May', value: 400 },
        { day: '16 May', value: 320 }, { day: '18 May', value: 470 }, { day: '20 May', value: 710 },
        { day: '22 May', value: 550 }, { day: '24 May', value: 700 }, { day: '26 May', value: 920 },
        { day: '28 May', value: 630 }, { day: '30 May', value: 450 }, { day: '31 May', value: 710 },
      ]
    },
    '12 Months': {
      valueText: '9,450',
      badgeText: '+18.5% YoY Growth',
      data: [
        { day: 'Jan', value: 520 }, { day: 'Feb', value: 610 }, { day: 'Mar', value: 680 },
        { day: 'Apr', value: 740 }, { day: 'May', value: 856 }, { day: 'Jun', value: 910 },
        { day: 'Jul', value: 780 }, { day: 'Aug', value: 820 }, { day: 'Sep', value: 890 },
        { day: 'Oct', value: 940 }, { day: 'Nov', value: 980 }, { day: 'Dec', value: 1020 },
      ]
    },
    '6 Months': {
      valueText: '5,180',
      badgeText: '+12.1% vs prev 6M',
      data: [
        { day: 'Dec', value: 720 }, { day: 'Jan', value: 780 }, { day: 'Feb', value: 830 },
        { day: 'Mar', value: 890 }, { day: 'Apr', value: 930 }, { day: 'May', value: 1030 },
      ]
    },
    'Apr 2025': {
      valueText: '798',
      badgeText: '+5.4% vs last month',
      data: [
        { day: '01 Apr', value: 410 }, { day: '03 Apr', value: 290 }, { day: '06 Apr', value: 180 },
        { day: '08 Apr', value: 300 }, { day: '11 Apr', value: 650 }, { day: '13 Apr', value: 370 },
        { day: '16 Apr', value: 290 }, { day: '18 Apr', value: 420 }, { day: '20 Apr', value: 650 },
        { day: '22 Apr', value: 510 }, { day: '24 Apr', value: 640 }, { day: '26 Apr', value: 850 },
        { day: '28 Apr', value: 580 }, { day: '30 Apr', value: 680 },
      ]
    },
    'Mar 2025': {
      valueText: '757',
      badgeText: '+4.1% vs last month',
      data: [
        { day: '01 Mar', value: 380 }, { day: '03 Mar', value: 270 }, { day: '06 Mar', value: 160 },
        { day: '08 Mar', value: 280 }, { day: '11 Mar', value: 610 }, { day: '13 Mar', value: 340 },
        { day: '16 Mar', value: 270 }, { day: '18 Mar', value: 390 }, { day: '20 Mar', value: 610 },
        { day: '22 Mar', value: 480 }, { day: '24 Mar', value: 600 }, { day: '26 Mar', value: 790 },
        { day: '28 Mar', value: 540 }, { day: '31 Mar', value: 640 },
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
        <h3 className="text-[13px] font-bold text-slate-900">Bookings Overview</h3>
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
          <BarChart data={currentInfo.data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }} barGap={2}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 9 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 200, 400, 600, 800, 1000, 1200]}
              domain={[0, 1200]}
              tickFormatter={(v) => (v === 0 ? '0' : v >= 1000 ? `${v / 1000}K` : `${v}`)}
              tick={{ fill: '#94a3b8', fontSize: 9 }}
            />
            <Tooltip contentStyle={{ borderRadius: '6px', fontSize: '10px' }} />
            <Bar dataKey="value" fill="#a855f7" radius={[2, 2, 0, 0]} barSize={selectedPeriod === '12 Months' ? 12 : 9} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

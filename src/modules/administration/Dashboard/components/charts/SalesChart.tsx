import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { salesTrendData } from '../../constants/dashboardData';

export default function SalesChart() {
  return (
    <div className="bg-white p-3.5 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-full">
      <div className="mb-2">
        <h3 className="text-[13px] font-bold text-slate-900 leading-none">Property Share</h3>
        <p className="text-[10.5px] text-slate-500 font-medium mt-0.5">Sales breakdown by segment</p>
      </div>

      <div className="flex items-center justify-between flex-1 gap-2">
        <div className="h-[140px] w-[140px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={salesTrendData}
                cx="50%"
                cy="50%"
                innerRadius={36}
                outerRadius={56}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >
                {salesTrendData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: '6px', fontSize: '10.5px', border: '1px solid #e2e8f0', padding: '4px 8px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col gap-1.5 flex-1 pr-1">
          {salesTrendData.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="font-semibold text-slate-700 truncate">{item.name}</span>
              </div>
              <span className="font-bold text-slate-900">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

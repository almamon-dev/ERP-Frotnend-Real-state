import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { propertyStatusData } from '../../constants/dashboardData';

export default function PropertyStatusChart() {
  return (
    <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-[200px]">
      <h3 className="text-[13px] font-bold text-slate-900 mb-2">Property Status</h3>

      <div className="flex items-center justify-between flex-1 gap-2">
        <div className="relative h-[130px] w-[130px] shrink-0 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={propertyStatusData}
                cx="50%"
                cy="50%"
                innerRadius={38}
                outerRadius={56}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {propertyStatusData.map((entry, idx) => (
                  <Cell key={idx} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute text-center">
            <span className="text-[13px] font-black text-slate-900 block leading-none">1,245</span>
            <span className="text-[9px] font-bold text-slate-400">Total</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 flex-1 text-[11px]">
          {propertyStatusData.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                {item.name}
              </span>
              <span className="font-bold text-slate-900">{item.value} ({item.percent})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

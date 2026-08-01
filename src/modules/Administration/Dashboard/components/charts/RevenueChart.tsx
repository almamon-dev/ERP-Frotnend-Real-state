import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { revenueChartData } from '../../constants/dashboardData';

export default function RevenueChart() {
  return (
    <div className="bg-white p-3.5 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-[13px] font-bold text-slate-900 leading-none">Revenue & Collection Trend</h3>
          <p className="text-[10.5px] text-slate-500 font-medium mt-0.5">Monthly breakdown in BDT Millions (৳ M)</p>
        </div>
        <div className="flex items-center gap-3 text-[10.5px] font-bold">
          <span className="flex items-center gap-1 text-[#0D6E4F]">
            <span className="w-2 h-2 rounded-full bg-[#0D6E4F]"></span> Revenue
          </span>
          <span className="flex items-center gap-1 text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span> Collection
          </span>
        </div>
      </div>

      <div className="h-[180px] w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={revenueChartData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} />
            <Tooltip contentStyle={{ borderRadius: '6px', fontSize: '10.5px', border: '1px solid #e2e8f0', padding: '6px 10px' }} />
            <Bar dataKey="revenue" fill="#0D6E4F" radius={[4, 4, 0, 0]} barSize={16} />
            <Line type="monotone" dataKey="collection" stroke="#2563eb" strokeWidth={2.5} dot={{ r: 3, fill: '#2563eb' }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

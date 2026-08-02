import React from 'react';
import { useNavigate } from 'react-router-dom';
import { systemHealthData } from '../../constants/dashboardData';

export default function SystemHealthWidget() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[13px] font-bold text-slate-900">System Health</h3>
        <button
          onClick={() => navigate('/administration/dashboard/system-health')}
          className="text-[11px] font-bold text-blue-600 cursor-pointer hover:underline outline-none"
        >
          View All
        </button>
      </div>

      <div className="space-y-1.5 text-[11px]">
        {systemHealthData.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-50 last:border-none">
            <span className="font-semibold text-slate-600">{item.name}</span>
            <span className="font-extrabold text-emerald-600">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

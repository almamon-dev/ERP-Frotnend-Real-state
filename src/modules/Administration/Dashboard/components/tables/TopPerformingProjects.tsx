import React from 'react';
import { useNavigate } from 'react-router-dom';
import { topProjectsData } from '../../constants/dashboardData';

export default function TopPerformingProjects() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-3 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-[220px]">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[12.5px] font-semibold text-slate-800">Top Performing Projects</h3>
        <button
          onClick={() => navigate('/administration/dashboard/top-projects')}
          className="text-[10.5px] font-medium text-slate-500 hover:text-slate-800 cursor-pointer hover:underline bg-transparent border-none p-0"
        >
          View All
        </button>
      </div>

      <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex-1">
        <table className="w-full text-left text-[11px] border-collapse">
          <thead>
            <tr className="text-[10px] font-semibold text-slate-400 border-b border-slate-100 uppercase">
              <th className="pb-1.5 font-semibold">Project</th>
              <th className="pb-1.5 font-semibold text-right">Sales</th>
              <th className="pb-1.5 font-semibold text-right">Collection</th>
              <th className="pb-1.5 font-semibold text-right">Progress</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 font-normal">
            {topProjectsData.map((proj, idx) => (
              <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-1.5 font-semibold text-slate-800">{proj.name}</td>
                <td className="py-1.5 text-right font-semibold text-slate-700">{proj.sales}</td>
                <td className="py-1.5 text-right text-slate-500">{proj.collection}</td>
                <td className="py-1.5 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <div className="w-12 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${proj.progress}%` }} />
                    </div>
                    <span className="text-[10px] font-medium text-slate-500">{proj.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

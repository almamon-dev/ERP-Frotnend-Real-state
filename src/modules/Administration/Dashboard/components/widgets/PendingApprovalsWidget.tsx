import React from 'react';
import { useNavigate } from 'react-router-dom';
import { pendingApprovalsData } from '../../constants/dashboardData';
import { Clock } from 'lucide-react';

export default function PendingApprovalsWidget() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-3 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-[220px]">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[12.5px] font-semibold text-slate-800">Pending Approvals</h3>
        <button
          onClick={() => navigate('/administration/dashboard/pending-approvals')}
          className="text-[10.5px] font-medium text-slate-500 hover:text-slate-800 cursor-pointer hover:underline bg-transparent border-none p-0"
        >
          View All
        </button>
      </div>

      <div className="space-y-1.5 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pr-0.5 flex-1">
        {pendingApprovalsData.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-50/70 border border-slate-100 text-[11px]">
            <div className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded ${item.color} flex items-center justify-center shrink-0`}>
                <Clock size={11} />
              </div>
              <span className="font-semibold text-slate-800">{item.name}</span>
            </div>
            <span className="px-1.5 py-0.2 rounded-full bg-rose-50 text-rose-600 font-semibold text-[10px] border border-rose-100">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

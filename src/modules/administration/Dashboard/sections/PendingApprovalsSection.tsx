import React from 'react';
import { pendingApprovals } from '../constants/dashboardData';
import { Check, X } from 'lucide-react';

export default function PendingApprovals() {
  return (
    <div className="bg-white p-5 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-slate-900">Pending Executive Approvals</h3>
        <span className="text-[11.5px] font-bold text-amber-600 hover:underline cursor-pointer">Approval Queue ({pendingApprovals.length})</span>
      </div>

      <div className="space-y-3 flex-1 overflow-y-auto pr-1">
        {pendingApprovals.map((item) => (
          <div key={item.id} className="p-3 rounded-md border border-slate-200/80 bg-slate-50/50 flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  {item.type}
                </span>
                <h4 className="text-[12.5px] font-bold text-slate-800">{item.title}</h4>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                Requested by: <span className="font-semibold text-slate-700">{item.requester}</span> • {item.date}
              </p>
              {item.amount && (
                <span className="text-[12px] font-black text-[#0D6E4F] mt-0.5 block">{item.amount}</span>
              )}
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button 
                className="p-1.5 rounded bg-emerald-50 hover:bg-emerald-100 text-[#0D6E4F] border border-emerald-200 cursor-pointer"
                title="Approve Requisition"
              >
                <Check size={14} />
              </button>
              <button 
                className="p-1.5 rounded bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 cursor-pointer"
                title="Reject Requisition"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

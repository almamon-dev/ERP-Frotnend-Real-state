import React from 'react';
import { Clock, CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

export default function PendingApprovalsDetailsPage() {
  const approvalItems = [
    { id: 'APP-801', title: 'Casual Leave [CL]', requestedBy: 'Md. Tanvir Hossain', dept: 'Engineering', duration: '2 Days', date: '29 Jul - 30 Jul, 2026', type: 'Leave', status: 'Pending' },
    { id: 'APP-802', title: 'Official Site Movement', requestedBy: 'Farhana Yasmin', dept: 'Design & UX', duration: '1 Day', date: '28 Jul, 2026', type: 'Movement', status: 'Pending' },
    { id: 'APP-803', title: 'Expense Claim (Conveyance)', requestedBy: 'Kazi Rakib', dept: 'Quality Assurance', duration: 'BDT 5,240', date: '27 Jul, 2026', type: 'Expense', status: 'Pending' },
    { id: 'APP-804', title: 'IOU Advance Request', requestedBy: 'Kamrul Hasan', dept: 'Sales & Marketing', duration: 'BDT 15,000', date: '26 Jul, 2026', type: 'IOU', status: 'Pending' },
    { id: 'APP-805', title: 'Sick Leave [SL]', requestedBy: 'Sharmin Sultana', dept: 'HR & Admin', duration: '1 Day', date: '26 Jul, 2026', type: 'Leave', status: 'Pending' },
    { id: 'APP-806', title: 'Overtime Request', requestedBy: 'Anowar Hossain', dept: 'Operations', duration: '4 Hours', date: '25 Jul, 2026', type: 'Overtime', status: 'Pending' },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-4 bg-slate-50/50 min-h-screen">
      {/* Clean Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2.5 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base font-semibold text-slate-800 tracking-tight">Pending Approval Queue</h1>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
              <Clock size={11} /> 6 Requests Pending
            </span>
          </div>
          <p className="text-[11.5px] text-slate-500 mt-0.5">Manage administrative workflow, leave requests, expense claims, and requisitions</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
          >
            <RefreshCw size={12} className="text-slate-500" /> Refresh Queue
          </button>
        </div>
      </div>

      {/* Approvals Table */}
      <div className="bg-white rounded-md border border-slate-200/90 shadow-2xs p-3 space-y-2.5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h3 className="text-[12.5px] font-semibold text-slate-800">Pending Authorization Requests</h3>
          <span className="text-[10px] font-medium text-slate-500">Real-time Approval Workflow</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200/80 bg-slate-50/50 text-[10.5px] font-semibold text-slate-500 uppercase">
                <th className="py-2 px-2.5">Req ID</th>
                <th className="py-2 px-2.5">Applicant</th>
                <th className="py-2 px-2.5">Department</th>
                <th className="py-2 px-2.5">Request Type</th>
                <th className="py-2 px-2.5">Details</th>
                <th className="py-2 px-2.5">Date</th>
                <th className="py-2 px-2.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[11.5px]">
              {approvalItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2 px-2.5 font-mono text-[10px] text-slate-400 font-semibold">{item.id}</td>
                  <td className="py-2 px-2.5 font-semibold text-slate-800">{item.requestedBy}</td>
                  <td className="py-2 px-2.5 text-slate-600">{item.dept}</td>
                  <td className="py-2 px-2.5">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700">
                      {item.title}
                    </span>
                  </td>
                  <td className="py-2 px-2.5 font-medium text-slate-700">{item.duration}</td>
                  <td className="py-2 px-2.5 text-slate-500">{item.date}</td>
                  <td className="py-2 px-2.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button className="h-6 px-2 text-[10.5px] font-medium bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded flex items-center gap-1 cursor-pointer transition-colors">
                        <CheckCircle2 size={11} /> Approve
                      </button>
                      <button className="h-6 px-2 text-[10.5px] font-medium bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 rounded flex items-center gap-1 cursor-pointer transition-colors">
                        <XCircle size={11} /> Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

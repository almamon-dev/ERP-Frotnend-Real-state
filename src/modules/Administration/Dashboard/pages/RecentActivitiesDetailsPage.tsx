import React from 'react';
import { Activity, RefreshCw, CheckCircle2, UserCheck, FileText, Lock } from 'lucide-react';

export default function RecentActivitiesDetailsPage() {
  const activities = [
    { id: 'ACT-901', date: '28 Jul, 2026 - 10:15 AM', user: 'Al Mamon (Admin)', action: 'Applied for Casual Leave [CL]', details: '2 Days (29 Jul - 30 Jul)', module: 'HRMS', type: 'success' },
    { id: 'ACT-902', date: '28 Jul, 2026 - 09:40 AM', user: 'Md. Ridoy (Supervisor)', action: 'Approved Expense Requisition', details: 'BDT 5,240 (Conveyance Allowance)', module: 'Finance', type: 'success' },
    { id: 'ACT-903', date: '27 Jul, 2026 - 04:20 PM', user: 'Farhana Yasmin', action: 'Uploaded Project Floor Plan Document', details: 'Green Valley Residency Plan v2.pdf', module: 'Projects', type: 'info' },
    { id: 'ACT-904', date: '27 Jul, 2026 - 02:10 PM', user: 'System Administrator', action: 'Role & Access Policy Modified', details: 'Updated Sales Manager Permission Matrix', module: 'Security', type: 'warning' },
    { id: 'ACT-905', date: '26 Jul, 2026 - 11:30 AM', user: 'Kazi Rakib', action: 'Created New Customer Lead', details: 'Skyline Commercial Hub Unit 402', module: 'CRM', type: 'info' },
    { id: 'ACT-906', date: '25 Jul, 2026 - 05:00 PM', user: 'System Daemon', action: 'Daily Automated Database Backup', details: 'WAL Snapshot created (2.4 GB)', module: 'System', type: 'success' },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-4 bg-slate-50/50 min-h-screen">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2.5 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base font-semibold text-slate-800 tracking-tight">Recent System Activity Audit</h1>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
              <Activity size={11} /> Real-time System Stream
            </span>
          </div>
          <p className="text-[11.5px] text-slate-500 mt-0.5">Chronological audit stream of user actions, system changes, and operational logs</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
          >
            <RefreshCw size={12} className="text-slate-500" /> Refresh Stream
          </button>
        </div>
      </div>

      {/* Activity Audit Table */}
      <div className="bg-white rounded-md border border-slate-200/90 shadow-2xs p-3 space-y-2.5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h3 className="text-[12.5px] font-semibold text-slate-800">Operational Log Trail</h3>
          <span className="text-[10px] font-medium text-slate-500">Auto-logged System Actions</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200/80 bg-slate-50/50 text-[10.5px] font-semibold text-slate-500 uppercase">
                <th className="py-2 px-2.5">Log ID</th>
                <th className="py-2 px-2.5">Timestamp</th>
                <th className="py-2 px-2.5">User / Initiator</th>
                <th className="py-2 px-2.5">Module</th>
                <th className="py-2 px-2.5">Action Performed</th>
                <th className="py-2 px-2.5">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[11.5px]">
              {activities.map((act) => (
                <tr key={act.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2 px-2.5 font-mono text-[10px] text-slate-400 font-semibold">{act.id}</td>
                  <td className="py-2 px-2.5 text-slate-500 whitespace-nowrap">{act.date}</td>
                  <td className="py-2 px-2.5 font-semibold text-slate-800 whitespace-nowrap">{act.user}</td>
                  <td className="py-2 px-2.5">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                      {act.module}
                    </span>
                  </td>
                  <td className="py-2 px-2.5 font-medium text-slate-800">{act.action}</td>
                  <td className="py-2 px-2.5 text-slate-500">{act.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

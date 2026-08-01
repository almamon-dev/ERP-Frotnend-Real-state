import React from 'react';
import { Server, Database, ShieldCheck, HardDrive, Activity } from 'lucide-react';

export default function SystemStatus() {
  const statusItems = [
    { name: 'Core API Gateway', status: 'Healthy', ping: '18ms', icon: Server, color: 'text-emerald-600 bg-emerald-50' },
    { name: 'PostgreSQL Database', status: 'Healthy', ping: '4ms', icon: Database, color: 'text-emerald-600 bg-emerald-50' },
    { name: 'Automated Daily Backup', status: 'Passed', ping: 'Today 04:00 AM', icon: HardDrive, color: 'text-blue-600 bg-blue-50' },
    { name: 'Active User Sessions', status: '412 Users', ping: 'Live', icon: Activity, color: 'text-purple-600 bg-purple-50' },
  ];

  return (
    <div className="bg-white p-5 rounded-md border border-slate-200/90 shadow-2xs">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-slate-900">System Infrastructure Health</h3>
        <span className="text-[11.5px] font-bold text-emerald-600 flex items-center gap-1">
          <ShieldCheck size={14} /> 99.99% Uptime
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {statusItems.map((st, idx) => {
          const Icon = st.icon;
          return (
            <div key={idx} className="p-3 rounded-md border border-slate-200/80 bg-slate-50/60 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-md ${st.color} flex items-center justify-center shrink-0`}>
                  <Icon size={15} />
                </div>
                <div>
                  <span className="text-[12px] font-bold text-slate-800 block">{st.name}</span>
                  <span className="text-[10px] font-semibold text-slate-400">{st.ping}</span>
                </div>
              </div>
              <span className="text-[11px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                {st.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from 'react';
import { ShieldAlert, Cpu, Activity, Lock } from 'lucide-react';

export default function SystemSecurityAuditWidget() {
  const metrics = [
    { label: 'API Volume', val: '1,420 req/m', status: 'Optimal', isGreen: true },
    { label: 'Avg Latency', val: '42 ms', status: 'Fast', isGreen: true },
    { label: 'Rate Limit', val: '0 Breaches', status: 'Clean', isGreen: true },
    { label: 'Audit Alerts', val: '2 Verification', status: 'Monitored', isGreen: true },
  ];

  return (
    <div className="bg-white p-3.5 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center">
            <Lock size={12} />
          </div>
          <h3 className="text-[12.5px] font-bold text-slate-800">Security & API Infrastructure</h3>
        </div>
        <span className="px-1.5 py-0.2 text-[9.5px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded">
          Protected
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        {metrics.map((m, idx) => (
          <div key={idx} className="p-2 rounded bg-slate-50 border border-slate-200/70">
            <span className="text-[10px] text-slate-500 font-medium">{m.label}</span>
            <div className="text-[12px] font-bold text-slate-800 mt-0.5">{m.val}</div>
            <div className="text-[9.5px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-1">
              <Activity size={9} /> {m.status}
            </div>
          </div>
        ))}
      </div>

      <div className="p-2 rounded bg-slate-900 text-slate-100 flex items-center justify-between text-[10.5px]">
        <div className="flex items-center gap-2">
          <Cpu size={14} className="text-purple-400" />
          <span>Server Cluster: <strong className="text-white font-mono">aws-ap-south-1</strong></span>
        </div>
        <span className="text-[9.5px] font-mono text-emerald-400">99.98% SLA</span>
      </div>
    </div>
  );
}

import React from 'react';
import {
  Server,
  Cpu,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  Activity,
  Zap,
  HardDrive
} from 'lucide-react';

export default function SystemHealthDetailsPage() {
  const services = [
    { name: 'Core API Gateway', category: 'Backend Microservice', status: 'Operational', latency: '24ms', uptime: '99.99%', memory: '480 MB', version: 'v2.4.1' },
    { name: 'PostgreSQL Main Cluster', category: 'Database', status: 'Optimal', latency: '42ms', uptime: '99.98%', memory: '3.4 GB', version: 'PostgreSQL 16.1' },
    { name: 'Redis Cache & Session Store', category: 'InMemory Cache', status: 'Optimal', latency: '2ms', uptime: '100%', memory: '1.8 GB', version: 'v7.2' },
    { name: 'S3 Document Storage Bucket', category: 'Object Storage', status: 'Healthy', latency: '65ms', uptime: '99.95%', memory: '412 GB', version: 'AWS S3' },
    { name: 'Background Queue Workers', category: 'BullMQ Queue', status: 'Active', latency: '12ms', uptime: '99.99%', memory: '240 MB', version: 'v4.8' },
    { name: 'Email & SMS Notification Gateway', category: 'Integration Service', status: 'Operational', latency: '110ms', uptime: '99.90%', memory: '120 MB', version: 'v1.9' },
    { name: 'Real-time WebSocket Server', category: 'Socket Server', status: 'Operational', latency: '8ms', uptime: '99.99%', memory: '310 MB', version: 'v3.1' },
    { name: 'Authentication & SSO Provider', category: 'Security Service', status: 'Optimal', latency: '18ms', uptime: '100%', memory: '290 MB', version: 'v2.0' },
  ];

  const recentEvents = [
    { title: 'Automated Database Backup Completed', time: '10 mins ago', type: 'success', desc: 'Daily snapshot created successfully (2.4 GB).' },
    { title: 'SSL Certificate Auto-renewed', time: '2 hours ago', type: 'success', desc: 'Domain certificate valid for next 90 days.' },
    { title: 'Minor Latency Spike on Storage API', time: '5 hours ago', type: 'warning', desc: 'Latency briefly reached 240ms, normalized within 2 mins.' },
    { title: 'Queue Worker Auto-scaled (+2 instances)', time: 'Yesterday at 04:30 PM', type: 'info', desc: 'Processed high payload batch import without loss.' },
    { title: 'Redis Cache Flush Completed', time: '2 days ago', type: 'success', desc: 'Cleared stale session keys (14 MB freed).' },
    { title: 'Security Firewall Rules Updated', time: '2 days ago', type: 'success', desc: 'Patched IP rate limiter and WAF filtering policies.' },
    { title: 'Storage Disk De-fragmentation Run', time: '3 days ago', type: 'success', desc: 'Reclaimed 8.4 GB temporary swap file storage.' },
    { title: 'Cluster Health Audit Passed', time: '4 days ago', type: 'info', desc: '0 failed pods across all 12 worker nodes.' },
    { title: 'Log Archival & S3 Migration', time: '5 days ago', type: 'success', desc: 'Compressed & moved historical logs (1.2 GB).' },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-4 bg-slate-50/50 min-h-screen">
      {/* Clean Transparent Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2.5 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base font-semibold text-slate-800 tracking-tight">System Health & Infrastructure Monitor</h1>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              99.98% Operational
            </span>
          </div>
          <p className="text-[11.5px] text-slate-500 mt-0.5">Real-time status monitor of ERP microservices, database, and background queues</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
          >
            <RefreshCw size={12} className="text-slate-500" /> Refresh Monitor
          </button>
        </div>
      </div>

      {/* Top 4 Infrastructure Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        <div className="bg-white p-3 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider block">API Response Time</span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-base font-bold text-slate-800">24 ms</span>
              <span className="text-[10px] font-medium text-emerald-600">Optimal</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
            <Zap size={16} />
          </div>
        </div>

        <div className="bg-white p-3 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider block">CPU Utilization</span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-base font-bold text-slate-800">18.4%</span>
              <span className="text-[10px] font-medium text-emerald-600">Low Load</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Cpu size={16} />
          </div>
        </div>

        <div className="bg-white p-3 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider block">Memory Used</span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-base font-bold text-slate-800">6.7 / 16 GB</span>
              <span className="text-[10px] font-medium text-emerald-600">41.8%</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center">
            <Server size={16} />
          </div>
        </div>

        <div className="bg-white p-3 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider block">Storage Capacity</span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-base font-bold text-slate-800">412 GB</span>
              <span className="text-[10px] font-medium text-slate-500">of 2 TB</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center">
            <HardDrive size={16} />
          </div>
        </div>
      </div>

      {/* Main Content Grid: Service Table & Event Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Active Services (2 Cols) */}
        <div className="lg:col-span-2 bg-white rounded-md border border-slate-200/90 shadow-2xs p-3 space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h3 className="text-[12.5px] font-semibold text-slate-800">Active Microservices & Endpoints</h3>
              <p className="text-[10.5px] text-slate-500">Live operational status and performance latency</p>
            </div>
            <span className="px-2 py-0.5 text-[10px] font-medium text-emerald-700 bg-emerald-50 rounded">8 Active Services</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200/80 bg-slate-50/50 text-[10.5px] font-semibold text-slate-500 uppercase">
                  <th className="py-2 px-2.5">Service Name</th>
                  <th className="py-2 px-2.5">Type</th>
                  <th className="py-2 px-2.5">Status</th>
                  <th className="py-2 px-2.5">Avg Latency</th>
                  <th className="py-2 px-2.5">Uptime</th>
                  <th className="py-2 px-2.5">Memory</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[11.5px]">
                {services.map((srv, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2 px-2.5">
                      <div className="font-semibold text-slate-800">{srv.name}</div>
                      <div className="text-[10px] text-slate-400">{srv.version}</div>
                    </td>
                    <td className="py-2 px-2.5 text-slate-600">{srv.category}</td>
                    <td className="py-2 px-2.5">
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 size={10} /> {srv.status}
                      </span>
                    </td>
                    <td className="py-2 px-2.5 text-slate-700 font-medium">{srv.latency}</td>
                    <td className="py-2 px-2.5 text-emerald-600 font-medium">{srv.uptime}</td>
                    <td className="py-2 px-2.5 text-slate-600">{srv.memory}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Infrastructure Logs & Audits (Expanded Data List) */}
        <div className="bg-white rounded-md border border-slate-200/90 shadow-2xs p-3 space-y-2.5">
          <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-[12.5px] font-semibold text-slate-800">Infrastructure Logs & Audits</h3>
              <p className="text-[10.5px] text-slate-500">Automated system events & audit logs</p>
            </div>
            <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">9 Logs</span>
          </div>

          <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1 [scrollbar-width:none]">
            {recentEvents.map((evt, idx) => (
              <div key={idx} className="flex items-start gap-2.5 pb-2 border-b border-slate-50 last:border-none last:pb-0">
                <div className={`w-4 h-4 rounded-full shrink-0 flex items-center justify-center mt-0.5 ${
                  evt.type === 'success' ? 'bg-emerald-100 text-emerald-700' : evt.type === 'warning' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {evt.type === 'success' ? <CheckCircle2 size={10} /> : evt.type === 'warning' ? <AlertTriangle size={10} /> : <Activity size={10} />}
                </div>
                <div>
                  <h4 className="text-[11.5px] font-medium text-slate-800 leading-snug">{evt.title}</h4>
                  <p className="text-[10.5px] text-slate-500 mt-0.5 leading-snug">{evt.desc}</p>
                  <span className="text-[9.5px] text-slate-400 block mt-0.5">{evt.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Building2, DollarSign, TrendingUp, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function TopProjectsDetailsPage() {
  const projects = [
    { id: 'PRJ-101', name: 'Green Valley Residency', category: 'Residential Apartment', sales: 'BDT 45.2M', collection: 'BDT 38.9M', progress: 85, status: 'Active', manager: 'Anowar Hossain' },
    { id: 'PRJ-102', name: 'Skyline Commercial Hub', category: 'Commercial Plaza', sales: 'BDT 82.5M', collection: 'BDT 64.1M', progress: 78, status: 'Active', manager: 'Kazi Farhan' },
    { id: 'PRJ-103', name: 'Blue Lagoon Villas', category: 'Luxury Housing', sales: 'BDT 32.0M', collection: 'BDT 29.5M', progress: 92, status: 'Completed', manager: 'Tanvir Ahmed' },
    { id: 'PRJ-104', name: 'Metro Trade Center', category: 'Mixed Development', sales: 'BDT 95.8M', collection: 'BDT 72.3M', progress: 64, status: 'Active', manager: 'Kamrul Hasan' },
    { id: 'PRJ-105', name: 'Orchard Garden City', category: 'Residential Land Plot', sales: 'BDT 28.4M', collection: 'BDT 22.1M', progress: 58, status: 'Active', manager: 'Sharmin Sultana' },
    { id: 'PRJ-106', name: 'Crown Heights Tower', category: 'High-rise Residential', sales: 'BDT 110.0M', collection: 'BDT 91.2M', progress: 88, status: 'Active', manager: 'Imran Khan' },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-4 bg-slate-50/50 min-h-screen">
      {/* Clean Transparent Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2.5 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base font-semibold text-slate-800 tracking-tight">Top Performing Real Estate Projects</h1>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              6 Projects Monitored
            </span>
          </div>
          <p className="text-[11.5px] text-slate-500 mt-0.5">Comprehensive real estate project sales, collection performance, and completion progress</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
          >
            <RefreshCw size={12} className="text-slate-500" /> Refresh Data
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-white p-3 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider block">Total Sales Value</span>
            <span className="text-base font-bold text-slate-800 mt-0.5 block">BDT 393.9M</span>
          </div>
          <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <DollarSign size={16} />
          </div>
        </div>

        <div className="bg-white p-3 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider block">Total Collection</span>
            <span className="text-base font-bold text-slate-800 mt-0.5 block">BDT 318.1M</span>
          </div>
          <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
            <TrendingUp size={16} />
          </div>
        </div>

        <div className="bg-white p-3 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider block">Average Progress</span>
            <span className="text-base font-bold text-slate-800 mt-0.5 block">77.5%</span>
          </div>
          <div className="w-8 h-8 rounded bg-purple-50 text-purple-600 flex items-center justify-center">
            <Building2 size={16} />
          </div>
        </div>
      </div>

      {/* Projects Data Table */}
      <div className="bg-white rounded-md border border-slate-200/90 shadow-2xs p-3 space-y-2.5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h3 className="text-[12.5px] font-semibold text-slate-800">Project Performance Overview</h3>
          <span className="text-[10px] font-medium text-slate-500">Sorted by Total Revenue</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200/80 bg-slate-50/50 text-[10.5px] font-semibold text-slate-500 uppercase">
                <th className="py-2 px-2.5">Code</th>
                <th className="py-2 px-2.5">Project Name</th>
                <th className="py-2 px-2.5">Category</th>
                <th className="py-2 px-2.5 text-right">Sales</th>
                <th className="py-2 px-2.5 text-right">Collection</th>
                <th className="py-2 px-2.5">Progress</th>
                <th className="py-2 px-2.5">Project Manager</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[11.5px]">
              {projects.map((proj) => (
                <tr key={proj.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2 px-2.5 font-mono text-[10px] text-slate-400 font-semibold">{proj.id}</td>
                  <td className="py-2 px-2.5 font-semibold text-slate-800">{proj.name}</td>
                  <td className="py-2 px-2.5 text-slate-600">{proj.category}</td>
                  <td className="py-2 px-2.5 text-right font-semibold text-slate-800">{proj.sales}</td>
                  <td className="py-2 px-2.5 text-right text-emerald-600 font-medium">{proj.collection}</td>
                  <td className="py-2 px-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${proj.progress}%` }} />
                      </div>
                      <span className="text-[10px] font-medium text-slate-600">{proj.progress}%</span>
                    </div>
                  </td>
                  <td className="py-2 px-2.5 text-slate-600">{proj.manager}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

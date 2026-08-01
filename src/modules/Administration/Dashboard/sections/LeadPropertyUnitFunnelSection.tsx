import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function LeadPropertyUnitFunnelSection() {
  const leadSources = [
    { label: 'Website', count: '1,256', percent: '35.2%', color: 'bg-emerald-500' },
    { label: 'Facebook', count: '856', percent: '24.0%', color: 'bg-blue-500' },
    { label: 'Google Ads', count: '645', percent: '18.1%', color: 'bg-purple-500' },
    { label: 'Referral', count: '456', percent: '12.8%', color: 'bg-amber-500' },
    { label: 'Others', count: '355', percent: '9.9%', color: 'bg-slate-400' },
  ];

  const propertyStatuses = [
    { label: 'Available', count: '652', percent: '52.4%', color: 'bg-emerald-500' },
    { label: 'Booked', count: '256', percent: '20.6%', color: 'bg-blue-500' },
    { label: 'Sold', count: '210', percent: '16.9%', color: 'bg-rose-500' },
    { label: 'Rented', count: '127', percent: '10.1%', color: 'bg-amber-500' },
  ];

  const unitTypes = [
    { label: 'Apartment', count: '856', percent: '46.2%', color: 'bg-emerald-500' },
    { label: 'Duplex', count: '456', percent: '24.6%', color: 'bg-blue-500' },
    { label: 'Penthouse', count: '256', percent: '13.8%', color: 'bg-purple-500' },
    { label: 'Studio', count: '186', percent: '10.0%', color: 'bg-amber-500' },
    { label: 'Others', count: '100', percent: '5.4%', color: 'bg-slate-400' },
  ];

  const funnelData = [
    { label: 'Leads', count: '3,568', width: '100%', bg: 'bg-blue-500' },
    { label: 'Qualified', count: '2,145', width: '82%', bg: 'bg-teal-500' },
    { label: 'Site Visit', count: '1,256', width: '66%', bg: 'bg-amber-500' },
    { label: 'Proposal', count: '856', width: '50%', bg: 'bg-orange-500' },
    { label: 'Booking', count: '435', width: '34%', bg: 'bg-rose-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Lead Source Analysis */}
      <div className="bg-white p-4 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[13.5px] font-bold text-slate-800">Lead Source Analysis</h3>
          <div className="flex items-center gap-1 text-[11px] text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded cursor-pointer">
            <span>This Month</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path stroke="#E2E8F0" strokeWidth="4.5" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path stroke="#10B981" strokeWidth="4.5" strokeDasharray="35.2, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path stroke="#3B82F6" strokeWidth="4.5" strokeDasharray="24, 100" strokeDashoffset="-35.2" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path stroke="#8B5CF6" strokeWidth="4.5" strokeDasharray="18.1, 100" strokeDashoffset="-59.2" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path stroke="#F59E0B" strokeWidth="4.5" strokeDasharray="12.8, 100" strokeDashoffset="-77.3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-sm font-bold text-slate-900 leading-none">3,568</span>
              <span className="text-[9px] text-slate-400 font-medium leading-tight mt-0.5">Total Leads</span>
            </div>
          </div>

          <div className="flex-1 space-y-1.5 text-[10.5px]">
            {leadSources.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-600 truncate">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${item.color}`} />
                  {item.label}
                </span>
                <span className="text-slate-500 font-normal shrink-0">
                  {item.count} ({item.percent})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Property Status */}
      <div className="bg-white p-4 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[13.5px] font-bold text-slate-800">Property Status</h3>
          <div className="flex items-center gap-1 text-[11px] text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded cursor-pointer">
            <span>This Month</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path stroke="#E2E8F0" strokeWidth="4.5" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path stroke="#10B981" strokeWidth="4.5" strokeDasharray="52.4, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path stroke="#3B82F6" strokeWidth="4.5" strokeDasharray="20.6, 100" strokeDashoffset="-52.4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path stroke="#F43F5E" strokeWidth="4.5" strokeDasharray="16.9, 100" strokeDashoffset="-73" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path stroke="#F59E0B" strokeWidth="4.5" strokeDasharray="10.1, 100" strokeDashoffset="-89.9" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-sm font-bold text-slate-900 leading-none">1,245</span>
              <span className="text-[9px] text-slate-400 font-medium leading-tight mt-0.5">Total Properties</span>
            </div>
          </div>

          <div className="flex-1 space-y-2 text-[10.5px]">
            {propertyStatuses.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-600 truncate">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${item.color}`} />
                  {item.label}
                </span>
                <span className="text-slate-500 font-normal shrink-0">
                  {item.count} ({item.percent})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Unit Type Performance */}
      <div className="bg-white p-4 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[13.5px] font-bold text-slate-800">Unit Type Performance</h3>
          <div className="flex items-center gap-1 text-[11px] text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded cursor-pointer">
            <span>This Month</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path stroke="#E2E8F0" strokeWidth="4.5" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path stroke="#10B981" strokeWidth="4.5" strokeDasharray="46.2, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path stroke="#3B82F6" strokeWidth="4.5" strokeDasharray="24.6, 100" strokeDashoffset="-46.2" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path stroke="#8B5CF6" strokeWidth="4.5" strokeDasharray="13.8, 100" strokeDashoffset="-70.8" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path stroke="#F59E0B" strokeWidth="4.5" strokeDasharray="10, 100" strokeDashoffset="-84.6" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-sm font-bold text-slate-900 leading-none">1,854</span>
              <span className="text-[9px] text-slate-400 font-medium leading-tight mt-0.5">Total Units</span>
            </div>
          </div>

          <div className="flex-1 space-y-1.5 text-[10.5px]">
            {unitTypes.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-600 truncate">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${item.color}`} />
                  {item.label}
                </span>
                <span className="text-slate-500 font-normal shrink-0">
                  {item.count} ({item.percent})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Sales Funnel */}
      <div className="bg-white p-4 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[13.5px] font-bold text-slate-800">Sales Funnel</h3>
          <div className="flex items-center gap-1 text-[11px] text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded cursor-pointer">
            <span>This Month</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
        </div>

        <div className="space-y-2 py-1">
          {funnelData.map((f, idx) => (
            <div key={idx} className="flex items-center justify-between text-[10.5px]">
              <div className="w-full flex items-center justify-center">
                <div
                  style={{ width: f.width }}
                  className={`h-5 ${f.bg} rounded-sm flex items-center justify-between px-2 text-white font-bold text-[10px] transition-all`}
                >
                  <span className="truncate">{f.count}</span>
                  <span className="truncate font-normal text-[9.5px] opacity-90">{f.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

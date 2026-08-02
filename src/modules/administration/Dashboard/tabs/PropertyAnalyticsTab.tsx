import React from 'react';
import { Building2, Home, CheckCircle2, Percent, Layers, Store, Hammer, CheckSquare } from 'lucide-react';
import AnalyticsDonutChart from '../components/charts/AnalyticsDonutChart';

interface PropertyAnalyticsTabProps {
  startDate?: string;
  endDate?: string;
  company?: string;
}

export default function PropertyAnalyticsTab({
  startDate = '2025-05-01',
  endDate = '2025-05-31',
  company = 'all',
}: PropertyAnalyticsTabProps) {
  const kpis = [
    { label: 'Total Properties', val: '8,542', change: '+13.6%', isPos: true, icon: Building2, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Available Units', val: '2,156', change: '-5.2%', isPos: true, icon: Home, color: 'text-blue-600 bg-blue-50' },
    { label: 'Sold Units', val: '5,842', change: '+8.4%', isPos: true, icon: CheckCircle2, color: 'text-amber-600 bg-amber-50' },
    { label: 'Sold Rate', val: '68.4%', change: '+3.1%', isPos: true, icon: Percent, color: 'text-rose-600 bg-rose-50' },
    { label: 'Residential Units', val: '6,245', change: '+11.2%', isPos: true, icon: Layers, color: 'text-teal-600 bg-teal-50' },
    { label: 'Commercial Units', val: '1,456', change: '+4.5%', isPos: true, icon: Store, color: 'text-indigo-600 bg-indigo-50' },
    { label: 'Under Construction', val: '841', change: '-2.1%', isPos: true, icon: Hammer, color: 'text-amber-600 bg-amber-50' },
    { label: 'Completed Projects', val: '32', change: '+2', isPos: true, icon: CheckSquare, color: 'text-emerald-600 bg-emerald-50' },
  ];

  const availSlices = [
    { name: 'Available', value: 25.2, pct: 25.2, color: '#EF4444' },
    { name: 'Sold', value: 68.4, pct: 68.4, color: '#10B981' },
    { name: 'Reserved', value: 6.4, pct: 6.4, color: '#F59E0B' },
  ];

  const propTypeSlices = [
    { name: 'Apartment', value: 68.6, pct: 68.6, color: '#3B82F6' },
    { name: 'Duplex', value: 22.1, pct: 22.1, color: '#10B981' },
    { name: 'Penthouse', value: 16.2, pct: 16.2, color: '#F59E0B' },
    { name: 'Shop', value: 6.5, pct: 6.5, color: '#EC4899' },
    { name: 'Others', value: 3.2, pct: 3.2, color: '#8B5CF6' },
  ];

  const propStatusSlices = [
    { name: 'Under Construction', value: 9.8, pct: 9.8, color: '#3B82F6' },
    { name: 'Ready to Move', value: 32.2, pct: 32.2, color: '#10B981' },
    { name: 'Sold / Handed Over', value: 58.0, pct: 58.0, color: '#F59E0B' },
  ];

  const projectsInventory = [
    { name: 'Green Park', total: 1250, avail: 325, sold: 856, res: 69, rate: 68.5 },
    { name: 'Sunshine City', total: 980, avail: 210, sold: 705, res: 65, rate: 72.0 },
    { name: 'Lake View Heights', total: 850, avail: 145, sold: 640, res: 65, rate: 75.3 },
    { name: 'Green Valley', total: 720, avail: 156, sold: 512, res: 52, rate: 71.1 },
    { name: 'Royal Gardens', total: 640, avail: 132, sold: 468, res: 40, rate: 73.1 },
  ];

  return (
    <div className="space-y-4">
      {/* 8 KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="bg-white p-3.5 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-[11px] font-medium text-slate-500 block mb-0.5">{kpi.label}</span>
                <span className="text-[17px] font-black text-slate-900 leading-tight block">{kpi.val}</span>
                <span className="text-[10.5px] font-bold text-emerald-600 block mt-1">
                  {kpi.change} <span className="text-slate-400 font-normal">({startDate} to {endDate})</span>
                </span>
              </div>
              <div className={`w-9 h-9 rounded-lg ${kpi.color} flex items-center justify-center shrink-0`}>
                <Icon size={18} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <AnalyticsDonutChart title="Available vs Sold Units" slices={availSlices} centerValue="8,542" />
        <AnalyticsDonutChart title="Property Type Distribution" slices={propTypeSlices} />

        {/* Unit Availability by Floor */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <h4 className="text-[13px] font-bold text-slate-900 mb-2">Unit Availability by Floor</h4>
          <div className="h-36 flex items-end justify-between gap-1 pt-4 pb-1 border-b border-slate-100">
            {[25, 45, 60, 30, 80, 55, 90, 40, 70, 85, 35, 65, 50, 75, 40].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center h-full justify-end group">
                <div className="w-full bg-teal-500 group-hover:bg-teal-600 rounded-t transition-all" style={{ height: `${h}%` }} />
                <span className="text-[8px] font-medium text-slate-400 mt-1">{i + 1}</span>
              </div>
            ))}
          </div>
          <span className="text-[9.5px] text-slate-400 block text-center mt-1">Floors 1 to 15</span>
        </div>
      </div>

      {/* Bottom Row Tables & Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs">
          <h4 className="text-[13px] font-bold text-slate-900 mb-3">Project Wise Inventory</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px]">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold">
                  <th className="py-2">Project</th>
                  <th className="py-2">Total Units</th>
                  <th className="py-2">Available</th>
                  <th className="py-2">Sold</th>
                  <th className="py-2">Reserved</th>
                  <th className="py-2 text-right">Sold Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {projectsInventory.map((p, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-2 font-semibold text-slate-900">{p.name}</td>
                    <td className="py-2">{p.total}</td>
                    <td className="py-2 text-rose-600 font-bold">{p.avail}</td>
                    <td className="py-2 text-emerald-600 font-bold">{p.sold}</td>
                    <td className="py-2 text-amber-600 font-bold">{p.res}</td>
                    <td className="py-2 text-right font-bold text-emerald-700">{p.rate}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <AnalyticsDonutChart title="Property Status" slices={propStatusSlices} />
      </div>
    </div>
  );
}

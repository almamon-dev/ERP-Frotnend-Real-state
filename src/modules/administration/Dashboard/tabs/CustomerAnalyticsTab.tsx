import React from 'react';
import { Users, UserPlus, UserCheck, RefreshCw, Target, CheckCircle, Percent, MapPin } from 'lucide-react';
import AnalyticsLineChart from '../components/charts/AnalyticsLineChart';
import AnalyticsFunnelChart from '../components/charts/AnalyticsFunnelChart';
import AnalyticsDonutChart from '../components/charts/AnalyticsDonutChart';

interface CustomerAnalyticsTabProps {
  startDate?: string;
  endDate?: string;
  company?: string;
}

export default function CustomerAnalyticsTab({
  startDate = '2025-05-01',
  endDate = '2025-05-31',
  company = 'all',
}: CustomerAnalyticsTabProps) {
  const kpis = [
    { label: 'Total Customers', val: '12,456', change: '+12.6%', isPos: true, icon: Users, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'New Customers', val: '2,456', change: '+18.4%', isPos: true, icon: UserPlus, color: 'text-blue-600 bg-blue-50' },
    { label: 'Active Customers', val: '8,652', change: '+8.2%', isPos: true, icon: UserCheck, color: 'text-purple-600 bg-purple-50' },
    { label: 'Returning Customers', val: '3,804', change: '+5.1%', isPos: true, icon: RefreshCw, color: 'text-amber-600 bg-amber-50' },
    { label: 'Total Leads', val: '4,568', change: '+14.2%', isPos: true, icon: Target, color: 'text-teal-600 bg-teal-50' },
    { label: 'Converted Leads', val: '1,256', change: '+9.7%', isPos: true, icon: CheckCircle, color: 'text-rose-600 bg-rose-50' },
    { label: 'Conversion Rate', val: '27.5%', change: '+3.8%', isPos: true, icon: Percent, color: 'text-indigo-600 bg-indigo-50' },
    { label: 'Site Visits', val: '3,245', change: '+21.4%', isPos: true, icon: MapPin, color: 'text-emerald-600 bg-emerald-50' },
  ];

  const customerGrowthData = [
    { label: 'May 01', value: 20 },
    { label: 'May 05', value: 35 },
    { label: 'May 10', value: 48 },
    { label: 'May 15', value: 65 },
    { label: 'May 20', value: 78 },
    { label: 'May 25', value: 92 },
    { label: 'May 31', value: 115 },
  ];

  const funnelSteps = [
    { stage: 'Leads', count: '4,568', pct: 100, color: '#3B82F6' },
    { stage: 'Qualified', count: '2,850', pct: 80, color: '#14B8A6' },
    { stage: 'Site Visit', count: '2,156', pct: 62, color: '#10B981' },
    { stage: 'Proposal', count: '1,256', pct: 45, color: '#F59E0B' },
    { stage: 'Converted', count: '856', pct: 30, color: '#0D6E4F' },
  ];

  const sourceSlices = [
    { name: 'Website', value: 35.2, pct: 35.2, color: '#3B82F6' },
    { name: 'Facebook', value: 28.4, pct: 28.4, color: '#6366F1' },
    { name: 'Google Ads', value: 18.5, pct: 18.5, color: '#8B5CF6' },
    { name: 'Referral', value: 12.1, pct: 12.1, color: '#F59E0B' },
    { name: 'Walk-in', value: 5.8, pct: 5.8, color: '#10B981' },
  ];

  const segSlices = [
    { name: 'High Value', value: 35.0, pct: 35.0, color: '#10B981' },
    { name: 'Medium Value', value: 45.0, pct: 45.0, color: '#3B82F6' },
    { name: 'Low Value', value: 20.0, pct: 20.0, color: '#F59E0B' },
  ];

  const topCustomers = [
    { name: 'ABC Developers', bookings: 12, sales: '৳ 2.45 Cr' },
    { name: 'XYZ Corporation', bookings: 9, sales: '৳ 1.85 Cr' },
    { name: 'Dream Home Ltd.', bookings: 7, sales: '৳ 1.45 Cr' },
    { name: 'Skyline Builders', bookings: 6, sales: '৳ 1.20 Cr' },
    { name: 'Prime Estates', bookings: 5, sales: '৳ 0.95 Cr' },
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AnalyticsLineChart title="Customer Growth" subtitle="New Customers" data={customerGrowthData} color="#8B5CF6" gradientId="custGrad" yAxisSuffix="k" />
        <AnalyticsFunnelChart title="Lead Conversion Funnel" steps={funnelSteps} />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <AnalyticsDonutChart title="Customers by Source" slices={sourceSlices} />

        {/* Top Customers */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <h4 className="text-[13px] font-bold text-slate-900 mb-3">Top Customers</h4>
          <div className="divide-y divide-slate-100">
            {topCustomers.map((c, i) => (
              <div key={i} className="py-2 flex items-center justify-between text-[11px]">
                <div>
                  <span className="font-semibold text-slate-900 block">{c.name}</span>
                  <span className="text-[9.5px] text-slate-400">{c.bookings} Bookings</span>
                </div>
                <span className="font-bold text-emerald-700">{c.sales}</span>
              </div>
            ))}
          </div>
        </div>

        <AnalyticsDonutChart title="Customer Segmentation" slices={segSlices} />
      </div>
    </div>
  );
}

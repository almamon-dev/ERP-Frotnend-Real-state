import React from 'react';
import { Share2, Target, CheckCircle, Percent, DollarSign, Award, TrendingUp, Sparkles } from 'lucide-react';
import AnalyticsDonutChart from '../components/charts/AnalyticsDonutChart';
import AnalyticsGroupedBarChart from '../components/charts/AnalyticsGroupedBarChart';

interface MarketingAnalyticsTabProps {
  startDate?: string;
  endDate?: string;
  company?: string;
}

export default function MarketingAnalyticsTab({
  startDate = '2025-05-01',
  endDate = '2025-05-31',
  company = 'all',
}: MarketingAnalyticsTabProps) {
  const kpis = [
    { label: 'Total Campaigns', val: '24', change: '+4.2%', isPos: true, icon: Share2, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Total Leads', val: '4,568', change: '+14.2%', isPos: true, icon: Target, color: 'text-blue-600 bg-blue-50' },
    { label: 'Converted Leads', val: '1,256', change: '+9.7%', isPos: true, icon: CheckCircle, color: 'text-purple-600 bg-purple-50' },
    { label: 'Conversion Rate', val: '27.5%', change: '+3.8%', isPos: true, icon: Percent, color: 'text-amber-600 bg-amber-50' },
    { label: 'Campaign Cost', val: '৳ 1.25 Cr', change: '-2.1%', isPos: true, icon: DollarSign, color: 'text-rose-600 bg-rose-50' },
    { label: 'Cost Per Lead', val: '৳ 274', change: '-12.5%', isPos: true, icon: TrendingUp, color: 'text-teal-600 bg-teal-50' },
    { label: 'Cost Per Conversion', val: '৳ 995', change: '-8.4%', isPos: true, icon: Award, color: 'text-indigo-600 bg-indigo-50' },
    { label: 'ROI', val: '320%', change: '+45.0%', isPos: true, icon: Sparkles, color: 'text-emerald-600 bg-emerald-50' },
  ];

  const sourceSlices = [
    { name: 'Website', value: 35.2, pct: 35.2, color: '#3B82F6' },
    { name: 'Facebook', value: 28.4, pct: 28.4, color: '#6366F1' },
    { name: 'Google Ads', value: 18.5, pct: 18.5, color: '#8B5CF6' },
    { name: 'Referral', value: 12.1, pct: 12.1, color: '#F59E0B' },
    { name: 'Others', value: 5.8, pct: 5.8, color: '#10B981' },
  ];

  const campPerfData = [
    { label: 'Camp 1', val1: 90, val2: 45 },
    { label: 'Camp 2', val1: 110, val2: 55 },
    { label: 'Camp 3', val1: 80, val2: 40 },
    { label: 'Camp 4', val1: 120, val2: 65 },
    { label: 'Camp 5', val1: 75, val2: 35 },
    { label: 'Camp 6', val1: 100, val2: 50 },
  ];

  const topCampaigns = [
    { name: 'Summer Offer', leads: '1,250', conv: 456, roi: '420%' },
    { name: 'Eid Campaign', leads: '980', conv: 325, roi: '380%' },
    { name: 'Invest Smart', leads: '750', conv: 210, roi: '310%' },
    { name: 'New Launch Project', leads: '640', conv: 185, roi: '290%' },
    { name: 'Referral Campaign', leads: '520', conv: 142, roi: '250%' },
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
        <AnalyticsDonutChart title="Leads by Source" slices={sourceSlices} />
        <AnalyticsGroupedBarChart
          title="Campaign Performance"
          data={campPerfData}
          series1Name="Leads"
          series1Color="#8B5CF6"
          series2Name="Conversions"
          series2Color="#3B82F6"
        />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[13px] font-bold text-slate-900">Top Campaigns</h4>
            <span className="text-[10.5px] font-bold text-emerald-600 hover:underline cursor-pointer">View All</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px]">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold">
                  <th className="py-2">Campaign</th>
                  <th className="py-2">Leads</th>
                  <th className="py-2">Conversions</th>
                  <th className="py-2 text-right">ROI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {topCampaigns.map((c, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-2 font-semibold text-slate-900">{c.name}</td>
                    <td className="py-2">{c.leads}</td>
                    <td className="py-2 text-emerald-600 font-bold">{c.conv}</td>
                    <td className="py-2 text-right font-bold text-emerald-700">{c.roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Marketing Insights */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <h4 className="text-[13px] font-bold text-slate-900 mb-3">Marketing Insights</h4>
          <div className="space-y-2.5 text-[11px] text-slate-600">
            <div className="flex items-start gap-2 p-2 rounded-lg bg-emerald-50/60 border border-emerald-100">
              <Sparkles size={14} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>Website leads increased by <strong>14.2%</strong> this month.</span>
            </div>
            <div className="flex items-start gap-2 p-2 rounded-lg bg-blue-50/60 border border-blue-100">
              <Sparkles size={14} className="text-blue-600 shrink-0 mt-0.5" />
              <span>Facebook campaign has highest conversion rate at <strong>31.2%</strong>.</span>
            </div>
            <div className="flex items-start gap-2 p-2 rounded-lg bg-purple-50/60 border border-purple-100">
              <Sparkles size={14} className="text-purple-600 shrink-0 mt-0.5" />
              <span>Cost per lead reduced by <strong>৳ 35</strong> month-over-month.</span>
            </div>
            <div className="flex items-start gap-2 p-2 rounded-lg bg-amber-50/60 border border-amber-100">
              <Sparkles size={14} className="text-amber-600 shrink-0 mt-0.5" />
              <span>Summer Offer campaign generated highest ROI (<strong>420%</strong>).</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  FileCheck,
  Calendar as CalendarIcon,
  Download,
  Share2,
  AlertCircle,
  TrendingUp,
  Building2,
  FileSpreadsheet,
  Eye,
  MoreVertical,
  Clock,
  Wrench,
  CalendarCheck,
  DownloadCloud,
  FileCode2,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import Select from '@/shared/components/ui/select';
import DatePicker from '@/shared/components/ui/date-picker';
import AnalyticsDonutChart from '../components/charts/AnalyticsDonutChart';
import AnalyticsLineChart from '../components/charts/AnalyticsLineChart';

export default function AdminReportsOverviewPage() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('2025-05-01');
  const [endDate, setEndDate] = useState('2025-05-31');
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [analyticsRange, setAnalyticsRange] = useState('this_month');
  const [distributionRange, setDistributionRange] = useState('this_month');

  const companyOptions = [
    { id: 'all', name: 'All Companies' },
    { id: '1', name: 'Al-Mamon Real Estate Ltd.' },
    { id: '2', name: 'Sunshine Properties' },
    { id: '3', name: 'Green Valley Holdings' },
  ];

  const rangeOptions = [
    { id: 'this_month', name: 'This Month' },
    { id: 'last_month', name: 'Last Month' },
    { id: 'this_quarter', name: 'This Quarter' },
    { id: 'this_year', name: 'This Year' },
  ];

  // Top 6 KPI Cards
  const kpiCards = [
    {
      title: 'Total Reports',
      val: '248',
      trend: '18.6%',
      isPos: true,
      icon: FileText,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      title: 'Generated Reports',
      val: '156',
      trend: '22.4%',
      isPos: true,
      icon: FileCheck,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      title: 'Scheduled Reports',
      val: '32',
      trend: '14.3%',
      isPos: true,
      icon: CalendarIcon,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      title: 'Downloaded',
      val: '1,248',
      trend: '31.5%',
      isPos: true,
      icon: Download,
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      title: 'Shared Reports',
      val: '86',
      trend: '8.7%',
      isPos: true,
      icon: Share2,
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      title: 'Failed Reports',
      val: '4',
      trend: '60.0%',
      isPos: false,
      icon: AlertCircle,
      iconBg: 'bg-rose-50 text-rose-600 border-rose-100',
    },
  ];

  // Category Donut Slices
  const categorySlices = [
    { name: 'Sales Reports', value: 80, pct: 32.3, color: '#3B82F6' },
    { name: 'Finance Reports', value: 61, pct: 24.6, color: '#6366F1' },
    { name: 'Property Reports', value: 46, pct: 18.5, color: '#F59E0B' },
    { name: 'Customer Reports', value: 31, pct: 12.5, color: '#10B981' },
    { name: 'HR Reports', value: 18, pct: 7.3, color: '#EC4899' },
    { name: 'Other Reports', value: 12, pct: 4.8, color: '#8B5CF6' },
  ];

  // Reports Status Donut Slices
  const statusSlices = [
    { name: 'Completed', value: 212, pct: 85.5, color: '#10B981' },
    { name: 'Processing', value: 20, pct: 8.1, color: '#3B82F6' },
    { name: 'Failed', value: 4, pct: 1.6, color: '#EF4444' },
    { name: 'Cancelled', value: 12, pct: 4.8, color: '#94A3B8' },
  ];

  // Trend Data
  const trendData = [
    { label: 'May 01', value: 14 },
    { label: 'May 06', value: 23 },
    { label: 'May 11', value: 16 },
    { label: 'May 16', value: 20 },
    { label: 'May 21', value: 26 },
    { label: 'May 26', value: 23 },
    { label: 'May 31', value: 28 },
  ];

  // Recent Reports Table Data (10 Items)
  const recentReports = [
    { name: 'Sales Summary Report', category: 'Sales Reports', by: 'John Doe', date: 'May 31, 2025 10:30 AM', format: 'PDF', status: 'Completed' },
    { name: 'Revenue Analysis Report', category: 'Finance Reports', by: 'Sarah Johnson', date: 'May 31, 2025 09:15 AM', format: 'XLSX', status: 'Completed' },
    { name: 'Property Inventory Report', category: 'Property Reports', by: 'Mike Wilson', date: 'May 31, 2025 08:45 AM', format: 'PDF', status: 'Completed' },
    { name: 'Customer Activity Report', category: 'Customer Reports', by: 'Emily Davis', date: 'May 31, 2025 08:20 AM', format: 'XLSX', status: 'Completed' },
    { name: 'Employee Attendance Report', category: 'HR Reports', by: 'David Brown', date: 'May 31, 2025 07:50 AM', format: 'PDF', status: 'Completed' },
    { name: 'Project Progress Report', category: 'Project Reports', by: 'John Doe', date: 'May 31, 2025 07:30 AM', format: 'PDF', status: 'Processing' },
    { name: 'Expense Summary Report', category: 'Finance Reports', by: 'Sarah Johnson', date: 'May 31, 2025 07:10 AM', format: 'XLSX', status: 'Completed' },
    { name: 'Lead Conversion Report', category: 'CRM Reports', by: 'Mike Wilson', date: 'May 31, 2025 06:45 AM', format: 'PDF', status: 'Failed' },
    { name: 'Collection Summary Report', category: 'Finance Reports', by: 'Emily Davis', date: 'May 31, 2025 06:15 AM', format: 'XLSX', status: 'Completed' },
    { name: 'Inventory Movement Report', category: 'Inventory Reports', by: 'John Doe', date: 'May 31, 2025 05:40 AM', format: 'PDF', status: 'Completed' },
  ];

  // Top Popular Reports
  const popularReports = [
    { name: 'Sales Summary Report', count: 156 },
    { name: 'Revenue Analysis Report', count: 142 },
    { name: 'Property Inventory Report', count: 128 },
    { name: 'Customer Activity Report', count: 98 },
    { name: 'Collection Summary Report', count: 86 },
  ];

  // Scheduled Reports
  const scheduledReports = [
    { name: 'Daily Sales Report', freq: 'Daily', next: 'Jun 01, 2025 09:00 AM' },
    { name: 'Weekly Revenue Report', freq: 'Weekly', next: 'Jun 02, 2025 09:00 AM' },
    { name: 'Monthly Collection Report', freq: 'Monthly', next: 'Jun 05, 2025 09:00 AM' },
    { name: 'Quarterly Finance Report', freq: 'Quarterly', next: 'Jul 01, 2025 09:00 AM' },
  ];

  return (
    <div className="w-full p-4 md:p-6 bg-[#F8FAFC] space-y-4 min-h-screen">
      {/* 1. Header with Title & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 py-1 px-0.5">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Reports Overview</h1>
          <p className="text-[12.5px] text-slate-500 font-normal mt-0.5">
            View, manage and analyze all your business reports
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* UI Date Picker */}
          <div className="flex items-center gap-1.5">
            <div className="w-[135px]">
              <DatePicker
                value={startDate}
                onChange={setStartDate}
                placeholder="Start Date"
                size="sm"
              />
            </div>
            <span className="text-[12px] text-slate-400 font-semibold">-</span>
            <div className="w-[135px]">
              <DatePicker
                value={endDate}
                onChange={setEndDate}
                placeholder="End Date"
                size="sm"
              />
            </div>
          </div>

          {/* Company Selector */}
          <div className="w-[170px]">
            <Select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              options={companyOptions}
              showSearch={false}
              icon={Building2}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* 2. Top 6 KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
        {kpiCards.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="bg-white p-3.5 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] font-medium text-slate-500 block mb-0.5">{kpi.title}</span>
                <span className="text-[20px] font-black text-slate-900 leading-tight block">{kpi.val}</span>
                <span className="inline-flex items-center gap-0.5 text-[10.5px] font-bold text-emerald-600 mt-1">
                  {kpi.isPos ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} className="text-rose-600" />}
                  <span className={kpi.isPos ? 'text-emerald-600' : 'text-rose-600'}>{kpi.trend}</span>
                  <span className="text-slate-400 font-normal ml-0.5">vs last month</span>
                </span>
              </div>
              <div className={`w-9 h-9 rounded-md border ${kpi.iconBg} flex items-center justify-center shrink-0`}>
                <Icon size={18} />
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Middle Row Charts (3 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Reports by Category */}
        <div className="relative">
          <AnalyticsDonutChart title="Reports by Category" slices={categorySlices} centerValue="248" />
          <button className="absolute top-4 right-4 text-[11px] font-bold text-blue-600 hover:underline cursor-pointer">
            View All
          </button>
        </div>

        {/* Reports Generation Trend */}
        <AnalyticsLineChart
          title="Reports Generation Trend"
          subtitle="Generated Count"
          data={trendData}
          color="#8B5CF6"
          gradientId="reportsTrendGrad"
          yAxisSuffix=""
        />

        {/* Reports Status */}
        <div className="relative">
          <AnalyticsDonutChart title="Reports Status" slices={statusSlices} centerValue="248" />
          <button className="absolute top-4 right-4 text-[11px] font-bold text-blue-600 hover:underline cursor-pointer">
            View All
          </button>
        </div>
      </div>

      {/* 4. Third Row (Recent Reports Table + Top Popular / Scheduled Stack) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent Reports Table (Col Span 2) */}
        <div className="lg:col-span-2 bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13.5px] font-bold text-slate-900">Recent Reports</h3>
            <button
              onClick={() => navigate('/admin/reports/custom')}
              className="text-[11.5px] font-semibold text-blue-600 hover:underline cursor-pointer"
            >
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11.5px]">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-semibold text-[10.5px]">
                  <th className="pb-2 pl-1">Report Name</th>
                  <th className="pb-2">Category</th>
                  <th className="pb-2">Generated By</th>
                  <th className="pb-2">Generated On</th>
                  <th className="pb-2">Format</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2 text-right pr-1">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100/80 text-slate-700">
                {recentReports.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-2.5 pl-1 font-semibold text-slate-800 flex items-center gap-2">
                      {r.format === 'PDF' ? (
                        <div className="w-6 h-6 rounded bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                          <FileText size={13} />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <FileSpreadsheet size={13} />
                        </div>
                      )}
                      <span>{r.name}</span>
                    </td>
                    <td className="py-2.5 text-slate-500">{r.category}</td>
                    <td className="py-2.5 text-slate-600 font-medium">{r.by}</td>
                    <td className="py-2.5 text-slate-500">{r.date}</td>
                    <td className="py-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[9.5px] font-bold ${
                        r.format === 'PDF' ? 'bg-rose-50 text-rose-600 border border-rose-200/60' : 'bg-emerald-50 text-emerald-600 border border-emerald-200/60'
                      }`}>
                        {r.format}
                      </span>
                    </td>
                    <td className="py-2.5">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        r.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200/80' :
                        r.status === 'Processing' ? 'bg-blue-50 text-blue-600 border border-blue-200/80' : 'bg-rose-50 text-rose-600 border border-rose-200/80'
                      }`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="py-2.5 text-right pr-1">
                      <div className="flex items-center justify-end gap-1.5 text-slate-400">
                        <button className="p-1 hover:text-slate-700 hover:bg-slate-100 rounded cursor-pointer" title="Download">
                          <Download size={13} />
                        </button>
                        <button className="p-1 hover:text-slate-700 hover:bg-slate-100 rounded cursor-pointer" title="View">
                          <Eye size={13} />
                        </button>
                        <button className="p-1 hover:text-slate-700 hover:bg-slate-100 rounded cursor-pointer" title="More">
                          <MoreVertical size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Stack (Col Span 1) */}
        <div className="space-y-4 flex flex-col justify-between">
          {/* Top Popular Reports */}
          <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex-1">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[13px] font-bold text-slate-900">Top Popular Reports</h4>
              <button className="text-[11px] font-semibold text-blue-600 hover:underline cursor-pointer">
                View All
              </button>
            </div>
            <div className="divide-y divide-slate-100">
              {popularReports.map((p, i) => (
                <div key={i} className="py-2 flex items-center justify-between text-[11.5px]">
                  <div className="flex items-center gap-2">
                    <span className="w-4 text-center font-bold text-slate-400 text-[11px]">{i + 1}</span>
                    <span className="font-medium text-slate-800">{p.name}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 font-bold text-[10.5px]">
                    {p.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scheduled Reports */}
          <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex-1">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[13px] font-bold text-slate-900">Scheduled Reports</h4>
              <button className="text-[11px] font-semibold text-blue-600 hover:underline cursor-pointer">
                View All
              </button>
            </div>
            <div className="space-y-2.5">
              {scheduledReports.map((s, i) => (
                <div key={i} className="flex items-center justify-between text-[11px] p-1.5 rounded hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-emerald-600 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 block leading-tight">{s.name}</span>
                      <span className="text-[10px] text-slate-400">Next: {s.next}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {s.freq}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Bottom Row (Report Analytics + Distribution + Quick Actions) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Report Analytics */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[13px] font-bold text-slate-900">Report Analytics</h4>
            <div className="w-[115px]">
              <Select
                value={analyticsRange}
                onChange={(e) => setAnalyticsRange(e.target.value)}
                options={rangeOptions}
                showSearch={false}
                size="sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-1">
            <div className="p-2.5 bg-slate-50/80 rounded border border-slate-100">
              <span className="text-[10px] font-medium text-slate-500 block">Avg. Generation Time</span>
              <span className="text-sm font-bold text-slate-900 block mt-0.5">00:02:45</span>
              <span className="text-[9.5px] font-bold text-emerald-600 block mt-0.5">↑ 12.5% <span className="font-normal text-slate-400">vs last month</span></span>
            </div>
            <div className="p-2.5 bg-slate-50/80 rounded border border-slate-100">
              <span className="text-[10px] font-medium text-slate-500 block">Success Rate</span>
              <span className="text-sm font-bold text-slate-900 block mt-0.5">98.4%</span>
              <span className="text-[9.5px] font-bold text-emerald-600 block mt-0.5">↑ 2.3% <span className="font-normal text-slate-400">vs last month</span></span>
            </div>
            <div className="p-2.5 bg-slate-50/80 rounded border border-slate-100">
              <span className="text-[10px] font-medium text-slate-500 block">Total Data Processed</span>
              <span className="text-sm font-bold text-slate-900 block mt-0.5">2.45 TB</span>
              <span className="text-[9.5px] font-bold text-emerald-600 block mt-0.5">↑ 18.7% <span className="font-normal text-slate-400">vs last month</span></span>
            </div>
            <div className="p-2.5 bg-slate-50/80 rounded border border-slate-100">
              <span className="text-[10px] font-medium text-slate-500 block">Storage Used</span>
              <span className="text-sm font-bold text-slate-900 block mt-0.5">156.8 GB</span>
              <span className="text-[9.5px] font-bold text-emerald-600 block mt-0.5">↑ 15.4% <span className="font-normal text-slate-400">vs last month</span></span>
            </div>
          </div>
        </div>

        {/* Reports Distribution Bar Chart */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-[13px] font-bold text-slate-900">Reports Distribution</h4>
            <div className="w-[115px]">
              <Select
                value={distributionRange}
                onChange={(e) => setDistributionRange(e.target.value)}
                options={rangeOptions}
                showSearch={false}
                size="sm"
              />
            </div>
          </div>

          <div className="h-32 flex items-end justify-between gap-2 pt-4 pb-1 border-b border-slate-100">
            {[85, 60, 65, 40, 25, 20, 15].map((val, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                <div
                  style={{ height: `${val}%` }}
                  className="w-full bg-indigo-500 hover:bg-indigo-600 rounded-t transition-all"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between text-[9.5px] text-slate-400 font-medium pt-1">
            <span>Sales</span>
            <span>Finance</span>
            <span>Property</span>
            <span>Customer</span>
            <span>HR</span>
            <span>Projects</span>
            <span>Other</span>
          </div>
        </div>

        {/* Quick Actions (5 Card Tiles) */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <h4 className="text-[13px] font-bold text-slate-900 mb-3">Quick Actions</h4>

          <div className="grid grid-cols-3 gap-2 my-auto">
            <div
              onClick={() => navigate('/admin/reports/custom')}
              className="p-3 bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-100 rounded text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-1.5"
            >
              <FileCode2 size={20} className="text-emerald-600" />
              <span className="text-[10.5px] font-bold text-slate-800 leading-tight">Custom Report</span>
            </div>
            <div
              onClick={() => navigate('/admin/reports/builder')}
              className="p-3 bg-blue-50/70 hover:bg-blue-100/70 border border-blue-100 rounded text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-1.5"
            >
              <Wrench size={20} className="text-blue-600" />
              <span className="text-[10.5px] font-bold text-slate-800 leading-tight">Report Builder</span>
            </div>
            <div
              onClick={() => navigate('/admin/reports/scheduled')}
              className="p-3 bg-amber-50/70 hover:bg-amber-100/70 border border-amber-100 rounded text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-1.5"
            >
              <CalendarCheck size={20} className="text-amber-600" />
              <span className="text-[10.5px] font-bold text-slate-800 leading-tight">Schedule Report</span>
            </div>
            <div
              onClick={() => navigate('/admin/reports/export')}
              className="p-3 bg-purple-50/70 hover:bg-purple-100/70 border border-purple-100 rounded text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-1.5"
            >
              <DownloadCloud size={20} className="text-purple-600" />
              <span className="text-[10.5px] font-bold text-slate-800 leading-tight">Export Data</span>
            </div>
            <div
              onClick={() => navigate('/admin/reports/templates')}
              className="p-3 bg-indigo-50/70 hover:bg-indigo-100/70 border border-indigo-100 rounded text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-1.5 col-span-2"
            >
              <FileSpreadsheet size={20} className="text-indigo-600" />
              <span className="text-[10.5px] font-bold text-slate-800 leading-tight">Report Templates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

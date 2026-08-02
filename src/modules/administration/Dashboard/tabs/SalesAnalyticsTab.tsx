import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, TrendingUp, Tag, Bookmark, Wallet, AlertCircle, Percent, RefreshCw } from 'lucide-react';
import AnalyticsLineChart from '../components/charts/AnalyticsLineChart';
import AnalyticsDonutChart from '../components/charts/AnalyticsDonutChart';

interface SalesAnalyticsTabProps {
  startDate?: string;
  endDate?: string;
  company?: string;
}

export default function SalesAnalyticsTab({
  startDate = '2025-05-01',
  endDate = '2025-05-31',
  company = 'all',
}: SalesAnalyticsTabProps) {
  const navigate = useNavigate();
  const kpis = [
    { label: 'Total Sales', val: '৳ 12.64 Cr', change: '+12.5%', isPos: true, icon: DollarSign, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Monthly Revenue', val: '৳ 8.45 Cr', change: '+7.2%', isPos: true, icon: TrendingUp, color: 'text-blue-600 bg-blue-50' },
    { label: 'Average Sale Value', val: '৳ 18.75 L', change: '+15.3%', isPos: true, icon: Tag, color: 'text-amber-600 bg-amber-50' },
    { label: 'Total Bookings', val: '856', change: '+9.6%', isPos: true, icon: Bookmark, color: 'text-rose-600 bg-rose-50' },
    { label: 'Total Collections', val: '৳ 7.25 Cr', change: '+18.7%', isPos: true, icon: Wallet, color: 'text-teal-600 bg-teal-50' },
    { label: 'Outstanding Due', val: '৳ 5.39 Cr', change: '-2.4%', isPos: false, icon: AlertCircle, color: 'text-rose-600 bg-rose-50' },
    { label: 'Collection Rate', val: '57.4%', change: '+5.1%', isPos: true, icon: Percent, color: 'text-indigo-600 bg-indigo-50' },
    { label: 'Cancel / Refund', val: '26', change: '-4.2%', isPos: true, icon: RefreshCw, color: 'text-amber-600 bg-amber-50' },
  ];

  const revenueData = [
    { label: 'May 01', value: 45 },
    { label: 'May 05', value: 62 },
    { label: 'May 10', value: 54 },
    { label: 'May 15', value: 78 },
    { label: 'May 20', value: 85 },
    { label: 'May 25', value: 92 },
    { label: 'May 31', value: 110 },
  ];

  const salesData = [
    { label: 'May 01', value: 50 },
    { label: 'May 05', value: 42 },
    { label: 'May 10', value: 68 },
    { label: 'May 15', value: 72 },
    { label: 'May 20', value: 88 },
    { label: 'May 25', value: 94 },
    { label: 'May 31', value: 105 },
  ];

  const propertyTypeSlices = [
    { name: 'Apartment', value: 45.2, pct: 45.2, color: '#3B82F6' },
    { name: 'Duplex', value: 22.1, pct: 22.1, color: '#10B981' },
    { name: 'Penthouse', value: 16.2, pct: 16.2, color: '#F59E0B' },
    { name: 'Shop', value: 8.5, pct: 8.5, color: '#EC4899' },
    { name: 'Others', value: 5.7, pct: 5.7, color: '#8B5CF6' },
  ];

  const topProjects = [
    { name: 'Green Park', sales: '৳ 3.25 Cr', bookings: 258 },
    { name: 'Sunshine City', sales: '৳ 2.85 Cr', bookings: 186 },
    { name: 'Lake View Heights', sales: '৳ 1.95 Cr', bookings: 142 },
    { name: 'Green Valley', sales: '৳ 1.45 Cr', bookings: 98 },
    { name: 'Royal Gardens', sales: '৳ 0.98 Cr', bookings: 64 },
  ];

  const topEmployees = [
    { name: 'John Doe', sales: '৳ 1.25 Cr', deals: 85, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' },
    { name: 'Michael Smith', sales: '৳ 1.05 Cr', deals: 72, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { name: 'Sarah Johnson', sales: '৳ 0.95 Cr', deals: 65, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    { name: 'David Brown', sales: '৳ 0.75 Cr', deals: 52, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
    { name: 'Emily Davis', sales: '৳ 0.65 Cr', deals: 45, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
  ];

  const paymentSlices = [
    { name: 'Bank Transfer', value: 45.0, pct: 45.0, color: '#3B82F6' },
    { name: 'Cash', value: 22.0, pct: 22.0, color: '#10B981' },
    { name: 'Cheque', value: 18.0, pct: 18.0, color: '#F59E0B' },
    { name: 'Card', value: 9.0, pct: 9.0, color: '#8B5CF6' },
    { name: 'Other', value: 6.0, pct: 6.0, color: '#EC4899' },
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
                <span className={`text-[10.5px] font-bold ${kpi.isPos ? 'text-emerald-600' : 'text-rose-600'} block mt-1`}>
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
        <AnalyticsLineChart title="Revenue Trend" subtitle="Revenue (৳)" data={revenueData} color="#10B981" gradientId="revGrad" />
        <AnalyticsLineChart title="Sales Trend" subtitle="Sales (৳)" data={salesData} color="#3B82F6" gradientId="salesGrad" />
        <AnalyticsDonutChart title="Sales by Property Type" slices={propertyTypeSlices} centerValue="100%" />
      </div>

      {/* Bottom Row Tables & Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Top Selling Projects */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[13px] font-bold text-slate-900">Top Selling Projects</h4>
            <span
              onClick={() => navigate('/admin/analytics?tab=property')}
              className="text-[10.5px] font-bold text-emerald-600 hover:underline cursor-pointer"
            >
              View All
            </span>
          </div>
          <div className="divide-y divide-slate-100">
            {topProjects.map((p, i) => (
              <div key={i} className="py-2 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-slate-800">{p.name}</span>
                <div className="text-right">
                  <span className="font-bold text-emerald-700 block">{p.sales}</span>
                  <span className="text-[9.5px] text-slate-400">{p.bookings} Bookings</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Sales Employees */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[13px] font-bold text-slate-900">Top Sales Employees</h4>
            <span
              onClick={() => navigate('/admin/analytics?tab=employee')}
              className="text-[10.5px] font-bold text-emerald-600 hover:underline cursor-pointer"
            >
              View All
            </span>
          </div>
          <div className="divide-y divide-slate-100">
            {topEmployees.map((e, i) => (
              <div key={i} className="py-2 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <img src={e.avatar} alt={e.name} className="w-6 h-6 rounded-full object-cover" />
                  <span className="font-semibold text-slate-800">{e.name}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-slate-900 block">{e.sales}</span>
                  <span className="text-[9.5px] text-slate-400">{e.deals} Deals</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Method Analysis */}
        <AnalyticsDonutChart title="Payment Method Analysis" slices={paymentSlices} />
      </div>
    </div>
  );
}

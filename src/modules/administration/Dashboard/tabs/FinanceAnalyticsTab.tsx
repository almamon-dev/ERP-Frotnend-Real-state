import React from 'react';
import { DollarSign, Wallet, TrendingUp, Percent, ArrowDownRight, AlertCircle, Landmark, CreditCard } from 'lucide-react';
import AnalyticsGroupedBarChart from '../components/charts/AnalyticsGroupedBarChart';
import AnalyticsLineChart from '../components/charts/AnalyticsLineChart';
import AnalyticsDonutChart from '../components/charts/AnalyticsDonutChart';

interface FinanceAnalyticsTabProps {
  startDate?: string;
  endDate?: string;
  company?: string;
}

export default function FinanceAnalyticsTab({
  startDate = '2025-05-01',
  endDate = '2025-05-31',
  company = 'all',
}: FinanceAnalyticsTabProps) {
  const kpis = [
    { label: 'Total Income', val: '৳ 12.64 Cr', change: '+18.7%', isPos: true, icon: DollarSign, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Total Expense', val: '৳ 5.28 Cr', change: '+5.4%', isPos: false, icon: ArrowDownRight, color: 'text-rose-600 bg-rose-50' },
    { label: 'Net Profit', val: '৳ 7.36 Cr', change: '+22.1%', isPos: true, icon: TrendingUp, color: 'text-blue-600 bg-blue-50' },
    { label: 'Profit Margin', val: '58.2%', change: '+4.5%', isPos: true, icon: Percent, color: 'text-purple-600 bg-purple-50' },
    { label: 'Total Collection', val: '৳ 7.25 Cr', change: '+15.2%', isPos: true, icon: Wallet, color: 'text-teal-600 bg-teal-50' },
    { label: 'Outstanding Due', val: '৳ 5.39 Cr', change: '-2.4%', isPos: false, icon: AlertCircle, color: 'text-amber-600 bg-amber-50' },
    { label: 'Bank Balance', val: '৳ 15.65 Cr', change: '+12.4%', isPos: true, icon: Landmark, color: 'text-indigo-600 bg-indigo-50' },
    { label: 'Cash in Hand', val: '৳ 2.45 Cr', change: '+8.1%', isPos: true, icon: CreditCard, color: 'text-emerald-600 bg-emerald-50' },
  ];

  const incomeExpenseData = [
    { label: 'May 01', val1: 80, val2: 40 },
    { label: 'May 05', val1: 95, val2: 45 },
    { label: 'May 10', val1: 110, val2: 55 },
    { label: 'May 15', val1: 90, val2: 50 },
    { label: 'May 20', val1: 120, val2: 60 },
    { label: 'May 25', val1: 135, val2: 65 },
    { label: 'May 31', val1: 150, val2: 70 },
  ];

  const cashFlowData = [
    { label: 'May 01', value: 45 },
    { label: 'May 05', value: 55 },
    { label: 'May 10', value: 65 },
    { label: 'May 15', value: 50 },
    { label: 'May 20', value: 75 },
    { label: 'May 25', value: 85 },
    { label: 'May 31', value: 100 },
  ];

  const expenseSlices = [
    { name: 'Payroll', value: 35.0, pct: 35.0, color: '#3B82F6' },
    { name: 'Construction', value: 22.4, pct: 22.4, color: '#10B981' },
    { name: 'Marketing', value: 18.5, pct: 18.5, color: '#8B5CF6' },
    { name: 'Admin', value: 12.1, pct: 12.1, color: '#F59E0B' },
    { name: 'Others', value: 12.0, pct: 12.0, color: '#64748B' },
  ];

  const pnlSummary = [
    { name: 'Total Income', val: '৳ 12.64 Cr', color: 'text-emerald-700' },
    { name: 'Total Expense', val: '৳ 5.28 Cr', color: 'text-rose-600' },
    { name: 'Gross Profit', val: '৳ 7.36 Cr', color: 'text-slate-900 font-bold' },
    { name: 'Tax', val: '৳ 1.25 Cr', color: 'text-slate-600' },
    { name: 'Net Profit', val: '৳ 6.11 Cr', color: 'text-emerald-800 font-black' },
  ];

  const colDueSlices = [
    { name: 'Collected', value: 57.4, pct: 57.4, color: '#10B981' },
    { name: 'Due', value: 42.6, pct: 42.6, color: '#EF4444' },
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
        <AnalyticsGroupedBarChart
          title="Income vs Expense"
          data={incomeExpenseData}
          series1Name="Income"
          series1Color="#10B981"
          series2Name="Expense"
          series2Color="#EF4444"
        />
        <AnalyticsLineChart title="Cash Flow" subtitle="Flow (৳)" data={cashFlowData} color="#3B82F6" gradientId="cashGrad" />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <AnalyticsDonutChart title="Expense by Category" slices={expenseSlices} />

        {/* Monthly P&L Summary */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <h4 className="text-[13px] font-bold text-slate-900 mb-3">Monthly P&L Summary</h4>
          <div className="divide-y divide-slate-100">
            {pnlSummary.map((item, i) => (
              <div key={i} className="py-2 flex items-center justify-between text-[11px]">
                <span className="text-slate-600 font-medium">{item.name}</span>
                <span className={`font-bold ${item.color}`}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>

        <AnalyticsDonutChart title="Collection vs Due" slices={colDueSlices} />
      </div>
    </div>
  );
}

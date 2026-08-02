import React from 'react';
import { Users, UserCheck, Calendar, UserX, UserPlus, UserMinus, Percent, Clock } from 'lucide-react';
import AnalyticsLineChart from '../components/charts/AnalyticsLineChart';
import AnalyticsDonutChart from '../components/charts/AnalyticsDonutChart';

interface EmployeeAnalyticsTabProps {
  startDate?: string;
  endDate?: string;
  company?: string;
}

export default function EmployeeAnalyticsTab({
  startDate = '2025-05-01',
  endDate = '2025-05-31',
  company = 'all',
}: EmployeeAnalyticsTabProps) {
  const kpis = [
    { label: 'Total Employees', val: '1,245', change: '+5.6%', isPos: true, icon: Users, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Present Today', val: '856', change: '+2.2%', isPos: true, icon: UserCheck, color: 'text-blue-600 bg-blue-50' },
    { label: 'On Leave', val: '124', change: '-1.4%', isPos: true, icon: Calendar, color: 'text-amber-600 bg-amber-50' },
    { label: 'Absent', val: '265', change: '-4.1%', isPos: true, icon: UserX, color: 'text-rose-600 bg-rose-50' },
    { label: 'New Joiners', val: '18', change: '+10.5%', isPos: true, icon: UserPlus, color: 'text-teal-600 bg-teal-50' },
    { label: 'Resigned', val: '8', change: '-12.0%', isPos: true, icon: UserMinus, color: 'text-purple-600 bg-purple-50' },
    { label: 'Avg Attendance', val: '89.6%', change: '+3.2%', isPos: true, icon: Percent, color: 'text-indigo-600 bg-indigo-50' },
    { label: 'Overtime Hours', val: '245', change: '+8.4%', isPos: true, icon: Clock, color: 'text-emerald-600 bg-emerald-50' },
  ];

  const attendanceData = [
    { label: 'May 01', value: 82 },
    { label: 'May 05', value: 88 },
    { label: 'May 10', value: 85 },
    { label: 'May 15', value: 92 },
    { label: 'May 20', value: 90 },
    { label: 'May 25', value: 94 },
    { label: 'May 31', value: 96 },
  ];

  const deptSlices = [
    { name: 'Sales', value: 28.4, pct: 28.4, color: '#3B82F6' },
    { name: 'Construction', value: 22.4, pct: 22.4, color: '#10B981' },
    { name: 'Marketing', value: 18.5, pct: 18.5, color: '#8B5CF6' },
    { name: 'Finance', value: 12.1, pct: 12.1, color: '#F59E0B' },
    { name: 'HR', value: 8.6, pct: 8.6, color: '#EC4899' },
    { name: 'Others', value: 10.0, pct: 10.0, color: '#64748B' },
  ];

  const leaveSlices = [
    { name: 'Casual Leave', value: 40.2, pct: 40.2, color: '#3B82F6' },
    { name: 'Sick Leave', value: 35.6, pct: 35.6, color: '#F59E0B' },
    { name: 'Annual Leave', value: 18.2, pct: 18.2, color: '#10B981' },
    { name: 'Other Leave', value: 6.0, pct: 6.0, color: '#64748B' },
  ];

  const perfSlices = [
    { name: 'Excellent', value: 35.0, pct: 35.0, color: '#10B981' },
    { name: 'Good', value: 45.0, pct: 45.0, color: '#3B82F6' },
    { name: 'Average', value: 15.0, pct: 15.0, color: '#F59E0B' },
    { name: 'Poor', value: 5.0, pct: 5.0, color: '#EF4444' },
  ];

  const topDepts = [
    { dept: 'Construction', rate: '92.6%' },
    { dept: 'Sales', rate: '91.2%' },
    { dept: 'Marketing', rate: '88.5%' },
    { dept: 'Finance', rate: '88.1%' },
    { dept: 'HR', rate: '87.0%' },
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
        <AnalyticsLineChart title="Attendance Trend" subtitle="Attendance (%)" data={attendanceData} color="#10B981" gradientId="attGrad" />
        <AnalyticsDonutChart title="Department Wise Headcount" slices={deptSlices} />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <AnalyticsDonutChart title="Leave Statistics" slices={leaveSlices} />

        {/* Top Departments by Attendance */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <h4 className="text-[13px] font-bold text-slate-900 mb-3">Top Departments by Attendance</h4>
          <div className="divide-y divide-slate-100">
            {topDepts.map((d, i) => (
              <div key={i} className="py-2 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-slate-800">{d.dept}</span>
                <span className="font-bold text-emerald-700">{d.rate}</span>
              </div>
            ))}
          </div>
        </div>

        <AnalyticsDonutChart title="Employee Performance" slices={perfSlices} />
      </div>
    </div>
  );
}

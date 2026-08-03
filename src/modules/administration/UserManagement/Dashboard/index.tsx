import React, { useState } from 'react';
import { Users, UserCheck, UserX, ShieldAlert, ArrowUpRight, ArrowDownRight, Clock, Activity, Building, Plus, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/shared/components/ui/button';

export default function AccessDashboard() {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState('1Y');

  const metrics = [
    { label: 'Total Users', value: '1,248', change: '+12.5%', isUp: true, subtext: 'from last month', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Active Users', value: '1,024', change: '82.1%', isUp: true, subtext: 'of total users', icon: UserCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Inactive Users', value: '156', change: '+8.1%', isUp: false, subtext: 'from last month', icon: UserX, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Suspended Users', value: '156', change: '+12.1%', isUp: false, subtext: 'from last month', icon: ShieldAlert, color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  const recentLogins = [
    { user: 'John Doe', email: 'john@example.com', time: '10 May, 10:30 AM', ip: '192.168.1.1', status: 'Success' },
    { user: 'Jane Smith', email: 'jane@example.com', time: '10 May, 10:28 AM', ip: '192.168.1.2', status: 'Success' },
    { user: 'Robert Brown', email: 'robert@example.com', time: '10 May, 10:25 AM', ip: '192.168.1.3', status: 'Success' },
    { user: 'Emily Davis', email: 'emily@example.com', time: '10 May, 10:20 AM', ip: '192.168.1.4', status: 'Logged In' },
    { user: 'Michael Wilson', email: 'michael@example.com', time: '10 May, 10:15 AM', ip: '192.168.1.5', status: 'Success' },
  ];

  const recentActivities = [
    { text: 'John Doe created new user Jane Smith', time: '10 May 2024, 10:30 AM' },
    { text: 'Jane Smith updated user profile', time: '10 May 2024, 10:28 AM' },
    { text: 'Robert Brown changed user status', time: '10 May 2024, 10:25 AM' },
    { text: 'Emily Davis reset password for user', time: '10 May 2024, 10:20 AM' },
  ];

  const deptStats = [
    { dept: 'IT Department', count: 406, percentage: 32.5, color: 'bg-indigo-500' },
    { dept: 'Sales Department', count: 300, percentage: 24, color: 'bg-blue-500' },
    { dept: 'HR Department', count: 248, percentage: 19.8, color: 'bg-emerald-500' },
    { dept: 'Finance Department', count: 126, percentage: 10.1, color: 'bg-amber-500' },
    { dept: 'Others', count: 168, percentage: 13.6, color: 'bg-slate-400' },
  ];

  const months12 = [
    { name: 'Jan', x: 0, y: 90 },
    { name: 'Feb', x: 29, y: 80 },
    { name: 'Mar', x: 58, y: 70 },
    { name: 'Apr', x: 87, y: 58 },
    { name: 'May', x: 116, y: 48 },
    { name: 'Jun', x: 145, y: 38 },
    { name: 'Jul', x: 175, y: 36 },
    { name: 'Aug', x: 204, y: 34 },
    { name: 'Sep', x: 233, y: 30 },
    { name: 'Oct', x: 262, y: 28 },
    { name: 'Nov', x: 291, y: 24 },
    { name: 'Dec', x: 320, y: 18 },
  ];

  const yAxisTicks = [
    { label: '1.4k', y: 18 },
    { label: '1.0k', y: 48 },
    { label: '600', y: 76 },
    { label: '200', y: 104 },
  ];

  const statusList = [
    { title: 'Active', count: 1024, pct: '82.1%', color: 'bg-emerald-500', badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { title: 'Inactive', count: 156, pct: '12.5%', color: 'bg-amber-500', badgeBg: 'bg-amber-50 text-amber-700 border-amber-200' },
    { title: 'Pending', count: 55, pct: '4.4%', color: 'bg-indigo-600', badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
    { title: 'Suspended', count: 13, pct: '1.0%', color: 'bg-rose-500', badgeBg: 'bg-rose-50 text-rose-700 border-rose-200' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-24 space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Home / User Management / Dashboard</p>
        </div>
        <Button onClick={() => navigate('/administration/access/users/create')} className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2 font-medium">
          <Plus size={16} /> Create User
        </Button>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <div key={i} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{m.label}</span>
                <div className={`p-2 rounded-lg ${m.bg}`}>
                  <Icon size={18} className={m.color} />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 tracking-tight">{m.value}</div>
                <div className="flex items-center gap-1.5 text-xs mt-1">
                  <span className={`font-semibold flex items-center ${m.isUp ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {m.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {m.change}
                  </span>
                  <span className="text-slate-400 font-normal">{m.subtext}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ROW 2: 1st Users by Status | 2nd User Growth | 3rd Recent Logins */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 1st: Users by Status (4 Cols) */}
        <div className="lg:col-span-4 bg-white p-5 rounded-lg border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Users by Status</h3>
              <p className="text-xs text-slate-400 font-normal">Account state distribution</p>
            </div>
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center gap-1">
              <CheckCircle2 size={12} /> 82.1% Active
            </span>
          </div>

          <div className="flex flex-row items-center justify-between gap-3 py-1 my-auto">
            <div className="relative w-32 h-32 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="#10b981" strokeWidth="12" strokeDasharray="196 238" strokeDashoffset="0" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="#f59e0b" strokeWidth="12" strokeDasharray="30 238" strokeDashoffset="-198" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="#6366f1" strokeWidth="12" strokeDasharray="10 238" strokeDashoffset="-229" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="#f43f5e" strokeWidth="12" strokeDasharray="3 238" strokeDashoffset="-239" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xl font-bold text-slate-900 leading-none">1,248</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Users</span>
              </div>
            </div>

            <div className="space-y-2 flex-1 min-w-0">
              {statusList.map((st, i) => (
                <div key={i} className="flex items-center justify-between p-1.5 rounded-md bg-slate-50/80 border border-slate-100/80 hover:bg-slate-100/50 transition-colors">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className={`w-2 h-2 rounded-full ${st.color} flex-shrink-0`}></span>
                    <span className="text-xs font-semibold text-slate-700 truncate">{st.title}</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="text-xs font-bold text-slate-900">{st.count}</span>
                    <span className={`px-1.5 py-0.2 text-xs font-semibold rounded border ${st.badgeBg}`}>
                      {st.pct}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-normal">Calculated live</span>
            <button onClick={() => navigate('/administration/access/users')} className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
              Manage Users &rarr;
            </button>
          </div>
        </div>

        {/* 2nd: User Growth Trend (4 Cols) */}
        <div className="lg:col-span-4 bg-white p-5 rounded-lg border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <TrendingUp size={18} className="text-indigo-600" /> User Growth
            </h3>
            <div className="inline-flex rounded border border-slate-200 p-0.5 bg-slate-50 text-xs font-semibold">
              {['30D', '6M', '1Y'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    timeRange === range ? 'bg-white text-indigo-600 shadow-2xs font-bold' : 'text-slate-500 hover:text-slate-800 font-medium'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="relative pt-1 pb-1 flex-1 flex flex-col justify-center w-full my-1">
            <svg viewBox="0 0 320 140" preserveAspectRatio="none" className="w-full h-40 overflow-visible">
              <defs>
                <linearGradient id="cleanIndigoGrad4" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Gridlines */}
              {yAxisTicks.map((tick, idx) => (
                <g key={idx}>
                  <line x1="0" y1={tick.y} x2="320" y2={tick.y} stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                </g>
              ))}

              {/* Area Fill */}
              <path
                d="M 0,90 C 13,85 19,80 29,80 C 42,75 48,70 58,70 C 71,62 77,58 87,58 C 100,50 106,48 116,48 C 129,40 135,38 145,38 C 158,36 164,34 175,34 C 188,32 194,30 204,30 C 217,28 223,28 233,28 C 246,26 252,24 262,24 C 275,22 281,20 291,20 C 304,18 310,14 320,14 L 320,115 L 0,115 Z"
                fill="url(#cleanIndigoGrad4)"
              />

              {/* Curve Line */}
              <path
                d="M 0,90 C 13,85 19,80 29,80 C 42,75 48,70 58,70 C 71,62 77,58 87,58 C 100,50 106,48 116,48 C 129,40 135,38 145,38 C 158,36 164,34 175,34 C 188,32 194,30 204,30 C 217,28 223,28 233,28 C 246,26 252,24 262,24 C 275,22 281,20 291,20 C 304,18 310,14 320,14"
                fill="none"
                stroke="#4f46e5"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Data Points */}
              {months12.map((m, i) => (
                <g key={i}>
                  <circle cx={m.x} cy={m.y} r="2.5" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" />
                </g>
              ))}

              {/* Base Line */}
              <line x1="0" y1="115" x2="320" y2="115" stroke="#e2e8f0" strokeWidth="1" />

              {/* X-Axis Labels */}
              {months12.map((m, idx) => (
                <text key={idx} x={m.x === 0 ? 6 : m.x === 320 ? 314 : m.x} y="132" textAnchor="middle" className="text-xs fill-slate-500 font-medium">
                  {m.name}
                </text>
              ))}
            </svg>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
            <span className="text-slate-600 font-medium">Total Growth</span>
            <span className="font-bold text-emerald-600">+28.4% YoY</span>
          </div>
        </div>

        {/* 3rd: Recent Logins (4 Cols - Clean Standardized Typography) */}
        <div className="lg:col-span-4 bg-white p-5 rounded-lg border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Clock size={18} className="text-indigo-600" /> Recent Logins
            </h3>
            <button onClick={() => navigate('/administration/access/login-history')} className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
              View All
            </button>
          </div>

          <div className="divide-y divide-slate-100 text-xs flex-1">
            {recentLogins.map((item, i) => (
              <div key={i} className="py-2.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs border border-indigo-200 flex-shrink-0">
                    {item.user.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="truncate">
                    <div className="font-bold text-slate-800 text-xs truncate">{item.user}</div>
                    <div className="text-slate-500 text-xs font-normal">{item.ip}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${item.status === 'Logged In' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'}`}>
                    {item.status}
                  </span>
                  <span className="text-slate-500 font-normal text-xs whitespace-nowrap">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROW 3: Recent Activities & Users by Department */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-6 bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <Activity size={18} className="text-indigo-600" /> Recent Activities
            </h3>
            <button onClick={() => navigate('/administration/access/activity-logs')} className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
              View All
            </button>
          </div>
          <div className="space-y-3 text-xs">
            {recentActivities.map((act, i) => (
              <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-md bg-slate-50 border border-slate-100">
                <span className="w-2 h-2 rounded-full bg-indigo-600 mt-1.5 flex-shrink-0"></span>
                <div className="flex-1 justify-between flex items-center">
                  <span className="font-semibold text-slate-800">{act.text}</span>
                  <span className="text-slate-400 text-xs font-normal whitespace-nowrap ml-2">{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Users by Department */}
        <div className="lg:col-span-6 bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-800 border-b pb-3 flex items-center gap-2">
            <Building size={18} className="text-indigo-600" /> Users by Department
          </h3>
          <div className="space-y-3 text-xs">
            {deptStats.map((d, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between font-semibold text-slate-700">
                  <span>{d.dept}</span>
                  <span>{d.count} ({d.percentage}%)</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className={`h-full ${d.color}`} style={{ width: `${d.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import {
  Building2,
  Landmark,
  Home,
  Users,
  FilePlus,
  CreditCard,
  AlertCircle,
  Briefcase
} from 'lucide-react';

export default function DashboardStats() {
  const kpiStats = [
    {
      title: 'Total Companies',
      value: '24',
      change: '+12.5%',
      isUp: true,
      icon: Building2,
      cardBg: 'bg-emerald-100/80 border-emerald-300/80',
      iconBg: 'bg-emerald-600 text-white',
    },
    {
      title: 'Total Projects',
      value: '58',
      change: '+8.1%',
      isUp: true,
      icon: Landmark,
      cardBg: 'bg-blue-100/80 border-blue-300/80',
      iconBg: 'bg-blue-600 text-white',
    },
    {
      title: 'Total Properties',
      value: '1,245',
      change: '+15.3%',
      isUp: true,
      icon: Home,
      cardBg: 'bg-teal-100/80 border-teal-300/80',
      iconBg: 'bg-teal-600 text-white',
    },
    {
      title: 'Total Customers',
      value: '3,568',
      change: '+9.6%',
      isUp: true,
      icon: Users,
      cardBg: 'bg-indigo-100/80 border-indigo-300/80',
      iconBg: 'bg-indigo-600 text-white',
    },
    {
      title: 'Total Bookings',
      value: '856',
      change: '+7.2%',
      isUp: true,
      icon: FilePlus,
      cardBg: 'bg-purple-100/80 border-purple-300/80',
      iconBg: 'bg-purple-600 text-white',
    },
    {
      title: 'Monthly Revenue',
      value: '৳ 12.64 Cr',
      change: '+18.7%',
      isUp: true,
      icon: CreditCard,
      cardBg: 'bg-cyan-100/80 border-cyan-300/80',
      iconBg: 'bg-cyan-600 text-white',
    },
    {
      title: 'Outstanding Due',
      value: '৳ 4.32 Cr',
      change: '-2.4%',
      isUp: false,
      icon: AlertCircle,
      cardBg: 'bg-rose-100/80 border-rose-300/80',
      iconBg: 'bg-rose-600 text-white',
    },
    {
      title: 'Active Employees',
      value: '342',
      change: '+5.4%',
      isUp: true,
      icon: Briefcase,
      cardBg: 'bg-amber-100/80 border-amber-300/80',
      iconBg: 'bg-amber-600 text-white',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-3.5">
      {kpiStats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className={`p-2.5 rounded-md border shadow-2xs flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 ${stat.cardBg}`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className={`w-6 h-6 rounded-md ${stat.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}>
                <Icon size={13} strokeWidth={2} />
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-700 block truncate">{stat.title}</span>
              <h3 className="text-[15px] font-black text-slate-900 leading-tight tracking-tight mt-0.5">
                {stat.value}
              </h3>
              <span className={`text-[9.5px] font-extrabold block mt-0.5 ${stat.isUp ? 'text-emerald-800' : 'text-rose-800'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

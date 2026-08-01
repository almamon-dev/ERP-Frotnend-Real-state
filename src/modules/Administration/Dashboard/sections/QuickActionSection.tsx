import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Landmark, Home, UserPlus, FilePlus, CreditCard } from 'lucide-react';

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    { label: '+ Add Company', path: '/admin/core/companies', icon: Building2, color: 'bg-emerald-50 text-[#0D6E4F] border-emerald-200' },
    { label: '+ Add Project', path: '/admin/land/bank', icon: Landmark, color: 'bg-blue-50 text-blue-600 border-blue-200' },
    { label: '+ Add Property', path: '/admin/property/list', icon: Home, color: 'bg-amber-50 text-amber-600 border-amber-200' },
    { label: '+ Add Customer', path: '/admin/crm/customers', icon: UserPlus, color: 'bg-purple-50 text-purple-600 border-purple-200' },
    { label: '+ Create Booking', path: '/admin/crm/bookings', icon: FilePlus, color: 'bg-rose-50 text-rose-600 border-rose-200' },
    { label: '+ Record Payment', path: '/admin/finance/accounts', icon: CreditCard, color: 'bg-teal-50 text-teal-600 border-teal-200' },
  ];

  return (
    <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs">
      <h3 className="text-[13px] font-bold text-slate-800 mb-3 uppercase tracking-wider">
        Quick Action Launcher
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
        {actions.map((act, i) => {
          const Icon = act.icon;
          return (
            <button
              key={i}
              onClick={() => navigate(act.path)}
              className={`flex items-center gap-2 p-2.5 rounded-md border text-[12px] font-bold transition-all cursor-pointer hover:shadow-xs ${act.color}`}
            >
              <Icon size={15} />
              <span className="truncate">{act.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

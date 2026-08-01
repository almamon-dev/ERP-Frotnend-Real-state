import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Landmark, Home, UserPlus, FilePlus, CreditCard, Users, FileText } from 'lucide-react';

export default function QuickActionsLauncher() {
  const navigate = useNavigate();

  const actions = [
    { label: 'Add Company', path: '/admin/core/companies', icon: Building2, color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Add Project', path: '/admin/land/bank', icon: Landmark, color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Add Property', path: '/admin/property/list', icon: Home, color: 'bg-teal-50 text-teal-600' },
    { label: 'Add Customer', path: '/admin/crm/customers', icon: UserPlus, color: 'bg-blue-50 text-blue-600' },
    { label: 'Create Booking', path: '/admin/crm/bookings', icon: FilePlus, color: 'bg-purple-50 text-purple-600' },
    { label: 'Record Payment', path: '/admin/finance/accounts', icon: CreditCard, color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Add Employee', path: '/admin/hr/employees', icon: Users, color: 'bg-teal-50 text-teal-600' },
    { label: 'Generate Report', path: '/admin/reports/sales', icon: FileText, color: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs">
      <h3 className="text-[13px] font-bold text-slate-900 mb-3">Quick Actions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
        {actions.map((act, idx) => {
          const Icon = act.icon;
          return (
            <button
              key={idx}
              onClick={() => navigate(act.path)}
              className="flex flex-col items-center justify-center p-3 rounded-md border border-slate-100 bg-slate-50/50 hover:bg-slate-100/80 transition-all cursor-pointer group"
            >
              <div className={`w-8 h-8 rounded-md ${act.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                <Icon size={16} />
              </div>
              <span className="text-[11px] font-bold text-slate-700 text-center leading-tight truncate w-full">
                {act.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

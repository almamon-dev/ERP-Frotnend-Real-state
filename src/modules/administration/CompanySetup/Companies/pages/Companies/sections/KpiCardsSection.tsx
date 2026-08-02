import React from 'react';
import { Building2, BookOpen, XCircle, Landmark, Users } from 'lucide-react';
import { Company } from '../types';

interface Props {
  companies: Company[];
}

export const KpiCardsSection: React.FC<Props> = ({ companies }) => {
  const totalCompanies = companies.length;
  const activeCompanies = companies.filter((c) => c.status === 'Active').length;
  const inactiveCompanies = companies.filter((c) => c.status === 'Inactive').length;
  const totalBranches = companies.reduce((acc, c) => acc + c.branchesCount, 0);
  const totalEmployees = companies.reduce((acc, c) => acc + c.employeesCount, 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
      <div className="bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-2xs flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
          <Building2 size={20} />
        </div>
        <div>
          <span className="text-[11.5px] font-medium text-slate-500 block">Total Companies</span>
          <span className="text-xl font-bold text-slate-900 leading-tight block">{totalCompanies}</span>
        </div>
      </div>
      <div className="bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-2xs flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <BookOpen size={20} />
        </div>
        <div>
          <span className="text-[11.5px] font-medium text-slate-500 block">Active</span>
          <span className="text-xl font-bold text-slate-900 leading-tight block">{activeCompanies}</span>
        </div>
      </div>
      <div className="bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-2xs flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
          <XCircle size={20} />
        </div>
        <div>
          <span className="text-[11.5px] font-medium text-slate-500 block">Inactive</span>
          <span className="text-xl font-bold text-slate-900 leading-tight block">{inactiveCompanies}</span>
        </div>
      </div>
      <div className="bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-2xs flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
          <Landmark size={20} />
        </div>
        <div>
          <span className="text-[11.5px] font-medium text-slate-500 block">Total Branches</span>
          <span className="text-xl font-bold text-slate-900 leading-tight block">{totalBranches}</span>
        </div>
      </div>
      <div className="bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-2xs flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
          <Users size={20} />
        </div>
        <div>
          <span className="text-[11.5px] font-medium text-slate-500 block">Total Employees</span>
          <span className="text-xl font-bold text-slate-900 leading-tight block">{totalEmployees}</span>
        </div>
      </div>
    </div>
  );
};

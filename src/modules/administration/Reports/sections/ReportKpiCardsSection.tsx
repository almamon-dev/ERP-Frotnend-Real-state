import React from 'react';
import { FileText, CheckCircle2, Clock, Download } from 'lucide-react';

export const ReportKpiCardsSection: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
    <div className="bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-2xs flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
        <FileText size={20} />
      </div>
      <div>
        <span className="text-[11.5px] font-medium text-slate-500 block">Total Reports</span>
        <span className="text-xl font-bold text-slate-900 leading-tight block">48</span>
      </div>
    </div>
    <div className="bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-2xs flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
        <CheckCircle2 size={20} />
      </div>
      <div>
        <span className="text-[11.5px] font-medium text-slate-500 block">Ready to Download</span>
        <span className="text-xl font-bold text-slate-900 leading-tight block">36</span>
      </div>
    </div>
    <div className="bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-2xs flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
        <Clock size={20} />
      </div>
      <div>
        <span className="text-[11.5px] font-medium text-slate-500 block">Scheduled Jobs</span>
        <span className="text-xl font-bold text-slate-900 leading-tight block">8</span>
      </div>
    </div>
    <div className="bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-2xs flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
        <Download size={20} />
      </div>
      <div>
        <span className="text-[11.5px] font-medium text-slate-500 block">Downloads This Month</span>
        <span className="text-xl font-bold text-slate-900 leading-tight block">142</span>
      </div>
    </div>
  </div>
);

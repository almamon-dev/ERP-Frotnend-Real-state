import React from 'react';
import { Landmark, Award, Shield } from 'lucide-react';

export default function CompanyOverview() {
  const companies = [
    { name: 'Apex Real Estate Ltd.', sector: 'Residential & Commercial', projects: '24 Projects', status: 'Primary' },
    { name: 'Crestview Land Holdings', sector: 'Land Acquisition & Banking', projects: '14 Land Banks', status: 'Active' },
    { name: 'Nexus Facility & Assets', sector: 'Property Management & Lease', projects: '10 Complexes', status: 'Active' },
  ];

  return (
    <div className="bg-white p-5 rounded-md border border-slate-200/90 shadow-2xs">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-slate-900">Corporate Subsidiaries & Companies</h3>
        <span className="text-[11.5px] font-bold text-[#0D6E4F] hover:underline cursor-pointer">Manage Companies</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {companies.map((c, idx) => (
          <div key={idx} className="p-3.5 rounded-md border border-slate-200/80 bg-slate-50/60 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Landmark size={15} className="text-[#0D6E4F]" />
                <h4 className="text-[12.5px] font-bold text-slate-900">{c.name}</h4>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">{c.sector}</p>
              <span className="text-[11.5px] font-bold text-slate-800 mt-1 block">{c.projects}</span>
            </div>
            <span className="text-[10px] font-extrabold text-[#0D6E4F] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

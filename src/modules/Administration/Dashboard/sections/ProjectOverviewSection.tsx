import React from 'react';
import { Building2, HardHat, ShieldCheck, ChevronRight } from 'lucide-react';

export default function ProjectOverview() {
  const projects = [
    { 
      name: 'Crestview Residence (Phase 2)', 
      progress: 78, 
      contractor: 'Star Construction', 
      phase: 'Structural Slab Casting', 
      location: 'Gulshan 2',
      badge: 'bg-emerald-50 text-[#0D6E4F] border-emerald-200'
    },
    { 
      name: 'Green Valley Commercial Tower', 
      progress: 45, 
      contractor: 'Apex Builders Ltd', 
      phase: 'Piling & Sub-structure', 
      location: 'Banani C/A',
      badge: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    { 
      name: 'Crown Heights Luxury Condos', 
      progress: 92, 
      contractor: 'Nexa Infra Corp', 
      phase: 'Interior & Handover Phase', 
      location: 'Uttara Sec 11',
      badge: 'bg-purple-50 text-purple-600 border-purple-200'
    },
  ];

  return (
    <div className="bg-white p-3.5 rounded-md border border-slate-200/90 shadow-2xs">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-[13px] font-bold text-slate-900 leading-none">Construction & Project Progress</h3>
          <p className="text-[10.5px] text-slate-500 font-medium mt-0.5">Live site status & structural milestones</p>
        </div>
        <span className="text-[10.5px] font-bold text-[#0D6E4F] hover:underline cursor-pointer flex items-center gap-0.5">
          BOQ & Sites <ChevronRight size={12} />
        </span>
      </div>

      <div className="space-y-2.5">
        {projects.map((proj, idx) => (
          <div key={idx} className="p-2.5 rounded border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 transition-all">
            <div className="flex items-center justify-between text-[11.5px] mb-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 truncate">
                <Building2 size={13} className="text-[#0D6E4F] shrink-0" />
                <span className="truncate">{proj.name}</span>
                <span className="text-[10px] text-slate-400 font-medium">({proj.location})</span>
              </div>
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded border shrink-0 ${proj.badge}`}>
                {proj.progress}% Done
              </span>
            </div>

            {/* Custom Multi-segment Progress Bar */}
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-1.5 flex">
              <div className="bg-[#0D6E4F] h-full rounded-full" style={{ width: `${proj.progress}%` }} />
            </div>

            <div className="flex items-center justify-between text-[10.5px] text-slate-500 font-medium">
              <span className="flex items-center gap-1 truncate">
                <HardHat size={12} className="text-amber-600 shrink-0" /> Contractor: <strong className="text-slate-700">{proj.contractor}</strong>
              </span>
              <span className="flex items-center gap-1 shrink-0">
                <ShieldCheck size={12} className="text-blue-600" /> <span className="text-slate-700 font-semibold">{proj.phase}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

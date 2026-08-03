import React from 'react';
import { CheckCircle2, FolderKanban, MapPin, DollarSign, Users } from 'lucide-react';

interface StepProps {
  formData: any;
}

export default function ProjectStepReview({ formData }: StepProps) {
  return (
    <div className="space-y-4 text-xs">
      <div>
        <h3 className="text-sm font-bold text-slate-800">Step 7 — Review & Publish Project</h3>
        <p className="text-xs text-slate-500">Please review all project parameters carefully before publishing.</p>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-[4px] flex items-center gap-2 text-emerald-800 font-medium">
        <CheckCircle2 size={16} className="text-[#006837]" /> All required project specifications completed!
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 border border-slate-200 rounded-[4px] bg-white space-y-1">
          <div className="font-bold text-slate-800 flex items-center gap-1.5"><FolderKanban size={14} className="text-[#006837]" /> Project Summary</div>
          <div><span className="font-semibold">Name:</span> {formData.projectName || 'Gulshan Crown Heights'}</div>
          <div><span className="font-semibold">Type:</span> {formData.projectType || 'Residential High-Rise'}</div>
          <div><span className="font-semibold">Status:</span> {formData.status || 'Ongoing'}</div>
        </div>

        <div className="p-3 border border-slate-200 rounded-[4px] bg-white space-y-1">
          <div className="font-bold text-slate-800 flex items-center gap-1.5"><MapPin size={14} className="text-[#006837]" /> Location & Land Area</div>
          <div><span className="font-semibold">Address:</span> {formData.address || 'Plot 42, Road 71, Gulshan 2'}</div>
          <div><span className="font-semibold">Land Area:</span> {formData.landArea || '24 Katha'}</div>
        </div>

        <div className="p-3 border border-slate-200 rounded-[4px] bg-white space-y-1">
          <div className="font-bold text-slate-800 flex items-center gap-1.5"><Users size={14} className="text-[#006837]" /> Development Team</div>
          <div><span className="font-semibold">Project Manager:</span> {formData.projectManager || 'Engr. Rafiqul Bari'}</div>
          <div><span className="font-semibold">Contractor:</span> {formData.contractor || 'Spectra Engineers Ltd.'}</div>
        </div>

        <div className="p-3 border border-slate-200 rounded-[4px] bg-white space-y-1">
          <div className="font-bold text-slate-800 flex items-center gap-1.5"><DollarSign size={14} className="text-[#006837]" /> Budget & Target</div>
          <div><span className="font-semibold">Estimated Budget:</span> {formData.estimatedBudget || '৳ 120.0 Cr'}</div>
          <div><span className="font-semibold">Sales Target:</span> {formData.salesTarget || '৳ 185.0 Cr'}</div>
        </div>
      </div>
    </div>
  );
}

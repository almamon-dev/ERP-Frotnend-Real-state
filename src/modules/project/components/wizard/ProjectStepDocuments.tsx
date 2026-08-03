import React from 'react';
import { FileText, Image as ImageIcon } from 'lucide-react';

interface StepProps {
  formData: any;
  onChange: (field: string, val: any) => void;
}

export default function ProjectStepDocuments({ formData, onChange }: StepProps) {
  return (
    <div className="space-y-4 text-xs">
      <div>
        <h3 className="text-sm font-bold text-slate-800">Step 6 — Documents & Master Plan</h3>
        <p className="text-xs text-slate-500">Upload Master Plan, Layout Plan, RAJUK/Departmental Approvals, and site photos.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-dashed border-slate-200 rounded-[4px] p-4 text-center hover:border-[#006837] bg-slate-50 transition-colors">
          <FileText className="mx-auto text-slate-400 mb-1.5" size={24} />
          <div className="font-bold text-slate-700">Master & Layout Plan (PDF/CAD)</div>
          <p className="text-[11px] text-slate-400 mt-0.5">Upload architectural drawings and approval certificates</p>
          <button className="mt-2 px-3 py-1 bg-white border border-slate-300 text-slate-700 text-[11px] font-semibold rounded-[4px] hover:bg-slate-100">Browse Documents</button>
        </div>

        <div className="border-2 border-dashed border-slate-200 rounded-[4px] p-4 text-center hover:border-[#006837] bg-slate-50 transition-colors">
          <ImageIcon className="mx-auto text-slate-400 mb-1.5" size={24} />
          <div className="font-bold text-slate-700">Project 3D Render & Images</div>
          <p className="text-[11px] text-slate-400 mt-0.5">Upload high-res renders and site progress photos</p>
          <button className="mt-2 px-3 py-1 bg-white border border-slate-300 text-slate-700 text-[11px] font-semibold rounded-[4px] hover:bg-slate-100">Browse Images</button>
        </div>
      </div>
    </div>
  );
}

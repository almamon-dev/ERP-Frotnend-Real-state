import React from 'react';
import { Upload, FileText, Image as ImageIcon } from 'lucide-react';
import Input from '@/shared/components/ui/input';

interface StepProps {
  formData: any;
  onChange: (field: string, val: any) => void;
}

export default function PropertyStepMedia({ formData, onChange }: StepProps) {
  return (
    <div className="space-y-4 text-xs">
      <div>
        <h3 className="text-sm font-bold text-slate-800">Media & Legal Documents</h3>
        <p className="text-xs text-slate-500">Upload cover image, gallery photos, floor plans, legal papers, and brochures.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-dashed border-slate-200 rounded-[4px] p-4 text-center hover:border-[#006837] bg-slate-50 transition-colors">
          <ImageIcon className="mx-auto text-slate-400 mb-1.5" size={24} />
          <div className="font-bold text-slate-700">Cover & Gallery Images</div>
          <p className="text-[11px] text-slate-400 mt-0.5">Drag & drop high-res property photos (PNG, JPG up to 10MB)</p>
          <button className="mt-2 px-3 py-1 bg-white border border-slate-300 text-slate-700 text-[11px] font-semibold rounded-[4px] hover:bg-slate-100">Browse Files</button>
        </div>

        <div className="border-2 border-dashed border-slate-200 rounded-[4px] p-4 text-center hover:border-[#006837] bg-slate-50 transition-colors">
          <FileText className="mx-auto text-slate-400 mb-1.5" size={24} />
          <div className="font-bold text-slate-700">Floor Plan & Legal Documents</div>
          <p className="text-[11px] text-slate-400 mt-0.5">Upload Deed of Sale, RAJUK Layout & Ownership PDF</p>
          <button className="mt-2 px-3 py-1 bg-white border border-slate-300 text-slate-700 text-[11px] font-semibold rounded-[4px] hover:bg-slate-100">Browse Files</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-2">
        <Input label="Video Tour Link" placeholder="e.g. https://youtube.com/watch?v=..." value={formData.videoLink || ''} onChange={(e) => onChange('videoLink', e.target.value)} />
        <Input label="E-Brochure PDF URL" placeholder="e.g. https://drive.google.com/..." value={formData.brochureLink || ''} onChange={(e) => onChange('brochureLink', e.target.value)} />
      </div>
    </div>
  );
}

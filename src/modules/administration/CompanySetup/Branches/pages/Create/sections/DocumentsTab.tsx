import React from 'react';
import { FileText, Paperclip } from 'lucide-react';
import Textarea from '@/shared/components/ui/textarea';
import FormLabel from '@/shared/components/ui/label';
import { BranchFormData } from '../types';
import { TabHeader, SectionHeader } from '../components/HeaderComponents';

interface Props {
  formData: BranchFormData;
  onChange: (field: keyof BranchFormData, value: any) => void;
}

export const DocumentsTab: React.FC<Props> = ({ formData, onChange }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
    <TabHeader title="Documents & Additional Notes" icon={FileText} />
    <div className="col-span-1 md:col-span-2">
      <FormLabel>Internal Notes / Description</FormLabel>
      <Textarea
        placeholder="Add any internal notes regarding this branch..."
        rows={4}
        value={formData.notes}
        onChange={(e) => onChange('notes', e.target.value)}
      />
    </div>
    <SectionHeader title="Attachments" icon={Paperclip} />
    <div className="col-span-1 md:col-span-2 border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:border-slate-400 transition-colors cursor-pointer bg-slate-50/50">
      <p className="text-[13px] font-medium text-slate-600">Drag and drop documents here or click to upload</p>
      <p className="text-[11px] text-slate-400 mt-1">Supports PDF, DOCX, PNG (Max 10MB)</p>
    </div>
  </div>
);

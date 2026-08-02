import React from 'react';
import { Eye, ExternalLink, Edit, Trash2 } from 'lucide-react';

interface Props {
  onView?: () => void;
  onExport?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const TableActionGroup: React.FC<Props> = ({
  onView,
  onExport,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex items-center gap-1.5 justify-end w-full ml-auto">
      {/* 1. View Button (Dark Slate / Charcoal Gray) */}
      <button
        onClick={onView ? onView : () => alert('View details')}
        title="View Details"
        className="w-7 h-7 rounded-sm bg-[#64748B] hover:bg-[#475569] text-white flex items-center justify-center transition-all shadow-xs active:scale-95 shrink-0"
      >
        <Eye size={14} className="stroke-[2.2]" />
      </button>

      {/* 2. Export / Open Button (Bright Electric Blue) */}
      <button
        onClick={onExport ? onExport : () => alert('Export report')}
        title="Export / Open"
        className="w-7 h-7 rounded-sm bg-[#006FEE] hover:bg-[#005BC4] text-white flex items-center justify-center transition-all shadow-xs active:scale-95 shrink-0"
      >
        <ExternalLink size={14} className="stroke-[2.2]" />
      </button>

      {/* 3. Edit Button (Royal Indigo Blue) */}
      <button
        onClick={onEdit ? onEdit : () => alert('Edit record')}
        title="Edit Record"
        className="w-7 h-7 rounded-sm bg-[#3B82F6] hover:bg-[#2563EB] text-white flex items-center justify-center transition-all shadow-xs active:scale-95 shrink-0"
      >
        <Edit size={14} className="stroke-[2.2]" />
      </button>

      {/* 4. Delete Button (Vibrant Coral Red) */}
      <button
        onClick={onDelete ? onDelete : () => alert('Delete record')}
        title="Delete Record"
        className="w-7 h-7 rounded-sm bg-[#F31260] hover:bg-[#E10E54] text-white flex items-center justify-center transition-all shadow-xs active:scale-95 shrink-0"
      >
        <Trash2 size={14} className="stroke-[2.2]" />
      </button>
    </div>
  );
};

import React from 'react';
import { Eye, ExternalLink, Edit, Trash2 } from 'lucide-react';

interface Props {
  onView?: () => void;
  onExport?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const ReportActionGroup: React.FC<Props> = ({
  onView,
  onExport,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex items-center gap-1.5">
      {/* 1. View Button (Gray) */}
      <button
        onClick={onView ? onView : () => alert('View Clicked')}
        title="View Details"
        className="w-8 h-8 rounded-md bg-slate-500 hover:bg-slate-600 text-white flex items-center justify-center transition-colors shadow-2xs"
      >
        <Eye size={15} />
      </button>

      {/* 2. Export/Open Button (Sky Blue) */}
      <button
        onClick={onExport ? onExport : () => alert('Export Clicked')}
        title="Export / Open"
        className="w-8 h-8 rounded-md bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center transition-colors shadow-2xs"
      >
        <ExternalLink size={15} />
      </button>

      {/* 3. Edit Button (Royal Blue/Indigo) */}
      <button
        onClick={onEdit ? onEdit : () => alert('Edit Clicked')}
        title="Edit Item"
        className="w-8 h-8 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center transition-colors shadow-2xs"
      >
        <Edit size={15} />
      </button>

      {/* 4. Delete Button (Red) */}
      <button
        onClick={onDelete ? onDelete : () => alert('Delete Clicked')}
        title="Delete Item"
        className="w-8 h-8 rounded-md bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center transition-colors shadow-2xs"
      >
        <Trash2 size={15} />
      </button>
    </div>
  );
};

import React from 'react';
import { Eye, ExternalLink, Edit, Trash2 } from 'lucide-react';

export interface TableActionsProps<T = any> {
  item: T;
  onView?: (item: T) => void;
  onExport?: (item: T) => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  compact?: boolean;
  className?: string;
}

export default function TableActions<T = any>({
  item,
  onView,
  onExport,
  onEdit,
  onDelete,
  compact = true,
  className = '',
}: TableActionsProps<T>) {
  // Compact sizes: w-[26px] h-[26px], Icon size: 13
  const btnSizeClass = compact ? 'w-[26px] h-[26px] rounded-[3px]' : 'w-7 h-7 rounded-sm';
  const iconSize = compact ? 13 : 14;

  return (
    <div className={`flex items-center justify-end gap-1 w-full ml-auto ${className}`}>
      {onView && (
        <button
          onClick={() => onView(item)}
          className={`${btnSizeClass} flex items-center justify-center bg-[#64748B] hover:bg-[#475569] text-white transition-all shadow-2xs active:scale-95 outline-none shrink-0`}
          title="View details"
        >
          <Eye size={iconSize} strokeWidth={2.2} />
        </button>
      )}

      {onExport && (
        <button
          onClick={() => onExport(item)}
          className={`${btnSizeClass} flex items-center justify-center bg-[#006FEE] hover:bg-[#005BC4] text-white transition-all shadow-2xs active:scale-95 outline-none shrink-0`}
          title="Export / Open"
        >
          <ExternalLink size={iconSize} strokeWidth={2.2} />
        </button>
      )}

      {onEdit && (
        <button
          onClick={() => onEdit(item)}
          className={`${btnSizeClass} flex items-center justify-center bg-[#3B82F6] hover:bg-[#2563EB] text-white transition-all shadow-2xs active:scale-95 outline-none shrink-0`}
          title="Edit record"
        >
          <Edit size={iconSize} strokeWidth={2.2} />
        </button>
      )}

      {onDelete && (
        <button
          onClick={() => onDelete(item)}
          className={`${btnSizeClass} flex items-center justify-center bg-[#F31260] hover:bg-[#E10E54] text-white transition-all shadow-2xs active:scale-95 outline-none shrink-0`}
          title="Delete record"
        >
          <Trash2 size={iconSize} strokeWidth={2.2} />
        </button>
      )}
    </div>
  );
}

import React from 'react';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

export interface StatusBadgeProps {
  status: string;
  className?: string;
}

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const lower = (status || '').toLowerCase();

  if (lower === 'active' || lower === 'approved' || lower === 'completed' || lower === 'paid' || lower === 'published') {
    return (
      <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-[#E6F4EA] text-[#006837] border border-[#CEEAD6] inline-flex items-center gap-1 ${className}`}>
        <CheckCircle2 size={12} className="text-[#006837]" /> {status}
      </span>
    );
  }

  if (lower === 'inactive' || lower === 'suspended' || lower === 'rejected' || lower === 'cancelled' || lower === 'failed') {
    return (
      <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-[#FCE8E6] text-[#C5221F] border border-[#FAD2CF] inline-flex items-center gap-1 ${className}`}>
        <XCircle size={12} className="text-[#C5221F]" /> {status}
      </span>
    );
  }

  return (
    <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-[#FEF7E0] text-[#B06000] border border-[#FEEFC3] inline-flex items-center gap-1 ${className}`}>
      <Clock size={12} className="text-[#B06000]" /> {status}
    </span>
  );
}

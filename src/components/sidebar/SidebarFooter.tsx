import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'lucide-react';
import { SidebarFooterProps } from './types/sidebar';

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ isOpen, onLogout }) => {
  return (
    <div className="p-3 border-t border-slate-100 bg-white shrink-0 space-y-1">
      <Link
        to="/admin/modules"
        title={!isOpen ? "Modules" : undefined}
        className={`flex items-center ${isOpen ? 'gap-3 px-3' : 'justify-center'} py-2 w-full rounded-[6px] text-[13px] font-medium text-[#4A5568] hover:bg-[#F7FAFC] hover:text-[#1A202C] transition-colors`}
      >
        <ArrowLeft size={18} className="text-[#8A94A6]" />
        {isOpen && <span className="whitespace-nowrap">Back to Modules</span>}
      </Link>
      <button
        onClick={onLogout}
        title={!isOpen ? "Logout" : undefined}
        className={`flex items-center ${isOpen ? 'gap-3 px-3' : 'justify-center'} py-2 w-full rounded-[6px] text-[13px] font-medium text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer`}
      >
        <LogOut size={18} />
        {isOpen && <span className="whitespace-nowrap">Logout</span>}
      </button>
    </div>
  );
};

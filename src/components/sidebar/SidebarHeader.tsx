import React from 'react';
import { Hexagon } from 'lucide-react';
import { SidebarHeaderProps } from './types/sidebar';

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isOpen, onBrandClick }) => {
  return (
    <div className="h-16 px-5 flex items-center justify-between border-b border-slate-100 shrink-0">
      <div className="flex items-center gap-3 cursor-pointer" onClick={onBrandClick}>
        <div className="w-9 h-9 rounded-md bg-gradient-to-tr from-[#3730A3] via-[#4338CA] to-[#4F46E5] text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
          <Hexagon size={22} className="fill-white/20 stroke-[2.2]" />
        </div>
        {isOpen && (
          <div className="flex flex-col">
            <span className="font-extrabold text-[15px] leading-tight text-slate-900 tracking-tight">
              ESS PORTAL
            </span>
            <span className="text-[10.5px] font-medium text-slate-400 leading-tight tracking-wide">
              Employee Self Service
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

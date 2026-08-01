import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarItemProps } from './types/sidebar';

export const SidebarItem: React.FC<SidebarItemProps> = ({
  name,
  path,
  icon: Icon,
  isOpen,
  isActive,
}) => {
  return (
    <Link
      to={path}
      title={!isOpen ? name : undefined}
      className={`w-full flex items-center ${
        isOpen ? 'justify-between px-3 py-2' : 'justify-center py-2'
      } rounded-[6px] font-medium text-[13px] transition-all duration-75 group cursor-pointer ${
        isActive
          ? 'bg-[#EAF5EF] text-[#0D6E4F] font-semibold'
          : 'text-[#2D3748] hover:text-[#1A202C] hover:bg-[#F7FAFC]'
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        {Icon && (
          <Icon
            size={19}
            strokeWidth={1.75}
            className={`shrink-0 transition-colors ${
              isActive ? 'text-[#0D6E4F]' : 'text-[#8A94A6] group-hover:text-[#4A5568]'
            }`}
          />
        )}
        {isOpen && <span className="truncate">{name}</span>}
      </div>
    </Link>
  );
};

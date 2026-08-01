import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { SidebarGroupProps } from './types/sidebar';

export const SidebarGroup: React.FC<SidebarGroupProps> = ({
  item,
  isOpen,
  locationPathname,
  locationSearch,
}) => {
  const GroupIcon = item.icon;
  const isActiveGroup = item.items?.some((subItem) => {
    const basePath = subItem.path.split('?')[0];
    return locationPathname === basePath || (basePath !== '/' && locationPathname.startsWith(basePath));
  });

  const [isExpanded, setIsExpanded] = useState(!!isActiveGroup);

  useEffect(() => {
    if (isActiveGroup) {
      setIsExpanded(true);
    }
  }, [isActiveGroup, locationPathname, locationSearch]);

  return (
    <div className="space-y-0.5">
      <button
        onClick={() => isOpen && setIsExpanded(!isExpanded)}
        title={!isOpen ? item.group : undefined}
        className={`w-full flex items-center ${
          isOpen ? 'justify-between px-3 py-2' : 'justify-center py-2'
        } rounded-[6px] font-medium text-[13px] transition-all duration-75 group cursor-pointer ${
          isActiveGroup
            ? 'bg-[#EAF5EF] text-[#0D6E4F] font-semibold'
            : 'text-[#2D3748] hover:text-[#1A202C] hover:bg-[#F7FAFC]'
        }`}
      >
        <div className={`flex items-center ${isOpen ? 'gap-3' : 'justify-center'} min-w-0`}>
          {GroupIcon && (
            <GroupIcon
              size={19}
              strokeWidth={1.75}
              className={`shrink-0 transition-colors ${
                isActiveGroup ? 'text-[#0D6E4F]' : 'text-[#8A94A6] group-hover:text-[#4A5568]'
              }`}
            />
          )}
          {isOpen && <span className="truncate">{item.group}</span>}
        </div>
        {isOpen && (
          <span className="shrink-0 ml-1">
            {isExpanded ? (
              <ChevronDown size={15} strokeWidth={2} className={isActiveGroup ? 'text-[#0D6E4F]' : 'text-[#8A94A6] group-hover:text-[#4A5568]'} />
            ) : (
              <ChevronRight size={15} strokeWidth={2} className={isActiveGroup ? 'text-[#0D6E4F]' : 'text-[#8A94A6] group-hover:text-[#4A5568]'} />
            )}
          </span>
        )}
      </button>

      {isOpen && isExpanded && item.items && (
        <div className="ml-5 pl-2 space-y-0.5 my-1">
          {item.items.map((subItem) => {
            const currentUrl = locationPathname + locationSearch;
            const basePath = subItem.path.split('?')[0];
            const isSubActive = currentUrl === subItem.path || (locationPathname === basePath && !locationSearch);
            const SubIcon = subItem.icon;

            return (
              <Link
                key={subItem.name}
                to={subItem.path}
                className={`w-full flex items-center justify-between px-2 py-1.5 text-[12.5px] transition-colors duration-75 cursor-pointer group ${
                  isSubActive
                    ? 'text-[#0D6E4F] font-semibold'
                    : 'text-[#718096] hover:text-[#2D3748] font-normal'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  {SubIcon ? (
                    <SubIcon
                      size={15}
                      strokeWidth={1.75}
                      className={`shrink-0 ${isSubActive ? 'text-[#0D6E4F]' : 'text-[#8A94A6] group-hover:text-[#4A5568]'}`}
                    />
                  ) : (
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSubActive ? 'bg-[#0D6E4F]' : 'bg-slate-300 group-hover:bg-slate-400'}`} />
                  )}
                  <span className="truncate">{subItem.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

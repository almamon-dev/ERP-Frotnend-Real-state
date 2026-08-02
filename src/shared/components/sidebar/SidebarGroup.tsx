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
        className={`w-full flex items-center ${isOpen ? 'justify-between px-3 py-2' : 'justify-center py-2'
          } rounded-[6px] font-medium text-[13px] transition-all duration-75 group cursor-pointer ${isActiveGroup
            ? 'bg-[#EAF5EF] text-[#0D6E4F] font-semibold'
            : 'text-[#2D3748] hover:text-[#1A202C] hover:bg-[#F7FAFC]'
          }`}
      >
        <div className={`flex items-center ${isOpen ? 'gap-3' : 'justify-center'} min-w-0`}>
          {GroupIcon && (
            <GroupIcon
              size={19}
              strokeWidth={1.75}
              className={`shrink-0 transition-colors ${isActiveGroup ? 'text-[#0D6E4F]' : 'text-[#8A94A6] group-hover:text-[#4A5568]'
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
        <div className="ml-[23px] pl-0 my-1 space-y-0.5 relative">
          {/* Determine active subItem index for precise tree line coloring */}
          {(() => {
            const activeIndex = item.items.findIndex(subItem => {
              const currentUrl = locationPathname + (locationSearch || '');
              const basePath = subItem.path.split('?')[0];
              const subQuery = new URLSearchParams(subItem.path.split('?')[1] || '');
              const currentQuery = new URLSearchParams(locationSearch || '');
              const subCategory = subQuery.get('category');
              const currentCategory = currentQuery.get('category');

              if (subCategory) {
                return locationPathname === basePath && (currentCategory === subCategory || (!currentCategory && subCategory === 'company_types'));
              }
              return currentUrl === subItem.path || (locationPathname === basePath && !locationSearch);
            });

            return (
              <>
                {/* Full grey vertical line track */}
                <div className="absolute left-0 top-0 bottom-[14px] w-[1.5px] bg-slate-200" />

                {/* Active green vertical line track extending down to active item */}
                {activeIndex !== -1 && (
                  <div
                    className="absolute left-0 top-0 w-[1.5px] bg-[#0D6E4F] transition-all duration-200 z-10"
                    style={{ height: `${(activeIndex * 32) + 16}px` }}
                  />
                )}
              </>
            );
          })()}

          {item.items.map((subItem, index) => {
            const currentUrl = locationPathname + (locationSearch || '');
            const basePath = subItem.path.split('?')[0];
            const subQuery = new URLSearchParams(subItem.path.split('?')[1] || '');
            const currentQuery = new URLSearchParams(locationSearch || '');
            
            const subCategory = subQuery.get('category');
            const currentCategory = currentQuery.get('category');

            let isSubActive = false;
            if (subCategory) {
              isSubActive = locationPathname === basePath && (currentCategory === subCategory || (!currentCategory && subCategory === 'company_types'));
            } else {
              isSubActive = currentUrl === subItem.path || (locationPathname === basePath && !locationSearch);
            }

            return (
              <div key={subItem.name} className="relative flex items-center">
                {/* Horizontal branch connector line */}
                <div
                  className={`absolute left-0 w-3.5 h-[1.5px] transition-colors ${
                    isSubActive ? 'bg-[#0D6E4F]' : 'bg-slate-200 group-hover:bg-[#0D6E4F]/60'
                  }`}
                  style={{ top: '50%' }}
                />

                <Link
                  to={subItem.path}
                  className={`w-full flex items-center gap-2 ml-3.5 px-2 py-1.5 rounded-[5px] text-[12.5px] transition-colors duration-75 cursor-pointer group ${
                    isSubActive
                      ? 'text-[#0D6E4F] font-bold'
                      : 'text-[#4A5568] hover:text-[#0D6E4F] font-medium'
                  }`}
                >
                  {/* Bullet Dot */}
                  <span
                    className={`w-[5px] h-[5px] rounded-full shrink-0 transition-colors ${
                      isSubActive
                        ? 'bg-[#0D6E4F] ring-2 ring-[#0D6E4F]/20'
                        : 'bg-slate-300 group-hover:bg-[#0D6E4F]'
                    }`}
                  />

                  <span className="truncate">{subItem.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

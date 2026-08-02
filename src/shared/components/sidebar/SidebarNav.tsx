import React from 'react';
import { SidebarNavProps } from './types/sidebar';
import { SidebarCategory } from './SidebarCategory';
import { SidebarGroup } from './SidebarGroup';
import { SidebarItem } from './SidebarItem';

export const SidebarNav: React.FC<SidebarNavProps> = ({
  navItems,
  isOpen,
  locationPathname,
  locationSearch,
}) => {
  const cleanCategoryName = (category?: string) => {
    if (!category) return '';
    return category.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').trim();
  };

  return (
    <nav className="flex-1 overflow-y-auto p-3 space-y-0.5 custom-scrollbar">
      {navItems.map((item, idx) => {
        const prevCategory = idx > 0 ? navItems[idx - 1].category : null;
        const categoryTitle = cleanCategoryName(item.category);
        const itemName = item.group || item.name || '';
        const cleanItem = cleanCategoryName(itemName);

        // Hide category header if it's redundant/identical to the single menu item underneath it
        const isRedundantCategory =
          categoryTitle &&
          cleanItem &&
          (categoryTitle.toLowerCase() === cleanItem.toLowerCase() ||
            cleanItem.toLowerCase().startsWith(categoryTitle.toLowerCase()));

        const showCategory =
          item.category && item.category !== prevCategory && !isRedundantCategory;

        const isActive = !!(
          item.path &&
          (locationPathname === item.path ||
            (item.path !== '/' && locationPathname.startsWith(item.path)))
        );

        return (
          <React.Fragment key={idx}>
            {showCategory && <SidebarCategory category={categoryTitle} />}

            {item.group ? (
              <SidebarGroup
                item={item}
                isOpen={isOpen}
                locationPathname={locationPathname}
                locationSearch={locationSearch}
              />
            ) : item.name && item.path ? (
              <SidebarItem
                name={item.name}
                path={item.path}
                icon={item.icon}
                isOpen={isOpen}
                isActive={isActive}
              />
            ) : null}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

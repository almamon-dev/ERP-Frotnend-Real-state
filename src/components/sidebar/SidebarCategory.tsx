import React from 'react';
import { SidebarCategoryProps } from './types/sidebar';

export const SidebarCategory: React.FC<SidebarCategoryProps> = ({ category }) => {
  if (!category) return null;
  return (
    <div className="mt-2.5 mb-0.5 px-3">
      <span className="text-[10.5px] font-extrabold tracking-wider text-[#8A94A6] uppercase">
        {category}
      </span>
    </div>
  );
};

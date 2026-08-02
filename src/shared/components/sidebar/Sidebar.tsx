import React from 'react';
import { SidebarProps } from './types/sidebar';
import { useSidebar } from './hooks/useSidebar';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNav } from './SidebarNav';
import { SidebarFooter } from './SidebarFooter';

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const {
    location,
    navItems,
    handleLogout,
    handleBrandClick,
  } = useSidebar();

  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 z-50 w-[270px] bg-white border-r border-slate-200/90 flex flex-col justify-between shrink-0 max-lg:transition-transform max-lg:duration-200 max-lg:ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:w-[72px] lg:translate-x-0'
      }`}
    >
      <SidebarHeader isOpen={isOpen} onBrandClick={handleBrandClick} />

      <SidebarNav
        navItems={navItems}
        isOpen={isOpen}
        locationPathname={location.pathname}
        locationSearch={location.search}
      />

      <SidebarFooter isOpen={isOpen} onLogout={handleLogout} />
    </aside>
  );
};

export default Sidebar;

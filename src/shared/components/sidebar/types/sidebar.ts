import { LucideIcon } from 'lucide-react';

export interface SidebarSubItem {
  name: string;
  path: string;
  icon?: LucideIcon;
  tab?: string;
}

export interface SidebarNavItem {
  category?: string;
  name?: string;
  path?: string;
  icon?: LucideIcon;
  group?: string;
  items?: SidebarSubItem[];
}

export interface SidebarProps {
  isOpen: boolean;
}

export interface SidebarHeaderProps {
  isOpen: boolean;
  onBrandClick?: () => void;
}

export interface SidebarCategoryProps {
  category: string;
}

export interface SidebarItemProps {
  name: string;
  path: string;
  icon?: LucideIcon;
  isOpen: boolean;
  isActive: boolean;
}

export interface SidebarGroupProps {
  item: SidebarNavItem;
  isOpen: boolean;
  locationPathname: string;
  locationSearch: string;
}

export interface SidebarNavProps {
  navItems: SidebarNavItem[];
  isOpen: boolean;
  locationPathname: string;
  locationSearch: string;
}

export interface SidebarFooterProps {
  isOpen: boolean;
  onLogout: () => void;
}

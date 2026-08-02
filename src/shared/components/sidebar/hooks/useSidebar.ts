import { useLocation, useNavigate } from 'react-router-dom';
import { navigationMap, adminMasterNavigation } from '@/shared/constants/navigation';
import { useAuth } from '@/shared/context/contexts/AuthContext';
import { SidebarNavItem } from '../types/sidebar';

export const useSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const segments = location.pathname.split('/').filter(Boolean);
  
  // Smart module resolution: try segment 1 (e.g. 'core' from '/admin/core/branches'), then segment 0
  const subKey = segments[1];
  const mainKey = segments[0];

  const navItems: SidebarNavItem[] = 
    (subKey && navigationMap[subKey]) ||
    (mainKey && navigationMap[mainKey]) ||
    adminMasterNavigation;

  const handleLogout = () => {
    logout();
    navigate('/web/login');
  };

  const handleBrandClick = () => {
    navigate('/dashboard');
  };

  const isItemActive = (path?: string) => {
    if (!path) return false;
    const currentUrl = location.pathname + location.search;
    const basePath = path.split('?')[0];
    return currentUrl === path || (location.pathname === basePath && !location.search) || (path !== '/' && location.pathname.startsWith(path));
  };

  const isGroupActive = (items?: { path: string }[]) => {
    if (!items) return false;
    return items.some((subItem) => {
      const basePath = subItem.path.split('?')[0];
      return location.pathname === basePath || (basePath !== '/' && location.pathname.startsWith(basePath));
    });
  };

  const cleanCategoryName = (category?: string) => {
    if (!category) return '';
    return category.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').trim();
  };

  return {
    location,
    navigate,
    user,
    navItems,
    handleLogout,
    handleBrandClick,
    isItemActive,
    isGroupActive,
    cleanCategoryName,
  };
};

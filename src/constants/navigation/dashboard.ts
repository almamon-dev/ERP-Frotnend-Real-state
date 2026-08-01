import { LayoutDashboard, LineChart, FileBarChart } from 'lucide-react';
import { SidebarNavItem } from '@/components/sidebar/types/sidebar';

export const dashboardNavigation: SidebarNavItem[] = [
  { category: 'Dashboard', name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { category: 'Dashboard', name: 'Analytics', path: '/admin/analytics', icon: LineChart },
  { category: 'Dashboard', name: 'Reports Overview', path: '/admin/dashboard-reports', icon: FileBarChart },
];

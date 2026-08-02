import { LayoutDashboard, LineChart, FileBarChart } from 'lucide-react';
import { SidebarNavItem } from '@/shared/components/sidebar/types/sidebar';

export const dashboardNavigation: SidebarNavItem[] = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Analytics', path: '/admin/analytics', icon: LineChart },
  {
    group: 'Reports',
    icon: FileBarChart,
    items: [
      { name: 'Reports Overview', path: '/admin/reports/overview' },
      { name: 'Custom Reports', path: '/admin/reports/custom' },
      { name: 'Scheduled Reports', path: '/admin/reports/scheduled' },
      { name: 'Report Builder', path: '/admin/reports/builder' },
      { name: 'Data Export', path: '/admin/reports/export' },
      { name: 'Report Templates', path: '/admin/reports/templates' },
    ],
  },
];

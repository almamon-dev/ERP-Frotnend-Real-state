import { FileBarChart } from 'lucide-react';
import { SidebarNavItem } from '@/shared/components/sidebar/types/sidebar';

export const reportsNavigation: SidebarNavItem[] = [
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

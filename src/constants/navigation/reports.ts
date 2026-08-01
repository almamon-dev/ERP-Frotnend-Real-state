import { FileBarChart, TrendingUp, DollarSign, Users, FolderKanban, Briefcase, Sliders } from 'lucide-react';
import { SidebarNavItem } from '@/components/sidebar/types/sidebar';

export const reportsNavigation: SidebarNavItem[] = [
  {
    category: 'Reports',
    group: 'Reports',
    icon: FileBarChart,
    items: [
      { name: 'Sales Reports', path: '/admin/reports/sales', icon: TrendingUp },
      { name: 'Finance Reports', path: '/admin/reports/finance', icon: DollarSign },
      { name: 'CRM Reports', path: '/admin/reports/crm', icon: Users },
      { name: 'Project Reports', path: '/admin/reports/project', icon: FolderKanban },
      { name: 'HR Reports', path: '/admin/reports/hr', icon: Briefcase },
      { name: 'Custom Reports', path: '/admin/reports/custom', icon: Sliders },
    ]
  }
];

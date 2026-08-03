import { 
  Building2, MapPin, Network, Briefcase, Users, 
  UserCheck, Workflow, UserCircle, ShieldCheck, Key, Clock, Activity, FileText, Database 
} from 'lucide-react';
import { SidebarNavItem } from '@/shared/components/sidebar/types/sidebar';

export const foundationNavigation: SidebarNavItem[] = [
  {
    category: 'Core Foundation',
    group: 'Company Setup',
    icon: Building2,
    items: [
      { name: 'Companies', path: '/admin/core/companies', icon: Building2 },
      { name: 'Branches', path: '/admin/core/branches', icon: MapPin },
      { name: 'Departments', path: '/admin/core/departments', icon: Network },
      { name: 'Designations', path: '/admin/core/designations', icon: Briefcase },
      { name: 'Teams', path: '/admin/core/teams', icon: Users },
      { name: 'Master Data Setup', path: '/admin/core/master-data', icon: Database },
      { name: 'Employees', path: '/admin/core/employees', icon: UserCheck },
      { name: 'Organization Chart', path: '/admin/core/org-chart', icon: Workflow },
    ]
  },
  {
    category: 'Core Foundation',
    group: 'User Management',
    icon: Users,
    items: [
      { name: 'Dashboard', path: '/administration/access/dashboard', icon: UserCircle },
      { name: 'Users', path: '/administration/access/users', icon: Users },
      { name: 'Login History', path: '/administration/access/login-history', icon: Clock },
      { name: 'Activity Logs', path: '/administration/access/activity-logs', icon: FileText },
      { name: 'Reports', path: '/administration/access/reports', icon: Activity },
    ]
  }
];

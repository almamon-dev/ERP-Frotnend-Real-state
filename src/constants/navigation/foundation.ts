import { 
  Building2, MapPin, Network, Briefcase, Users, 
  UserCheck, Workflow, UserCircle, ShieldCheck, Key, Clock, Activity, FileText 
} from 'lucide-react';
import { SidebarNavItem } from '@/components/sidebar/types/sidebar';

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
      { name: 'Employees', path: '/admin/core/employees', icon: UserCheck },
      { name: 'Organization Chart', path: '/admin/core/org-chart', icon: Workflow },
    ]
  },
  {
    category: 'Core Foundation',
    group: 'User Management',
    icon: Users,
    items: [
      { name: 'Users', path: '/admin/users/list', icon: UserCircle },
      { name: 'Roles', path: '/admin/users/roles', icon: ShieldCheck },
      { name: 'Permissions', path: '/admin/users/permissions', icon: Key },
      { name: 'User Groups', path: '/admin/users/groups', icon: Users },
      { name: 'Login History', path: '/admin/users/login-history', icon: Clock },
      { name: 'Active Sessions', path: '/admin/users/active-sessions', icon: Activity },
      { name: 'Activity Logs', path: '/admin/users/activity-logs', icon: FileText },
    ]
  }
];

import { Settings, Bell, Link, ShieldAlert, Database, User } from 'lucide-react';
import { SidebarNavItem } from '@/components/sidebar/types/sidebar';

export const settingsNavigation: SidebarNavItem[] = [
  {
    category: 'System',
    group: 'System',
    icon: Settings,
    items: [
      { name: 'Notifications', path: '/admin/system/notifications', icon: Bell },
      { name: 'Integrations', path: '/admin/system/integrations', icon: Link },
      { name: 'Audit Logs', path: '/admin/system/audit-logs', icon: ShieldAlert },
      { name: 'Backup', path: '/admin/system/backup', icon: Database },
      { name: 'System Settings', path: '/admin/system/settings', icon: Settings },
      { name: 'Profile', path: '/admin/system/profile', icon: User },
    ]
  }
];

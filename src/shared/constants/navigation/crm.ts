import { Target, LayoutDashboard, Users, MapPin, Bookmark, DollarSign, Key } from 'lucide-react';
import { SidebarNavItem } from '@/shared/components/sidebar/types/sidebar';

export const crmNavigation: SidebarNavItem[] = [
  {
    category: 'CRM',
    group: 'CRM',
    icon: Target,
    items: [
      { name: 'Overview', path: '/admin/crm/overview', icon: LayoutDashboard },
      { name: 'Leads', path: '/admin/crm/leads', icon: Target },
      { name: 'Customers', path: '/admin/crm/customers', icon: Users },
      { name: 'Site Visits', path: '/admin/crm/site-visits', icon: MapPin },
      { name: 'Bookings', path: '/admin/crm/bookings', icon: Bookmark },
      { name: 'Sales', path: '/admin/crm/sales', icon: DollarSign },
      { name: 'Rental & Lease', path: '/admin/crm/rental-lease', icon: Key },
    ]
  }
];

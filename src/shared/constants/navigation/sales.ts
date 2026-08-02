import { ShoppingCart, DollarSign, Users, Bookmark, Key, TrendingUp } from 'lucide-react';
import { SidebarNavItem } from '@/shared/components/sidebar/types/sidebar';

export const salesNavigation: SidebarNavItem[] = [
  {
    category: 'Sales',
    group: 'Sales Pipeline',
    icon: ShoppingCart,
    items: [
      { name: 'Deals & Sales', path: '/admin/crm/sales', icon: DollarSign },
      { name: 'Bookings', path: '/admin/crm/bookings', icon: Bookmark },
      { name: 'Lease Agreements', path: '/admin/crm/rental-lease', icon: Key },
      { name: 'Sales Analytics', path: '/admin/reports/sales', icon: TrendingUp },
      { name: 'Customers', path: '/admin/crm/customers', icon: Users },
    ]
  }
];

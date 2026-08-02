import { Box, ShoppingCart, Boxes, Truck, Wrench, Scale, Megaphone, FileText, ClipboardList } from 'lucide-react';
import { SidebarNavItem } from '@/shared/components/sidebar/types/sidebar';

export const inventoryNavigation: SidebarNavItem[] = [
  {
    category: 'Operations',
    group: 'Operations',
    icon: Box,
    items: [
      { name: 'Procurement & Purchase', path: '/admin/operations/procurement', icon: ShoppingCart },
      { name: 'Material Inventory', path: '/admin/operations/inventory', icon: Boxes },
      { name: 'Vendors & Contractors', path: '/admin/operations/vendors', icon: Truck },
      { name: 'Site & Asset Maintenance', path: '/admin/operations/maintenance', icon: Wrench },
      { name: 'Legal & Compliance', path: '/admin/operations/legal', icon: Scale },
      { name: 'Marketing Operations', path: '/admin/operations/marketing', icon: Megaphone },
    ]
  }
];

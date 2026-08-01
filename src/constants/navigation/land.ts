import { Landmark, Users, Compass, FileCheck, RefreshCcw, Scale, ShoppingCart } from 'lucide-react';
import { SidebarNavItem } from '@/components/sidebar/types/sidebar';

export const landNavigation: SidebarNavItem[] = [
  {
    category: 'Land & Project',
    group: 'Land Management',
    icon: Landmark,
    items: [
      { name: 'Land Bank', path: '/admin/land/bank', icon: Landmark },
      { name: 'Land Owners', path: '/admin/land/owners', icon: Users },
      { name: 'Survey', path: '/admin/land/survey', icon: Compass },
      { name: 'Registration', path: '/admin/land/registration', icon: FileCheck },
      { name: 'Mutation', path: '/admin/land/mutation', icon: RefreshCcw },
      { name: 'Legal Documents', path: '/admin/land/legal-docs', icon: Scale },
      { name: 'Land Purchase', path: '/admin/land/purchase', icon: ShoppingCart },
    ]
  }
];

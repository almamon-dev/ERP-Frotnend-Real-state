import { Home, Tags, Folder, Sparkles, Image, FileText, Calendar } from 'lucide-react';
import { SidebarNavItem } from '@/components/sidebar/types/sidebar';

export const propertyNavigation: SidebarNavItem[] = [
  {
    category: 'Property',
    group: 'Property Management',
    icon: Home,
    items: [
      { name: 'Properties', path: '/admin/property/list', icon: Home },
      { name: 'Property Types', path: '/admin/property/types', icon: Tags },
      { name: 'Categories', path: '/admin/property/categories', icon: Folder },
      { name: 'Amenities', path: '/admin/property/amenities', icon: Sparkles },
      { name: 'Images', path: '/admin/property/images', icon: Image },
      { name: 'Documents', path: '/admin/property/documents', icon: FileText },
      { name: 'Availability', path: '/admin/property/availability', icon: Calendar },
    ]
  }
];

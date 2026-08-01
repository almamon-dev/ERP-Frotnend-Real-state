import { FolderKanban, Layers, Building, Building2, LayoutGrid, ListOrdered, Home } from 'lucide-react';
import { SidebarNavItem } from '@/components/sidebar/types/sidebar';

export const projectNavigation: SidebarNavItem[] = [
  {
    category: 'Land & Project',
    group: 'Project Management',
    icon: FolderKanban,
    items: [
      { name: 'Projects', path: '/admin/projects/list', icon: FolderKanban },
      { name: 'Phases', path: '/admin/projects/phases', icon: Layers },
      { name: 'Buildings', path: '/admin/projects/buildings', icon: Building },
      { name: 'Towers', path: '/admin/projects/towers', icon: Building2 },
      { name: 'Blocks', path: '/admin/projects/blocks', icon: LayoutGrid },
      { name: 'Floors', path: '/admin/projects/floors', icon: ListOrdered },
      { name: 'Units', path: '/admin/projects/units', icon: Home },
    ]
  }
];

import { FolderKanban, Building2, HardHat } from 'lucide-react';

export const projectNavigation = {
  category: 'Land & Project',
  group: 'Project Management',
  icon: FolderKanban,
  items: [
    { name: 'Projects', path: '/admin/projects/list' },
    { name: 'Buildings & Floors', path: '/admin/projects/buildings' },
    { name: 'Progress Reports', path: '/admin/projects/progress' },
  ],
};

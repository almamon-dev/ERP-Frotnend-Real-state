import { MapPin, Briefcase, FileText } from 'lucide-react';

export const landNavigation = {
  category: 'Land & Project',
  group: 'Land Management',
  icon: MapPin,
  items: [
    { name: 'Land Plots', path: '/admin/land/plots' },
    { name: 'Land Acquisition', path: '/admin/land/acquisition' },
    { name: 'Land Documents', path: '/admin/land/documents' },
  ],
};

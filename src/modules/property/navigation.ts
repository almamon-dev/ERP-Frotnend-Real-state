import { Home, Layers, Sparkles, Wrench } from 'lucide-react';

export const propertyNavigation = {
  category: 'Property Management',
  group: 'Property Operations',
  icon: Home,
  items: [
    { name: 'Properties', path: '/admin/property/properties' },
    { name: 'Units', path: '/admin/property/units' },
    { name: 'Amenities & Parking', path: '/admin/property/amenities' },
    { name: 'Maintenance', path: '/admin/property/maintenance' },
  ],
};

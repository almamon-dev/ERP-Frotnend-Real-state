import { SidebarNavItem } from '@/components/sidebar/types/sidebar';
import { dashboardNavigation } from './dashboard';
import { foundationNavigation } from './foundation';
import { landNavigation } from './land';
import { projectNavigation } from './project';
import { propertyNavigation } from './property';
import { crmNavigation } from './crm';
import { salesNavigation } from './sales';
import { financeNavigation } from './finance';
import { hrNavigation } from './hr';
import { inventoryNavigation } from './inventory';
import { reportsNavigation } from './reports';
import { settingsNavigation } from './settings';

export * from './dashboard';
export * from './foundation';
export * from './land';
export * from './project';
export * from './property';
export * from './crm';
export * from './sales';
export * from './finance';
export * from './hr';
export * from './inventory';
export * from './reports';
export * from './settings';

export const adminMasterNavigation: SidebarNavItem[] = [
  ...dashboardNavigation,
  ...foundationNavigation,
  ...landNavigation,
  ...projectNavigation,
  ...propertyNavigation,
  ...crmNavigation,
  ...financeNavigation,
  ...inventoryNavigation,
  ...hrNavigation,
  ...reportsNavigation,
  ...settingsNavigation,
];

export const navigationMap: Record<string, SidebarNavItem[]> = {
  'dashboard': adminMasterNavigation,
  'admin': adminMasterNavigation,
  'core': foundationNavigation,
  'land': landNavigation,
  'projects': projectNavigation,
  'property': propertyNavigation,
  'crm': crmNavigation,
  'sales': salesNavigation,
  'finance': financeNavigation,
  'operations': inventoryNavigation,
  'hr': hrNavigation,
  'reports': reportsNavigation,
  'system': settingsNavigation,
};

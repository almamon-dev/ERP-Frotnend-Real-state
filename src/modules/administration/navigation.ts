import { dashboardNavigation } from './Dashboard';
import { analyticsNavigation } from './Analytics';
import { reportsNavigation } from './Reports';
import { userManagementNavigation } from './UserManagement';
import { organizationNavigation } from './CompanySetup';
import { masterDataNavigation } from './MasterData';
import { securityNavigation } from './Security';
import { settingsNavigation } from './Settings';
import { integrationsNavigation } from './Integration';

export const administrationSidebar = [
  {
    title: 'Dashboard',
    icon: 'LayoutDashboard',
    items: dashboardNavigation
  },
  {
    title: 'Analytics',
    icon: 'BarChart3',
    items: analyticsNavigation
  },
  {
    title: 'Reports',
    icon: 'FileText',
    items: reportsNavigation
  },
  {
    title: 'Company Setup',
    icon: 'Building',
    items: organizationNavigation
  },
  {
    title: 'Master Data',
    icon: 'Database',
    items: masterDataNavigation
  },
  {
    title: 'User Management',
    icon: 'Users',
    items: userManagementNavigation
  },
  {
    title: 'Security',
    icon: 'Shield',
    items: securityNavigation
  },
  {
    title: 'Integrations',
    icon: 'Plug',
    items: integrationsNavigation
  },
  {
    title: 'System Settings',
    icon: 'Settings',
    items: settingsNavigation
  }
];

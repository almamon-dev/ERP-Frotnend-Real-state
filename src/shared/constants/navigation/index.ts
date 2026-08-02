import { SidebarNavItem } from '@/shared/components/sidebar/types/sidebar';
import {
  LayoutDashboard, TrendingUp, FileBarChart, Building2, Users,
  MapPin, FolderKanban, Home, Target, ShoppingCart,
  DollarSign, CreditCard, Box, Briefcase, Settings, ShieldAlert,
  Key, Database,
} from 'lucide-react';

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
  // ── Top Level ─────────────────────────────────────────────
  { name: 'Dashboard', path: '/administration/dashboard', icon: LayoutDashboard },
  { name: 'Analytics', path: '/administration/analytics', icon: TrendingUp },

  // ── Reports ───────────────────────────────────────────────
  {
    group: 'Reports',
    icon: FileBarChart,
    items: [
      { name: 'Reports Overview', path: '/admin/reports/overview' },
      { name: 'Custom Reports', path: '/admin/reports/custom' },
      { name: 'Scheduled Reports', path: '/admin/reports/scheduled' },
      { name: 'Report Builder', path: '/admin/reports/builder' },
      { name: 'Data Export', path: '/admin/reports/export' },
      { name: 'Report Templates', path: '/admin/reports/templates' },
    ],
  },

  // ── CORE FOUNDATION ────────────────────────────────────────
  {
    category: 'Core Foundation',
    group: 'Company Setup',
    icon: Building2,
    items: [
      { name: 'Companies', path: '/admin/core/companies' },
      { name: 'Branches', path: '/admin/core/branches' },
      { name: 'Departments', path: '/admin/core/departments' },
      { name: 'Designations', path: '/admin/core/designations' },
      { name: 'Teams', path: '/admin/core/teams' },
    ],
  },
  {
    category: 'Core Foundation',
    group: 'Master Data Setup',
    icon: Database,
    items: [
      { name: 'Company Types', path: '/admin/core/master-data?category=company_types' },
      { name: 'Industry Sectors', path: '/admin/core/master-data?category=industries' },
      { name: 'Countries & Regions', path: '/admin/core/master-data?category=countries' },
      { name: 'Department Types', path: '/admin/core/master-data?category=department_types' },
      { name: 'Designation Levels', path: '/admin/core/master-data?category=designation_levels' },
      { name: 'Employment Statuses', path: '/admin/core/master-data?category=employment_statuses' },
      { name: 'Branch Categories', path: '/admin/core/master-data?category=branch_categories' },
    ],
  },
  {
    category: 'Core Foundation',
    group: 'User Management',
    icon: Users,
    items: [
      { name: 'Users', path: '/admin/users/list' },
      { name: 'Roles', path: '/admin/users/roles' },
      { name: 'Login History', path: '/admin/users/login-history' },
      { name: 'Activity Logs', path: '/admin/users/activity-logs' },
    ],
  },
  {
    category: 'Core Foundation',
    group: 'Role & Permissions',
    icon: Key,
    items: [
      { name: 'Permissions', path: '/admin/users/permissions' },
      { name: 'User Groups', path: '/admin/users/groups' },
    ],
  },

  // ── LAND & PROJECT ─────────────────────────────────────────
  {
    category: 'Land & Project',
    group: 'Land Management',
    icon: MapPin,
    items: [
      { name: 'Land Plots', path: '/admin/land/plots' },
      { name: 'Land Acquisition', path: '/admin/land/acquisition' },
      { name: 'Land Documents', path: '/admin/land/documents' },
    ],
  },
  {
    category: 'Land & Project',
    group: 'Project Management',
    icon: FolderKanban,
    items: [
      { name: 'Projects', path: '/admin/projects/list' },
      { name: 'Milestones', path: '/admin/projects/milestones' },
      { name: 'Progress Reports', path: '/admin/projects/progress' },
    ],
  },
  {
    category: 'Land & Project',
    group: 'Property Management',
    icon: Home,
    items: [
      { name: 'Properties', path: '/admin/property/list' },
      { name: 'Units', path: '/admin/property/units' },
      { name: 'Maintenance', path: '/admin/property/maintenance' },
    ],
  },

  // ── CRM & SALES ────────────────────────────────────────────
  {
    category: 'CRM & Sales',
    group: 'CRM',
    icon: Target,
    items: [
      { name: 'Leads', path: '/admin/crm/leads' },
      { name: 'Customers', path: '/admin/crm/customers' },
      { name: 'Site Visits', path: '/admin/crm/site-visits' },
      { name: 'Bookings', path: '/admin/crm/bookings' },
      { name: 'Rental & Lease', path: '/admin/crm/rental-lease' },
    ],
  },
  {
    category: 'CRM & Sales',
    group: 'Sales & Booking',
    icon: ShoppingCart,
    items: [
      { name: 'Sales Overview', path: '/admin/crm/sales' },
      { name: 'Sales Analytics', path: '/admin/analytics/sales' },
      { name: 'Deals', path: '/admin/crm/deals' },
    ],
  },

  // ── FINANCE ────────────────────────────────────────────────
  {
    category: 'Finance',
    group: 'Finance',
    icon: DollarSign,
    items: [
      { name: 'Payments', path: '/admin/finance/payments' },
      { name: 'Invoices', path: '/admin/finance/invoices' },
      { name: 'Expenses', path: '/admin/finance/expenses' },
      { name: 'Bank', path: '/admin/finance/bank' },
      { name: 'Ledger', path: '/admin/finance/ledger' },
    ],
  },
  {
    category: 'Finance',
    group: 'Accounts',
    icon: CreditCard,
    items: [
      { name: 'Chart of Accounts', path: '/admin/finance/accounts' },
      { name: 'Cash Flow', path: '/admin/finance/cash' },
    ],
  },

  // ── OPERATIONS ─────────────────────────────────────────────
  {
    category: 'Operations',
    group: 'Operations',
    icon: Box,
    items: [
      { name: 'Procurement', path: '/admin/operations/procurement' },
      { name: 'Material Inventory', path: '/admin/operations/inventory' },
      { name: 'Vendors & Contractors', path: '/admin/operations/vendors' },
      { name: 'Maintenance', path: '/admin/operations/maintenance' },
      { name: 'Legal & Compliance', path: '/admin/operations/legal' },
    ],
  },
  {
    category: 'Operations',
    group: 'HRM',
    icon: Briefcase,
    items: [
      { name: 'Employees', path: '/admin/hr/employees' },
      { name: 'Attendance', path: '/admin/hr/attendance' },
      { name: 'Leave', path: '/admin/hr/leave' },
      { name: 'Payroll', path: '/admin/hr/payroll' },
      { name: 'Performance', path: '/admin/hr/performance' },
    ],
  },

  // ── SYSTEM ─────────────────────────────────────────────────
  {
    category: 'System',
    group: 'System Settings',
    icon: Settings,
    items: [
      { name: 'General Settings', path: '/admin/system/settings' },
      { name: 'Notifications', path: '/admin/system/notifications' },
      { name: 'Integrations', path: '/admin/system/integrations' },
      { name: 'Backup', path: '/admin/system/backup' },
    ],
  },
  {
    category: 'System',
    group: 'Audit Logs',
    icon: ShieldAlert,
    items: [
      { name: 'Activity Logs', path: '/admin/system/audit-logs' },
      { name: 'Login History', path: '/admin/users/login-history' },
    ],
  },
];

export const navigationMap: Record<string, SidebarNavItem[]> = {
  'dashboard': adminMasterNavigation,
  'admin': adminMasterNavigation,
  'core': adminMasterNavigation,
  'land': adminMasterNavigation,
  'projects': adminMasterNavigation,
  'property': adminMasterNavigation,
  'crm': adminMasterNavigation,
  'sales': adminMasterNavigation,
  'finance': adminMasterNavigation,
  'operations': adminMasterNavigation,
  'hr': adminMasterNavigation,
  'reports': adminMasterNavigation,
  'system': adminMasterNavigation,
};

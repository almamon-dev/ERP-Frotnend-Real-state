// ============================================================
// REAL ESTATE ERP — ROLE DEFINITIONS & DASHBOARD MAPPING
// ============================================================

export const ROLES = {
  // ── System Level ────────────────────────────────────────────
  SUPER_ADMIN:          'super_admin',
  COMPANY_ADMIN:        'company_admin',

  // ── Operations Management ───────────────────────────────────
  BRANCH_MANAGER:       'branch_manager',
  PROJECT_MANAGER:      'project_manager',
  CONSTRUCTION_MANAGER: 'construction_manager',
  PROPERTY_MANAGER:     'property_manager',
  SALES_MANAGER:        'sales_manager',

  // ── Sales & CRM ─────────────────────────────────────────────
  SALES_EXECUTIVE:      'sales_executive',
  CRM_EXECUTIVE:        'crm_executive',

  // ── Finance & Accounts ──────────────────────────────────────
  FINANCE_MANAGER:      'finance_manager',
  ACCOUNTANT:           'accountant',

  // ── HR ──────────────────────────────────────────────────────
  HR_MANAGER:           'hr_manager',
  HR_EXECUTIVE:         'hr_executive',

  // ── Procurement & Inventory ─────────────────────────────────
  PROCUREMENT_OFFICER:  'procurement_officer',
  INVENTORY_MANAGER:    'inventory_manager',

  // ── Facilities ──────────────────────────────────────────────
  MAINTENANCE_MANAGER:  'maintenance_manager',

  // ── Legal, Marketing, Support ───────────────────────────────
  LEGAL_OFFICER:        'legal_officer',
  MARKETING_MANAGER:    'marketing_manager',
  MARKETING_EXECUTIVE:  'marketing_executive',
  RECEPTIONIST:         'receptionist',
  SUPPORT_EXECUTIVE:    'support_executive',
  AUDITOR:              'auditor',

  // ── External Portals ────────────────────────────────────────
  CUSTOMER:             'customer',
  PROPERTY_OWNER:       'property_owner',
  VENDOR:               'vendor',
  CONTRACTOR:           'contractor',
  SUPPLIER:             'supplier',
  TENANT:               'tenant',
} as const;

export type RoleType = typeof ROLES[keyof typeof ROLES];

// ── Human-Readable Labels ──────────────────────────────────────
export const ROLE_LABELS: Record<RoleType, string> = {
  [ROLES.SUPER_ADMIN]:          'Super Admin',
  [ROLES.COMPANY_ADMIN]:        'Company Admin',
  [ROLES.BRANCH_MANAGER]:       'Branch Manager',
  [ROLES.PROJECT_MANAGER]:      'Project Manager',
  [ROLES.CONSTRUCTION_MANAGER]: 'Construction Manager',
  [ROLES.PROPERTY_MANAGER]:     'Property Manager',
  [ROLES.SALES_MANAGER]:        'Sales Manager',
  [ROLES.SALES_EXECUTIVE]:      'Sales Executive',
  [ROLES.CRM_EXECUTIVE]:        'CRM Executive',
  [ROLES.FINANCE_MANAGER]:      'Finance Manager',
  [ROLES.ACCOUNTANT]:           'Accountant',
  [ROLES.HR_MANAGER]:           'HR Manager',
  [ROLES.HR_EXECUTIVE]:         'HR Executive',
  [ROLES.PROCUREMENT_OFFICER]:  'Procurement Officer',
  [ROLES.INVENTORY_MANAGER]:    'Inventory Manager',
  [ROLES.MAINTENANCE_MANAGER]:  'Maintenance Manager',
  [ROLES.LEGAL_OFFICER]:        'Legal Officer',
  [ROLES.MARKETING_MANAGER]:    'Marketing Manager',
  [ROLES.MARKETING_EXECUTIVE]:  'Marketing Executive',
  [ROLES.RECEPTIONIST]:         'Receptionist',
  [ROLES.SUPPORT_EXECUTIVE]:    'Support Executive',
  [ROLES.AUDITOR]:              'Auditor',
  [ROLES.CUSTOMER]:             'Customer',
  [ROLES.PROPERTY_OWNER]:       'Property Owner',
  [ROLES.VENDOR]:               'Vendor',
  [ROLES.CONTRACTOR]:           'Contractor',
  [ROLES.SUPPLIER]:             'Supplier',
  [ROLES.TENANT]:               'Tenant',
};

// ── Portal Groups ──────────────────────────────────────────────
export const ROLE_CATEGORIES: Record<string, RoleType[]> = {
  'System':       [ROLES.SUPER_ADMIN, ROLES.COMPANY_ADMIN],
  'Operations':   [ROLES.BRANCH_MANAGER, ROLES.PROJECT_MANAGER, ROLES.CONSTRUCTION_MANAGER, ROLES.PROPERTY_MANAGER, ROLES.SALES_MANAGER],
  'Sales & CRM':  [ROLES.SALES_EXECUTIVE, ROLES.CRM_EXECUTIVE],
  'Finance':      [ROLES.FINANCE_MANAGER, ROLES.ACCOUNTANT],
  'HR':           [ROLES.HR_MANAGER, ROLES.HR_EXECUTIVE],
  'Procurement':  [ROLES.PROCUREMENT_OFFICER, ROLES.INVENTORY_MANAGER],
  'Facilities':   [ROLES.MAINTENANCE_MANAGER],
  'Support':      [ROLES.LEGAL_OFFICER, ROLES.MARKETING_MANAGER, ROLES.MARKETING_EXECUTIVE, ROLES.RECEPTIONIST, ROLES.SUPPORT_EXECUTIVE, ROLES.AUDITOR],
  'External':     [ROLES.CUSTOMER, ROLES.PROPERTY_OWNER, ROLES.VENDOR, ROLES.CONTRACTOR, ROLES.SUPPLIER, ROLES.TENANT],
};

// ── Dashboard / Portal Redirect Map ───────────────────────────
// Professional, valid routes matching registered application routes
export const ROLE_DASHBOARD_MAP: Record<RoleType, string> = {
  // System Administration -> /admin
  [ROLES.SUPER_ADMIN]:          '/admin',
  [ROLES.COMPANY_ADMIN]:        '/dashboard',

  // Employee & Operational Management -> /dashboard or /hr/portal
  [ROLES.BRANCH_MANAGER]:       '/dashboard',
  [ROLES.PROJECT_MANAGER]:      '/dashboard',
  [ROLES.CONSTRUCTION_MANAGER]: '/dashboard',
  [ROLES.PROPERTY_MANAGER]:     '/dashboard',
  [ROLES.SALES_MANAGER]:        '/dashboard',
  [ROLES.SALES_EXECUTIVE]:      '/dashboard',
  [ROLES.CRM_EXECUTIVE]:        '/dashboard',
  [ROLES.FINANCE_MANAGER]:      '/dashboard',
  [ROLES.ACCOUNTANT]:           '/dashboard',
  [ROLES.HR_MANAGER]:           '/hr/portal',
  [ROLES.HR_EXECUTIVE]:         '/hr/portal',
  [ROLES.PROCUREMENT_OFFICER]:  '/dashboard',
  [ROLES.INVENTORY_MANAGER]:    '/dashboard',
  [ROLES.MAINTENANCE_MANAGER]:  '/dashboard',
  [ROLES.LEGAL_OFFICER]:        '/dashboard',
  [ROLES.MARKETING_MANAGER]:    '/dashboard',
  [ROLES.MARKETING_EXECUTIVE]:  '/dashboard',
  [ROLES.RECEPTIONIST]:         '/dashboard',
  [ROLES.SUPPORT_EXECUTIVE]:    '/dashboard',
  [ROLES.AUDITOR]:              '/dashboard',

  // External Portals -> /employee-portal/dashboard or /dashboard
  [ROLES.CUSTOMER]:             '/employee-portal/dashboard',
  [ROLES.PROPERTY_OWNER]:       '/dashboard',
  [ROLES.VENDOR]:               '/dashboard',
  [ROLES.CONTRACTOR]:           '/dashboard',
  [ROLES.SUPPLIER]:             '/dashboard',
  [ROLES.TENANT]:               '/employee-portal/dashboard',
};

// ── Module Access per Role ─────────────────────────────────────
export const ROLE_MODULE_ACCESS: Record<RoleType, string[]> = {
  [ROLES.SUPER_ADMIN]:          ['*'],
  [ROLES.COMPANY_ADMIN]:        ['dashboard', 'hr', 'finance', 'sales', 'crm', 'inventory', 'reports'],
  [ROLES.BRANCH_MANAGER]:       ['dashboard', 'sales', 'hr', 'reports'],
  [ROLES.PROJECT_MANAGER]:      ['dashboard', 'projects', 'construction', 'reports'],
  [ROLES.CONSTRUCTION_MANAGER]: ['dashboard', 'construction', 'inventory'],
  [ROLES.PROPERTY_MANAGER]:     ['dashboard', 'properties', 'maintenance'],
  [ROLES.SALES_MANAGER]:        ['dashboard', 'sales', 'crm', 'reports'],
  [ROLES.SALES_EXECUTIVE]:      ['sales', 'crm'],
  [ROLES.CRM_EXECUTIVE]:        ['crm'],
  [ROLES.FINANCE_MANAGER]:      ['finance', 'reports'],
  [ROLES.ACCOUNTANT]:           ['finance'],
  [ROLES.HR_MANAGER]:           ['hr', 'reports'],
  [ROLES.HR_EXECUTIVE]:         ['hr'],
  [ROLES.PROCUREMENT_OFFICER]:  ['procurement', 'inventory'],
  [ROLES.INVENTORY_MANAGER]:    ['inventory'],
  [ROLES.MAINTENANCE_MANAGER]:  ['maintenance'],
  [ROLES.LEGAL_OFFICER]:        ['legal', 'documents'],
  [ROLES.MARKETING_MANAGER]:    ['marketing', 'crm'],
  [ROLES.MARKETING_EXECUTIVE]:  ['marketing'],
  [ROLES.RECEPTIONIST]:         ['crm', 'support'],
  [ROLES.SUPPORT_EXECUTIVE]:    ['support'],
  [ROLES.AUDITOR]:              ['reports', 'finance'],
  [ROLES.CUSTOMER]:             ['customer-portal'],
  [ROLES.PROPERTY_OWNER]:       ['owner-portal'],
  [ROLES.VENDOR]:               ['vendor-portal'],
  [ROLES.CONTRACTOR]:           ['vendor-portal'],
  [ROLES.SUPPLIER]:             ['vendor-portal'],
  [ROLES.TENANT]:               ['tenant-portal'],
};

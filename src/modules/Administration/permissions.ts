export const ADMINISTRATION_PERMISSIONS = {
  VIEW_DASHBOARD: 'admin.dashboard.view',
  VIEW_ANALYTICS: 'admin.analytics.view',
  MANAGE_COMPANY: 'admin.company.manage',
  MANAGE_USERS: 'admin.users.manage',
  MANAGE_ROLES: 'admin.roles.manage',
  MANAGE_ORGANIZATION: 'admin.organization.manage',
  MANAGE_SECURITY: 'admin.security.manage',
  MANAGE_SETTINGS: 'admin.settings.manage',
  MANAGE_INTEGRATIONS: 'admin.integrations.manage',
} as const;

export type AdministrationPermission = typeof ADMINISTRATION_PERMISSIONS[keyof typeof ADMINISTRATION_PERMISSIONS];

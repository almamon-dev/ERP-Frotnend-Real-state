import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ROLES, RoleType, ROLE_DASHBOARD_MAP, ROLE_LABELS } from '@/constants/roles';

// ============================================================
// TYPES
// ============================================================
export interface AuthUser {
  id: number;
  name: string;
  initials: string;
  email: string;
  role: RoleType;
  roleLabel: string;
  designation: string;
  department: string;
  employeeId: string;
  avatar?: string;
  dashboardPath: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (role: RoleType) => void;
  logout: () => void;
}

// ============================================================
// MOCK USER DATA — real estate ERP roles
// ============================================================
const MOCK_USERS: Record<RoleType, AuthUser> = {
  [ROLES.SUPER_ADMIN]: {
    id: 1, name: 'Super Admin', initials: 'SA',
    email: 'superadmin@ammar.com', role: ROLES.SUPER_ADMIN,
    roleLabel: ROLE_LABELS[ROLES.SUPER_ADMIN],
    designation: 'Super Administrator', department: 'System',
    employeeId: 'SYS-0001', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.SUPER_ADMIN],
  },
  [ROLES.COMPANY_ADMIN]: {
    id: 2, name: 'Company Admin', initials: 'CA',
    email: 'admin@ammar.com', role: ROLES.COMPANY_ADMIN,
    roleLabel: ROLE_LABELS[ROLES.COMPANY_ADMIN],
    designation: 'Company Administrator', department: 'Management',
    employeeId: 'EMP-0002', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.COMPANY_ADMIN],
  },
  [ROLES.BRANCH_MANAGER]: {
    id: 3, name: 'Branch Manager', initials: 'BM',
    email: 'branch.manager@ammar.com', role: ROLES.BRANCH_MANAGER,
    roleLabel: ROLE_LABELS[ROLES.BRANCH_MANAGER],
    designation: 'Branch Manager', department: 'Operations',
    employeeId: 'EMP-0003', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.BRANCH_MANAGER],
  },
  [ROLES.PROJECT_MANAGER]: {
    id: 4, name: 'Project Manager', initials: 'PM',
    email: 'project.manager@ammar.com', role: ROLES.PROJECT_MANAGER,
    roleLabel: ROLE_LABELS[ROLES.PROJECT_MANAGER],
    designation: 'Project Manager', department: 'Projects',
    employeeId: 'EMP-0004', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.PROJECT_MANAGER],
  },
  [ROLES.CONSTRUCTION_MANAGER]: {
    id: 5, name: 'Construction Manager', initials: 'CM',
    email: 'construction.manager@ammar.com', role: ROLES.CONSTRUCTION_MANAGER,
    roleLabel: ROLE_LABELS[ROLES.CONSTRUCTION_MANAGER],
    designation: 'Construction Manager', department: 'Construction',
    employeeId: 'EMP-0005', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.CONSTRUCTION_MANAGER],
  },
  [ROLES.PROPERTY_MANAGER]: {
    id: 6, name: 'Property Manager', initials: 'PRM',
    email: 'property.manager@ammar.com', role: ROLES.PROPERTY_MANAGER,
    roleLabel: ROLE_LABELS[ROLES.PROPERTY_MANAGER],
    designation: 'Property Manager', department: 'Properties',
    employeeId: 'EMP-0006', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.PROPERTY_MANAGER],
  },
  [ROLES.SALES_MANAGER]: {
    id: 7, name: 'Sales Manager', initials: 'SM',
    email: 'sales.manager@ammar.com', role: ROLES.SALES_MANAGER,
    roleLabel: ROLE_LABELS[ROLES.SALES_MANAGER],
    designation: 'Sales Manager', department: 'Sales',
    employeeId: 'EMP-0007', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.SALES_MANAGER],
  },
  [ROLES.SALES_EXECUTIVE]: {
    id: 8, name: 'Sales Executive', initials: 'SE',
    email: 'sales.exec@ammar.com', role: ROLES.SALES_EXECUTIVE,
    roleLabel: ROLE_LABELS[ROLES.SALES_EXECUTIVE],
    designation: 'Sales Executive', department: 'Sales',
    employeeId: 'EMP-0008', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.SALES_EXECUTIVE],
  },
  [ROLES.CRM_EXECUTIVE]: {
    id: 9, name: 'CRM Executive', initials: 'CE',
    email: 'crm.exec@ammar.com', role: ROLES.CRM_EXECUTIVE,
    roleLabel: ROLE_LABELS[ROLES.CRM_EXECUTIVE],
    designation: 'CRM Executive', department: 'CRM',
    employeeId: 'EMP-0009', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.CRM_EXECUTIVE],
  },
  [ROLES.FINANCE_MANAGER]: {
    id: 10, name: 'Finance Manager', initials: 'FM',
    email: 'finance.manager@ammar.com', role: ROLES.FINANCE_MANAGER,
    roleLabel: ROLE_LABELS[ROLES.FINANCE_MANAGER],
    designation: 'Finance Manager', department: 'Finance',
    employeeId: 'EMP-0010', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.FINANCE_MANAGER],
  },
  [ROLES.ACCOUNTANT]: {
    id: 11, name: 'Accountant', initials: 'AC',
    email: 'accountant@ammar.com', role: ROLES.ACCOUNTANT,
    roleLabel: ROLE_LABELS[ROLES.ACCOUNTANT],
    designation: 'Accountant', department: 'Finance',
    employeeId: 'EMP-0011', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.ACCOUNTANT],
  },
  [ROLES.HR_MANAGER]: {
    id: 12, name: 'HR Manager', initials: 'HM',
    email: 'hr.manager@ammar.com', role: ROLES.HR_MANAGER,
    roleLabel: ROLE_LABELS[ROLES.HR_MANAGER],
    designation: 'HR Manager', department: 'Human Resources',
    employeeId: 'EMP-0012', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.HR_MANAGER],
  },
  [ROLES.HR_EXECUTIVE]: {
    id: 13, name: 'HR Executive', initials: 'HE',
    email: 'hr.exec@ammar.com', role: ROLES.HR_EXECUTIVE,
    roleLabel: ROLE_LABELS[ROLES.HR_EXECUTIVE],
    designation: 'HR Executive', department: 'Human Resources',
    employeeId: 'EMP-0013', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.HR_EXECUTIVE],
  },
  [ROLES.PROCUREMENT_OFFICER]: {
    id: 14, name: 'Procurement Officer', initials: 'PO',
    email: 'procurement@ammar.com', role: ROLES.PROCUREMENT_OFFICER,
    roleLabel: ROLE_LABELS[ROLES.PROCUREMENT_OFFICER],
    designation: 'Procurement Officer', department: 'Procurement',
    employeeId: 'EMP-0014', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.PROCUREMENT_OFFICER],
  },
  [ROLES.INVENTORY_MANAGER]: {
    id: 15, name: 'Inventory Manager', initials: 'IM',
    email: 'inventory@ammar.com', role: ROLES.INVENTORY_MANAGER,
    roleLabel: ROLE_LABELS[ROLES.INVENTORY_MANAGER],
    designation: 'Inventory Manager', department: 'Inventory',
    employeeId: 'EMP-0015', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.INVENTORY_MANAGER],
  },
  [ROLES.MAINTENANCE_MANAGER]: {
    id: 16, name: 'Maintenance Manager', initials: 'MM',
    email: 'maintenance@ammar.com', role: ROLES.MAINTENANCE_MANAGER,
    roleLabel: ROLE_LABELS[ROLES.MAINTENANCE_MANAGER],
    designation: 'Maintenance Manager', department: 'Facilities',
    employeeId: 'EMP-0016', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.MAINTENANCE_MANAGER],
  },
  [ROLES.LEGAL_OFFICER]: {
    id: 17, name: 'Legal Officer', initials: 'LO',
    email: 'legal@ammar.com', role: ROLES.LEGAL_OFFICER,
    roleLabel: ROLE_LABELS[ROLES.LEGAL_OFFICER],
    designation: 'Legal Officer', department: 'Legal',
    employeeId: 'EMP-0017', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.LEGAL_OFFICER],
  },
  [ROLES.MARKETING_MANAGER]: {
    id: 18, name: 'Marketing Manager', initials: 'MKM',
    email: 'marketing.manager@ammar.com', role: ROLES.MARKETING_MANAGER,
    roleLabel: ROLE_LABELS[ROLES.MARKETING_MANAGER],
    designation: 'Marketing Manager', department: 'Marketing',
    employeeId: 'EMP-0018', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.MARKETING_MANAGER],
  },
  [ROLES.MARKETING_EXECUTIVE]: {
    id: 19, name: 'Marketing Executive', initials: 'MKE',
    email: 'marketing.exec@ammar.com', role: ROLES.MARKETING_EXECUTIVE,
    roleLabel: ROLE_LABELS[ROLES.MARKETING_EXECUTIVE],
    designation: 'Marketing Executive', department: 'Marketing',
    employeeId: 'EMP-0019', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.MARKETING_EXECUTIVE],
  },
  [ROLES.RECEPTIONIST]: {
    id: 20, name: 'Receptionist', initials: 'RC',
    email: 'receptionist@ammar.com', role: ROLES.RECEPTIONIST,
    roleLabel: ROLE_LABELS[ROLES.RECEPTIONIST],
    designation: 'Receptionist', department: 'Admin',
    employeeId: 'EMP-0020', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.RECEPTIONIST],
  },
  [ROLES.SUPPORT_EXECUTIVE]: {
    id: 21, name: 'Support Executive', initials: 'SPE',
    email: 'support@ammar.com', role: ROLES.SUPPORT_EXECUTIVE,
    roleLabel: ROLE_LABELS[ROLES.SUPPORT_EXECUTIVE],
    designation: 'Support Executive', department: 'Support',
    employeeId: 'EMP-0021', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.SUPPORT_EXECUTIVE],
  },
  [ROLES.AUDITOR]: {
    id: 22, name: 'Auditor', initials: 'AUD',
    email: 'auditor@ammar.com', role: ROLES.AUDITOR,
    roleLabel: ROLE_LABELS[ROLES.AUDITOR],
    designation: 'Auditor', department: 'Finance',
    employeeId: 'EMP-0022', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.AUDITOR],
  },
  // ── External Portal Users ────────────────────────────────────
  [ROLES.CUSTOMER]: {
    id: 101, name: 'Customer User', initials: 'CU',
    email: 'customer@ammar.com', role: ROLES.CUSTOMER,
    roleLabel: ROLE_LABELS[ROLES.CUSTOMER],
    designation: 'Customer', department: 'External',
    employeeId: 'CUST-0101', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.CUSTOMER],
  },
  [ROLES.PROPERTY_OWNER]: {
    id: 102, name: 'Property Owner', initials: 'OW',
    email: 'owner@ammar.com', role: ROLES.PROPERTY_OWNER,
    roleLabel: ROLE_LABELS[ROLES.PROPERTY_OWNER],
    designation: 'Property Owner', department: 'External',
    employeeId: 'OWN-0102', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.PROPERTY_OWNER],
  },
  [ROLES.VENDOR]: {
    id: 103, name: 'Vendor', initials: 'VN',
    email: 'vendor@ammar.com', role: ROLES.VENDOR,
    roleLabel: ROLE_LABELS[ROLES.VENDOR],
    designation: 'Vendor', department: 'External',
    employeeId: 'VND-0103', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.VENDOR],
  },
  [ROLES.CONTRACTOR]: {
    id: 104, name: 'Contractor', initials: 'CON',
    email: 'contractor@ammar.com', role: ROLES.CONTRACTOR,
    roleLabel: ROLE_LABELS[ROLES.CONTRACTOR],
    designation: 'Contractor', department: 'External',
    employeeId: 'CON-0104', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.CONTRACTOR],
  },
  [ROLES.SUPPLIER]: {
    id: 105, name: 'Supplier', initials: 'SUP',
    email: 'supplier@ammar.com', role: ROLES.SUPPLIER,
    roleLabel: ROLE_LABELS[ROLES.SUPPLIER],
    designation: 'Supplier', department: 'External',
    employeeId: 'SUP-0105', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.SUPPLIER],
  },
  [ROLES.TENANT]: {
    id: 106, name: 'Tenant', initials: 'TN',
    email: 'tenant@ammar.com', role: ROLES.TENANT,
    roleLabel: ROLE_LABELS[ROLES.TENANT],
    designation: 'Tenant', department: 'External',
    employeeId: 'TNT-0106', dashboardPath: ROLE_DASHBOARD_MAP[ROLES.TENANT],
  },
};

// ============================================================
// CONTEXT
// ============================================================
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Default: not logged in — redirect to login
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = (role: RoleType) => {
    setUser(MOCK_USERS[role]);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// ============================================================
// HOOK
// ============================================================
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}

// Export mock users for testing (role switcher)
export { MOCK_USERS };

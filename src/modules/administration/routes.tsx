import { RouteObject, Navigate } from 'react-router-dom';
import { dashboardRoutes } from './Dashboard';
import { analyticsRoutes } from './Analytics';
import { reportsRoutes } from './Reports';
import { userManagementRoutes } from './UserManagement';
import { organizationRoutes } from './CompanySetup';
import { masterDataRoutes } from './MasterData';
import { securityRoutes } from './Security';
import { settingsRoutes } from './Settings';
import { integrationsRoutes } from './Integration';
import AdminLayout from '@/shared/layouts/AdminLayout';

import CompaniesPage from './CompanySetup/Companies/pages/CompaniesPage';
import BranchesPage from './CompanySetup/Branches/pages/BranchesPage';
import DepartmentsPage from './CompanySetup/Departments/pages/DepartmentsPage';
import DesignationsPage from './CompanySetup/Designations/pages/DesignationsPage';
import TeamsPage from './CompanySetup/Teams/pages/TeamsPage';
import MasterDataPage from './MasterData/pages/MasterDataPage';
import RolesPage from './UserManagement/Roles/pages/RolesPage';
import CreateRolePage from './UserManagement/Roles/pages/Create';
import UserGroupsPage from './UserManagement/UserGroups/pages/UserGroupsPage';

export const administrationRoutes: RouteObject[] = [
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'reports/*',
        children: reportsRoutes,
      },
      {
        path: 'core/companies',
        element: <CompaniesPage />,
      },
      {
        path: 'core/branches',
        element: <BranchesPage />,
      },
      {
        path: 'core/departments',
        element: <DepartmentsPage />,
      },
      {
        path: 'core/designations',
        element: <DesignationsPage />,
      },
      {
        path: 'core/teams',
        element: <TeamsPage />,
      },
      {
        path: 'core/master-data',
        element: <MasterDataPage />,
      },
      {
        path: 'users/roles',
        element: <RolesPage />,
      },
      {
        path: 'users/roles/create',
        element: <CreateRolePage />,
      },
      {
        path: 'users/permissions',
        element: <Navigate to="../users/roles" replace />,
      },
      {
        path: 'users/groups',
        element: <UserGroupsPage />,
      },
    ],
  },
  {
    path: 'administration',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: 'analytics/*',
        children: analyticsRoutes,
      },
      {
        path: 'reports/*',
        children: reportsRoutes,
      },
      {
        path: 'dashboard/*',
        children: dashboardRoutes,
      },
      {
        path: 'master-data/*',
        children: masterDataRoutes,
      },
      {
        path: 'access/*',
        children: userManagementRoutes,
      },
      {
        path: 'organization',
        children: organizationRoutes,
      },
      {
        path: 'security',
        children: securityRoutes,
      },
      {
        path: 'settings',
        children: settingsRoutes,
      },
      {
        path: 'integrations',
        children: integrationsRoutes,
      },
    ]
  }
];


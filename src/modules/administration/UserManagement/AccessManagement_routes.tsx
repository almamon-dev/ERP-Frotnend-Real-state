import { RouteObject, Navigate } from 'react-router-dom';
import UsersModule from './AccessManagement_Users';
import { usersRoutes } from './AccessManagement_Users/routes';
import RolesModule from './AccessManagement_Roles';
import { rolesRoutes } from './AccessManagement_Roles/routes';
import PermissionsModule from './AccessManagement_Permissions';
import { permissionsRoutes } from './AccessManagement_Permissions/routes';
import UserGroupsModule from './AccessManagement_UserGroups';
import { usergroupsRoutes } from './AccessManagement_UserGroups/routes';
import AccessPoliciesModule from './AccessManagement_AccessPolicies';
import { accesspoliciesRoutes } from './AccessManagement_AccessPolicies/routes';

import AccessDashboard from './AccessManagement_Dashboard';

export const accessManagementRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="dashboard" replace />
  },
  {
    path: 'dashboard',
    element: <AccessDashboard />
  },
  { 
    path: 'users', 
      element: <UsersModule />,
      children: usersRoutes
  },
  { 
      path: 'roles', 
      element: <RolesModule />,
      children: rolesRoutes
  },
  { 
      path: 'permissions', 
      element: <PermissionsModule />,
      children: permissionsRoutes
  },
  { 
      path: 'user-groups', 
      element: <UserGroupsModule />,
      children: usergroupsRoutes
  },
  { 
      path: 'policies', 
      element: <AccessPoliciesModule />,
      children: accesspoliciesRoutes
  }
];

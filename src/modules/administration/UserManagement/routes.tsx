import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import UsersModule from './Users';
import { usersRoutes } from './Users/routes';
import AccessDashboard from './Dashboard';
import LoginHistoryList from '../Security/LoginHistory/pages/List';
import ActivityLogsList from '../Security/ActivityLogs/pages/List';
import UserReports from './Users/pages/Reports';
import RolesPage from './Roles/pages/RolesPage';
import CreateRolePage from './Roles/pages/Create';
import UserGroupsPage from './UserGroups/pages/UserGroupsPage';

export const userManagementRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="dashboard" replace />
  },
  {
    path: 'dashboard',
    element: <AccessDashboard />
  },
  { 
    path: 'users/*', 
    element: <UsersModule />,
    children: usersRoutes
  },
  {
    path: 'roles',
    element: <RolesPage />
  },
  {
    path: 'roles/create',
    element: <CreateRolePage />
  },
  {
    path: 'permissions',
    element: <Navigate to="../roles" replace />
  },
  {
    path: 'groups',
    element: <UserGroupsPage />
  },
  {
    path: 'login-history',
    element: <LoginHistoryList />
  },
  {
    path: 'activity-logs',
    element: <ActivityLogsList />
  },
  {
    path: 'reports',
    element: <UserReports />
  }
];

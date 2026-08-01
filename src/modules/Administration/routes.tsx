import { RouteObject, Navigate } from 'react-router-dom';
import { accessManagementRoutes } from './AccessManagement';
import { organizationRoutes } from './Organization';
import { securityRoutes } from './Security';
import { settingsRoutes } from './Settings';
import { integrationsRoutes } from './Integrations';
import AdminLayout from '@/layouts/AdminLayout';

import AdministrationDashboardPage from './Dashboard/pages/DashboardPage';
import AdminAnalyticsPage from './Dashboard/pages/AdminAnalyticsPage';
import SystemHealthDetailsPage from './Dashboard/pages/SystemHealthDetailsPage';
import TopProjectsDetailsPage from './Dashboard/pages/TopProjectsDetailsPage';
import PendingApprovalsDetailsPage from './Dashboard/pages/PendingApprovalsDetailsPage';
import RecentActivitiesDetailsPage from './Dashboard/pages/RecentActivitiesDetailsPage';
import NotificationsDetailsPage from './Dashboard/pages/NotificationsDetailsPage';

export const administrationRoutes: RouteObject[] = [
  {
    path: 'administration',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <AdministrationDashboardPage />,
      },
      {
        path: 'analytics',
        element: <AdminAnalyticsPage />,
      },
      {
        path: 'dashboard/analytics',
        element: <AdminAnalyticsPage />,
      },
      {
        path: 'dashboard/system-health',
        element: <SystemHealthDetailsPage />,
      },
      {
        path: 'dashboard/top-projects',
        element: <TopProjectsDetailsPage />,
      },
      {
        path: 'dashboard/pending-approvals',
        element: <PendingApprovalsDetailsPage />,
      },
      {
        path: 'dashboard/recent-activities',
        element: <RecentActivitiesDetailsPage />,
      },
      {
        path: 'dashboard/notifications',
        element: <NotificationsDetailsPage />,
      },
      {
        path: 'access',
        children: accessManagementRoutes,
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

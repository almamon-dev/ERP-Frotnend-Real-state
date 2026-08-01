import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';
import AdminSuitePage from './AdminSuitePage';
import AdministrationDashboardPage from '@/modules/Administration/Dashboard/pages/DashboardPage';
import AdminAnalyticsPage from '@/modules/Administration/Dashboard/pages/AdminAnalyticsPage';

export const adminSuiteRoutes: RouteObject[] = [
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdministrationDashboardPage /> },
      { path: 'dashboard', element: <AdministrationDashboardPage /> },
      { path: 'analytics', element: <AdminAnalyticsPage /> },
      { path: '*', element: <AdminSuitePage /> },
    ],
  },
];

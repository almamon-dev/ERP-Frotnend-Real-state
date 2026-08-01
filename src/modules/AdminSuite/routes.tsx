import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';
import AdminSuitePage from './AdminSuitePage';

export const adminSuiteRoutes: RouteObject[] = [
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminSuitePage /> },
      { path: '*', element: <AdminSuitePage /> },
    ],
  },
];

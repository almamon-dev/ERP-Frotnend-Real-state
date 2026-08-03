import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import AdminLayout from '@/shared/layouts/AdminLayout';
import PlotsPage from './pages/PlotsPage';
import AcquisitionPage from './pages/AcquisitionPage';
import DocumentsPage from './pages/DocumentsPage';

export const landRoutes: RouteObject[] = [
  {
    path: 'admin/land',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="plots" replace /> },
      { path: 'plots', element: <PlotsPage /> },
      { path: 'acquisition', element: <AcquisitionPage /> },
      { path: 'documents', element: <DocumentsPage /> },
    ],
  },
];

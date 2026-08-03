import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import AdminLayout from '@/shared/layouts/AdminLayout';
import PropertiesPage from './pages/PropertiesPage';
import CreatePropertyPage from './pages/CreatePropertyPage';
import UnitsPage from './pages/UnitsPage';
import AmenitiesPage from './pages/AmenitiesPage';
import MaintenancePage from './pages/MaintenancePage';

export const propertyRoutes: RouteObject[] = [
  {
    path: 'admin/property',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="list" replace /> },
      { path: 'list', element: <PropertiesPage /> },
      { path: 'create', element: <CreatePropertyPage /> },
      { path: 'units', element: <UnitsPage /> },
      { path: 'amenities', element: <AmenitiesPage /> },
      { path: 'maintenance', element: <MaintenancePage /> },
    ],
  },
];

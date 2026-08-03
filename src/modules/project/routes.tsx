import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import AdminLayout from '@/shared/layouts/AdminLayout';
import ProjectsPage from './pages/ProjectsPage';
import CreateProjectPage from './pages/CreateProjectPage';
import BuildingsPage from './pages/BuildingsPage';
import ProgressReportsPage from './pages/ProgressReportsPage';

export const projectRoutes: RouteObject[] = [
  {
    path: 'admin/projects',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="list" replace /> },
      { path: 'list', element: <ProjectsPage /> },
      { path: 'create', element: <CreateProjectPage /> },
      { path: 'buildings', element: <BuildingsPage /> },
      { path: 'progress', element: <ProgressReportsPage /> },
    ],
  },
];

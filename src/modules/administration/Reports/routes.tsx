import { RouteObject } from 'react-router-dom';
import AdminReportsOverviewPage from './pages/AdminReportsOverviewPage';
import CustomReportsPage from './pages/CustomReportsPage';
import ScheduledReportsPage from './pages/ScheduledReportsPage';
import ReportBuilderPage from './pages/ReportBuilderPage';
import DataExportPage from './pages/DataExportPage';
import ReportTemplatesPage from './pages/ReportTemplatesPage';

export const reportsRoutes: RouteObject[] = [
  {
    index: true,
    element: <AdminReportsOverviewPage />,
  },
  {
    path: 'overview',
    element: <AdminReportsOverviewPage />,
  },
  {
    path: 'custom',
    element: <CustomReportsPage />,
  },
  {
    path: 'scheduled',
    element: <ScheduledReportsPage />,
  },
  {
    path: 'builder',
    element: <ReportBuilderPage />,
  },
  {
    path: 'export',
    element: <DataExportPage />,
  },
  {
    path: 'templates',
    element: <ReportTemplatesPage />,
  },
];

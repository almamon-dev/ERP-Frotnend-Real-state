import { RouteObject } from 'react-router-dom';
import AdministrationDashboardPage from './pages/DashboardPage';
import AdminAnalyticsPage from './pages/AdminAnalyticsPage';
import SystemHealthDetailsPage from './pages/SystemHealthDetailsPage';
import TopProjectsDetailsPage from './pages/TopProjectsDetailsPage';
import PendingApprovalsDetailsPage from './pages/PendingApprovalsDetailsPage';
import RecentActivitiesDetailsPage from './pages/RecentActivitiesDetailsPage';
import NotificationsDetailsPage from './pages/NotificationsDetailsPage';
import AdminCalendarPage from './pages/AdminCalendarPage';
import AdminReportsOverviewPage from './pages/AdminReportsOverviewPage';
import CustomReportsPage from './pages/CustomReportsPage';
import ScheduledReportsPage from './pages/ScheduledReportsPage';
import ReportBuilderPage from './pages/ReportBuilderPage';
import DataExportPage from './pages/DataExportPage';
import ReportTemplatesPage from './pages/ReportTemplatesPage';

export const dashboardRoutes: RouteObject[] = [
  {
    index: true,
    element: <AdministrationDashboardPage />,
  },
  {
    path: 'overview',
    element: <AdministrationDashboardPage />,
  },
  {
    path: 'analytics',
    element: <AdminAnalyticsPage />,
  },
  {
    path: 'calendar',
    element: <AdminCalendarPage />,
  },
  {
    path: 'system-health',
    element: <SystemHealthDetailsPage />,
  },
  {
    path: 'top-projects',
    element: <TopProjectsDetailsPage />,
  },
  {
    path: 'pending-approvals',
    element: <PendingApprovalsDetailsPage />,
  },
  {
    path: 'recent-activities',
    element: <RecentActivitiesDetailsPage />,
  },
  {
    path: 'notifications',
    element: <NotificationsDetailsPage />,
  },
  {
    path: 'reports',
    children: [
      { index: true, element: <AdminReportsOverviewPage /> },
      { path: 'overview', element: <AdminReportsOverviewPage /> },
      { path: 'custom', element: <CustomReportsPage /> },
      { path: 'scheduled', element: <ScheduledReportsPage /> },
      { path: 'builder', element: <ReportBuilderPage /> },
      { path: 'export', element: <DataExportPage /> },
      { path: 'templates', element: <ReportTemplatesPage /> },
    ],
  },
];

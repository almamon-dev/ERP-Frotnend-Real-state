import { RouteObject } from 'react-router-dom';
import AnalyticsPage from './pages/AnalyticsPage';

export const analyticsRoutes: RouteObject[] = [
  {
    index: true,
    element: <AnalyticsPage />,
  },
  {
    path: 'overview',
    element: <AnalyticsPage />,
  },
];

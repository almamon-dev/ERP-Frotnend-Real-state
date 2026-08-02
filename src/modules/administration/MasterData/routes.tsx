import { RouteObject } from 'react-router-dom';
import MasterDataPage from './pages/MasterDataPage';

export const masterDataRoutes: RouteObject[] = [
  {
    index: true,
    element: <MasterDataPage />,
  },
  {
    path: 'manage',
    element: <MasterDataPage />,
  },
];

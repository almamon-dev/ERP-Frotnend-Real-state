import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { authRoutes } from './modules/auth';
import { dashboardRoutes } from './modules/dashboard/routes';
import { administrationRoutes } from './modules/administration';
import { crmRoutes } from './modules/crm';
import { hrRoutes } from './modules/hr';
import { salesRoutes } from './modules/sales';
import { purchaseRoutes } from './modules/purchase';
import { inventoryRoutes } from './modules/inventory';
import { accountingRoutes } from './modules/accounting';
import { reportsRoutes } from './modules/reports';
import { aIRoutes } from './modules/ai';
import { employeeSelfServiceRoutes } from './modules/ess';
import { supportRoutes } from './modules/support/routes';
import ModulesSelectorPage from './modules/dashboard/pages/ModulesSelectorPage';
import RoleBasedRedirect from './shared/components/auth/RoleBasedRedirect';
import { AuthProvider } from './shared/context/contexts/AuthContext';
import { MasterDataProvider } from './shared/context/MasterDataContext';

const router = createBrowserRouter([
  {
    // Root "/" → redirect based on role
    path: '/',
    element: <RoleBasedRedirect />,
  },
  ...authRoutes,
  ...dashboardRoutes,
  ...administrationRoutes,
  ...crmRoutes,
  ...hrRoutes,
  ...salesRoutes,
  ...purchaseRoutes,
  ...inventoryRoutes,
  ...accountingRoutes,
  ...reportsRoutes,
  ...aIRoutes,
  ...employeeSelfServiceRoutes,
  ...supportRoutes,
  {
    path: '/admin/modules',
    element: <ModulesSelectorPage />,
  },
  {
    path: '*',
    element: (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900">
        <h1 className="text-2xl font-bold text-red-500">404 - Page Not Found</h1>
      </div>
    ),
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <MasterDataProvider>
        <RouterProvider router={router} />
      </MasterDataProvider>
    </AuthProvider>
  );
}


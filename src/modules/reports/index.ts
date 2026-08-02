import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminLayout from '@/shared/layouts/AdminLayout';
import { salesReportsRoutes } from './SalesReports';
import { purchaseReportsRoutes } from './PurchaseReports';
import { inventoryReportsRoutes } from './InventoryReports';
import { accountingReportsRoutes } from './AccountingReports';
import { hrReportsRoutes } from './HrReports';
import { dashboardAnalyticsRoutes } from './DashboardAnalytics';

import AdminReportsOverviewPage from '../administration/Dashboard/pages/AdminReportsOverviewPage';
import CustomReportsPage from '../administration/Dashboard/pages/CustomReportsPage';
import ScheduledReportsPage from '../administration/Dashboard/pages/ScheduledReportsPage';
import ReportBuilderPage from '../administration/Dashboard/pages/ReportBuilderPage';
import DataExportPage from '../administration/Dashboard/pages/DataExportPage';
import ReportTemplatesPage from '../administration/Dashboard/pages/ReportTemplatesPage';

export const reportsRoutes: RouteObject[] = [
    {
        path: 'reports',
        element: React.createElement(AdminLayout),
        children: [
            {
                index: true,
                element: React.createElement(AdminReportsOverviewPage),
            },
            {
                path: 'overview',
                element: React.createElement(AdminReportsOverviewPage),
            },
            {
                path: 'custom',
                element: React.createElement(CustomReportsPage),
            },
            {
                path: 'scheduled',
                element: React.createElement(ScheduledReportsPage),
            },
            {
                path: 'builder',
                element: React.createElement(ReportBuilderPage),
            },
            {
                path: 'export',
                element: React.createElement(DataExportPage),
            },
            {
                path: 'templates',
                element: React.createElement(ReportTemplatesPage),
            },
            ...salesReportsRoutes,
            ...purchaseReportsRoutes,
            ...inventoryReportsRoutes,
            ...accountingReportsRoutes,
            ...hrReportsRoutes,
            ...dashboardAnalyticsRoutes,
        ]
    }
];

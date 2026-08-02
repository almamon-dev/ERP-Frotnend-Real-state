import { ScheduledReport } from './types';

export const INITIAL_SCHEDULED_REPORTS: ScheduledReport[] = [
  {
    id: 'SCH-001',
    name: 'Weekly Sales Summary',
    reportType: 'Sales Performance',
    frequency: 'Weekly',
    nextRun: 'Every Monday 08:00 AM',
    recipients: ['sales-team@company.com', 'admin@company.com'],
    format: 'PDF',
    status: 'Active',
  },
  {
    id: 'SCH-002',
    name: 'Monthly Financial Audit',
    reportType: 'Accounts Ledger',
    frequency: 'Monthly',
    nextRun: '1st of every month 09:00 AM',
    recipients: ['finance-head@company.com'],
    format: 'Excel',
    status: 'Active',
  },
  {
    id: 'SCH-003',
    name: 'Daily Lead Conversion Digest',
    reportType: 'CRM Analytics',
    frequency: 'Daily',
    nextRun: 'Everyday 07:00 PM',
    recipients: ['crm-mgr@company.com'],
    format: 'CSV',
    status: 'Paused',
  },
];

export interface ScheduledReport {
  id: string;
  name: string;
  reportType: string;
  frequency: 'Daily' | 'Weekly' | 'Monthly' | 'Quarterly';
  nextRun: string;
  recipients: string[];
  format: 'PDF' | 'Excel' | 'CSV';
  status: 'Active' | 'Paused';
}

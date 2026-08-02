export interface ReportItem {
  id: string;
  name: string;
  category: string;
  frequency: string;
  lastGenerated: string;
  format: 'PDF' | 'Excel' | 'CSV';
  status: 'Ready' | 'Processing' | 'Scheduled';
}

export interface ReportCategory {
  id: string;
  name: string;
  count: number;
}

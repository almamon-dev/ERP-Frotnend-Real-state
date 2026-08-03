export interface ProgressReportItem {
  id: string;
  reportCode: string;
  title: string;
  projectRef: string;
  milestoneRef: string;
  reportedBy: string;
  reportDate: string;
  weeklyProgress: number;
  qualityStatus: 'Approved' | 'Under Review' | 'Needs Correction';
  photoCount?: number;
}

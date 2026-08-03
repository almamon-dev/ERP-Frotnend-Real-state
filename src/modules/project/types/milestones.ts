export interface MilestoneItem {
  id: string;
  milestoneCode: string;
  title: string;
  projectRef: string;
  targetDate: string;
  completionPercent: number;
  assignedTeam: string;
  status: string;
}

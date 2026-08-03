export interface ProjectMilestoneInput {
  title: string;
  targetDate: string;
}

export interface ProjectItem {
  id: string;
  projectCode: string;
  name: string;
  location: string;
  projectType: string;
  totalBudget: string;
  disbursedAmount: string;
  contractor: string;
  totalFloors: string;
  startDate: string;
  completionDate: string;
  progressPercent: number;
  status: string;
  milestones?: ProjectMilestoneInput[];
}

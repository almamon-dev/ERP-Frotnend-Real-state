import { initialProjects } from '../data/projects';
import { initialProgressReports } from '../data/progress';
import { ProjectItem } from '../types/projects';
import { ProgressReportItem } from '../types/progress';

export const projectService = {
  async getProjects(): Promise<ProjectItem[]> {
    return Promise.resolve([...initialProjects]);
  },

  async getProjectById(id: string): Promise<ProjectItem | undefined> {
    return Promise.resolve(initialProjects.find((p) => p.id === id));
  },

  async getProgressReports(): Promise<ProgressReportItem[]> {
    return Promise.resolve([...initialProgressReports]);
  },

  async createProject(data: Partial<ProjectItem>): Promise<ProjectItem> {
    const newProject: ProjectItem = {
      id: String(Date.now()),
      projectCode: data.projectCode || `PRJ-${Math.floor(100 + Math.random() * 900)}`,
      projectName: data.projectName || 'New Project',
      projectType: data.projectType || 'Residential',
      location: data.location || 'Dhaka',
      landArea: data.landArea || '20 Katha',
      totalFloors: data.totalFloors || 'G+15',
      unitsCount: data.unitsCount || 40,
      contractor: data.contractor || 'Spectra',
      estimatedBudget: data.estimatedBudget || '৳ 100 Cr',
      progress: data.progress || 0,
      status: data.status || 'Ongoing',
    };
    return Promise.resolve(newProject);
  },

  async exportProjects(format: 'excel' | 'pdf'): Promise<boolean> {
    console.log(`Exporting Projects in ${format} format...`);
    return Promise.resolve(true);
  },
};

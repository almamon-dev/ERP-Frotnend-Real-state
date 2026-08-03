import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import DataTable from '@/shared/components/tables/data-table';
import { ProjectItem } from '../types/projects';
import { initialProjects } from '../data/projects';
import { getProjectColumns } from '../components/projects/ProjectColumns';
import ProjectModal from '../components/projects/ProjectModal';

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<ProjectItem[]>(initialProjects);
  const [isProjModalOpen, setIsProjModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);

  const handleEditProject = (proj: ProjectItem) => {
    setEditingProject(proj);
    setIsProjModalOpen(true);
  };

  const handleDeleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSaveProject = (proj: ProjectItem) => {
    setProjects((prev) => {
      const exists = prev.some((p) => p.id === proj.id);
      return exists ? prev.map((p) => (p.id === proj.id ? proj : p)) : [...prev, proj];
    });
  };

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">Real Estate Projects</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">
            Land & Project / Project Management / Projects
          </p>
        </div>
        <button onClick={() => navigate('/admin/projects/create')} className="px-3.5 py-1.5 bg-[#006837] hover:bg-[#00522b] text-white text-xs font-semibold rounded-[4px] shadow-2xs transition-colors flex items-center gap-1.5">
          <Plus size={14} /> Create New Project
        </button>
      </div>

      <DataTable data={projects} columns={getProjectColumns(handleEditProject, handleDeleteProject)} searchPlaceholder="Search projects by code, title, contractor, location..." />
      <ProjectModal isOpen={isProjModalOpen} onClose={() => setIsProjModalOpen(false)} onSave={handleSaveProject} projectToEdit={editingProject} />
    </div>
  );
}

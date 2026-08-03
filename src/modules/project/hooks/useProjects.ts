import { useState, useEffect } from 'react';
import { ProjectItem } from '../types/projects';
import { projectService } from '../services/projectService';

export function useProjects() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    projectService.getProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  const handleAddProject = (proj: ProjectItem) => {
    setProjects((prev) => [...prev, proj]);
  };

  const handleDeleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return {
    projects,
    loading,
    searchQuery,
    setSearchQuery,
    handleAddProject,
    handleDeleteProject,
  };
}

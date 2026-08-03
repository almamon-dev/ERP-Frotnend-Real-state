import { useState, useEffect } from 'react';
import { LandPlotItem } from '../types/plots';
import { landService } from '../services/landService';

export function useLandPlots() {
  const [plots, setPlots] = useState<LandPlotItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    landService.getPlots().then((data) => {
      setPlots(data);
      setLoading(false);
    });
  }, []);

  const handleAddPlot = (newPlot: LandPlotItem) => {
    setPlots((prev) => [...prev, newPlot]);
  };

  const handleBulkDelete = () => {
    setPlots((prev) => prev.filter((p) => !selectedIds.includes(p.id)));
    setSelectedIds([]);
  };

  return {
    plots,
    loading,
    selectedIds,
    setSelectedIds,
    searchQuery,
    setSearchQuery,
    handleAddPlot,
    handleBulkDelete,
  };
}

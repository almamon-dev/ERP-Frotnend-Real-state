import { initialPlots } from '../data/plots';
import { initialAcquisitions } from '../data/acquisition';
import { initialDocuments } from '../data/documents';
import { LandPlotItem } from '../types/plots';
import { LandAcquisitionItem } from '../types/acquisition';
import { LandDocumentItem } from '../types/documents';

export const landService = {
  async getPlots(): Promise<LandPlotItem[]> {
    return Promise.resolve([...initialPlots]);
  },

  async getPlotById(id: string): Promise<LandPlotItem | undefined> {
    return Promise.resolve(initialPlots.find((p) => p.id === id));
  },

  async getAcquisitions(): Promise<LandAcquisitionItem[]> {
    return Promise.resolve([...initialAcquisitions]);
  },

  async getDocuments(): Promise<LandDocumentItem[]> {
    return Promise.resolve([...initialDocuments]);
  },

  async exportPlotData(format: 'excel' | 'pdf' | 'csv'): Promise<boolean> {
    console.log(`Exporting Land Plots in ${format} format...`);
    return Promise.resolve(true);
  },

  async importPlotData(file: File): Promise<boolean> {
    console.log(`Importing Land Plots from file: ${file.name}`);
    return Promise.resolve(true);
  },
};

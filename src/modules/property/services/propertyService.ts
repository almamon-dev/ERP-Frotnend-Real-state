import { initialProperties } from '../data/properties';
import { initialUnits } from '../data/units';
import { initialAmenities } from '../data/amenities';
import { initialMaintenanceTickets } from '../data/maintenance';
import { PropertyItem } from '../types/properties';

export const propertyService = {
  async getProperties(): Promise<PropertyItem[]> {
    return Promise.resolve([...initialProperties]);
  },

  async getPropertyById(id: string): Promise<PropertyItem | undefined> {
    return Promise.resolve(initialProperties.find((p) => p.id === id));
  },

  async getUnits() {
    return Promise.resolve([...initialUnits]);
  },

  async getAmenities() {
    return Promise.resolve([...initialAmenities]);
  },

  async getMaintenanceTickets() {
    return Promise.resolve([...initialMaintenanceTickets]);
  },

  async exportProperties(format: 'excel' | 'pdf'): Promise<boolean> {
    console.log(`Exporting Property records in ${format} format...`);
    return Promise.resolve(true);
  },
};

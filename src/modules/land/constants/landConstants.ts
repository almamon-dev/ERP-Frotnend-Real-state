export class LAND_MODULE_CONSTANTS {
  static readonly MODULE_NAME = 'Land Management';
  static readonly DEFAULT_CURRENCY = 'BDT (৳)';
  static readonly PERMISSION_KEYS = {
    VIEW_PLOTS: 'land.plots.view',
    CREATE_PLOT: 'land.plots.create',
    EDIT_PLOT: 'land.plots.edit',
    DELETE_PLOT: 'land.plots.delete',
  };
}

export const LAND_ZONING_OPTIONS = [
  { id: 'Residential', name: 'Residential Zone' },
  { id: 'Commercial', name: 'Commercial Zone' },
  { id: 'Industrial', name: 'Industrial Zone' },
  { id: 'Agricultural', name: 'Agricultural Zone' },
];

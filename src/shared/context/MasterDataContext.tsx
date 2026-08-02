import React, { createContext, useContext, useState, useEffect } from 'react';

export type MasterDataItem = {
  id: string;
  category: string; // e.g. 'company_types', 'industries', 'countries', 'department_types', 'designation_levels'
  code: string;
  label: string;
  description?: string;
  sortOrder: number;
  isSystem: boolean;
  status: 'Active' | 'Inactive';
};

export type MasterDataCategory = {
  key: string;
  title: string;
  description: string;
  iconName?: string;
};

export const MASTER_DATA_CATEGORIES: MasterDataCategory[] = [
  { key: 'company_types', title: 'Company Types', description: 'Entity classifications (e.g. Parent, Subsidiary)' },
  { key: 'industries', title: 'Industry Sectors', description: 'Business vertical categories' },
  { key: 'countries', title: 'Countries & Regions', description: 'Geographic location list' },
  { key: 'department_types', title: 'Department Types', description: 'Organizational department classifications' },
  { key: 'designation_levels', title: 'Designation Levels', description: 'Hierarchy level rankings' },
  { key: 'employment_statuses', title: 'Employment Statuses', description: 'Staff engagement types' },
  { key: 'branch_categories', title: 'Branch Categories', description: 'Office and site classification' },
];

const INITIAL_ITEMS: MasterDataItem[] = [
  // Company Types
  { id: 'ct-1', category: 'company_types', code: 'PARENT', label: 'Parent Company', sortOrder: 1, isSystem: true, status: 'Active' },
  { id: 'ct-2', category: 'company_types', code: 'SUB', label: 'Subsidiary', sortOrder: 2, isSystem: true, status: 'Active' },
  { id: 'ct-3', category: 'company_types', code: 'JV', label: 'Joint Venture', sortOrder: 3, isSystem: true, status: 'Active' },
  { id: 'ct-4', category: 'company_types', code: 'ASSOC', label: 'Associate', sortOrder: 4, isSystem: false, status: 'Active' },

  // Industry Sectors
  { id: 'ind-1', category: 'industries', code: 'RE', label: 'Real Estate', sortOrder: 1, isSystem: true, status: 'Active' },
  { id: 'ind-2', category: 'industries', code: 'CONST', label: 'Construction', sortOrder: 2, isSystem: true, status: 'Active' },
  { id: 'ind-3', category: 'industries', code: 'FIN', label: 'Finance & Banking', sortOrder: 3, isSystem: true, status: 'Active' },
  { id: 'ind-4', category: 'industries', code: 'RETAIL', label: 'Retail & Commercial', sortOrder: 4, isSystem: false, status: 'Active' },
  { id: 'ind-5', category: 'industries', code: 'TECH', label: 'Technology', sortOrder: 5, isSystem: false, status: 'Active' },

  // Countries
  { id: 'c-1', category: 'countries', code: 'BD', label: 'Bangladesh', sortOrder: 1, isSystem: true, status: 'Active' },
  { id: 'c-2', category: 'countries', code: 'UAE', label: 'UAE', sortOrder: 2, isSystem: true, status: 'Active' },
  { id: 'c-3', category: 'countries', code: 'USA', label: 'USA', sortOrder: 3, isSystem: true, status: 'Active' },
  { id: 'c-4', category: 'countries', code: 'UK', label: 'United Kingdom', sortOrder: 4, isSystem: false, status: 'Active' },
  { id: 'c-5', category: 'countries', code: 'SG', label: 'Singapore', sortOrder: 5, isSystem: false, status: 'Active' },

  // Department Types
  { id: 'dept-1', category: 'department_types', code: 'HR', label: 'Human Resources', sortOrder: 1, isSystem: true, status: 'Active' },
  { id: 'dept-2', category: 'department_types', code: 'ENG', label: 'Engineering & Construction', sortOrder: 2, isSystem: true, status: 'Active' },
  { id: 'dept-3', category: 'department_types', code: 'SALES', label: 'Sales & Marketing', sortOrder: 3, isSystem: true, status: 'Active' },
  { id: 'dept-4', category: 'department_types', code: 'FIN', label: 'Accounts & Finance', sortOrder: 4, isSystem: true, status: 'Active' },
  { id: 'dept-5', category: 'department_types', code: 'OPS', label: 'Operations', sortOrder: 5, isSystem: false, status: 'Active' },

  // Designation Levels
  { id: 'desg-1', category: 'designation_levels', code: 'EXEC', label: 'Executive Level', sortOrder: 1, isSystem: true, status: 'Active' },
  { id: 'desg-2', category: 'designation_levels', code: 'MGR', label: 'Managerial Level', sortOrder: 2, isSystem: true, status: 'Active' },
  { id: 'desg-3', category: 'designation_levels', code: 'DIR', label: 'Director Level', sortOrder: 3, isSystem: true, status: 'Active' },

  // Employment Statuses
  { id: 'emp-1', category: 'employment_statuses', code: 'FT', label: 'Full Time', sortOrder: 1, isSystem: true, status: 'Active' },
  { id: 'emp-2', category: 'employment_statuses', code: 'PT', label: 'Part Time', sortOrder: 2, isSystem: true, status: 'Active' },
  { id: 'emp-3', category: 'employment_statuses', code: 'CONT', label: 'Contractual', sortOrder: 3, isSystem: false, status: 'Active' },

  // Branch Categories
  { id: 'br-1', category: 'branch_categories', code: 'HQ', label: 'Headquarters', sortOrder: 1, isSystem: true, status: 'Active' },
  { id: 'br-2', category: 'branch_categories', code: 'REG', label: 'Regional Office', sortOrder: 2, isSystem: false, status: 'Active' },
  { id: 'br-3', category: 'branch_categories', code: 'SITE', label: 'Project Site Office', sortOrder: 3, isSystem: false, status: 'Active' },
];

type MasterDataContextType = {
  items: MasterDataItem[];
  getItemsByCategory: (categoryKey: string) => MasterDataItem[];
  getSelectOptionsByCategory: (categoryKey: string, defaultPlaceholder?: string) => Array<{ id: string; name: string }>;
  addItem: (item: Omit<MasterDataItem, 'id'>) => void;
  updateItem: (id: string, updated: Partial<MasterDataItem>) => void;
  deleteItem: (id: string) => void;
  resetToDefault: () => void;
};

const MasterDataContext = createContext<MasterDataContextType | undefined>(undefined);

const STORAGE_KEY = 'erp_master_data_v1';

export const MasterDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<MasterDataItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_ITEMS;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const getItemsByCategory = (categoryKey: string) => {
    return items
      .filter(item => item.category === categoryKey)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  };

  const getSelectOptionsByCategory = (categoryKey: string, defaultPlaceholder?: string) => {
    const filtered = getItemsByCategory(categoryKey).filter(i => i.status === 'Active');
    const options = filtered.map(item => ({ id: item.label, name: item.label }));
    if (defaultPlaceholder) {
      return [{ id: '', name: defaultPlaceholder }, ...options];
    }
    return options;
  };

  const addItem = (newItem: Omit<MasterDataItem, 'id'>) => {
    const id = `md-${Date.now()}`;
    setItems(prev => [...prev, { ...newItem, id }]);
  };

  const updateItem = (id: string, updated: Partial<MasterDataItem>) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const resetToDefault = () => {
    setItems(INITIAL_ITEMS);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <MasterDataContext.Provider value={{
      items,
      getItemsByCategory,
      getSelectOptionsByCategory,
      addItem,
      updateItem,
      deleteItem,
      resetToDefault
    }}>
      {children}
    </MasterDataContext.Provider>
  );
};

export const useMasterData = () => {
  const context = useContext(MasterDataContext);
  if (!context) {
    throw new Error('useMasterData must be used within a MasterDataProvider');
  }
  return context;
};

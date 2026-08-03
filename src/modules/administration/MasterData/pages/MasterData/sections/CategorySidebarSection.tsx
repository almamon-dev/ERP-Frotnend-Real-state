import React from 'react';
import { Database } from 'lucide-react';
import { MasterCategory } from '../types';

interface Props {
  categories: MasterCategory[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategorySidebarSection: React.FC<Props> = ({ categories, selectedCategory, onSelectCategory }) => (
  <div className="w-full md:w-64 bg-white rounded-lg border border-slate-200 p-3 space-y-1 h-fit">
    <h3 className="text-[12px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2 flex items-center gap-1.5">
      <Database size={14} /> Data Categories
    </h3>
    {categories.map((cat) => (
      <button
        key={cat.id}
        onClick={() => onSelectCategory(cat.id)}
        className={`w-full flex items-center justify-between px-3 py-2 text-[13px] font-medium rounded-md transition-colors ${
          selectedCategory === cat.id ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50'
        }`}
      >
        <span>{cat.name}</span>
        <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500">{cat.count}</span>
      </button>
    ))}
  </div>
);

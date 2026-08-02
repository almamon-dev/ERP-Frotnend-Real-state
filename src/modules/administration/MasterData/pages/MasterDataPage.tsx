import React, { useState } from 'react';
import { Database, Plus } from 'lucide-react';
import DataTable, { Column } from '@/shared/components/tables/data-table';
import TableActions from '@/shared/components/tables/table-actions';
import Button from '@/shared/components/ui/button';
import { MASTER_CATEGORIES, MasterDataItem } from './MasterData/types';
import { CategorySidebarSection } from './MasterData/sections/CategorySidebarSection';
import { MasterDataFormModal } from './MasterData/components/MasterDataFormModal';

export default function MasterDataPage() {
  const [selectedCategory, setSelectedCategory] = useState('company_types');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<MasterDataItem[]>([
    { id: '1', code: 'CT-01', name: 'Parent Company', category: 'company_types', description: 'Main enterprise', isSystem: true, status: 'Active' },
    { id: '2', code: 'CT-02', name: 'Subsidiary', category: 'company_types', description: 'Controlled entity', isSystem: false, status: 'Active' },
  ]);

  const activeCategoryObj = MASTER_CATEGORIES.find((c) => c.id === selectedCategory);
  const filteredItems = items.filter((i) => i.category === selectedCategory);

  const columns: Column<MasterDataItem>[] = [
    { id: 'code', label: 'Code', render: (item) => <span className="font-mono text-[12px] text-slate-500">{item.code}</span> },
    { id: 'name', label: 'Name', render: (item) => <span className="font-bold text-slate-800 text-[13px]">{item.name}</span> },
    { id: 'status', label: 'Status', render: (item) => <span className="px-2 py-0.5 text-[11px] bg-emerald-50 text-emerald-600 rounded-full">{item.status}</span> },
    {
      id: 'actions',
      label: 'Actions',
      render: (item) => (
        <TableActions item={item}
          onView={() => alert(`View ${item.name}`)}
          onExport={() => alert(`Export ${item.name}`)}
          onEdit={() => alert(`Edit ${item.name}`)}
          onDelete={() => setItems((prev) => prev.filter((i) => i.id !== item.id))}
        />
      ),
    },
  ];

  return (
    <div className="p-4 md:p-6 mx-auto bg-[#F4F6F9] min-h-screen text-slate-800 space-y-4">
      <div className="flex justify-between items-center border-b pb-3">
        <div>
          <h1 className="text-[19px] font-bold text-slate-900 flex items-center gap-2">
            <Database size={22} className="text-indigo-600" /> Master Data Management
          </h1>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 text-white flex items-center gap-1.5">
          <Plus size={16} /> Add Option
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <CategorySidebarSection categories={MASTER_CATEGORIES} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        <div className="flex-1">
          <DataTable data={filteredItems} columns={columns} searchPlaceholder={`Search ${activeCategoryObj?.name}...`} />
        </div>
      </div>

      <MasterDataFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categoryName={activeCategoryObj?.name || ''}
        onSave={(newItem) => setItems([...items, { ...newItem, category: selectedCategory }])}
      />
    </div>
  );
}

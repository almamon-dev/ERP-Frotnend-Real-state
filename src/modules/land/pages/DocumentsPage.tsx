import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from '@/shared/components/tables/data-table';
import { LandDocumentItem } from '../types/documents';
import { initialDocuments } from '../data/documents';
import { getDocumentColumns } from '../components/documents/DocumentColumns';
import DocumentModal from '../components/documents/DocumentModal';

export default function DocumentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [documents, setDocuments] = useState<LandDocumentItem[]>(initialDocuments);

  const handleSaveDocument = (newDoc: LandDocumentItem) => {
    setDocuments((prev) => [...prev, newDoc]);
  };

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">Legal Documents & Allocation</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">
            Land & Project / Land Management / Land Documents
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-3.5 py-1.5 bg-[#006837] hover:bg-[#00522b] text-white text-xs font-semibold rounded-[4px] shadow-2xs transition-colors flex items-center gap-1.5"
        >
          <Plus size={14} /> Upload Document
        </button>
      </div>

      <DataTable
        data={documents}
        columns={getDocumentColumns()}
        searchPlaceholder="Search document code, type, plot reference..."
      />

      <DocumentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveDocument}
      />
    </div>
  );
}

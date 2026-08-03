import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from '@/shared/components/tables/data-table';
import { MaintenanceTicketItem } from '../types/maintenance';
import { initialMaintenanceTickets } from '../data/maintenance';
import { getMaintenanceColumns } from '../components/maintenance/MaintenanceColumns';
import MaintenanceModal from '../components/maintenance/MaintenanceModal';

export default function MaintenancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tickets, setTickets] = useState<MaintenanceTicketItem[]>(initialMaintenanceTickets);

  const handleSaveTicket = (newTicket: MaintenanceTicketItem) => {
    setTickets((prev) => [...prev, newTicket]);
  };

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">Maintenance & Work Orders</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">
            Land & Project / Property Management / Maintenance
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-3.5 py-1.5 bg-[#006837] hover:bg-[#00522b] text-white text-xs font-semibold rounded-[4px] shadow-2xs transition-colors flex items-center gap-1.5"
        >
          <Plus size={14} /> Create Work Order
        </button>
      </div>

      <DataTable
        data={tickets}
        columns={getMaintenanceColumns()}
        searchPlaceholder="Search tickets by code, category, technician..."
      />

      <MaintenanceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTicket}
      />
    </div>
  );
}

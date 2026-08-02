import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import DataTable, { Column } from '@/shared/components/tables/data-table';
import TableActions from '@/shared/components/tables/table-actions';
import Select from '@/shared/components/ui/select';
import { useMasterData } from '@/shared/context/MasterDataContext';
import { Company, FILTER_STATUS_OPTIONS } from './Companies/types';
import { INITIAL_COMPANIES } from './Companies/mockData';
import { KpiCardsSection } from './Companies/sections/KpiCardsSection';
import { CreateFormSection } from './Companies/sections/CreateFormSection';
import { CompanyViewModal } from './Companies/components/CompanyViewModal';

export default function CompaniesPage() {
  const { getSelectOptionsByCategory } = useMasterData();
  const [companies, setCompanies] = useState<Company[]>(INITIAL_COMPANIES);
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedViewItem, setSelectedViewItem] = useState<Company | null>(null);

  // Fetch MasterData options with explicit fallbacks
  const fetchedTypes = getSelectOptionsByCategory('company_types');
  const typeOptions = fetchedTypes.length > 0 ? fetchedTypes : [
    { value: 'Parent Company', label: 'Parent Company' },
    { value: 'Subsidiary', label: 'Subsidiary' },
    { value: 'Joint Venture', label: 'Joint Venture' },
    { value: 'Sister Concern', label: 'Sister Concern' },
  ];

  const fetchedIndustries = getSelectOptionsByCategory('industries');
  const industryOptions = fetchedIndustries.length > 0 ? fetchedIndustries : [
    { value: 'Real Estate & Property', label: 'Real Estate & Property' },
    { value: 'Construction & Development', label: 'Construction & Development' },
    { value: 'Architecture & Engineering', label: 'Architecture & Engineering' },
    { value: 'Financial Services', label: 'Financial Services' },
  ];

  const fetchedCountries = getSelectOptionsByCategory('countries');
  const countryOptions = fetchedCountries.length > 0 ? fetchedCountries : [
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'United States', label: 'United States' },
    { value: 'United Arab Emirates', label: 'United Arab Emirates' },
    { value: 'Singapore', label: 'Singapore' },
  ];

  const filtered = companies.filter((c) => filterStatus === 'All' || c.status === filterStatus);

  const columns: Column<Company>[] = [
    { id: 'code', label: 'Code', render: (item) => <span className="font-mono text-slate-500 text-[12px]">{item.code}</span> },
    { id: 'name', label: 'Company Name', render: (item) => <span className="font-bold text-slate-900 text-[13px]">{item.name}</span> },
    { id: 'type', label: 'Type' },
    { id: 'industry', label: 'Industry' },
    { id: 'country', label: 'Country', render: (item) => <span>{item.countryFlag || '🇧🇩'} {item.country}</span> },
    { id: 'status', label: 'Status', render: (item) => <span className={`px-2 py-0.5 text-[11px] rounded-full ${item.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>{item.status}</span> },
    {
      id: 'actions',
      label: 'Actions',
      render: (item) => (
        <TableActions
          item={item}
          onView={() => setSelectedViewItem(item)}
          onExport={() => alert(`Export ${item.name}`)}
          onEdit={() => alert(`Edit ${item.name}`)}
          onDelete={() => setCompanies((prev) => prev.filter((c) => c.id !== item.id))}
        />
      ),
    },
  ];

  return (
    <div className="p-4 md:p-6 mx-auto bg-[#F4F6F9] min-h-screen text-slate-800 space-y-4">
      <div className="flex justify-between items-center border-b pb-3">
        <div>
          <h1 className="text-[19px] font-bold text-slate-900 flex items-center gap-2">
            <Building2 size={22} className="text-indigo-600" /> Company Setup & Management
          </h1>
        </div>
      </div>

      <KpiCardsSection companies={companies} />

      <CreateFormSection
        onAddCompany={(newComp) => setCompanies([newComp, ...companies])}
        typeOptions={typeOptions}
        industryOptions={industryOptions}
        countryOptions={countryOptions}
      />

      <DataTable
        data={filtered}
        columns={columns}
        searchPlaceholder="Search name, code, email..."
        onDeleteSelected={(ids) => setCompanies((prev) => prev.filter((c) => !ids.includes(c.id)))}
        customHeaderActions={
          <div className="w-32">
            <Select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} options={FILTER_STATUS_OPTIONS} />
          </div>
        }
      />

      <CompanyViewModal company={selectedViewItem} onClose={() => setSelectedViewItem(null)} />
    </div>
  );
}

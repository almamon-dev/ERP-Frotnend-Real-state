import React, { useState } from 'react';
import { ArrowLeft, Save, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/shared/components/ui/button';
import { BranchFormData, initialBranchFormData } from './types';
import { CREATE_TABS } from './mockData';
import { GeneralInfoTab } from './sections/GeneralInfoTab';
import { ContactAddressTab } from './sections/ContactAddressTab';
import { ManagementOpsTab } from './sections/ManagementOpsTab';
import { FinancialTaxTab } from './sections/FinancialTaxTab';
import { SystemConfigTab } from './sections/SystemConfigTab';
import { DocumentsTab } from './sections/DocumentsTab';

export default function BranchCreatePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState<BranchFormData>(initialBranchFormData);

  const handleFieldChange = (field: keyof BranchFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting Branch Data to API:', formData);
    alert('Branch created successfully!');
    navigate('/administration/organization/branches');
  };

  return (
    <div className="p-4 md:p-6 mx-auto bg-[#F4F6F9] min-h-screen text-slate-800 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
        <div>
          <button
            onClick={() => navigate('/administration/organization/branches')}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-800 mb-1 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Branches List
          </button>
          <h1 className="text-[20px] font-bold text-slate-900 flex items-center gap-2">
            <Building2 size={22} className="text-slate-700" /> Create New Branch
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => navigate('/administration/organization/branches')}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="flex items-center gap-1.5 bg-slate-900 text-white">
            <Save size={16} /> Save Branch
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50/50">
          {CREATE_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 text-[13px] font-semibold border-b-2 whitespace-nowrap transition-colors ${
                  isActive
                    ? 'border-slate-900 text-slate-900 bg-white shadow-2xs'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100/50'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-slate-900' : 'text-slate-400'} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          {activeTab === 'general' && <GeneralInfoTab formData={formData} onChange={handleFieldChange} />}
          {activeTab === 'contact' && <ContactAddressTab formData={formData} onChange={handleFieldChange} />}
          {activeTab === 'management' && <ManagementOpsTab formData={formData} onChange={handleFieldChange} />}
          {activeTab === 'finance' && <FinancialTaxTab formData={formData} onChange={handleFieldChange} />}
          {activeTab === 'config' && <SystemConfigTab formData={formData} onChange={handleFieldChange} />}
          {activeTab === 'files' && <DocumentsTab formData={formData} onChange={handleFieldChange} />}
        </form>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Landmark, Plus, ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';
import DataTable, { Column } from '@/shared/components/tables/data-table';
import TableActions from '@/shared/components/tables/table-actions';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import { BranchItem } from './Branches/types';

export default function BranchesPage() {
  const [branches, setBranches] = useState<BranchItem[]>([
    { id: '1', code: 'BR-DHK-001', name: 'Dhaka Main Branch', companyName: 'GreenBuild Ltd', type: 'Headquarters', city: 'Dhaka', phone: '+880 1711-000000', status: 'Active' },
    { id: '2', code: 'BR-CTG-002', name: 'Chittagong Sales Center', companyName: 'GreenBuild Ltd', type: 'Sales Center', city: 'Chittagong', phone: '+880 1811-000000', status: 'Active' },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [code, setCode] = useState('BR-003');
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('GreenBuild Ltd');
  const [type, setType] = useState('Sub-Branch');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddBranch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return alert('Branch name required');
    setBranches([
      {
        id: Date.now().toString(),
        code: code || `BR-${Math.floor(100 + Math.random() * 900)}`,
        name,
        companyName,
        type,
        city: city || 'Dhaka',
        phone: phone || '+880 1700-000000',
        status: 'Active',
      },
      ...branches,
    ]);
    setName('');
    setCity('');
    setPhone('');
    setIsFormOpen(false);
  };

  const columns: Column<BranchItem>[] = [
    { id: 'code', label: 'Branch Code', render: (item) => <span className="font-mono text-slate-500 text-[12px]">{item.code}</span> },
    { id: 'name', label: 'Branch Name', render: (item) => <span className="font-bold text-slate-900 text-[13px]">{item.name}</span> },
    { id: 'companyName', label: 'Company Name' },
    { id: 'type', label: 'Branch Type' },
    { id: 'city', label: 'City' },
    { id: 'phone', label: 'Phone Number' },
    { id: 'status', label: 'Status', render: (item) => <span className={`px-2 py-0.5 text-[11px] rounded-full ${item.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>{item.status}</span> },
    {
      id: 'actions',
      label: 'Actions',
      render: (item) => (
        <TableActions
          item={item}
          onView={() => alert(`View ${item.name}`)}
          onExport={() => alert(`Export ${item.name}`)}
          onEdit={() => alert(`Edit ${item.name}`)}
          onDelete={() => setBranches((prev) => prev.filter((b) => b.id !== item.id))}
        />
      ),
    },
  ];

  return (
    <div className="p-4 md:p-6 mx-auto bg-[#F4F6F9] min-h-screen text-slate-800 space-y-4">
      <div className="flex justify-between items-center border-b pb-3">
        <h1 className="text-[19px] font-bold text-slate-900 flex items-center gap-2">
          <Landmark size={22} className="text-indigo-600" /> Branch Setup & Management
        </h1>
        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-3.5 py-1.5 rounded-md text-[12px] font-medium flex items-center gap-1.5 transition-colors shadow-2xs"
        >
          <Plus size={16} /> Add New Branch
        </button>
      </div>

      {isFormOpen && (
        <div className="bg-white rounded-lg border border-slate-200/80 p-4 shadow-2xs space-y-3 animate-in fade-in duration-200">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-[14px] font-bold text-slate-800">Register New Branch</h2>
            <button onClick={() => setIsFormOpen(false)} className="text-slate-400 hover:text-slate-600">
              <ChevronUp size={18} />
            </button>
          </div>
          <form onSubmit={handleAddBranch} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Input label="Branch Code *" value={code} onChange={(e) => setCode(e.target.value)} placeholder="e.g. BR-003" />
              <Input label="Branch Name *" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Branch Name" />
              <Input label="Company Name *" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Parent Company" />
              <Select
                label="Branch Type *"
                value={type}
                onChange={(e) => setType(e.target.value)}
                options={[
                  { value: 'Headquarters', label: 'Headquarters' },
                  { value: 'Sales Center', label: 'Sales Center' },
                  { value: 'Sub-Branch', label: 'Sub-Branch' },
                ]}
              />
              <Input label="City / Region *" value={city} onChange={(e) => setCity(e.target.value)} placeholder="e.g. Dhaka" />
              <Input label="Phone Number *" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+880 1700-000000" />
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button type="button" onClick={() => setIsFormOpen(false)} className="px-3 py-1 text-[12px] bg-slate-100 text-slate-600 rounded">Cancel</button>
              <button type="submit" className="px-4 py-1 text-[12px] bg-indigo-600 text-white rounded font-medium flex items-center gap-1"><Plus size={14} /> Save Branch</button>
            </div>
          </form>
        </div>
      )}

      <DataTable data={branches} columns={columns} searchPlaceholder="Search branch code, name..." />
    </div>
  );
}

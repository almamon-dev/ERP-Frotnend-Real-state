import React, { useState } from 'react';
import {
  FolderKanban, Plus, Eye, Edit2, Trash2, Search, CheckCircle
} from 'lucide-react';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import Modal from '@/shared/components/modals/modal';

type Department = {
  id: number;
  code: string;
  name: string;
  company: string;
  branch: string;
  head: string;
  totalStaff: number;
  status: string;
  statusBadge: string;
  createdAt: string;
};

const STATUS_OPTIONS = [
  { id: 'All', name: 'All Statuses' },
  { id: 'Active', name: 'Active' },
  { id: 'Inactive', name: 'Inactive' },
];

const COMPANY_OPTIONS = [
  { id: '', name: 'Select Company' },
  { id: 'GreenBuild Properties Ltd.', name: 'GreenBuild Properties Ltd.' },
  { id: 'Horizon Constructions LLC', name: 'Horizon Constructions LLC' },
  { id: 'Apex Finance Group', name: 'Apex Finance Group' },
];

const BRANCH_OPTIONS = [
  { id: '', name: 'Select Branch' },
  { id: 'Dhaka Central Branch', name: 'Dhaka Central Branch' },
  { id: 'Chittagong Port Branch', name: 'Chittagong Port Branch' },
  { id: 'Sylhet Sales Center', name: 'Sylhet Sales Center' },
];

export default function DepartmentsPage() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [branch, setBranch] = useState('');
  const [head, setHead] = useState('');

  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<Department | null>(null);

  const [departments, setDepartments] = useState<Department[]>([
    {
      id: 1,
      code: 'DEP-001',
      name: 'Software & Engineering',
      company: 'GreenBuild Properties Ltd.',
      branch: 'Dhaka Central Branch',
      head: 'Md. Tanvir Hossain',
      totalStaff: 18,
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      createdAt: '05, Jan 2025 09:15 AM',
    },
    {
      id: 2,
      code: 'DEP-002',
      name: 'Accounts & Finance',
      company: 'Apex Finance Group',
      branch: 'Dhaka Central Branch',
      head: 'Md. Al-Mamon',
      totalStaff: 12,
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      createdAt: '12, Feb 2025 11:00 AM',
    },
    {
      id: 3,
      code: 'DEP-003',
      name: 'Human Resource Management',
      company: 'GreenBuild Properties Ltd.',
      branch: 'Chittagong Port Branch',
      head: 'Farhana Yasmin',
      totalStaff: 8,
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      createdAt: '20, Mar 2025 03:45 PM',
    },
    {
      id: 4,
      code: 'DEP-004',
      name: 'Real Estate Sales & CRM',
      company: 'Horizon Constructions LLC',
      branch: 'Sylhet Sales Center',
      head: 'Kazi Rakib',
      totalStaff: 25,
      status: 'Inactive',
      statusBadge: 'bg-slate-100 text-slate-500 border-slate-200',
      createdAt: '10, Apr 2025 01:20 PM',
    },
  ]);

  const handleAddDepartment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !company) {
      alert('Please fill in Department Name and Company.');
      return;
    }
    const newDep: Department = {
      id: Date.now(),
      code: `DEP-${String(departments.length + 1).padStart(3, '0')}`,
      name, company, branch: branch || 'Head Office', head: head || 'Unassigned',
      totalStaff: 1,
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      createdAt: new Date().toLocaleString(),
    };
    setDepartments([newDep, ...departments]);
    setName(''); setCompany(''); setBranch(''); setHead('');
  };

  const handleDelete = (id: number) => {
    if (confirm('Delete this department?')) {
      setDepartments(prev => prev.filter(d => d.id !== id));
    }
  };

  const filtered = departments.filter(d => {
    const matchStatus = filterStatus === 'All' || d.status === filterStatus;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || d.name.toLowerCase().includes(q) || d.code.toLowerCase().includes(q) || d.head.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  return (
    <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-5 font-sans antialiased pb-20">
      
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-[19px] font-semibold text-slate-800 flex items-center gap-2">
          <FolderKanban size={20} className="text-indigo-600" />
          Department Setup
        </h1>
        <p className="text-[12.5px] text-slate-500 mt-0.5 font-normal">
          Organize departments across companies and assigned branches.
        </p>
      </div>

      {/* ── TOP CARD: ADD DEPARTMENT FORM ── */}
      <div className="bg-white p-4 rounded-md border border-slate-200/80 shadow-2xs space-y-3.5">
        <h3 className="text-[13px] font-semibold text-slate-800 border-b border-slate-100 pb-2">
          Add New Department
        </h3>
        <form onSubmit={handleAddDepartment} className="space-y-3">
          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <Input
              label="Department Name *"
              placeholder="e.g. Accounts & Finance"
              value={name}
              onChange={e => setName(e.target.value)}
              className="h-8 text-[12px]"
            />
            <Select
              label="Company *"
              value={company}
              onChange={e => setCompany(e.target.value)}
              options={COMPANY_OPTIONS}
              size="sm"
            />
            <Select
              label="Branch"
              value={branch}
              onChange={e => setBranch(e.target.value)}
              options={BRANCH_OPTIONS}
              size="sm"
            />
            <Input
              label="Department Head"
              placeholder="Head of Department"
              value={head}
              onChange={e => setHead(e.target.value)}
              className="h-8 text-[12px]"
            />
          </div>

          <div className="flex justify-end pt-1">
            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-[12px] font-medium px-4 h-8 rounded-xs cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <Plus size={13} />
              Add Department
            </Button>
          </div>
        </form>
      </div>

      {/* ── BOTTOM CARD: DEPARTMENTS TABLE ── */}
      <div className="bg-white p-4 rounded-md border border-slate-200/80 shadow-2xs space-y-3">
        
        {/* Header: Title + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="text-[13.5px] font-semibold text-slate-800">Department List</h3>
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search department name, code, head..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full h-8 px-3 pr-8 text-[12px] border border-slate-200 rounded-xs outline-none focus:border-indigo-500 font-medium"
            />
            <Search size={14} className="absolute right-2.5 top-2 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-end gap-3 pb-3 border-b border-slate-100">
          <div className="flex flex-col gap-1 w-40">
            <span className="text-[11.5px] font-medium text-slate-600">Status</span>
            <Select
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
              options={STATUS_OPTIONS}
              size="sm"
            />
          </div>
          <Button className="h-8 bg-slate-800 hover:bg-slate-900 text-white text-[12px] font-medium px-3.5 rounded-xs">
            Filter Results
          </Button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">SL</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Code</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Department Name</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Company</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Branch</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Department Head</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100 text-center">Total Staff</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100 text-center">Status</th>
                <th className="py-1.5 px-2.5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-8 text-center text-[12px] text-slate-400">
                    No departments found.
                  </td>
                </tr>
              ) : filtered.map((item, idx) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-500">{idx + 1}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 font-mono text-slate-600">{item.code}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 font-semibold text-slate-800 whitespace-nowrap">{item.name}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100">{item.company}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100">{item.branch}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 font-medium">{item.head}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 text-center font-bold text-slate-700">{item.totalStaff}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 text-center">
                    <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded-[3px] border ${item.statusBadge}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-1.5 px-2.5 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="p-1 text-slate-500 hover:text-indigo-700 rounded hover:bg-slate-100 cursor-pointer"
                        title="View Details"
                      >
                        <Eye size={14} />
                      </button>
                      <button
                        className="p-1 text-slate-500 hover:text-blue-700 rounded hover:bg-slate-100 cursor-pointer"
                        title="Edit"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-1 text-slate-500 hover:text-rose-700 rounded hover:bg-slate-100 cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* VIEW DETAILS MODAL */}
      {selectedItem && (
        <Modal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title="Department Details"
          description={`Code: ${selectedItem.code}`}
          size="md"
          footer={
            <Button
              onClick={() => setSelectedItem(null)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-[12px] h-8 px-4 font-medium"
            >
              Close
            </Button>
          }
        >
          <div className="space-y-3 text-left">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-slate-800 text-[13px] flex items-center gap-1.5">
                  <FolderKanban size={15} className="text-indigo-500" />
                  {selectedItem.name}
                </h4>
                <p className="text-[11.5px] text-slate-500 mt-0.5">{selectedItem.company} · {selectedItem.branch}</p>
              </div>
              <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded-[3px] border ${selectedItem.statusBadge}`}>
                {selectedItem.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[12px]">
              {[
                { label: 'Department Code', value: selectedItem.code },
                { label: 'Company', value: selectedItem.company },
                { label: 'Branch', value: selectedItem.branch },
                { label: 'Department Head', value: selectedItem.head },
                { label: 'Active Staff Count', value: `${selectedItem.totalStaff} members` },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase">{label}</span>
                  <p className="font-semibold text-slate-800 mt-0.5">{value || '—'}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-[11.5px] text-slate-500 pt-1 border-t border-slate-100">
              <CheckCircle size={12} className="text-emerald-500" />
              Created on {selectedItem.createdAt}
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
}

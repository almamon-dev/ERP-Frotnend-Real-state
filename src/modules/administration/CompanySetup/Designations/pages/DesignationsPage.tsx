import React, { useState } from 'react';
import {
  Briefcase, Plus, Eye, Edit2, Trash2, Search, CheckCircle
} from 'lucide-react';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import Modal from '@/shared/components/modals/modal';

type Designation = {
  id: number;
  code: string;
  title: string;
  department: string;
  grade: string;
  level: string;
  status: string;
  statusBadge: string;
  createdAt: string;
};

const STATUS_OPTIONS = [
  { id: 'All', name: 'All Statuses' },
  { id: 'Active', name: 'Active' },
  { id: 'Inactive', name: 'Inactive' },
];

const DEPARTMENT_OPTIONS = [
  { id: '', name: 'Select Department' },
  { id: 'Software & Engineering', name: 'Software & Engineering' },
  { id: 'Accounts & Finance', name: 'Accounts & Finance' },
  { id: 'Human Resource Management', name: 'Human Resource Management' },
  { id: 'Real Estate Sales & CRM', name: 'Real Estate Sales & CRM' },
];

const GRADE_OPTIONS = [
  { id: '', name: 'Select Salary Grade' },
  { id: 'Grade 1 (Executive)', name: 'Grade 1 (Executive)' },
  { id: 'Grade 2 (Managerial)', name: 'Grade 2 (Managerial)' },
  { id: 'Grade 3 (Senior Lead)', name: 'Grade 3 (Senior Lead)' },
  { id: 'Grade 4 (Mid Officer)', name: 'Grade 4 (Mid Officer)' },
  { id: 'Grade 5 (Junior Associate)', name: 'Grade 5 (Junior Associate)' },
];

export default function DesignationsPage() {
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [grade, setGrade] = useState('');
  const [level, setLevel] = useState('');

  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<Designation | null>(null);

  const [designations, setDesignations] = useState<Designation[]>([
    {
      id: 1,
      code: 'DES-001',
      title: 'Senior Software Engineer',
      department: 'Software & Engineering',
      grade: 'Grade 3 (Senior Lead)',
      level: 'L4',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      createdAt: '10, Jan 2025 10:00 AM',
    },
    {
      id: 2,
      code: 'DES-002',
      title: 'Chief Financial Officer (CFO)',
      department: 'Accounts & Finance',
      grade: 'Grade 1 (Executive)',
      level: 'L6',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      createdAt: '15, Jan 2025 11:30 AM',
    },
    {
      id: 3,
      code: 'DES-003',
      title: 'HR Operations Lead',
      department: 'Human Resource Management',
      grade: 'Grade 2 (Managerial)',
      level: 'L5',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      createdAt: '01, Feb 2025 02:00 PM',
    },
    {
      id: 4,
      code: 'DES-004',
      title: 'Junior Real Estate Sales Executive',
      department: 'Real Estate Sales & CRM',
      grade: 'Grade 5 (Junior Associate)',
      level: 'L1',
      status: 'Inactive',
      statusBadge: 'bg-slate-100 text-slate-500 border-slate-200',
      createdAt: '18, Mar 2025 04:45 PM',
    },
  ]);

  const handleAddDesignation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !department) {
      alert('Please fill in Designation Title and Department.');
      return;
    }
    const newDes: Designation = {
      id: Date.now(),
      code: `DES-${String(designations.length + 1).padStart(3, '0')}`,
      title, department, grade: grade || 'Grade 4 (Mid Officer)', level: level || 'L2',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      createdAt: new Date().toLocaleString(),
    };
    setDesignations([newDes, ...designations]);
    setTitle(''); setDepartment(''); setGrade(''); setLevel('');
  };

  const handleDelete = (id: number) => {
    if (confirm('Delete this designation?')) {
      setDesignations(prev => prev.filter(d => d.id !== id));
    }
  };

  const filtered = designations.filter(d => {
    const matchStatus = filterStatus === 'All' || d.status === filterStatus;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || d.title.toLowerCase().includes(q) || d.code.toLowerCase().includes(q) || d.department.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  return (
    <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-5 font-sans antialiased pb-20">
      
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-[19px] font-semibold text-slate-800 flex items-center gap-2">
          <Briefcase size={20} className="text-indigo-600" />
          Designation Setup
        </h1>
        <p className="text-[12.5px] text-slate-500 mt-0.5 font-normal">
          Manage job titles, ranks, and salary grades across all organizational departments.
        </p>
      </div>

      {/* ── TOP CARD: ADD DESIGNATION FORM ── */}
      <div className="bg-white p-4 rounded-md border border-slate-200/80 shadow-2xs space-y-3.5">
        <h3 className="text-[13px] font-semibold text-slate-800 border-b border-slate-100 pb-2">
          Add New Designation
        </h3>
        <form onSubmit={handleAddDesignation} className="space-y-3">
          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <Input
              label="Designation Title *"
              placeholder="e.g. Senior Software Engineer"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="h-8 text-[12px]"
            />
            <Select
              label="Department *"
              value={department}
              onChange={e => setDepartment(e.target.value)}
              options={DEPARTMENT_OPTIONS}
              size="sm"
            />
            <Select
              label="Salary Grade"
              value={grade}
              onChange={e => setGrade(e.target.value)}
              options={GRADE_OPTIONS}
              size="sm"
            />
            <Input
              label="Job Level / Band"
              placeholder="e.g. L4 or Senior"
              value={level}
              onChange={e => setLevel(e.target.value)}
              className="h-8 text-[12px]"
            />
          </div>

          <div className="flex justify-end pt-1">
            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-[12px] font-medium px-4 h-8 rounded-xs cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <Plus size={13} />
              Add Designation
            </Button>
          </div>
        </form>
      </div>

      {/* ── BOTTOM CARD: DESIGNATIONS TABLE ── */}
      <div className="bg-white p-4 rounded-md border border-slate-200/80 shadow-2xs space-y-3">
        
        {/* Header: Title + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="text-[13.5px] font-semibold text-slate-800">Designations List</h3>
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search title, code, department..."
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
                <th className="py-1.5 px-2.5 border-r border-slate-100">Designation Title</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Department</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Salary Grade</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100 text-center">Job Level</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100 text-center">Status</th>
                <th className="py-1.5 px-2.5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-[12px] text-slate-400">
                    No designations found.
                  </td>
                </tr>
              ) : filtered.map((item, idx) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-500">{idx + 1}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 font-mono text-slate-600">{item.code}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 font-semibold text-slate-800 whitespace-nowrap">{item.title}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100">{item.department}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100">{item.grade}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 text-center font-bold text-slate-700">{item.level}</td>
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
          title="Designation Details"
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
                  <Briefcase size={15} className="text-indigo-500" />
                  {selectedItem.title}
                </h4>
                <p className="text-[11.5px] text-slate-500 mt-0.5">{selectedItem.department}</p>
              </div>
              <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded-[3px] border ${selectedItem.statusBadge}`}>
                {selectedItem.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[12px]">
              {[
                { label: 'Designation Code', value: selectedItem.code },
                { label: 'Department', value: selectedItem.department },
                { label: 'Salary Grade', value: selectedItem.grade },
                { label: 'Job Band / Level', value: selectedItem.level },
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

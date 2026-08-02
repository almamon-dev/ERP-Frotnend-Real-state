import React, { useState } from 'react';
import {
  Users, Plus, Eye, Edit2, Trash2, Search, CheckCircle
} from 'lucide-react';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import Modal from '@/shared/components/modals/modal';

type Team = {
  id: number;
  code: string;
  name: string;
  department: string;
  lead: string;
  membersCount: number;
  focusArea: string;
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

export default function TeamsPage() {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [lead, setLead] = useState('');
  const [focusArea, setFocusArea] = useState('');

  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<Team | null>(null);

  const [teams, setTeams] = useState<Team[]>([
    {
      id: 1,
      code: 'TM-001',
      name: 'Frontend Engineering Team',
      department: 'Software & Engineering',
      lead: 'Md. Tanvir Hossain',
      membersCount: 8,
      focusArea: 'ERP Frontend & UI/UX Design System',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      createdAt: '12, Jan 2025 09:00 AM',
    },
    {
      id: 2,
      code: 'TM-002',
      name: 'Corporate Accounts Audit Team',
      department: 'Accounts & Finance',
      lead: 'Md. Al-Mamon',
      membersCount: 5,
      focusArea: 'Financial Statements & Tax Compliance',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      createdAt: '01, Feb 2025 11:15 AM',
    },
    {
      id: 3,
      code: 'TM-003',
      name: 'Project Acquisition & Sales Team',
      department: 'Real Estate Sales & CRM',
      lead: 'Kazi Rakib',
      membersCount: 14,
      focusArea: 'Land & Residential Plot Sales',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      createdAt: '15, Mar 2025 03:30 PM',
    },
    {
      id: 4,
      code: 'TM-004',
      name: 'Quality Assurance & Automation',
      department: 'Software & Engineering',
      lead: 'Farhana Yasmin',
      membersCount: 4,
      focusArea: 'Automated E2E Testing & Security Audit',
      status: 'Inactive',
      statusBadge: 'bg-slate-100 text-slate-500 border-slate-200',
      createdAt: '10, Apr 2025 05:00 PM',
    },
  ]);

  const handleAddTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !department) {
      alert('Please fill in Team Name and Department.');
      return;
    }
    const newTeam: Team = {
      id: Date.now(),
      code: `TM-${String(teams.length + 1).padStart(3, '0')}`,
      name, department, lead: lead || 'Unassigned',
      membersCount: 1,
      focusArea: focusArea || 'General Operations',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      createdAt: new Date().toLocaleString(),
    };
    setTeams([newTeam, ...teams]);
    setName(''); setDepartment(''); setLead(''); setFocusArea('');
  };

  const handleDelete = (id: number) => {
    if (confirm('Delete this team?')) {
      setTeams(prev => prev.filter(t => t.id !== id));
    }
  };

  const filtered = teams.filter(t => {
    const matchStatus = filterStatus === 'All' || t.status === filterStatus;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || t.name.toLowerCase().includes(q) || t.code.toLowerCase().includes(q) || t.lead.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  return (
    <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-5 font-sans antialiased pb-20">
      
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-[19px] font-semibold text-slate-800 flex items-center gap-2">
          <Users size={20} className="text-indigo-600" />
          Team Management
        </h1>
        <p className="text-[12.5px] text-slate-500 mt-0.5 font-normal">
          Manage operational cross-functional teams and team leaders.
        </p>
      </div>

      {/* ── TOP CARD: ADD TEAM FORM ── */}
      <div className="bg-white p-4 rounded-md border border-slate-200/80 shadow-2xs space-y-3.5">
        <h3 className="text-[13px] font-semibold text-slate-800 border-b border-slate-100 pb-2">
          Add New Team
        </h3>
        <form onSubmit={handleAddTeam} className="space-y-3">
          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <Input
              label="Team Name *"
              placeholder="e.g. Frontend Engineering Team"
              value={name}
              onChange={e => setName(e.target.value)}
              className="h-8 text-[12px]"
            />
            <Select
              label="Department *"
              value={department}
              onChange={e => setDepartment(e.target.value)}
              options={DEPARTMENT_OPTIONS}
              size="sm"
            />
            <Input
              label="Team Leader"
              placeholder="Lead Name"
              value={lead}
              onChange={e => setLead(e.target.value)}
              className="h-8 text-[12px]"
            />
            <Input
              label="Focus Area / Domain"
              placeholder="e.g. ERP UI/UX System"
              value={focusArea}
              onChange={e => setFocusArea(e.target.value)}
              className="h-8 text-[12px]"
            />
          </div>

          <div className="flex justify-end pt-1">
            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-[12px] font-medium px-4 h-8 rounded-xs cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <Plus size={13} />
              Add Team
            </Button>
          </div>
        </form>
      </div>

      {/* ── BOTTOM CARD: TEAMS TABLE ── */}
      <div className="bg-white p-4 rounded-md border border-slate-200/80 shadow-2xs space-y-3">
        
        {/* Header: Title + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="text-[13.5px] font-semibold text-slate-800">Team List</h3>
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search team name, code, lead..."
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
                <th className="py-1.5 px-2.5 border-r border-slate-100">Team Name</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Department</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Team Leader</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Focus Area</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100 text-center">Members</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100 text-center">Status</th>
                <th className="py-1.5 px-2.5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-8 text-center text-[12px] text-slate-400">
                    No teams found.
                  </td>
                </tr>
              ) : filtered.map((item, idx) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-500">{idx + 1}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 font-mono text-slate-600">{item.code}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 font-semibold text-slate-800 whitespace-nowrap">{item.name}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100">{item.department}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 font-medium">{item.lead}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 max-w-[180px] truncate">{item.focusArea}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 text-center font-bold text-slate-700">{item.membersCount}</td>
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
          title="Team Details"
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
                  <Users size={15} className="text-indigo-500" />
                  {selectedItem.name}
                </h4>
                <p className="text-[11.5px] text-slate-500 mt-0.5">{selectedItem.department}</p>
              </div>
              <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded-[3px] border ${selectedItem.statusBadge}`}>
                {selectedItem.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[12px]">
              {[
                { label: 'Team Code', value: selectedItem.code },
                { label: 'Department', value: selectedItem.department },
                { label: 'Team Leader', value: selectedItem.lead },
                { label: 'Active Members', value: `${selectedItem.membersCount} members` },
                { label: 'Focus Area / Domain', value: selectedItem.focusArea },
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

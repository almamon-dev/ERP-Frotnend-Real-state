import React, { useState } from 'react';
import { Users, Plus, Edit3, Trash2, X, Check } from 'lucide-react';
import DataTable, { Column } from '@/shared/components/tables/data-table';
import Button from '@/shared/components/ui/button';
import StatusBadge from '@/shared/components/ui/status-badge';

interface UserGroupItem {
  id: string;
  name: string;
  membersCount: number;
  rolesCount: number;
  description: string;
  status: string;
}

export default function UserGroupsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDesc, setNewGroupDesc] = useState('');
  const [selectedRoles, setSelectedRoles] = useState<string[]>(['System Administrator']);

  const [userGroups, setUserGroups] = useState<UserGroupItem[]>([
    { id: 'GRP-001', name: 'IT Infrastructure Group', membersCount: 14, rolesCount: 3, description: 'Core IT administrators and system security officers', status: 'Active' },
    { id: 'GRP-002', name: 'Human Resources Team', membersCount: 18, rolesCount: 2, description: 'HR managers, recruiters and payroll officers', status: 'Active' },
    { id: 'GRP-003', name: 'Finance & Accounting', membersCount: 9, rolesCount: 2, description: 'Financial controllers, accountants and auditors', status: 'Active' },
    { id: 'GRP-004', name: 'Real Estate Sales Force', membersCount: 45, rolesCount: 1, description: 'Sales leads, property agents and booking consultants', status: 'Active' },
    { id: 'GRP-005', name: 'Executive Leadership Board', membersCount: 6, rolesCount: 4, description: 'Executive directors, VPs and C-level administrators', status: 'Active' },
  ]);

  const availableRoles = [
    'Super Admin',
    'System Administrator',
    'HR Manager',
    'Finance Controller',
    'Sales Executive',
    'Auditor',
  ];

  const handleToggleRole = (role: string) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter(r => r !== role));
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGroupName.trim()) return;

    const created: UserGroupItem = {
      id: `GRP-00${userGroups.length + 1}`,
      name: newGroupName,
      description: newGroupDesc || 'Custom enterprise user group allocation',
      membersCount: 0,
      rolesCount: selectedRoles.length,
      status: 'Active',
    };

    setUserGroups([...userGroups, created]);
    setNewGroupName('');
    setNewGroupDesc('');
    setSelectedRoles(['System Administrator']);
    setIsModalOpen(false);
  };

  const handleDeleteGroup = (id: string) => {
    if (confirm('Are you sure you want to delete this user group?')) {
      setUserGroups(userGroups.filter(g => g.id !== id));
    }
  };

  const columns: Column<UserGroupItem>[] = [
    {
      id: 'id',
      label: 'Group ID',
      render: (g) => <span className="font-mono font-bold text-[#111827]">{g.id}</span>,
    },
    {
      id: 'name',
      label: 'Group Name',
      render: (g) => (
        <div className="font-bold text-[#111827] flex items-center gap-2">
          <Users size={14} className="text-[#006837]" />
          <span>{g.name}</span>
        </div>
      ),
    },
    {
      id: 'description',
      label: 'Description',
      render: (g) => <span className="text-[#4B5563] text-xs max-w-xs truncate block">{g.description}</span>,
    },
    {
      id: 'membersCount',
      label: 'Total Members',
      render: (g) => <span className="font-bold text-[#111827]">{g.membersCount} Members</span>,
    },
    {
      id: 'rolesCount',
      label: 'Assigned Roles',
      render: (g) => <span className="font-bold text-[#006837]">{g.rolesCount} Roles</span>,
    },
    {
      id: 'status',
      label: 'Status',
      render: (g) => <StatusBadge status={g.status} />,
    },
    {
      id: 'actions',
      label: 'Actions',
      render: (g) => (
        <div className="flex items-center justify-end gap-1.5">
          <button className="w-7 h-7 bg-[#2563EB] hover:bg-blue-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
            <Edit3 size={13} />
          </button>
          <button onClick={() => handleDeleteGroup(g.id)} className="w-7 h-7 bg-[#FF4D4F] hover:bg-rose-600 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
            <Trash2 size={13} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">User Groups</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">Home / User Management / Role & Permissions / User Groups</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-3.5 py-1.5 bg-[#006837] hover:bg-[#00522b] text-white text-xs font-semibold rounded-[4px] shadow-2xs transition-colors flex items-center gap-1.5"
        >
          <Plus size={14} /> Create User Group
        </button>
      </div>

      {/* Shared DataTable Component */}
      <DataTable
        data={userGroups}
        columns={columns}
        searchPlaceholder="Search user groups by name or description..."
      />

      {/* CREATE USER GROUP MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form onSubmit={handleCreateGroup} className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-md p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-50 text-[#006837] rounded-lg">
                  <Users size={18} />
                </div>
                <h2 className="text-base font-bold text-slate-900">Create User Group</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Group Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Executive Board"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#006837] text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Description</label>
                <textarea
                  placeholder="Describe group scope and responsibility..."
                  value={newGroupDesc}
                  onChange={(e) => setNewGroupDesc(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#006837] text-xs h-20"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Assigned Roles</label>
                <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto p-2 bg-slate-50 border border-slate-200 rounded-md">
                  {availableRoles.map((role) => (
                    <label key={role} className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-white text-slate-700 font-medium">
                      <input
                        type="checkbox"
                        checked={selectedRoles.includes(role)}
                        onChange={() => handleToggleRole(role)}
                        className="rounded border-slate-300 text-[#006837] focus:ring-[#006837]"
                      />
                      <span>{role}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t text-xs">
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-[#006837] hover:bg-[#00522b] text-white flex items-center gap-1.5">
                <Check size={14} /> Create Group
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

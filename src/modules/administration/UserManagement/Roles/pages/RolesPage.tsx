import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, Search, RotateCcw, SlidersHorizontal, CheckCircle2, Hexagon, 
  Users, Eye, Edit3, Trash2, ChevronLeft, ChevronRight 
} from 'lucide-react';

interface RoleItem {
  id: string;
  name: string;
  isSuperAdmin: boolean;
  operatorsCount: number;
  permissionsCount: number | 'all';
  createdDate: string;
}

export default function RolesPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'all' | 'hasOperators' | 'noOperators' | 'hasPermissions' | 'noPermissions'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const [roles, setRoles] = useState<RoleItem[]>([
    { id: '1', name: 'Super Admin', isSuperAdmin: true, operatorsCount: 1, permissionsCount: 'all', createdDate: 'May 24, 2026' },
    { id: '2', name: 'Inventory Manager', isSuperAdmin: false, operatorsCount: 3, permissionsCount: 16, createdDate: 'May 24, 2026' },
    { id: '3', name: 'Sales Agent', isSuperAdmin: false, operatorsCount: 4, permissionsCount: 6, createdDate: 'May 24, 2026' },
    { id: '4', name: 'Marketing Specialist', isSuperAdmin: false, operatorsCount: 3, permissionsCount: 7, createdDate: 'May 24, 2026' },
    { id: '5', name: 'Customer Support', isSuperAdmin: false, operatorsCount: 4, permissionsCount: 5, createdDate: 'May 24, 2026' },
    { id: '6', name: 'Technician', isSuperAdmin: false, operatorsCount: 5, permissionsCount: 4, createdDate: 'May 24, 2026' },
  ]);

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedIds.length === roles.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(roles.map(r => r.id));
    }
  };

  const toggleSelectOne = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const filteredRoles = roles.filter(r => {
    if (activeTab === 'hasOperators' && r.operatorsCount === 0) return false;
    if (activeTab === 'noOperators' && r.operatorsCount > 0) return false;
    if (activeTab === 'hasPermissions' && r.permissionsCount === 0) return false;
    if (activeTab === 'noPermissions' && r.permissionsCount !== 0) return false;
    return r.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      
      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">Roles & Permissions</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">
            Define access control tiers and assign system capabilities for your staff
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => navigate('/administration/access/roles/create')}
            className="px-3.5 py-1.5 bg-white border border-[#D1D5DB] text-[#374151] hover:bg-slate-50 text-xs font-semibold rounded-[4px] shadow-2xs transition-colors flex items-center gap-1.5"
          >
            <Plus size={14} /> Add Permission
          </button>
          <button
            onClick={() => navigate('/administration/access/roles/create')}
            className="px-3.5 py-1.5 bg-[#006837] hover:bg-[#00522b] text-white text-xs font-semibold rounded-[4px] shadow-2xs transition-colors flex items-center gap-1.5"
          >
            <Plus size={14} /> Add Role
          </button>
        </div>
      </div>

      {/* MAIN DATA TABLE CONTAINER */}
      <div className="bg-white rounded-[6px] border border-[#E5E7EB] shadow-2xs overflow-hidden">
        
        {/* TOP FILTER TABS */}
        <div className="px-5 border-b border-[#E5E7EB] flex items-center gap-6 text-[13px] overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`py-3.5 font-extrabold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'all'
                ? 'border-[#006837] text-[#006837]'
                : 'border-transparent text-[#4B5563] hover:text-[#111827]'
            }`}
          >
            All Roles <span className="px-2 py-0.5 bg-[#F3F4F6] text-[#4B5563] rounded-full text-[11px] font-bold">{roles.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('hasOperators')}
            className={`py-3.5 font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'hasOperators'
                ? 'border-[#006837] text-[#006837]'
                : 'border-transparent text-[#6B7280] hover:text-[#111827]'
            }`}
          >
            Has Operators <span className="px-2 py-0.5 bg-[#F3F4F6] text-[#6B7280] rounded-full text-[11px] font-bold">{roles.filter(r => r.operatorsCount > 0).length}</span>
          </button>

          <button
            onClick={() => setActiveTab('noOperators')}
            className={`py-3.5 font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'noOperators'
                ? 'border-[#006837] text-[#006837]'
                : 'border-transparent text-[#6B7280] hover:text-[#111827]'
            }`}
          >
            No Operators <span className="px-2 py-0.5 bg-[#F3F4F6] text-[#6B7280] rounded-full text-[11px] font-bold">{roles.filter(r => r.operatorsCount === 0).length}</span>
          </button>

          <button
            onClick={() => setActiveTab('hasPermissions')}
            className={`py-3.5 font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'hasPermissions'
                ? 'border-[#006837] text-[#006837]'
                : 'border-transparent text-[#6B7280] hover:text-[#111827]'
            }`}
          >
            Has Permissions <span className="px-2 py-0.5 bg-[#F3F4F6] text-[#6B7280] rounded-full text-[11px] font-bold">{roles.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('noPermissions')}
            className={`py-3.5 font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'noPermissions'
                ? 'border-[#006837] text-[#006837]'
                : 'border-transparent text-[#6B7280] hover:text-[#111827]'
            }`}
          >
            No Permissions <span className="px-2 py-0.5 bg-[#F3F4F6] text-[#6B7280] rounded-full text-[11px] font-bold">0</span>
          </button>
        </div>

        {/* TOOLBAR (SEARCH & FILTERS) */}
        <div className="py-3 px-5 border-b border-[#F3F4F6] flex flex-col sm:flex-row justify-between items-center gap-3 bg-white">
          <div className="relative w-full sm:w-[220px]">
            <Search size={14} className="absolute left-2.5 top-2.5 text-[#9CA3AF]" />
            <input
              type="text"
              placeholder="Search roles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-[34px] pl-8 pr-3 text-[12px] border border-[#D1D5DB] rounded-[4px] placeholder:text-[#9CA3AF] text-[#111827] focus:outline-hidden focus:border-[#9CA3AF] font-medium"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <button className="px-3 h-[34px] text-[12px] border border-[#D1D5DB] rounded-[4px] font-semibold text-[#374151] bg-white hover:bg-slate-50 flex items-center gap-1.5 shadow-2xs">
              <SlidersHorizontal size={13} /> Filters
            </button>
            <button className="w-[34px] h-[34px] border border-[#D1D5DB] rounded-[4px] text-[#4B5563] bg-white hover:bg-slate-50 flex items-center justify-center shadow-2xs">
              <RotateCcw size={13} />
            </button>
            <button className="w-[34px] h-[34px] border border-[#D1D5DB] rounded-[4px] text-[#4B5563] bg-white hover:bg-slate-50 flex items-center justify-center shadow-2xs">
              <SlidersHorizontal size={13} />
            </button>
          </div>
        </div>

        {/* DATA TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#F9FAFB] text-[#374151] font-bold border-b border-[#E5E7EB] text-[11.5px]">
                <th className="py-3 px-4 w-12 text-center">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === roles.length && roles.length > 0}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-[#D1D5DB] text-[#006837] focus:ring-0 accent-[#006837] cursor-pointer"
                  />
                </th>
                <th className="py-3 px-4">Role Name</th>
                <th className="py-3 px-4 text-center">Operators</th>
                <th className="py-3 px-4">Permissions</th>
                <th className="py-3 px-4">Created Date</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3F4F6] text-[#111827]">
              {filteredRoles.map((role) => {
                const isSelected = selectedIds.includes(role.id);
                return (
                  <tr key={role.id} className="hover:bg-[#F9FAFB] transition-colors h-[48px]">
                    <td className="py-2.5 px-4 text-center">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelectOne(role.id)}
                        className="w-4 h-4 rounded border-[#D1D5DB] text-[#006837] focus:ring-0 accent-[#006837] cursor-pointer"
                      />
                    </td>
                    <td className="py-2.5 px-4 font-bold text-[13px] text-[#111827]">
                      <div className="flex items-center gap-2">
                        {role.isSuperAdmin ? (
                          <CheckCircle2 size={16} className="text-[#006837]" />
                        ) : (
                          <Hexagon size={16} className="text-[#9CA3AF]" />
                        )}
                        <span>{role.name}</span>
                      </div>
                    </td>
                    <td className="py-2.5 px-4 text-center">
                      <span className="px-3 py-1 bg-[#F3F4F6] text-[#374151] font-extrabold rounded-full text-[11px] inline-flex items-center gap-1.5">
                        <Users size={12} className="text-[#9CA3AF]" /> {role.operatorsCount}
                      </span>
                    </td>
                    <td className="py-2.5 px-4">
                      {role.permissionsCount === 'all' ? (
                        <span className="px-3 py-1 bg-[#E6F4EA] text-[#006837] border border-[#CEEAD6] font-bold rounded-full text-[11px] inline-flex items-center gap-1.5">
                          <CheckCircle2 size={12} /> All System Permissions Granted
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-[#F3F4F6] text-[#374151] font-bold rounded-full text-[11px]">
                          {role.permissionsCount} permissions assigned
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-4 font-medium text-[12.5px] text-[#4B5563]">{role.createdDate}</td>
                    <td className="py-2.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {/* Eye Button */}
                        <button className="w-7 h-7 bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#4B5563] rounded-[4px] flex items-center justify-center transition-colors">
                          <Eye size={13} />
                        </button>
                        {/* Edit Button */}
                        <button className="w-7 h-7 bg-[#2563EB] hover:bg-blue-700 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
                          <Edit3 size={13} />
                        </button>
                        {/* Delete Button */}
                        <button className="w-7 h-7 bg-[#FF4D4F] hover:bg-rose-600 text-white rounded-[4px] flex items-center justify-center transition-colors shadow-2xs">
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* PAGINATION FOOTER */}
        <div className="py-3 px-5 bg-white border-t border-[#E5E7EB] flex flex-col sm:flex-row justify-end items-center gap-5 text-[12px] text-[#4B5563] font-medium">
          <div className="flex items-center gap-1.5">
            <select className="px-2 py-1 border border-[#D1D5DB] rounded-[4px] bg-white text-xs font-semibold focus:outline-hidden">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
          <span className="font-bold">1 - {filteredRoles.length} of {roles.length}</span>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 border border-[#D1D5DB] rounded-[4px] text-[#9CA3AF] hover:text-[#374151] flex items-center justify-center disabled:opacity-50" disabled>
              <ChevronLeft size={14} />
            </button>
            <button className="w-7 h-7 border border-[#D1D5DB] rounded-[4px] text-[#9CA3AF] hover:text-[#374151] flex items-center justify-center disabled:opacity-50" disabled>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

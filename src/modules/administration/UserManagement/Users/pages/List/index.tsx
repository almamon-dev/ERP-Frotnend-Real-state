import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Plus, Search, Filter, RotateCcw, SlidersHorizontal, Mail, Calendar, 
  Edit3, Trash2, ChevronLeft, ChevronRight, Key, Shield 
} from 'lucide-react';

import StatusBadge from '@/shared/components/ui/status-badge';

interface StaffMember {
  id: string;
  name: string;
  avatar: string;
  email: string;
  role: string;
  status: string;
  createdDate: string;
  systemTag: string;
}

export default function UserList() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'suspended'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const [staffList, setStaffList] = useState<StaffMember[]>([
    { id: '1', name: 'Imran Khan', avatar: 'IM', email: 'tech.imran@getitmoving.com', role: 'Technician', status: 'Active', createdDate: '5/24/2026', systemTag: 'System Auto • Joined' },
    { id: '2', name: 'Fatema Johura', avatar: 'FA', email: 'tech.fatema@getitmoving.com', role: 'Technician', status: 'Active', createdDate: '5/24/2026', systemTag: 'System Auto • Joined' },
    { id: '3', name: 'Rezaul Karim', avatar: 'RE', email: 'tech.reza@getitmoving.com', role: 'Technician', status: 'Active', createdDate: '5/24/2026', systemTag: 'System Auto • Joined' },
    { id: '4', name: 'Sayed Ali', avatar: 'SA', email: 'tech.sayed@getitmoving.com', role: 'Technician', status: 'Active', createdDate: '5/24/2026', systemTag: 'System Auto • Joined' },
    { id: '5', name: 'Milon Miah', avatar: 'MI', email: 'tech.milon@getitmoving.com', role: 'Technician', status: 'Active', createdDate: '5/24/2026', systemTag: 'System Auto • Joined' },
    { id: '6', name: 'Tania Noor', avatar: 'TA', email: 'support.tania@getitmoving.com', role: 'Customer Support', status: 'Active', createdDate: '5/24/2026', systemTag: 'System Auto • Joined' },
    { id: '7', name: 'Zamil Ahmed', avatar: 'ZA', email: 'support.zamil@getitmoving.com', role: 'Customer Support', status: 'Active', createdDate: '5/24/2026', systemTag: 'System Auto • Joined' },
    { id: '8', name: 'Lubna Maria', avatar: 'LU', email: 'support.lubna@getitmoving.com', role: 'Customer Support', status: 'Active', createdDate: '5/24/2026', systemTag: 'System Auto • Joined' },
    { id: '9', name: 'Sajal Khan', avatar: 'SA', email: 'marketing.sajal@getitmoving.com', role: 'Marketing Specialist', status: 'Active', createdDate: '5/24/2026', systemTag: 'System Auto • Joined' },
    { id: '10', name: 'Roky Hasan', avatar: 'RO', email: 'support.roky@getitmoving.com', role: 'Customer Support', status: 'Active', createdDate: '5/24/2026', systemTag: 'System Auto • Joined' },
  ]);

  const toggleSelectAll = () => {
    if (selectedIds.length === staffList.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(staffList.map(s => s.id));
    }
  };

  const toggleSelectOne = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this staff member?')) {
      setStaffList(staffList.filter(s => s.id !== id));
    }
  };

  const filteredStaff = staffList.filter(s => {
    if (activeTab === 'active' && s.status !== 'Active') return false;
    if (activeTab === 'suspended' && s.status !== 'Suspended') return false;
    return (
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-24 space-y-5 font-sans">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Staff Management</h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Configure administrator credentials and granular Spatie role mappings
          </p>
        </div>
        <Link to="/administration/access/users/create">
          <button className="px-3.5 py-1.5 bg-[#006837] hover:bg-[#00522b] text-white text-xs font-semibold rounded-md shadow-2xs transition-colors flex items-center gap-1.5">
            <Plus size={14} /> Add Staff Member
          </button>
        </Link>
      </div>

      {/* CARD CONTAINER */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-2xs overflow-hidden">
        
        {/* TABS */}
        <div className="px-5 border-b border-slate-200 flex items-center gap-6 text-xs overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`py-3 font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'all'
                ? 'border-[#006837] text-[#006837]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            All Staff <span className="px-1.5 py-0.2 bg-slate-100 text-slate-600 rounded-full text-[10px]">{staffList.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('active')}
            className={`py-3 font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'active'
                ? 'border-[#006837] text-[#006837]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Active <span className="px-1.5 py-0.2 bg-slate-100 text-slate-500 rounded-full text-[10px]">{staffList.filter(s => s.status === 'Active').length}</span>
          </button>

          <button
            onClick={() => setActiveTab('suspended')}
            className={`py-3 font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'suspended'
                ? 'border-[#006837] text-[#006837]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Suspended <span className="px-1.5 py-0.2 bg-slate-100 text-slate-500 rounded-full text-[10px]">{staffList.filter(s => s.status === 'Suspended').length}</span>
          </button>
        </div>

        {/* CONTROLS */}
        <div className="p-3.5 bg-white border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="relative w-full sm:w-72">
            <Search size={14} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search staff by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:outline-hidden focus:ring-1 focus:ring-slate-400 font-medium text-slate-800"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <button className="px-2.5 py-1.5 text-xs border border-slate-200 rounded-md font-semibold text-slate-700 bg-white hover:bg-slate-50 flex items-center gap-1.5">
              <SlidersHorizontal size={13} /> Filters
            </button>
            <button className="p-1.5 border border-slate-200 rounded-md text-slate-600 bg-white hover:bg-slate-50">
              <RotateCcw size={13} />
            </button>
            <button className="p-1.5 border border-slate-200 rounded-md text-slate-600 bg-white hover:bg-slate-50">
              <SlidersHorizontal size={13} />
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50/80 text-slate-700 font-bold border-b border-slate-200 text-[11px] uppercase tracking-wider">
                <th className="p-3.5 w-10 text-center">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === staffList.length && staffList.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded border-slate-300 text-[#006837] focus:ring-[#006837]"
                  />
                </th>
                <th className="p-3.5">Staff Member</th>
                <th className="p-3.5">Email Details</th>
                <th className="p-3.5">System Roles</th>
                <th className="p-3.5">Access State</th>
                <th className="p-3.5">Created Date</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {filteredStaff.map((staff) => {
                const isSelected = selectedIds.includes(staff.id);
                return (
                  <tr key={staff.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-3.5 text-center">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelectOne(staff.id)}
                        className="rounded border-slate-300 text-[#006837] focus:ring-[#006837]"
                      />
                    </td>
                    <td className="p-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-emerald-100/80 text-emerald-800 flex items-center justify-center font-bold text-[11px] shrink-0">
                          {staff.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-xs">{staff.name}</div>
                          <div className="text-[10px] text-slate-400 font-medium">{staff.systemTag}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3.5">
                      <div className="flex items-center gap-1.5 text-slate-600 font-medium text-xs">
                        <Mail size={13} className="text-slate-400" />
                        <span>{staff.email}</span>
                      </div>
                    </td>
                    <td className="p-3.5">
                      <span className="px-2.5 py-1 bg-blue-50 text-blue-700 font-semibold rounded text-[11px]">
                        {staff.role}
                      </span>
                    </td>
                    <td className="p-3.5">
                      <StatusBadge status={staff.status} />
                    </td>
                    <td className="p-3.5">
                      <div className="flex items-center gap-1.5 text-slate-500 font-medium text-xs">
                        <Calendar size={13} className="text-slate-400" />
                        <span>{staff.createdDate}</span>
                      </div>
                    </td>
                    <td className="p-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {/* Edit Button */}
                        <button
                          onClick={() => navigate(`/administration/access/users/${staff.id}/edit`)}
                          className="w-7 h-7 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center transition-colors"
                        >
                          <Edit3 size={13} />
                        </button>
                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(staff.id)}
                          className="w-7 h-7 bg-rose-500 hover:bg-rose-600 text-white rounded flex items-center justify-center transition-colors"
                        >
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
        <div className="p-3 bg-white border-t border-slate-200 flex flex-col sm:flex-row justify-end items-center gap-4 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <select className="px-2 py-1 border border-slate-200 rounded-md bg-white text-xs font-semibold focus:outline-hidden">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
          <span>1 - {filteredStaff.length} of {staffList.length}</span>
          <div className="flex items-center gap-1">
            <button className="p-1 border border-slate-200 rounded-md text-slate-400 hover:text-slate-700 disabled:opacity-50" disabled>
              <ChevronLeft size={14} />
            </button>
            <button className="p-1 border border-slate-200 rounded-md text-slate-400 hover:text-slate-700 disabled:opacity-50" disabled>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

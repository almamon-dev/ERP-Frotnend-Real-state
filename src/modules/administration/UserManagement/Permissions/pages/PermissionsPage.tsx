import React, { useState } from 'react';
import { Key, Plus, Search, Shield, Check, X, ShieldAlert, Sliders, CheckCircle2, Lock } from 'lucide-react';
import Button from '@/shared/components/ui/button';

interface PermissionGrant {
  id: string;
  key: string;
  label: string;
  module: string;
  risk: 'Low' | 'Medium' | 'High' | 'Critical';
  description: string;
  rolesAccess: Record<string, boolean>;
}

export default function PermissionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModule, setSelectedModule] = useState('All');
  const [activeTab, setActiveTab] = useState<'matrix' | 'list'>('matrix');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newKey, setNewKey] = useState('');
  const [newLabel, setNewLabel] = useState('');
  const [newModule, setNewModule] = useState('User Management');
  const [newRisk, setNewRisk] = useState<'Low' | 'Medium' | 'High' | 'Critical'>('Medium');

  const systemRoles = ['Super Admin', 'System Administrator', 'HR Manager', 'Finance Controller', 'Sales Executive', 'Auditor'];

  const [permissions, setPermissions] = useState<PermissionGrant[]>([
    { id: 'PRM-001', key: 'user.view', label: 'View User Directory', module: 'User Management', risk: 'Low', description: 'Read user list, profiles and assigned departments', rolesAccess: { 'Super Admin': true, 'System Administrator': true, 'HR Manager': true, 'Finance Controller': true, 'Sales Executive': true, 'Auditor': true } },
    { id: 'PRM-002', key: 'user.create', label: 'Create New Users', module: 'User Management', risk: 'Medium', description: 'Provision new user accounts and credentials', rolesAccess: { 'Super Admin': true, 'System Administrator': true, 'HR Manager': true, 'Finance Controller': false, 'Sales Executive': false, 'Auditor': false } },
    { id: 'PRM-003', key: 'user.edit', label: 'Edit User Accounts', module: 'User Management', risk: 'Medium', description: 'Modify user profiles, status and roles', rolesAccess: { 'Super Admin': true, 'System Administrator': true, 'HR Manager': true, 'Finance Controller': false, 'Sales Executive': false, 'Auditor': false } },
    { id: 'PRM-004', key: 'user.delete', label: 'Delete User Accounts', module: 'User Management', risk: 'High', description: 'Remove user access and purge account data', rolesAccess: { 'Super Admin': true, 'System Administrator': false, 'HR Manager': false, 'Finance Controller': false, 'Sales Executive': false, 'Auditor': false } },
    
    { id: 'PRM-005', key: 'role.assign', label: 'Assign System Roles', module: 'Role & Security', risk: 'Critical', description: 'Grant or revoke roles and permission matrix', rolesAccess: { 'Super Admin': true, 'System Administrator': true, 'HR Manager': false, 'Finance Controller': false, 'Sales Executive': false, 'Auditor': false } },
    { id: 'PRM-006', key: 'security.audit', label: 'View Security Audit Logs', module: 'Role & Security', risk: 'High', description: 'Inspect login attempts, IP logs and security alerts', rolesAccess: { 'Super Admin': true, 'System Administrator': true, 'HR Manager': false, 'Finance Controller': false, 'Sales Executive': false, 'Auditor': true } },

    { id: 'PRM-007', key: 'finance.view', label: 'View Financial Ledger', module: 'Finance & Payroll', risk: 'Low', description: 'Read income statements, invoices and ledgers', rolesAccess: { 'Super Admin': true, 'System Administrator': false, 'HR Manager': false, 'Finance Controller': true, 'Sales Executive': false, 'Auditor': true } },
    { id: 'PRM-008', key: 'finance.export', label: 'Export Tax & Financials', module: 'Finance & Payroll', risk: 'High', description: 'Download sensitive financial tax reports', rolesAccess: { 'Super Admin': true, 'System Administrator': false, 'HR Manager': false, 'Finance Controller': true, 'Sales Executive': false, 'Auditor': false } },

    { id: 'PRM-009', key: 'property.manage', label: 'Manage Real Estate Units', module: 'Master Data', risk: 'Medium', description: 'Add, update and price real estate property listings', rolesAccess: { 'Super Admin': true, 'System Administrator': true, 'HR Manager': false, 'Finance Controller': false, 'Sales Executive': true, 'Auditor': false } },
  ]);

  const modules = ['All', 'User Management', 'Role & Security', 'Finance & Payroll', 'Master Data'];

  const handleToggleAccess = (permId: string, roleName: string) => {
    setPermissions(prev => prev.map(p => {
      if (p.id === permId) {
        return {
          ...p,
          rolesAccess: {
            ...p.rolesAccess,
            [roleName]: !p.rolesAccess[roleName]
          }
        };
      }
      return p;
    }));
  };

  const handleCreatePermission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKey.trim() || !newLabel.trim()) return;

    const initialRoles: Record<string, boolean> = {};
    systemRoles.forEach(r => initialRoles[r] = r === 'Super Admin');

    const created: PermissionGrant = {
      id: `PRM-00${permissions.length + 1}`,
      key: newKey,
      label: newLabel,
      module: newModule,
      risk: newRisk,
      description: 'Custom defined system permission grant',
      rolesAccess: initialRoles,
    };

    setPermissions([...permissions, created]);
    setNewKey('');
    setNewLabel('');
    setIsModalOpen(false);
  };

  const filteredPermissions = permissions.filter(p =>
    (selectedModule === 'All' || p.module === selectedModule) &&
    (p.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
     p.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
     p.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-24 space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Access Control & Permission Matrix</h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Home / User Management / Role & Permissions / Permissions</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs flex items-center gap-2">
          <Plus size={16} /> Create Permission
        </Button>
      </div>

      {/* View Switcher & Search Control Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* Tab Switcher */}
          <div className="inline-flex rounded-lg border border-slate-200 p-1 bg-slate-50 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'matrix' ? 'bg-white text-indigo-600 shadow-2xs font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sliders size={14} /> Interactive Matrix
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'list' ? 'bg-white text-indigo-600 shadow-2xs font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Key size={14} /> List View
            </button>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-sm w-full">
            <Search size={14} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search permission key, label or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Module Filter Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
          {modules.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedModule(m)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                selectedModule === m
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* VIEW 1: INTERACTIVE PERMISSION MATRIX */}
      {activeTab === 'matrix' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200">
                  <th className="py-3.5 px-4 w-72">Permission Key / Label</th>
                  <th className="py-3.5 px-3">Risk Level</th>
                  {systemRoles.map((role) => (
                    <th key={role} className="py-3.5 px-3 text-center text-indigo-900 bg-slate-50/60 border-l border-slate-200/60 font-bold">
                      {role}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredPermissions.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-mono font-bold text-indigo-600 text-[11.5px]">{p.key}</div>
                      <div className="font-bold text-slate-900 text-xs mt-0.5">{p.label}</div>
                      <div className="text-[11px] text-slate-400 font-normal truncate max-w-xs">{p.description}</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 text-[10px] font-semibold rounded border ${
                        p.risk === 'Critical' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                        p.risk === 'High' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                        p.risk === 'Medium' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        'bg-slate-50 text-slate-600 border-slate-200'
                      }`}>
                        {p.risk}
                      </span>
                    </td>

                    {/* Interactive Role Access Checkboxes */}
                    {systemRoles.map((role) => {
                      const hasAccess = !!p.rolesAccess[role];
                      const isSuperAdmin = role === 'Super Admin';
                      return (
                        <td key={role} className="py-3 px-3 text-center border-l border-slate-100">
                          <button
                            disabled={isSuperAdmin}
                            onClick={() => handleToggleAccess(p.id, role)}
                            className={`w-6 h-6 rounded flex items-center justify-center mx-auto transition-all ${
                              hasAccess
                                ? 'bg-emerald-500 text-white shadow-2xs hover:bg-emerald-600'
                                : 'bg-slate-100 text-slate-300 hover:bg-slate-200 hover:text-slate-400'
                            } ${isSuperAdmin ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'}`}
                          >
                            {hasAccess ? <Check size={14} strokeWidth={2.5} /> : <X size={12} />}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
            <span>Showing {filteredPermissions.length} system grants</span>
            <span className="font-semibold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 size={13} /> Interactive Matrix Live Enabled
            </span>
          </div>
        </div>
      )}

      {/* VIEW 2: LIST VIEW */}
      {activeTab === 'list' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-slate-700 font-semibold border-b border-slate-200">
                <th className="py-3 px-4">Permission Key</th>
                <th className="py-3 px-4">Display Label</th>
                <th className="py-3 px-4">Module</th>
                <th className="py-3 px-4">Description</th>
                <th className="py-3 px-4">Risk Level</th>
                <th className="py-3 px-4 text-right">Granted Roles</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredPermissions.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-indigo-600">{p.key}</td>
                  <td className="py-3 px-4 font-bold text-slate-900">{p.label}</td>
                  <td className="py-3 px-4 font-semibold text-slate-700">{p.module}</td>
                  <td className="py-3 px-4 text-slate-500 max-w-xs truncate">{p.description}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 text-[10px] font-semibold rounded border ${
                      p.risk === 'Critical' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                      p.risk === 'High' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                      p.risk === 'Medium' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      'bg-slate-50 text-slate-600 border-slate-200'
                    }`}>
                      {p.risk} Risk
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className="font-bold text-indigo-700">
                      {Object.values(p.rolesAccess).filter(Boolean).length} / {systemRoles.length} Roles
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* CREATE PERMISSION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form onSubmit={handleCreatePermission} className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-md p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <Key size={18} className="text-indigo-600" />
                <h2 className="text-base font-bold text-slate-900">Create Permission Key</h2>
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
                <label className="block font-semibold text-slate-700 mb-1">Permission Key *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. report.export"
                  value={newKey}
                  onChange={(e) => setNewKey(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-hidden focus:ring-1 focus:ring-indigo-500 font-mono text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Display Label *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Export Custom Reports"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-hidden focus:ring-1 focus:ring-indigo-500 text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Target Module</label>
                <select
                  value={newModule}
                  onChange={(e) => setNewModule(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md font-semibold text-slate-800 text-xs focus:outline-hidden"
                >
                  <option value="User Management">User Management</option>
                  <option value="Role & Security">Role & Security</option>
                  <option value="Finance & Payroll">Finance & Payroll</option>
                  <option value="Master Data">Master Data</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Risk Level</label>
                <select
                  value={newRisk}
                  onChange={(e: any) => setNewRisk(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md font-semibold text-slate-800 text-xs focus:outline-hidden"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t text-xs">
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Create Permission
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

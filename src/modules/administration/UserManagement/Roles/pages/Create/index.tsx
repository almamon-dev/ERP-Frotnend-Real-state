import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hexagon, Shield, CheckCircle2, ArrowLeft } from 'lucide-react';
import Button from '@/shared/components/ui/button';

interface PermissionModule {
  name: string;
  permissions: { id: string; label: string }[];
}

export default function CreateRolePage() {
  const navigate = useNavigate();
  const [roleName, setRoleName] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState<Record<string, boolean>>({});

  const modulesList: PermissionModule[] = [
    {
      name: 'Products',
      permissions: [
        { id: 'products.view', label: 'View products' },
        { id: 'products.create', label: 'Create products' },
        { id: 'products.edit', label: 'Edit products' },
        { id: 'products.delete', label: 'Delete products' },
      ],
    },
    {
      name: 'Categories',
      permissions: [
        { id: 'categories.view', label: 'View categories' },
        { id: 'categories.create', label: 'Create categories' },
        { id: 'categories.edit', label: 'Edit categories' },
        { id: 'categories.delete', label: 'Delete categories' },
      ],
    },
    {
      name: 'Brands',
      permissions: [
        { id: 'brands.view', label: 'View brands' },
        { id: 'brands.create', label: 'Create brands' },
        { id: 'brands.edit', label: 'Edit brands' },
        { id: 'brands.delete', label: 'Delete brands' },
      ],
    },
    {
      name: 'Orders',
      permissions: [
        { id: 'orders.view', label: 'View orders' },
        { id: 'orders.edit', label: 'Edit orders' },
        { id: 'orders.process', label: 'Process orders' },
        { id: 'orders.delete', label: 'Delete orders' },
      ],
    },
    {
      name: 'Suppliers',
      permissions: [
        { id: 'suppliers.view', label: 'View suppliers' },
        { id: 'suppliers.create', label: 'Create suppliers' },
        { id: 'suppliers.edit', label: 'Edit suppliers' },
        { id: 'suppliers.delete', label: 'Delete suppliers' },
      ],
    },
    {
      name: 'Warehouses',
      permissions: [
        { id: 'warehouses.view', label: 'View warehouses' },
        { id: 'warehouses.create', label: 'Create warehouses' },
        { id: 'warehouses.edit', label: 'Edit warehouses' },
        { id: 'warehouses.delete', label: 'Delete warehouses' },
      ],
    },
    {
      name: 'Reviews',
      permissions: [
        { id: 'reviews.view', label: 'View reviews' },
        { id: 'reviews.edit', label: 'Edit reviews' },
        { id: 'reviews.delete', label: 'Delete reviews' },
      ],
    },
    {
      name: 'Questions',
      permissions: [
        { id: 'questions.view', label: 'View questions' },
        { id: 'questions.reply', label: 'Reply questions' },
        { id: 'questions.delete', label: 'Delete questions' },
      ],
    },
    {
      name: 'Marketing',
      permissions: [
        { id: 'marketing.view', label: 'View marketing' },
        { id: 'marketing.create', label: 'Create marketing' },
        { id: 'marketing.edit', label: 'Edit marketing' },
      ],
    },
    {
      name: 'Settings',
      permissions: [
        { id: 'settings.view', label: 'View settings' },
        { id: 'settings.edit', label: 'Edit settings' },
      ],
    },
    {
      name: 'Users',
      permissions: [
        { id: 'users.view', label: 'View users' },
        { id: 'users.create', label: 'Create users' },
        { id: 'users.edit', label: 'Edit users' },
      ],
    },
    {
      name: 'Roles',
      permissions: [
        { id: 'roles.view', label: 'View roles' },
        { id: 'roles.create', label: 'Create roles' },
        { id: 'roles.edit', label: 'Edit roles' },
      ],
    },
  ];

  const handleToggle = (id: string) => {
    setSelectedPermissions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectModuleAll = (module: PermissionModule) => {
    const allModuleChecked = module.permissions.every((p) => selectedPermissions[p.id]);
    const updated = { ...selectedPermissions };
    module.permissions.forEach((p) => {
      updated[p.id] = !allModuleChecked;
    });
    setSelectedPermissions(updated);
  };

  const handleCheckAll = () => {
    const updated: Record<string, boolean> = {};
    modulesList.forEach((m) => {
      m.permissions.forEach((p) => {
        updated[p.id] = true;
      });
    });
    setSelectedPermissions(updated);
  };

  const handleClearAll = () => {
    setSelectedPermissions({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roleName.trim()) {
      alert('Please enter a Role Name');
      return;
    }
    alert(`System Role "${roleName}" created successfully!`);
    navigate('/administration/access/roles');
  };

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-24 space-y-6 font-sans">
      
      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Create System Role</h1>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-0.5 ml-6">
            Add a new operational tier and assign granular permissions
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" type="button" onClick={() => navigate(-1)} className="text-xs">
            Cancel
          </Button>
          <Button type="button" onClick={handleSubmit} className="bg-[#006837] hover:bg-[#00522b] text-white text-xs">
            Save System Role
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* CARD 1: ROLE DETAILS */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-2xs p-5 space-y-4">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
            <Hexagon size={16} className="text-[#006837]" />
            <span>Role Details</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Role Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              placeholder="e.g. Inventory Manager, Support Agent"
              className="w-full px-3.5 py-2.5 bg-white border border-emerald-600/80 rounded-md focus:outline-hidden focus:ring-1 focus:ring-emerald-600 text-xs font-medium text-slate-800"
            />
          </div>
        </div>

        {/* CARD 2: SYSTEM PERMISSIONS GRID */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-2xs p-5 space-y-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 pb-3">
            <div>
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <Hexagon size={16} className="text-[#006837]" />
                <span>System Permissions Grid</span>
              </div>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                Grant module level operational privileges to this access tier.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCheckAll}
                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors"
              >
                Check All
              </button>
              <button
                type="button"
                onClick={handleClearAll}
                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>

          {/* PERMISSIONS CARDS GRID (4 COLUMNS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modulesList.map((module) => {
              const allChecked = module.permissions.every((p) => selectedPermissions[p.id]);
              return (
                <div key={module.name} className="p-3.5 bg-white rounded-lg border border-slate-200/90 shadow-2xs space-y-3">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-1.5 font-bold text-xs text-slate-800">
                      <Hexagon size={14} className="text-slate-400" />
                      <span>{module.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectModuleAll(module)}
                      className="text-[11px] font-bold text-[#006837] hover:underline"
                    >
                      Select All
                    </button>
                  </div>

                  <div className="space-y-2 text-xs">
                    {module.permissions.map((p) => (
                      <label key={p.id} className="flex items-center gap-2 cursor-pointer text-slate-700 font-medium hover:text-slate-900">
                        <input
                          type="checkbox"
                          checked={!!selectedPermissions[p.id]}
                          onChange={() => handleToggle(p.id)}
                          className="rounded border-slate-300 text-[#006837] focus:ring-[#006837]"
                        />
                        <span>{p.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
}

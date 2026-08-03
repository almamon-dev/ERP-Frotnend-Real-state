import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';

export default function UserEdit() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    username: 'johndoe',
    email: 'john.doe@example.com',
    phone: '+880 1711-123456',
    department: 'IT Department',
    branch: 'Head Office',
    designation: 'System Administrator',
    status: 'Active',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('User updated successfully!');
    navigate('/administration/access/users');
  };

  return (
    <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24 space-y-6">
      <div>
        <h1 className="text-[22px] font-bold text-slate-900">Edit User</h1>
        <p className="text-xs text-slate-500 mt-0.5">Home / User Management / Users / Edit</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 space-y-6">
        <h2 className="text-base font-bold text-slate-800 border-b pb-3">User Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name *" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
          <Input label="Username *" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
          <Input label="Email *" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <Input label="Phone Number *" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />

          <Select
            label="Department *"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            options={[
              { label: 'IT Department', value: 'IT Department' },
              { label: 'HR Department', value: 'HR Department' },
              { label: 'Sales Department', value: 'Sales Department' },
              { label: 'Finance Department', value: 'Finance Department' },
            ]}
          />

          <Select
            label="Branch *"
            value={formData.branch}
            onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
            options={[
              { label: 'Head Office', value: 'Head Office' },
              { label: 'Branch Office', value: 'Branch Office' },
            ]}
          />

          <Select
            label="Designation"
            value={formData.designation}
            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
            options={[
              { label: 'System Administrator', value: 'System Administrator' },
              { label: 'IT Manager', value: 'IT Manager' },
              { label: 'Executive', value: 'Executive' },
            ]}
          />

          <Select
            label="Status *"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            options={[
              { label: 'Active', value: 'Active' },
              { label: 'Inactive', value: 'Inactive' },
            ]}
          />
        </div>

        <div className="flex justify-end items-center gap-3 pt-4 border-t">
          <Button type="button" variant="outline" onClick={() => navigate('/administration/access/users')}>
            Cancel
          </Button>
          <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
            Update User
          </Button>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';

export default function UserCreate() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    department: '',
    branch: '',
    designation: '',
    status: 'Active',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('User created successfully!');
    navigate('/administration/access/users');
  };

  return (
    <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24 space-y-6">
      <div>
        <h1 className="text-[22px] font-bold text-slate-900">Create User</h1>
        <p className="text-xs text-slate-500 mt-0.5">Home / User Management / Users / Create</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 space-y-6">
        <h2 className="text-base font-bold text-slate-800 border-b pb-3">User Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name *" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} placeholder="Enter full name" />
          <Input label="Username *" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} placeholder="Enter username" />
          <Input label="Email *" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Enter email address" />
          <Input label="Phone Number *" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Enter phone number" />

          <Select
            label="Department *"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            options={[
              { label: 'Select department', value: '' },
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
              { label: 'Select branch', value: '' },
              { label: 'Head Office', value: 'Head Office' },
              { label: 'Branch Office', value: 'Branch Office' },
            ]}
          />

          <Select
            label="Designation"
            value={formData.designation}
            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
            options={[
              { label: 'Select designation', value: '' },
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
              { label: 'Select status', value: '' },
              { label: 'Active', value: 'Active' },
              { label: 'Inactive', value: 'Inactive' },
            ]}
          />

          <Input label="Password *" type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Enter password" />
          <Input label="Confirm Password *" type="password" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} placeholder="Confirm password" />
        </div>

        <div className="flex justify-end items-center gap-3 pt-4 border-t">
          <Button type="button" variant="outline" onClick={() => navigate('/administration/access/users')}>
            Cancel
          </Button>
          <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
            Save User
          </Button>
        </div>
      </form>
    </div>
  );
}

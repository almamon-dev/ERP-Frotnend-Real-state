import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Mail, Phone, Edit, RefreshCw, CheckCircle2 } from 'lucide-react';
import Button from '@/shared/components/ui/button';

export default function UserView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Profile');

  const user = {
    name: 'John Doe',
    role: 'System Administrator',
    status: 'Active',
    email: 'john.doe@example.com',
    phone: '+880 1711-123456',
    username: 'johndoe',
    dob: '15 Jan 1990',
    gender: 'Male',
    department: 'IT Department',
    branch: 'Head Office',
    designation: 'System Administrator',
    employeeId: 'EMP-0001',
    joinedDate: '01 Jan 2024',
  };

  const tabs = ['Profile', 'Personal Info', 'Organization Info', 'Login Info', 'Activity'];

  return (
    <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24 space-y-6">
      <div>
        <h1 className="text-[22px] font-bold text-slate-900">View User</h1>
        <p className="text-xs text-slate-500 mt-0.5">Home / User Management / Users / View</p>
      </div>

      {/* Header Profile Card */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl border border-indigo-200">
            JD
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-800">{user.name}</h2>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 size={12} /> {user.status}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">{user.role}</p>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1"><Mail size={13} /> {user.email}</span>
              <span className="flex items-center gap-1"><Phone size={13} /> {user.phone}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <Button onClick={() => navigate(`/administration/access/users/${id || '1'}/edit`)} className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1.5 text-xs">
            <Edit size={14} /> Edit User
          </Button>
          <Button variant="outline" className="text-xs flex items-center gap-1.5" onClick={() => alert('Password reset link sent!')}>
            <RefreshCw size={14} /> Reset Password
          </Button>
        </div>
      </div>

      {/* Main Tab Content Card */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        {/* Navigation Tabs */}
        <div className="flex items-center border-b border-slate-200 px-6 gap-6 bg-slate-50/50">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3.5 text-xs font-semibold border-b-2 transition-colors ${
                activeTab === tab ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Profile Info Grid */}
        <div className="p-6 space-y-4">
          <h3 className="text-sm font-bold text-slate-800">Profile Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-medium">Username</span>
              <span className="font-semibold text-slate-800">{user.username}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-medium">Department</span>
              <span className="font-semibold text-slate-800">{user.department}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-medium">Email</span>
              <span className="font-semibold text-slate-800">{user.email}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-medium">Branch</span>
              <span className="font-semibold text-slate-800">{user.branch}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-medium">Phone Number</span>
              <span className="font-semibold text-slate-800">{user.phone}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-medium">Designation</span>
              <span className="font-semibold text-slate-800">{user.designation}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-medium">Date of Birth</span>
              <span className="font-semibold text-slate-800">{user.dob}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-medium">Employee ID</span>
              <span className="font-semibold text-slate-800">{user.employeeId}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-medium">Gender</span>
              <span className="font-semibold text-slate-800">{user.gender}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-medium">Joined Date</span>
              <span className="font-semibold text-slate-800">{user.joinedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

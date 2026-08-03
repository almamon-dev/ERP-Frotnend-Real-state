import React, { useState } from 'react';
import { 
  FileText, Activity, Clock, Building, UserCheck, ShieldAlert, Download, Printer, 
  Search, Filter, RefreshCw, BarChart3, PieChart, Layers, ArrowUpRight, CheckCircle2, ChevronRight 
} from 'lucide-react';
import Button from '@/shared/components/ui/button';

interface ReportTemplate {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  bg: string;
  category: string;
  recordsCount: number;
}

export default function UserReports() {
  const [selectedReportId, setSelectedReportId] = useState<string>('summary');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('Last 30 Days');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const reportTemplates: ReportTemplate[] = [
    {
      id: 'summary',
      title: 'User Summary Report',
      description: 'Overview of all users, assigned roles, and department allocations',
      icon: FileText,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      category: 'General',
      recordsCount: 1248,
    },
    {
      id: 'activity',
      title: 'User Activity Report',
      description: 'Audit logs of user interactions, logins, and system actions',
      icon: Activity,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      category: 'Security',
      recordsCount: 3420,
    },
    {
      id: 'history',
      title: 'Login Audit Trail Report',
      description: 'Audit trail of user login attempts, IPs and sessions',
      icon: Clock,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      category: 'Audit',
      recordsCount: 890,
    },
    {
      id: 'department',
      title: 'Department Analytics Report',
      description: 'Breakdown of active user accounts grouped by department',
      icon: Building,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      category: 'Organization',
      recordsCount: 1248,
    },
    {
      id: 'status',
      title: 'User Status Distribution',
      description: 'Status analysis of active, inactive, pending, and suspended users',
      icon: UserCheck,
      color: 'text-teal-600',
      bg: 'bg-teal-50',
      category: 'General',
      recordsCount: 1248,
    },
    {
      id: 'locked',
      title: 'Security & Lockout Report',
      description: 'Security audit report of locked, expired or suspended accounts',
      icon: ShieldAlert,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      category: 'Security',
      recordsCount: 13,
    },
  ];

  const categories = ['All', 'General', 'Security', 'Audit', 'Organization'];

  const selectedReport = reportTemplates.find(r => r.id === selectedReportId) || reportTemplates[0];

  const sampleReportData = [
    { id: 'USR-001', name: 'John Doe', email: 'john.doe@enterprise.com', department: 'IT Department', role: 'System Admin', status: 'Active', date: '2024-05-10 10:30 AM' },
    { id: 'USR-002', name: 'Jane Smith', email: 'jane.smith@enterprise.com', department: 'HR Department', role: 'HR Manager', status: 'Active', date: '2024-05-10 10:28 AM' },
    { id: 'USR-003', name: 'Robert Brown', email: 'robert.b@enterprise.com', department: 'Sales Department', role: 'Sales Lead', status: 'Active', date: '2024-05-10 10:25 AM' },
    { id: 'USR-004', name: 'Emily Davis', email: 'emily.d@enterprise.com', department: 'Finance Department', role: 'Accountant', status: 'Inactive', date: '2024-05-09 04:15 PM' },
    { id: 'USR-005', name: 'Michael Wilson', email: 'michael.w@enterprise.com', department: 'IT Department', role: 'Developer', status: 'Pending', date: '2024-05-08 11:20 AM' },
    { id: 'USR-006', name: 'Sarah Jenkins', email: 'sarah.j@enterprise.com', department: 'Marketing', role: 'Specialist', status: 'Suspended', date: '2024-05-07 09:45 AM' },
  ];

  const filteredData = sampleReportData.filter(d =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTemplates = reportTemplates.filter(t => 
    selectedCategory === 'All' || t.category === selectedCategory
  );

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-24 space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Enterprise Reports Center</h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Home / User Management / Reports</p>
        </div>

        {/* Global Export & Print Tools */}
        <div className="flex items-center gap-2">
          <Button variant="outline" className="text-xs text-slate-700 bg-white border-slate-200 hover:bg-slate-50 flex items-center gap-1.5 shadow-2xs">
            <Printer size={14} /> Print
          </Button>
          <Button variant="outline" className="text-xs text-slate-700 bg-white border-slate-200 hover:bg-slate-50 flex items-center gap-1.5 shadow-2xs">
            <Download size={14} /> Export CSV
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs flex items-center gap-1.5 shadow-sm">
            <Download size={14} /> Export PDF
          </Button>
        </div>
      </div>

      {/* MASTER-DETAIL SPLIT SCREEN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT PANEL: Report Templates Catalog (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <Layers size={18} className="text-indigo-600" /> Report Templates
              </h2>
              <span className="text-[11px] font-semibold text-slate-400">{filteredTemplates.length} Available</span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Template List */}
            <div className="space-y-2 pt-1">
              {filteredTemplates.map((t) => {
                const Icon = t.icon;
                const isSelected = t.id === selectedReportId;
                return (
                  <div
                    key={t.id}
                    onClick={() => setSelectedReportId(t.id)}
                    className={`p-3.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-indigo-50/70 border-indigo-300 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-2.5 rounded-lg ${t.bg} flex-shrink-0`}>
                        <Icon size={18} className={t.color} />
                      </div>
                      <div className="truncate">
                        <div className="flex items-center gap-1.5">
                          <h3 className={`text-xs font-bold truncate ${isSelected ? 'text-indigo-900' : 'text-slate-800'}`}>
                            {t.title}
                          </h3>
                        </div>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5 font-normal">{t.description}</p>
                      </div>
                    </div>

                    <ChevronRight size={16} className={`flex-shrink-0 ${isSelected ? 'text-indigo-600' : 'text-slate-300'}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Live Interactive Report Viewer (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col min-h-[680px]">
            
            {/* Viewer Control Bar */}
            <div className="p-4 bg-slate-50/90 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="flex items-center gap-2.5">
                <div className={`p-2 rounded-lg ${selectedReport.bg}`}>
                  <selectedReport.icon size={18} className={selectedReport.color} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{selectedReport.title}</h3>
                  <span className="text-[11px] text-slate-400 font-medium">Category: {selectedReport.category}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Search in preview */}
                <div className="relative flex-1 sm:w-48">
                  <Search size={13} className="absolute left-2.5 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search in report..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-7 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                {/* Date Selector */}
                <div className="flex items-center gap-1.5 text-xs">
                  <Filter size={13} className="text-slate-400" />
                  <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="px-2 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-700 focus:outline-hidden"
                  >
                    <option>Last 30 Days</option>
                    <option>This Month</option>
                    <option>Last 6 Months</option>
                    <option>This Year</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Document Stage */}
            <div className="p-6 space-y-6 flex-1 bg-white">
              
              {/* Report Header Document Banner */}
              <div className="p-5 rounded-lg border border-slate-200 bg-slate-50/50 space-y-4">
                <div className="flex justify-between items-start border-b border-slate-200/80 pb-3">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{selectedReport.title}</h2>
                    <p className="text-xs text-slate-500">{selectedReport.description}</p>
                  </div>
                  <div className="text-right text-xs text-slate-500 space-y-0.5">
                    <div><span className="font-semibold text-slate-700">Period:</span> {dateFilter}</div>
                    <div><span className="font-semibold text-slate-700">Generated:</span> {new Date().toLocaleDateString()}</div>
                  </div>
                </div>

                {/* 4 Summary Stat Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-md border border-slate-200 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Items</span>
                    <div className="text-lg font-bold text-slate-900 mt-0.5">{selectedReport.recordsCount}</div>
                  </div>
                  <div className="p-3 bg-emerald-50/60 rounded-md border border-emerald-100">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Active Rate</span>
                    <div className="text-lg font-bold text-emerald-700 mt-0.5">82.1%</div>
                  </div>
                  <div className="p-3 bg-amber-50/60 rounded-md border border-amber-100">
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Exceptions</span>
                    <div className="text-lg font-bold text-amber-700 mt-0.5">13 Accounts</div>
                  </div>
                  <div className="p-3 bg-indigo-50/60 rounded-md border border-indigo-100">
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">Audit Status</span>
                    <div className="text-lg font-bold text-indigo-700 mt-0.5">Verified</div>
                  </div>
                </div>
              </div>

              {/* Data Table Document View */}
              <div className="rounded-lg border border-slate-200 shadow-2xs overflow-hidden">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="py-3 px-4">User ID</th>
                      <th className="py-3 px-4">Name</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">Department</th>
                      <th className="py-3 px-4">Role</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {filteredData.map((row) => (
                      <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-2.5 px-4 font-mono font-semibold text-slate-900">{row.id}</td>
                        <td className="py-2.5 px-4 font-bold text-slate-900">{row.name}</td>
                        <td className="py-2.5 px-4 text-slate-500">{row.email}</td>
                        <td className="py-2.5 px-4 text-slate-700">{row.department}</td>
                        <td className="py-2.5 px-4 text-slate-600">{row.role}</td>
                        <td className="py-2.5 px-4">
                          <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${
                            row.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' :
                            row.status === 'Inactive' ? 'bg-amber-50 text-amber-600 border border-amber-200' :
                            row.status === 'Pending' ? 'bg-indigo-50 text-indigo-600 border border-indigo-200' :
                            'bg-rose-50 text-rose-600 border border-rose-200'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-right font-mono text-[11px] text-slate-400">{row.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Viewer Footer Status */}
            <div className="p-4 border-t border-slate-200 bg-slate-50/90 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-600" /> Showing {filteredData.length} live records for {selectedReport.title}
              </span>
              <span className="font-semibold text-indigo-600">Enterprise Audit Logged</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

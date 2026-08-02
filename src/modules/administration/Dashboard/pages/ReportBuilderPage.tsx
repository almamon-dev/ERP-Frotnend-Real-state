import React, { useState } from 'react';
import {
  Save,
  Play,
  Search,
  Plus,
} from 'lucide-react';
import Select from '@/shared/components/ui/select';
import DatePicker from '@/shared/components/ui/date-picker';
import Input from '@/shared/components/ui/input';

export default function ReportBuilderPage() {
  const [selectedModule, setSelectedModule] = useState('sales');
  const [startDate, setStartDate] = useState('2025-05-01');
  const [endDate, setEndDate] = useState('2025-05-31');
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedProject, setSelectedProject] = useState('all');
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState('paid');

  const modules = [
    { id: 'sales', name: 'Sales' },
    { id: 'projects', name: 'Projects' },
    { id: 'properties', name: 'Properties' },
    { id: 'customers', name: 'Customers' },
    { id: 'finance', name: 'Finance' },
    { id: 'employees', name: 'Employees' },
    { id: 'inventory', name: 'Inventory' },
    { id: 'bookings', name: 'Bookings' },
    { id: 'collections', name: 'Collections' },
    { id: 'leads', name: 'Leads & CRM' },
    { id: 'vendors', name: 'Vendors & Suppliers' },
    { id: 'payroll', name: 'Payroll & Compensation' },
  ];

  const fields = [
    { id: 'date', name: 'Date', checked: true },
    { id: 'inv', name: 'Invoice Number', checked: true },
    { id: 'cust', name: 'Customer Name', checked: true },
    { id: 'proj', name: 'Project Name', checked: false },
    { id: 'amt', name: 'Amount', checked: true },
    { id: 'status', name: 'Payment Status', checked: true },
    { id: 'method', name: 'Payment Method', checked: false },
    { id: 'sperson', name: 'Sales Person', checked: false },
    { id: 'disc', name: 'Discount', checked: false },
    { id: 'tax', name: 'Tax Amount', checked: false },
    { id: 'notes', name: 'Notes & Remarks', checked: false },
    { id: 'branch', name: 'Branch Name', checked: false },
    { id: 'created_by', name: 'Created By', checked: false },
  ];

  const previewRows = [
    { date: 'May 31, 2025', inv: 'INV-2025-001', cust: 'John Doe', amt: '৳ 75,000', status: 'Paid' },
    { date: 'May 31, 2025', inv: 'INV-2025-002', cust: 'Jane Smith', amt: '৳ 98,500', status: 'Paid' },
    { date: 'May 30, 2025', inv: 'INV-2025-003', cust: 'Robert Brown', amt: '৳ 60,000', status: 'Paid' },
    { date: 'May 30, 2025', inv: 'INV-2025-004', cust: 'Emily Davis', amt: '৳ 75,000', status: 'Paid' },
    { date: 'May 29, 2025', inv: 'INV-2025-005', cust: 'Michael Lee', amt: '৳ 1,20,000', status: 'Partial' },
    { date: 'May 28, 2025', inv: 'INV-2025-006', cust: 'Sarah Connor', amt: '৳ 45,000', status: 'Paid' },
    { date: 'May 27, 2025', inv: 'INV-2025-007', cust: 'David Warner', amt: '৳ 1,50,000', status: 'Due' },
    { date: 'May 26, 2025', inv: 'INV-2025-008', cust: 'Steve Rogers', amt: '৳ 85,000', status: 'Paid' },
  ];

  return (
    <div className="w-full p-4 md:p-6 bg-[#F8FAFC] space-y-4 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-[11.5px] text-slate-400 font-medium mb-1">
            <span>Reports</span>
            <span>&gt;</span>
            <span className="text-slate-600 font-semibold">Report Builder</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Report Builder</h1>
          <p className="text-[12.5px] text-slate-500 font-normal mt-0.5">
            Build custom reports with drag &amp; drop interface
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button className="px-3.5 py-1.5 rounded-md border border-slate-300 bg-white text-slate-700 text-[12px] font-semibold hover:bg-slate-50 transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer">
            <Save size={14} />
            <span>Save</span>
          </button>
          <button className="px-3.5 py-1.5 rounded-md border border-slate-300 bg-white text-slate-700 text-[12px] font-semibold hover:bg-slate-50 transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer">
            <span>Save As</span>
          </button>
          <button className="px-3.5 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-[12px] font-semibold transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer">
            <Play size={14} />
            <span>Run Report</span>
          </button>
        </div>
      </div>

      {/* 4 Steps Grid: Cards with Auto Height + Max Height + Internal Scrolling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
        {/* Step 1: Select Module Card */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-auto max-h-[520px]">
          <h3 className="text-[13px] font-bold text-slate-900 mb-3 shrink-0">1. Select Module</h3>
          <div className="relative mb-3 shrink-0">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 z-10" />
            <Input
              type="text"
              placeholder="Search modules..."
              className="pl-7 text-[11.5px] h-[30px] bg-slate-50 border-slate-200"
            />
          </div>
          <div className="space-y-1 overflow-y-auto custom-scrollbar pr-1 flex-1">
            {modules.map((m) => (
              <label
                key={m.id}
                onClick={() => setSelectedModule(m.id)}
                className={`flex items-center justify-between p-2 rounded text-[12px] cursor-pointer transition-colors ${
                  selectedModule === m.id ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200' : 'hover:bg-slate-50 text-slate-700 font-medium'
                }`}
              >
                <span>{m.name}</span>
                <input
                  type="radio"
                  name="module"
                  checked={selectedModule === m.id}
                  onChange={() => setSelectedModule(m.id)}
                  className="accent-indigo-600 cursor-pointer"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Step 2: Select Fields Card */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-auto max-h-[520px]">
          <h3 className="text-[13px] font-bold text-slate-900 mb-3 shrink-0">2. Select Fields</h3>
          <div className="space-y-1.5 overflow-y-auto custom-scrollbar pr-1 flex-1">
            {fields.map((f) => (
              <label key={f.id} className="flex items-center gap-2 p-1.5 rounded hover:bg-slate-50 text-[12px] text-slate-700 cursor-pointer">
                <input type="checkbox" defaultChecked={f.checked} className="rounded accent-indigo-600 cursor-pointer" />
                <span className="font-medium">{f.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Step 3: Filters Card */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-auto max-h-[520px]">
          <h3 className="text-[13px] font-bold text-slate-900 mb-3 shrink-0">3. Filters</h3>
          <div className="space-y-3 overflow-y-auto custom-scrollbar pr-1 flex-1">
            <div>
              <label className="text-[11px] font-medium text-slate-500 block mb-1">Date Range</label>
              <div className="flex items-center gap-1">
                <div className="w-1/2">
                  <DatePicker value={startDate} onChange={setStartDate} size="sm" />
                </div>
                <div className="w-1/2">
                  <DatePicker value={endDate} onChange={setEndDate} size="sm" />
                </div>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-medium text-slate-500 block mb-1">Branch</label>
              <Select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                options={[{ id: 'all', name: 'All Branches' }]}
                size="sm"
              />
            </div>

            <div>
              <label className="text-[11px] font-medium text-slate-500 block mb-1">Project</label>
              <Select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                options={[{ id: 'all', name: 'All Projects' }]}
                size="sm"
              />
            </div>

            <div>
              <label className="text-[11px] font-medium text-slate-500 block mb-1">Payment Status</label>
              <Select
                value={selectedPaymentStatus}
                onChange={(e) => setSelectedPaymentStatus(e.target.value)}
                options={[{ id: 'paid', name: 'Paid' }, { id: 'due', name: 'Due' }]}
                size="sm"
              />
            </div>

            <button className="text-[11.5px] font-semibold text-indigo-600 hover:underline flex items-center gap-1 cursor-pointer pt-1">
              <Plus size={13} />
              <span>Add Filter</span>
            </button>
          </div>
        </div>

        {/* Step 4: Preview Card */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-auto max-h-[520px]">
          <h3 className="text-[13px] font-bold text-slate-900 mb-2 shrink-0">4. Preview</h3>

          {/* Stats Header */}
          <div className="grid grid-cols-3 gap-1.5 p-2 bg-slate-50 rounded border border-slate-100 text-center mb-3 shrink-0">
            <div>
              <span className="text-[9.5px] text-slate-400 block">Records</span>
              <span className="text-[12px] font-bold text-slate-800">156</span>
            </div>
            <div>
              <span className="text-[9.5px] text-slate-400 block">Total Amount</span>
              <span className="text-[12px] font-bold text-slate-800">৳ 12,45k</span>
            </div>
            <div>
              <span className="text-[9.5px] text-slate-400 block">Paid</span>
              <span className="text-[12px] font-bold text-emerald-600">৳ 9,85k</span>
            </div>
          </div>

          {/* Table Preview */}
          <div className="overflow-x-auto overflow-y-auto custom-scrollbar flex-1">
            <table className="w-full text-left text-[10.5px]">
              <thead className="sticky top-0 bg-white z-10 shadow-2xs">
                <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                  <th className="pb-1.5">Date</th>
                  <th className="pb-1.5">Invoice No</th>
                  <th className="pb-1.5">Customer</th>
                  <th className="pb-1.5">Amount</th>
                  <th className="pb-1.5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {previewRows.map((p, i) => (
                  <tr key={i}>
                    <td className="py-1.5">{p.date}</td>
                    <td className="py-1.5 font-mono text-[10px]">{p.inv}</td>
                    <td className="py-1.5 font-medium">{p.cust}</td>
                    <td className="py-1.5 font-semibold">{p.amt}</td>
                    <td className="py-1.5 text-right">
                      <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${
                        p.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                      }`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

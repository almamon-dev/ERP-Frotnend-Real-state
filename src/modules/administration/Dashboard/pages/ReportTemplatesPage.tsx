import React, { useState } from 'react';
import {
  Search,
  Sliders,
  DollarSign,
  Building2,
  FolderKanban,
  Users,
  Briefcase,
  Layers,
  MoreHorizontal,
  CheckCircle2,
} from 'lucide-react';
import Select from '@/shared/components/ui/select';
import Input from '@/shared/components/ui/input';
import Modal from '@/shared/components/modals/modal';

export default function ReportTemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('popular');
  const [previewTemplate, setPreviewTemplate] = useState<any | null>(null);

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'sales', name: 'Sales' },
    { id: 'finance', name: 'Finance' },
    { id: 'property', name: 'Property' },
    { id: 'crm', name: 'CRM' },
    { id: 'hr', name: 'HR' },
    { id: 'inventory', name: 'Inventory' },
    { id: 'operations', name: 'Operations' },
  ];

  const templates = [
    {
      id: '1',
      title: 'Sales Summary Report',
      desc: 'Summary of sales and sales breakdown by period, agent, and property type.',
      tag: 'Sales',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      icon: Sliders,
      fields: ['Date', 'Invoice No', 'Customer Name', 'Agent', 'Property', 'Total Amount', 'Status'],
      sampleData: [
        { col1: '2025-05-31', col2: 'INV-1001', col3: 'Al-Mamon Corp', col4: 'John Doe', col5: 'Green Villa #4', col6: '৳ 12,50,000', col7: 'Completed' },
        { col1: '2025-05-30', col2: 'INV-1002', col3: 'Rahim Group', col4: 'Sarah Johnson', col5: 'Sunset Apt #B2', col6: '৳ 8,40,000', col7: 'Completed' },
        { col1: '2025-05-29', col2: 'INV-1003', col3: 'City Bank Ltd', col4: 'Mike Wilson', col5: 'Lakeview Unit 6', col6: '৳ 15,20,000', col7: 'Completed' },
        { col1: '2025-05-28', col2: 'INV-1004', col3: 'Summit Group', col4: 'Emily Davis', col5: 'Commercial Plaza', col6: '৳ 35,00,000', col7: 'Completed' },
      ],
    },
    {
      id: '2',
      title: 'Revenue Analysis Report',
      desc: 'Detailed revenue analysis by period, revenue streams, and growth rates.',
      tag: 'Finance',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      icon: DollarSign,
      fields: ['Month', 'Booking Income', 'Installments', 'Service Charge', 'Total Revenue', 'Growth'],
      sampleData: [
        { col1: 'May 2025', col2: '৳ 45,00,000', col3: '৳ 28,50,000', col4: '৳ 3,20,000', col5: '৳ 76,70,000', col6: '+14.2%' },
        { col1: 'April 2025', col2: '৳ 41,20,000', col3: '৳ 24,00,000', col4: '৳ 2,90,000', col5: '৳ 68,10,000', col6: '+10.8%' },
        { col1: 'March 2025', col2: '৳ 38,50,000', col3: '৳ 21,10,000', col4: '৳ 2,75,000', col5: '৳ 62,35,000', col6: '+8.4%' },
      ],
    },
    {
      id: '3',
      title: 'Project Profitability Report',
      desc: 'Profitability analysis and ROI calculation for all active construction projects.',
      tag: 'Projects',
      color: 'bg-blue-50 text-blue-600 border-blue-100',
      icon: FolderKanban,
      fields: ['Project Name', 'Total Budget', 'Spent Cost', 'Revenue Realized', 'Net Profit', 'Margin'],
      sampleData: [
        { col1: 'Sunshine Towers', col2: '৳ 5,00,00,000', col3: '৳ 3,40,00,000', col4: '৳ 4,80,00,000', col5: '৳ 1,40,00,000', col6: '29.1%' },
        { col1: 'Lakeview Heights', col2: '৳ 8,50,00,000', col3: '৳ 5,90,00,000', col4: '৳ 8,10,00,000', col5: '৳ 2,20,00,000', col6: '27.1%' },
      ],
    },
    {
      id: '4',
      title: 'Property Inventory Report',
      desc: 'Current inventory status, availability, and unit valuation of properties.',
      tag: 'Property',
      color: 'bg-amber-50 text-amber-600 border-amber-100',
      icon: Building2,
      fields: ['Property ID', 'Type', 'Size (sqft)', 'Price/sqft', 'Status', 'Total Value'],
      sampleData: [
        { col1: 'PROP-101', col2: '3 BHK Flat', col3: '1,850', col4: '৳ 6,500', col5: 'Available', col6: '৳ 1,20,25,000' },
        { col1: 'PROP-102', col2: 'Commercial Space', col3: '3,200', col4: '৳ 12,000', col5: 'Booked', col6: '৳ 3,84,00,000' },
      ],
    },
    {
      id: '5',
      title: 'Customer Activity Report',
      desc: 'Overview of customer lead activities, conversions, and site visits.',
      tag: 'CRM',
      color: 'bg-teal-50 text-teal-600 border-teal-100',
      icon: Users,
      fields: ['Customer Name', 'Lead Source', 'Interested Project', 'Last Contact', 'Stage', 'Status'],
      sampleData: [
        { col1: 'Dr. Kabir Ahmed', col2: 'Website Inquiry', col3: 'Green Villa', col4: 'Yesterday', col5: 'Site Visit Completed', col6: 'High Intent' },
        { col1: 'Mrs. Selina Begum', col2: 'Referral', col3: 'Sunshine Towers', col4: 'May 30, 2025', col5: 'Negotiation', col6: 'Hot Lead' },
      ],
    },
    {
      id: '6',
      title: 'Collection Summary Report',
      desc: 'Summary of collections, upcoming installments, and overdue payments.',
      tag: 'Finance',
      color: 'bg-purple-50 text-purple-600 border-purple-100',
      icon: DollarSign,
      fields: ['Customer', 'Flat/Unit', 'Installment #', 'Due Date', 'Amount Due', 'Overdue Days'],
      sampleData: [
        { col1: 'Tariqul Islam', col2: 'Flat 4A - Lakeview', col3: '#04', col4: '2025-05-15', col5: '৳ 2,50,000', col6: '16 Days Overdue' },
        { col1: 'Nusrat Jahan', col2: 'Flat 6B - Sunshine', col3: '#02', col4: '2025-06-01', col5: '৳ 3,00,000', col6: 'Upcoming' },
      ],
    },
    {
      id: '7',
      title: 'Employee Attendance Report',
      desc: 'Employee attendance summary report, late count, and leave balances.',
      tag: 'HR',
      color: 'bg-rose-50 text-rose-600 border-rose-100',
      icon: Briefcase,
      fields: ['Employee ID', 'Name', 'Department', 'Present Days', 'Late Count', 'Leaves Taken'],
      sampleData: [
        { col1: 'EMP-001', col2: 'Mohammad Ali', col3: 'Sales', col4: '26 / 26', col5: '1', col6: '0' },
        { col1: 'EMP-002', col2: 'Fatema Tuz Zohra', col3: 'Accounts', col4: '24 / 26', col5: '0', col6: '2' },
      ],
    },
    {
      id: '8',
      title: 'Inventory Status Report',
      desc: 'Current construction inventory stock, raw material valuation, and reorder levels.',
      tag: 'Inventory',
      color: 'bg-sky-50 text-sky-600 border-sky-100',
      icon: Layers,
      fields: ['Item Code', 'Item Name', 'Category', 'Stock Qty', 'Unit', 'Total Valuation'],
      sampleData: [
        { col1: 'MAT-501', col2: '500W Deformed Bar', col3: 'Steel', col4: '45.5', col5: 'Ton', col6: '৳ 43,22,500' },
        { col1: 'MAT-502', col2: 'OPC Cement', col3: 'Cement', col4: '1,200', col5: 'Bags', col6: '৳ 6,60,000' },
      ],
    },
  ];

  const filteredTemplates = templates.filter((t) => {
    const matchesCategory = selectedCategory === 'all' || t.tag.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || t.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full px-4 md:px-6 py-3.5 md:py-4 bg-[#F8FAFC] space-y-3.5 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-[11.5px] text-slate-400 font-medium mb-1">
            <span>Reports</span>
            <span>&gt;</span>
            <span className="text-slate-600 font-semibold">Report Templates</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Report Templates</h1>
          <p className="text-[12.5px] text-slate-500 font-normal mt-0.5">
            Use pre-built templates to get started quickly
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <div className="relative w-[220px]">
            <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 z-10" />
            <Input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 text-[12px] h-[32px] bg-white border-slate-200"
            />
          </div>

          <div className="w-[140px]">
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              options={[
                { id: 'all', name: 'All Modules' },
                { id: 'sales', name: 'Sales' },
                { id: 'finance', name: 'Finance' },
                { id: 'property', name: 'Property' },
                { id: 'crm', name: 'CRM' },
                { id: 'hr', name: 'HR' },
              ]}
              size="sm"
            />
          </div>

          <div className="w-[130px]">
            <Select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              options={[{ id: 'popular', name: 'Sort By' }]}
              size="sm"
            />
          </div>
        </div>
      </div>

      {/* Main Layout: Left Sidebar + Template Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Left Categories Sidebar */}
        <div className="bg-white p-3 rounded-md border border-slate-200/90 shadow-2xs h-fit space-y-1">
          <h3 className="text-[11.5px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 mb-1">Categories</h3>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`w-full text-left px-3 py-1.5 rounded text-[12px] font-medium cursor-pointer transition-colors ${
                selectedCategory === c.id
                  ? 'bg-indigo-50 text-indigo-700 font-semibold border-l-2 border-indigo-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Template Cards Grid (4 Columns) */}
        <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          {filteredTemplates.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.id}
                className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-md border ${t.color} flex items-center justify-center`}>
                      <Icon size={18} />
                    </div>
                    <button className="text-slate-400 hover:text-slate-700 cursor-pointer">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>

                  <h4 className="text-[13px] font-bold text-slate-900 mb-1">{t.title}</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-3">
                    {t.desc}
                  </p>

                  <span className="inline-block text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded mb-3">
                    {t.tag}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setPreviewTemplate(t)}
                    className="flex-1 py-1.5 rounded border border-slate-200 text-slate-600 text-[11px] font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Preview</span>
                  </button>
                  <button
                    onClick={() => setPreviewTemplate(t)}
                    className="flex-1 py-1.5 rounded bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-semibold transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
                  >
                    <span>Use Template</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reusable Enterprise Modal Component */}
      <Modal
        isOpen={!!previewTemplate}
        onClose={() => setPreviewTemplate(null)}
        size="4xl"
        title={
          previewTemplate && (
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg border ${previewTemplate.color} flex items-center justify-center`}>
                {React.createElement(previewTemplate.icon, { size: 20 })}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{previewTemplate.title}</h3>
                <span className="text-[11.5px] font-medium text-slate-500">Category: {previewTemplate.tag}</span>
              </div>
            </div>
          )
        }
        footer={
          previewTemplate && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPreviewTemplate(null)}
                className="px-4 py-2 rounded-md border border-slate-300 text-slate-700 text-[12.5px] font-semibold hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Template "${previewTemplate.title}" selected! Loading generator...`);
                  setPreviewTemplate(null);
                }}
                className="px-5 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-[12.5px] font-bold flex items-center gap-2 shadow-2xs cursor-pointer"
              >
                <CheckCircle2 size={16} />
                <span>Use This Template</span>
              </button>
            </div>
          )
        }
      >
        {previewTemplate && (
          <div className="space-y-4">
            <p className="text-[13px] text-slate-600 leading-relaxed">{previewTemplate.desc}</p>

            <div>
              <h4 className="text-[12px] font-bold text-slate-800 uppercase tracking-wider mb-2">Included Fields</h4>
              <div className="flex flex-wrap gap-2">
                {previewTemplate.fields.map((f: string, idx: number) => (
                  <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-[11.5px] font-semibold border border-slate-200">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[12px] font-bold text-slate-800 uppercase tracking-wider mb-2">Sample Data Preview</h4>
              <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-2xs">
                <table className="w-full text-left text-[12px]">
                  <thead>
                    <tr className="bg-slate-50/80 text-slate-600 font-bold border-b border-slate-200">
                      {previewTemplate.fields.map((f: string, idx: number) => (
                        <th key={idx} className="py-2.5 px-3.5 whitespace-nowrap">{f}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {previewTemplate.sampleData.map((row: any, idx: number) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        {Object.values(row).map((val: any, i: number) => (
                          <td key={i} className="py-2.5 px-3.5 whitespace-nowrap">{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

import React, { useState } from 'react';
import {
  FileSpreadsheet,
  FileText,
  FileCode,
  Lock,
  DownloadCloud,
  History,
  CloudUpload,
} from 'lucide-react';
import Select from '@/shared/components/ui/select';
import DatePicker from '@/shared/components/ui/date-picker';

export default function DataExportPage() {
  const [selectedReport, setSelectedReport] = useState('sales');
  const [format, setFormat] = useState('excel');
  const [startDate, setStartDate] = useState('2025-05-01');
  const [endDate, setEndDate] = useState('2025-05-31');

  const reportOptions = [
    { id: 'sales', name: 'Sales Performance Report' },
    { id: 'revenue', name: 'Revenue Analysis Report' },
    { id: 'inventory', name: 'Property Inventory Report' },
    { id: 'customer', name: 'Customer Activity Report' },
  ];

  return (
    <div className="w-full p-4 md:p-6 bg-[#F8FAFC] space-y-4 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-[11.5px] text-slate-400 font-medium mb-1">
            <span>Reports</span>
            <span>&gt;</span>
            <span className="text-slate-600 font-semibold">Data Export</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Data Export</h1>
          <p className="text-[12.5px] text-slate-500 font-normal mt-0.5">
            Export your report data in multiple formats
          </p>
        </div>

        <button className="px-3.5 py-1.5 rounded-md border border-slate-300 bg-white text-slate-700 text-[12px] font-semibold hover:bg-slate-50 transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer">
          <History size={14} />
          <span>Export History</span>
        </button>
      </div>

      {/* 5 Columns / Steps Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* 1. Select Data Source */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs space-y-3">
          <h3 className="text-[13px] font-bold text-slate-900">1. Select Data Source</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[12px] font-semibold text-indigo-700 cursor-pointer">
              <input type="radio" name="source" defaultChecked className="accent-indigo-600" />
              <span>Select Report</span>
            </label>
            <div className="pl-5">
              <Select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                options={reportOptions}
                size="sm"
              />
            </div>

            <label className="flex items-center gap-2 text-[12px] text-slate-600 cursor-pointer pt-2">
              <input type="radio" name="source" className="accent-indigo-600" />
              <span>Select Module</span>
            </label>

            <label className="flex items-center gap-2 text-[12px] text-slate-600 cursor-pointer pt-1">
              <input type="radio" name="source" className="accent-indigo-600" />
              <span>Custom SQL</span>
            </label>
          </div>
        </div>

        {/* 2. Date Range */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs space-y-3">
          <h3 className="text-[13px] font-bold text-slate-900">2. Date Range</h3>
          <div className="space-y-3">
            <div>
              <label className="text-[11px] font-medium text-slate-500 block mb-1">Preset</label>
              <Select
                value="this_month"
                onChange={() => {}}
                options={[{ id: 'this_month', name: 'This Month' }, { id: 'last_month', name: 'Last Month' }]}
                size="sm"
              />
            </div>

            <div>
              <label className="text-[11px] font-medium text-slate-500 block mb-1">Custom Range</label>
              <div className="space-y-2">
                <DatePicker value={startDate} onChange={setStartDate} size="sm" />
                <DatePicker value={endDate} onChange={setEndDate} size="sm" />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Format Options */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs space-y-3">
          <h3 className="text-[13px] font-bold text-slate-900">3. Format</h3>
          <div className="space-y-2">
            {[
              { id: 'excel', label: 'Excel (.xlsx)', icon: FileSpreadsheet, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
              { id: 'csv', label: 'CSV (.csv)', icon: FileText, color: 'text-teal-600 bg-teal-50 border-teal-200' },
              { id: 'pdf', label: 'PDF (.pdf)', icon: FileText, color: 'text-rose-600 bg-rose-50 border-rose-200' },
              { id: 'json', label: 'JSON (.json)', icon: FileCode, color: 'text-amber-600 bg-amber-50 border-amber-200' },
              { id: 'xml', label: 'XML (.xml)', icon: FileCode, color: 'text-purple-600 bg-purple-50 border-purple-200' },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.id}
                  onClick={() => setFormat(f.id)}
                  className={`flex items-center gap-2.5 p-2 rounded-md border cursor-pointer transition-all ${
                    format === f.id ? f.color + ' ring-1 ring-indigo-500 font-semibold' : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-[12px]">{f.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Options */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs space-y-3">
          <h3 className="text-[13px] font-bold text-slate-900">4. Options</h3>
          <div className="space-y-2.5 text-[12px] text-slate-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-indigo-600" />
              <span>Include Column Headers</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-indigo-600" />
              <span>Include Filters In Header</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-indigo-600" />
              <span>Include Summary</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-indigo-600" />
              <span>Include Charts</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-indigo-600" />
              <span>Compress File</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer pt-1">
              <input type="checkbox" className="accent-indigo-600" />
              <span>Password Protect</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-[11px] focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* 5. Export Action Illustration Card */}
        <div className="bg-white p-4 rounded-md border border-slate-200/90 shadow-2xs flex flex-col items-center justify-between text-center">
          <div className="space-y-3 pt-2">
            <h3 className="text-[13px] font-bold text-slate-900">5. Export</h3>
            <div className="w-20 h-20 mx-auto rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
              <CloudUpload size={40} />
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">
              You will receive an email once the export is ready.
            </p>
          </div>

          <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-[12px] font-bold transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer">
            <DownloadCloud size={16} />
            <span>Export Data</span>
          </button>
        </div>
      </div>
    </div>
  );
}

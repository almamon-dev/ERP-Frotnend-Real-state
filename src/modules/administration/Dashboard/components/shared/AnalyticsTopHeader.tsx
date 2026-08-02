import React from 'react';
import { Building2 } from 'lucide-react';
import Select from '@/shared/components/ui/select';
import DatePicker from '@/shared/components/ui/date-picker';

interface AnalyticsTopHeaderProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  selectedCompany: string;
  onCompanyChange: (company: string) => void;
}

export default function AnalyticsTopHeader({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  selectedCompany,
  onCompanyChange,
}: AnalyticsTopHeaderProps) {
  const companyOptions = [
    { id: 'all', name: 'All Companies' },
    { id: '1', name: 'Al-Mamon Real Estate Ltd.' },
    { id: '2', name: 'Sunshine Properties' },
    { id: '3', name: 'Green Valley Holdings' },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 py-1 px-0.5">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Analytics Overview</h1>
        <p className="text-[12.5px] text-slate-500 font-normal mt-0.5">
          Showing filtered data from <span className="font-semibold text-slate-700">{startDate}</span> to <span className="font-semibold text-slate-700">{endDate}</span>
        </p>
      </div>

      <div className="flex items-center gap-3">
        {/* UI Date Picker for Date Filter */}
        <div className="flex items-center gap-1.5">
          <div className="w-[135px]">
            <DatePicker
              value={startDate}
              onChange={onStartDateChange}
              placeholder="Start Date"
              size="sm"
            />
          </div>
          <span className="text-[12px] text-slate-400 font-semibold">-</span>
          <div className="w-[135px]">
            <DatePicker
              value={endDate}
              onChange={onEndDateChange}
              placeholder="End Date"
              size="sm"
            />
          </div>
        </div>

        {/* Custom Company Select */}
        <div className="w-[170px]">
          <Select
            value={selectedCompany}
            onChange={(e) => onCompanyChange(e.target.value)}
            options={companyOptions}
            showSearch={false}
            icon={Building2}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Building2, ChevronUp, ChevronDown, Plus, RotateCcw } from 'lucide-react';
import Input from '@/shared/components/ui/input';
import Select from '@/shared/components/ui/select';
import { Company } from '../types';

interface Props {
  onAddCompany: (company: Company) => void;
  typeOptions: any[];
  industryOptions: any[];
  countryOptions: any[];
}

export const CreateFormSection: React.FC<Props> = ({
  onAddCompany,
  typeOptions,
  industryOptions,
  countryOptions,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // All Form Fields
  const [code, setCode] = useState(`COM-${Math.floor(100 + Math.random() * 900)}`);
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [type, setType] = useState('');
  const [industry, setIndustry] = useState('');
  const [regNo, setRegNo] = useState('');
  const [taxId, setTaxId] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [country, setCountry] = useState('Bangladesh');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [currency, setCurrency] = useState('BDT');
  const [financialYear, setFinancialYear] = useState('July - June');

  const handleReset = () => {
    setName('');
    setDisplayName('');
    setType('');
    setIndustry('');
    setRegNo('');
    setTaxId('');
    setPhone('');
    setEmail('');
    setWebsite('');
    setCity('');
    setAddress('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return alert('Company Legal Name is required');

    onAddCompany({
      id: Date.now(),
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=80&auto=format&fit=crop&q=60',
      code: code || `COM-${Math.floor(100 + Math.random() * 900)}`,
      name,
      type: type || 'Parent Company',
      industry: industry || 'Real Estate & Property',
      country: country || 'Bangladesh',
      countryFlag: '🇧🇩',
      city: city || 'Dhaka',
      phone: phone || '+880 1700-000000',
      email: email || 'info@company.com',
      website: website || 'www.company.com',
      address: address || 'House #12, Road #04, Gulshan-1, Dhaka',
      branchesCount: 1,
      employeesCount: 10,
      status: 'Active',
      createdAt: 'Just now',
    });

    handleReset();
    setCode(`COM-${Math.floor(100 + Math.random() * 900)}`);
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200/80 shadow-2xs">
      {/* Form Header */}
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-3.5 flex items-center justify-between cursor-pointer border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Building2 size={18} className="text-indigo-600" />
          <h2 className="text-[14px] font-bold text-slate-800">Register New Company</h2>
        </div>
        <button type="button" className="text-slate-500 hover:text-slate-700">
          {isCollapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
        </button>
      </div>

      {/* Form Body - All Fields labeled properly */}
      {!isCollapsed && (
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <Input
              label="Company Code *"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="e.g. COM-101"
            />
            <Input
              label="Company Legal Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Registered Name"
            />
            <Input
              label="Display / Trade Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Brand / Short Name"
            />
            <Select
              label="Company Type *"
              value={type}
              onChange={(e) => setType(e.target.value)}
              options={typeOptions}
            />

            <Select
              label="Industry Sector *"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              options={industryOptions}
            />
            <Input
              label="Registration / Incorporation No"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              placeholder="e.g. C-12345/2026"
            />
            <Input
              label="TAX ID / TIN / BIN"
              value={taxId}
              onChange={(e) => setTaxId(e.target.value)}
              placeholder="e.g. TIN-987654321"
            />
            <Select
              label="Country *"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              options={countryOptions}
            />

            <Input
              label="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +880 1711-000000"
            />
            <Input
              label="Official Email *"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. contact@company.com"
            />
            <Input
              label="Website URL"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="e.g. www.company.com"
            />
            <Input
              label="City / District"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Dhaka, Chittagong"
            />

            <div className="md:col-span-2">
              <Input
                label="Registered Office Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Street address, plot, building..."
              />
            </div>
            <Input
              label="Default Currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              placeholder="e.g. BDT"
            />
            <Input
              label="Financial Year Cycle"
              value={financialYear}
              onChange={(e) => setFinancialYear(e.target.value)}
              placeholder="e.g. July - June"
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end items-center gap-2 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={handleReset}
              className="px-3.5 py-1.5 text-[12px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center gap-1.5"
            >
              <RotateCcw size={14} /> Reset Form
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-[12px] font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <Plus size={14} /> Add Company
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

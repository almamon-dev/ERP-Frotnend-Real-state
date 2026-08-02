import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Lock, Mail, ChevronRight, Eye, EyeOff, Building2, Shield,
  Users, TrendingUp, Hammer, Home, DollarSign, Briefcase,
  ShoppingCart, Search, BarChart3, Wrench, Scale, Megaphone,
  PhoneCall, Headphones, ClipboardCheck, UserCheck, Package,
  Boxes, Star, Key, Truck, Sun, Moon, Sparkles, Check
} from 'lucide-react';
import { useAuth } from '@/shared/context/contexts/AuthContext';
import { ROLES, RoleType } from '@/shared/constants/roles';
import Input from '@/shared/components/ui/input';

// ─── Portal / Dashboard Groups ─────────────────────────────────
type PortalKey = 'admin' | 'company' | 'employee' | 'customer' | 'owner' | 'vendor' | 'tenant';

interface DemoRole {
  role: RoleType;
  label: string;
  email: string;
  password: string;
  icon: React.ElementType;
  portal: PortalKey;
  desc: string;
}

const DEMO_ROLES: DemoRole[] = [
  // System
  { role: ROLES.SUPER_ADMIN, label: 'Super Admin', email: 'superadmin@ammar.com', password: 'admin123', icon: Shield, portal: 'admin', desc: 'Full system control' },
  { role: ROLES.COMPANY_ADMIN, label: 'Company Admin', email: 'admin@ammar.com', password: 'comp123', icon: Building2, portal: 'company', desc: 'Company dashboard' },
  // Employee — Operations
  { role: ROLES.BRANCH_MANAGER, label: 'Branch Manager', email: 'branch.manager@ammar.com', password: 'bran123', icon: Home, portal: 'employee', desc: 'Branch operations' },
  { role: ROLES.PROJECT_MANAGER, label: 'Project Manager', email: 'project.manager@ammar.com', password: 'proj123', icon: Briefcase, portal: 'employee', desc: 'Project tracking' },
  { role: ROLES.CONSTRUCTION_MANAGER, label: 'Construction Manager', email: 'construction.manager@ammar.com', password: 'cons123', icon: Hammer, portal: 'employee', desc: 'Site management' },
  { role: ROLES.PROPERTY_MANAGER, label: 'Property Manager', email: 'property.manager@ammar.com', password: 'prop123', icon: Key, portal: 'employee', desc: 'Property portfolio' },
  { role: ROLES.SALES_MANAGER, label: 'Sales Manager', email: 'sales.manager@ammar.com', password: 'salm123', icon: TrendingUp, portal: 'employee', desc: 'Sales team lead' },
  // Employee — Sales & CRM
  { role: ROLES.SALES_EXECUTIVE, label: 'Sales Executive', email: 'sales.exec@ammar.com', password: 'sale123', icon: ShoppingCart, portal: 'employee', desc: 'Deals & clients' },
  { role: ROLES.CRM_EXECUTIVE, label: 'CRM Executive', email: 'crm.exec@ammar.com', password: 'crm1234', icon: Search, portal: 'employee', desc: 'Leads & pipeline' },
  // Employee — Finance
  { role: ROLES.FINANCE_MANAGER, label: 'Finance Manager', email: 'finance.manager@ammar.com', password: 'finm123', icon: BarChart3, portal: 'employee', desc: 'Financial oversight' },
  { role: ROLES.ACCOUNTANT, label: 'Accountant', email: 'accountant@ammar.com', password: 'acct123', icon: DollarSign, portal: 'employee', desc: 'Journal & invoicing' },
  // Employee — HR
  { role: ROLES.HR_MANAGER, label: 'HR Manager', email: 'hr.manager@ammar.com', password: 'hrm1234', icon: Users, portal: 'employee', desc: 'HR & payroll' },
  { role: ROLES.HR_EXECUTIVE, label: 'HR Executive', email: 'hr.exec@ammar.com', password: 'hre1234', icon: UserCheck, portal: 'employee', desc: 'Employee records' },
  // Employee — Procurement
  { role: ROLES.PROCUREMENT_OFFICER, label: 'Procurement Officer', email: 'procurement@ammar.com', password: 'proc123', icon: Truck, portal: 'employee', desc: 'PO & sourcing' },
  { role: ROLES.INVENTORY_MANAGER, label: 'Inventory Manager', email: 'inventory@ammar.com', password: 'inv1234', icon: Boxes, portal: 'employee', desc: 'Stock control' },
  // Employee — Facilities
  { role: ROLES.MAINTENANCE_MANAGER, label: 'Maintenance Manager', email: 'maintenance@ammar.com', password: 'main123', icon: Wrench, portal: 'employee', desc: 'Facility upkeep' },
  // Employee — Others
  { role: ROLES.LEGAL_OFFICER, label: 'Legal Officer', email: 'legal@ammar.com', password: 'leg1234', icon: Scale, portal: 'employee', desc: 'Contracts & legal' },
  { role: ROLES.MARKETING_MANAGER, label: 'Marketing Manager', email: 'marketing.manager@ammar.com', password: 'mkm123', icon: Megaphone, portal: 'employee', desc: 'Campaigns & brand' },
  { role: ROLES.MARKETING_EXECUTIVE, label: 'Marketing Executive', email: 'marketing.exec@ammar.com', password: 'mke123', icon: Star, portal: 'employee', desc: 'Marketing ops' },
  { role: ROLES.RECEPTIONIST, label: 'Receptionist', email: 'receptionist@ammar.com', password: 'rec1234', icon: PhoneCall, portal: 'employee', desc: 'Front desk' },
  { role: ROLES.SUPPORT_EXECUTIVE, label: 'Support Executive', email: 'support@ammar.com', password: 'sup1234', icon: Headphones, portal: 'employee', desc: 'Client support' },
  { role: ROLES.AUDITOR, label: 'Auditor', email: 'auditor@ammar.com', password: 'aud1234', icon: ClipboardCheck, portal: 'employee', desc: 'Read-only reports' },
  // External Portals
  { role: ROLES.CUSTOMER, label: 'Customer', email: 'customer@ammar.com', password: 'cust123', icon: UserCheck, portal: 'customer', desc: 'Customer portal' },
  { role: ROLES.PROPERTY_OWNER, label: 'Property Owner', email: 'owner@ammar.com', password: 'own1234', icon: Home, portal: 'owner', desc: 'Owner portal' },
  { role: ROLES.VENDOR, label: 'Vendor', email: 'vendor@ammar.com', password: 'vnd1234', icon: Package, portal: 'vendor', desc: 'Vendor portal' },
  { role: ROLES.CONTRACTOR, label: 'Contractor', email: 'contractor@ammar.com', password: 'con1234', icon: Hammer, portal: 'vendor', desc: 'Contractor portal' },
  { role: ROLES.SUPPLIER, label: 'Supplier', email: 'supplier@ammar.com', password: 'spl1234', icon: Truck, portal: 'vendor', desc: 'Supplier portal' },
  { role: ROLES.TENANT, label: 'Tenant', email: 'tenant@ammar.com', password: 'tnt1234', icon: Key, portal: 'tenant', desc: 'Tenant portal' },
];

// Quick email → role map for login
const EMAIL_ROLE_MAP: Record<string, RoleType> = Object.fromEntries(
  DEMO_ROLES.map((d) => [d.email, d.role])
);

// Portal group meta
const PORTAL_META: Record<PortalKey, { label: string; color: string; bgLight: string; bgDark: string }> = {
  admin: { label: 'Super Admin', color: 'text-violet-600 dark:text-violet-400', bgLight: 'bg-violet-50 border-violet-200 text-violet-700', bgDark: 'bg-violet-500/20 border-violet-500/30 text-violet-300' },
  company: { label: 'Company Admin', color: 'text-indigo-600 dark:text-indigo-400', bgLight: 'bg-indigo-50 border-indigo-200 text-indigo-700', bgDark: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300' },
  employee: { label: 'Employee Dashboard', color: 'text-emerald-600 dark:text-emerald-400', bgLight: 'bg-emerald-50 border-emerald-200 text-emerald-700', bgDark: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300' },
  customer: { label: 'Customer Portal', color: 'text-sky-600 dark:text-sky-400', bgLight: 'bg-sky-50 border-sky-200 text-sky-700', bgDark: 'bg-sky-500/20 border-sky-500/30 text-sky-300' },
  owner: { label: 'Owner Portal', color: 'text-amber-600 dark:text-amber-400', bgLight: 'bg-amber-50 border-amber-200 text-amber-700', bgDark: 'bg-amber-500/20 border-amber-500/30 text-amber-300' },
  vendor: { label: 'Vendor Portal', color: 'text-orange-600 dark:text-orange-400', bgLight: 'bg-orange-50 border-orange-200 text-orange-700', bgDark: 'bg-orange-500/20 border-orange-500/30 text-orange-300' },
  tenant: { label: 'Tenant Portal', color: 'text-rose-600 dark:text-rose-400', bgLight: 'bg-rose-50 border-rose-200 text-rose-700', bgDark: 'bg-rose-500/20 border-rose-500/30 text-rose-300' },
};

const ROLE_COLORS: Record<PortalKey, string> = {
  admin: 'from-violet-500 to-purple-600',
  company: 'from-indigo-500 to-indigo-700',
  employee: 'from-emerald-500 to-teal-600',
  customer: 'from-sky-500 to-cyan-600',
  owner: 'from-amber-500 to-yellow-600',
  vendor: 'from-orange-500 to-red-500',
  tenant: 'from-rose-500 to-pink-600',
};

// Group roles by portal
const grouped = DEMO_ROLES.reduce<Record<PortalKey, DemoRole[]>>((acc, role) => {
  if (!acc[role.portal]) acc[role.portal] = [];
  acc[role.portal].push(role);
  return acc;
}, {} as Record<PortalKey, DemoRole[]>);

const PORTAL_ORDER: PortalKey[] = ['admin', 'company', 'employee', 'customer', 'owner', 'vendor', 'tenant'];

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  const [activePortal, setActivePortal] = useState<PortalKey>('admin');

  // Light Mode is default, user can toggle to dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDemoClick = (demo: DemoRole) => {
    setEmail(demo.email);
    setPassword(demo.password);
    setSelectedDemo(demo.email);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await new Promise((r) => setTimeout(r, 800));
      const role = EMAIL_ROLE_MAP[email.toLowerCase().trim()];
      if (!role) {
        setError('Invalid credentials. Please select a role from the left panel.');
        return;
      }
      login(role);
      navigate('/');
    } catch {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const selectedDemoObj = DEMO_ROLES.find((d) => d.email === selectedDemo);

  return (
    <div className={`min-h-screen w-full flex font-sans transition-colors duration-300 ${isDarkMode ? 'bg-[#0B1220] text-slate-100 dark' : 'bg-slate-50 text-slate-800'}`}>

      {/* ── TOP RIGHT LIGHT/DARK TOGGLE ── */}
      <div className="absolute top-5 right-6 z-50">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm border transition-all cursor-pointer ${isDarkMode
            ? 'bg-slate-800 border-slate-700 text-amber-300 hover:bg-slate-700'
            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 shadow-slate-200/50'
            }`}
        >
          {isDarkMode ? (
            <>
              <Sun size={14} className="text-amber-400" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon size={14} className="text-indigo-600" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>

      {/* ── LEFT PANEL: Role & Portal Selector ── */}
      <div className={`hidden lg:flex w-[460px] shrink-0 flex-col border-r relative overflow-hidden transition-colors duration-300 ${isDarkMode
        ? 'bg-[#0f1a2e] border-white/5'
        : 'bg-white border-slate-200/80 shadow-sm'
        }`}>
        {/* Background ambient light */}
        <div className={`absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full blur-3xl pointer-events-none ${isDarkMode ? 'bg-emerald-500/10' : 'bg-emerald-500/5'}`} />
        <div className={`absolute bottom-[-80px] right-[-80px] w-72 h-72 rounded-full blur-3xl pointer-events-none ${isDarkMode ? 'bg-indigo-500/10' : 'bg-indigo-500/5'}`} />

        <div className="relative z-10 flex flex-col h-full p-7">
          {/* Brand */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#008060] to-emerald-600 flex items-center justify-center shadow-md shadow-emerald-600/20">
              <Building2 size={18} className="text-white" />
            </div>
            <div>
              <h1 className={`font-bold text-[18px] leading-none tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Ammar Real Estate
              </h1>
              <p className={`text-[11px] mt-0.5 font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Enterprise ERP Platform
              </p>
            </div>
          </div>

          {/* Quick Demo Info */}
          <div className="mb-4">
            <div className="flex items-center gap-1.5 mb-1 text-[#008060] dark:text-[#00c48c]">
              <Sparkles size={13} />
              <span className="text-[10.5px] font-bold tracking-wider uppercase">Role Portal Switcher</span>
            </div>
            <p className={`text-[12px] ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Click any role below to auto-fill credentials & route to portal.
            </p>
          </div>

          {/* Portal Tabs */}
          <div className="mb-3">
            <div className="grid grid-cols-4 gap-1.5">
              {PORTAL_ORDER.map((pk) => {
                const meta = PORTAL_META[pk];
                const count = (grouped[pk] || []).length;
                const isActiveTab = activePortal === pk;
                return (
                  <button
                    key={pk}
                    onClick={() => setActivePortal(pk)}
                    className={`p-2 rounded-sm border text-center transition-all cursor-pointer ${isActiveTab
                      ? isDarkMode
                        ? 'bg-white/15 border-white/30 text-white shadow-md'
                        : 'bg-[#008060] border-[#008060] text-white shadow-sm'
                      : isDarkMode
                        ? 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                  >
                    <span className="text-[10.5px] font-bold block truncate">
                      {meta.label.split(' ')[0]}
                    </span>
                    <span className={`text-[9px] mt-0.5 block ${isActiveTab ? 'text-emerald-100' : isDarkMode ? 'text-slate-400' : 'text-slate-400'}`}>
                      {count} role{count !== 1 ? 's' : ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Role List */}
          <div className="flex-1 overflow-y-auto space-y-1.5 pr-1" style={{ scrollbarWidth: 'none' }}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#008060] dark:text-[#00c48c] mb-2 flex items-center gap-1.5">
              <span>Portal:</span>
              <span className={`px-2 py-0.5 rounded font-semibold ${isDarkMode ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-800 border border-slate-200'
                }`}>
                {PORTAL_META[activePortal].label}
              </span>
            </p>

            {(grouped[activePortal] || []).map((demo) => {
              const Icon = demo.icon;
              const isActive = selectedDemo === demo.email;
              return (
                <button
                  key={demo.role}
                  onClick={() => handleDemoClick(demo)}
                  className={`w-full text-left p-2.5 rounded-sm border transition-all duration-150 cursor-pointer group ${isActive
                    ? isDarkMode
                      ? 'bg-white/20 border-white/40 shadow-lg text-white'
                      : 'bg-emerald-50 border-emerald-300 shadow-sm text-emerald-950'
                    : isDarkMode
                      ? 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/12 hover:border-white/25'
                      : 'bg-slate-50/80 border-slate-200/80 text-slate-700 hover:bg-white hover:border-slate-300 hover:shadow-sm'
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-7 h-7 rounded-sm bg-gradient-to-br ${ROLE_COLORS[demo.portal]} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon size={13} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className={`font-semibold text-[12.5px] truncate ${isActive
                          ? isDarkMode ? 'text-white' : 'text-emerald-900'
                          : isDarkMode ? 'text-slate-100' : 'text-slate-800'
                          }`}>
                          {demo.label}
                        </span>
                        {isActive && (
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 flex items-center gap-0.5 ${isDarkMode
                            ? 'text-emerald-400 bg-emerald-400/20 border border-emerald-400/30'
                            : 'text-emerald-700 bg-emerald-100 border border-emerald-300'
                            }`}>
                            <Check size={10} /> Selected
                          </span>
                        )}
                      </div>
                      <span className={`text-[10.5px] block truncate ${isDarkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                        {demo.desc}
                      </span>
                    </div>
                    <ChevronRight size={12} className={`shrink-0 transition-transform ${isActive
                      ? isDarkMode ? 'text-white' : 'text-emerald-700 translate-x-0.5'
                      : isDarkMode ? 'text-slate-500 group-hover:translate-x-0.5' : 'text-slate-400 group-hover:translate-x-0.5'
                      }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer note */}
          <div className={`mt-4 pt-3 border-t ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <p className={`text-[10.5px] leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              🔒 Demo accounts configured for all 28 real estate roles. Select a role to log in directly.
            </p>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL: Main Login Form ── */}
      <div className="flex-1 flex items-center justify-center p-6 relative">
        <div className="w-full max-w-[400px]">

          {/* Mobile Header Logo */}
          <div className="flex items-center gap-2.5 mb-8 lg:hidden">
            <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#008060] to-emerald-600 flex items-center justify-center shadow-lg">
              <Building2 size={18} className="text-white" />
            </div>
            <div>
              <h1 className={`font-bold text-[16px] leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Ammar Real Estate</h1>
              <p className="text-slate-500 text-[11px] mt-0.5 font-medium">ERP Platform</p>
            </div>
          </div>

          {/* Header Title */}
          <div className="mb-7">
            <h2 className={`text-[28px] font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Sign in to ERP
            </h2>
            <p className={`text-[13.5px] mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Enter your credentials or choose a role demo from the left.
            </p>
          </div>

          {/* Selected Role Badge */}
          {selectedDemoObj && (
            <div className={`mb-5 p-3 rounded-sm border flex items-center gap-3 transition-all ${isDarkMode ? PORTAL_META[selectedDemoObj.portal].bgDark : PORTAL_META[selectedDemoObj.portal].bgLight
              }`}>
              <div className={`w-8 h-8 rounded-sm bg-gradient-to-br ${ROLE_COLORS[selectedDemoObj.portal]} flex items-center justify-center shrink-0 shadow-md`}>
                <selectedDemoObj.icon size={14} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12.5px] font-bold truncate">{selectedDemoObj.label}</p>
                <p className="text-[10.5px] opacity-80 truncate">Routes to: {PORTAL_META[selectedDemoObj.portal].label}</p>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            </div>
          )}

          {/* Login Form Card using FormInput Component */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <Input
              label="Email Address"
              icon={Mail}
              type="text"
              required
              value={email}
              isDarkMode={isDarkMode}
              onChange={(e) => { setEmail(e.target.value); setError(''); setSelectedDemo(null); }}
              placeholder="name@ammar.com"
            />

            {/* Password Input */}
            <Input
              label="Password"
              icon={Lock}
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              isDarkMode={isDarkMode}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              placeholder="••••••••"
              topRightAction={
                <a href="/web/forgot-password" className="text-[12px] text-[#008060] hover:underline font-semibold">
                  Forgot password?
                </a>
              }
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`cursor-pointer transition-colors ${isDarkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'
                    }`}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              }
            />

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-sm">
                <p className="text-rose-600 dark:text-rose-400 text-[12.5px] font-medium">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-[#008060] hover:bg-[#006e52] disabled:opacity-60 text-white text-[14px] font-bold rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-900/20 mt-3"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ChevronRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Mobile hint */}
          <div className="lg:hidden mt-5 p-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-sm">
            <p className="text-slate-600 dark:text-slate-400 text-[11.5px] text-center">
              Tap any role tab to test system access & routing
            </p>
          </div>

          <p className={`text-center text-[11px] mt-6 ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>
            Ammar Real Estate ERP Security System • v3.0.0
          </p>
        </div>
      </div>
    </div>
  );
}

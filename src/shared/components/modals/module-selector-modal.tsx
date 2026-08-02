import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import {
  Search, Star, LayoutGrid, Users, Settings, Puzzle, X, Clock, Footprints, Calendar, CreditCard, RotateCcw, LayoutDashboard, ShieldCheck, UserCircle, CheckSquare, Handshake, Target, Award, Building2, Landmark, Home, Wrench, DollarSign, Box, FileBarChart, Key, Truck, ShieldAlert, Scale, Bell, BookOpen, FileText, FolderOpen, LifeBuoy, MapPin, ShoppingCart, TrendingUp, PieChart, Briefcase, FileCheck, Calculator, UserPlus, UserCheck, Wallet
} from 'lucide-react';
import Input from '@/shared/components/ui/input';

interface ModuleSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CategoryType = 'favourites' | 'erp' | 'hrms' | 'ess' | 'sales' | 'finance' | 'projects' | 'general' | 'operational' | 'reports';

export default function ModuleSelectorModal({ isOpen, onClose }: ModuleSelectorModalProps) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('erp');
  const [searchQuery, setSearchQuery] = useState('');
  const modalBoxRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // ALL 16 REAL ESTATE ERP MASTER MODULES
  const erpMasterModules = [
    {
      id: 'dashboard',
      name: 'Dashboard & BI',
      desc: 'Real-time ERP metrics, analytics & executive overview.',
      path: '/admin/dashboard',
      icon: LayoutDashboard,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'core-foundation',
      name: 'Core Foundation',
      desc: 'Companies, branches, departments, teams & access roles.',
      path: '/admin/core/companies',
      icon: Building2,
      iconBg: 'bg-[#EAF5EF]',
      iconColor: 'text-[#0D6E4F]'
    },
    {
      id: 'land-bank',
      name: 'Land & Projects',
      desc: 'Land acquisition, survey, legal docs & project phases.',
      path: '/admin/land/bank',
      icon: Landmark,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 'property',
      name: 'Property Management',
      desc: 'Units, property types, categories & availability.',
      path: '/admin/property/list',
      icon: Home,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'construction',
      name: 'Construction BOQ',
      desc: 'BOQ, materials, contractors & quality inspections.',
      path: '/admin/construction/boq',
      icon: Wrench,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      id: 'crm',
      name: 'CRM & Lead Management',
      desc: 'Leads, site visits, customer bookings & sales deals.',
      path: '/admin/crm/overview',
      icon: Target,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600'
    },
    {
      id: 'rental-lease',
      name: 'Rental & Lease',
      desc: 'Lease agreements, tenant tracking & rent renewals.',
      path: '/admin/crm/rental-lease',
      icon: Key,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'finance',
      name: 'Finance & Accounts',
      desc: 'Accounts, payments, invoices, expenses & bank ledger.',
      path: '/admin/finance/accounts',
      icon: DollarSign,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'operations',
      name: 'Operations & Procurement',
      desc: 'Procurement, inventory, site stock & material requisitions.',
      path: '/admin/operations/procurement',
      icon: Box,
      iconBg: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      id: 'vendors',
      name: 'Vendor & Contractors',
      desc: 'Supplier directory, contractor enlistment & ratings.',
      path: '/admin/operations/vendors',
      icon: Truck,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-700'
    },
    {
      id: 'legal-compliance',
      name: 'Legal & Regulatory',
      desc: 'Deed registration, RAJUK approvals & mutation logs.',
      path: '/admin/operations/legal',
      icon: Scale,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-700'
    },
    {
      id: 'hr',
      name: 'HR & Payroll',
      desc: 'Employee records, attendance, leave & payroll.',
      path: '/admin/hr/employees',
      icon: Users,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-[#0D6E4F]'
    },
    {
      id: 'reports',
      name: 'Reports & Analytics',
      desc: 'Sales, finance, CRM, project, HR & custom reports.',
      path: '/admin/reports/sales',
      icon: FileBarChart,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      id: 'audit-security',
      name: 'Security & Audit Logs',
      desc: 'User activity logs, active sessions & security policies.',
      path: '/admin/system/audit-logs',
      icon: ShieldAlert,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-700'
    },
    {
      id: 'system',
      name: 'System Settings',
      desc: 'Global system configuration, backups & integrations.',
      path: '/admin/system/settings',
      icon: Settings,
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-700'
    },
    {
      id: 'modules-nav',
      name: 'All Enterprise Modules',
      desc: 'Master module directory and navigation index.',
      path: '/admin/modules',
      icon: ShieldCheck,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-700'
    },
  ];

  // FAVOURITE APPS
  const favouriteApps = [
    erpMasterModules[0],
    erpMasterModules[3],
    erpMasterModules[5],
    erpMasterModules[7],
    erpMasterModules[11],
    erpMasterModules[4],
    erpMasterModules[2],
    erpMasterModules[12],
  ];

  // 1. HRMS (HR MANAGEMENT MODULES)
  const hrmsApps = [
    {
      id: 'hr-dashboard',
      name: 'HR Management Portal',
      desc: 'Central HR executive portal, workforce statistics & active headcounts.',
      path: '/hr/portal',
      icon: LayoutDashboard,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-[#0D6E4F]'
    },
    {
      id: 'employee-directory',
      name: 'Employee Directory',
      desc: 'Staff listing, designations, org charts & employment files.',
      path: '/admin/hr/employees',
      icon: Users,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'onboarding-offboarding',
      name: 'Onboarding & Offboarding',
      desc: 'New hire clearance, employee exit interviews & clearance checklists.',
      path: '/admin/hr/employees',
      icon: UserPlus,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'attendance-roster',
      name: 'Attendance & Roster Logs',
      desc: 'Company-wide shift schedules, biometric attendance & monthly rosters.',
      path: '/employee-portal/time-management?tab=adjust',
      icon: Clock,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 'payroll-management',
      name: 'Payroll & Salary Sheets',
      desc: 'Salary calculation, tax withholdings, bank pay sheets & allowances.',
      path: '/admin/hr/payroll',
      icon: DollarSign,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-700'
    },
    {
      id: 'performance-kpi',
      name: 'KPI & Appraisals',
      desc: 'Employee performance ratings, goal setting & bonus evaluations.',
      path: '/admin/hr/performance',
      icon: Award,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600'
    },
    {
      id: 'recruitment-jobs',
      name: 'Recruitment & Jobs',
      desc: 'Job vacancy postings, applicant tracking & interview schedules.',
      path: '/admin/hr/employees',
      icon: Briefcase,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'hr-settings',
      name: 'HR Policies & Setup',
      desc: 'Leave policies, holiday calendar setup & designation hierarchy.',
      path: '/admin/system/settings',
      icon: Settings,
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-700'
    },
  ];

  // 2. ESS (EMPLOYEE SELF SERVICE PORTAL APPS)
  const essApps = [
    {
      id: 'ess-dashboard',
      name: 'ESS Home Portal',
      desc: 'Personal employee dashboard, personal attendance stats & announcements.',
      path: '/employee-portal/dashboard',
      icon: UserCheck,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      id: 'leave-app',
      name: 'Leave Requisitions',
      desc: 'Apply for casual, sick, annual leave & view supervisor approvals.',
      path: '/employee-portal/leave-movement?tab=leave',
      icon: Calendar,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-[#008060]'
    },
    {
      id: 'movement-app',
      name: 'Movement Requisitions',
      desc: 'Field site visits, client meeting movement requests & approval tracking.',
      path: '/employee-portal/leave-movement?tab=movement',
      icon: Footprints,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-500'
    },
    {
      id: 'time-logs',
      name: 'Punch Logs & Shift Adjust',
      desc: 'Daily punch times, attendance discrepancy reports & shift changes.',
      path: '/employee-portal/time-management?tab=adjust',
      icon: Clock,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 'iou-salary-advance',
      name: 'Advance Salary & IOU',
      desc: 'Apply for advance salary, petty cash IOU & track repayments.',
      path: '/employee-portal/iou?tab=application',
      icon: CreditCard,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'my-payslips',
      name: 'My Payslips & Tax',
      desc: 'Download monthly payslips, tax certificates and salary breakdowns.',
      path: '/employee-portal/payslip',
      icon: FileText,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'my-profile',
      name: 'About Me & Documents',
      desc: 'Personal information, emergency contacts & uploaded certificates.',
      path: '/employee-portal/about-me',
      icon: UserCircle,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'todo-list',
      name: 'Personal Todo Checklist',
      desc: 'Daily task planner, personal todo lists and reminders.',
      path: '/employee-portal/todo',
      icon: CheckSquare,
      iconBg: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
  ];

  // SALES & CRM APPS
  const salesApps = [
    {
      id: 'crm-leads',
      name: 'Lead Management',
      desc: 'Capture, categorize and assign incoming real estate leads.',
      path: '/admin/crm/overview',
      icon: Target,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600'
    },
    {
      id: 'site-visits',
      name: 'Site Visit Scheduling',
      desc: 'Client project tours, transport logistics and feedback.',
      path: '/admin/crm/site-visits',
      icon: MapPin,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'sales-deals',
      name: 'Sales Bookings & Deals',
      desc: 'Unit bookings, installment plans and sales agreements.',
      path: '/sales',
      icon: ShoppingCart,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'rental-management',
      name: 'Rental & Lease Portal',
      desc: 'Property rentals, tenant agreements and monthly collections.',
      path: '/admin/crm/rental-lease',
      icon: Key,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'nexus-affiliates',
      name: 'Partner & Agent Portal',
      desc: 'Broker network, partner referral commissions and sales logs.',
      path: '/employee-portal/kpi-bonus?tab=campaign',
      icon: Handshake,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 'marketing-analytics',
      name: 'Marketing Campaigns',
      desc: 'Digital campaigns, lead sources and ROI analytics.',
      path: '/employee-portal/kpi-bonus?tab=campaign',
      icon: TrendingUp,
      iconBg: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      id: 'customer-portal',
      name: 'Client Directory',
      desc: 'Complete buyer profile, purchase history and installment schedules.',
      path: '/crm',
      icon: UserCircle,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'sales-quotations',
      name: 'Price Calculator & Quotations',
      desc: 'Flat pricing, parking options, payment schedules and discounts.',
      path: '/sales',
      icon: Calculator,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
  ];

  // FINANCE & ACCOUNTING APPS
  const financeApps = [
    {
      id: 'general-ledger',
      name: 'General Ledger',
      desc: 'Chart of accounts, journal vouchers and trial balance.',
      path: '/accounting',
      icon: DollarSign,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'invoicing-billing',
      name: 'Invoices & Billing',
      desc: 'Installment invoices, money receipts and pending dues.',
      path: '/admin/finance/accounts',
      icon: CreditCard,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'iou-claims',
      name: 'Advance Salary & IOU',
      desc: 'Staff advances, petty cash IOU requisitions and settlements.',
      path: '/employee-portal/iou?tab=application',
      icon: Wallet,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'bank-reconciliation',
      name: 'Bank Reconciliation',
      desc: 'Bank accounts, online payment gateway sync and cheques.',
      path: '/accounting',
      icon: Landmark,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 'expenses-claims',
      name: 'Site Expense Approvals',
      desc: 'Field site expenses, travel claims and vouchers.',
      path: '/employee-portal/expenses',
      icon: FileCheck,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600'
    },
    {
      id: 'tax-compliance',
      name: 'Tax & VAT Management',
      desc: 'Withholding tax, VAT statements and audit compliance.',
      path: '/accounting',
      icon: Scale,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'project-budgeting',
      name: 'Project Budgeting',
      desc: 'Cost centers, project budget vs actual expenditure.',
      path: '/accounting',
      icon: PieChart,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      id: 'payroll-accounting',
      name: 'Payroll Accounts Sync',
      desc: 'Monthly salary disbursement, provident fund and tax sync.',
      path: '/admin/hr/payroll',
      icon: Users,
      iconBg: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
  ];

  // PROJECTS & REAL ESTATE APPS
  const projectsApps = [
    {
      id: 'land-bank-mgmt',
      name: 'Land Bank & Acquisition',
      desc: 'Land plot records, survey maps, legal deeds and mutation.',
      path: '/admin/land/bank',
      icon: Landmark,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 'property-catalog',
      name: 'Property & Units',
      desc: 'Building inventory, floor plans, flat sizes and availability.',
      path: '/admin/property/list',
      icon: Home,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'construction-boq-mgmt',
      name: 'Construction BOQ',
      desc: 'Bill of quantities, raw material estimates and work orders.',
      path: '/admin/construction/boq',
      icon: Wrench,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      id: 'material-requisition',
      name: 'Material Requisitions',
      desc: 'Site cement, steel & rebar requisitions with approvals.',
      path: '/admin/operations/procurement',
      icon: Box,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'contractors-vendors',
      name: 'Contractor Management',
      desc: 'Contractor billing, work progress ratings and enlistment.',
      path: '/admin/operations/vendors',
      icon: Truck,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'rajuk-approvals',
      name: 'Legal & Regulatory Approvals',
      desc: 'RAJUK, Fire, Environmental and Government approvals.',
      path: '/admin/operations/legal',
      icon: Scale,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'site-inspections',
      name: 'Quality & Safety Audits',
      desc: 'Civil engineering quality inspection checklist & reports.',
      path: '/admin/land/bank',
      icon: ShieldCheck,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600'
    },
    {
      id: 'handover-warranties',
      name: 'Handover & Warranties',
      desc: 'Flat handover deeds, key allocation and defect tracking.',
      path: '/admin/property/list',
      icon: Key,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
  ];

  // GENERAL UTILITY APPS
  const generalApps = [
    {
      id: 'about',
      name: 'My Profile',
      desc: 'Personal employee profile, employment history & documents.',
      path: '/employee-portal/about-me',
      icon: UserCircle,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'todo',
      name: 'Todo Checklist',
      desc: 'Personal task manager, daily checklists & priority tracking.',
      path: '/employee-portal/todo',
      icon: CheckSquare,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-[#008060]'
    },
    {
      id: 'calendar',
      name: 'Calendar & Meetings',
      desc: 'Schedule meetings, team event reminders & appointment logs.',
      path: '/employee-portal/calendar',
      icon: Calendar,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'announcements',
      name: 'Notice & Announcements',
      desc: 'Official company memos, office circulars & HR announcements.',
      path: '/employee-portal/dashboard',
      icon: Bell,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600'
    },
    {
      id: 'settings',
      name: 'System Directory',
      desc: 'Role management, security policies & global settings.',
      path: '/admin/modules',
      icon: ShieldCheck,
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-600'
    },
    {
      id: 'notifications',
      name: 'Notification Center',
      desc: 'System notifications, approval alerts & user activity feed.',
      path: '/admin/system/notifications',
      icon: Bell,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 'documents',
      name: 'Document Repository',
      desc: 'Central file vault, contract templates & project documents.',
      path: '/admin/property/documents',
      icon: FolderOpen,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      id: 'helpdesk',
      name: 'Help & Support Desk',
      desc: 'Internal support tickets, user guides & system help desk.',
      path: '/admin/system/settings',
      icon: LifeBuoy,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
  ];

  // OPERATIONAL APPS
  const operationalApps = [
    {
      id: 'operation',
      name: 'Operation Workflows',
      desc: 'Core business operations, task tracking & department workflows.',
      path: '/employee-portal/kpi-bonus?tab=operations',
      icon: Settings,
      iconBg: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      id: 'procurement-req',
      name: 'Procurement Requisitions',
      desc: 'Purchase requisitions, site material requests & RFQ status.',
      path: '/admin/operations/procurement',
      icon: ShoppingCart,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-700'
    },
    {
      id: 'nexus',
      name: 'Nexus Partner Portal',
      desc: 'Partner portal management, affiliate links & commission logs.',
      path: '/employee-portal/kpi-bonus?tab=campaign',
      icon: Handshake,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'campaign',
      name: 'Marketing Campaigns',
      desc: 'Marketing campaigns, outreach leads & conversion analytics.',
      path: '/employee-portal/kpi-bonus?tab=campaign',
      icon: Target,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      id: 'site-visits-log',
      name: 'Site Visit Logistics',
      desc: 'Client site visits, transport logistics & visit feedback.',
      path: '/admin/crm/site-visits',
      icon: MapPin,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600'
    },
    {
      id: 'kpi-bonus',
      name: 'KPI & Bonus Goals',
      desc: 'Performance metrics, quarterly achievements & bonus payouts.',
      path: '/employee-portal/kpi-bonus?tab=summary',
      icon: Award,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 'maintenance-ops',
      name: 'Site Asset Maintenance',
      desc: 'Property facility repairs, site equipment & maintenance logs.',
      path: '/admin/operations/maintenance',
      icon: Wrench,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'vendor-ratings',
      name: 'Vendor & Contractors',
      desc: 'Supplier directory, contractor enlistment & work ratings.',
      path: '/admin/operations/vendors',
      icon: Truck,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
  ];

  // REPORTS & ANALYTICS APPS
  const reportsApps = [
    {
      id: 'admin-analytics-dashboard',
      name: 'Executive BI Dashboard',
      desc: 'High-density revenue, sales trend & project analytics overview.',
      path: '/admin/analytics',
      icon: LayoutDashboard,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'sales-reports',
      name: 'Sales & Collection Reports',
      desc: 'Project-wise sales, booking trends and outstanding dues.',
      path: '/admin/reports/sales',
      icon: FileBarChart,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'crm-funnel-reports',
      name: 'CRM Lead Conversion Reports',
      desc: 'Lead conversion funnel, site visit performance & agent rank.',
      path: '/admin/reports/sales',
      icon: TrendingUp,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600'
    },
    {
      id: 'finance-audit-reports',
      name: 'Financial Statements',
      desc: 'Income statements, balance sheet and cashflow statements.',
      path: '/admin/reports/sales',
      icon: DollarSign,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      id: 'hr-payroll-analytics',
      name: 'HR & Attendance Analytics',
      desc: 'Staff attendance rate, overtime cost and payroll summary.',
      path: '/admin/reports/sales',
      icon: Users,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 'system-audit-reports',
      name: 'Security Audit Logs',
      desc: 'System access logs, user login history and security alerts.',
      path: '/admin/system/audit-logs',
      icon: ShieldAlert,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
  ];

  const getCurrentApps = () => {
    let list = erpMasterModules;
    if (activeCategory === 'favourites') list = favouriteApps;
    if (activeCategory === 'hrms') list = hrmsApps;
    if (activeCategory === 'ess') list = essApps;
    if (activeCategory === 'sales') list = salesApps;
    if (activeCategory === 'finance') list = financeApps;
    if (activeCategory === 'projects') list = projectsApps;
    if (activeCategory === 'general') list = generalApps;
    if (activeCategory === 'operational') list = operationalApps;
    if (activeCategory === 'reports') list = reportsApps;

    if (searchQuery) {
      return list.filter(app => app.name.toLowerCase().includes(searchQuery.toLowerCase()) || app.desc.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return list;
  };

  const handleSelectApp = (path: string) => {
    navigate(path);
    onClose();
  };

  const categories = [
    { id: 'erp', label: 'ERP Modules', count: erpMasterModules.length, icon: LayoutGrid, bg: 'bg-emerald-50 text-[#0D6E4F]' },
    { id: 'hrms', label: 'HRMS', count: hrmsApps.length, icon: Users, bg: 'bg-blue-50 text-blue-600' },
    { id: 'ess', label: 'ESS', count: essApps.length, icon: UserCheck, bg: 'bg-teal-50 text-teal-600' },
    { id: 'sales', label: 'Sales & CRM', count: salesApps.length, icon: Target, bg: 'bg-rose-50 text-rose-600' },
    { id: 'finance', label: 'Finance', count: financeApps.length, icon: DollarSign, bg: 'bg-emerald-50 text-emerald-600' },
    { id: 'projects', label: 'Projects', count: projectsApps.length, icon: Landmark, bg: 'bg-amber-50 text-amber-600' },
    { id: 'general', label: 'General', count: generalApps.length, icon: Puzzle, bg: 'bg-indigo-50 text-indigo-600' },
    { id: 'operational', label: 'Operational', count: operationalApps.length, icon: Settings, bg: 'bg-cyan-50 text-cyan-600' },
    { id: 'reports', label: 'Reports', count: reportsApps.length, icon: FileBarChart, bg: 'bg-purple-50 text-purple-600' },
  ];

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 transition-all"
      onClick={onClose}
    >
      {/* MODAL BOX CONTAINER WITH LEFT SIDEBAR LAYOUT */}
      <div
        ref={modalBoxRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-md border border-slate-200 shadow-2xl w-full max-w-[1280px] h-[680px] overflow-hidden flex animate-in fade-in zoom-in-95 duration-150"
      >

        {/* LEFT SIDEBAR: CATEGORIES */}
        <div className="w-[260px] bg-[#f8fafc] border-r border-slate-200/80 p-4 flex flex-col justify-between shrink-0 overflow-y-auto custom-scrollbar">
          <div className="space-y-3">

            {/* Favourites Item */}
            <div
              onClick={() => setActiveCategory('favourites')}
              className={`flex items-center justify-between p-2.5 px-3 rounded-md cursor-pointer font-bold text-[13px] transition-colors ${activeCategory === 'favourites'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
                }`}
            >
              <div className="flex items-center gap-2.5">
                <Star size={16} className={activeCategory === 'favourites' ? 'text-white fill-white' : 'text-amber-400 fill-amber-400'} />
                <span>Favourites</span>
              </div>
              <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${activeCategory === 'favourites'
                  ? 'bg-white/25 text-white'
                  : 'text-amber-700 bg-amber-50 border border-amber-200/80'
                }`}>
                {favouriteApps.length}
              </span>
            </div>

            {/* Category Header */}
            <div>
              <span className="text-[11px] font-bold text-slate-400 px-2 block mb-1.5 uppercase tracking-wider">Categories</span>

              <div className="space-y-1">
                {categories.map((cat) => {
                  const IconComp = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <div
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id as CategoryType)}
                      className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-all font-bold text-[12px] ${isActive
                          ? 'bg-[#0D6E4F] text-white shadow-xs'
                          : 'text-slate-600 hover:bg-slate-100/80'
                        }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <IconComp size={15} />
                        <span className="truncate">{cat.label}</span>
                      </div>
                      <span className={`text-[10.5px] font-extrabold px-2 py-0.5 rounded-full shrink-0 ${isActive ? 'bg-white/20 text-white' : cat.bg
                        }`}>
                        {cat.count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          <div className="text-[10.5px] text-slate-400 font-medium text-center pt-3 border-t border-slate-200/60 mt-2">
            Enterprise Real-Estate ERP v4.2
          </div>
        </div>

        {/* RIGHT CONTENT AREA: SEARCH & HORIZONTAL CARDS GRID */}
        <div className="flex-1 p-5 flex flex-col justify-between bg-white overflow-hidden">

          <div className="space-y-4">
            {/* HEADER ROW WITH CLEAN MINIMAL SEARCH BAR AND CLOSE BUTTON */}
            <div className="flex items-center justify-between gap-3">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search modules, tools & apps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-12 h-10 rounded-full bg-[#f1f5f9] border-slate-200 text-[13px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:border-slate-200 focus:bg-[#f1f5f9] shadow-none"
                />
                <Search size={16} className="absolute left-3.5 top-3 text-slate-400 pointer-events-none" />
                <kbd className="absolute right-3.5 top-2.5 hidden sm:inline-flex items-center bg-white border border-slate-200 rounded-full px-2 py-0.5 text-[10px] font-mono font-semibold text-slate-400">
                  Esc
                </kbd>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-600 flex items-center justify-center transition-colors cursor-pointer shrink-0 border border-slate-200/60"
                title="Close Window (Esc)"
              >
                <X size={17} />
              </button>
            </div>

            {/* MODULE APP CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[580px] overflow-y-auto p-1 pt-1.5 custom-scrollbar">
              {getCurrentApps().map((app) => {
                const IconComponent = app.icon;
                return (
                  <div
                    key={app.id}
                    onClick={() => handleSelectApp(app.path)}
                    className="p-3 bg-white border border-slate-200/90 hover:border-[#0D6E4F] rounded-md flex flex-col justify-between text-left cursor-pointer transition-all duration-150 hover:shadow-md group"
                  >
                    <div>
                      <div className={`w-8 h-8 rounded-md ${app.iconBg} ${app.iconColor} flex items-center justify-center mb-2 shadow-2xs group-hover:scale-105 transition-transform`}>
                        <IconComponent size={17} strokeWidth={2} />
                      </div>
                      <h4 className="text-[13px] font-bold text-slate-900 group-hover:text-[#0D6E4F] transition-colors leading-tight">
                        {app.name}
                      </h4>
                      <p className="text-[11px] font-medium text-slate-500 mt-1 leading-tight line-clamp-2">
                        {app.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>,
    document.body
  );
}

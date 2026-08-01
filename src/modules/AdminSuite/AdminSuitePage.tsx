import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
    Search, Plus, Filter, Download, ArrowUpDown, ChevronLeft, ChevronRight, 
    MoreVertical, CheckCircle2, Clock, AlertTriangle, Building2, Landmark, 
    Users, Shield, FileText, HardHat, Target, DollarSign, Box, Briefcase, 
    BarChart3, Settings, Eye, Edit, Trash2, CheckSquare, Sparkles, MapPin
} from 'lucide-react';

interface DummyRecord {
    id: string;
    code: string;
    title: string;
    subtitle: string;
    category: string;
    status: 'Active' | 'Pending' | 'Approved' | 'Completed' | 'Warning';
    date: string;
    amount?: string;
    meta?: string;
}

// Generate realistic Real Estate ERP dummy data based on path context
const getDummyDataForPath = (pathname: string): { title: string; subtitle: string; icon: any; records: DummyRecord[]; stats: { label: string; value: string; change: string; isUp: boolean }[] } => {
    
    // Core Foundation
    if (pathname.includes('/core/companies')) {
        return {
            title: 'Companies Setup',
            subtitle: 'Manage group parent companies, subsidiaries, and corporate entities',
            icon: Building2,
            stats: [
                { label: 'Total Companies', value: '6 Entities', change: '+2 this year', isUp: true },
                { label: 'Active Branches', value: '18 Locations', change: '4 Divisional Hubs', isUp: true },
                { label: 'Total Staff', value: '450 Employees', change: '+12% growth', isUp: true },
                { label: 'HQ Location', value: 'Gulshan 2, Dhaka', change: 'Primary Campus', isUp: true },
            ],
            records: [
                { id: '1', code: 'CMP-001', title: 'Apex Real Estate & Developments Ltd.', subtitle: 'Parent Holding Corporation', category: 'HQ / Corporate', status: 'Active', date: '2026-01-15', amount: '৳ 250 Cr Capital', meta: 'Reg: #C-98412' },
                { id: '2', code: 'CMP-002', title: 'Apex Land Holdings Corp.', subtitle: 'Land Acquisition & Bank', category: 'Subsidiary', status: 'Active', date: '2026-02-01', amount: '৳ 180 Cr Capital', meta: 'Reg: #C-10492' },
                { id: '3', code: 'CMP-003', title: 'Apex Construction Infrastructure', subtitle: 'Civil & Architectural Execution', category: 'Subsidiary', status: 'Active', date: '2026-03-10', amount: '৳ 120 Cr Capital', meta: 'Reg: #C-11048' },
                { id: '4', code: 'CMP-004', title: 'Apex Property Management Services', subtitle: 'Facility & Rental Management', category: 'Services', status: 'Active', date: '2026-04-05', amount: '৳ 35 Cr Capital', meta: 'Reg: #C-12948' },
            ]
        };
    }

    if (pathname.includes('/land/bank') || pathname.includes('/land/')) {
        return {
            title: 'Land Bank & Acquisition',
            subtitle: 'Track plot inventories, survey status, mutation, and legal ownership files',
            icon: Landmark,
            stats: [
                { label: 'Total Land Bank', value: '142.5 Bigha', change: '+15.2 Bigha added', isUp: true },
                { label: 'Active Deeds', value: '38 Registration Files', change: '100% verified', isUp: true },
                { label: 'Pending Mutation', value: '4 Applications', change: 'AC Land Processing', isUp: false },
                { label: 'Total Valuation', value: '৳ 420.80 Cr', change: '+8.4% YoY', isUp: true },
            ],
            records: [
                { id: '1', code: 'LND-2026-01', title: 'Purbachal Sector 14 Commercial Plot A-12', subtitle: 'Owner: Md. Rafiqul Islam & Apex Holdings', category: 'Commercial Land', status: 'Approved', date: '2026-05-12', amount: '৳ 45.0 Cr', meta: '32.5 Katha • Mutation Complete' },
                { id: '2', code: 'LND-2026-02', title: 'Uttara Model Town Sector 18 Plot #45', subtitle: 'Owner: Begum Rokeya Sultana', category: 'Residential Land', status: 'Pending', date: '2026-06-04', amount: '৳ 28.5 Cr', meta: '18.0 Katha • AC Land Hearing' },
                { id: '3', code: 'LND-2026-03', title: 'Bashundhara R/A Block I Extension', subtitle: 'Owner: Apex Land Bank Trust', category: 'Mixed Development', status: 'Approved', date: '2026-06-20', amount: '৳ 92.0 Cr', meta: '60.0 Katha • Registration Completed' },
                { id: '4', code: 'LND-2026-04', title: 'Jolshiri Abashon Smart City Zone C', subtitle: 'Owner: Major General (Retd.) K. Ahmed', category: 'Residential Mega Plot', status: 'Active', date: '2026-07-11', amount: '৳ 64.2 Cr', meta: '45.0 Katha • Survey Verified' },
            ]
        };
    }

    if (pathname.includes('/projects/') || pathname.includes('/property/')) {
        return {
            title: 'Project & Property Inventory',
            subtitle: 'Monitor mega projects, towers, block units, floor layouts & availability status',
            icon: Building2,
            stats: [
                { label: 'Total Projects', value: '14 Active Projects', change: '3 New Launches', isUp: true },
                { label: 'Constructed Towers', value: '28 High-Rise Towers', change: '85% booked', isUp: true },
                { label: 'Available Units', value: '164 Apartments', change: 'Ready for handover', isUp: true },
                { label: 'Gross Portfolio', value: '৳ 1,480 Cr', change: '+18.2% sales rate', isUp: true },
            ],
            records: [
                { id: '1', code: 'PRJ-TWR-01', title: 'Apex Imperial Heights - Tower A', subtitle: '24 Storey Luxury Residential Apartment Tower', category: 'Residential High-Rise', status: 'Active', date: 'Handover Q4 2026', amount: '৳ 3.8 Cr / Unit', meta: 'Gulshan 1 • 88% Sold' },
                { id: '2', code: 'PRJ-TWR-02', title: 'Apex Tech Plaza & Commercial Complex', subtitle: '18 Storey Smart Office & Retail Hub', category: 'Commercial Tech Hub', status: 'Approved', date: 'Handover Q2 2027', amount: '৳ 42,000 / SqFt', meta: 'Banani C/A • 65% Booked' },
                { id: '3', code: 'PRJ-TWR-03', title: 'Green Park Oasis Villa Community', subtitle: 'Duplex & Triplex Eco Luxury Residences', category: 'Gated Villa Project', status: 'Active', date: 'Handover Q1 2027', amount: '৳ 6.5 Cr / Villa', meta: 'Purbachal Road • 75% Sold' },
                { id: '4', code: 'PRJ-TWR-04', title: 'Skyline Panorama Towers B & C', subtitle: '30 Storey Iconic Dual Twin Towers', category: 'Mixed Development', status: 'Pending', date: 'Under Foundation Works', amount: '৳ 2.9 Cr / Unit', meta: 'Dhanmondi Rd 27 • Pre-Launch' },
            ]
        };
    }

    if (pathname.includes('/construction/')) {
        return {
            title: 'Construction & Civil BOQ',
            subtitle: 'Manage Bill of Quantities (BOQ), raw materials, site engineers & contractor claims',
            icon: HardHat,
            stats: [
                { label: 'Active Sites', value: '8 Live Projects', change: '12 Senior Engineers', isUp: true },
                { label: 'Total Steel Stock', value: '1,450 MT Rebar', change: 'Grade 60 Deformed', isUp: true },
                { label: 'Monthly Concrete', value: '18,500 m³ RMC', change: 'C35/C40 Strength', isUp: true },
                { label: 'Quality Score', value: '98.6% Passed', change: 'BUET Testing Lab', isUp: true },
            ],
            records: [
                { id: '1', code: 'BOQ-STEEL-88', title: 'Grade 60 Deformed High Strength Steel Bars', subtitle: 'Vendor: BSRM Steels Ltd • Site: Imperial Heights', category: 'Raw Materials', status: 'Approved', date: '2026-07-28', amount: '৳ 4.85 Cr', meta: '500 MT Delivered • Verified' },
                { id: '2', code: 'BOQ-CONC-102', title: 'Ready-Mix Concrete C35 High Performance Concrete', subtitle: 'Vendor: Mir Concrete Ltd • Site: Tech Plaza', category: 'Structural Concrete', status: 'Active', date: '2026-07-30', amount: '৳ 2.20 Cr', meta: '3,200 m³ Poured' },
                { id: '3', code: 'BOQ-FND-004', title: 'Cast-In-Situ Piling Foundation Work (1200mm Dia)', subtitle: 'Contractor: China Railway 18th Bureau', category: 'Civil Foundation', status: 'Completed', date: '2026-06-15', amount: '৳ 14.5 Cr', meta: '180 Piles Drilled' },
                { id: '4', code: 'BOQ-ELEV-012', title: 'High-Speed Smart Passenger Lifts (2.5 m/s)', subtitle: 'Vendor: Mitsubishi Elevator Co. Ltd', category: 'MEP Machinery', status: 'Pending', date: '2026-08-01', amount: '৳ 6.80 Cr', meta: '12 Units Import Order' },
            ]
        };
    }

    if (pathname.includes('/finance/') || pathname.includes('/accounting')) {
        return {
            title: 'Finance & Ledger Accounts',
            subtitle: 'Track customer payments, invoices, supplier bills, bank ledgers & cashflow balance',
            icon: DollarSign,
            stats: [
                { label: 'Total Collections', value: '৳ 38.40 Cr', change: 'This Month', isUp: true },
                { label: 'Pending Invoices', value: '৳ 4.25 Cr', change: 'Due within 15 days', isUp: false },
                { label: 'Bank Liquidity', value: '৳ 84.50 Cr', change: '5 Scheduled Banks', isUp: true },
                { label: 'Net Profit Margin', value: '24.8%', change: '+3.2% vs budget', isUp: true },
            ],
            records: [
                { id: '1', code: 'INV-2026-8891', title: 'Customer Apartment Booking Installment #4', subtitle: 'Client: Dr. Tariqul Alam (Unit #A-1402, Imperial Heights)', category: 'Customer Receivables', status: 'Completed', date: '2026-07-29', amount: '৳ 45,00,000', meta: 'Bank Deposit • City Bank' },
                { id: '2', code: 'INV-2026-8892', title: 'Supplier Bill: High-Grade Tiles & Sanitary Fittings', subtitle: 'Vendor: RAK Ceramics Bangladesh Ltd', category: 'Vendor Payables', status: 'Approved', date: '2026-07-31', amount: '৳ 88,40,000', meta: 'L/C Settlement Pending' },
                { id: '3', code: 'INV-2026-8893', title: 'Monthly Civil Engineering Contractor Certificate #6', subtitle: 'Contractor: National Development Engineers (NDE)', category: 'Contractor Bill', status: 'Pending', date: '2026-08-01', amount: '৳ 1,42,00,000', meta: 'Audit Verification' },
                { id: '4', code: 'INV-2026-8894', title: 'Commercial Office Space Rental Invoice #AUG-01', subtitle: 'Tenant: Grameenphone Tech Division (Fl 8-10)', category: 'Rental Income', status: 'Active', date: '2026-08-01', amount: '৳ 32,50,000', meta: 'Monthly Rent & Service' },
            ]
        };
    }

    if (pathname.includes('/crm/')) {
        return {
            title: 'CRM & Lead Management',
            subtitle: 'Nurture high-net-worth real estate buyers, site visits, bookings and sales deals',
            icon: Target,
            stats: [
                { label: 'Active Prospects', value: '1,280 Leads', change: '+142 this week', isUp: true },
                { label: 'Site Visits Scheduled', value: '48 Visits', change: 'Weekend Booking', isUp: true },
                { label: 'Conversion Rate', value: '18.4%', change: 'Lead to Sale', isUp: true },
                { label: 'Expected Pipeline', value: '৳ 185 Cr', change: 'Hot Prospects', isUp: true },
            ],
            records: [
                { id: '1', code: 'CRM-LD-991', title: 'Engr. Mahmud Hasan & Family', subtitle: 'Interested in 2800 SqFt Gulshan Duplex Apartment', category: 'Hot Lead', status: 'Active', date: 'Site Visit: Tomorrow 3 PM', amount: '৳ 4.5 Cr Budget', meta: 'Source: Digital Campaign' },
                { id: '2', code: 'CRM-LD-992', title: 'Syeda Nusrat Jahan (NRB Buyer - UK)', subtitle: 'Looking for Commercial Floor Space in Banani C/A', category: 'High Net-Worth NRB', status: 'Approved', date: 'Token Booking Paid', amount: '৳ 8.2 Cr Budget', meta: 'Agent: Tanvir Ahmed' },
                { id: '3', code: 'CRM-LD-993', title: 'Square Pharmaceuticals Staff Cooperative', subtitle: 'Bulk Purchase Inquiry for 15 Residential Units', category: 'Corporate Lead', status: 'Pending', date: 'MOU Draft Review', amount: '৳ 35 Cr Deal', meta: 'Lead Owner: Head of Sales' },
                { id: '4', code: 'CRM-LD-994', title: 'Dr. Shahriar Khan', subtitle: 'Purbachal Villa Project Site Visit Confirmation', category: 'Warm Lead', status: 'Active', date: 'Completed Visit 30 Jul', amount: '৳ 6.0 Cr Budget', meta: 'Feedback: Very Interested' },
            ]
        };
    }

    // Default Fallback matching path name formatted nicely
    const pathSegments = pathname.split('/').filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1] || 'Dashboard';
    const formattedTitle = lastSegment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    return {
        title: `${formattedTitle} Overview`,
        subtitle: `Real-time management dashboard and data entries for ${formattedTitle}`,
        icon: FileText,
        stats: [
            { label: 'Total Records', value: '254 Items', change: 'Updated just now', isUp: true },
            { label: 'Active Items', value: '218 Verified', change: '92% operational', isUp: true },
            { label: 'Pending Actions', value: '14 Review Needed', change: 'Action required', isUp: false },
            { label: 'System Health', value: '100% Operational', change: 'All APIs green', isUp: true },
        ],
        records: [
            { id: '1', code: 'REC-001', title: `${formattedTitle} Master Item #1`, subtitle: 'Primary record entry with complete verified document verification', category: 'Primary', status: 'Approved', date: '2026-08-01', amount: '৳ 12.50 Lakh', meta: 'Verified by Admin' },
            { id: '2', code: 'REC-002', title: `${formattedTitle} Operations Entry #2`, subtitle: 'Secondary operations workflow item under current system module', category: 'Operations', status: 'Active', date: '2026-07-31', amount: '৳ 8.40 Lakh', meta: 'In Progress' },
            { id: '3', code: 'REC-003', title: `${formattedTitle} Audit Log #3`, subtitle: 'Detailed record history log and status verification check', category: 'Audit Record', status: 'Completed', date: '2026-07-30', amount: '৳ 4.20 Lakh', meta: 'System Logged' },
            { id: '4', code: 'REC-004', title: `${formattedTitle} Pending Review #4`, subtitle: 'Item submitted by module officer awaiting senior management approval', category: 'Pending Approval', status: 'Pending', date: '2026-07-29', amount: '৳ 18.00 Lakh', meta: 'Awaiting Sign-off' },
        ]
    };
};

export default function AdminSuitePage() {
    const location = useLocation();
    const data = getDummyDataForPath(location.pathname);
    const IconComponent = data.icon;

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState<string>('All');
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const filteredRecords = data.records.filter(record => {
        const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              record.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              record.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = selectedStatus === 'All' || record.status === selectedStatus;
        return matchesSearch && matchesStatus;
    });

    const toggleSelectAll = () => {
        if (selectedItems.length === filteredRecords.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(filteredRecords.map(r => r.id));
        }
    };

    const toggleSelectItem = (id: string) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const getStatusBadge = (status: DummyRecord['status']) => {
        switch (status) {
            case 'Active':
            case 'Approved':
                return 'bg-emerald-50 text-[#0D6E4F] border-emerald-200/80';
            case 'Completed':
                return 'bg-blue-50 text-blue-700 border-blue-200';
            case 'Pending':
                return 'bg-amber-50 text-amber-700 border-amber-200';
            case 'Warning':
                return 'bg-rose-50 text-rose-700 border-rose-200';
            default:
                return 'bg-slate-50 text-slate-700 border-slate-200';
        }
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto animate-fade-in">
            
            {/* TOP HEADER BLOCK */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF5EF] text-[#0D6E4F] flex items-center justify-center shrink-0 shadow-2xs">
                        <IconComponent size={26} strokeWidth={1.8} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{data.title}</h1>
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EAF5EF] text-[#0D6E4F]">
                                Live System
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm mt-0.5 font-medium">{data.subtitle}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors cursor-pointer bg-white">
                        <Download size={15} />
                        <span>Export Data</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D6E4F] hover:bg-[#09523b] text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer">
                        <Plus size={16} />
                        <span>Add New Entry</span>
                    </button>
                </div>
            </div>

            {/* KEY METRICS & STATS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                        <div className="flex items-baseline justify-between mt-2">
                            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">{stat.value}</span>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${stat.isUp ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                                {stat.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* MAIN DATA TABLE WRAPPER */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
                
                {/* TOOLBAR: SEARCH & FILTERS */}
                <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/50">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative w-full sm:w-80">
                            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search records by code, title, owner..."
                                className="w-full pl-10 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 outline-none focus:border-[#0D6E4F] transition-colors"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Filter size={15} className="text-slate-400" />
                            <select
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 outline-none focus:border-[#0D6E4F] cursor-pointer"
                            >
                                <option value="All">All Statuses</option>
                                <option value="Active">Active</option>
                                <option value="Approved">Approved</option>
                                <option value="Completed">Completed</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>

                    <div className="text-xs font-semibold text-slate-500">
                        Showing <span className="text-slate-900 font-bold">{filteredRecords.length}</span> entries
                    </div>
                </div>

                {/* TABLE */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100 bg-slate-50/70 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                <th className="py-3.5 px-4 w-10">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.length === filteredRecords.length && filteredRecords.length > 0}
                                        onChange={toggleSelectAll}
                                        className="rounded border-slate-300 text-[#0D6E4F] focus:ring-[#0D6E4F] cursor-pointer"
                                    />
                                </th>
                                <th className="py-3.5 px-4">Code / ID</th>
                                <th className="py-3.5 px-4">Title & Details</th>
                                <th className="py-3.5 px-4">Category</th>
                                <th className="py-3.5 px-4">Status</th>
                                <th className="py-3.5 px-4">Date / Timeline</th>
                                <th className="py-3.5 px-4 text-right">Valuation / Amount</th>
                                <th className="py-3.5 px-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs">
                            {filteredRecords.map((record) => {
                                const isSelected = selectedItems.includes(record.id);
                                return (
                                    <tr key={record.id} className={`hover:bg-slate-50/80 transition-colors ${isSelected ? 'bg-[#EAF5EF]/30' : ''}`}>
                                        <td className="py-4 px-4">
                                            <input
                                                type="checkbox"
                                                checked={isSelected}
                                                onChange={() => toggleSelectItem(record.id)}
                                                className="rounded border-slate-300 text-[#0D6E4F] focus:ring-[#0D6E4F] cursor-pointer"
                                            />
                                        </td>
                                        <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                                            <span className="px-2 py-1 rounded bg-slate-100 text-slate-700 font-mono text-[11px]">
                                                {record.code}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="font-bold text-slate-900 text-[13px]">{record.title}</div>
                                            <div className="text-slate-500 font-medium text-[11.5px] mt-0.5">{record.subtitle}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold text-[11px]">
                                                {record.category}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4 whitespace-nowrap">
                                            <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${getStatusBadge(record.status)}`}>
                                                {record.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4 text-slate-600 font-medium whitespace-nowrap">
                                            {record.date}
                                        </td>
                                        <td className="py-4 px-4 text-right font-extrabold text-slate-900 whitespace-nowrap">
                                            {record.amount || '—'}
                                        </td>
                                        <td className="py-4 px-4 text-center whitespace-nowrap">
                                            <div className="flex items-center justify-center gap-1.5 text-slate-400">
                                                <button className="p-1.5 rounded-lg hover:text-[#0D6E4F] hover:bg-emerald-50 transition-colors cursor-pointer" title="View Details">
                                                    <Eye size={16} />
                                                </button>
                                                <button className="p-1.5 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer" title="Edit">
                                                    <Edit size={16} />
                                                </button>
                                                <button className="p-1.5 rounded-lg hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer" title="Delete">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* PAGINATION */}
                <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium bg-slate-50/40">
                    <div>
                        Showing 1 to {filteredRecords.length} of {filteredRecords.length} entries
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-50 transition-colors cursor-pointer" disabled>
                            <ChevronLeft size={16} />
                        </button>
                        <button className="px-3 py-1 rounded-lg bg-[#0D6E4F] text-white font-bold text-xs">1</button>
                        <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-50 transition-colors cursor-pointer" disabled>
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}

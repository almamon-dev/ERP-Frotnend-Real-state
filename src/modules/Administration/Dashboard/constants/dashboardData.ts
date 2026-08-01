import {
  Building2,
  Landmark,
  Home,
  Users,
  FilePlus,
  CreditCard,
  AlertCircle,
  Briefcase
} from 'lucide-react';

export const kpiStatsData = [
  { title: 'Total Companies', value: '24', change: '+12.5%', isUp: true, icon: Building2, color: 'bg-emerald-50 text-emerald-600' },
  { title: 'Total Projects', value: '58', change: '+8.1%', isUp: true, icon: Landmark, color: 'bg-emerald-50 text-emerald-600' },
  { title: 'Total Properties', value: '1,245', change: '+15.3%', isUp: true, icon: Home, color: 'bg-teal-50 text-teal-600' },
  { title: 'Total Customers', value: '3,568', change: '+9.6%', isUp: true, icon: Users, color: 'bg-blue-50 text-blue-600' },
  { title: 'Total Bookings', value: '856', change: '+7.2%', isUp: true, icon: FilePlus, color: 'bg-purple-50 text-purple-600' },
  { title: 'Monthly Revenue', value: '৳ 12.64 Cr', change: '+18.7%', isUp: true, icon: CreditCard, color: 'bg-emerald-50 text-emerald-600' },
  { title: 'Outstanding Due', value: '৳ 4.32 Cr', change: '-2.4%', isUp: false, icon: AlertCircle, color: 'bg-rose-50 text-rose-600' },
  { title: 'Active Employees', value: '342', change: '+5.4%', isUp: true, icon: Briefcase, color: 'bg-teal-50 text-teal-600' },
];

export const revenueData = [
  { day: 'Jan', value: 7.4 },
  { day: 'Feb', value: 8.2 },
  { day: 'Mar', value: 9.6 },
  { day: 'Apr', value: 10.8 },
  { day: 'May', value: 12.6 },
  { day: 'Jun', value: 14.1 },
];

export const salesData = [
  { day: 'Jan', value: 5.2 },
  { day: 'Feb', value: 6.1 },
  { day: 'Mar', value: 7.8 },
  { day: 'Apr', value: 8.4 },
  { day: 'May', value: 9.3 },
  { day: 'Jun', value: 11.0 },
];

export const bookingsBarData = [
  { day: 'Jan', value: 520 },
  { day: 'Feb', value: 610 },
  { day: 'Mar', value: 740 },
  { day: 'Apr', value: 790 },
  { day: 'May', value: 856 },
  { day: 'Jun', value: 940 },
];

export const propertyStatusData = [
  { name: 'Available', value: 652, percent: '52.4%', color: '#10b981' },
  { name: 'Booked', value: 256, percent: '20.6%', color: '#3b82f6' },
  { name: 'Sold', value: 210, percent: '16.8%', color: '#a855f7' },
  { name: 'Rented', value: 127, percent: '10.2%', color: '#f59e0b' },
];

export const projectProgressData = [
  { name: 'Completed', value: 18, percent: '31.0%', color: '#10b981' },
  { name: 'Ongoing', value: 28, percent: '48.3%', color: '#3b82f6' },
  { name: 'Delayed', value: 8, percent: '13.8%', color: '#f43f5e' },
  { name: 'Upcoming', value: 4, percent: '6.9%', color: '#a855f7' },
];

export const leadFunnelData = [
  { label: 'Total Leads', count: 1250, color: 'bg-blue-500' },
  { label: 'Qualified Leads', count: 840, color: 'bg-teal-500' },
  { label: 'Site Visits', count: 520, color: 'bg-emerald-500' },
  { label: 'Proposals Sent', count: 310, color: 'bg-amber-500' },
  { label: 'Converted Deals', count: 185, color: 'bg-rose-500' },
];

export const topProjectsData = [
  { name: 'Green Park Phase 2', sales: '৳ 4.2 Cr', collection: '৳ 3.8 Cr', progress: 85 },
  { name: 'Sunshine City Tower', sales: '৳ 3.6 Cr', collection: '৳ 3.1 Cr', progress: 70 },
  { name: 'Green Valley Enclave', sales: '৳ 2.8 Cr', collection: '৳ 2.4 Cr', progress: 60 },
  { name: 'Oceanic Breeze Villa', sales: '৳ 2.1 Cr', collection: '৳ 1.9 Cr', progress: 92 },
  { name: 'Skyline Heights', sales: '৳ 1.9 Cr', collection: '৳ 1.5 Cr', progress: 45 },
];

export const notificationsData = [
  { title: 'New Property Booking', desc: 'Unit 4B booked by Rahat Chowdhury', time: '10 min ago', color: 'bg-emerald-50 text-emerald-600' },
  { title: 'Payment Received', desc: '৳ 5,00,000 received for Invoice #1042', time: '45 min ago', color: 'bg-blue-50 text-blue-600' },
  { title: 'Document Approved', desc: 'Deed agreement approved by Legal Team', time: '2 hours ago', color: 'bg-purple-50 text-purple-600' },
  { title: 'Project Delay Alert', desc: 'Piling delayed at Site #3 due to rain', time: '4 hours ago', color: 'bg-amber-50 text-amber-600' },
  { title: 'New Lead Assigned', desc: 'Lead #8492 assigned to Sales Executive', time: '5 hours ago', color: 'bg-teal-50 text-teal-600' },
];

export const systemHealthData = [
  { name: 'Database Server', status: 'Optimal' },
  { name: 'Storage Engine', status: 'Optimal' },
  { name: 'API Services', status: 'Optimal' },
  { name: 'Background Queue', status: 'Active' },
  { name: 'Backup System', status: 'Synced' },
];

export const recentActivitiesData = [
  { title: 'Casual Leave [CL]', desc: 'Applied by Tanvir Hasan', time: '10 min ago', color: 'bg-amber-50 text-amber-600' },
  { title: 'Sick Leave [SL]', desc: 'Approved for Farhana Akter', time: '35 min ago', color: 'bg-emerald-50 text-emerald-600' },
  { title: 'Expense Claim', desc: '৳ 5,240 submitted by Field Engineer', time: '1 hour ago', color: 'bg-teal-50 text-teal-600' },
  { title: 'IOU Request', desc: '৳ 10,000 requested for site materials', time: '3 hours ago', color: 'bg-blue-50 text-blue-600' },
  { title: 'Annual Leave [AL]', desc: '3 Days requested by Project Manager', time: '5 hours ago', color: 'bg-rose-50 text-rose-600' },
];

export const pendingApprovalsData = [
  { name: 'Property Approvals', count: 4, color: 'bg-amber-50 text-amber-600' },
  { name: 'Booking Approvals', count: 7, color: 'bg-emerald-50 text-emerald-600' },
  { name: 'Payment Requisitions', count: 12, color: 'bg-blue-50 text-blue-600' },
  { name: 'Leave Applications', count: 5, color: 'bg-purple-50 text-purple-600' },
  { name: 'Purchase Orders', count: 3, color: 'bg-teal-50 text-teal-600' },
];

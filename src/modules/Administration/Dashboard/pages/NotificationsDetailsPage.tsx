import React, { useState } from 'react';
import { Bell, AlertTriangle, Info, RefreshCw, CheckCheck } from 'lucide-react';
import NotificationModal from '@/components/modals/notification-modal';

export default function NotificationsDetailsPage() {
  const [filter, setFilter] = useState('all');
  const [selectedNotif, setSelectedNotif] = useState<any | null>(null);

  const [notifications, setNotifications] = useState([
    {
      id: 'NOTIF-101',
      title: 'Scheduled System Update v4.2.0 & Maintenance Window',
      desc: 'Critical system upgrade scheduled for 02:00 AM UTC with schema migrations.',
      time: 'Just now',
      severity: 'high',
      module: 'System Core',
      read: false,
      version: 'v4.2.0-RELEASE',
      impact: 'High (30 Mins Maintenance Window)',
      instructions: [
        '1. All active ERP sessions will be automatically saved and suspended at 01:55 AM UTC.',
        '2. PostgreSQL schema migration (v4.1 to v4.2) and Redis cache flush will execute sequentially.',
        '3. Cluster background workers will automatically restart after container deployment.',
        '4. Automatic rollback via AWS S3 Snapshot #9402 is active in case of health check timeout.'
      ]
    },
    {
      id: 'NOTIF-102',
      title: 'New Property Booking',
      desc: 'Unit 4B booked by Rahat Chowdhury',
      time: '10 min ago',
      severity: 'info',
      module: 'Real Estate Sales',
      read: false,
      impact: 'Standard Sales Flow',
      instructions: [
        'Booking agreement #BK-4091 has been generated.',
        'Token payment of BDT 500,000 recorded via bank transfer.'
      ]
    },
    {
      id: 'NOTIF-103',
      title: 'Payment Received',
      desc: '৳ 5,00,000 received for Invoice #1042',
      time: '45 min ago',
      severity: 'info',
      module: 'Accounts & Billing',
      read: false,
      impact: 'Low',
      instructions: [
        'Automated payment receipt sent to customer email.',
        'Ledger entry synced with central ERP accounting stream.'
      ]
    },
    {
      id: 'NOTIF-104',
      title: 'Document Approved',
      desc: 'Deed agreement approved by Legal Team',
      time: '2 hours ago',
      severity: 'info',
      module: 'Legal & Land',
      read: true,
      impact: 'Low',
      instructions: [
        'Property deed verification completed by Chief Legal Advisor.',
        'Ready for customer registration appointment.'
      ]
    },
    {
      id: 'NOTIF-105',
      title: 'Project Delay Alert',
      desc: 'Piling delayed at Site #3 due to heavy rain',
      time: '4 hours ago',
      severity: 'medium',
      module: 'Project Management',
      read: true,
      impact: 'Medium (Schedule Adjustments)',
      instructions: [
        'Site supervisor requested 3 days timeline extension.',
        'Civil engineering lead notified for schedule adjustment.'
      ]
    },
    {
      id: 'NOTIF-106',
      title: 'New Lead Assigned',
      desc: 'Lead #8492 assigned to Sales Executive',
      time: '5 hours ago',
      severity: 'info',
      module: 'CRM',
      read: true,
      impact: 'Low',
      instructions: [
        'Lead contact details dispatched to mobile CRM app.',
        'Follow-up call scheduled within 24 hours.'
      ]
    }
  ]);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'unread') return !n.read;
    if (filter === 'high') return n.severity === 'high';
    return true;
  });

  return (
    <div className="p-4 sm:p-6 space-y-4 bg-slate-50/50 min-h-screen">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2.5 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base font-semibold text-slate-800 tracking-tight">System Alerts & Notifications Center</h1>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
              <Bell size={11} /> {notifications.filter(n => !n.read).length} Unread Alerts
            </span>
          </div>
          <p className="text-[11.5px] text-slate-500 mt-0.5">Real-time enterprise notifications, security alerts, and administrative updates</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={markAllRead}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
          >
            <CheckCheck size={12} className="text-slate-500" /> Mark All Read
          </button>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
          >
            <RefreshCw size={12} className="text-slate-500" /> Refresh Feed
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-md border border-slate-200/90 shadow-2xs p-3 space-y-3">
        {/* Filter Switcher */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex gap-1 bg-slate-100 p-0.5 rounded text-[10px] font-medium">
            <button
              onClick={() => setFilter('all')}
              className={`px-2.5 py-1 rounded cursor-pointer ${filter === 'all' ? 'bg-white text-slate-800 shadow-2xs font-semibold' : 'text-slate-500'}`}
            >
              All Notifications
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-2.5 py-1 rounded cursor-pointer ${filter === 'unread' ? 'bg-white text-slate-800 shadow-2xs font-semibold' : 'text-slate-500'}`}
            >
              Unread ({notifications.filter(n => !n.read).length})
            </button>
            <button
              onClick={() => setFilter('high')}
              className={`px-2.5 py-1 rounded cursor-pointer ${filter === 'high' ? 'bg-white text-rose-700 shadow-2xs font-semibold' : 'text-slate-500'}`}
            >
              High Severity
            </button>
          </div>

          <span className="text-[10.5px] text-slate-400">Showing {filteredNotifications.length} items</span>
        </div>

        {/* Notifications Feed List */}
        <div className="space-y-2">
          {filteredNotifications.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedNotif(item);
                setNotifications(notifications.map(n => n.id === item.id ? { ...n, read: true } : n));
              }}
              className={`p-3 rounded border transition-colors flex items-start justify-between gap-3 cursor-pointer hover:border-slate-300 ${
                !item.read ? 'bg-blue-50/30 border-blue-200/70' : 'bg-slate-50/50 border-slate-200/60'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <div className={`w-7 h-7 rounded shrink-0 flex items-center justify-center mt-0.5 ${
                  item.severity === 'high' ? 'bg-rose-100 text-rose-700' : item.severity === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {item.severity === 'high' ? <AlertTriangle size={14} /> : item.severity === 'medium' ? <Bell size={14} /> : <Info size={14} />}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">{item.id}</span>
                    <span className="px-1.5 py-0.2 rounded text-[9.5px] font-semibold bg-slate-200/70 text-slate-700">
                      {item.module}
                    </span>
                    {!item.read && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    )}
                  </div>
                  <h4 className="text-[12px] font-semibold text-slate-800 mt-0.5 hover:text-blue-600 transition-colors">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                </div>
              </div>

              <div className="text-right shrink-0 flex flex-col items-end gap-1">
                <span className="text-[10px] text-slate-400">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REUSABLE NOTIFICATION MODAL COMPONENT */}
      <NotificationModal
        isOpen={Boolean(selectedNotif)}
        onClose={() => setSelectedNotif(null)}
        notification={selectedNotif}
      />
    </div>
  );
}

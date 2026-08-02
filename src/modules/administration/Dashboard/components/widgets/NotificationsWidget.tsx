import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react';
import NotificationModal from '@/shared/components/modals/notification-modal';

export default function NotificationsWidget() {
  const navigate = useNavigate();
  const [selectedNotif, setSelectedNotif] = useState<any | null>(null);

  const notifications = [
    {
      id: 'NOTIF-991',
      title: 'Scheduled System Update v4.2.0 & Maintenance',
      desc: 'Critical system upgrade scheduled for 02:00 AM UTC with schema migrations.',
      time: 'Just now',
      color: 'bg-rose-50 text-rose-600 border border-rose-100',
      severity: 'high',
      module: 'System Core',
      instructions: [
        'All active ERP user sessions will be gracefully saved and suspended at 01:55 AM UTC.',
        'PostgreSQL schema migration (v4.1 to v4.2) and Redis cache flush will execute between 02:00 AM - 02:30 AM.',
        'Module administrators should verify queue workers and WebSocket gateways after node deployment.',
        'Automated failover rollback is active via AWS S3 Snapshot #9402 if any service health check fails.'
      ],
      version: 'v4.2.0-RELEASE',
      impact: 'High (Temporary Downtime 30 Mins)'
    },
    {
      id: 'NOTIF-992',
      title: 'New Property Booking',
      desc: 'Unit 4B booked by Rahat Chowdhury',
      time: '10 min ago',
      color: 'bg-emerald-50 text-emerald-600',
      severity: 'info',
      module: 'Real Estate Sales',
      instructions: [
        'Booking agreement #BK-4091 has been generated.',
        'Token payment of BDT 500,000 recorded via bank transfer.'
      ],
      impact: 'Standard Sales Flow'
    },
    {
      id: 'NOTIF-993',
      title: 'Payment Received',
      desc: '৳ 5,00,000 received for Invoice #1042',
      time: '45 min ago',
      color: 'bg-blue-50 text-blue-600',
      severity: 'info',
      module: 'Accounts & Billing',
      instructions: [
        'Automated payment receipt sent to customer email.',
        'Ledger entry synced with central ERP accounting stream.'
      ],
      impact: 'Low'
    },
    {
      id: 'NOTIF-994',
      title: 'Document Approved',
      desc: 'Deed agreement approved by Legal Team',
      time: '2 hours ago',
      color: 'bg-purple-50 text-purple-600',
      severity: 'info',
      module: 'Legal & Land',
      instructions: [
        'Property deed verification completed by Chief Legal Advisor.',
        'Ready for customer registration appointment.'
      ],
      impact: 'Low'
    },
    {
      id: 'NOTIF-995',
      title: 'Project Delay Alert',
      desc: 'Piling delayed at Site #3 due to heavy rain',
      time: '4 hours ago',
      color: 'bg-amber-50 text-amber-600',
      severity: 'medium',
      module: 'Project Management',
      instructions: [
        'Site supervisor requested 3 days timeline extension.',
        'Civil engineering lead notified for schedule adjustment.'
      ],
      impact: 'Medium (Schedule Adjustments)'
    },
    {
      id: 'NOTIF-996',
      title: 'New Lead Assigned',
      desc: 'Lead #8492 assigned to Sales Executive',
      time: '5 hours ago',
      color: 'bg-teal-50 text-teal-600',
      severity: 'info',
      module: 'CRM',
      instructions: [
        'Lead contact details dispatched to mobile CRM app.',
        'Follow-up call scheduled within 24 hours.'
      ],
      impact: 'Low'
    }
  ];

  return (
    <div className="bg-white p-3 rounded-md border border-slate-200/90 shadow-2xs flex flex-col mb-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <h3 className="text-[12.5px] font-semibold text-slate-800">Notifications</h3>
          <span className="px-1.5 py-0.2 text-[9.5px] font-bold text-rose-700 bg-rose-50 border border-rose-200/80 rounded-full">
            99+
          </span>
        </div>
        <button
          onClick={() => navigate('/administration/dashboard/notifications')}
          className="text-[10.5px] font-medium text-slate-500 hover:text-slate-800 cursor-pointer hover:underline bg-transparent border-none p-0"
        >
          View All
        </button>
      </div>

      <div className="space-y-2">
        {notifications.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedNotif(item)}
            className="flex items-start gap-2.5 text-[11px] hover:bg-slate-50 p-1.5 rounded border border-transparent hover:border-slate-200/60 transition-all cursor-pointer"
          >
            <div className={`w-5 h-5 rounded ${item.color} flex items-center justify-center shrink-0 mt-0.5`}>
              <Bell size={11} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-800 truncate text-[11.5px] hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <span className="text-[9.5px] text-slate-400 font-normal shrink-0">{item.time}</span>
              </div>
              <p className="text-[10.5px] text-slate-500 font-normal truncate">{item.desc}</p>
            </div>
          </div>
        ))}
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

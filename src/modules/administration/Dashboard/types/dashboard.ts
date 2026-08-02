import { LucideIcon } from 'lucide-react';

export interface StatItem {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  desc: string;
  time: string;
  type: 'sale' | 'booking' | 'payment' | 'customer';
  badgeColor: string;
}

export interface PendingApprovalItem {
  id: string;
  title: string;
  requester: string;
  date: string;
  amount?: string;
  type: 'Property' | 'Booking' | 'Payment' | 'Leave' | 'Purchase';
}

export interface NotificationItem {
  id: string;
  title: string;
  desc: string;
  time: string;
  severity: 'high' | 'medium' | 'info';
}

export interface CalendarEventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'Meeting' | 'Site Visit' | 'Deadline' | 'Payment Due';
}

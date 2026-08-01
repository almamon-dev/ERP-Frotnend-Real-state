import { Briefcase, Users, Clock, Calendar, DollarSign, Award } from 'lucide-react';
import { SidebarNavItem } from '@/components/sidebar/types/sidebar';

export const hrNavigation: SidebarNavItem[] = [
  {
    category: 'HR',
    group: 'HR',
    icon: Briefcase,
    items: [
      { name: 'Employees', path: '/admin/hr/employees', icon: Users },
      { name: 'Attendance', path: '/admin/hr/attendance', icon: Clock },
      { name: 'Leave', path: '/admin/hr/leave', icon: Calendar },
      { name: 'Payroll', path: '/admin/hr/payroll', icon: DollarSign },
      { name: 'Performance', path: '/admin/hr/performance', icon: Award },
    ]
  }
];

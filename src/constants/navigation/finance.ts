import { DollarSign, CreditCard, Receipt, FileText, Landmark, Coins, BookOpen } from 'lucide-react';
import { SidebarNavItem } from '@/components/sidebar/types/sidebar';

export const financeNavigation: SidebarNavItem[] = [
  {
    category: 'Finance',
    group: 'Finance',
    icon: DollarSign,
    items: [
      { name: 'Accounts', path: '/admin/finance/accounts', icon: CreditCard },
      { name: 'Payments', path: '/admin/finance/payments', icon: Receipt },
      { name: 'Invoices', path: '/admin/finance/invoices', icon: FileText },
      { name: 'Expenses', path: '/admin/finance/expenses', icon: DollarSign },
      { name: 'Bank', path: '/admin/finance/bank', icon: Landmark },
      { name: 'Cash', path: '/admin/finance/cash', icon: Coins },
      { name: 'Ledger', path: '/admin/finance/ledger', icon: BookOpen },
    ]
  }
];

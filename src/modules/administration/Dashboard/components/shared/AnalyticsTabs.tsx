import React from 'react';

interface AnalyticsTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sessionKey?: string;
}

export default function AnalyticsTabs({
  activeTab,
  setActiveTab,
  sessionKey = 'admin_analytics_active_tab'
}: AnalyticsTabsProps) {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'sales', label: 'Sales Analytics' },
    { id: 'property', label: 'Property Analytics' },
    { id: 'customer', label: 'Customer Analytics' },
    { id: 'finance', label: 'Finance Analytics' },
    { id: 'employee', label: 'Employee Analytics' },
    { id: 'marketing', label: 'Marketing Analytics' },
  ];

  const handleTabClick = (tabId: string) => {
    if (sessionKey) {
      sessionStorage.setItem(sessionKey, tabId);
    }
    setActiveTab(tabId);
  };

  return (
    <div className="border-b border-slate-200/80 mb-1">
      <div className="flex items-center gap-7 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`py-2 text-[13px] font-medium transition-all relative whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'text-emerald-600 font-semibold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500 rounded-t-sm" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

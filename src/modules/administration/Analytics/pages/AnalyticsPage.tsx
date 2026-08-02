import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AnalyticsTopHeader from '../../Dashboard/components/shared/AnalyticsTopHeader';
import AnalyticsTabs from '../../Dashboard/components/shared/AnalyticsTabs';

// Overview components
import AnalyticsSummaryCards from '../../Dashboard/components/cards/AnalyticsSummaryCards';
import RevenueSalesBookingsTrends from '../../Dashboard/components/charts/RevenueSalesBookingsTrends';
import LeadPropertyUnitFunnelSection from '../../Dashboard/sections/LeadPropertyUnitFunnelSection';
import TopProjectsTable from '../../Dashboard/components/tables/TopProjectsTable';
import TopEmployeesTable from '../../Dashboard/components/tables/TopEmployeesTable';
import CollectionVsOutstandingChart from '../../Dashboard/components/charts/CollectionVsOutstandingChart';
import KeyInsightsWidget from '../../Dashboard/components/widgets/KeyInsightsWidget';

// Tab components matching reference screenshot
import SalesAnalyticsTab from '../../Dashboard/tabs/SalesAnalyticsTab';
import PropertyAnalyticsTab from '../../Dashboard/tabs/PropertyAnalyticsTab';
import CustomerAnalyticsTab from '../../Dashboard/tabs/CustomerAnalyticsTab';
import FinanceAnalyticsTab from '../../Dashboard/tabs/FinanceAnalyticsTab';
import EmployeeAnalyticsTab from '../../Dashboard/tabs/EmployeeAnalyticsTab';
import MarketingAnalyticsTab from '../../Dashboard/tabs/MarketingAnalyticsTab';

const SESSION_KEY = 'admin_analytics_active_tab';
const VALID_TABS = ['overview', 'sales', 'property', 'customer', 'finance', 'employee', 'marketing'];

export default function AdminAnalyticsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [startDate, setStartDate] = useState('2025-05-01');
  const [endDate, setEndDate] = useState('2025-05-31');
  const [selectedCompany, setSelectedCompany] = useState('all');

  const getInitialTab = (): string => {
    const urlTab = searchParams.get('tab');
    if (urlTab && VALID_TABS.includes(urlTab)) {
      return urlTab;
    }
    const sessionTab = sessionStorage.getItem(SESSION_KEY);
    if (sessionTab && VALID_TABS.includes(sessionTab)) {
      return sessionTab;
    }
    return 'overview';
  };

  const [activeTab, setActiveTabState] = useState<string>(getInitialTab);

  // Sync state on tab change and update URL slug + Session Storage
  const handleTabChange = (tab: string) => {
    setActiveTabState(tab);
    sessionStorage.setItem(SESSION_KEY, tab);
    setSearchParams({ tab }, { replace: true });
  };

  // Keep state, session, and URL search param in sync on initial mount or URL updates
  useEffect(() => {
    const urlTab = searchParams.get('tab');
    if (urlTab && VALID_TABS.includes(urlTab)) {
      if (urlTab !== activeTab) {
        setActiveTabState(urlTab);
        sessionStorage.setItem(SESSION_KEY, urlTab);
      }
    } else {
      setSearchParams({ tab: activeTab }, { replace: true });
      sessionStorage.setItem(SESSION_KEY, activeTab);
    }
  }, [searchParams]);

  return (
    <div className="w-full p-4 md:p-6 bg-[#F8FAFC] space-y-4 min-h-screen">
      {/* 1. Header with Title & Date/Company Selectors */}
      <AnalyticsTopHeader
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        selectedCompany={selectedCompany}
        onCompanyChange={setSelectedCompany}
      />

      {/* 2. Horizontal Navigation Tabs */}
      <AnalyticsTabs activeTab={activeTab} setActiveTab={handleTabChange} sessionKey={SESSION_KEY} />

      {/* 1. OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <div className="space-y-4">
          <AnalyticsSummaryCards startDate={startDate} endDate={endDate} company={selectedCompany} />
          <RevenueSalesBookingsTrends />
          <LeadPropertyUnitFunnelSection />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <TopProjectsTable onViewAll={() => handleTabChange('property')} />
            <TopEmployeesTable onViewAll={() => handleTabChange('employee')} />
            <CollectionVsOutstandingChart />
            <KeyInsightsWidget />
          </div>
        </div>
      )}

      {/* 2. SALES ANALYTICS TAB */}
      {activeTab === 'sales' && (
        <SalesAnalyticsTab startDate={startDate} endDate={endDate} company={selectedCompany} />
      )}

      {/* 3. PROPERTY ANALYTICS TAB */}
      {activeTab === 'property' && (
        <PropertyAnalyticsTab startDate={startDate} endDate={endDate} company={selectedCompany} />
      )}

      {/* 4. CUSTOMER ANALYTICS TAB */}
      {activeTab === 'customer' && (
        <CustomerAnalyticsTab startDate={startDate} endDate={endDate} company={selectedCompany} />
      )}

      {/* 5. FINANCE ANALYTICS TAB */}
      {activeTab === 'finance' && (
        <FinanceAnalyticsTab startDate={startDate} endDate={endDate} company={selectedCompany} />
      )}

      {/* 6. EMPLOYEE ANALYTICS TAB */}
      {activeTab === 'employee' && (
        <EmployeeAnalyticsTab startDate={startDate} endDate={endDate} company={selectedCompany} />
      )}

      {/* 7. MARKETING ANALYTICS TAB */}
      {activeTab === 'marketing' && (
        <MarketingAnalyticsTab startDate={startDate} endDate={endDate} company={selectedCompany} />
      )}
    </div>
  );
}

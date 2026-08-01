import React, { useState } from 'react';
import AnalyticsTopHeader from '../components/shared/AnalyticsTopHeader';
import AnalyticsTabs from '../components/shared/AnalyticsTabs';
import AnalyticsSummaryCards from '../components/cards/AnalyticsSummaryCards';
import RevenueSalesBookingsTrends from '../components/charts/RevenueSalesBookingsTrends';
import LeadPropertyUnitFunnelSection from '../sections/LeadPropertyUnitFunnelSection';
import TopProjectsTable from '../components/tables/TopProjectsTable';
import TopEmployeesTable from '../components/tables/TopEmployeesTable';
import CollectionVsOutstandingChart from '../components/charts/CollectionVsOutstandingChart';
import KeyInsightsWidget from '../components/widgets/KeyInsightsWidget';

export default function AdminAnalyticsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full p-4 md:p-6 bg-[#F8FAFC] space-y-4 min-h-screen">
      {/* 1. Header with Title & Date/Company Selectors */}
      <AnalyticsTopHeader />

      {/* 2. Horizontal Navigation Tabs */}
      <AnalyticsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Render Overview Tab Content matching reference screenshot */}
      {activeTab === 'overview' && (
        <div className="space-y-4">
          {/* 3. 6 Primary KPI Metric Cards */}
          <AnalyticsSummaryCards />

          {/* 4. 3 Trend Charts (Revenue, Sales, Bookings) */}
          <RevenueSalesBookingsTrends />

          {/* 5. 4 Analytical Visuals (Lead Source, Property Status, Unit Type, Sales Funnel) */}
          <LeadPropertyUnitFunnelSection />

          {/* 6. 4 Bottom Sections (Top Projects, Top Employees, Collection vs Outstanding, Key Insights) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <TopProjectsTable />
            <TopEmployeesTable />
            <CollectionVsOutstandingChart />
            <KeyInsightsWidget />
          </div>
        </div>
      )}

      {/* Fallback for other tabs */}
      {activeTab !== 'overview' && (
        <div className="bg-white p-8 rounded-lg border border-slate-200 text-center space-y-2">
          <h3 className="text-base font-bold text-slate-800 capitalize">{activeTab.replace('-', ' ')}</h3>
          <p className="text-xs text-slate-500">Detailed analytics data for {activeTab} view</p>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import DashboardHeader from '../components/shared/DashboardHeader';
import DashboardStats from '../components/cards/DashboardStats';
import RevenueOverviewChart from '../components/charts/RevenueOverviewChart';
import SalesOverviewChart from '../components/charts/SalesOverviewChart';
import BookingsOverviewChart from '../components/charts/BookingsOverviewChart';
import PropertyStatusChart from '../components/charts/PropertyStatusChart';
import ProjectProgressChart from '../components/charts/ProjectProgressChart';
import LeadConversionFunnelSection from '../sections/LeadConversionFunnelSection';
import RecentActivitiesWidget from '../components/widgets/RecentActivitiesWidget';
import PendingApprovalsWidget from '../components/widgets/PendingApprovalsWidget';
import TopPerformingProjects from '../components/tables/TopPerformingProjects';
import CalendarEventsWidget from '../components/widgets/CalendarEventsWidget';
import NotificationsWidget from '../components/widgets/NotificationsWidget';
import SystemHealthWidget from '../components/widgets/SystemHealthWidget';
import QuickActionsLauncher from '../components/widgets/QuickActionsLauncher';

export default function AdministrationDashboardPage() {
  return (
    <div className="w-full p-4 md:p-6 bg-[#F8FAFC] space-y-4">
      {/* 1. Header Block */}
      <DashboardHeader />

      {/* 2. 8 KPI Statistics Cards */}
      <DashboardStats />

      {/* 3. Main Body - Left (3 Columns) & Right (1 Column) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        
        {/* LEFT SECTION (3/4) */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Row 1: 3 Overview Charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <RevenueOverviewChart />
            <SalesOverviewChart />
            <BookingsOverviewChart />
          </div>

          {/* Row 2: Property, Project Progress & Lead Funnel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PropertyStatusChart />
            <ProjectProgressChart />
            <LeadConversionFunnelSection />
          </div>

          {/* Row 3: Recent Activities, Approvals & Top Projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <RecentActivitiesWidget />
            <PendingApprovalsWidget />
            <TopPerformingProjects />
          </div>

          {/* Row 4: Quick Actions Bar inside Left Section */}
          <QuickActionsLauncher />
        </div>

        {/* RIGHT SIDEBAR COLUMN (1/4) */}
        <div className="lg:col-span-1 space-y-4">
          <CalendarEventsWidget />
          <NotificationsWidget />
          <SystemHealthWidget />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Bell, Search, Calendar, LayoutGrid, LogOut, Mail, Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import ModuleSelectorModal from '@/components/modals/module-selector-modal';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminLayout() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModuleModalOpen, setIsModuleModalOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans text-slate-800 antialiased">

      {/* MOBILE OVERLAY */}
      {!isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(true)}
        />
      )}

      {/* MAIN SIDEBAR */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">

        {/* TOP HEADER BAR — Matches attached screenshot */}
        <header className="h-16 bg-white border-b border-slate-200/90 flex items-center justify-between px-4 sm:px-6 shrink-0 z-10 shadow-2xs">

          {/* LEFT: MOBILE TOGGLE & GLOBAL SEARCH BAR */}
          <div className="flex items-center gap-3 flex-1 max-w-xl">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Toggle Menu"
            >
              <Menu size={20} />
            </button>

            {/* GLOBAL SEARCH */}
            <div className="relative w-full max-w-md hidden sm:block">
              <div className="flex items-center bg-slate-50 hover:bg-slate-100/80 focus-within:bg-white border border-slate-200 focus-within:border-indigo-500 rounded-md px-3 py-1.5 transition-all">
                <Search size={15} className="text-slate-400 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="bg-transparent border-none outline-none text-[12.5px] w-full text-slate-800 placeholder-slate-400 font-medium"
                />
                <kbd className="hidden md:inline-flex items-center gap-1 bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[10px] font-mono font-semibold text-slate-400 shrink-0">
                  Ctrl + K
                </kbd>
              </div>
            </div>
          </div>

          {/* RIGHT: ACTION ICONS & USER PROFILE */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">

            {/* MODULE SELECTOR (9-DOTS) */}
            <button
              onClick={() => setIsModuleModalOpen(true)}
              className="p-2.5 rounded-md text-slate-700hover:text-[#0D6E4F] cursor-pointer shadow-2xs flex items-center justify-center"
              title="Switch Module"
            >
              <LayoutGrid size={21} strokeWidth={2} />
            </button>

            {/* CALENDAR */}
            <button
              onClick={() => navigate('/employee-portal/calendar')}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer hidden sm:flex"
              title="Calendar"
            >
              <Calendar size={18} />
            </button>

            {/* NOTIFICATIONS */}
            <button
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors relative cursor-pointer"
              title="Notifications"
            >
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white font-extrabold text-[9px] flex items-center justify-center ring-2 ring-white">
                5
              </span>
            </button>

            {/* MESSAGES */}
            <button
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors relative cursor-pointer hidden sm:flex"
              title="Messages"
            >
              <Mail size={18} />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white font-extrabold text-[9px] flex items-center justify-center ring-2 ring-white">
                5
              </span>
            </button>

            {/* USER PROFILE DROPDOWN BADGE */}
            <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
              <div
                onClick={() => navigate('/employee-portal/about-me')}
                className="flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"}
                  alt={user?.name || "Al Mamon"}
                  className="w-8 h-8 rounded-full object-cover border border-slate-200 shadow-2xs"
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80";
                  }}
                />
                <div className="hidden md:flex flex-col text-left">
                  <span className="text-[12.5px] font-bold text-slate-900 leading-tight">
                    {user?.name || 'Al Mamon'}
                  </span>
                  <span className="text-[10.5px] font-medium text-slate-500">
                    {user?.roleLabel || user?.designation || 'Administrator'}
                  </span>
                </div>
              </div>

              {/* LOGOUT BUTTON */}
              <button
                onClick={() => {
                  logout();
                  navigate('/web/login');
                }}
                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors cursor-pointer"
                title="Sign Out"
              >
                <LogOut size={17} />
              </button>
            </div>
          </div>
        </header>

        {/* MAIN SCROLLABLE CONTENT AREA */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-[#F8FAFC] custom-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Outlet />
        </main>
      </div>

      {/* 9-DOTS MODULE SELECTOR MODAL */}
      <ModuleSelectorModal
        isOpen={isModuleModalOpen}
        onClose={() => setIsModuleModalOpen(false)}
      />
    </div>
  );
}

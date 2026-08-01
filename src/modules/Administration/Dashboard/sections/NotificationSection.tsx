import React from 'react';
import { notificationsList } from '../constants/dashboardData';
import { Bell, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function Notifications() {
  return (
    <div className="bg-white p-5 rounded-md border border-slate-200/90 shadow-2xs flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-slate-900">System Alerts & Notifications</h3>
        <span className="text-[11.5px] font-bold text-blue-600 hover:underline cursor-pointer">Mark all read</span>
      </div>

      <div className="space-y-3 flex-1">
        {notificationsList.map((item) => (
          <div key={item.id} className="p-3 rounded-md border border-slate-200/80 bg-slate-50/50 flex items-start gap-3">
            <div className="mt-0.5 shrink-0">
              {item.severity === 'high' && <AlertTriangle size={16} className="text-rose-600" />}
              {item.severity === 'medium' && <Bell size={16} className="text-amber-600" />}
              {item.severity === 'info' && <CheckCircle2 size={16} className="text-blue-600" />}
            </div>
            <div>
              <div className="flex items-center justify-between text-[12px] font-bold text-slate-800 mb-0.5">
                <span>{item.title}</span>
                <span className="text-[10px] text-slate-400 font-normal">{item.time}</span>
              </div>
              <p className="text-[11.5px] text-slate-600 font-medium leading-snug">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

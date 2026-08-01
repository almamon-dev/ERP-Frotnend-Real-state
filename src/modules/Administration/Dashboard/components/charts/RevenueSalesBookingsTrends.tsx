import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function RevenueSalesBookingsTrends() {
  const dates = ['May 01', 'May 06', 'May 11', 'May 16', 'May 21', 'May 26', 'May 31'];
  const bookingsBars = [20, 30, 40, 35, 55, 45, 88, 50, 72, 35, 65, 40, 80, 64, 48];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* 1. Revenue Trend */}
      <div className="bg-white p-4 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[13.5px] font-bold text-slate-800">Revenue Trend</h3>
          <div className="flex items-center gap-1 text-[11px] text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded cursor-pointer">
            <span>This Month</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-medium text-slate-600 mb-2">
          <span className="w-3 h-0.5 bg-emerald-500 rounded-full" />
          <span>Revenue (৳)</span>
        </div>

        <div className="relative h-44 w-full pt-2">
          <div className="absolute inset-0 flex flex-col justify-between text-[9.5px] text-slate-400 pointer-events-none">
            <div className="border-b border-slate-100 pb-0.5">20 Cr</div>
            <div className="border-b border-slate-100 pb-0.5">15 Cr</div>
            <div className="border-b border-slate-100 pb-0.5">10 Cr</div>
            <div className="border-b border-slate-100 pb-0.5">5 Cr</div>
            <div>0</div>
          </div>

          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <polygon
              points="0,120 0,108 21,84 42,66 64,78 85,60 107,60 128,42 150,54 171,36 192,42 214,30 235,18 257,30 278,24 300,36 300,120"
              fill="url(#revGrad)"
            />
            <polyline
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="0,108 21,84 42,66 64,78 85,60 107,60 128,42 150,54 171,36 192,42 214,30 235,18 257,30 278,24 300,36"
            />
            {[
              [0,108],[21,84],[42,66],[64,78],[85,60],[107,60],[128,42],[150,54],[171,36],[192,42],[214,30],[235,18],[257,30],[278,24],[300,36]
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
            ))}
          </svg>
        </div>

        <div className="flex justify-between text-[9.5px] text-slate-400 mt-2 border-t border-slate-100 pt-1">
          {dates.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
      </div>

      {/* 2. Sales Trend */}
      <div className="bg-white p-4 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[13.5px] font-bold text-slate-800">Sales Trend</h3>
          <div className="flex items-center gap-1 text-[11px] text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded cursor-pointer">
            <span>This Month</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-medium text-slate-600 mb-2">
          <span className="w-3 h-0.5 bg-blue-500 rounded-full" />
          <span>Sales (৳)</span>
        </div>

        <div className="relative h-44 w-full pt-2">
          <div className="absolute inset-0 flex flex-col justify-between text-[9.5px] text-slate-400 pointer-events-none">
            <div className="border-b border-slate-100 pb-0.5">20 Cr</div>
            <div className="border-b border-slate-100 pb-0.5">15 Cr</div>
            <div className="border-b border-slate-100 pb-0.5">10 Cr</div>
            <div className="border-b border-slate-100 pb-0.5">5 Cr</div>
            <div>0</div>
          </div>

          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <polygon
              points="0,120 0,102 21,90 42,78 64,66 85,72 107,78 128,66 150,60 171,66 192,54 214,42 235,36 257,24 278,36 300,30 300,120"
              fill="url(#salesGrad)"
            />
            <polyline
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="0,102 21,90 42,78 64,66 85,72 107,78 128,66 150,60 171,66 192,54 214,42 235,36 257,24 278,36 300,30"
            />
            {[
              [0,102],[21,90],[42,78],[64,66],[85,72],[107,78],[128,66],[150,60],[171,66],[192,54],[214,42],[235,36],[257,24],[278,36],[300,30]
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1.5" />
            ))}
          </svg>
        </div>

        <div className="flex justify-between text-[9.5px] text-slate-400 mt-2 border-t border-slate-100 pt-1">
          {dates.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
      </div>

      {/* 3. Bookings Trend */}
      <div className="bg-white p-4 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[13.5px] font-bold text-slate-800">Bookings Trend</h3>
          <div className="flex items-center gap-1 text-[11px] text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded cursor-pointer">
            <span>This Month</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-medium text-slate-600 mb-2">
          <span className="w-3 h-0.5 bg-purple-500 rounded-full" />
          <span>Bookings</span>
        </div>

        <div className="relative h-44 w-full pt-2">
          <div className="absolute inset-0 flex flex-col justify-between text-[9.5px] text-slate-400 pointer-events-none">
            <div className="border-b border-slate-100 pb-0.5">100</div>
            <div className="border-b border-slate-100 pb-0.5">80</div>
            <div className="border-b border-slate-100 pb-0.5">60</div>
            <div className="border-b border-slate-100 pb-0.5">40</div>
            <div className="border-b border-slate-100 pb-0.5">20</div>
            <div>0</div>
          </div>

          <div className="h-full flex items-end justify-between gap-1.5 px-2 relative z-10">
            {bookingsBars.map((val, idx) => (
              <div
                key={idx}
                style={{ height: `${(val / 100) * 100}%` }}
                className="w-full bg-purple-400 hover:bg-purple-500 rounded-t-sm transition-all"
                title={`${val} Bookings`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between text-[9.5px] text-slate-400 mt-2 border-t border-slate-100 pt-1">
          {dates.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

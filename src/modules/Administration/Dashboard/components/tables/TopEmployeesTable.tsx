import React from 'react';

export default function TopEmployeesTable() {
  const employees = [
    { name: 'John Doe', sales: '৳ 1.25 Cr', bookings: 85, collection: '৳ 1.10 Cr', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' },
    { name: 'Michael Smith', sales: '৳ 1.05 Cr', bookings: 72, collection: '৳ 0.95 Cr', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
    { name: 'Sarah Johnson', sales: '৳ 0.95 Cr', bookings: 65, collection: '৳ 0.85 Cr', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80' },
    { name: 'David Brown', sales: '৳ 0.75 Cr', bookings: 52, collection: '৳ 0.65 Cr', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80' },
    { name: 'Emily Davis', sales: '৳ 0.65 Cr', bookings: 45, collection: '৳ 0.55 Cr', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[13.5px] font-bold text-slate-800">Top Performing Employees</h3>
        <button className="text-[11.5px] font-semibold text-blue-600 hover:underline bg-transparent border-none p-0 cursor-pointer">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-[11.5px]">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-semibold text-[10.5px]">
              <th className="pb-2">Employee</th>
              <th className="pb-2">Sales (৳)</th>
              <th className="pb-2">Bookings</th>
              <th className="pb-2 text-right">Collection (৳)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100/70 text-slate-700">
            {employees.map((e, idx) => (
              <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={e.avatar}
                      alt={e.name}
                      className="w-5 h-5 rounded-full object-cover shrink-0 border border-slate-200"
                    />
                    <span className="font-medium text-slate-800">{e.name}</span>
                  </div>
                </td>
                <td className="py-2 text-slate-600">{e.sales}</td>
                <td className="py-2 text-slate-600">{e.bookings}</td>
                <td className="py-2 text-right font-medium text-slate-800">{e.collection}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

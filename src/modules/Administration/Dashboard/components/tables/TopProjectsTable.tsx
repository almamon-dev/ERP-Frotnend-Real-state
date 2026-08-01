import React from 'react';

export default function TopProjectsTable() {
  const projects = [
    { name: 'Green Park', sales: '৳ 3.25 Cr', bookings: 256, collection: '৳ 2.85 Cr' },
    { name: 'Sunshine City', sales: '৳ 2.45 Cr', bookings: 198, collection: '৳ 2.10 Cr' },
    { name: 'Green Valley', sales: '৳ 1.85 Cr', bookings: 156, collection: '৳ 1.45 Cr' },
    { name: 'Lake View Heights', sales: '৳ 1.25 Cr', bookings: 98, collection: '৳ 1.05 Cr' },
    { name: 'Royal Gardens', sales: '৳ 0.95 Cr', bookings: 78, collection: '৳ 0.75 Cr' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[13.5px] font-bold text-slate-800">Top Performing Projects</h3>
        <button className="text-[11.5px] font-semibold text-blue-600 hover:underline bg-transparent border-none p-0 cursor-pointer">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-[11.5px]">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-semibold text-[10.5px]">
              <th className="pb-2">Project</th>
              <th className="pb-2">Sales (৳)</th>
              <th className="pb-2">Bookings</th>
              <th className="pb-2 text-right">Collection (৳)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100/70 text-slate-700">
            {projects.map((p, idx) => (
              <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-2 font-medium text-slate-800">{p.name}</td>
                <td className="py-2 text-slate-600">{p.sales}</td>
                <td className="py-2 text-slate-600">{p.bookings}</td>
                <td className="py-2 text-right font-medium text-slate-800">{p.collection}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

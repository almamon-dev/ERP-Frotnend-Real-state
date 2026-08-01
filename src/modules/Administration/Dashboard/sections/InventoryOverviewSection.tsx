import React from 'react';
import { Boxes, Package, ShieldAlert, Archive } from 'lucide-react';

export default function InventoryOverview() {
  const stockItems = [
    { name: 'Steel Rod (500W)', stock: '450 Tons', status: 'Optimal', color: 'text-blue-600 bg-blue-50' },
    { name: 'Portland Cement', stock: '8,500 Bags', status: 'Optimal', color: 'text-[#0D6E4F] bg-emerald-50' },
    { name: 'Red Bricks Grade-A', stock: '120,000 Pcs', status: 'Low Stock', color: 'text-amber-600 bg-amber-50' },
    { name: 'Ceramic Floor Tiles', stock: '4,200 Boxes', status: 'Reorder Due', color: 'text-rose-600 bg-rose-50' },
  ];

  return (
    <div className="bg-white p-5 rounded-md border border-slate-200/90 shadow-2xs">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-slate-900">Material Stock & Site Inventory</h3>
        <span className="text-[11.5px] font-bold text-[#0D6E4F] hover:underline cursor-pointer">Store Register</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stockItems.map((item, idx) => (
          <div key={idx} className="p-3 rounded-md border border-slate-200/80 bg-slate-50/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-md ${item.color} flex items-center justify-center shrink-0`}>
                <Boxes size={16} />
              </div>
              <div>
                <span className="text-[12px] font-bold text-slate-900 block">{item.name}</span>
                <span className="text-[13px] font-black text-slate-800">{item.stock}</span>
              </div>
            </div>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

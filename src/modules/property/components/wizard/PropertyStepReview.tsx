import React from 'react';
import { CheckCircle2, Home, MapPin, DollarSign, Sparkles } from 'lucide-react';

interface StepProps {
  formData: any;
}

export default function PropertyStepReview({ formData }: StepProps) {
  return (
    <div className="space-y-4 text-xs">
      <div>
        <h3 className="text-sm font-bold text-slate-800">Review & Publish Property</h3>
        <p className="text-xs text-slate-500">Please review all submitted information carefully before publishing to store catalog.</p>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-[4px] flex items-center gap-2 text-emerald-800 font-medium">
        <CheckCircle2 size={16} className="text-[#006837]" /> All required property details completed and ready for publishing!
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 border border-slate-200 rounded-[4px] bg-white space-y-1">
          <div className="font-bold text-slate-800 flex items-center gap-1.5"><Home size={14} className="text-[#006837]" /> Property Overview</div>
          <div><span className="font-semibold">Name:</span> {formData.propertyName || 'Gulshan Crown Plaza Tower'}</div>
          <div><span className="font-semibold">Type:</span> {formData.propertyType || 'Residential'} • {formData.propertyCategory || 'Apartment'}</div>
          <div><span className="font-semibold">Status:</span> {formData.propertyStatus || 'Available'}</div>
        </div>

        <div className="p-3 border border-slate-200 rounded-[4px] bg-white space-y-1">
          <div className="font-bold text-slate-800 flex items-center gap-1.5"><MapPin size={14} className="text-[#006837]" /> Location & Project</div>
          <div><span className="font-semibold">Address:</span> {formData.address || 'Road 71, Gulshan 2, Dhaka'}</div>
          <div><span className="font-semibold">City:</span> {formData.city || 'Dhaka'}</div>
          <div><span className="font-semibold">Tower/Floor:</span> {formData.tower || 'East Tower'} ({formData.floor || 'Level 12'})</div>
        </div>

        <div className="p-3 border border-slate-200 rounded-[4px] bg-white space-y-1">
          <div className="font-bold text-slate-800 flex items-center gap-1.5"><DollarSign size={14} className="text-[#006837]" /> Financial Summary</div>
          <div><span className="font-semibold">Sale Price:</span> {formData.salePrice || '৳ 3,75,00,000'}</div>
          <div><span className="font-semibold">Booking Money:</span> {formData.bookingMoney || '৳ 5,00,000'}</div>
          <div><span className="font-semibold">Maintenance Charge:</span> {formData.maintenanceCharge || '৳ 8,500 / month'}</div>
        </div>

        <div className="p-3 border border-slate-200 rounded-[4px] bg-white space-y-1">
          <div className="font-bold text-slate-800 flex items-center gap-1.5"><Sparkles size={14} className="text-[#006837]" /> Selected Amenities ({formData.amenities?.length || 0})</div>
          <div className="text-[11px] text-slate-600 truncate">{formData.amenities?.join(', ') || 'Swimming Pool, Gym, Lift, CCTV, Generator'}</div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

interface StepProps {
  formData: any;
  onChange: (field: string, val: any) => void;
}

export default function PropertyStepAmenities({ formData, onChange }: StepProps) {
  const amenityList = [
    'Swimming Pool', 'Gym & Fitness', 'High-Speed Lift', 'Mosque / Prayer Room',
    'Community Hall', 'Children Playground', 'Rooftop Garden', '24/7 CCTV Survelliance',
    'Standby Generator', 'Security Guard Post', 'Fire Safety & Hydrant', 'Fiber Optic Internet'
  ];

  const selectedAmenities: string[] = formData.amenities || [];

  const toggleAmenity = (item: string) => {
    if (selectedAmenities.includes(item)) {
      onChange('amenities', selectedAmenities.filter((a) => a !== item));
    } else {
      onChange('amenities', [...selectedAmenities, item]);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-bold text-slate-800">Features & Amenities</h3>
        <p className="text-xs text-slate-500">Select all building amenities and premium facilities included with this property.</p>
      </div>

      <div className="grid grid-cols-3 gap-3 text-xs pt-2">
        {amenityList.map((item) => {
          const isSelected = selectedAmenities.includes(item);
          return (
            <div
              key={item}
              onClick={() => toggleAmenity(item)}
              className={`p-3 rounded-[4px] border cursor-pointer flex items-center gap-2.5 transition-all ${
                isSelected
                  ? 'bg-emerald-50 border-[#006837] text-[#006837] font-bold shadow-2xs'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <input type="checkbox" checked={isSelected} readOnly className="w-3.5 h-3.5 accent-[#006837]" />
              <span className="text-xs">{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

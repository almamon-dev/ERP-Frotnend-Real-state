import React from 'react';

export const TabHeader = ({ title, icon: Icon }: { title: string; icon?: any }) => (
  <div className="col-span-1 md:col-span-2 -mt-2 md:-mt-4 mb-3 pb-3 border-b border-slate-200 -mx-6 md:-mx-8 px-6 md:px-8">
    <h2 className="text-[18px] font-bold text-slate-800 flex items-center gap-2">
      {Icon && <Icon size={20} className="text-slate-600" />}
      {title}
    </h2>
  </div>
);

export const SectionHeader = ({
  title,
  icon: Icon,
  className = "col-span-1 md:col-span-2",
}: {
  title: string;
  icon?: any;
  className?: string;
}) => (
  <div className={`${className} mt-4 pt-3 border-t border-slate-100 first:mt-0 first:pt-0 first:border-t-0 mb-2`}>
    <h3 className="text-[15px] font-bold text-slate-800 flex items-center gap-2">
      {Icon && <Icon size={18} className="text-slate-400" />}
      {title}
    </h3>
  </div>
);

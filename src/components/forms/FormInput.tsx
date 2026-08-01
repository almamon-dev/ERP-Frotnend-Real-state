import React from 'react';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ElementType;
  rightElement?: React.ReactNode;
  isDarkMode?: boolean;
  error?: string;
  topRightAction?: React.ReactNode;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, icon: Icon, rightElement, isDarkMode = false, error, topRightAction, className = '', id, ...props }, ref) => {
    const inputId = id || (label ? label.replace(/\s+/g, '-').toLowerCase() : undefined);

    return (
      <div className="w-full">
        {/* Label & Optional Top Right Action (e.g. Forgot password link) */}
        {(label || topRightAction) && (
          <div className="flex items-center justify-between mb-1.5">
            {label && (
              <label
                htmlFor={inputId}
                className={`text-[13px] font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}
              >
                {label}
              </label>
            )}
            {topRightAction}
          </div>
        )}

        {/* Input Wrapper with Left Icon & Right Element */}
        <div className="relative">
          {Icon && (
            <Icon
              size={15}
              className={`absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${
                isDarkMode ? 'text-slate-500' : 'text-slate-400'
              }`}
            />
          )}

          <input
            id={inputId}
            ref={ref}
            className={`w-full h-11 text-[13.5px] rounded-xl outline-none border transition-all font-medium ${
              Icon ? 'pl-10' : 'pl-3.5'
            } ${rightElement ? 'pr-10' : 'pr-3.5'} ${
              isDarkMode
                ? 'bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-[#008060] focus:ring-2 focus:ring-[#008060]/20'
                : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-[#008060] focus:ring-2 focus:ring-[#008060]/15 shadow-sm'
            } ${error ? 'border-rose-500 focus:ring-rose-500/20' : ''} ${className}`}
            {...props}
          />

          {rightElement && (
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center">
              {rightElement}
            </div>
          )}
        </div>

        {/* Error message */}
        {error && (
          <p className="text-[12px] text-rose-500 mt-1 font-medium">{error}</p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;

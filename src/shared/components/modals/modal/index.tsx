import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '@/shared/utils/lib/utils';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full';
  showCloseButton?: boolean;
  closeOnOutsideClick?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  className,
  size = 'md',
  showCloseButton = true,
  closeOnOutsideClick = true,
}: ModalProps) {
  // Lock body scroll when modal is open — no layout shift since main handles its own scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    full: 'max-w-[95vw] h-[95vh]',
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnOutsideClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  // Use portal so fixed overlay covers the ENTIRE viewport including the header bar
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      onClick={handleBackdropClick}
    >
      {/* Backdrop Overlay — covers full screen including header */}
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200 pointer-events-none" />

      {/* Modal Content Card */}
      <div
        className={cn(
          "relative bg-white rounded-[3px] shadow-2xl w-full flex flex-col overflow-visible max-h-[88vh] z-10 transform transition-all animate-in fade-in zoom-in-95 duration-200",
          sizeClasses[size],
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 shrink-0 rounded-t-[3px] bg-white">
            <div className="flex-1">
              {title && (
                typeof title === 'string' ? (
                  <h3 className="text-[16px] font-bold text-slate-900 leading-tight">{title}</h3>
                ) : (
                  title
                )
              )}
              {description && <p className="text-[12.5px] text-slate-500 mt-0.5 leading-normal">{description}</p>}
            </div>

            {showCloseButton && (
              <button
                onClick={onClose}
                className="w-8 h-8 -mr-1 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer ml-3"
                aria-label="Close modal"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            )}
          </div>
        )}

        {/* Body Container with clean internal scrollbar */}
        <div className="p-5 overflow-visible custom-scrollbar flex-1">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 shrink-0 flex items-center justify-end gap-3 rounded-b-[3px]">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

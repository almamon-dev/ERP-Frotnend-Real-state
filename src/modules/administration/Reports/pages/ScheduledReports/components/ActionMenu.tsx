import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MoreVertical, Eye, Play, Pause, Edit, Trash2 } from 'lucide-react';
import { ScheduledReport } from '../types';

interface Props {
  report: ScheduledReport;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

export const ActionMenu: React.FC<Props> = ({ report, onToggleStatus, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      // Position menu right aligned to button and below it
      setCoords({
        top: rect.bottom + window.scrollY + 4,
        left: rect.right + window.scrollX - 160, // 160px width
      });
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const handleScroll = () => setIsOpen(false);

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll, true);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors border border-transparent hover:border-slate-200"
      >
        <MoreVertical size={16} />
      </button>

      {isOpen &&
        createPortal(
          <div
            ref={menuRef}
            style={{ top: `${coords.top}px`, left: `${coords.left}px` }}
            className="fixed w-40 bg-white border border-slate-200 rounded-md shadow-xl z-[9999] py-1 text-[12px] animate-in fade-in zoom-in-95 duration-100"
          >
            <button
              onClick={() => {
                setIsOpen(false);
                alert(`Viewing details for ${report.name}`);
              }}
              className="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-slate-50 text-slate-700 font-medium"
            >
              <Eye size={14} className="text-slate-400" /> View Details
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onToggleStatus(report.id);
              }}
              className="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-slate-50 text-slate-700 font-medium"
            >
              {report.status === 'Active' ? (
                <>
                  <Pause size={14} className="text-amber-500" /> Pause Schedule
                </>
              ) : (
                <>
                  <Play size={14} className="text-emerald-500" /> Resume Schedule
                </>
              )}
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                alert(`Edit ${report.name}`);
              }}
              className="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-slate-50 text-slate-700 font-medium"
            >
              <Edit size={14} className="text-blue-500" /> Edit Schedule
            </button>
            <div className="border-t border-slate-100 my-1"></div>
            <button
              onClick={() => {
                setIsOpen(false);
                onDelete(report.id);
              }}
              className="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-rose-50 text-rose-600 font-medium"
            >
              <Trash2 size={14} /> Delete
            </button>
          </div>,
          document.body
        )}
    </>
  );
};

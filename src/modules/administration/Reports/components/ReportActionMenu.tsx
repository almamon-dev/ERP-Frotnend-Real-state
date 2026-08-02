import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MoreVertical, Eye, Download, Edit, Share2, Trash2 } from 'lucide-react';

interface Props {
  itemName: string;
  onView?: () => void;
  onDownload?: () => void;
  onEdit?: () => void;
  onShare?: () => void;
  onDelete?: () => void;
}

export const ReportActionMenu: React.FC<Props> = ({
  itemName,
  onView,
  onDownload,
  onEdit,
  onShare,
  onDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY + 4,
        left: rect.right + window.scrollX - 160,
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
                onView ? onView() : alert(`Viewing ${itemName}`);
              }}
              className="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-slate-50 text-slate-700 font-medium"
            >
              <Eye size={14} className="text-slate-400" /> View Report
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onDownload ? onDownload() : alert(`Downloading ${itemName}`);
              }}
              className="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-slate-50 text-slate-700 font-medium"
            >
              <Download size={14} className="text-emerald-500" /> Download
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onEdit ? onEdit() : alert(`Editing ${itemName}`);
              }}
              className="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-slate-50 text-slate-700 font-medium"
            >
              <Edit size={14} className="text-blue-500" /> Edit Report
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onShare ? onShare() : alert(`Sharing ${itemName}`);
              }}
              className="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-slate-50 text-slate-700 font-medium"
            >
              <Share2 size={14} className="text-amber-500" /> Share
            </button>
            <div className="border-t border-slate-100 my-1"></div>
            <button
              onClick={() => {
                setIsOpen(false);
                onDelete ? onDelete() : alert(`Deleted ${itemName}`);
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

import React from 'react';
import { ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';
import Modal from '../modal';

export interface NotificationItem {
  id: string;
  title: string;
  desc: string;
  time: string;
  severity?: 'high' | 'medium' | 'info' | string;
  module: string;
  instructions?: string[];
  version?: string;
  impact?: string;
  read?: boolean;
}

export interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  notification: NotificationItem | null;
}

export default function NotificationModal({
  isOpen,
  onClose,
  notification,
}: NotificationModalProps) {
  return (
    <Modal
      isOpen={isOpen && Boolean(notification)}
      onClose={onClose}
      size="md"
      title={
        notification && (
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-0.5 text-[10px] font-semibold rounded ${
                notification.severity === 'high'
                  ? 'bg-rose-50 text-rose-700 border border-rose-200/80'
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {notification.module}
            </span>
            <span className="text-[11px] text-slate-400 font-mono font-normal">
              {notification.time}
            </span>
          </div>
        )
      }
      footer={
        <button
          onClick={onClose}
          className="px-3 py-1 text-[11.5px] font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded hover:bg-slate-50 transition-colors cursor-pointer"
        >
          Close
        </button>
      }
    >
      {notification && (
        <div className="space-y-3 text-left">
          <div>
            <h3 className="font-semibold text-[13.5px] text-slate-800 leading-snug">
              {notification.title}
            </h3>
            <p className="text-[11.5px] text-slate-500 mt-1 leading-normal">
              {notification.desc}
            </p>
          </div>

          {/* Instructions */}
          {notification.instructions && notification.instructions.length > 0 && (
            <div className="p-2.5 bg-slate-50 border border-slate-200/70 rounded space-y-1.5">
              <div className="flex items-center justify-between border-b border-slate-200/50 pb-1">
                <span className="text-[10.5px] font-semibold text-slate-700 flex items-center gap-1">
                  <ShieldCheck size={12} className="text-blue-600" /> Instructions & Guidelines
                </span>
                {notification.version && (
                  <span className="text-[9.5px] font-mono text-slate-500">
                    {notification.version}
                  </span>
                )}
              </div>
              <ul className="space-y-1 text-[11px] text-slate-600">
                {notification.instructions.map((step: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-1.5 leading-tight">
                    <ChevronRight size={12} className="text-slate-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metadata */}
          <div className="pt-2 flex items-center justify-between text-[10.5px] text-slate-500 border-t border-slate-100">
            <span>
              ID: <strong className="font-mono text-slate-700">{notification.id}</strong>
            </span>
            <span>
              Impact: <strong className="text-slate-700">{notification.impact || 'Standard'}</strong>
            </span>
            <span className="flex items-center gap-1 text-emerald-600 font-medium">
              <CheckCircle2 size={11} /> Delivered
            </span>
          </div>
        </div>
      )}
    </Modal>
  );
}

import React, { useState } from 'react';
import {
  Calendar as CalendarIcon, Plus, Video, Clock, Users, MapPin,
  ExternalLink, CheckCircle2, ChevronLeft, ChevronRight, Tag
} from 'lucide-react';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';
import DatePicker from '@/shared/components/ui/date-picker';
import Modal from '@/shared/components/modals/modal';

// ── Types ────────────────────────────────────────────────────────
interface Meeting {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  type: string;
  typeColor: string;
  host: string;
  location: string;
  link: string;
  attendees: string;
}

// ── Initial Events ───────────────────────────────────────────────
const INITIAL_MEETINGS: Meeting[] = [
  {
    id: 1, title: 'Board Review — Q3 Financial Performance',
    date: '2026-08-04', startTime: '10:00 AM', endTime: '11:30 AM',
    type: 'Board Meeting', typeColor: 'bg-violet-50 text-violet-700 border-violet-200',
    host: 'Super Admin', location: 'Board Room A', link: '', attendees: 'All Department Heads'
  },
  {
    id: 11, title: 'Investor Pitch & Strategy Alignment',
    date: '2026-08-04', startTime: '02:00 PM', endTime: '03:30 PM',
    type: 'Strategy', typeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    host: 'Managing Director', location: 'Executive Conference Room', link: '', attendees: 'Board & Investors'
  },
  {
    id: 2, title: 'System Upgrade Planning & Downtime Schedule',
    date: '2026-08-06', startTime: '02:00 PM', endTime: '03:00 PM',
    type: 'Tech Review', typeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    host: 'IT Department', location: 'Google Meet', link: 'https://meet.google.com/abc-defg-hij', attendees: 'Dev & Ops Team'
  },
  {
    id: 3, title: 'HR Policy Q3 Update & Compliance Walk-through',
    date: '2026-08-10', startTime: '10:00 AM', endTime: '11:30 AM',
    type: 'HR Event', typeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    host: 'HR Manager', location: 'Main Auditorium', link: '', attendees: 'All Employees'
  },
  {
    id: 31, title: 'Recruitment & Candidate Interview',
    date: '2026-08-10', startTime: '02:00 PM', endTime: '03:00 PM',
    type: 'Interview', typeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    host: 'Talent Acquisition', location: 'Room 302', link: '', attendees: 'Senior Developer Candidates'
  },
  {
    id: 32, title: 'Employee Performance Review Sync',
    date: '2026-08-10', startTime: '04:30 PM', endTime: '05:30 PM',
    type: 'HR Review', typeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    host: 'HR Executive', location: 'Google Meet', link: 'https://meet.google.com/hr-review-meet', attendees: 'Dept Leads'
  },
  {
    id: 4, title: 'Site Inspection — Green Park Phase 3',
    date: '2026-08-14', startTime: '09:00 AM', endTime: '12:00 PM',
    type: 'Site Visit', typeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    host: 'Construction Manager', location: 'Green Park, Mirpur', link: '', attendees: 'PM, CM & QC Team'
  },
  {
    id: 41, title: 'Contractor Safety & Compliance Check',
    date: '2026-08-14', startTime: '02:30 PM', endTime: '04:00 PM',
    type: 'Compliance', typeColor: 'bg-orange-50 text-orange-700 border-orange-200',
    host: 'Safety Officer', location: 'Site Office', link: '', attendees: 'Site Contractors'
  },
  {
    id: 5, title: 'CRM Pipeline Review & Lead Assignment',
    date: '2026-08-18', startTime: '11:00 AM', endTime: '12:00 PM',
    type: 'Sales Sync', typeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    host: 'Sales Manager', location: 'Conference Room 2B', link: '', attendees: 'Sales & CRM Team'
  },
  {
    id: 6, title: 'Monthly Finance Reconciliation Meeting',
    date: '2026-08-20', startTime: '03:00 PM', endTime: '04:30 PM',
    type: 'Finance', typeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    host: 'Finance Manager', location: 'Google Meet', link: 'https://meet.google.com/xyz-abcd-efg', attendees: 'Finance & Accounts'
  },
  {
    id: 61, title: 'Vendor Payment Requisition Approval',
    date: '2026-08-20', startTime: '05:00 PM', endTime: '06:00 PM',
    type: 'Approval', typeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    host: 'Accounts Lead', location: 'Accounts Office', link: '', attendees: 'Finance Team'
  },
];

const BLANK_FORM = {
  title: '', date: '', startTime: '10:00 AM', endTime: '11:00 AM',
  location: 'Google Meet', link: '', attendees: ''
};

// ── Component ────────────────────────────────────────────────────
export default function AdminCalendarPage() {
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDay, setSelectedDay] = useState<number | null>(today.getDate());
  const [meetings, setMeetings] = useState<Meeting[]>(INITIAL_MEETINGS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState(BLANK_FORM);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthName = viewDate.toLocaleString('en-US', { month: 'long' });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const pad = (n: number) => (n < 10 ? '0' + n : '' + n);
  const dateKey = (d: number) => `${year}-${pad(month + 1)}-${pad(d)}`;
  const isToday = (d: number) =>
    d === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  const meetingsForDay = (d: number) => meetings.filter(m => m.date === dateKey(d));

  const selectedMeetings = selectedDay
    ? meetingsForDay(selectedDay)
    : meetings.filter(m => m.date.startsWith(`${year}-${pad(month + 1)}`));

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.date) return;
    setMeetings(prev => [{
      id: Date.now(), ...form,
      type: 'Scheduled', typeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      host: 'Admin'
    }, ...prev]);
    setIsModalOpen(false);
    setForm(BLANK_FORM);
  };

  const cells: (number | null)[] = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="w-full p-4 md:p-6 bg-[#F8FAFC] space-y-4 font-sans antialiased pb-16">

      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h1 className="text-[20px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <CalendarIcon size={20} className="text-[#008060]" />
            <span>Admin Calendar & Events</span>
          </h1>
          <p className="text-[13px] font-medium text-slate-500 mt-0.5">
            Manage company-wide meetings, site visits, board reviews and scheduled events.
          </p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-bold px-3 h-8 rounded-md transition-colors uppercase tracking-wider shadow-2xs cursor-pointer flex items-center gap-1.5 shrink-0"
        >
          <Plus size={15} />
          <span>Schedule Event</span>
        </Button>
      </div>

      {/* MAIN GRID — Matches /administration/dashboard 4-column layout (3:1) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">

        {/* CALENDAR GRID (3 Columns) */}
        <div className="lg:col-span-3 bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-3">

          {/* Month Nav */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-[14px] font-bold text-slate-900">{monthName} {year}</h3>
            <div className="flex items-center gap-1">
              <button
                onClick={() => { setViewDate(new Date(year, month - 1, 1)); setSelectedDay(null); }}
                className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 transition-colors cursor-pointer"
              >
                <ChevronLeft size={15} />
              </button>
              <button
                onClick={() => { setViewDate(new Date(today.getFullYear(), today.getMonth(), 1)); setSelectedDay(today.getDate()); }}
                className="px-2.5 py-1 text-[11px] font-bold bg-[#008060]/10 text-[#008060] rounded-md hover:bg-[#008060]/20 transition-colors cursor-pointer"
              >
                Today
              </button>
              <button
                onClick={() => { setViewDate(new Date(year, month + 1, 1)); setSelectedDay(null); }}
                className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 transition-colors cursor-pointer"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          {/* Day Labels */}
          <div className="grid grid-cols-7 gap-1 text-center font-bold text-[11px] text-slate-400">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <div key={d} className="py-1 bg-slate-50 rounded">{d}</div>
            ))}
          </div>

          {/* Day Cells */}
          <div className="grid grid-cols-7 gap-1">
            {cells.map((d, i) => {
              if (d === null) return <div key={`e-${i}`} className="min-h-[62px] rounded bg-slate-50/40 border border-slate-100" />;
              const dayMeetings = meetingsForDay(d);
              const isSel = selectedDay === d;
              const todayCell = isToday(d);
              return (
                <div
                  key={d}
                  onClick={() => setSelectedDay(isSel ? null : d)}
                  className={`min-h-[76px] p-1.5 rounded border transition-all cursor-pointer flex flex-col gap-0.5 ${
                    isSel
                      ? 'border-[#008060] bg-emerald-50/50 shadow-sm'
                      : todayCell
                        ? 'border-[#008060]/40 bg-emerald-50/20'
                        : 'border-slate-200/70 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold inline-flex items-center justify-center w-5 h-5 rounded-full ${
                      todayCell ? 'bg-[#008060] text-white' : isSel ? 'text-[#008060]' : 'text-slate-700'
                    }`}>
                      {d}
                    </span>
                    {dayMeetings.length > 0 && (
                      <span className="text-[9px] font-extrabold px-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                        {dayMeetings.length}
                      </span>
                    )}
                  </div>
                  <div className="space-y-0.5 mt-0.5 flex-1">
                    {dayMeetings.slice(0, 3).map(m => (
                      <div key={m.id} className="text-[8.5px] font-bold bg-emerald-50 text-emerald-800 px-1 py-0.5 rounded truncate border border-emerald-200/80 leading-none">
                        {m.startTime} {m.title}
                      </div>
                    ))}
                    {dayMeetings.length > 3 && (
                      <span className="text-[8px] text-slate-500 font-semibold block text-right">+{dayMeetings.length - 3} more</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* EVENT LIST PANEL (1 Column) */}
        <div className="lg:col-span-1 bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-3 flex flex-col h-fit self-start">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-[14px] font-bold text-slate-900">
              {selectedDay
                ? `${monthName} ${selectedDay} Events`
                : `${monthName} Events`}
            </h3>
            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              {selectedMeetings.length} Event{selectedMeetings.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="space-y-2 flex-1 pr-0.5" style={{ scrollbarWidth: 'none' }}>
            {selectedMeetings.length === 0 && (
              <div className="text-center py-10 text-slate-400">
                <CalendarIcon size={28} className="mx-auto mb-2 opacity-30" />
                <p className="text-[12px] font-medium">No events for this day</p>
              </div>
            )}
            {selectedMeetings.map(item => (
              <div key={item.id} className="p-2.5 bg-slate-50/80 border border-slate-200/80 rounded-lg space-y-1.5 hover:border-[#008060]/40 transition-colors">
                <div className="flex items-start justify-between gap-1.5">
                  <h4 className="text-[12px] font-bold text-slate-900 leading-snug">{item.title}</h4>
                  <span className={`text-[9.5px] font-extrabold px-1.5 py-0.5 rounded border shrink-0 ${item.typeColor}`}>
                    {item.type}
                  </span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock size={11} className="text-slate-400 shrink-0" />
                    <span>{item.date} • {item.startTime} – {item.endTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={11} className="text-slate-400 shrink-0" />
                    <span>Host: <strong className="text-slate-800">{item.host}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={11} className="text-slate-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Tag size={11} className="text-slate-400 shrink-0" />
                    <span>{item.attendees}</span>
                  </div>
                </div>
                {item.link && (
                  <div className="pt-1.5 border-t border-slate-200/60 flex items-center justify-end">
                    <a
                      href={item.link} target="_blank" rel="noopener noreferrer"
                      className="text-[10.5px] font-bold text-white bg-[#008060] hover:bg-[#006e52] px-2.5 py-0.5 rounded transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <Video size={11} /><span>Join Meeting</span><ExternalLink size={9} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCHEDULE MODAL */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="lg"
        title={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#008060] flex items-center justify-center">
              <CalendarIcon size={18} />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-slate-900 leading-tight">Schedule New Event</h3>
              <p className="text-[11.5px] text-slate-500 font-medium">Add a company event or meeting</p>
            </div>
          </div>
        }
      >
        <form onSubmit={handleSave} className="space-y-3">
          <Input
            label="Event Title"
            placeholder="e.g., Board Meeting Q3"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            className="h-8 text-[12px]"
          />

          <div className="grid grid-cols-3 gap-2.5">
            <DatePicker
              label="Date"
              value={form.date}
              onChange={val => setForm({ ...form, date: val })}
            />
            <Input
              label="Start Time"
              placeholder="10:00 AM"
              value={form.startTime}
              onChange={e => setForm({ ...form, startTime: e.target.value })}
              className="h-8 text-[12px]"
            />
            <Input
              label="End Time"
              placeholder="11:00 AM"
              value={form.endTime}
              onChange={e => setForm({ ...form, endTime: e.target.value })}
              className="h-8 text-[12px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <Input
              label="Location / Platform"
              placeholder="Google Meet / Room A"
              value={form.location}
              onChange={e => setForm({ ...form, location: e.target.value })}
              className="h-8 text-[12px]"
            />
            <Input
              label="Meeting URL"
              placeholder="https://meet.google.com/..."
              value={form.link}
              onChange={e => setForm({ ...form, link: e.target.value })}
              className="h-8 text-[12px]"
            />
          </div>

          <Input
            label="Attendees / Participants"
            placeholder="e.g., All Department Heads"
            value={form.attendees}
            onChange={e => setForm({ ...form, attendees: e.target.value })}
            className="h-8 text-[12px]"
          />

          <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100 mt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-3.5 py-1.5 text-[11.5px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3.5 py-1.5 text-[11.5px] font-bold text-white bg-[#008060] hover:bg-[#006e52] rounded transition-colors shadow-2xs flex items-center gap-1 cursor-pointer"
            >
              <CheckCircle2 size={14} />
              <span>Save Event</span>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

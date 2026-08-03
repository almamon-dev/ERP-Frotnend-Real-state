import React, { useState } from 'react';
import { Mail, Phone, CheckCircle2 } from 'lucide-react';
import Button from '@/shared/components/ui/button';
import Select from '@/shared/components/ui/select';
import Switch from '@/shared/components/ui/switch';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('Profile');
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [theme, setTheme] = useState('Light');
  const [timezone, setTimezone] = useState('(GMT+06:00) Dhaka');
  const [language, setLanguage] = useState('English');
  const [dateFormat, setDateFormat] = useState('DD/MM/YYYY');

  const tabs = ['Profile', 'Change Password', 'Preferences'];

  return (
    <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24 space-y-6">
      <div>
        <h1 className="text-[22px] font-bold text-slate-900">User Profile</h1>
        <p className="text-xs text-slate-500 mt-0.5">Home / User Management / Users / Profile</p>
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl border border-indigo-200">
          JD
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-800">John Doe</h2>
            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center gap-1">
              <CheckCircle2 size={12} /> Active
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium">System Administrator</p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1"><Mail size={13} /> john.doe@example.com</span>
            <span className="flex items-center gap-1"><Phone size={13} /> +880 1711-123456</span>
          </div>
        </div>
      </div>

      {/* Tabs & Form Card */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden space-y-6">
        <div className="flex items-center border-b border-slate-200 px-6 gap-6 bg-slate-50/50">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`py-3.5 text-xs font-semibold border-b-2 transition-colors ${
                activeTab === t ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">Notification Email</label>
              <div className="flex items-center justify-between p-3 border border-slate-200 rounded-md bg-slate-50">
                <span className="text-xs text-slate-600">Enable email notifications</span>
                <Switch checked={notifications} onChange={() => setNotifications(!notifications)} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">Two Factor Authentication</label>
              <div className="flex items-center justify-between p-3 border border-slate-200 rounded-md bg-slate-50">
                <span className="text-xs text-slate-600">Enable 2FA</span>
                <Switch checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
              </div>
            </div>

            <Select
              label="Theme *"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              options={[
                { label: 'Light', value: 'Light' },
                { label: 'Dark', value: 'Dark' },
              ]}
            />

            <Select
              label="Timezone *"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              options={[
                { label: '(GMT+06:00) Dhaka', value: '(GMT+06:00) Dhaka' },
                { label: '(GMT+00:00) UTC', value: '(GMT+00:00) UTC' },
              ]}
            />

            <Select
              label="Language *"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              options={[
                { label: 'English', value: 'English' },
                { label: 'Bengali', value: 'Bengali' },
              ]}
            />

            <Select
              label="Date Format *"
              value={dateFormat}
              onChange={(e) => setDateFormat(e.target.value)}
              options={[
                { label: 'DD/MM/YYYY', value: 'DD/MM/YYYY' },
                { label: 'YYYY-MM-DD', value: 'YYYY-MM-DD' },
              ]}
            />
          </div>

          <div className="flex justify-end pt-4 border-t">
            <Button onClick={() => alert('Profile updated successfully!')} className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Update Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

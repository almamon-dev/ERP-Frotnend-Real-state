import React from 'react';
import { Settings, Shield, Bell } from 'lucide-react';
import Switch from '@/shared/components/ui/switch';
import FormLabel from '@/shared/components/ui/label';
import { BranchFormData } from '../types';
import { TabHeader, SectionHeader } from '../components/HeaderComponents';

interface Props {
  formData: BranchFormData;
  onChange: (field: keyof BranchFormData, value: any) => void;
}

export const SystemConfigTab: React.FC<Props> = ({ formData, onChange }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
    <TabHeader title="System Configuration & Preferences" icon={Settings} />
    <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-md">
      <div>
        <FormLabel>Auto Approve Leave</FormLabel>
        <p className="text-[12px] text-slate-500">Automatically approve leave requests for branch staff</p>
      </div>
      <Switch
        checked={formData.autoApproveLeave}
        onChange={(checked) => onChange('autoApproveLeave', checked)}
      />
    </div>
    <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-md">
      <div>
        <FormLabel>IP Restriction Lock</FormLabel>
        <p className="text-[12px] text-slate-500">Allow login only from branch office IP</p>
      </div>
      <Switch
        checked={formData.allowIpLock}
        onChange={(checked) => onChange('allowIpLock', checked)}
      />
    </div>
    <SectionHeader title="Notification Controls" icon={Bell} />
    <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-md col-span-1 md:col-span-2">
      <div>
        <FormLabel>System Notifications</FormLabel>
        <p className="text-[12px] text-slate-500 font-normal">Send automated branch activity alerts to managers</p>
      </div>
      <Switch
        checked={formData.enableNotifications}
        onChange={(checked) => onChange('enableNotifications', checked)}
      />
    </div>
  </div>
);

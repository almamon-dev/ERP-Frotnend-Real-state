import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info, MapPin, HardHat, Building2, DollarSign, FileText, CheckCircle2, ChevronRight, Save, ArrowLeft } from 'lucide-react';
import ProjectStepBasic from '../components/wizard/ProjectStepBasic';
import ProjectStepLocation from '../components/wizard/ProjectStepLocation';
import ProjectStepDevelopment from '../components/wizard/ProjectStepDevelopment';
import ProjectStepPlan from '../components/wizard/ProjectStepPlan';
import ProjectStepFinancial from '../components/wizard/ProjectStepFinancial';
import ProjectStepDocuments from '../components/wizard/ProjectStepDocuments';
import ProjectStepReview from '../components/wizard/ProjectStepReview';

export default function CreateProjectPage() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState<any>({
    projectCode: 'PRJ-2026-101',
    projectName: 'Gulshan Crown Heights',
    projectType: 'Residential High-Rise',
    status: 'Ongoing',
    country: 'Bangladesh',
    city: 'Dhaka',
    address: 'Plot 42, Road 71, Gulshan 2, Dhaka',
    landArea: '24 Katha',
    projectManager: 'Engr. Rafiqul Bari',
    estimatedBudget: '৳ 120.0 Cr',
  });

  const handleFieldChange = (field: string, val: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: val }));
  };

  const steps = [
    { id: 1, label: 'Basic Information', icon: Info },
    { id: 2, label: 'Location Information', icon: MapPin },
    { id: 3, label: 'Development Info', icon: HardHat },
    { id: 4, label: 'Building Plan', icon: Building2 },
    { id: 5, label: 'Financial Information', icon: DollarSign },
    { id: 6, label: 'Documents & Approvals', icon: FileText },
    { id: 7, label: 'Review & Publish', icon: CheckCircle2 },
  ];

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto bg-[#F8F9FA] min-h-screen pb-24 space-y-5 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight">Create New Real Estate Project</h1>
          <p className="text-xs text-[#6B7280] font-medium mt-0.5">
            Configure project location, building plan, budget, and development team.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/admin/projects/list')} className="px-3.5 py-1.5 bg-white border border-slate-300 text-slate-700 text-xs font-semibold rounded-[4px] hover:bg-slate-50 transition-colors">
            Cancel
          </button>
          <button onClick={() => navigate('/admin/projects/list')} className="px-3.5 py-1.5 bg-white border border-slate-300 text-slate-700 text-xs font-semibold rounded-[4px] hover:bg-slate-50 transition-colors flex items-center gap-1.5">
            <Save size={13} /> Save Draft
          </button>
          <button onClick={() => navigate('/admin/projects/list')} className="px-4 py-1.5 bg-[#006837] hover:bg-[#00522b] text-white text-xs font-semibold rounded-[4px] shadow-2xs transition-colors flex items-center gap-1.5">
            Publish Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 items-start">
        <div className="col-span-3 bg-white border border-slate-200 rounded-[4px] p-2 space-y-1 shadow-2xs">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-[4px] text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-50 text-[#006837] border-l-4 border-[#006837] font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={17} className={isActive ? 'text-[#006837]' : 'text-slate-400'} />
                  <span>{step.label}</span>
                </div>
                <ChevronRight size={14} className={isActive ? 'text-[#006837]' : 'text-slate-300'} />
              </button>
            );
          })}
        </div>

        <div className="col-span-9 bg-white border border-slate-200 rounded-[4px] p-6 shadow-2xs space-y-6">
          {activeStep === 1 && <ProjectStepBasic formData={formData} onChange={handleFieldChange} />}
          {activeStep === 2 && <ProjectStepLocation formData={formData} onChange={handleFieldChange} />}
          {activeStep === 3 && <ProjectStepDevelopment formData={formData} onChange={handleFieldChange} />}
          {activeStep === 4 && <ProjectStepPlan formData={formData} onChange={handleFieldChange} />}
          {activeStep === 5 && <ProjectStepFinancial formData={formData} onChange={handleFieldChange} />}
          {activeStep === 6 && <ProjectStepDocuments formData={formData} onChange={handleFieldChange} />}
          {activeStep === 7 && <ProjectStepReview formData={formData} />}

          <div className="flex justify-between items-center pt-4 border-t border-slate-200">
            <button
              disabled={activeStep === 1}
              onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
              className="px-3.5 py-1.5 border border-slate-300 rounded-[4px] text-xs font-semibold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 flex items-center gap-1.5"
            >
              <ArrowLeft size={13} /> Previous
            </button>
            {activeStep < 7 ? (
              <button onClick={() => setActiveStep((prev) => Math.min(7, prev + 1))} className="px-4 py-1.5 bg-[#006837] text-white rounded-[4px] text-xs font-semibold hover:bg-[#00522b]">
                Next Step
              </button>
            ) : (
              <button onClick={() => navigate('/admin/projects/list')} className="px-4 py-1.5 bg-[#006837] text-white rounded-[4px] text-xs font-semibold hover:bg-[#00522b]">
                Publish Project
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Building2,
  UserCheck,
  Users,
  TrendingUp,
  Megaphone,
  BookOpen,
  Laptop,
  FileSpreadsheet,
} from 'lucide-react';

const targetRoles = [
  { title: 'Business Owners', icon: Briefcase, desc: 'Track revenue, operational efficiency & automate daily reports.' },
  { title: 'Students', icon: GraduationCap, desc: 'Add high-value AI & BI data analytics skills to your resume.' },
  { title: 'Office Staff', icon: Building2, desc: 'Automate repetitive spreadsheet tasks and save 10+ hours weekly.' },
  { title: 'Managers', icon: UserCheck, desc: 'Build executive KPI scorecards to lead team performance.' },
  { title: 'HR Professionals', icon: Users, desc: 'Automate payroll, attendance, leave tracking & hiring analytics.' },
  { title: 'Sales Teams', icon: TrendingUp, desc: 'Track sales pipelines, deals closed, targets & regional metrics.' },
  { title: 'Marketing Teams', icon: Megaphone, desc: 'Analyze ad spend ROI, campaign conversions & lead funnels.' },
  { title: 'Teachers & Educators', icon: BookOpen, desc: 'Manage student performance records, attendance & grades.' },
  { title: 'Freelancers & Consultants', icon: Laptop, desc: 'Offer premium Google Sheets BI dashboard services to clients.' },
  { title: 'Anyone Using Google Sheets', icon: FileSpreadsheet, desc: 'Upgrade from basic formulas to AI-powered BI automation.' },
];

export default function TargetAudience() {
  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20 inline-block">
            Target Profiles
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Who Should Join This Workshop?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Whether you run a business or want to accelerate your career, this workshop is engineered for practical impact.
          </p>
        </div>

        {/* 10 Roles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {targetRoles.map((role, idx) => {
            const IconComponent = role.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5 text-center flex flex-col items-center justify-between hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-200 group shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                  {role.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">{role.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

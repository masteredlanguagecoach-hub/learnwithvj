'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  UserCheck,
  Users,
  Clock,
  DollarSign,
  Boxes,
  TrendingUp,
  PieChart,
  UserPlus,
  Target,
  Sparkles,
} from 'lucide-react';

const dashboards = [
  {
    title: 'Student Management System',
    desc: 'Complete student enrollment, fee tracking, attendance records & automated progress report generation.',
    icon: GraduationCap,
    color: 'from-blue-500/20 to-sky-500/20 text-sky-400 border-sky-500/30',
    metric: 'Edu Web App',
  },
  {
    title: 'CRM System',
    desc: 'Lead tracking pipeline, deal stages, customer follow-up schedules & sales team activity logs.',
    icon: UserCheck,
    color: 'from-indigo-500/20 to-violet-500/20 text-indigo-400 border-indigo-500/30',
    metric: 'Customer BI',
  },
  {
    title: 'HRMS Software',
    desc: 'Employee master data, onboarding workflows, leave requests & performance scorecards.',
    icon: Users,
    color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30',
    metric: 'People Ops',
  },
  {
    title: 'Attendance System',
    desc: 'Daily clock-in/clock-out logs, late entry tracking, leave balances & monthly attendance summaries.',
    icon: Clock,
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
    metric: '98% Accuracy',
  },
  {
    title: 'Payroll System',
    desc: 'Automated salary breakdown, overtime calculations, tax deductions & digital payslip generation.',
    icon: DollarSign,
    color: 'from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/30',
    metric: 'Instant Payslips',
  },
  {
    title: 'Inventory Management',
    desc: 'Stock level tracking, reorder alert thresholds, supplier records & fast-moving item analytics.',
    icon: Boxes,
    color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30',
    metric: 'Stock Control',
  },
  {
    title: 'Sales Dashboard',
    desc: 'Revenue trends, sales representative performance, target vs actuals & product breakdown charts.',
    icon: TrendingUp,
    color: 'from-emerald-500/20 to-green-500/20 text-emerald-300 border-emerald-500/30',
    metric: 'Revenue BI',
  },
  {
    title: 'Finance Dashboard',
    desc: 'Income vs expense monitors, profit margins, cashflow forecasts & monthly budget variance alerts.',
    icon: PieChart,
    color: 'from-violet-500/20 to-pink-500/20 text-violet-400 border-violet-500/30',
    metric: 'Real-Time Profit',
  },
  {
    title: 'Customer Registration System',
    desc: 'Public web form connected to Google Sheets backend with automated identity verification.',
    icon: UserPlus,
    color: 'from-rose-500/20 to-red-500/20 text-rose-400 border-rose-500/30',
    metric: 'Public Web App',
  },
  {
    title: 'Lead Management System',
    desc: 'Inbound lead collection, source attribution, automated assignment & conversion rate tracking.',
    icon: Target,
    color: 'from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30',
    metric: 'Conversion Tracker',
  },
];

export default function BusinessExamples() {
  return (
    <section id="dashboards" className="py-20 md:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20 inline-block">
            Hands-on Systems
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            What You Will Build
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            You will learn how to design, connect, and deploy 10 practical enterprise business systems during the masterclass.
          </p>
        </div>

        {/* 10 Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboards.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} border flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> {item.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Google Sheets + Web App</span>
                  <span className="text-sky-400 font-semibold">Live System</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

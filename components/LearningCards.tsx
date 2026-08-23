'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FileSpreadsheet,
  Sparkles,
  BarChart,
  PieChart,
  Table,
  Gauge,
  TrendingUp,
  Users,
  DollarSign,
  Bot,
  Code2,
  Zap,
} from 'lucide-react';

const learningTopics = [
  {
    icon: FileSpreadsheet,
    title: 'Advanced Google Sheets',
    description: 'Master powerful functions, array formulas, FILTER, QUERY & nested logical functions.',
    badge: 'Core Sheet Skill',
    color: 'from-blue-500/20 to-sky-500/20 border-blue-500/30 text-sky-400',
  },
  {
    icon: Sparkles,
    title: 'Data Cleaning',
    description: 'Effortlessly clean dirty datasets, remove duplicates, trim spaces & split column text.',
    badge: 'Data Hygiene',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
  },
  {
    icon: BarChart,
    title: 'Business Dashboards',
    description: 'Design executive visual dashboards that provide high-level decision insights instantly.',
    badge: 'Visual BI',
    color: 'from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-400',
  },
  {
    icon: PieChart,
    title: 'Dynamic Charts',
    description: 'Create interactive bar, combo, waterfall, donut & trendline chart visualizations.',
    badge: 'Data Viz',
    color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400',
  },
  {
    icon: Table,
    title: 'Pivot Tables',
    description: 'Summarize thousands of rows of data into multi-dimensional breakdown reports.',
    badge: 'Fast Analysis',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
  },
  {
    icon: Gauge,
    title: 'KPI Dashboard',
    description: 'Track key performance indicators, targets vs actuals & growth variances in real-time.',
    badge: 'Executive Level',
    color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400',
  },
  {
    icon: TrendingUp,
    title: 'Sales Reports',
    description: 'Build revenue trackers, product breakdown matrices & salesperson performance scorecards.',
    badge: 'Revenue Track',
    color: 'from-emerald-500/20 to-green-500/20 border-emerald-500/30 text-emerald-400',
  },
  {
    icon: Users,
    title: 'HR & Attendance Reports',
    description: 'Automate attendance logs, employee leave tracking & monthly headcount metrics.',
    badge: 'People Ops',
    color: 'from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-400',
  },
  {
    icon: DollarSign,
    title: 'Finance Reports',
    description: 'Create income vs expense monitors, profit margin calculators & cashflow overviews.',
    badge: 'Financial Intelligence',
    color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/30 text-amber-400',
  },
  {
    icon: Bot,
    title: 'AI Formula Generation',
    description: 'Use ChatGPT & Gemini AI prompts to write complex formulas without memorizing syntax.',
    badge: 'AI Powered',
    color: 'from-violet-500/20 to-indigo-500/20 border-violet-500/30 text-violet-300',
  },
  {
    icon: Code2,
    title: 'Apps Script with AI',
    description: 'Generate Google Apps Script automation code using simple plain English AI prompts.',
    badge: 'No Code AI Scripting',
    color: 'from-sky-500/20 to-blue-500/20 border-sky-500/30 text-sky-300',
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description: 'Trigger automated email reports, PDF generation & multi-sheet data synchronization.',
    badge: 'Auto Workflows',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300',
  },
];

export default function LearningCards() {
  return (
    <section className="py-20 md:py-28 bg-slate-900/60 border-t border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 inline-block">
            Curriculum Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            What You Will Learn
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            12 essential skills designed to transform you from a spreadsheet beginner into a confident Business Intelligence specialist.
          </p>
        </div>

        {/* 12 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {learningTopics.map((topic, idx) => {
            const IconComponent = topic.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1.5 shadow-lg group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${topic.color} border flex items-center justify-center shadow-inner`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-full">
                      {topic.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {topic.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 text-[11px] text-sky-400 font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Included in Masterclass</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Workflow,
  Search,
  Layers,
  Database,
  FileSpreadsheet,
  BarChart,
  Sparkles,
  Cpu,
  Zap,
  Globe,
  Link2,
  Eye,
  PlusCircle,
  RefreshCw,
  SearchCheck,
  Rocket,
} from 'lucide-react';

const learningTopics = [
  {
    icon: Workflow,
    title: 'Business System Design',
    description: 'Learn the architectural blueprint of converting business ideas into digital systems.',
    badge: 'System Blueprint',
    color: 'from-blue-500/20 to-sky-500/20 border-blue-500/30 text-sky-400',
  },
  {
    icon: Search,
    title: 'Business Process Analysis',
    description: 'Analyze real business problems, user roles, inputs, outputs & reports before building.',
    badge: 'Process BI',
    color: 'from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-400',
  },
  {
    icon: Layers,
    title: 'System Logic Creation',
    description: 'Design complete business workflows, user flows, decision logic & error handling.',
    badge: 'Workflow Logic',
    color: 'from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-300',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Structure master data, transaction data, tables, fields & entity relationships cleanly.',
    badge: 'Data Architecture',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
  },
  {
    icon: FileSpreadsheet,
    title: 'Advanced Google Sheets',
    description: 'Master QUERY, FILTER, XLOOKUP, SUMIFS, COUNTIFS & dynamic data validation.',
    badge: 'Sheet Database',
    color: 'from-emerald-500/20 to-green-500/20 border-emerald-500/30 text-emerald-300',
  },
  {
    icon: BarChart,
    title: 'Business Dashboards',
    description: 'Design dynamic visual KPI scorecards and executive decision-making dashboards.',
    badge: 'Visual BI',
    color: 'from-sky-500/20 to-blue-500/20 border-sky-500/30 text-sky-300',
  },
  {
    icon: Sparkles,
    title: 'AI Prompt Engineering',
    description: 'Write effective AI prompts to generate formulas, scripts & backend logic effortlessly.',
    badge: 'AI Mastery',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
  },
  {
    icon: Cpu,
    title: 'AI Development',
    description: 'Use AI tools to write Apps Script backend code, debug errors & refine outputs.',
    badge: 'No-Code AI',
    color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400',
  },
  {
    icon: Zap,
    title: 'Google Sheets Automation',
    description: 'Automate repetitive workflows, email notifications & data synchronization triggers.',
    badge: 'Auto Workflows',
    color: 'from-teal-500/20 to-emerald-500/20 border-teal-500/30 text-teal-300',
  },
  {
    icon: Globe,
    title: 'Build Business Web Apps',
    description: 'Turn static Google Sheets into real, interactive, responsive web applications.',
    badge: 'Web App Dev',
    color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400',
  },
  {
    icon: Link2,
    title: 'Connect Web Apps to Sheets',
    description: 'Establish live 2-way API connections between your web app frontend and Google Sheets.',
    badge: 'API Connection',
    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-300',
  },
  {
    icon: Eye,
    title: 'Display Live Data',
    description: 'Fetch and display real-time Google Sheets records dynamically inside your web app.',
    badge: 'Real-time UI',
    color: 'from-sky-500/20 to-cyan-500/20 border-sky-500/30 text-sky-400',
  },
  {
    icon: PlusCircle,
    title: 'Add New Records',
    description: 'Build web forms that capture user input and automatically insert rows into Sheets.',
    badge: 'Data Entry',
    color: 'from-emerald-500/20 to-lime-500/20 border-emerald-500/30 text-emerald-400',
  },
  {
    icon: RefreshCw,
    title: 'Update Existing Data',
    description: 'Allow web app users to search, edit, and update existing database rows seamlessly.',
    badge: 'CRUD Logic',
    color: 'from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-300',
  },
  {
    icon: SearchCheck,
    title: 'Search & Filter Data',
    description: 'Implement instant multi-parameter search and filtering across thousands of records.',
    badge: 'Fast Search',
    color: 'from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-300',
  },
  {
    icon: Rocket,
    title: 'Deploy Web Applications',
    description: 'Publish, host, and share private or public business web applications globally.',
    badge: 'Live Deployment',
    color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/30 text-amber-300',
  },
];

export default function LearningCards() {
  return (
    <section className="py-20 md:py-28 bg-slate-900/60 border-t border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 inline-block">
            Curriculum Breakdown
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            What You Will Learn
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            16 comprehensive skill modules designed to transform you from a non-programmer into a complete Business System Developer.
          </p>
        </div>

        {/* 16 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {learningTopics.map((topic, idx) => {
            const IconComponent = topic.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
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

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Workflow, Cpu, Database, Globe, Briefcase } from 'lucide-react';

const featureCards = [
  {
    icon: Lightbulb,
    title: 'Business First Thinking',
    desc: 'Learn to understand business processes before building software.',
    color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
  },
  {
    icon: Workflow,
    title: 'System Logic',
    desc: 'Design complete workflows before writing anything.',
    color: 'from-blue-500/20 to-sky-500/20 text-sky-400 border-sky-500/30',
  },
  {
    icon: Cpu,
    title: 'AI Development',
    desc: 'Use AI to build systems much faster.',
    color: 'from-violet-500/20 to-indigo-500/20 text-violet-400 border-violet-500/30',
  },
  {
    icon: Database,
    title: 'Google Sheets Database',
    desc: 'Use Google Sheets as a practical backend database.',
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
  },
  {
    icon: Globe,
    title: 'Web App Development',
    desc: 'Convert your Google Sheets into real web applications.',
    color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30',
  },
  {
    icon: Briefcase,
    title: 'Real Business Examples',
    desc: 'Every demonstration uses practical business scenarios.',
    color: 'from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30',
  },
];

export default function WorkshopDifferent() {
  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20 inline-block">
            Unique Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            What Makes This Workshop Different?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We don't just teach spreadsheet formulas — we teach you how to think like a senior system architect and build real software.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-7 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1.5 shadow-lg group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} border flex items-center justify-center mb-5 shadow-inner`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-mono flex items-center justify-between">
                  <span>Core Pillar #{idx + 1}</span>
                  <span className="text-sky-400 font-bold">100% Practical</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

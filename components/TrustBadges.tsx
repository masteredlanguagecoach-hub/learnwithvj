'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Video, Smile, Laptop, Briefcase, FileSpreadsheet, Bot } from 'lucide-react';

const trustItems = [
  {
    icon: Video,
    title: 'Live Workshop',
    desc: '2 Hours Interactive Session',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Smile,
    title: 'Beginner Friendly',
    desc: 'No Coding Experience Needed',
    color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  },
  {
    icon: Laptop,
    title: 'Practical Learning',
    desc: '100% Hands-On Exercises',
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
  {
    icon: Briefcase,
    title: 'Real Business Examples',
    desc: 'Actual Enterprise Datasets',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: FileSpreadsheet,
    title: 'Google Sheets',
    desc: 'Master Modern Cloud Sheets',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Bot,
    title: 'AI Powered',
    desc: 'ChatGPT & Apps Script Secrets',
    color: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-slate-900/80 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 text-center flex flex-col items-center justify-center hover:border-slate-700 transition-all hover:-translate-y-1 shadow-sm"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.color} mb-2.5`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-white block mb-0.5">{item.title}</span>
                <span className="text-xs text-slate-400 font-medium">{item.desc}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle2, Cpu, Database, Layout, Sparkles, ArrowRight } from 'lucide-react';

export default function WhatYouWillLearn() {
  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="what-you-will-learn" className="py-16 md:py-24 bg-slate-900/40 border-t border-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20 inline-flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" /> REPEATABLE FRAMEWORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            What You Will Learn in the Live Workshop
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            In this 2.5-hour live session of the <strong>AI Business System Design Masterclass</strong>, one practical system-building process will be demonstrated step by step. You will master a repeatable framework that can be applied to your own business systems.
          </p>
        </div>

        {/* Repeatable Framework Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3"
          >
            <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">1. Sheets Database Design</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              How to organize columns, relational IDs, status triggers and data storage clean and structured in Google Sheets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3"
          >
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">2. AI-Powered Development</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              How to write clear prompts for ChatGPT/Claude to generate complete Google Apps Script APIs without traditional coding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <Layout className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">3. Web App Deployment</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              How to connect interactive Web App forms and dashboards to Google Sheets for real-time live data sync.
            </p>
          </motion.div>
        </div>

        {/* Applicable Business Systems Banner */}
        <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border border-blue-500/30 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center space-x-2 text-amber-300 font-bold text-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Apply This Framework to Any Business System</span>
          </div>
          <p className="text-slate-200 text-sm leading-relaxed">
            Learn a repeatable framework that can be applied to <strong>CRM, attendance, inventory, HRMS, payroll, analytics dashboards</strong> and other custom business systems for your organization or clients.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-300 pt-1">
            <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-sky-300">Customer CRM</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-emerald-300">Staff Attendance & Leave</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-indigo-300">Inventory Tracking</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-amber-300">Payroll Calculation</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-purple-300">Operations Dashboards</span>
          </div>
        </div>

      </div>
    </section>
  );
}

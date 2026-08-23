'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, ArrowRight, Sparkles, TrendingUp, Cpu } from 'lucide-react';

export default function WhyLearn() {
  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why-learn" className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20 inline-block">
            The Data Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Why Learn Business Intelligence & AI?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Businesses generate data every day. Most people don't know how to convert data into useful business decisions. This workshop teaches practical business analysis using Google Sheets and AI.
          </p>
        </div>

        {/* Before vs After Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Traditional Way Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">The Old & Painful Way</h3>
                  <span className="text-xs text-rose-400 font-medium">Manual, Slow & Error-Prone</span>
                </div>
              </div>

              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-lg leading-none">×</span>
                  <span>Spending hours manually copying & pasting data between spreadsheets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-lg leading-none">×</span>
                  <span>Struggling with complex VLOOKUP or formula syntax errors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-lg leading-none">×</span>
                  <span>Static reports that management cannot interact with or understand easily.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-lg leading-none">×</span>
                  <span>No automated alerts or live tracking of business KPIs.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
              Result: Wasted time, missed growth insights, high workplace stress.
            </div>
          </motion.div>

          {/* The AI BI Masterclass Way Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-950/80 via-slate-900 to-indigo-950/80 border border-blue-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-blue-500/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 shadow-md">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">The Veeje AI BI Masterclass Way</h3>
                  <span className="text-xs text-emerald-400 font-semibold">Automated, Fast & Intelligent</span>
                </div>
              </div>

              <ul className="space-y-4 text-slate-200 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Build real-time interactive business dashboards in minutes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Generate complex Google Sheets formulas instantly using ChatGPT AI prompts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Automate emails, WhatsApp alerts & data cleaning using Apps Script + AI.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Empower your business or career with high-income data analytics skills.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-blue-500/30 flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-bold">
                ✓ Transform 4 Hours of Manual Work into 10 Seconds
              </span>
              <button
                onClick={scrollToRegister}
                className="text-xs font-bold text-sky-300 hover:text-white flex items-center gap-1 group"
              >
                <span>Learn How</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

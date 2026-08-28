'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Clock, Video, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-950 text-white">
      {/* Background Glow & Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-sky-300 text-xs font-bold uppercase tracking-widest shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>LIVE PRACTICAL MASTERCLASS</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white max-w-4xl mx-auto"
        >
          Turn Your Business Ideas and Manual Processes into{' '}
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            Working Digital Systems
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto"
        >
          Learn how to understand a business requirement, design its workflow and build a practical system using Google Sheets, AI and Web Apps—without prior coding experience.
        </motion.p>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm sm:text-base font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 py-2.5 px-6 rounded-2xl max-w-2xl mx-auto"
        >
          Don’t just learn another tool. Learn a practical skill you can use to solve real business problems.
        </motion.p>

        {/* Workshop Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-200"
        >
          <span className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 font-bold text-amber-300">
            <Calendar className="w-4 h-4 text-amber-400" /> September 1, 2026
          </span>
          <span className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 font-bold text-sky-300">
            <Clock className="w-4 h-4 text-sky-400" /> 7:30 PM
          </span>
          <span className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 font-semibold text-emerald-400">
            <Video className="w-4 h-4 text-emerald-400" /> Live Online (2 Hours 30 Mins)
          </span>
          <span className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 font-semibold text-indigo-300">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Beginner Friendly
          </span>
          <span className="px-3.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center gap-2 font-extrabold text-emerald-300">
            Special Price: ₹111
          </span>
        </motion.div>

        {/* Primary CTA & Sub-text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="pt-2 space-y-3"
        >
          <button
            onClick={scrollToRegister}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 active:scale-95 inline-flex items-center justify-center gap-2"
          >
            <span>LEARN TO BUILD BUSINESS SYSTEMS — JOIN FOR ₹111</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Secure Razorpay payment • Instant confirmation</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}

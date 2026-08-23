'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Video, ArrowRight, TrendingUp, BarChart3, Bot, Zap, CheckCircle2, Globe, Database, Cpu } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-950 text-white">
      {/* Background Glow & Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tagline & Live Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3"
            >
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/40 text-blue-300 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                Design • Build • Automate • Deploy
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                2 Hours 30 Minutes (Live Online)
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              AI Business System Design{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Masterclass
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Learn how to design complete business systems, build databases in Google Sheets, connect them to web applications and use AI to automate development.
            </motion.p>

            {/* Badges Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-200"
            >
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5 font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 2 Hours 30 Minutes
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5 font-semibold text-sky-400">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> Beginner Friendly
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5 font-semibold text-indigo-400">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Live Practical Workshop
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5 font-semibold text-amber-400">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> AI Powered
              </span>
            </motion.div>

            {/* Pricing Highlight Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="inline-flex items-center gap-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-3 px-5 backdrop-blur-md shadow-lg"
            >
              <div>
                <span className="text-xs text-slate-400 block font-medium">Special Workshop Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-white">₹249</span>
                  <span className="text-sm text-slate-500 line-through">₹999</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    SAVE 75%
                  </span>
                </div>
              </div>
              <div className="h-8 w-[1px] bg-slate-800" />
              <div className="text-left text-xs text-slate-300">
                <span className="font-semibold text-sky-400 block">✓ Web App + Sheets Database</span>
                <span>No Code Programming Needed</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => scrollToSection('register')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Enroll Now for ₹249</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('curriculum')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>View 9-Module Curriculum</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Modern System Architecture Graphic Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Frame */}
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-3xl bg-slate-900/90 border border-slate-800/90 p-5 shadow-2xl backdrop-blur-xl">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-semibold text-slate-400">System Architecture Pipeline</span>
                </div>
                <span className="text-[11px] font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-md border border-sky-500/20 flex items-center gap-1">
                  <Globe className="w-3 h-3" /> Web App Connected
                </span>
              </div>

              {/* Architecture Flow Animation Graphic */}
              <div className="bg-slate-950/90 border border-slate-800/80 rounded-2xl p-4 mb-4 space-y-3">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-indigo-400" /> Full Stack No-Code Workflow:
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold">
                  <div className="bg-blue-600/20 border border-blue-500/40 rounded-xl p-2.5 text-blue-300">
                    User / Form
                  </div>
                  <div className="bg-indigo-600/20 border border-indigo-500/40 rounded-xl p-2.5 text-indigo-300">
                    Web App UI
                  </div>
                  <div className="bg-violet-600/20 border border-violet-500/40 rounded-xl p-2.5 text-violet-300">
                    AI Backend
                  </div>
                  <div className="bg-emerald-600/20 border border-emerald-500/40 rounded-xl p-2.5 text-emerald-300">
                    Sheets DB
                  </div>
                </div>

                <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 rounded-full animate-pulse" />
              </div>

              {/* Stat Metric Cards Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                    <span>Web App Data</span>
                    <Globe className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <div className="text-xl font-bold text-white">Live Web App</div>
                  <span className="text-[10px] text-sky-400 font-semibold">Connected to Google Sheets</span>
                </div>
                <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                    <span>AI Generated Code</span>
                    <Bot className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <div className="text-xl font-bold text-indigo-300">10x Faster</div>
                  <span className="text-[10px] text-indigo-400 font-semibold">Apps Script + Logic</span>
                </div>
              </div>

              {/* AI Prompt Floating Box */}
              <div className="bg-gradient-to-r from-blue-950/90 to-indigo-950/90 border border-blue-800/60 rounded-xl p-3 flex items-center justify-between shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-300">
                    <Bot className="w-4 h-4 animate-bounce" />
                  </div>
                  <div>
                    <span className="text-[11px] text-blue-300 font-semibold block">AI Prompt Engineering</span>
                    <span className="text-xs text-slate-200 font-mono">
                      "Generate Apps Script API for Web App..."
                    </span>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-1 rounded-md border border-emerald-500/30">
                  Ready
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Video, ArrowRight, Bot, Zap, CheckCircle2, Globe, Calendar, Play } from 'lucide-react';

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
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center gap-1.5 shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                LIVE WORKSHOP: SEPTEMBER 1, 2026
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
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5 font-semibold text-amber-300">
                <Calendar className="w-4 h-4 text-amber-400" /> September 1, 2026
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5 font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 2 Hours 30 Minutes
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5 font-semibold text-sky-400">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> Beginner Friendly
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5 font-semibold text-indigo-400">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Live Practical Workshop
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
                  <span className="text-3xl font-black text-white">₹249</span>
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

          {/* Right Column: Featured YouTube Video Player Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Luxury Frame */}
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-3xl bg-slate-900/95 border-2 border-blue-500/40 p-4 sm:p-5 shadow-2xl shadow-blue-600/20 backdrop-blur-xl">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-semibold text-slate-300">Watch Workshop Teaser</span>
                </div>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 flex items-center gap-1.5">
                  <Play className="w-3 h-3 text-emerald-400 fill-current" /> Live Masterclass Preview
                </span>
              </div>

              {/* Responsive 16:9 HD YouTube Embed */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
                <iframe
                  src="https://www.youtube.com/embed/j0ojPumgmBg?rel=0&autoplay=0"
                  title="AI Business System Design Masterclass Preview"
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Bottom Caption Box */}
              <div className="mt-3 bg-slate-950/80 border border-slate-800/80 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                  <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="font-semibold text-white">Watch how Veeje converts ideas to complete Web Apps</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  SEPT 1 LIVE
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Clock, Calendar } from 'lucide-react';

export default function PricingCard() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 14, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-900/80 border-t border-slate-800 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Scarcity & Date Banner */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-3 px-6 text-center text-amber-300 text-xs sm:text-sm font-semibold mb-8 flex items-center justify-center gap-2 flex-wrap">
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>Live Workshop Date: <strong>September 1, 2026</strong></span>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-amber-400 animate-spin" />
            <span>Special Offer Ends In: </span>
            <span className="font-mono bg-amber-500/20 px-2 py-0.5 rounded text-white font-bold">
              {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Large Premium Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-2 border-blue-500/50 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center"
        >
          {/* Top Glow Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 rounded-b-full shadow-lg shadow-sky-500/50" />
          
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-600/20 border border-blue-500/40 text-sky-300 mb-4">
            Live Online • September 1, 2026
          </span>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            AI Business System Design Masterclass
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">
            Complete 2 Hours 30 Minutes Live Masterclass + 10 Business Web App & Sheets System Templates.
          </p>

          {/* Pricing Numbers Box */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 max-w-md mx-auto mb-8 backdrop-blur-md">
            <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">Today's Special Price</div>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">₹249</span>
              <div className="text-left">
                <span className="text-lg text-slate-500 line-through block leading-tight">₹999</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                  SAVE 75%
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400">One-time payment • Full access to templates & recordings</p>
          </div>

          {/* Included Features Checklist */}
          <div className="max-w-lg mx-auto text-left space-y-3 mb-8 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Live Masterclass on September 1, 2026</strong> (2 Hours 30 Mins)</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Complete 9-Module Business System Design Roadmap</strong></span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>10 Business System Templates & Web App Connections</strong></span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>ChatGPT & Apps Script Prompt Engineering Guide</strong></span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Instant WhatsApp Student Group Access</strong> for live links & updates</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Certificate of Completion</strong> & live system deployment Q&A</span>
            </div>
          </div>

          {/* Large Action Button */}
          <button
            onClick={scrollToRegister}
            className="w-full max-w-md mx-auto py-4 px-8 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 transition-all duration-200 shadow-xl shadow-blue-600/40 hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Enroll Now for ₹249</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Secure Payment via Razorpay
            </span>
            <span>•</span>
            <span>100% Instant Confirmation</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

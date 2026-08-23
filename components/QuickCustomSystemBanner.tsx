'use client';

import React from 'react';
import { MessageSquare, Sparkles, ArrowRight, Zap, Building } from 'lucide-react';

export default function QuickCustomSystemBanner() {
  const whatsappUrl =
    "https://wa.me/916282548226?text=Hi%20Veeje,%20I%20don't%20want%20to%20learn.%20I%20need%20a%20custom%20business%20system%20built%20for%20my%20company.";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="bg-gradient-to-r from-amber-950/90 via-slate-900 to-amber-950/90 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        
        {/* Glow Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-start sm:items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
            <Building className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded border border-amber-500/30">
                Don't Want to Study?
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">• We Build It For You</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Need a Custom System Built for Your Business?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
              If you don't have time to learn or build software yourself, let our team design & deploy a custom CRM, HRMS, Attendance, Payroll, or Web App system for you.
            </p>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto shrink-0 px-6 py-3.5 rounded-2xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all duration-200 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 active:scale-95 flex items-center justify-center gap-2.5 group"
        >
          <MessageSquare className="w-4 h-4 text-slate-950 fill-current" />
          <span>Contact Veeje on WhatsApp</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

      </div>
    </div>
  );
}

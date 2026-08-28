'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Sparkles } from 'lucide-react';

export default function InstructorSection() {
  return (
    <section id="instructor" className="py-16 md:py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8">
          
          {/* Avatar / Badge Icon */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 p-[2px] shrink-0 shadow-xl shadow-blue-600/20">
            <div className="w-full h-full bg-slate-950 rounded-[22px] flex flex-col items-center justify-center text-center p-3">
              <Award className="w-10 h-10 text-sky-400 mb-1" />
              <span className="text-xs font-bold text-white">VEEJE</span>
              <span className="text-[10px] text-slate-400 font-mono">Lead Instructor</span>
            </div>
          </div>

          {/* Instructor Bio */}
          <div className="space-y-4 text-center md:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 inline-flex items-center gap-1 mb-2">
                <Sparkles className="w-3 h-3 text-sky-400" /> YOUR INSTRUCTOR
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Meet Veeje</h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                AI & Business System Architecture Trainer • Founder, Learn with Veeje
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Veeje specializes in helping business owners, professionals, and freelancers turn manual paper & spreadsheet workflows into automated digital systems using AI and Google Sheets.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-slate-200">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Practical No-Code Specialist
              </span>
              <span className="flex items-center gap-1.5 text-sky-400">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> 100% Step-by-Step Live Teaching
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

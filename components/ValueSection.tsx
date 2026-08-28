'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, UserCheck, GraduationCap, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ValueSection() {
  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const cards = [
    {
      title: 'Business Owner',
      text: 'Gain better control over customers, employees, sales and operations without depending entirely on expensive software.',
      icon: Building2,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      title: 'Employee or Manager',
      text: 'Reduce manual work, improve reporting and become the person who creates better systems for the organisation.',
      icon: UserCheck,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10 border-sky-500/20',
    },
    {
      title: 'Student or Fresher',
      text: 'Build a real business project for your portfolio and demonstrate practical problem-solving skills during interviews.',
      icon: GraduationCap,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20',
    },
    {
      title: 'Freelancer or Consultant',
      text: 'Start offering customised CRM, attendance, inventory, dashboard and automation solutions to clients.',
      icon: Briefcase,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
  ];

  const processSteps = [
    'Understand the Problem',
    'Design the Workflow',
    'Organise the Data',
    'Build the System',
  ];

  return (
    <section id="value-section" className="py-16 md:py-24 bg-slate-950 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Header & Introduction */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Learn One Skill. Create Value in Different Ways.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-1 bg-slate-900/80 border border-slate-800 p-5 rounded-2xl"
          >
            <p className="font-semibold text-white">This is not just a Google Sheets or AI class.</p>
            <p>
              You will learn how to understand a business problem and convert it into a practical digital system using Google Sheets, AI and Web Apps.
            </p>
          </motion.div>
        </div>

        {/* 4 Audience Cards Grid */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-slate-100">
            What Can This Skill Do for You?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cards.map((c, i) => {
              const IconComp = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition-colors space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center ${c.bg}`}>
                      <IconComp className={`w-5 h-5 ${c.color}`} />
                    </div>
                    <h4 className="text-lg font-bold text-white">{c.title}</h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{c.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* What Makes This Workshop Different & Process Flow */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              What Makes This Workshop Different?
            </h3>
            <p className="text-sm text-slate-300">
              You will not only learn tools. You will learn the complete process:
            </p>
          </div>

          {/* Visual Process Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center">
            {processSteps.map((step, idx) => (
              <div key={step} className="relative bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-1">
                  Step 0{idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">{step}</span>
              </div>
            ))}
          </div>

          {/* Key Skill Benefits List */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 max-w-2xl mx-auto space-y-3">
            <p className="text-sm font-bold text-amber-300">One practical skill that can help you:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Improve your business</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Grow in your career</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Build a strong portfolio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Create a professional service</span>
              </div>
            </div>
          </div>

          {/* Section CTA */}
          <div className="text-center pt-2">
            <button
              onClick={scrollToRegister}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 transition-all duration-200 shadow-xl shadow-blue-600/30 active:scale-95 inline-flex items-center justify-center gap-2"
            >
              <span>LEARN THIS SKILL — JOIN THE LIVE WORKSHOP FOR ₹111</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

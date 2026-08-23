'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, CheckCircle2, ArrowUpRight, Cpu, Code2, Database, Bot } from 'lucide-react';

const services = [
  'CRM System',
  'Attendance System',
  'HRMS Software',
  'Payroll System',
  'Inventory System',
  'Sales Dashboard',
  'Finance Dashboard',
  'Lead Management',
  'Student Management System',
  'Business Automation',
  'AI Chatbots',
  'Google Sheets Automation',
  'Apps Script Development',
  'AI Agents & Workflows',
];

export default function CustomSystemSection() {
  const whatsappUrl = 'https://wa.me/916282548226?text=Hi%20Veeje,%20I%20need%20a%20custom%20business%20system.';

  return (
    <section id="custom-systems" className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-amber-500/30 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden"
        >
          {/* Top Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Premium Enterprise Service
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Direct Contact: <strong className="text-white">+91 6282548226</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Need a Custom Business System?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                Don't have time to learn? Need a custom dashboard, automation, CRM, HR system, Inventory System, Finance Dashboard, Student Management System or any business software?
              </p>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm font-semibold">
                👉 Let us build it for you tailored specifically to your company's workflow.
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-base text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all duration-200 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-95 gap-3 group"
                >
                  <MessageSquare className="w-5 h-5 text-slate-950 fill-current" />
                  <span>Contact on WhatsApp</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <span className="block text-xs text-slate-400 mt-2 font-mono">
                  Replies typically in 5 minutes
                </span>
              </div>
            </div>

            {/* Right Side: Services Tags Grid */}
            <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-3xl p-6 shadow-inner">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-400" /> Custom Software & Automations We Build:
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {services.map((service, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:border-amber-500/40 hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Fast 3 to 7 Days Delivery</span>
                <span className="text-emerald-400 font-bold">100% Guaranteed Quality</span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

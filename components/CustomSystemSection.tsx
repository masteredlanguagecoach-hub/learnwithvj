'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Wrench } from 'lucide-react';

export default function CustomSystemSection() {
  const whatsappUrl =
    'https://wa.me/916282548226?text=' +
    encodeURIComponent('Hi Veeje, I want to discuss a customized business system for my business.');

  return (
    <section id="custom-systems" className="py-16 md:py-20 bg-slate-900/60 border-t border-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider"
        >
          <Wrench className="w-3.5 h-3.5 text-amber-400" />
          <span>CUSTOM SYSTEM DEVELOPMENT</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
        >
          Don’t Have Time to Build It Yourself?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Tell us what your business needs, and we can discuss creating a customised CRM, HRMS, attendance, inventory, payroll, dashboard or other business system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="pt-2"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 shadow-xl shadow-emerald-600/30 active:scale-95"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>DISCUSS MY REQUIREMENT ON WHATSAPP</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

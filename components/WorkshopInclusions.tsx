'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ShieldCheck, Video, FileText, MessageSquare, Award } from 'lucide-react';

export default function WorkshopInclusions() {
  const inclusions = [
    {
      icon: Video,
      title: '2 Days Live Masterclass Access',
      desc: 'Join the live interactive workshop on September 1 & 2, 2026 at 7:30 PM (2:30 Hrs Daily).',
    },
    {
      icon: FileText,
      title: 'Repeatable System Design Blueprint',
      desc: 'Step-by-step workflow mapping & Google Sheets database templates.',
    },
    {
      icon: Gift,
      title: 'AI Prompt Engineering Prompts',
      desc: 'Tested ChatGPT & Claude prompts for Google Apps Script API generation.',
    },
    {
      icon: MessageSquare,
      title: 'Official Student WhatsApp Group',
      desc: 'Direct access to live Google Meet links, templates & session updates.',
    },
    {
      icon: Award,
      title: 'Certificate of Completion',
      desc: 'Official masterclass completion certificate for your portfolio.',
    },
    {
      icon: ShieldCheck,
      title: 'Live Q&A Session',
      desc: 'Get your specific business system questions answered live during the session.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-900/60 border-t border-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            EVERYTHING INCLUDED
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            What Is Included in Your ₹111 Registration
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {inclusions.map((inc, i) => {
            const Icon = inc.icon;
            return (
              <motion.div
                key={inc.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {inc.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{inc.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

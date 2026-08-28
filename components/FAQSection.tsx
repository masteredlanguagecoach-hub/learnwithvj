'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need prior programming or coding experience?',
      a: 'No. The AI Business System Design Masterclass is beginner friendly and designed for business owners, managers, staff, freelancers and students without traditional coding backgrounds.',
    },
    {
      q: 'What are the dates and duration of the workshop?',
      a: 'The live workshop takes place over 2 days (September 1 & 2, 2026) at 7:30 PM daily (2 Hours 30 Minutes per session, total 5 hours of live practical training).',
    },
    {
      q: 'Will I get access to session resources and group support?',
      a: 'Yes! Upon successful registration, you will receive instant access to our official student WhatsApp group where live Google Meet links, templates and updates are shared.',
    },
    {
      q: 'What tools will be covered in the workshop?',
      a: 'You will learn how Google Sheets, AI (ChatGPT/Claude), and Web App forms work together to create practical digital systems for business requirements.',
    },
    {
      q: 'Is payment secure?',
      a: 'Yes. All registrations are processed securely via Razorpay with 256-bit SSL encryption and instant confirmation.',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" /> GOT QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-sky-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-sky-400' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Who can join this workshop?',
    a: 'Anyone! Whether you are a business owner, student, HR manager, sales representative, office staff, freelancer, or educator, this workshop is designed to turn your data into visual dashboards and automate your work using Google Sheets and AI.',
  },
  {
    q: 'Do I need coding experience?',
    a: 'No prior coding experience is required. We teach you how to use AI (like ChatGPT and Gemini) to write formulas and Apps Script automation code using plain English prompts.',
  },
  {
    q: 'Is it beginner friendly?',
    a: 'Yes, 100%! We start from fundamental data structuring principles and step-by-step progress to advanced Google Sheets formulas, pivot dashboards, and AI tools in a simple, easy-to-follow format.',
  },
  {
    q: 'How will I attend the live workshop?',
    a: 'The workshop is conducted Live Online via Google Meet. You can join from your laptop, desktop, or mobile device with an active internet connection.',
  },
  {
    q: 'How do I receive joining details?',
    a: 'Immediately after successful payment verification, you will be redirected to the Success Page with a direct button to join our exclusive WhatsApp Student Group. All Google Meet joining links, dates, and bonus dashboard templates will be shared inside the group and sent to your email.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-900/60 border-t border-slate-800 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20 inline-block">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Everything you need to know about the AI Business Intelligence Masterclass.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-slate-900/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="text-base sm:text-lg font-bold text-white">{faq.q}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-white' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-900 bg-slate-950/80">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

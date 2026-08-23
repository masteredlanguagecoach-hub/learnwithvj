'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle2, Clock, PlayCircle } from 'lucide-react';

const modules = [
  {
    number: '01',
    title: 'Business Data Analysis Basics',
    desc: 'Understanding raw data structure, data cleanliness standards, data types, and setting up business metrics framework.',
    topics: [
      'Data preparation & tabular formatting best practices',
      'Identifying key business metrics (Revenue, Profit, Retention, Units)',
      'Removing duplicates, handling blank cells, and data validation',
      'Structuring sheets for automated scalability',
    ],
  },
  {
    number: '02',
    title: 'Advanced Google Sheets Mastery',
    desc: 'Unlocking hidden features of modern Google Sheets for ultra-fast data manipulation.',
    topics: [
      'FILTER & SORT dynamic array functions',
      'QUERY formula masterclass (SQL-like power inside Sheets)',
      'IMPORTRANGE & multi-sheet data consolidation',
      'Conditional formatting for instant visual callouts',
    ],
  },
  {
    number: '03',
    title: 'Power Formulas & Logic',
    desc: 'Writing bulletproof business logic formulas that handle complex calculations effortlessly.',
    topics: [
      'XLOOKUP, VLOOKUP, INDEX-MATCH vs QUERY performance comparison',
      'Nested IF, AND, OR, SUMIFS, COUNTIFS multi-criteria calculations',
      'Date & Time logic (WORKDAY, DATEDIF, EDATE)',
      'Error handling (IFERROR, ISBLANK, IFNA)',
    ],
  },
  {
    number: '04',
    title: 'Executive Dashboards & Visualization',
    desc: 'Designing Apple-inspired clean visual dashboards that captivate managers and stakeholders.',
    topics: [
      'Interactive Pivot Tables & Pivot Charts',
      'KPI scorecard summary cards design',
      'Dynamic dropdown slicers & interactive filters',
      'Color psychology & visual layout hierarchy for business reports',
    ],
  },
  {
    number: '05',
    title: 'Artificial Intelligence Integration',
    desc: 'Leveraging ChatGPT, Gemini & AI tools to write formulas, clean data, and generate business insights.',
    topics: [
      'AI Prompts for generating 10x complex formulas instantly',
      'Using AI for automated data cleaning & text extraction',
      'AI-driven executive narrative summary generation from raw data',
      'Free AI Chrome Extensions for Google Sheets',
    ],
  },
  {
    number: '06',
    title: 'Business Automation with Apps Script',
    desc: 'Automating repetitive daily tasks without writing code from scratch.',
    topics: [
      'Intro to Google Apps Script (Plain English to Code with AI)',
      'Automated daily email reports dispatch',
      'Generating PDF invoices & certificates automatically',
      'Setting up automated triggers (Time-driven & Event-driven)',
    ],
  },
  {
    number: '07',
    title: 'Live Business Project & Q&A',
    desc: 'Build a complete live multi-department business BI system step-by-step alongside Veeje.',
    topics: [
      'Building an end-to-end Sales & CRM Dashboard live',
      'Testing automated email alerts & live Google Sheets sync',
      'Live Q&A: Troubleshooting your own specific business data problems',
      'Bonus access to pre-built Google Sheets business templates',
    ],
  },
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-slate-900/70 border-t border-slate-800 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20 inline-block">
            Step-By-Step Learning Path
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Workshop Curriculum
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            7 action-packed modules designed for maximum practical learning in 2 hours.
          </p>
        </div>

        {/* Modules Timeline Accordion */}
        <div className="space-y-4">
          {modules.map((mod, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden transition-all duration-200"
              >
                {/* Module Header Bar */}
                <button
                  onClick={() => toggleModule(idx)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-900/60 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-extrabold text-sm flex items-center justify-center shrink-0">
                      M{mod.number}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300">
                        {mod.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm mt-0.5 line-clamp-1">{mod.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 shrink-0 ml-2">
                    <span className="hidden sm:inline-block text-xs font-semibold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-md border border-sky-500/20">
                      Module {idx + 1} of 7
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {/* Module Body Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-900 bg-slate-950/90 space-y-4">
                    <p className="text-slate-300 text-sm leading-relaxed">{mod.desc}</p>
                    <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-3">
                        Key Learning Takeaways:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                        {mod.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

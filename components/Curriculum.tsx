'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle2, Workflow, ArrowRight, Database, Globe, Bot } from 'lucide-react';

const modules = [
  {
    number: '01',
    title: 'Business System Fundamentals',
    desc: 'Understanding what constitutes a complete digital business system and transitioning from manual processes.',
    topics: [
      'What is a Business System?',
      'Manual vs Digital Systems comparison',
      'Real Business Examples across industries',
      'Understanding core Business Processes',
    ],
  },
  {
    number: '02',
    title: 'Business Process Analysis',
    desc: 'Learn how to analyze and understand business requirements before building any software.',
    topics: [
      'Identify Business Problems & bottlenecks',
      'Identify Users & role permissions',
      'Define clear Business Goals & KPIs',
      'Structuring Inputs, Outputs, Reports & Dashboards',
    ],
  },
  {
    number: '03',
    title: 'System Logic Design',
    desc: 'Master the mindset of a senior system designer to architect end-to-end user and admin flows.',
    topics: [
      'Designing Business Workflows & User Flows',
      'Admin Flow & Decision Logic creation',
      'Error Handling & boundary constraints',
      'Workflow: Customer → Registration → Verification → Database → Dashboard → Reports → Automation',
    ],
  },
  {
    number: '04',
    title: 'Database Design',
    desc: 'Architect structured relational database models for scalable business operations.',
    topics: [
      'Tables, Fields & Data Types definition',
      'Master Data vs Transaction Data separation',
      'Entity Relationships & Primary/Foreign keys',
      'Database Models: Students, Payments, Attendance, Inventory, Customers, Employees',
    ],
  },
  {
    number: '05',
    title: 'Build Database using Google Sheets',
    desc: 'Turn Google Sheets into a high-performance, structured relational database.',
    topics: [
      'Google Sheets Structure & Data Validation dropdowns',
      'Mastering QUERY & FILTER dynamic functions',
      'XLOOKUP, SUMIFS & COUNTIFS power formulas',
      'Conditional Formatting & Executive Dashboard Basics',
    ],
  },
  {
    number: '06',
    title: 'AI Development & Automation',
    desc: 'Use AI prompt engineering to write formulas, Apps Script backend code, and debug logic.',
    topics: [
      'AI Prompt Engineering for business software',
      'Generating Google Sheets formulas with AI',
      'Generating Google Apps Script & Backend API Logic',
      'Debugging AI Code & improving system output',
    ],
  },
  {
    number: '07',
    title: 'Build Business Web Apps (NEW)',
    desc: 'Convert Google Sheets into interactive, production-ready business web applications.',
    topics: [
      'What is a Web App & Website vs Web App comparison',
      'Connecting Web Apps directly with Google Sheets API',
      'Reading & Displaying live Sheets data in Web App UI',
      'Adding New Data, Updating Records & Instant Multi-field Search',
      'Forms connected to Google Sheets & Web App Deployment',
      'Architecture: User → Web App → Backend/API → Google Sheets → Updated Data',
    ],
  },
  {
    number: '08',
    title: 'Private vs Public Applications',
    desc: 'Learn when to build internal private business software versus public customer portals.',
    topics: [
      'Private Apps: HRMS, Attendance, Payroll, CRM',
      'Public Apps: Student Registration, Booking System, Customer Portal, Payment Portal',
      'Authentication, security permissions & privacy control',
      'Deploying public vs private business solutions',
    ],
  },
  {
    number: '09',
    title: 'Complete Live Project & Deployment',
    desc: 'Build one complete end-to-end business web system from scratch to live deployment.',
    topics: [
      'Business Idea → Business Process → System Logic',
      'Database Design → Google Sheets → AI Development',
      'Web App UI → Testing → Production Deployment',
      'Step-by-step live demonstration alongside Veeje',
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
            Complete 9-Module Masterclass Path
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Workshop Curriculum
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From business analysis and database design to AI coding and Web App deployment in 2 Hours 30 Minutes.
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
                transition={{ duration: 0.3, delay: idx * 0.04 }}
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
                      Module {idx + 1} of 9
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
                        Key Topics Covered:
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

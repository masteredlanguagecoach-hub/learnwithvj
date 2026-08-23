'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, MessageSquare } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = 'https://wa.me/916282548226?text=Hi%20Veeje,%20I%20have%20a%20question%20about%20the%20Masterclass.';

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Learn with Veeje</span>
            </div>

            <p className="text-slate-400 text-sm max-w-sm">
              Empowering business owners, professionals, and students to design complete business systems, Google Sheets databases, and Web Apps with AI.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>Tagline:</span>
              <span className="text-sky-400 font-bold">Design • Build • Automate • Deploy</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/#why-learn" className="hover:text-white transition-colors">Why Learn BI</a>
              </li>
              <li>
                <a href="/#curriculum" className="hover:text-white transition-colors">Workshop Curriculum</a>
              </li>
              <li>
                <a href="/#dashboards" className="hover:text-white transition-colors">Business Systems</a>
              </li>
              <li>
                <a href="/#custom-systems" className="hover:text-amber-300 font-semibold transition-colors">Custom Business Systems</a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wider uppercase">Direct Contact</h4>
            <p className="text-slate-400 text-xs mb-3">Have questions before enrolling?</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs hover:bg-emerald-500/20 transition-all mb-4"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: +91 6282548226</span>
            </a>
            <div className="text-xs text-slate-400 space-y-1 font-mono">
              <p>Location: Live Online (Google Meet)</p>
              <p>Support: 24/7 Dedicated Support</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Learn with Veeje. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
            <Link href="/admin" className="hover:text-sky-400 transition-colors">Admin Login</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

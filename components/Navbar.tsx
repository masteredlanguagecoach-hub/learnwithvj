'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-slate-950/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-sky-400 p-[1px] shadow-md shadow-blue-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-sky-400 animate-pulse" />
            </div>
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              Learn with Veeje
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                SEP 1
              </span>
            </span>
            <span className="text-xs text-slate-400 block -mt-0.5">AI System Design</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <button onClick={() => scrollToSection('why-learn')} className="hover:text-blue-400 transition-colors">
            Why Learn
          </button>
          <button onClick={() => scrollToSection('curriculum')} className="hover:text-blue-400 transition-colors">
            Curriculum
          </button>
          <button onClick={() => scrollToSection('dashboards')} className="hover:text-blue-400 transition-colors">
            Business Systems
          </button>
          <button onClick={() => scrollToSection('custom-systems')} className="hover:text-amber-400 transition-colors flex items-center gap-1">
            Custom Systems
          </button>
          <button onClick={() => scrollToSection('faq')} className="hover:text-blue-400 transition-colors">
            FAQ
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="text-right">
            <span className="text-xs text-slate-400 block line-through">₹999</span>
            <span className="text-sm font-bold text-emerald-400">₹3 ONLY</span>
          </div>
          <button
            onClick={() => scrollToSection('register')}
            className="group relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 shadow-md shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40 active:scale-95"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection('why-learn')} className="text-left py-2 hover:text-blue-400">
              Why Learn
            </button>
            <button onClick={() => scrollToSection('curriculum')} className="text-left py-2 hover:text-blue-400">
              Curriculum
            </button>
            <button onClick={() => scrollToSection('dashboards')} className="text-left py-2 hover:text-blue-400">
              Business Systems
            </button>
            <button onClick={() => scrollToSection('custom-systems')} className="text-left py-2 text-amber-400 font-semibold">
              Custom Business Systems
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-left py-2 hover:text-blue-400">
              FAQ
            </button>
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block line-through">₹999</span>
              <span className="text-base font-bold text-emerald-400">Today ₹3</span>
            </div>
            <button
              onClick={() => scrollToSection('register')}
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

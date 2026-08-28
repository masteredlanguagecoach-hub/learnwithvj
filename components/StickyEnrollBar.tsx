'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export default function StickyEnrollBar() {
  const [visible, setVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 18, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 4, minutes: 18, seconds: 45 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 350;
      const registerElement = document.getElementById('register');
      
      let isFormVisible = false;
      if (registerElement) {
        const rect = registerElement.getBoundingClientRect();
        // If register form is currently in viewport
        isFormVisible = rect.top < window.innerHeight && rect.bottom > 0;
      }

      if (window.scrollY > heroHeight && !isFormVisible) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3 sm:py-3.5 shadow-2xl"
        >
          <div className="max-w-5xl mx-auto px-4 flex items-center justify-between gap-3">
            
            {/* Price & Event Date Info */}
            <div className="hidden sm:flex items-center space-x-3 text-xs">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">
                <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                <span>OFFER ENDS IN: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
              <div>
                <span className="text-slate-400 line-through mr-1 text-[11px]">₹999</span>
                <span className="text-sm font-extrabold text-emerald-400">₹111 ONLY</span>
              </div>
            </div>

            {/* Mobile Info */}
            <div className="sm:hidden text-left">
              <span className="text-[10px] text-amber-300 font-bold flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-400 animate-spin" />
                <span>Ends: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
              </span>
              <span className="text-xs font-black text-emerald-400">Price: ₹111</span>
            </div>

            {/* Sticky Action CTA Button */}
            <button
              onClick={scrollToRegister}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 transition-all duration-200 shadow-lg shadow-blue-600/30 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>JOIN FOR ₹111 — REGISTER NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

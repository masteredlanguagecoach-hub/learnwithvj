'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function WorkshopVideo() {
  return (
    <section className="py-12 md:py-16 bg-slate-900/60 border-y border-slate-800 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white"
        >
          See How Business Ideas Become Working Systems
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto"
        >
          Watch how Google Sheets, AI and Web Apps can work together to create practical systems for real business requirements.
        </motion.p>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-3xl mx-auto rounded-3xl bg-slate-950 border-2 border-blue-500/30 p-3 sm:p-4 shadow-2xl shadow-blue-600/10"
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
            <iframe
              src="https://www.youtube.com/embed/7ukHJqVf3AY?rel=0&autoplay=0"
              title="See How Business Ideas Become Working Systems"
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

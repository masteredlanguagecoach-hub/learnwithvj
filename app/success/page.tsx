'use client';

import React, { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import confetti from 'canvas-confetti';
import { CheckCircle2, MessageSquare, ShieldCheck, ArrowRight, Sparkles, Loader2 } from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();

  const studentName = searchParams.get('name') || 'Valued Student';
  const courseName = searchParams.get('course') || 'AI Business System Design Masterclass';
  const paymentId = searchParams.get('payment_id') || 'pay_verified_veeje';
  const amountPaid = searchParams.get('amount') || '3';
  const registrationId = searchParams.get('reg_id') || 'VEEJE-SUCCESS';

  const whatsappGroupLink =
    process.env.NEXT_PUBLIC_WHATSAPP_GROUP_LINK || 'https://chat.whatsapp.com/H5MZSMLnKy07SlM5EGWOnc';

  useEffect(() => {
    // Trigger celebratory confetti animation on load
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#10b981', '#3b82f6', '#f59e0b'],
      });
    } catch (e) {
      console.log('Confetti effect initialization');
    }
  }, []);

  return (
    <div className="max-w-xl w-full relative z-10 space-y-6">
      {/* Main Success Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl text-center relative overflow-hidden">
        {/* Top Success Badge */}
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20 animate-bounce">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2">
          REGISTRATION CONFIRMED
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
          Payment Successful!
        </h1>

        <p className="text-emerald-400 text-lg font-bold mb-6">
          Congratulations {studentName}! Your seat has been confirmed.
        </p>

        {/* Student Payment Details Summary Box */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 text-left text-sm space-y-3 mb-8">
          <div className="flex justify-between items-center pb-2 border-b border-slate-900">
            <span className="text-slate-400">Student Name:</span>
            <span className="font-bold text-white">{studentName}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-slate-900">
            <span className="text-slate-400">Course Name:</span>
            <span className="font-bold text-sky-400">{courseName}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-slate-900">
            <span className="text-slate-400">Registration ID:</span>
            <span className="font-mono text-xs text-slate-300">{registrationId}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-slate-900">
            <span className="text-slate-400">Payment ID:</span>
            <span className="font-mono text-xs text-slate-300">{paymentId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Amount Paid:</span>
            <span className="font-extrabold text-emerald-400">₹{amountPaid}</span>
          </div>
        </div>

        {/* Large Green WhatsApp Group Button Box */}
        <div className="bg-gradient-to-br from-emerald-950/80 via-slate-950 to-teal-950/80 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-4 shadow-xl">
          <div className="flex items-center justify-center space-x-2 text-emerald-400 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>ACTION REQUIRED IMMEDIATELY</span>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            Please join the WhatsApp group immediately. All workshop updates, Google Meet joining links & bonus dashboard templates will be shared there.
          </p>

          <a
            href={whatsappGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full py-4 px-6 rounded-xl font-black text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all duration-200 shadow-xl shadow-emerald-500/30 active:scale-95 gap-3 group"
          >
            <MessageSquare className="w-5 h-5 text-slate-950 fill-current" />
            <span>Join WhatsApp Group Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Confirmation email sent
          </span>
          <a href="/" className="text-sky-400 font-semibold hover:underline">
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 py-12 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <Suspense
        fallback={
          <div className="text-center space-y-4">
            <Loader2 className="w-10 h-10 text-emerald-400 animate-spin mx-auto" />
            <p className="text-slate-400 text-sm">Loading registration details...</p>
          </div>
        }
      >
        <SuccessContent />
      </Suspense>
    </div>
  );
}

import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Learn with Veeje',
  description: 'Terms of Service for Learn with Veeje - AI Business System Design Masterclass.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-8">
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-sky-400 font-bold hover:underline">
          <ArrowLeft className="w-4 h-4" /> Return to Masterclass Home
        </Link>
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="flex items-center space-x-3">
            <FileText className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-extrabold text-white">Terms of Service</h1>
          </div>
          <p className="text-slate-400 text-sm">Last updated: August 2026</p>
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-white">1. Masterclass Enrollment</h2>
            <p>Enrollment in the AI Business System Design Masterclass guarantees access to the 2 Hours 30 Minutes live online session, dashboard templates, and student WhatsApp group.</p>

            <h2 className="text-lg font-bold text-white">2. Payment & Refunds</h2>
            <p>Registration fees (₹249) are processed via Razorpay. Upon successful payment verification, your seat is confirmed immediately.</p>

            <h2 className="text-lg font-bold text-white">3. Intellectual Property</h2>
            <p>All workshop templates, prompt guides, and curriculum materials provided during the masterclass are owned by Learn with Veeje and provided for personal and business use.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

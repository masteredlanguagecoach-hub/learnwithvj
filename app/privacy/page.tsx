import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Learn with Veeje',
  description: 'Privacy Policy for Learn with Veeje - AI Business System Design Masterclass.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-8">
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-sky-400 font-bold hover:underline">
          <ArrowLeft className="w-4 h-4" /> Return to Masterclass Home
        </Link>
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
            <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
          </div>
          <p className="text-slate-400 text-sm">Last updated: August 2026</p>
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-white">1. Information Collection</h2>
            <p>We collect student registration information including Name, Email Address, WhatsApp Number, City, and Profession solely for course enrollment, communication, and verified payment processing via Razorpay.</p>

            <h2 className="text-lg font-bold text-white">2. Use of Information</h2>
            <p>Your details are used exclusively to deliver the AI Business System Design Masterclass, dispatch joining links via email/WhatsApp, and process payments securely.</p>

            <h2 className="text-lg font-bold text-white">3. Data Protection & Security</h2>
            <p>All payment operations are handled securely through Razorpay's 256-bit SSL encrypted gateway. We do not store financial credentials or secret keys on our frontend servers.</p>

            <h2 className="text-lg font-bold text-white">4. Contact Us</h2>
            <p>If you have any questions regarding your personal data, contact Veeje at +91 6282548226.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

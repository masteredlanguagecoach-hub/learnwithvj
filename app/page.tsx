import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import QuickCustomSystemBanner from '@/components/QuickCustomSystemBanner';
import TrustBadges from '@/components/TrustBadges';
import WhyLearn from '@/components/WhyLearn';
import WorkshopDifferent from '@/components/WorkshopDifferent';
import LearningCards from '@/components/LearningCards';
import BusinessExamples from '@/components/BusinessExamples';
import Curriculum from '@/components/Curriculum';
import TargetAudience from '@/components/TargetAudience';
import PricingCard from '@/components/PricingCard';
import RegistrationForm from '@/components/RegistrationForm';
import CustomSystemSection from '@/components/CustomSystemSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 2b. Quick Custom System Contact Banner (Near Course Details) */}
      <QuickCustomSystemBanner />

      {/* 3. Trust Highlights */}
      <TrustBadges />

      {/* 4. Why Learn This? */}
      <WhyLearn />

      {/* 5. What Makes This Workshop Different? */}
      <WorkshopDifferent />

      {/* 6. What You Will Learn (16 Cards) */}
      <LearningCards />

      {/* 7. What Students Will Build (10 Systems) */}
      <BusinessExamples />

      {/* 8. Workshop Curriculum (9 Modules) */}
      <Curriculum />

      {/* 9. Who Should Join */}
      <TargetAudience />

      {/* 10. Pricing Section (₹249 vs ₹999) */}
      <PricingCard />

      {/* 11. Registration Form & Razorpay Payment */}
      <RegistrationForm />

      {/* 12. Custom Business System Section (Secondary Goal) */}
      <CustomSystemSection />

      {/* 13. Frequently Asked Questions */}
      <FAQSection />

      {/* 14. Footer */}
      <Footer />
    </main>
  );
}

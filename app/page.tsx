import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import WhyLearn from '@/components/WhyLearn';
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

      {/* 3. Trust Highlights */}
      <TrustBadges />

      {/* 4. Why Learn This? */}
      <WhyLearn />

      {/* 5. What You Will Learn (12 Cards) */}
      <LearningCards />

      {/* 6. Real Business Dashboards (9 Projects) */}
      <BusinessExamples />

      {/* 7. Workshop Curriculum (7 Modules) */}
      <Curriculum />

      {/* 8. Who Should Join (10 Target Audience Roles) */}
      <TargetAudience />

      {/* 9. Pricing Section (₹249 vs ₹999) */}
      <PricingCard />

      {/* 10. Registration Form & Razorpay Payment */}
      <RegistrationForm />

      {/* 11. Custom Business System Section (Secondary Goal) */}
      <CustomSystemSection />

      {/* 12. Frequently Asked Questions */}
      <FAQSection />

      {/* 13. Footer */}
      <Footer />
    </main>
  );
}

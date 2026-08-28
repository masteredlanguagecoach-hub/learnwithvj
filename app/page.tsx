import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkshopVideo from '@/components/WorkshopVideo';
import ValueSection from '@/components/ValueSection';
import WhatYouWillLearn from '@/components/WhatYouWillLearn';
import InstructorSection from '@/components/InstructorSection';
import WorkshopInclusions from '@/components/WorkshopInclusions';
import RegistrationForm from '@/components/RegistrationForm';
import FAQSection from '@/components/FAQSection';
import CustomSystemSection from '@/components/CustomSystemSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Header Navigation */}
      <Navbar />

      {/* 1. Hero and primary CTA */}
      <Hero />

      {/* 2. Workshop Video */}
      <WorkshopVideo />

      {/* 3. Value section with 4 audience cards & process */}
      <ValueSection />

      {/* 4. What participants will learn & repeatable framework */}
      <WhatYouWillLearn />

      {/* 5. Instructor section */}
      <InstructorSection />

      {/* 6. Workshop inclusions */}
      <WorkshopInclusions />

      {/* 7. Price and registration form */}
      <RegistrationForm />

      {/* 8. FAQ */}
      <FAQSection />

      {/* 9. Custom-system service */}
      <CustomSystemSection />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}

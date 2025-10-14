// src/pages/Home.tsx
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import Services from '@/components/ServicesSection'; 
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import TestimonialSection from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Integrations from '@/components/Integrations';
import SheduleCTA from '@/components/SheduleCTA';
import ContactUsPreviewSection from '@/components/ContactUsPreviewSection';
import HomeBlogs from '@/components/HomeBlogs';

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        <title>TryzenIQ</title>
        <meta name="description" content="Automate your business with AI: leads, outreach, reminders, and scheduling. TryzenIQ helps boost revenue and save time." />
        <meta property="og:title" content="TryzenIQ — Automate Bookings and Maximize Revenue" />
        <meta property="og:description" content="AI automation for bookings, reminders, and customer engagement to scale your business." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navbar />
      <main>
        <HeroSection />
        <Integrations/>
        <StatsSection />
        <Services />
      {/* <PricingSection/> */}
      {/* <TestimonialsSection/> */}
      <TestimonialSection/>
      <HomeBlogs/>
      <FAQSection/> 
      {/* <SheduleCTA/> */}
      <ContactUsPreviewSection/>
      {/* <CTASection/> */}
      
      </main>
      <Footer />
      <ScrollToTopButton />

    </div>
  );
};

export default Home;

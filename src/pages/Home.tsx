import ServiceCards from "@/components/ServiceCards";
import HomeContact from "@/components/HomeContact";
import HeroSection from "@/components/home/HeroSection";
import HolidaySection from "@/components/home/HolidaySection";
import NaturalSmileSection from "@/components/home/NaturalSmileSection";
import ReferFriendSection from "@/components/home/ReferFriendSection";
import HealthySmilesSection from "@/components/home/HealthySmilesSection";
import CtaSection from "@/components/home/CtaSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FaqSection from "@/components/home/FaqSection";
import HomeBlogSection from "@/components/home/HomeBlogSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import ContactSection from "@/components/home/ContactSection";
import HomeServiceSection from "@/components/home/HomeServiceSection";

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroSection />
      <WhyChooseSection />
      <HomeServiceSection />
      <BeforeAfterSection />
      <TestimonialSection />
      <FaqSection />
      <HomeBlogSection />
      <ContactSection />
    </main>
  );
};

export default Home;

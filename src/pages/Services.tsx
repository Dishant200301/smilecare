import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import GiftCardSection from "@/components/services/GiftCardSection";
import TeethWhiteningSection from "@/components/services/TeethWhiteningSection";
import InsurancePartnersSection from "@/components/services/InsurancePartnersSection";
import ServicesTestimonialSection from "@/components/services/ServicesTestimonialSection";
import ContactSection from "@/components/home/ContactSection";

const Services = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* <ServicesHeroSection /> */}
      <ServicesGridSection />
      {/* <GiftCardSection /> */}
      {/* <TeethWhiteningSection /> */}
      {/* <InsurancePartnersSection /> */}
      {/* <ServicesTestimonialSection /> */}
      <ContactSection />
    </div>
  );
};

export default Services;

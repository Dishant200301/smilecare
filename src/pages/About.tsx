import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";
import AboutVision from "@/components/about/AboutVision";
import AboutMission from "@/components/about/AboutMission";
import AboutTeam from "@/components/about/AboutTeam";
import TestimonialSection from "@/components/home/TestimonialSection";
import ContactSection from "@/components/home/ContactSection";

const About = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <AboutHero />

      {/* Main About Section */}
      <AboutSection />

      {/* Vision Section */}
      <AboutVision />

      {/* Mission Section */}
      <AboutMission />

      {/* Team Section */}
      <AboutTeam />
      {/* <TestimonialSection /> */}
      <ContactSection />
    </div>
  );
};

export default About;

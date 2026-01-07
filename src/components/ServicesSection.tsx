import React, { useEffect, useState } from "react";
import FooterGlobeSection from "./FooterGlobeSection";
import { ArrowRight } from "lucide-react";
import EarthGlobe3D from "./EarthGlobe3D";
import { motion } from "framer-motion";
import GradientButton from "./GradientButton";
import { categoryDetailData } from "../data/categoryDetailData";

const services = [
  {
    imageUrl: categoryDetailData["beauty-personal-care"].heroImages[0],
    category: "Beauty",
    title: "Beauty & Personal Care",
    description:
      "Transform your appearance with professional beauty and personal care services",
    link: "/category/beauty-personal-care",
  },
  {
    imageUrl: categoryDetailData["health-medical-services"].heroImages[0],
    category: "Healthcare",
    title: "Health & Medical Services",
    description:
      "Comprehensive healthcare solutions for your well-being and medical needs",
    link: "/category/health-medical-services",
  },
  {
    imageUrl: categoryDetailData["fitness-coaching"].heroImages[0],
    category: "Fitness",
    title: "Fitness & Coaching",
    description:
      "Achieve your fitness goals with expert training and personalized coaching",
    link: "/category/fitness-coaching",
  },
  {
    imageUrl: categoryDetailData["home-local-services"].heroImages[0],
    category: "Home Services",
    title: "Home & Local Services",
    description:
      "Reliable home improvement and local services for your everyday needs",
    link: "/category/home-local-services",
  },
  {
    imageUrl: categoryDetailData["professional-services"].heroImages[0],
    category: "Business",
    title: "Professional Services",
    description:
      "Expert professional services to support your business and career growth",
    link: "/category/professional-services",
  },
  {
    imageUrl: categoryDetailData["creative-event-services"].heroImages[0],
    category: "Events",
    title: "Creative & Event Services",
    description:
      "Make your events memorable with creative planning and execution",
    link: "/category/creative-event-services",
  },
];

type ServicesProps = {
  limit?: number;
};

const Services: React.FC<ServicesProps> = ({ limit }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="relative w-full bg-black text-white overflow-hidden mt-32">
      {/* Layer 3: Earth Globe (Bottom Layer) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pt-10">
        <EarthGlobe3D earthColor={0x77ddff} className="pt-50" />
        <div className="absolute inset-0 top-20 z-10 bg-gradient-to-b from-black/3 via-black/50 to-black"></div>
        <div className="absolute inset-0 top-40 z-10 bg-gradient-to-b from-black/3 via-black/50 to-black"></div>
        <div className="absolute inset-0 top-60 z-10 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>
        <div className="absolute inset-0 top-0 z-10 bg-gradient-to-b from-black/10 via-black/50 to-black"></div>
        <div className="absolute inset-0 top-100 z-10 bg-gradient-to-b from-black/10 via-black/50 to-black"></div>
        <div className="absolute inset-0 top-100 z-10 bg-gradient-to-b from-black/10 via-black/50 to-black"></div>
      </div>

      {/* Layer 2: Gradient Overlay (Middle Layer) */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* <FooterGlobeSection /> */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-52"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative z-20 w-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 ">

            {/* Left Title */}
            <h2 className="text-center lg:text-left text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-5xl font-HindMadurai font-medium leading-tight">
              Our Premium{" "}
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-5xl gradient-text font-InstrumentSerif italic text-white">
                business services
              </span>
            </h2>

            {/* Right Button */}
            <GradientButton title="Explore More" link="/category" />

          </div>

        </motion.div>

        <motion.div
          className="overflow-hidden relative pt-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute inset-0 z-0 flex items-center justify-center"></div>

          <div className="hidden lg:block">
            <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-20" />
            <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-20" />
          </div>
          <div className="flex gap-8 w-max animate-scrollRtl">
            {[...visibleServices, ...visibleServices].map(
              (service, index) => (
                <div
                  key={index}
                  className="w-[350px] flex-shrink-0 snap-start"
                >
                  <a
                    href={service.link}
                    className="group relative block bg-background backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-150 ease-in-out transform border border-gray-800 hover:border-gray-500"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-48 object-cover transition-transform duration-200 ease-in-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <div className="p-6 transition-colors duration-150 ease-in-out">
                      <h3
                        className="text-xl font-bold text-white mb-3 
                           group-hover:text-white transition-colors duration-150 ease-in-out"
                      >
                        {service.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className="inline-flex items-center gap-2 text-white 
                               font-semibold group-hover:gap-3 transition-all duration-150 ease-in-out"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-150 ease-in-out group-hover:translate-x-1" />
                        </span>
                        <div
                          className="w-2 h-2 rounded-full bg-white opacity-0 
                              group-hover:opacity-100 transition-opacity duration-150 ease-in-out"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              )
            )}
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default Services;

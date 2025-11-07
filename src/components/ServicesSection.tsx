import React, { useEffect, useState } from "react";
import FooterGlobeSection from "./FooterGlobeSection";
import { ArrowRight } from "lucide-react";
import EarthGlobe3D from "./EarthGlobe3D";
import { motion } from "framer-motion";

const services = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=60",
    category: "Beauty",
    title: "Botox & Skin Care",
    description:
      "AI-powered appointment booking and customer engagement for beauty clinics",
    link: "/business-category/botox-skincare",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&auto=format&fit=crop&q=60",
    category: "Healthcare",
    title: "Clinics and Dentist",
    description:
      "Automated patient management and appointment scheduling systems",
    link: "/business-category/clinics-dentist",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60",
    category: "Fitness",
    title: "Gym & Health Coach",
    description: "Member management and fitness consultation automation",
    link: "/business-category/gym-health-coach",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&auto=format&fit=crop&q=60",
    category: "Consulting",
    title: "Business Consultation",
    description:
      "Professional consulting services with AI-driven client management",
    link: "/business-category/business-consultation",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=60",
    category: "Technology",
    title: "IT & SAAS Services",
    description:
      "Technology solutions with automated customer support and onboarding",
    link: "/business-category/it-saas",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    category: "Beauty",
    title: "Salons & Spa",
    description:
      "Beauty service automation with smart booking and customer care",
    link: "/business-category/salons-spa",
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
      <div className="relative min-h-screen w-full bg-black text-white overflow-hidden mt-32">
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
            <div className="relative z-20 flex flex-col items-center justify-center text-center p-4  ">
              <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-5xl font-HindMadurai font-medium leading-tight">
                Our Premium{" "}
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-5xl gradient-text font-InstrumentSerif italic text-white">
                  business services
                </span>
              </h2>
              
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

          <div className="text-center mt-12">
            <a
              href="/business-category"
              className="group relative inline-flex items-center justify-between border border-gray-500 
                              text-white font-semibold pl-6 pr-14 py-3 rounded-full overflow-hidden 
                              transition-all duration-200 ease-out"
            >
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white text-black z-10 
               transition-transform duration-700 ease-in-out group-hover:scale-[45]"
              />

              <span className="relative z-20 transition-colors duration-700 ease-in-out group-hover:text-black">
                Explore More
              </span>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
                <ArrowRight className="w-5 h-5 text-black duration-200 ease-out group-hover:text-black" />
              </span>
            </a>
          </div>
        </div>
      </div>
  );
};

export default Services;

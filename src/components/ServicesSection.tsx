import React, { useEffect, useState } from "react";
import FooterGlobeSection from "./FooterGlobeSection";
import { ArrowRight } from "lucide-react";
import EarthGlobe3D from "./EarthGlobe3D";

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
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=60",
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
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Globe */}
      <div className=" inset-0 z-0 flex items-center justify-center pb-40">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <EarthGlobe3D earthColor={0x77ddff} />
      </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* <FooterGlobeSection /> */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl gradient-text font-HindMadurai font-medium leading-tight">
              Our Premium{" "}
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl gradient-text font-InstrumentSerif italic text-white">
                business services
              </span>
            </h1>
            <p className="text-md sm:text-xl md:text-2xl lg:text-2xl font-InstrumentSerif text-gray-400 mt-4">
              Transform your business with smart digital solutions.
            </p>
          </div>
        </div>

        <div className="overflow-hidden relative py-8 ">
          <div className="hidden lg:block">
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-20" />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-20" />
          </div>
          <div className="flex gap-8 w-max animate-scrollRtl">
            {[...visibleServices, ...visibleServices].map((service, index) => (
              <div key={index} className="w-[350px] flex-shrink-0 snap-start">
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
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/business-category"
            className="group relative inline-flex items-center justify-between border border-gray-500 
                              text-white font-semibold pl-6 pr-14 py-4 rounded-full overflow-hidden 
                              transition-all duration-200 ease-out"
          >
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white text-black z-10 
               transition-transform duration-700 ease-in-out group-hover:scale-[45]"
            />

            <span className="relative z-20 transition-colors duration-700 ease-in-out group-hover:text-black">
              Explore All Business
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
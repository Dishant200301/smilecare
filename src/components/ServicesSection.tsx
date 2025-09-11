// src/components/Services.tsx
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import ShinyText from "./ShinyText";

// Dummy services data
const services = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=60",
    category: "Beauty",
    title: "Botox & Skin Care",
    description:
      "AI-powered appointment booking and customer engagement for beauty clinics",
    link: "/services/botox-skincare",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&auto=format&fit=crop&q=60",
    category: "Healthcare",
    title: "Clinics and Dentist",
    description:
      "Automated patient management and appointment scheduling systems",
    link: "/services/clinics-dentist",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60",
    category: "Fitness",
    title: "Gym & Health Coach",
    description: "Member management and fitness consultation automation",
    link: "/services/gym-health-coach",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&auto=format&fit=crop&q=60",
    category: "Consulting",
    title: "Business Consultation",
    description:
      "Professional consulting services with AI-driven client management",
    link: "/services/business-consultation",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=60",
    category: "Technology",
    title: "IT & SAAS Services",
    description:
      "Technology solutions with automated customer support and onboarding",
    link: "/services/it-saas",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=60",
    category: "Beauty",
    title: "Salons & Spa",
    description:
      "Beauty service automation with smart booking and customer care",
    link: "/services/salons-spa",
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
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extralight mb-6 bg-[#ffffff] bg-clip-text text-transparent  text-center font-playfair">
            Our Premium{" "}
            <ShinyText text="Services" className="hero-text-gradient" />
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed ">
            Discover our comprehensive range of digital solutions designed to
            transform your business and drive growth in the modern world.
          </p>
        </div>

        {/* 🔁 Smooth Infinite Scroll Container */}
        <div className="overflow-hidden relative py-8 ">
          {/* Side gradient fade */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-20" />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-20" />

          <div className="flex gap-8 w-max animate-scroll">
            {[...visibleServices, ...visibleServices].map((service, index) => (
              <div key={index} className="w-[350px] flex-shrink-0 snap-start">
                <a
                  href={service.link}
                  className="group relative block bg-gray-900/50 backdrop-blur-sm rounded-3xl 
                     overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 
                     transition-all duration-150 ease-in-out transform  
                     border border-gray-800 hover:border-cyan-500/30"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-200 ease-in-out
                         group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-6 transition-colors duration-150 ease-in-out">
                    <h3
                      className="text-xl font-bold text-white mb-3 
                           group-hover:text-[#8caac8] transition-colors duration-150 ease-in-out"
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="inline-flex items-center gap-2 text-[#8caac8] 
                               font-semibold group-hover:gap-3 transition-all duration-150 ease-in-out"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-150 ease-in-out group-hover:translate-x-1" />
                      </span>
                      <div
                        className="w-2 h-2 rounded-full bg-[#8caac8] opacity-0 
                              group-hover:opacity-100 transition-opacity duration-150 ease-in-out"
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Button */}
        {limit && (
          <div className="text-center mt-12">
            <a
              href="/services"
              className="group relative inline-flex items-center justify-between border border-gray-500 
                       text-white font-semibold pl-6 pr-14 py-4 rounded-full overflow-hidden 
                       transition-all duration-200 ease-out"
            >
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#8caac8] text-black z-10 
        transition-transform duration-700 ease-in-out group-hover:scale-[45]"
              />

              {/* Text */}
              <span
                className="relative z-20 transition-colors duration-700 ease-in-out group-hover:text-black"
                style={{ fontFamily: "inter", animationDelay: "0.2s" }}
              >
                Explore All Services
              </span>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
                <ArrowRight className="w-5 h-5 text-black duration-200 ease-out group-hover:text-black" />
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;

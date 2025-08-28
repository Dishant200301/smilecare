import React, { useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LightRays from "@/components/LightRays";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const services = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=60",
    category: "Beauty",
    title: "Botox & Skin Care",
    description:
      "AI-powered appointment booking and customer engagement for beauty clinics",
    link: "/botox-skincare",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&auto=format&fit=crop&q=60",
    category: "Healthcare",
    title: "Clinics and Dentist",
    description:
      "Automated patient management and appointment scheduling systems",
    link: "/clinics-dentist",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60",
    category: "Fitness",
    title: "Gym & Health Coach",
    description: "Member management and fitness consultation automation",
    link: "/gym-health-coach",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&auto=format&fit=crop&q=60",
    category: "Consulting",
    title: "Business Consultation",
    description:
      "Professional consulting services with AI-driven client management",
    link: "/business-consultation",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=60",
    category: "Technology",
    title: "IT & SAAS Services",
    description:
      "Technology solutions with automated customer support and onboarding",
    link: "/it-saas",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=60",
    category: "Beauty",
    title: "Salons & Spa",
    description:
      "Beauty service automation with smart booking and customer care",
    link: "/salons-spa",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60",
    category: "Real Estate",
    title: "Real Estate Agents",
    description: "Property showing automation and lead management systems",
    link: "/real-estate-agents",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60",
    category: "Mental Health",
    title: "Therapists & Counselors",
    description:
      "Mental health practice automation with secure patient communications",
    link: "/therapists-counselors",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=60",
    category: "Finance",
    title: "Insurance & Financial",
    description:
      "Financial services automation with claim processing and client management",
    link: "/insurance-financial",
  },
];

type ServicesProps = {
  limit?: number;
  showFilter?: boolean;
};

const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || window.innerWidth < 768) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease-out",
      }}
    >
      {children}
    </div>
  );
};

const Services: React.FC<ServicesProps> = ({ limit, showFilter = true }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(services.map((s) => s.category))),
  ];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const visibleServices = limit
    ? filteredServices.slice(0, limit)
    : filteredServices;

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Services — TryzenIQ</title>
        <meta
          name="description"
          content="Explore AI-powered services: booking automation, client engagement, analytics, and more for beauty, healthcare, fitness, real estate, and SaaS."
        />
        <meta property="og:title" content="Services — TryzenIQ" />
        <meta
          property="og:description"
          content="Comprehensive AI automation services tailored to your industry."
        />
      </Helmet>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="w-full h-full"
          />
        </div>

        <div className="text-center mb-16 pt-[150px]">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-semibold px-4 py-2 bg-white/5 border border-white/10 rounded-full tracking-wide text-sm">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of digital solutions designed to
            transform your business and drive growth in the modern world.
          </p>
        </div>

        {showFilter && (
          <div className="mb-12">
            <div className="flex flex-nowrap gap-4 justify-start overflow-x-auto pb-3 pt-2 md:flex-wrap md:justify-center scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="relative group inline-flex items-center gap-2 overflow-hidden
                     border border-[#555555] text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-medium 
                     text-sm transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-cyan-500/30
                                md:text-sm whitespace-nowrap flex-shrink-0"
                >
                  <span
                    className={`absolute inset-0 rounded-full transform origin-bottom transition-transform duration-500 ease-out ${
                      activeCategory === category
                        ? "scale-y-100 bg-white"
                        : "scale-y-0 bg-white group-hover:scale-y-100"
                    }`}
                  ></span>
                  <span
                    className={`relative z-10 transition-colors duration-500 ${
                      activeCategory === category
                        ? "text-black"
                        : "text-white group-hover:text-black"
                    }`}
                  >
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleServices.map((service, i) => (
            <TiltCard key={`${service.category}-${i}`}>
              <a
                href={service.link}
                className="group relative block backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-cyan-500/30"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </TiltCard>
          ))}
        </div>

        {visibleServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">
              No services found for "{activeCategory}"
            </p>
            <button
              onClick={() => setActiveCategory("All")}
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
            >
              Show all services
            </button>
          </div>
        )}

        {limit && !showFilter && (
          <div className="text-center mb-10">
            <a
              href="/services"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
      <Footer />
      <ScrollToTopButton />

    </div>
  );
};

export default Services;

import React, { useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LightRays from "@/components/LightRays";

// Mock data for demonstration
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
    if (!cardRef.current || window.innerWidth < 768) return; // Disable tilt on mobile

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || window.innerWidth < 768) return; // Disable tilt on mobile
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
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

  // Get unique categories from services
  const categories = [
    "All",
    ...Array.from(new Set(services.map((service) => service.category))),
  ];

  // Filter services based on active category
  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  // Apply limit if specified
  const visibleServices = limit
    ? filteredServices.slice(0, limit)
    : filteredServices;

  const categoryColors = {
    Beauty: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    Healthcare: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    Fitness: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    Consulting: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    Technology: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    "Real Estate": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Mental Health": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    Finance: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  };

  const getFilterButtonStyles = (category: string) => {
    if (activeCategory === category) {
      return "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg scale-105";
    }
    return "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700 hover:border-gray-600";
  };

  return (
    <div className="min-h-screen bg-black">
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

        {/* Header Section */}
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

        {/* Filter Bar */}
        {showFilter && (
          <div className="mb-12">
            <div className="flex flex-nowrap gap-2 justify-start overflow-x-auto pb-2 pt-2 md:flex-wrap md:gap-3 md:justify-center scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-xs md:text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 ${getFilterButtonStyles(
                    category
                  )}`}
                >
                  {category}
                  {activeCategory === category && <span className="" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleServices.map((service, index) => (
            <TiltCard key={`${service.category}-${index}`}>
              <div className="group relative backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-cyan-500/30">
                {/* Image Container with Overlay */}
                {/* Image Container with Overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />

                  {/* 👇 Ye overlay sirf hover par dikhega */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${
                        categoryColors[
                          service.category as keyof typeof categoryColors
                        ] || categoryColors.Technology
                      }`}
                    >
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all duration-300 group/link hover:text-cyan-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>

                    {/* Hover indicator */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Decorative gradient border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-3xl blur-xl" />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* No results message */}
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

        {/* Call to Action */}
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
    </div>
  );
};

export default Services;

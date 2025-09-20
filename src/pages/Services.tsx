import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ShinyText from "@/components/ShinyText";

const services = [
  {
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=60",
    category: "Beauty",
    title: "Botox & Skin Care",
    description: "AI-powered appointment booking and customer engagement for beauty clinics",
    link: "/services/botox-skincare",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&auto=format&fit=crop&q=60",
    category: "Healthcare",
    title: "Clinics and Dentist",
    description: "Automated patient management and appointment scheduling systems",
    link: "/services/clinics-dentist",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60",
    category: "Fitness",
    title: "Gym & Health Coach",
    description: "Member management and fitness consultation automation",
    link: "/services/gym-health-coach",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&auto=format&fit=crop&q=60",
    category: "Consulting",
    title: "Business Consultation",
    description: "Professional consulting services with AI-driven client management",
    link: "/services/business-consultation",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=60",
    category: "Technology",
    title: "IT & SAAS Services",
    description: "Technology solutions with automated customer support and onboarding",
    link: "/services/it-saas",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=60",
    category: "Beauty",
    title: "Salons & Spa",
    description: "Beauty service automation with smart booking and customer care",
    link: "/services/salons-spa",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60",
    category: "Real Estate",
    title: "Real Estate Agents",
    description: "Property showing automation and lead management systems",
    link: "/services/real-estate-agents",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Mental Health",
    title: "Therapists & Counselors",
    description: "Mental health practice automation with secure patient communications",
    link: "/services/therapists-counselors",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=60",
    category: "Finance",
    title: "Insurance & Financial",
    description: "Financial services automation with claim processing and client management",
    link: "/services/insurance-financial",
  },
];

type ServicesProps = {
  limit?: number;
  showFilter?: boolean;
};

const Services: React.FC<ServicesProps> = ({ limit, showFilter = true }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(services.map((s) => s.category)))];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const visibleServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Services | TryzenIQ</title>
        <meta
          name="description"
          content="Explore AI-powered services: booking automation, client engagement, analytics, and more for beauty, healthcare, fitness, real estate, and SaaS."
        />
        <meta property="og:title" content="Services | TryzenIQ" />
        <meta
          property="og:description"
          content="Comprehensive AI automation services tailored to your industry."
        />
      </Helmet>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-[205px] mb-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-extralight mb-6"
              style={{ fontFamily: "Playfair Display" }}
            >
              Our Premium{" "}
              <ShinyText
                text="Services"
                className="hero-text-gradient bg-clip-text text-transparent"
              />
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of digital solutions designed to
              transform your business and drive growth in the modern world.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {visibleServices.map((service, i) => (
              <a
                key={`${service.category}-${i}`}
                href={service.link}
                className="group relative block backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform border border-gray-800 hover:border-cyan-500/30"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#8caac8] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  <div className="flex items-center gap-2 text-[#8caac8] font-semibold transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Services;

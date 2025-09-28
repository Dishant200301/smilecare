import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ShinyText from "@/components/ShinyText";

const services = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=60",
    category: "Beauty",
    title: "Botox & Skin Care",
    description:
      "",
    link: "/services/botox-skincare",
    subServices: [
      "Auto outreach & follow-ups",
      "Conversion-ready website",
      "Get more member leads",
      "Book & remind sessions",
      "Collect Positive Feedback",
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&auto=format&fit=crop&q=60",
    category: "Healthcare",
    title: "Clinics and Dentist",
    description:
      "",
    link: "/services/clinics-dentist",
    subServices: [
      "Automated outreach system",
      "Patient-focused website",
      "Manage public reviews",
      "Targeted patient leads",
      "Referral Tracking",
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60",
    category: "Fitness",
    title: "Gym & Health Coach",
    description: "",
    link: "/services/gym-health-coach",
    subServices: [
      "Auto outreach & follow-ups",
      "Conversion-ready website",
      "Get more member leads",
      "Book & remind sessions",
      "Collect Positive Feedback",
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&auto=format&fit=crop&q=60",
    category: "Consulting",
    title: "Business Consultation",
    description: "",
    link: "/services/business-consultation",
    subServices: [
      "Authority-building website",
      "Smart outreach & follow-ups",
      "Auto appointments & reminders",
      "Client reviews managed",
      "Hand-picked B2B lead",
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=60",
    category: "Technology",
    title: "IT & SAAS Services",
    description: "",
    link: "/services/it-saas",
    subServices: [
      "Sales-driven website",
      "Online reputation boost",
      "Demo booking reminders",
      "Automated cold email",
      "Qualified B2B leads",
    ],
  },
  {
    imageUrl:
      "https://thumbs.dreamstime.com/b/portrait-man-cleaning-equipment-cleaning-house-30014330.jpg",
    category: "Cleaning",
    title: "Cleaning Services",
    description: "",
    link: "/services/cleaning-services",
    subServices: [
      "Booking-friendly website",
      "Job scheduling & reminders",
      "Automatic outreach emails",
      "Local job leads daily",
      "Great reviews online",
    ],
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkesjGaPt3CIiJhoOS21uL5lXWcxAFSYXXw&s",
    category: "Real Estate",
    title: "Roofing, Solar, Pools",
    description: "",
    link: "/services/roofing-solar-pools",
    subServices: [
      "Smart outreach & follow-ups",
      "Lead-generating website",
      "Reputation management",
      "Site visit reminders",
      "Verified local leads",
    ],
  },
  {
    imageUrl: "https://media.istockphoto.com/id/1827291486/photo/a-dedicated-mentor-is-explaining-mentees-importance-of-project-while-sitting-at-the-boardroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=3PCse04HxmDXn6LsY1MuQsh01AflW_wR0jwF4tYZ8QY=",
    category: "",
    title: "Any Business",
    description: "",
    link: "/services/any-business",
    subServices: [
      "Smart selling website",
      "Automated outreach flow",
      "Easy bookings & reminders",
      "Get new leads faster",
      "Batter review system",
    ],
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661776260388-f5d1b14ce8a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdXJhbmNlfGVufDB8fDB8fHww",
    category: "Insurance",
    title: "Insurance Agents",
    description: "",
    link: "/services/insurance-agents",
    subServices: [
      "Trust-building website",
      "High-quality B2B leads",
      "Smart email outreach",
      "5-star review filtering",
      "Book call easily",],
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
              Our {" "}
              <ShinyText
                text="Expertise"
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
                  {/* Sub Services if available */}
                  {service.subServices && (
                      <ul className="text-gray-400 text-sm space-y-2 mb-6">
                        {service.subServices.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#8caac8] rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
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

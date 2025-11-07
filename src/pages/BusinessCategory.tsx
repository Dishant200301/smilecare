import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ShinyText from "@/components/ShinyText";
import { motion } from "framer-motion";

const services = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=60",
    category: "Beauty",
    title: "Botox & Skin Care",
    description:
      "",
    link: "/business-category/botox-skincare",
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
    link: "/business-category/clinics-dentist",
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
    link: "/business-category/gym-health-coach",
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
    link: "/business-category/business-consultation",
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
    link: "/business-category/it-saas",
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
    link: "/business-category/cleaning-services",
    subServices: [
      "Booking-friendly website",
      "Job scheduling & reminders",
      "Automatic outreach emails",
      "Local job leads daily",
      "Great reviews online",
    ],
  },
  {
    imageUrl: "https://media.istockphoto.com/id/1827291486/photo/a-dedicated-mentor-is-explaining-mentees-importance-of-project-while-sitting-at-the-boardroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=3PCse04HxmDXn6LsY1MuQsh01AflW_wR0jwF4tYZ8QY=",
    category: "",
    title: "Any Business",
    description: "",
    link: "/business-category/any-business",
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
    link: "/business-category/insurance-agents",
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const visibleServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  const stickyTopOffset = 80; // Adjust this value

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

       <main className="relative z-10 bg-black pt-32">
        {/* Hero Section */}
        <section className="px-3 sm:px-4 md:px-12 lg:py-4 xl:px-48 2xl:px-48 sm:mt-10 md:pt-10 lg:mt-8 ">
        <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl gradient-text font-HindMadurai font-medium leading-tight mb-6">
              Our {" "}
             <span className="font-InstrumentSerif italic gradient-text">Expertise</span>
            </h1>
              <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto px-5 mb-10 hidden sm:block">
              Discover our comprehensive range of digital solutions designed to
              transform your business and drive growth in the modern world.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${isMobile ? 'flex flex-col' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'}`}>
            {visibleServices.map((service, i) => (
              <motion.a
                key={`${service.category}-${i}`}
                href={service.link}
                className={`
                  group relative block rounded-3xl overflow-hidden shadow-xl 
                  hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 
                  transform border border-gray-900 hover:border-white/20
                  ${isMobile ? 'mobile-sticky-card' : ''}
                  bg-black // Ensure solid black background
                `}
                style={isMobile ? { zIndex: i + 1, top: `${stickyTopOffset}px`, marginBottom: '20px' } : {}}
                initial={isMobile ? { opacity: 0, y: -20 } : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[white] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  {/* Sub Services if available */}
                  {service.subServices && (
                      <ul className="text-gray-400 text-sm space-y-2 mb-6">
                        {service.subServices.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  <div className="flex items-center gap-2 text-[white] font-semibold transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.a>
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
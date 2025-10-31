import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ContactUsPreviewSection from "@/components/ContactUsPreviewSection";
import { motion } from "framer-motion";

const services = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=60",
    category: "AI & Automation",
    title: "AI Automation",
    description: "Intelligent automation solutions powered by cutting-edge AI technology",
    link: "/services/ai-automation",
    subServices: [
      "Process automation & optimization",
      "AI-powered chatbots & assistants",
      "Workflow automation tools",
      "Data analysis & insights",
      "Custom AI integrations",
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=60",
    category: "Marketing",
    title: "SEO Services",
    description: "Boost your online visibility with expert search engine optimization",
    link: "/services/seo",
    subServices: [
      "Keyword research & strategy",
      "On-page SEO optimization",
      "Technical SEO audits",
      "Link building campaigns",
      "Local SEO & Google My Business",
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=60",
    category: "Development",
    title: "Website Development",
    description: "Custom web solutions tailored to your business needs",
    link: "/services/website-development",
    subServices: [
      "Responsive web design",
      "E-commerce development",
      "CMS integration",
      "Progressive web apps",
      "Website maintenance & support",
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=60",
    category: "Design",
    title: "Graphics Design",
    description: "Creative visual design that brings your brand to life",
    link: "/services/graphics-design",
    subServices: [
      "Brand identity & logo design",
      "Marketing materials design",
      "Social media graphics",
      "UI/UX design",
      "Print & digital design",
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
    category: "Enterprise",
    title: "Custom ERP System",
    description: "Enterprise resource planning solutions for streamlined operations",
    link: "/services/custom-erp-system",
    subServices: [
      "Custom ERP development",
      "Business process automation",
      "Inventory management",
      "Financial management tools",
      "CRM integration",
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
    category: "Consulting",
    title: "Digital Transformation",
    description: "Guide your business through the digital evolution",
    link: "/services/digital-transformation",
    subServices: [
      "Digital strategy consulting",
      "Technology assessment",
      "Change management",
      "Cloud migration services",
      "Digital training programs",
    ],
  },
];

type ServicesProps = {
  limit?: number;
  showFilter?: boolean;
};

const Services: React.FC<ServicesProps> = ({ limit, showFilter = true }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // You can adjust this breakpoint for what you consider a "mobile" device
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleServices = limit ? services.slice(0, limit) : services;

  // Define a fixed top offset for all sticky cards
  const stickyTopOffset = 80; // Adjust this value to control where cards stick

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Our Services | TryzenIQ</title>
        <meta
          name="description"
          content="Explore our comprehensive range of digital services including AI automation, SEO, web development, graphic design, and custom ERP solutions."
        />
        <meta property="og:title" content="Our Services | TryzenIQ" />
        <meta
          property="og:description"
          content="Professional digital services to transform your business with AI, automation, and cutting-edge technology."
        />
      </Helmet>

      <Navbar />

      <main className="relative z-10 bg-black">
        {/* Hero Section */}
        <section className="pt-[170px] mb-16">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl gradient-text font-HindMadurai font-medium leading-tight mb-6">
            Our {" "}
              <span className="font-InstrumentSerif italic">Services</span>
            </h1>
              <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto mb-10">
              Comprehensive digital solutions designed to elevate your business with 
              cutting-edge technology, creative design, and strategic expertise.
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* On mobile, use a flex column layout for stacking */}
          <div className={`${isMobile ? 'flex flex-col' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
            {visibleServices.map((service, i) => (
              <motion.a
                key={`${service.category}-${i}`}
                href={service.link}
                className={`
                  group relative block backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl 
                  hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 
                  transform hover:-translate-y-2 border border-gray-800 hover:border-white/20
                  ${isMobile ? 'mobile-sticky-card' : ''}
                `}
                // All cards stick to the same 'top' position, but z-index ensures they layer correctly
                style={isMobile ? { zIndex: i + 1, top: `${stickyTopOffset}px`, marginBottom: '20px' } : {}}
                // Adjust initial Y for mobile to make it come from above or appear without downward motion
                initial={isMobile ? { opacity: 0, y: -20 } : { opacity: 0, y: 40 }} // Changed y to -20 for mobile
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-gray-700">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-black to-black">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  {/* Sub Services */}
                  {service.subServices && (
                    <ul className="text-gray-400 text-sm space-y-2 mb-6">
                      {service.subServices.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex items-center gap-2 text-white font-semibold transition-all duration-300 group-hover:gap-3">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        <ContactUsPreviewSection/>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Services;
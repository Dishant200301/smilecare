import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ContactUsPreviewSection from "@/components/ContactUsPreviewSection";
import { motion } from "framer-motion";

const categories = [
    {
        imageUrl:
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=60",
        category: "Wellness",
        title: "Beauty & Personal Care",
        description: "Transform your appearance with professional beauty and personal care services",
        link: "/category/beauty-personal-care",
        subServices: [
            "Hair styling & coloring",
            "Skin care & facials",
            "Makeup & cosmetics",
            "Spa & massage therapy",
            "Nail care & manicure",
        ],
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=60",
        category: "Healthcare",
        title: "Health & Medical Services",
        description: "Comprehensive healthcare solutions for your well-being and medical needs",
        link: "/category/health-medical-services",
        subServices: [
            "General health checkups",
            "Specialist consultations",
            "Diagnostic services",
            "Preventive care programs",
            "Telemedicine & online consultations",
        ],
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&auto=format&fit=crop&q=60",
        category: "Fitness",
        title: "Fitness & Coaching",
        description: "Achieve your fitness goals with expert training and personalized coaching",
        link: "/category/fitness-coaching",
        subServices: [
            "Personal training sessions",
            "Group fitness classes",
            "Nutrition & diet planning",
            "Yoga & meditation",
            "Sports coaching & training",
        ],
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&auto=format&fit=crop&q=60",
        category: "Home Services",
        title: "Home & Local Services",
        description: "Reliable home improvement and local services for your everyday needs",
        link: "/category/home-local-services",
        subServices: [
            "Home cleaning & maintenance",
            "Plumbing & electrical services",
            "Painting & renovation",
            "Gardening & landscaping",
            "Pest control services",
        ],
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60",
        category: "Business",
        title: "Professional Services",
        description: "Expert professional services to support your business and career growth",
        link: "/category/professional-services",
        subServices: [
            "Legal consulting & advisory",
            "Accounting & tax services",
            "Business consulting",
            "HR & recruitment services",
            "Financial planning & advisory",
        ],
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60",
        category: "Events",
        title: "Creative & Event Services",
        description: "Make your events memorable with creative planning and execution",
        link: "/category/creative-event-services",
        subServices: [
            "Event planning & management",
            "Photography & videography",
            "Catering & food services",
            "Decoration & design",
            "Entertainment & performances",
        ],
    },
];

type CategoryProps = {
    limit?: number;
    showFilter?: boolean;
};

const Category: React.FC<CategoryProps> = ({ limit, showFilter = true }) => {
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

    const visibleCategories = limit ? categories.slice(0, limit) : categories;

    // Define a fixed top offset for all sticky cards
    const stickyTopOffset = 80; // Adjust this value to control where cards stick

    return (
        <div className="min-h-screen bg-black text-white">
            <Helmet>
                <title>Our Categories | TryzenIQ</title>
                <meta
                    name="description"
                    content="Explore our comprehensive range of service categories including beauty & personal care, health & medical, fitness & coaching, home services, professional services, and creative & event services."
                />
                <meta property="og:title" content="Our Categories | TryzenIQ" />
                <meta
                    property="og:description"
                    content="Professional service categories to meet all your personal and business needs."
                />
            </Helmet>

            <Navbar />

            <main className="relative z-10 bg-black pt-32">
                {/* Hero Section */}
                <section className="px-3 sm:px-4 md:px-12 lg:py-4 xl:px-48 2xl:px-48 sm:mt-10 md:pt-10 lg:mt-8 ">
                    <motion.div
                        className="max-w-4xl mx-auto text-center mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl gradient-text font-HindMadurai font-medium leading-tight mb-6">
                            Our {" "}
                            <span className="font-InstrumentSerif italic">Categories</span>
                        </h1>
                        <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto mb-10 hidden sm:block">
                            Discover a wide range of service categories tailored to meet your personal,
                            professional, and lifestyle needs with expert solutions.
                        </p>
                    </motion.div>
                </section>

                {/* Categories Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    {/* On mobile, use a flex column layout for stacking */}
                    <div className={`${isMobile ? 'flex flex-col' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
                        {visibleCategories.map((category, i) => (
                            <motion.a
                                key={`${category.category}-${i}`}
                                href={category.link}
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
                                        src={category.imageUrl}
                                        alt={category.title}
                                        className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-gray-700">
                                            {category.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 bg-black to-black">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                                        {category.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                                        {category.description}
                                    </p>

                                    {/* Sub Services */}
                                    {/* {category.subServices && (
                    <ul className="text-gray-400 text-sm space-y-2 mb-6">
                      {category.subServices.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )} */}

                                    <div className="flex items-center gap-2 text-white font-semibold transition-all duration-300 group-hover:gap-3">
                                        <span>Explore Category</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
                <ContactUsPreviewSection />
            </main>

            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default Category;

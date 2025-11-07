import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
  Code,
  Headphones,
  Repeat,
  Layers,
  Star,
  Shield,
  Sparkles,
  UserCheck,
  Clock,
  Bot,
  Database,
  MessageSquare,
  Workflow,
  Search,
  Edit3,
  Link,
  FileText,
  BarChart3,
  Award,
  Printer,
  Image as ImageIcon,
  Smartphone,
  Package,
  DollarSign,
  Settings,
  Monitor,
  Server,
  ShoppingCart,
  Layout,
  Cloud,
  Palette,
  Users,
} from "lucide-react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useParams } from "react-router-dom";
import { servicesDetailData } from "@/data/servicesDetailData";
import ContactUsPreviewSection from "@/components/ContactUsPreviewSection";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TestimonialSection from "@/components/Testimonials";

const ServicesDetail = () => {
  const { slug } = useParams();
  const service = servicesDetailData[slug];
  if (!service) {
    return <div className="text-center py-20 text-white">Service not found</div>;
  }
  const {
    metaTitle,
    metaDescription,
    title,
    subtitle,
    lottieSrc,
    heroDescription,
    subServices,
    features,
  } = service;
  const whyChooseUsSection = features[0];
  const splitTitle = (fullTitle: string) => {
    const parts = fullTitle.split(" for ");
    if (parts.length > 1) {
      return {
        gradientPart: parts[0] + " for",
        italicPart: parts.slice(1).join(" for "),
      };
    }
    const words = fullTitle.split(" ");
    return {
      gradientPart: words.slice(0, words.length - 2).join(" "),
      italicPart: words.slice(words.length - 2).join(" "),
    };
  };
  const { gradientPart, italicPart } = splitTitle(whyChooseUsSection.title);
  // Icon mapping for subServices and features
  const iconMap = {
    Bot,
    Workflow,
    TrendingUp,
    Database,
    MessageSquare,
    Sparkles,
    Search,
    Edit3,
    Link,
    Code,
    FileText,
    BarChart3,
    Monitor,
    Server,
    ShoppingCart,
    Layout,
    Cloud,
    Award,
    Palette,
    Printer,
    Image: ImageIcon,
    Smartphone,
    Zap,
    Package,
    Users,
    DollarSign,
    UserCheck,
    Settings,
    CheckCircle,
  };
  // Transform whyChooseUs points into subService-like structure for consistent rendering
  const whyChooseSubs = whyChooseUsSection.points.map((point) => ({
    icon: "CheckCircle",
    title: point,
    description: "",
  }));
  // Render function for service cards (shared for subServices and whyChoose)
  const renderServiceCards = (items: any[], gridCols: string = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", useIcons: boolean = true) => (
    <div className={`grid ${gridCols} gap-8`}>
      {items.map((sub, i) => {
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative bg-[#131316] backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-[white]/20 hover:border-[white]/40"
          >
            <div className="p-6">
              <div className="mb-4">
                {useIcons && (
                  <div className="flex items-center">
                    <div className="p-2 bg-[white] rounded-md mr-4">
                      <CheckCircle className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold font-HindMadurai text-white group-hover:text-[white] transition-colors">
                      {sub.title}
                    </h3>
                  </div>
                )}
                {!useIcons && (
                  <h3 className="text-xl font-bold font-HindMadurai text-white group-hover:text-[white] transition-colors">
                    {sub.title}
                  </h3>
                )}
                {sub.description && (
                  <p className="text-gray-400 font-HindMadurai leading-relaxed whitespace-pre-line">
                    {sub.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-10 px-5 sm:px-4 md:px-12 lg:px-4 xl:px-48 2xl:px-48">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-HindMadurai gradient-text font-medium leading-tight pb-2">
                  {title}{" "}
                  <span className="font-InstrumentSerif italic">{subtitle}</span>
                </h1>
                <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto mb-5">
                  {heroDescription}
                </p>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-between border border-gray-700
                 text-white font-semibold font-HindMadurai pl-6 pr-14 py-3 rounded-full overflow-hidden
                 transition-all duration-500 ease-in-out hover:border-[white]"
                >
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center
                 w-9 h-9 rounded-full bg-[white] text-black z-10
                 transition-transform duration-500 ease-in-out group-hover:scale-[45]"
                  />
                  <span className="relative z-20 transition-colors duration-500 ease-in-out group-hover:text-black">
                    Get Started
                  </span>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
                    <ArrowRight className="w-5 h-5 text-black" />
                  </span>
                </a>
              </motion.div>
              {/* Hero Lottie Animation */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden"
              >
                <DotLottieReact
                  src={lottieSrc}
                  loop
                  autoplay
                  className="w-full h-full filter grayscale"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
        {/* What We Offer Section - Sub Services */}
        <section className="py-10 px-5 sm:px-4 md:px-12 lg:px-4 xl:px-48 bg-black">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-HindMadurai gradient-text font-medium leading-tight pb-2">
                What <span className="font-InstrumentSerif italic">We Offer</span>
              </h2>
              <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto">
                Our comprehensive range of professional solutions ensures your business receives
                everything it needs to succeed — from strategy to implementation.
              </p>
            </div>
            {renderServiceCards(subServices, undefined, false)}
          </motion.div>
        </section>
        {/* Why Choose Us Section */}
        {whyChooseUsSection && (
          <section className="py-10 px-5 sm:px-4 md:px-12 lg:px-4 xl:px-48 bg-black mb-10">
            <motion.div
              className="max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-center mb-12 mt-10">
                
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-HindMadurai gradient-text font-medium leading-tight pb-4">
                  {gradientPart}{" "}
                  <span className="font-InstrumentSerif italic">{italicPart}</span>
                </h2>
                <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto">
                  {whyChooseUsSection.description}
                </p>
              </div>
              {renderServiceCards(whyChooseSubs, "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3", true)}
            </motion.div>
          </section>
        )}
        <ContactUsPreviewSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};
export default ServicesDetail;
// src/pages/ProductDetail.tsx
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
  Repeat, // Added for new Invoice Generator feature
  Layers, // Added for new ERP feature
  Star,
  Shield,
  Sparkles,
  UserCheck, // Added for new AI Calling feature
  Clock,
  Bot, // Added for new AI Calling feature
  Database,
  MessageSquare, // Added for new AI Calling feature
  Workflow, // Added for new ERP feature
  Search, // Added for new AI Blog SEO feature
  Edit3,
  Link,
  FileText,
  BarChart3,
  Award, // Added for new AI Blog SEO feature
  Printer,
  Image as ImageIcon,
  Smartphone,
  Package,
  DollarSign,
  Settings, // Added for new ERP feature
  Monitor, // Added for new Invoice Generator feature
  Server,
  ShoppingCart,
  Layout,
  Cloud,
  Palette, // Added for new Email Automation feature
  Users,
  PenTool,
  Mail,
  Globe,
  Phone,
} from "lucide-react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useParams } from "react-router-dom";
import { productDetailData } from "@/data/productDetailData";
import ContactUsPreviewSection from "@/components/ContactUsPreviewSection";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Define a type for the icon keys to ensure type safety
type IconName = keyof typeof iconMap;

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productDetailData[slug];
  if (!product) {
    return <div className="text-center py-20 text-white">Product not found</div>;
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
    ctaIcon: CtaIcon,
    ctaTitle,
    ctaDescription,
    ctaButtonLabel,
    ctaHighlight,
  } = product;

  // The first item in the features array is for "Why Choose Us"
  const whyChooseUsSection = features[0];
  // Subsequent items in the features array are for "Our Features"
  const otherFeatures = features.slice(1);

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
    PenTool,
    Mail,
    Globe,
    Phone,
    Headphones,
    Repeat,
    Layers,
    Star,
    Shield,
    Clock,
  };

  // Transform whyChooseUs points into subService-like structure for consistent rendering
  const whyChooseSubs = whyChooseUsSection.points.map((point) => ({
    icon: "CheckCircle", // These points will always use CheckCircle
    title: point,
    description: "",
  }));

  // Render function for service cards (shared for subServices, whyChoose points, and otherFeatures)
  const renderServiceCards = (items: any[], gridCols: string = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", useIcons: boolean = true) => (
    <div className={`grid ${gridCols} gap-8`}>
      {items.map((sub, i) => {
        // Dynamically get the icon component based on the 'icon' string from the item data
        const IconComponent = useIcons ? iconMap[sub.icon as IconName] : null;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative bg-[#131316] backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-[white]/20 hover:border-[white]/40"
          >
            <div className="p-4 md:lg:p-6">
              <div className="mb-4">
                {useIcons && IconComponent ? ( // Use the dynamic IconComponent if useIcons is true and component exists
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-[white] rounded-md mr-4">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold font-HindMadurai text-white group-hover:text-[white] transition-colors">
                      {sub.title}
                    </h3>
                  </div>
                ) : ( // Fallback for when no icon is used or component is not found
                  <h3 className="text-xl font-bold font-HindMadurai text-white group-hover:text-[white] transition-colors mb-4">
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
        <section className="pt-10 px-4 sm:px-4 md:px-12 lg:px-4 xl:px-48 2xl:px-48">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, amount: 0 }}
                  className="text-center lg:text-left"
                >
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-HindMadurai gradient-text font-medium leading-tight pb-2 ">
                  {title}{" "}
                  <div className="inline-block">
                    <span className="font-InstrumentSerif italic">{subtitle}</span>
                  </div>
                </h1>
                <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto mb-5 hidden sm:block">
                  {heroDescription}
                </p>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-between border border-gray-700
                 text-white font-semibold font-HindMadurai pl-6 pr-14 py-3 rounded-full overflow-hidden
                 transition-all duration-500 ease-in-out hover:border-[white] mt-2 md:lg:mt-0"
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
  transition={{ duration: 0.5, delay: 0 }}
  viewport={{ once: true, amount: 0 }}
  className="
    relative w-full 
    rounded-3xl overflow-hidden
    h-[260px] sm:h-[400px] md:aspect-[16/9]
  "
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
       

        {/* Our Features Section (New Section) */}
        {otherFeatures.length > 0 && (
          <section className="pb-10 px-5 sm:px-4 md:px-12 lg:px-4 xl:px-48 bg-black">
            <motion.div
              className="max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0 }}
            >
              <div className="text-center mb-12 mt-5">
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-HindMadurai gradient-text font-medium leading-tight pb-2">
                  Our <span className="font-InstrumentSerif italic">Features</span>
                </h2>
                <p className="text-md md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto">
                  Explore the powerful core features that make our solution an indispensable asset for your business.
                </p>
              </div>
              {/* This will render the new features with their respective icons */}
              {renderServiceCards(otherFeatures, undefined, true)}
            </motion.div>
          </section>
        )}

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
                
                <h2 className="text-3xl md:text-5xl lg:text-5xl font-HindMadurai gradient-text font-medium leading-tight pb-4">
                  {gradientPart}{" "}
                  <span className="font-InstrumentSerif italic">{italicPart}</span>
                </h2>
                <p className="text-md md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto">
                  {whyChooseUsSection.description}
                </p>
              </div>
              {/* This section correctly uses icons with CheckCircle as defined in whyChooseSubs */}
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
export default ProductDetail;
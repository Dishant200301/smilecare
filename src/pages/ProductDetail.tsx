// src/pages/ProductDetail.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import {
  CheckSquare,
  History,
  ListChecks,
  Forward,
  CalendarClock,
  MapPin,
  Megaphone,
  Send,
  PlayCircle,
  Filter,
  LineChart,
  Eye,
  FilePlus,
  FolderOpen,
  Activity,
  Braces,
  Download,
  Brain,
  Map,
  Cpu,
  Network,
  PieChart,
  Share,
  Mic,
  PhoneCall,
  Calendar,
  RefreshCw,
  FileAudio,
  UserPlus,
  Lock,
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
    videoSrc,
    heroDescription,
    subServices,
    features,
  } = product;

  const relatedProducts = Object.values(productDetailData).filter(
    (p) => p.slug !== slug
  );

  const whyChooseUsSection = features[0];
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

  const iconMap = {
    CheckSquare,
    History,
    ListChecks,
    Forward,
    CalendarClock,
    MapPin,
    Megaphone,
    Send,
    PlayCircle,
    Filter,
    LineChart,
    Eye,
    FilePlus,
    FolderOpen,
    Activity,
    Braces,
    Download,
    Brain,
    Map,
    Cpu,
    Network,
    PieChart,
    Share,
    Mic,
    PhoneCall,
    Calendar,
    RefreshCw,
    FileAudio,
    UserPlus,
    Lock,
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

  const whyChooseSubs = whyChooseUsSection.points.map((point) => ({
    icon: "CheckCircle",
    title: point,
    description: "",
  }));

  const renderServiceCards = (
    items: any[],
    gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    useIcons = true
  ) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`grid ${gridCols} gap-8`}
    >
      {items.map((sub, i) => {
        const IconComponent = useIcons ? iconMap[sub.icon as IconName] : null;
        return (
          <div
            key={i}
            className="group relative bg-[#131316] backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl
            border border-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-[white]/20
            hover:border-[white]/40"
          >
            <div className="p-4 md:lg:p-6">
              <div className="mb-4">
                {useIcons && IconComponent ? (
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-white rounded-md mr-4">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-lg font-bold font-HindMadurai text-white transition-colors">
                      {sub.title}
                    </h3>
                  </div>
                ) : (
                  <h3 className="text-xl font-bold font-HindMadurai text-white transition-colors mb-4">
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
          </div>
        );
      })}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <Navbar />

      <main className="pt-16">

        {/* HERO SECTION — UPDATED */}
        <section className="py-10 px-3 sm:px-4 md:px-12 lg:px-4 xl:px-36 2xl:px-44">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">

              {/* TEXT */}
              <div className="text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-5xl lg:text-5xl font-HindMadurai gradient-text font-medium leading-tight pb-2"
                >
                  {title}{" "}
                  <span className="font-InstrumentSerif italic">{subtitle}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                  className="text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto mb-5 hidden sm:block"
                >
                  {heroDescription}
                </motion.p>

                {/* CTA */}
                <motion.a
                  href="/contact"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                  className="group relative inline-flex items-center justify-between border border-gray-700 text-white font-semibold font-HindMadurai pl-4 pr-10 py-2.5 rounded-full overflow-hidden transition-all duration-500 ease-in-out hover:border-white"
                >
                  <span
                    className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center
                    w-7 h-7 rounded-full bg-white z-10 transition-transform duration-700
                    ease-in-out group-hover:scale-[50]"
                  />
                  <span className="relative z-20 group-hover:text-black transition-colors duration-500 ease-in-out">
                    Get Started
                  </span>

                  <span className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8">
                    <ArrowRight className="w-5 h-5 ml-1 text-black transition-colors duration-700" />
                  </span>
                </motion.a>
              </div>

              {/* LOTTIE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                className="relative w-full rounded-3xl overflow-hidden aspect-video"
              >
                {videoSrc ? (
                  <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover filter grayscale"
                  />
                ) : (
                  <DotLottieReact
                    src={lottieSrc}
                    loop
                    autoplay
                    className="w-full h-full filter grayscale"
                  />
                )}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* OUR FEATURES */}
        {otherFeatures.length > 0 && (
          <section className="pb-10 px-5 sm:px-4 md:px-12 lg:px-4 xl:px-36 bg-black">
            <motion.div
              className="max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12 mt-5">
                <h2 className="text-4xl md:text-5xl font-HindMadurai gradient-text font-medium pb-2">
                  Our <span className="font-InstrumentSerif italic">Features</span>
                </h2>
              </div>

              {renderServiceCards(otherFeatures, undefined, true)}
            </motion.div>
          </section>
        )}

        {/* WHY CHOOSE US */}
        <section className="py-10 px-5 sm:px-4 md:px-12 lg:px-4 xl:px-48 bg-black mb-10">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12 mt-10">
              <h2 className="text-3xl md:text-5xl font-HindMadurai gradient-text font-medium leading-tight pb-4">
                {gradientPart}{" "}
                <span className="font-InstrumentSerif italic">{italicPart}</span>
              </h2>
            </div>

            {renderServiceCards(
              whyChooseSubs,
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3",
              true
            )}
          </motion.div>
        </section>

        {/* RELATED PRODUCTS */}
        <section className="py-10 px-5 sm:px-4 md:px-12 lg:px-4 xl:px-48 bg-black mb-10">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-HindMadurai gradient-text font-medium leading-tight pb-4">
                Related <span className="font-InstrumentSerif italic">Products</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.slice(0, 3).map((related, i) => (
                <a
                  key={i}
                  href={`/products/${related.slug}`}
                  className="group relative bg-[#131316] backdrop-blur-sm rounded-3xl overflow-hidden
                  shadow-xl border border-gray-800 transition-all duration-300
                  hover:shadow-2xl hover:shadow-[white]/20 hover:border-[white]/40 block"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-HindMadurai text-white group-hover:text-[white] transition-colors mb-2">
                      {related.title} {related.subtitle}
                    </h3>
                    <p className="text-gray-400 font-HindMadurai leading-relaxed line-clamp-3">
                      {related.heroDescription}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-semibold text-white group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        <ContactUsPreviewSection />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ProductDetail;

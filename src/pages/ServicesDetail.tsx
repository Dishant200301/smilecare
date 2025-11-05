// src/pages/ServicesDetail.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, CheckCircle, Link } from "lucide-react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useParams } from "react-router-dom";
import { servicesDetailData } from "@/data/servicesDetailData";
import HighlightedTitle from "@/components/HighlightedTitle";
import TestimonialSingleRow from "@/components/TestimonialSingleRow";
import ContactUsPreviewSection from "@/components/ContactUsPreviewSection";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // Import Lottie component

const ServicesDetail = () => {
  const { slug } = useParams();
  const service = servicesDetailData[slug];

  if (!service) {
    return (
      <div className="text-center py-20 text-white">Service not found</div>
    );
  }

  const {
    metaTitle,
    metaDescription,
    title,
    subtitle,
    lottieSrc, // Changed from heroImage to lottieSrc
    heroDescription,
    features,
    benefits,
    metrics,
    ctaIcon: CtaIcon,
    ctaTitle,
    ctaDescription,
    ctaButtonLabel,
    ctaHighlight,
  } = service;

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
            {/* Back Button */}
            {/* <div className="mb-8">
              <a
                href="/services"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Back</span>
              </a>
            </div> */}
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
                  <span className="font-InstrumentSerif italic">
                    {subtitle}
                  </span>
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
                className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden" // Added overflow-hidden to contain Lottie
              >
                <DotLottieReact
                  src={lottieSrc} // Use the lottieSrc from service data
                  loop
                  autoplay
                  className="w-full h-full filter grayscale" // Apply grayscale filter and ensure full coverage
                />
                {/* Overlay for subtle effect, optional */}
                <div className="absolute inset-0 rounded-3xl"></div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="pt-10 pb-5 px-5 sm:px-4 md:px-12 lg:px-4 xl:px-48 bg-black ">
          <motion.div
            className="max-w-7xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-HindMadurai gradient-text font-medium text-center leading-tight mb-6">
              Explore{" "}
              <span className="font-InstrumentSerif italic">Features</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group relative bg-gray-900/50 backdrop-blur-sm 
                  rounded-3xl overflow-hidden shadow-xl 
                  border border-gray-800 transition-all duration-300 
                  hover:shadow-2xl hover:shadow-[white]/20 hover:border-[white]/40"
                >
                  {f.imageUrl && ( // Keep imageUrl for feature cards if needed
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={f.imageUrl}
                        alt={f.title}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out 
                          group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-[white] rounded-md mr-4">
                        <f.icon className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-lg font-bold font-HindMadurai text-white group-hover:text-[white] transition-colors">
                        {f.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 font-HindMadurai leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Benefits + Metrics */}
        <section className="py-10 px-6 md:px-12 lg:px-8 xl:px-48 bg-black">
          <motion.div
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Benefits */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-HindMadurai gradient-text font-medium leading-tight mb-6 text-center lg:text-left">
                Considerable{" "}
                <span className="font-InstrumentSerif italic">Benefits</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex items-start gap-3 p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-lg hover:shadow-white/20 transition-all duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-[white] flex-shrink-0 mt-1" />
                    <span className="text-gray-400 font-HindMadurai">{b}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-black border border-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-[white]/20 transition"
            >
              <h2 className="text-3xl font-HindMadurai gradient-text font-medium leading-tight mb-6">
                Considerable {" "}
                <span className="font-InstrumentSerif italic">Metrics</span>
              </h2>
              <div className="space-y-6">
                {metrics.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex justify-between items-center border-b border-zinc-700 pb-4 last:border-none"
                  >
                    <span className="text-gray-300 font-HindMadurai">
                      {m.label}
                    </span>
                    <span className="text-2xl font-HindMadurai text-[white]">
                      {m.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        <ContactUsPreviewSection />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ServicesDetail;
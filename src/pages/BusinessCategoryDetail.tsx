// src/pages/ServiceDetail.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle } from "lucide-react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useParams } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import ContactUsPreviewSection from "@/components/ContactUsPreviewSection";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return <div className="text-center py-20 text-white">Service not found</div>;
  }

  const {
    metaTitle,
    metaDescription,
    title,
    subtitle,
    heroImage,
    heroDescription,
    features,
    benefits,
    metrics,
  } = service;

  // Reusable smooth grid animation
  const renderCards = (list: any[], grid = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3") => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`grid ${grid} gap-8`}
    >
      {list.map((item, i) => (
        <div
          key={i}
          className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden
          border border-gray-800 shadow-xl hover:shadow-2xl hover:shadow-white/20 hover:border-white/40
          transition-all duration-300"
        >
          {item.imageUrl && (
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          )}

          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-white rounded-md mr-4">
                <item.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
            </div>

            {item.description && (
              <p className="text-gray-400">{item.description}</p>
            )}
          </div>
        </div>
      ))}
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
        {/* HERO */}
        <section className="py-10 px-3 sm:px-4 md:px-12 xl:px-48">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">

              {/* TEXT BLOCK */}
              <div className="text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-5xl font-HindMadurai gradient-text font-medium leading-tight pb-2"
                >
                  {title}{" "}
                  
                  <span className="font-InstrumentSerif italic">{subtitle}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                  className="text-lg text-gray-400 max-w-3xl mx-auto mb-5 hidden sm:block font-HindMadurai"
                >
                  {heroDescription}
                </motion.p>

                {/* CTA BUTTON */}
                <motion.a
                  href="/contact"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                  className="group relative inline-flex items-center justify-between 
                  border border-gray-700 text-white font-semibold font-HindMadurai 
                  pl-4 pr-10 py-2 rounded-full overflow-hidden
                  transition-all duration-500 ease-in-out hover:border-white"
                >
                <span
        className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center 
        w-7 h-7 rounded-full bg-white z-10 transition-transform duration-700 
        ease-in-out group-hover:scale-[50]"
      />
                  <span className="relative z-20 group-hover:text-black transition-colors">
                    Get Started
                  </span>
                   <span className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8">
                         <ArrowRight className="w-5 h-5 ml-1 text-black transition-colors duration-700" />
                       </span>
                </motion.a>
              </div>

              {/* IMAGE BLOCK */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                className="relative w-full rounded-3xl overflow-hidden
                h-[260px] sm:h-[400px] md:aspect-[16/9]"
              >
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border border-gray-800"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section className="pb-16 px-5 sm:px-4 md:px-12 xl:px-48">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-center text-4xl md:text-5xl font-HindMadurai gradient-text font-medium mb-10">
              Explore <span className="font-InstrumentSerif italic">Features</span>
            </h2>

            {renderCards(features, "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4")}
          </motion.div>
        </section>

        {/* BENEFITS + METRICS */}
        <section className="py-20 px-6 md:px-12 xl:px-48">
          <motion.div
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* BENEFITS */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-HindMadurai gradient-text font-medium mb-6">
                Considerable <span className="font-InstrumentSerif italic">Benefits</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800
                    shadow-lg hover:shadow-white/20 transition duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-white mt-1" />
                    <span className="text-gray-400 font-HindMadurai">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* METRICS */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5,  }}
              viewport={{ once: true }}
              className="bg-black border border-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-white/20 transition"
            >
              <h2 className="text-3xl font-HindMadurai gradient-text font-medium mb-6">
                Considerable <span className="font-InstrumentSerif italic">Metrics</span>
              </h2>

              <div className="space-y-6">
                {metrics.map((m, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-zinc-700 pb-4 last:border-none"
                  >
                    <span className="text-gray-400 font-HindMadurai">{m.label}</span>
                    <span className="text-3xl font-HindMadurai text-white">
                      {m.value}
                    </span>
                  </div>
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

export default ServiceDetail;

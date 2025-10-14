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
    heroImage,
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
        <section className="py-20 px-5 sm:px-4 md:px-12 lg:px-4 xl:px-48 2xl:px-48">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <a
                href="/services"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Back</span>
              </a>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-HindMadurai gradient-text font-medium leading-tight mb-6">
                  {title}{" "}
                  <span className="font-InstrumentSerif italic">{subtitle}</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-10 font-HindMadurai">
                  {heroDescription}
                </p>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-between border border-gray-700 
                 text-white font-semibold font-HindMadurai pl-6 pr-14 py-4 rounded-full overflow-hidden 
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
              </div>

              {/* Hero Image */}
              <div className="relative w-full aspect-[16/9]">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border border-gray-800"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[white]/10 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-5 sm:px-4 md:px-12 lg:px-4 xl:px-48 bg-black">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-HindMadurai gradient-text font-medium text-center leading-tight mb-6">
          Explore <span className="font-InstrumentSerif italic">Features</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="group relative bg-gray-900/50 backdrop-blur-sm 
                  rounded-3xl overflow-hidden shadow-xl 
                  border border-gray-800 transition-all duration-300 
                  hover:shadow-2xl hover:shadow-[white]/20 hover:border-[white]/40"
                >
                  {f.imageUrl && (
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits + Metrics */}
        <section className="py-24 px-6 md:px-12 lg:px-8 xl:px-48 bg-black">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            {/* Benefits */}
            <div>
              <h2 className="text-4xl font-HindMadurai gradient-text mb-8">
                Considerable{" "}
                <span className="font-InstrumentSerif italic">Benefits</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-[white]/30 transition"
                  >
                    <CheckCircle className="w-6 h-6 text-[white] flex-shrink-0 mt-1" />
                    <span className="text-gray-400 font-HindMadurai">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-black border border-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-[white]/20 transition">
              <h3 className="text-3xl font-HindMadurai gradient-text mb-8">
                Considerable <span className="font-InstrumentSerif italic">Metrics</span>
              </h3>
              <div className="space-y-6">
                {metrics.map((m, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-zinc-700 pb-4 last:border-none"
                  >
                    <span className="text-gray-300 font-HindMadurai">{m.label}</span>
                    <span className="text-2xl font-HindMadurai text-[white]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

<ContactUsPreviewSection/>

      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ServicesDetail;

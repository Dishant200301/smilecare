// src/pages/ServiceDetail.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useParams } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import Tilt from "react-parallax-tilt";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData[slug];

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
        <section className="py-20 px-5">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="hero-text-gradient">{title}</span> {subtitle}
              </h1>
              <p className="text-lg text-gray-400 mb-8">{heroDescription}</p>
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-between border border-gray-500 
                 text-white font-semibold pl-6 pr-14 py-4 rounded-full overflow-hidden 
                 transition-all duration-500 ease-in-out"
              >
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center 
                 w-9 h-9 rounded-full bg-[#8caac8] text-black z-10 
                 transition-transform duration-500 ease-in-out group-hover:scale-[45]"
                />
                <span className="relative z-20 transition-colors duration-500 ease-in-out group-hover:text-black">
                  Get Started
                </span>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
                  <ArrowRight className="w-5 h-5 text-black duration-500 ease-in-out group-hover:text-black" />
                </span>
              </a>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt={title}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-5">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-extralight text-center mb-12 font-serif">
              Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="group relative bg-gray-900/50 backdrop-blur-sm 
                     rounded-3xl overflow-hidden shadow-xl 
                     border border-gray-800 transition-all duration-300 ease-in-out 
                     hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 
                     hover:border-cyan-500/30"
                >
                  {/* Feature Image */}
                  {f.imageUrl && (
                    <div className="relative overflow-hidden">
                      <img
                        src={f.imageUrl}
                        alt={f.title}
                        className="w-full h-48 object-cover transition-all duration-300 ease-in-out 
                           filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 transition-colors duration-300 ease-in-out">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-[#8caac8] rounded-md mr-4">
                        <f.icon className="w-6 h-6 text-black" />
                      </div>
                      <h3
                        className="text-lg font-bold text-white 
                             group-hover:text-[#8caac8] transition-colors duration-300 ease-in-out"
                      >
                        {f.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {f.description}
                    </p>

                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits + Metrics */}
        <section className="py-20 px-5">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Benefits</h2>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#8caac8] mr-3" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="stats-card">
              <h3 className="text-2xl font-bold hero-text-gradient mb-6">
                Key Metrics
              </h3>
              <div className="space-y-6">
                {metrics.map((m, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{m.label}</span>
                    <span className="text-2xl font-bold text-[#8caac8]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto border rounded-2xl p-12">
            {CtaIcon && (
              <CtaIcon className="w-16 h-16 text-[#8caac8] mx-auto mb-6" />
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{ctaTitle}</h2>
            <p className="text-gray-400 mb-8">{ctaDescription}</p>
            <a
              href="/services"
              className="group relative inline-flex items-center justify-between border border-gray-500 
                 text-white font-semibold pl-6 pr-14 py-4 rounded-full overflow-hidden 
                 transition-all duration-500 ease-in-out"
            >
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center 
                     w-9 h-9 rounded-full bg-[#8caac8] text-black z-10 
                     transition-transform duration-500 ease-in-out group-hover:scale-[45]"
              />
              <span className="relative z-20 transition-colors duration-500 ease-in-out group-hover:text-black">
                {ctaButtonLabel}
              </span>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
                <ArrowRight className="w-5 h-5 text-black duration-500 ease-in-out group-hover:text-black" />
              </span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ServiceDetail;

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
import HighlightedTitle from "@/components/HighlightedTitle";

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
        <section className="py-20 px-5">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extralight font-playfair mb-6">
                <span className="hero-text-gradient">{title}</span> <br />{subtitle}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">{heroDescription}</p>
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
            <h2 className="mb-10 text-4xl md:text-5xl font-extralight font-playfair text-white text-center">
            Explore
            <span className="hero-text-gradient"> Features</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {features.map((f, i) => (
    
      <div
        className="group relative bg-gray-900/50 backdrop-blur-sm 
          rounded-3xl overflow-hidden shadow-xl 
          border border-gray-800 transition-all duration-300 ease-in-out 
          hover:shadow-2xl hover:shadow-cyan-500/20 
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
          <p className="text-gray-300 leading-relaxed">{f.description}</p>
        </div>
      </div>
    
  ))}
</div>
          </div>
        </section>

      {/* Benefits + Metrics - Dark Theme */}
<section className="py-24 px-6 bg-black">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
    
    {/* Benefits */}
    <div>
    <h2 className="text-4xl font-light mb-8 font-playfair">
    Considerable <span className="hero-text-gradient">Benefits</span>
</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-900 shadow-sm hover:shadow-lg transition-shadow"
          >
            <CheckCircle className="w-6 h-6 text-[#8caac8] flex-shrink-0 mt-1" />
            <span className="text-gray-300">{b}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Metrics */}
    <div className="bg-zinc-900 shadow-md rounded-2xl p-8">
      <h3 className="text-3xl font-light font-playfair mb-8 text-white">
      Considerable <span className="hero-text-gradient">Metrics</span>
      </h3>
      <div className="space-y-6">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b border-zinc-700 pb-4 last:border-none last:pb-0"
          >
            <span className="text-white">{m.label}</span>
            <span className="text-2xl font-playfair font-light text-[#8caac8]">
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
              <CtaIcon className="w-16 h-16 text-white mx-auto mb-6" />
            )}
            <HighlightedTitle 
              text={ctaTitle} 
              highlight={ctaHighlight || ""} 
            />
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto group-hover:text-gray-300 transition-colors duration-300 ">{ctaDescription}</p>
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

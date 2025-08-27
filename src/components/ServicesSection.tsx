import React, { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

// Mock data for demonstration
const services = [
  {
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=60",
    category: "Beauty",
    title: "Botox & Skin Care",
    description: "AI-powered appointment booking and customer engagement for beauty clinics",
    link: "/botox-skincare"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&auto=format&fit=crop&q=60",
    category: "Healthcare",
    title: "Clinics and Dentist",
    description: "Automated patient management and appointment scheduling systems",
    link: "/clinics-dentist"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60",
    category: "Fitness",
    title: "Gym & Health Coach",
    description: "Member management and fitness consultation automation",
    link: "/gym-health-coach"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&auto=format&fit=crop&q=60",
    category: "Consulting",
    title: "Business Consultation",
    description: "Professional consulting services with AI-driven client management",
    link: "/business-consultation"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=60",
    category: "Technology",
    title: "IT & SAAS Services",
    description: "Technology solutions with automated customer support and onboarding",
    link: "/it-saas"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=60",
    category: "Beauty",
    title: "Salons & Spa",
    description: "Beauty service automation with smart booking and customer care",
    link: "/salons-spa"
  },
];

type ServicesProps = {
  limit?: number;
};

const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease-out'
      }}
    >
      {children}
    </div>
  );
};

const Services: React.FC<ServicesProps> = ({ limit }) => {
  const visibleServices = limit ? services.slice(0, limit) : services;

  const categoryColors = {
    Beauty: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    Healthcare: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    Fitness: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    Consulting: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    Technology: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    Development: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    Design: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    Marketing: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    Infrastructure: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    Analytics: "bg-pink-500/20 text-pink-300 border-pink-500/30"
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-semibold uppercase tracking-wide text-sm">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6 animate-fade-in-up delay-20">
  Our Premium Services
</h2>

<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed  animate-fade-in-up delay-40">
  Discover our comprehensive range of digital solutions designed to transform your business and drive growth in the modern world.
</p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleServices.map((service, index) => (
            <TiltCard key={index}>
              <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-cyan-500/30">
                {/* Image Container with Overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${categoryColors[service.category as keyof typeof categoryColors] || categoryColors.Development}`}>
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all duration-300 group/link hover:text-cyan-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                    
                    {/* Hover indicator */}
                    <div className="w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Decorative gradient border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl blur-xl" />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Call to Action */}
        {limit && (
          <div className="text-center mb-10">
            <a
              href="/services"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
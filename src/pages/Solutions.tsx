'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bot, Calendar, MessageSquare, BarChart3, Shield, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef, useEffect } from 'react';
import LightRays from '@/components/LightRays';
import ScheduleButton from '@/components/ScheduleButton';
import DemoButton from '@/components/DemoButton';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Solutions = () => {
  const solutionRefs = useRef([]);
  const industryRefs = useRef([]);
  const ctaRef = useRef(null);
  const spotlightRefs = useRef([]);

  const solutions = [
    {
      icon: Bot,
      title: "AI Virtual Assistant",
      description: "24/7 intelligent customer service that never sleeps",
      benefits: [
        "Handles 80% of customer inquiries automatically",
        "Reduces response time from hours to seconds",
        "Available in multiple languages",
        "Learns from every interaction"
      ],
      gradient: "rgba(59, 130, 246, 0.15)",
      accentColor: "rgb(59, 130, 246)"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated appointment booking and management system",
      benefits: [
        "Reduces no-shows by 45% with smart reminders",
        "Optimizes calendar for maximum efficiency",
        "Handles rescheduling automatically",
        "Integrates with existing calendar systems"
      ],
      gradient: "rgba(34, 197, 94, 0.15)",
      accentColor: "rgb(34, 197, 94)"
    },
    {
      icon: MessageSquare,
      title: "Automated Communication",
      description: "Personalized messaging across all channels sleeps",
      benefits: [
        "SMS, email, and voice message automation",
        "Personalized content for each customer",
        "Follow-up sequences that convert",
        "Multi-channel campaign management"
      ],
      gradient: "rgba(168, 85, 247, 0.15)",
      accentColor: "rgb(168, 85, 247)"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Data-driven insights to grow your business",
      benefits: [
        "Real-time performance dashboards",
        "Customer behavior analysis",
        "Revenue optimization recommendations",
        "Predictive analytics for forecasting"
      ],
      gradient: "rgba(245, 158, 11, 0.15)",
      accentColor: "rgb(245, 158, 11)"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security for your business data",
      benefits: [
        "End-to-end encryption",
        "GDPR and HIPAA compliance",
        "Regular security audits",
        "Secure data backup and recovery"
      ],
      gradient: "rgba(239, 68, 68, 0.15)",
      accentColor: "rgb(239, 68, 68)"
    },
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Get up and running in minutes, not months",
      benefits: [
        "5-minute setup process",
        "No technical expertise required",
        "Seamless integration with existing tools",
        "Dedicated onboarding support"
      ],
      gradient: "rgba(245, 101, 101, 0.15)",
      accentColor: "rgb(245, 101, 101)"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "Patient management, appointment scheduling, and medical communication automation",
      stats: "87% reduction in missed appointments",
      gradient: "rgba(16, 185, 129, 0.12)",
      accentColor: "rgb(16, 185, 129)"
    },
    {
      name: "Beauty & Wellness", 
      description: "Treatment booking, customer care, and service reminders for salons and spas",
      stats: "65% increase in repeat bookings",
      gradient: "rgba(236, 72, 153, 0.12)",
      accentColor: "rgb(236, 72, 153)"
    },
    {
      name: "Professional Services",
      description: "Client management, consultation booking, and follow-up automation",
      stats: "52% improvement in client retention",
      gradient: "rgba(99, 102, 241, 0.12)",
      accentColor: "rgb(99, 102, 241)"
    },
    {
      name: "Fitness & Sports",
      description: "Member management, class booking, and wellness tracking",
      stats: "73% increase in member engagement",
      gradient: "rgba(251, 146, 60, 0.12)",
      accentColor: "rgb(251, 146, 60)"
    }
  ];
const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || window.innerWidth < 768) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease-out",
      }}
    >
      {children}
    </div>
  );
};
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Solutions spotlight effect
      solutionRefs.current.forEach((container, index) => {
        if (container && spotlightRefs.current[index]) {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          spotlightRefs.current[index].style.background = 
            `radial-gradient(circle at ${x}px ${y}px, ${solutions[index].gradient}, transparent 120%)`;
        }
      });

      // Industries spotlight effect
      industryRefs.current.forEach((container, index) => {
        if (container && spotlightRefs.current[solutions.length + index]) {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          spotlightRefs.current[solutions.length + index].style.background = 
            `radial-gradient(circle at ${x}px ${y}px, ${industries[index].gradient}, transparent 150%)`;
        }
      });

      // CTA spotlight effect
      if (ctaRef.current && spotlightRefs.current[solutions.length + industries.length]) {
        const rect = ctaRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        spotlightRefs.current[solutions.length + industries.length].style.background = 
          `radial-gradient(circle at ${x}px ${y}px, rgba(99, 102, 241, 0.08), transparent 200%)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
<div className="min-h-screen bg-black text-white">      <Helmet>
        <title>Solutions — TryzenIQ</title>
        <meta name="description" content="Discover AI-powered solutions for every industry: automation, analytics, security, and more. Transform your business with TryzenIQ." />
        <meta property="og:title" content="Solutions — TryzenIQ" />
        <meta property="og:description" content="AI solutions for automation, analytics, and business growth. Trusted by leading industries." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
          {/* Light Rays BG */}
          <div className="absolute inset-0 w-full h-full">
            <LightRays
              raysOrigin="top-center"
              raysColor="#00ffff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="w-full h-full"
            />
          </div>
        <section className="mt-[100px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Simple, Solutions</span>
              </div>
            <h1
  className="text-4xl md:text-6xl font-extralight mb-6 text-white font-playfair"
  style={{ fontFamily: "Playfair Display" }}
>
  Powerful{" "}
  <span className="bg-gradient-to-r from-[#F472B6] via-[#C084FC] to-[#818CF8] bg-clip-text text-transparent">
    Solutions
  </span>{" "}
  for Every Business
</h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto"
            style={{fontFamily: 'inter',animationDelay: '0.2s'}}>
              Our comprehensive AI automation platform adapts to your industry needs, 
              delivering measurable results that transform your business operations.
            </p>
          </div>
        </section>
        

        {/* Solutions Grid with Spotlight */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
  <TiltCard
  >
    <div
      ref={(el) => (solutionRefs.current[index] = el)}
      className="relative overflow-hidden bg-card/60 border border-border/50 rounded-xl p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:border-primary/30 group"
      style={{
        animationDelay: `${index * 0.1}s`,
        boxShadow: `0 0 0 1px ${solution.accentColor}20`,
      }}
    >
      {/* Spotlight overlay */}
      {/* <div
        ref={(el) => (spotlightRefs.current[index] = el)}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ zIndex: 1 }}
      ></div> */}

      {/* Animated border glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${solution.accentColor}40, transparent)`,
          zIndex: 0,
        }}
      ></div>

      {/* Card content */}
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div
            className="p-3 bg-primary/20 rounded-lg mr-4 backdrop-blur-sm border transition-all duration-300 group-hover:scale-110"
            style={{ borderColor: `${solution.accentColor}30` }}
          >
            <solution.icon
              className="w-8 h-8 transition-colors duration-300"
              style={{ color: solution.accentColor }}
            />
          </div>
          <h3 className="text-xl font-semibold group-hover:text-white transition-colors duration-300">
            {solution.title}
          </h3>
        </div>

        <p className="text-muted-foreground mb-6 group-hover:text-gray-300 transition-colors duration-300">
          {solution.description}
        </p>

        <div className="space-y-3">
          {solution.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start text-sm group-hover:text-gray-200 transition-colors duration-300"
            >
              <div
                className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 transition-all duration-300 group-hover:shadow-lg"
                style={{
                  backgroundColor: solution.accentColor,
                  boxShadow: `0 0 8px ${solution.accentColor}60`,
                }}
              ></div>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </TiltCard>
))}
            </div>
          </div>
        </section>

        {/* Industries Section with Spotlight */}
        <section className="py-20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 mt-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by <span className="hero-text-gradient">Leading Industries</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our solutions are specifically designed to meet the unique challenges 
                and requirements of different industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  ref={(el) => industryRefs.current[index] = el}
                  className="relative overflow-hidden bg-background/80 border border-border/50 rounded-xl p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group"
                  style={{ 
                    animationDelay: `${index * 0.15}s`,
                    boxShadow: `0 0 0 1px ${industry.accentColor}15`
                  }}
                >
                  {/* Spotlight overlay */}
                  <div 
                    ref={(el) => spotlightRefs.current[solutions.length + index] = el}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ zIndex: 1 }}
                  ></div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-4 hero-text-gradient group-hover:scale-105 transition-transform duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {industry.description}
                    </p>
                    <div 
                      className="rounded-lg p-6 backdrop-blur-sm border transition-all duration-300 group-hover:scale-105"
                      style={{ 
                        backgroundColor: `${industry.accentColor}10`,
                        borderColor: `${industry.accentColor}20`
                      }}
                    >
                      <div 
                        className="text-3xl font-bold mb-2 transition-all duration-300"
                        style={{ color: industry.accentColor }}
                      >
                        {industry.stats}
                      </div>
                      <div className="text-sm text-muted-foreground group-hover:text-gray-400 transition-colors duration-300">
                        Average improvement across our clients
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Spotlight */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div 
              ref={ctaRef}
              className="relative overflow-hidden bg-card/80 border border-border/50 rounded-2xl p-12 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl"
            >
              {/* Spotlight overlay */}
              <div 
                ref={(el) => spotlightRefs.current[solutions.length + industries.length] = el}
                className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
                style={{ zIndex: 1 }}
              ></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your <span className="hero-text-gradient">Business</span>?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto group-hover:text-gray-300 transition-colors duration-300">
                  Join thousands of businesses that have automated their operations and 
                  increased their revenue with our AI solutions.
                </p>
                <DemoButton label='Schedule Free Consultation' to='/contact'/>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />

    </div>
  );
};

export default Solutions;
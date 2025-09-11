"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
} from "lucide-react";
import { useRef, useEffect } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ShinyText from "@/components/ShinyText";
import { Helmet } from "react-helmet-async";

// Page Data
const solutions = [
  {
    title: "AI Virtual Assistant",
    description: "24/7 intelligent customer service that never sleeps",
    benefits: [
      "Handles 80% of customer inquiries automatically",
      "Reduces response time from hours to seconds",
      "Available in multiple languages",
      "Learns from every interaction",
    ],
    gradient: "rgba(59, 130, 246, 0.15)",
    accentColor: "rgb(59, 130, 246)",
  },
  {
    title: "Smart Scheduling",
    description: "Automated appointment booking and management system",
    benefits: [
      "Reduces no-shows by 45% with smart reminders",
      "Optimizes calendar for maximum efficiency",
      "Handles rescheduling automatically",
      "Integrates with existing calendar systems",
    ],
    gradient: "rgba(34, 197, 94, 0.15)",
    accentColor: "rgb(34, 197, 94)",
  },
  {
    title: "Automated Communication",
    description: "Personalized messaging across all channels sleeps",
    benefits: [
      "SMS, email, and voice message automation",
      "Personalized content for each customer",
      "Follow-up sequences that convert",
      "Multi-channel campaign management",
    ],
    gradient: "rgba(168, 85, 247, 0.15)",
    accentColor: "rgb(168, 85, 247)",
  },
  {
    title: "Advanced Analytics",
    description: "Data-driven insights to grow your business",
    benefits: [
      "Real-time performance dashboards",
      "Customer behavior analysis",
      "Revenue optimization recommendations",
      "Predictive analytics for forecasting",
    ],
    gradient: "rgba(245, 158, 11, 0.15)",
    accentColor: "rgb(245, 158, 11)",
  },
  {
    title: "Enterprise Security",
    description: "Bank-level security for your business data",
    benefits: [
      "End-to-end encryption",
      "GDPR and HIPAA compliance",
      "Regular security audits",
      "Secure data backup and recovery",
    ],
    gradient: "rgba(239, 68, 68, 0.15)",
    accentColor: "rgb(239, 68, 68)",
  },
  {
    title: "Lightning Fast Setup",
    description: "Get up and running in minutes, not months",
    benefits: [
      "5-minute setup process",
      "No technical expertise required",
      "Seamless integration with existing tools",
      "Dedicated onboarding support",
    ],
    gradient: "rgba(245, 101, 101, 0.15)",
    accentColor: "rgb(245, 101, 101)",
  },
];

const industries = [
  {
    name: "Healthcare",
    description:
      "Patient management, appointment scheduling, and medical communication automation",
    stats: "87% reduction in missed appointments",
    gradient: "rgba(16, 185, 129, 0.12)",
    accentColor: "rgb(16, 185, 129)",
  },
  {
    name: "Beauty & Wellness",
    description:
      "Treatment booking, customer care, and service reminders for salons and spas",
    stats: "65% increase in repeat bookings",
    gradient: "rgba(236, 72, 153, 0.12)",
    accentColor: "rgb(236, 72, 153)",
  },
  {
    name: "Professional Services",
    description:
      "Client management, consultation booking, and follow-up automation",
    stats: "52% improvement in client retention",
    gradient: "rgba(99, 102, 241, 0.12)",
    accentColor: "rgb(99, 102, 241)",
  },
  {
    name: "Fitness & Sports",
    description:
      "Member management, class booking, and wellness tracking",
    stats: "73% increase in member engagement",
    gradient: "rgba(251, 146, 60, 0.12)",
    accentColor: "rgb(251, 146, 60)",
  },
];

// TiltCard Component
const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
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
      style={{ transformStyle: "preserve-3d", transition: "transform 0.3s ease-out" }}
    >
      {children}
    </div>
  );
};

const Solutions = () => {
  const solutionRefs = useRef<HTMLDivElement[]>([]);
  const industryRefs = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const spotlightRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Solutions Spotlight
      solutionRefs.current.forEach((container, index) => {
        if (container && spotlightRefs.current[index]) {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          spotlightRefs.current[index].style.background = `radial-gradient(circle at ${x}px ${y}px, ${solutions[index].gradient}, transparent 120%)`;
        }
      });

      // Industries Spotlight
      industryRefs.current.forEach((container, index) => {
        if (container && spotlightRefs.current[solutions.length + index]) {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          spotlightRefs.current[solutions.length + index].style.background = `radial-gradient(circle at ${x}px ${y}px, ${industries[index].gradient}, transparent 150%)`;
        }
      });

      // CTA Spotlight
      if (ctaRef.current && spotlightRefs.current[solutions.length + industries.length]) {
        const rect = ctaRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlightRefs.current[solutions.length + industries.length].style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(99, 102, 241, 0.08), transparent 200%)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Solutions — TryzenIQ</title>
        <meta
          name="description"
          content="Discover AI-powered solutions for every industry: automation, analytics, security, and more. Transform your business with TryzenIQ."
        />
      </Helmet>
      <Navbar />

      <main className="pt-[130px]">
        {/* Hero Section */}
        <section className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
            <div className="hero-section">
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-extralight bg-[#ffffff] bg-clip-text text-transparent mb-6"
                style={{ fontFamily: "Playfair Display" }}
              >
                Smart{" "}
                <ShinyText
                  text="Solutions"
                  className="hero-text-gradient bg-clip-text text-transparent"
                />
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center">
              Discover innovative, practical solutions designed to address real-world challenges, long-term growth with measurable impact.              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <TiltCard key={index}>
                  <div
                    ref={(el) => (solutionRefs.current[index] = el)}
                    className="group relative overflow-hidden rounded-xl p-8 bg-card/60 border border-border/10 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:border-[#2c2c2c] hover:bg-white/5"
                    style={{ boxShadow: `0 0 0 1px ${solution.accentColor}20` }}
                  >
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${solution.accentColor}40, transparent)`,
                        zIndex: 0,
                      }}
                    />
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-[#8caac8] transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 transition-colors duration-300 group-hover:text-gray-300">
                        {solution.description}
                      </p>
                      <div className="space-y-2">
                        {solution.benefits.map((b, i) => (
                          <div key={i} className="flex items-start text-sm group-hover:text-gray-200 transition-colors duration-300">
                            <div className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 bg-[#8caac8] shadow-[0_0_8px_#8caac860] transition-all duration-300"></div>
                            <span>{b}</span>
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

        {/* Industries Section */}
        <section className="py-20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight font-playfair mb-4">
                Trusted by <span className="hero-text-gradient">Leading Industries</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
                Our solutions are specifically designed to meet the unique challenges and requirements of different industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  ref={(el) => (industryRefs.current[index] = el)}
                  className="relative overflow-hidden bg-background/80 border border-border/50 rounded-xl p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group"
                  style={{ boxShadow: `0 0 0 1px ${industry.accentColor}15` }}
                >
                  <div
                    ref={(el) => (spotlightRefs.current[solutions.length + index] = el)}
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
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
                        borderColor: `${industry.accentColor}20`,
                      }}
                    >
                      <div className="text-2xl font-normal font-serif mb-2">
                        {industry.stats}
                      </div>
                      <div className="text-sm text-muted-foreground group-hover:text-gray-400">
                        Average improvement across our clients
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              ref={ctaRef}
              className="relative overflow-hidden bg-card/80 border border-border/50 rounded-2xl p-12 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl"
            >
              <div
                ref={(el) => (spotlightRefs.current[solutions.length + industries.length] = el)}
                className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
                style={{ zIndex: 1 }}
              />
              <div className="relative z-10">
                <h2 className="mb-6 text-4xl md:text-5xl font-extralight font-playfair">
                  Ready to Transform Your <span className="hero-text-gradient">Business</span>?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto group-hover:text-gray-300 transition-colors duration-300">
                  Join thousands of businesses that have automated their operations and increased their revenue with our AI solutions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <button className="group relative flex items-center justify-between border border-gray-500 text-white font-semibold pl-6 pr-14 py-4 rounded-full overflow-hidden transition-all duration-700 ease-in-out">
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#8caac8] text-black z-10 transition-transform duration-700 ease-in-out group-hover:scale-[45]" />
                    <span className="relative z-20 transition-colors duration-700 ease-in-out group-hover:text-black">
                      SCHEDULE FREE MEETING
                    </span>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
                      <ArrowRight className="w-4 h-4 text-black duration-700 ease-in-out group-hover:text-black" />
                    </span>
                  </button>
                </div>
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

"use client";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Sparkles,
  Handshake,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import LightRays from "@/components/LightRays";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import CountUp from "react-countup";

// Animation Variants
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: delay / 1000,
    },
  },
});

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  const stats = [
    { icon: Users, number: 10000, suffix: "+", label: "Active Clients" },
    { icon: Target, number: 95, suffix: "%", label: "Customer Satisfaction" },
    { icon: Award, number: 50, suffix: "+", label: "Industry Awards" },
    { icon: TrendingUp, number: 300, suffix: "%", label: "Average ROI Increase" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxybaUaqtLxUbBoOU5L89nfEiq9YhGphPINg&s",
      bio: "Former AI researcher at Google with 15+ years in automation technology.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&faceea",
      bio: "Lead engineer who built scalable AI systems for Fortune 500 companies.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Success",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop&faceea",
      bio: "Customer experience expert ensuring our clients achieve maximum value.",
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop&faceea",
      bio: "Full-stack developer passionate about creating intuitive automation tools.",
    },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description:
        "We constantly push the boundaries of what's possible with AI automation, staying ahead of industry trends.",
    },
    {
      icon: Handshake,
      title: "Customer Success",
      description:
        "Your success is our success. We're committed to delivering measurable results for every client.",
    },
    {
      icon: ShieldCheck,
      title: "Transparency",
      description:
        "Clear communication, honest pricing, and transparent processes in everything we do.",
    },
    {
      icon: Zap,
      title: "Reliability",
      description:
        "Our systems are built for 99.9% uptime, ensuring your business operations never stop.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body bg-black text-white relative overflow-hidden">
      <Helmet>
        <title>About — TryzenIQ</title>
        <meta
          name="description"
          content="Discover AI-powered solutions for every industry: automation, analytics, security, and more. Transform your business with TryzenIQ."
        />
        <meta property="og:title" content="Solutions — TryzenIQ" />
        <meta
          property="og:description"
          content="AI solutions for automation, analytics, and business growth. Trusted by leading industries."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />

      <main className="pt-20 md:pt-32 relative">
        {/* Background Rays */}

        {/* Hero Section */}
        <section className="pt-[100px] md:py-10 lg:py-5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1
              variants={fadeInUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-extralight mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display" }}
            >
              About
              <span className="hero-text-gradient bg-clip-text text-transparent animate-gradient ml-2">
                TryzenIQ
              </span>
            </h1>

            <p
              variants={fadeInUp(150)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed"
            >
              We're on a mission to revolutionize how businesses operate by
              making AI automation accessible, powerful, and profitable for
              everyone.
            </p>
          </div>
        </section>

        

        {/* Values Section */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div
              variants={fadeInUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Our <span className="hero-text-gradient">Values</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                The principles that guide everything we do and every decision we
                make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[10px] gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  variants={fadeInUp(index * 100 + 200)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ rotate: -2, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:border-[#515151] "
                >
                  <div className="p-4 .hero-text-gradient rounded-full inline-flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 " />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 hero-text-gradient">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


{/* Stats Section */}
        <section className="py-16 md:py-24 relative z-10">
          <div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-7xl mx-auto px-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
  {stats.map((stat, index) => {
    const { ref, inView } = useInView({
      triggerOnce: false,   
      threshold: 0.5,      
    });

    return (
      <div
        ref={ref}
        key={index}
        className="text-center h-full flex flex-col items-center justify-center transition-all duration-300"
      >
        <div className="text-3xl md:text-4xl font-heading font-bold hero-text-gradient mb-2">
          {inView ? (
            <CountUp end={stat.number} suffix={stat.suffix} duration={2} />
          ) : (
            // 👇 reset when out of view
            <span>0{stat.suffix}</span>
          )}
        </div>
        <div className="text-muted-foreground font-body text-sm md:text-base">
          {stat.label}
        </div>
      </div>
    );
  })}
</div>
          </div>
        </section>



                {/* Enhanced Team Section */}
        <section className="py-20 md:py-32 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              variants={fadeInUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Meet Our{" "}
                <span className="hero-text-gradient bg-clip-text text-transparent">
                  Team
                </span>
              </h2>
              <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                The brilliant minds behind TryzenIQ's innovative automation solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[10px] gap-8">
              {team.map((member, index) => (
                  <div
                    variants={fadeInUp(index * 100 + 200)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-2xl overflow-hidden"
                  >
                    {/* Profile image with enhanced effects */}
                    <div className="relative mb-6 w-32 h-32 mx-auto">
                      <div className="absolute inset-0 bg-[#8caac8] rounded-full p-1 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full bg-black rounded-full p-1">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                          />
                        </div>
                      </div>
                      {/* Status indicator */}
                      <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-black group-hover:scale-125 transition-transform" />
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {member.name}
                    </h3>
                    
                    <p className="text-[#8caac8] font-semibold mb-4 text-sm uppercase tracking-wider">
                      {member.role}
                    </p>
                    
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    {/* Quote section */}
                    {/* <div className="relative group-hover:opacity-100 transition-opacity">
                      <Quote className="w-4 h-4 text-cyan-400 mb-2 mx-auto opacity-60" />
                      <p className="text-slate-400 text-xs italic leading-relaxed">
                        "{member.quote}"
                      </p>
                    </div> */}

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all" />
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all delay-100" />
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div
              variants={fadeInUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 md:p-16 relative overflow-hidden group"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 opacity-0 transition-opacity duration-1000" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to{" "}
                  <span className="bg-[#8caac8] bg-clip-text text-transparent">
                    Transform
                  </span>{" "}
                  Your Business?
                </h2>
                
                <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of companies already using TryzenIQ to automate their operations and accelerate growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group inline-flex items-center gap-2 px-8 py-4 text-black bg-[#ffffff]  rounded-full font-medium transition-all duration-300 border border-white/20 hover:border-white/40">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-medium transition-all duration-300 hover:bg-white/5">
                    Schedule Demo
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

export default About;

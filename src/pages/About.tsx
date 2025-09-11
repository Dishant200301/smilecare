"use client";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tilt from "react-parallax-tilt";

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
import ShinyText from "@/components/ShinyText";

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
    {
      icon: TrendingUp,
      number: 300,
      suffix: "%",
      label: "Average ROI Increase",
    },
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
      role: "Head of Customer",
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
        "Clear communication, honest pricing, and transparent processes in everything we do result.",
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
        <section className="relative z-10">
  <div className="max-w-7xl mx-auto px-4">
    <div className="hero-section">
      <h1
        className="text-4xl md:text-6xl lg:text-7xl font-extralight bg-[#ffffff] bg-clip-text text-transparent mb-6 text-center"
        style={{ fontFamily: "Playfair Display" }}
      >
        About{" "}
        <ShinyText
          text="Us"
          className="hero-text-gradient bg-clip-text text-transparent"
        />
      </h1>

      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
      Learn more about our inspiring journey and the dedicated team passionately committed to driving growth and lasting success.      </p>
    </div>
  </div>
</section>


        {/* Values Section */}
        <section className="py-16 md:py-8 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[10px] gap-6 pt-5">
              {values.map((value, index) => (
                <Tilt
                  key={index}
                  glareEnable={true}
                  glareMaxOpacity={0}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  transitionSpeed={800}
                  glareBorderRadius="16px"
                >
                  <div
                    key={index}
                    variants={fadeInUp(index * 100 + 200)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ rotate: -2, scale: 1.02 }}
                    className="group border border-border rounded-2xl p-6 bg-[#0c0c0c] md:p-8 text-center transition-all duration-300 hover:border-white/10"
                  >
                    <div className="p-4 hero-text-gradient rounded-full inline-flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 " />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-[#8caac8]">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 font-body transition-colors duration-300 text-[#909090] group-hover:text-[#cccccc]">
                      {value.description}
                    </p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-8 relative z-10">
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
                    className="group relative 
              transition-all duration-300
              flex flex-col items-center justify-center text-center"
                  >
                    {/* Number */}
                    <div className="text-3xl md:text-4xl font-heading font-bold hero-text-gradient mb-2 transition-transform duration-300">
                      {inView ? (
                        <CountUp
                          end={stat.number}
                          suffix={stat.suffix}
                          duration={2}
                        />
                      ) : (
                        <span>0{stat.suffix}</span>
                      )}
                    </div>

                    {/* Label */}
                    <div className="text-muted-foreground font-body text-sm md:text-base transition-colors duration-300 group-hover:text-white/80">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Team Section */}
        <section className="relative z-10">
  <div className="max-w-7xl mx-auto px-4">
    <div
      className="hero-section"
      variants={fadeInUp(0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="font-playfair text-4xl md:text-5xl font-extralight lg:text-5xl font-heading mb-4">
        Meet Our{" "}
        <span className="hero-text-gradient bg-clip-text text-transparent">
          Team
        </span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-muted-foreground font-body">
        The brilliant minds behind TryzenIQ's innovative automation solutions.
      </p>
    </div>
  

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[10px] gap-8 md:pt-10">
  {team.map((member, index) => (
    <Tilt
      key={index}
      glareEnable={true}
      glareColor="#8caac8"
      glareMaxOpacity={0}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      transitionSpeed={800}
      glareBorderRadius="16px"
    >
      <div
        variants={fadeInUp(index * 100 + 200)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="group relative bg-[#0d0d0d] backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center 
        transition-all duration-500 hover:bg-[#0c0c0c] hover:shadow-[0_0_25px_#8caac8]/40 overflow-hidden"
      >
        {/* Shine Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
        translate-x-[-150%] opacity-0 group-hover:opacity-100 group-hover:animate-shine pointer-events-none" />

        {/* Profile image */}
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
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold mb-2 text-white transition-colors duration-300 group-hover:text-[#8caac8] relative z-10">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-[#909090] font-semibold mb-4 text-sm uppercase tracking-wider transition-colors duration-300 group-hover:text-white/70 relative z-10">
          {member.role}
        </p>

        {/* Bio */}
        <p className="text-sm leading-relaxed mb-4 text-[#909090] transition-colors duration-300 group-hover:text-[#bbbbbb] relative z-10">
          {member.bio}
        </p>
      </div>
    </Tilt>
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
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 md:p-16 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 opacity-0 transition-opacity duration-1000" />

              <div className="relative z-10">
                <h2 className="font-playfair text-4xl md:text-5xl font-extralight  lg:text-5xl mb-6">
                  Ready to{" "}
                  <span className="bg-[#8caac8] bg-clip-text text-transparent">
                    Transform
                  </span>{" "}
                  Your Business?
                </h2>

                <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of companies already using TryzenIQ to automate
                  their operations and accelerate growth.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  {/* Primary Button - Animated */}
                  <button className="group relative flex items-center justify-between border border-gray-500 text-white font-medium pl-6 pr-14 py-4 rounded-full overflow-hidden transition-all duration-500 ease-out">
                    <span
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#8caac8] text-black z-10 
    transition-transform duration-700 ease-in-out group-hover:scale-[45]"
                    />
                    <span className="relative z-20 transition-colors duration-500 ease-in-out group-hover:text-black">
                      Start Free Trial
                    </span>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
                      <ArrowRight className="w-4 h-4 text-black transition-transform duration-500 ease-in-out group-hover:translate-x-1 group-hover:text-black" />
                    </span>
                  </button>

                  {/* Secondary Button
                  <button className="rounded-full border border-white/20 bg-black/30 backdrop-blur-xl text-white px-8 py-4 font-medium transition-all duration-300 hover:bg-black/50 hover:border-white/30 hover:scale-105">
                    View Demo
                  </button> */}
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

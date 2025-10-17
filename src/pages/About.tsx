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
  Home, // New import for Vision section
  Leaf, // New import for Vision section
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { cubicBezier } from "framer-motion";
import LightRays from "@/components/LightRays";
import { Helmet } from "react-helmet-async";
import CountUp from "react-countup";
import ShinyText from "@/components/ShinyText";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ContactUsPreviewSection from "@/components/ContactUsPreviewSection";
import TeamSection from "@/components/TeamSection";

// Animation Variants
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0, 0, 0.58, 1), // easeOut equivalent
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
    { icon: Users, number: 10, suffix: "+", label: "Active Clients" },
    { icon: Target, number: 100, suffix: "%", label: "Customer Satisfaction" },
    { icon: Award, number: 10, suffix: "+", label: "Industry Awards" },
    {
      icon: TrendingUp,
      number: 2,
      suffix: "x",
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
    <div className="min-h-screen bg-black text-white font-body relative overflow-hidden">
      <Helmet>
        <title>About | TryzenIQ</title>
        <meta
          name="description"
          content="Discover AI-powered solutions for every industry: automation, analytics, security, and more. Transform your business with TryzenIQ."
        />
        <meta property="og:title" content="Solutions TryzenIQ" />
        <meta
          property="og:description"
          content="AI solutions for automation, analytics, and business growth. Trusted by leading industries."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />

      <main className="pt-20 md:pt-[170px] relative">
        {/* Background Rays */}

        {/* Hero Section */}
        <section className="relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl gradient-text font-HindMadurai font-medium leading-tight mb-6">
                About <span className="font-InstrumentSerif italic">Us</span>
              </h1>

              <p className="text-lg text-gray-300 font-HindMadurai max-w-3xl mx-auto leading-relaxed">
                Learn more about our inspiring journey and the dedicated team
                passionately committed to driving growth and lasting success.{" "}
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-8 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[10px] gap-6 pt-5">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group border border-border rounded-2xl p-6 bg-[#0c0c0c] md:p-8 text-center transition-all duration-300 hover:border-white/10"
                >
                  <div className="p-4 hero-text-gradient rounded-full inline-flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 " />
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-HindMadurai font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-[white]">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 font-HindMadurai transition-colors duration-300 text-[#909090] group-hover:text-[#cccccc]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

         {/* Stats Section */}
        <section className="pt-16 md:pt-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
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
                    <div className="text-3xl md:text-4xl font-HindMadurai mb-2 transition-transform duration-300">
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
                    <div className="text-muted-foreground font-HindMadurai text-sm md:text-base transition-colors duration-300 group-hover:text-white/80">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h2
                  variants={fadeInUp(0)}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl gradient-text font-medium leading-tight font-HindMadurai ml-3"
                >
                  Our {""}
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic gradient-text">
                    Mission
                  </span>
                </motion.h2>
                <motion.p
                  variants={fadeInUp(100)}
                  className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400 px-4 mb-5"
                >
                  To provide exceptional construction services that exceed
                  client expectations through innovation, quality craftsmanship,
                  and a commitment to sustainability. We aim to build lasting
                  relationships and create spaces that enhance communities. We
                  aim to create spaces that inspire and improve the lives of our
                  clients and communities. Through precision, expertise, and a
                  customer-centric approach, we strive to exceed expectations in
                  every project. Our dedication to integrity and excellence
                  drives us to build lasting relationships and a legacy of
                  trust.
                </motion.p>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="space-y-4"
                >
                  <motion.div
                    variants={fadeInUp(200)}
                    className="flex items-start"
                  >
                    <ShieldCheck className="w-6 h-6 text-white ml-3 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-white font-HindMadurai">
                      Fostering Sustainable Growth and Green Development
                    </p>
                  </motion.div>
                  <motion.div
                    variants={fadeInUp(300)}
                    className="flex items-start"
                  >
                    <Sparkles className="w-6 h-6 text-white ml-3 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-white font-HindMadurai">
                      Innovating for a Sustainable Future
                    </p>
                  </motion.div>
                  <motion.div
                    variants={fadeInUp(400)}
                    className="flex items-start"
                  >
                    <Users className="w-6 h-6 text-white ml-3 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-white font-HindMadurai">
                      Customer-Centric Approach
                    </p>
                  </motion.div>
                  <motion.div
                    variants={fadeInUp(500)}
                    className="flex items-start"
                  >
                    <Handshake className="w-6 h-6 text-white ml-3 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-white font-HindMadurai">
                      Building Stronger Communities
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Images */}
              <motion.div
                variants={fadeInUp(0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="relative h-[400px] md:h-[550px] order-1 lg:order-2"
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                    alt="Architect's desk with blueprints and tools"
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Images */}
              <motion.div
                variants={fadeInUp(0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="relative h-[400px] md:h-[550px]"
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661315492902-528b6230a937?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3VyJTIwdmlzaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
                    alt="Construction site background"
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 -translate-x-4 translate-y-4 md:-translate-x-8 md:translate-y-8 bg-black p-2 rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
                    alt="Surveyor with equipment"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-1/2 translate-x-4 -translate-y-4 md:translate-x-8 md:-translate-y-8 bg-black p-2 rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                    alt="Engineers with laptop"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h2
                  variants={fadeInUp(0)}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl gradient-text font-medium leading-tight font-HindMadurai ml-3"
                >
                  Our {""}
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic gradient-text">
                    Vision
                  </span>
                </motion.h2>
                <motion.p
                  variants={fadeInUp(100)}
                  className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400 px-4 mb-5"
                >
                  At Renovex, our vision is to redefine the future of
                  construction through innovation, sustainability, and
                  excellence. We aim to create structures that not only inspire
                  but also contribute to the well-being of communities and the
                  environment. By embracing cutting-edge technology and
                  eco-friendly practices, we strive to lead the industry toward
                  a greener, smarter future. Our focus is on delivering value,
                  quality, and longevity in every project we undertake.
                  Together, we envision a world where construction empowers
                  progress and transforms lives.
                </motion.p>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="space-y-4"
                >
                  <motion.div
                    variants={fadeInUp(200)}
                    className="flex items-start"
                  >
                    <Home className="w-6 h-6  text-white ml-5 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-white font-HindMadurai">
                      Inspiring Modern Architecture
                    </p>
                  </motion.div>
                  <motion.div
                    variants={fadeInUp(300)}
                    className="flex items-start"
                  >
                    <Leaf className="w-6 h-6 text-white ml-5 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-white font-HindMadurai">
                      Pioneering Sustainable Construction
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

       
        <TeamSection />

        <ContactUsPreviewSection />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default About;

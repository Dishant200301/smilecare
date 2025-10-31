"use client";
import { useInView } from "react-intersection-observer";
import { motion, cubicBezier } from "framer-motion";
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
  Home,
  Leaf,
  MessageSquare,
  Shield,
} from "lucide-react";
import React from "react";
import { Helmet } from "react-helmet-async";
import CountUp from "react-countup";
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
      ease: cubicBezier(0, 0, 0.58, 1),
      delay: delay / 1000,
    },
  },
});

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const About = () => {
  const stats = [
    { icon: Users, number: 50, suffix: "+", label: "Happy Clients" },
    { icon: Target, number: 98, suffix: "%", label: "Customer Satisfaction" },
    { icon: Award, number: 15, suffix: "+", label: "Projects Completed" },
    { icon: TrendingUp, number: 3, suffix: "x", label: "Average ROI Increase" },
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
          content="Discover AI-powered solutions for every industry: automation, analytics, security, and more."
        />
      </Helmet>
      <Navbar />

      <main className="pt-28 md:pt-[170px] relative">
        {/* Background Rays */} {/* Hero Section */}
        <motion.section
          className="relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl gradient-text font-HindMadurai font-medium leading-tight mb-6">
                {" "}
                About <span className="font-InstrumentSerif italic">Us</span>
              </h1>
              <p className="text-lg md:text-lg text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto px-5 mb-10">
                {" "}
                Empowering small businesses with AI-powered automation
                solutions. Learn about our mission to transform how businesses
                operate and grow.
              </p>
            </div>
          </div>
        </motion.section>
        {/* Values Section */}
        <section className="py-8 md:py-8 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[10px] gap-6 pt-5">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="group border border-border rounded-2xl p-6 bg-[#0c0c0c] md:p-8 text-center transition-all duration-300 hover:border-white/10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
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
                </motion.div>
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
                  <motion.div
                    ref={ref}
                    key={index}
                    className="group relative transition-all duration-300 flex flex-col items-center justify-center text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
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
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Our Mission Section */}
        <section className="py-8 md:py-12 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading - Full width on mobile, part of grid on desktop */}
            <motion.h2
              variants={fadeInUp(0)}
              className="text-4xl sm:text-5xl lg:text-6xl font-HindMadurai font-medium leading-tight text-center lg:hidden mb-10"
            >
              Our <span className="italic gradient-text">Mission</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image - Below heading on mobile, left side on desktop */}
              <motion.div
                variants={fadeInUp(0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="relative h-[300px] sm:h-[400px] lg:h-[550px] order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
                  alt="Team collaboration and AI technology"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="order-2"
              >
                {/* Hidden on mobile, visible on desktop */}
                <motion.h2
                  variants={fadeInUp(0)}
                  className="hidden lg:block text-4xl sm:text-5xl lg:text-6xl font-HindMadurai font-medium leading-tight mb-6"
                >
                  Our <span className="italic gradient-text">Mission</span>
                </motion.h2>

                <motion.p
                  variants={fadeInUp(100)}
                  className="text-lg text-gray-400 font-HindMadurai leading-relaxed mt-6 mb-8 max-w-3xl text-center md:text-left lg:text-left"
                >
                  To empower small businesses with intelligent AI automation
                  that drives growth, efficiency, and customer satisfaction. We
                  believe every business deserves access to cutting-edge
                  technology that simplifies operations, captures more leads,
                  and delivers actionable insights—all without the complexity.
                </motion.p>

                <div className="space-y-4">
                  {[
                    {
                      icon: <ShieldCheck className="w-6 h-6 text-white" />,
                      text: "Delivering Reliable AI Solutions 24/7",
                    },
                    {
                      icon: <Sparkles className="w-6 h-6 text-white" />,
                      text: "Automating Repetitive Tasks for Efficiency",
                    },
                    {
                      icon: <Shield className="w-6 h-6 text-white" />,
                      text: "Enterprise-Grade Data Security",
                    },
                    {
                      icon: <Zap className="w-6 h-6 text-white" />,
                      text: "Boosting Productivity with Smart Automation",
                    },
                    {
                      icon: <MessageSquare className="w-6 h-6 text-white" />,
                      text: "24/7 Dedicated Customer Support",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp(200 + index * 50)}
                      className="flex items-center gap-3"
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <p className="text-white font-HindMadurai">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Vision Section */}
        <section className="pt-8 md:pt-12 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            {/* Mobile Heading - Only shows on mobile */}
            <motion.h2
              variants={fadeInUp(0)}
              className="text-4xl font-HindMadurai font-medium leading-tight text-center mb-10 lg:hidden"
            >
              Our <span className="italic gradient-text">Vision</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content - First on mobile, left side on desktop */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="order-2 lg:order-1"
              >
                {/* Desktop Heading - Hidden on mobile */}
                <motion.h2
                  variants={fadeInUp(0)}
                  className="hidden lg:block text-4xl md:text-5xl font-HindMadurai font-medium leading-tight mb-6"
                >
                  Our <span className="italic gradient-text">Vision</span>
                </motion.h2>

                <motion.p
                  variants={fadeInUp(100)}
                  className="text-lg text-gray-400 font-HindMadurai leading-relaxed mb-8 text-center md:text-left lg:text-left"
                >
                  At TryzenIQ, our vision is to democratize AI automation for
                  small businesses worldwide. We envision a future where every
                  business, regardless of size, has access to intelligent
                  automation that captures leads, books appointments, sends
                  reminders, and provides actionable analytics.
                </motion.p>

                <div className="space-y-4">
                  {[
                    {
                      icon: <Home className="w-6 h-6 text-white" />,
                      text: "Making AI Accessible to Every Business",
                    },
                    {
                      icon: <Leaf className="w-6 h-6 text-white" />,
                      text: "Driving Sustainable Business Growth",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp(200 + index * 100)}
                      className="flex items-center gap-3"
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <p className="text-white font-HindMadurai">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Image - Second on mobile, right side on desktop */}
              <motion.div
                variants={fadeInUp(0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] order-1 md:order-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600"
                  alt="AI automation and business growth"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
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

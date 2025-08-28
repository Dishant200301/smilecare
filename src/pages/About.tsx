'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Award, TrendingUp, Sparkles, Handshake, ShieldCheck, Zap } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import LightRays from '@/components/LightRays';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '@/components/ScrollToTopButton';

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

const About = () => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Active Clients" },
    { icon: Target, number: "95%", label: "Customer Satisfaction" },
    { icon: Award, number: "50+", label: "Industry Awards" },
    { icon: TrendingUp, number: "300%", label: "Average ROI Increase" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxybaUaqtLxUbBoOU5L89nfEiq9YhGphPINg&s",
      bio: "Former AI researcher at Google with 15+ years in automation technology."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&faceea",
      bio: "Lead engineer who built scalable AI systems for Fortune 500 companies."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop&faceea",
      bio: "Customer experience expert ensuring our clients achieve maximum value."
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop&faceea",
      bio: "Full-stack developer passionate about creating intuitive automation tools."
    }
  ];

  const values = [
    { icon: Sparkles, title: "Innovation First", description: "We constantly push the boundaries of what's possible with AI automation, staying ahead of industry trends." },
    { icon: Handshake, title: "Customer Success", description: "Your success is our success. We're committed to delivering measurable results for every client." },
    { icon: ShieldCheck, title: "Transparency", description: "Clear communication, honest pricing, and transparent processes in everything we do." },
    { icon: Zap, title: "Reliability", description: "Our systems are built for 99.9% uptime, ensuring your business operations never stop." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Helmet>
        <title>About — TryzenIQ</title>
        <meta name="description" content="Discover AI-powered solutions for every industry: automation, analytics, security, and more. Transform your business with TryzenIQ." />
        <meta property="og:title" content="Solutions — TryzenIQ" />
        <meta property="og:description" content="AI solutions for automation, analytics, and business growth. Trusted by leading industries." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      
      <main className="pt-20 md:pt-32 bg-black ">
        {/* Background Rays */}
        <div className="absolute inset-0 w-full h-full">  <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="w-full h-full"  />
</div>

        {/* Hero Section */}
        <section className="pt-[100px] md:py-10 lg:py-5 bg-black-to-br from-background via-card to-background">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h3
              variants={fadeInUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
              style={{ fontFamily: 'inter' }}
            >
              About <span className="hero-text-gradient">TryzenIQ</span>
            </motion.h3>

            <motion.p
              variants={fadeInUp(150)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed"
              style={{ fontFamily: 'inter' }}
            >
              We're on a mission to revolutionize how businesses operate by making 
              AI automation accessible, powerful, and profitable for everyone.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp(index * 100 + 200)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center h-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="p-4 bg-primary/10 rounded-full inline-flex items-center justify-center mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-heading font-bold hero-text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-body text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
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
                The principles that guide everything we do and every decision we make.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp(index * 100 + 200)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="p-4 bg-primary/10 rounded-full inline-flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 hero-text-gradient">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-body">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              variants={fadeInUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Meet Our <span className="hero-text-gradient">Team</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                The brilliant minds behind TryzenIQ's innovative automation solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp(index * 100 + 200)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className="relative mb-6 w-36 h-36 mx-auto overflow-hidden rounded-full border-4 border-primary/20 shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </motion.div>
              ))}
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
// app/ /page.tsx (Main Contact Page)
"use client"; // Assuming Next.js App Router and client component
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Calendar,
  Briefcase,
  LifeBuoy,
} from "lucide-react"; // Added Calendar, Briefcase, LifeBuoy for other sections
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import LightRays from "@/components/LightRays";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "@/components/ScrollToTopButton";
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you shortly.");
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@zeniq.ai",
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm PST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "123 Innovation Street, Suite 100",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8am - 6pm PST",
      description: "Weekend support available for enterprise clients",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body bg-black text-white relative overflow-hidden">
      <Helmet>
        <title>Contact — TryzenIQ</title>
        <meta name="description" content="Discover AI-powered solutions for every industry: automation, analytics, security, and more. Transform your business with TryzenIQ." />
        <meta property="og:title" content="Solutions — TryzenIQ" />
        <meta property="og:description" content="AI solutions for automation, analytics, and business growth. Trusted by leading industries." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <main className="pt-26 md:pt-32">
        {" "}
        {/* Adjust padding for sticky nav */}
        {/* Hero Section */}
        <div className="absolute inset-0 w-full h-full">
          {" "}
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
        <section className="pt-[130px] md:py-2 lg:py-5 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extralight mb-6 leading-tight"style={{ fontFamily: "Playfair Display" }}>
                Contact{" "}
                <span className="hero-text-gradient
hero-text-gradient special-font">Us</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
                Ready to transform your business with AI automation? We're here
                to help you get started and answer any questions you might have.
              </p>
          </div>
        </section>
        <section className="relative py-20 ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Contact Form */}
              <div className="lg:col-span-2 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-8 md:p-10 rounded-3xl shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                  Send us a Message
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your first name"
                        required
                        className="w-full bg-zinc-800/50 border border-zinc-700 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Last name "
                        required
                        className="w-full bg-zinc-800/50 border border-zinc-700 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        required
                        className="w-full bg-zinc-800/50 border border-zinc-700 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email address"
                        required
                        className="w-full bg-zinc-800/50 border border-zinc-700 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Subject */}
<div>
  <label className="block text-sm font-medium text-gray-300 mb-2">
    Subject *
  </label>
  <input
    type="text"
    name="subject"
    value={formData.subject}
    onChange={handleInputChange}
    placeholder="Message subject"
    required
    className="w-full bg-zinc-800/50 border border-zinc-700 
               text-white placeholder:text-gray-400 
               rounded-lg px-4 py-3 
               focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
               focus:outline-none transition-all duration-300"
  />
</div>

{/* Message */}
<div>
  <label
    htmlFor="message"
    className="block text-sm font-medium text-gray-300 mb-2"
  >
    Message *
  </label>
  <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleInputChange}
    placeholder="Tell us about your business and how we can help..."
    rows={6}
    required
    className="w-full bg-zinc-800/50 border border-zinc-700 
               text-white placeholder:text-gray-400 
               rounded-lg px-4 py-3 min-h-[120px] 
               focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
               focus:outline-none transition-all duration-300"
  />
</div>


<div className="absolute flex flex-col justify-center items-center gap-2 p-4 md:p-6  rounded-lg">
  <button
    onClick={handleSubmit}
    className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 "
  >
    Send Message <Send className="w-4 h-4" />
  </button>
</div>

                </div>
              </div>

              {/* Right: Contact Info */}
              <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-8 md:p-10 flex flex-col justify-center space-y-8 rounded-3xl shadow-2xl">
                <div className="text-center group  rounded-2xl p-6 transition-all duration-300">
                  <Mail className="mx-auto w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-lg text-white mb-2">
                    Email
                  </h3>
                  <p className="text-gray-300 break-all">tryzeniq@gmail.com</p>
                </div>

                <div className="text-center  rounded-2xl p-6 transition-all duration-300">
                  <Phone className="mx-auto w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-lg text-white mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-300">+91 63591 85945</p>
                </div>

                <div className="text-center grouprounded-2xl p-6 transition-all duration-300">
                  <MapPin className="mx-auto w-8 h-8 text-green-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-lg text-white mb-2">
                    Address
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    315, Shivalik, Dabholi
                    <br />
                    Surat, Gujarat 395004
                  </p>
                </div>

                <div className="text-center group rounded-2xl p-6 transition-all duration-300">
                  <Clock className="mx-auto w-8 h-8 text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-lg text-white mb-2">
                    Business Hours
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Mon - Fri: 9am - 6pm IST
                    <br />
                    <span className="text-sm text-gray-400">
                      Weekend support available
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
      </main>

      <Footer />
      <ScrollToTopButton />

    </div>
  );
};

export default Contact;

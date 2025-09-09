// app/page.tsx
"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({
      fullName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-body relative overflow-hidden">
      <Helmet>
        <title>Contact — TryzenIQ</title>
        <meta
          name="description"
          content="Discover AI-powered solutions for every industry: automation, analytics, security, and more. Transform your business with TryzenIQ."
        />
      </Helmet>

      <Navbar />

      <main className="pt-28 md:pt-32">
        {/* Hero */}
        <section className="pt-24 md:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-extralight mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display" }}
            >
              Contact{" "}
              <span className="hero-text-gradient special-font">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with AI automation? We're here to
              help you get started and answer any questions you might have.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* Left: Contact Form */}
              <div className="lg:col-span-2 bg-zinc-900/90 border border-zinc-800 p-6 md:p-10 rounded-3xl shadow-2xl flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                  Send us a Message
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
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
                          className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#8caac8] focus:ring-2 focus:ring-[#8caac8]/20 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Your last name"
                          required
                          className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#8caac8] focus:ring-2 focus:ring-[#8caac8]/20 outline-none transition-all"
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
                          className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#8caac8] focus:ring-2 focus:ring-[#8caac8]/20 outline-none transition-all"
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
                          className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#8caac8] focus:ring-2 focus:ring-[#8caac8]/20 outline-none transition-all"
                        />
                      </div>
                    </div>

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
                        className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#8caac8] focus:ring-2 focus:ring-[#8caac8]/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your business and how we can help..."
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 min-h-[50px] focus:border-[#8caac8] focus:ring-2 focus:ring-[#8caac8]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="group relative flex items-center justify-between border border-gray-500 text-white font-semibold pl-6 pr-14 py-4 rounded-full overflow-hidden transition-all duration-700 ease-in-out"
                    >
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#8caac8] text-black z-10 transition-transform duration-700 ease-in-out group-hover:scale-[45]" />
                      <span className="relative z-20 group-hover:text-black">
                        Send Message
                      </span>
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
                        <Send className="w-4 h-4 text-black" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Right: Contact Info */}
              <div className="flex flex-col gap-2 justify-between h-full">
                {[
                  {
                    icon: <Mail className="w-6 h-6 text-black" />,
                    title: "Email Us",
                    text: "tryzeniq@gmail.com",
                    link: "mailto:tryzeniq@gmail.com",
                    linkText: "Send Email →",
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-black" />,
                    title: "Call Us",
                    text: "+91 63591 85945",
                    link: "tel:+916359185945",
                    linkText: "Call Now →",
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-black" />,
                    title: "Visit Us",
                    text: "205, earth plaza, Chapprabhatta, Ganeshpura, Surat, Gujarat 394520",
                    link: "https://www.google.com/maps/dir/21.2596747,72.8309741/7R5J%2BR9V,+Chapprabhatta,+Ganeshpura,+Surat,+Gujarat+394520/@21.2596887,72.8285513,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be04939b2ef6a81:0x26227e3f62ef1fbe!2m2!1d72.8310308!2d21.2595831?entry=ttu",
                    linkText: "Get Directions →",
                  },

                  {
                    icon: <Clock className="w-6 h-6 text-black" />,
                    title: "Business Hours",
                    text: "Mon - Fri: 9am - 6pm IST\nWeekend support available",
                    link: "#",
                    linkText: "Schedule Visit →",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-zinc-900/90 border border-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#8caac8] flex items-center justify-center rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 whitespace-pre-line">
                        {item.text}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        className="text-[#8caac8] text-sm font-medium inline-flex items-center mt-2 "
                      >
                        {item.linkText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className=" text-4xl md:text-5xl font-extralight  mb-8 text-center text-white font-serif ">
              Find Us on the {""}
              <span className="hero-text-gradient special-font">Map</span>
            </h2>
            <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.269692152255!2d72.8285513!3d21.2596887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04939b2ef6a81%3A0x26227e3f62ef1fbe!2s7R5J%2BR9V%2C%20Chapprabhatta%2C%20Ganeshpura%2C%20Surat%2C%20Gujarat%20394520!5e0!3m2!1sen!2sin!4v1725908440000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;

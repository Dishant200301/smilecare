import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: "Botox & Skin Care", path: "/botox-skincare" },
      { name: "Clinics & Dentist", path: "/clinics-dentist" },
      { name: "Gym & Health Coach", path: "/gym-health-coach" },
      { name: "Business Consultation", path: "/business-consultation" },
      { name: "IT & SAAS", path: "/it-saas" },
    ],
    Solutions: [
      { name: "Salons & Spa", path: "/salons-spa" },
      { name: "Real Estate", path: "/real-estate-agents" },
      { name: "Therapists", path: "/therapists-counselors" },
      { name: "Insurance", path: "/insurance" },
    ],
  };

  const contactInfo = [
    { icon: Mail, text: "hello@tryzeniq.com", color: "text-[#8caac8]" },
    { icon: Phone, text: "+1 (555) 123-4567", color: "text-[#8caac8]" },
    { icon: MapPin, text: "San Francisco, CA", color: "text-[#8caac8]" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-[#8caac8]" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-[#8caac8]" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-[#8caac8]" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-[#8caac8]" },
  ];

  return (
    <section className="pt-12 md:pt-16 bg-black">
      <footer className="relative border-t bg-black shadow-xl">
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-cyan-900/5 animate-pulse" />

        <div className="relative px-6 lg:px-12 pt-12 pb-10 max-w-7xl mx-auto">
          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:ml-[30px]">
            
            {/* Company Info */}
            <div className="space-y-6">
              <a href="/" className="inline-flex items-center space-x-2 group">
                <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  TryzenIQ
                </span>
              </a>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                AI assistant for small businesses. Capture more leads, book more
                appointments, send reminders, sync with your CRM, and get
                actionable analytics — all automated.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`p-2 text-gray-400 ${social.color} transition bg-gray-800/70 hover:bg-gray-700 rounded-full hover:scale-110`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services + Solutions side by side (even on mobile) */}
            <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-2 lg:ml-[50px]">
              {/* Services */}
              <div className="space-y-6">
                <h3 className="text-white font-semibold text-lg relative pb-2">
                  Services
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#8caac8] rounded-full" />
                </h3>
                <ul className="space-y-3">
                  {footerLinks.Services.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.path}
                        className="text-gray-300 hover:text-cyan-400 transition flex items-center gap-2 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="space-y-6 lg:ml-[50px]">
                <h3 className="text-white font-semibold text-lg relative pb-2">
                  Solutions
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#8caac8] rounded-full" />
                </h3>
                <ul className="space-y-3">
                  {footerLinks.Solutions.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.path}
                        className="text-gray-300 hover:text-cyan-400 transition flex items-center gap-2 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Get in Touch */}
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg relative pb-2">
                Get in Touch
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#8caac8] rounded-full" />
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition cursor-pointer"
                  >
                    <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                      <c.icon className={`w-5 h-5 ${c.color}`} />
                    </div>
                    <span className="text-sm">{c.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-6 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 TryzenIQ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

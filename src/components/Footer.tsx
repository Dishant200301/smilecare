import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "../../public/svgviewer-png-output.svg";

const Footer = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const location = useLocation();

  const navItems = [{ name: "Home", path: "/" }];

  useEffect(() => {
    const current = navItems.find((item) => item.path === location.pathname);
    if (current) setActiveItem(current.name);
  }, [location.pathname]);

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
    <section className="pt-12 md:pt-16 bg-black relative">
      <footer className="relative border-t border-gray-800">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-cyan-900/5 animate-pulse" />

        <div className="relative px-6 lg:px-12 pb-8 max-w-7xl mx-auto">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Logo + About */}
            <div>
              <Link to="/" onClick={() => setActiveItem("Home")}>
                <img
                  src={Logo}
                  alt="TryzenIQ Logo"
                  className="h-32 w-auto invert"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed tracking-wider">
                AI assistant for small businesses. Capture more leads, book more
                appointments, send reminders, sync with your CRM, and get
                actionable analytics — all automated.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-2 text-gray-400 ${social.color} transition bg-gray-800/70 hover:bg-gray-700 rounded-full hover:scale-110`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-5 mt-12">
              <h3 className="text-white font-semibold text-lg relative pb-2">
                Services
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#8caac8] rounded-full" />
              </h3>
              <ul className="space-y-2">
                {footerLinks.Services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-5  mt-12">
              <h3 className="text-white font-semibold text-lg relative pb-2">
                Solutions
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#8caac8] rounded-full" />
              </h3>
              <ul className="space-y-2">
                {footerLinks.Solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="space-y-5 mt-12">
              <h3 className="text-white font-semibold text-lg relative pb-2">
                Get in Touch
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#8caac8] rounded-full" />
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition cursor-pointer"
                    >
                      <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                        <Icon className={`w-5 h-5 ${c.color}`} />
                      </div>
                      <span className="text-sm">{c.text}</span>
                    </li>
                  );
                })}
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

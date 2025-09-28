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
// X icon component
const XIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    className={className}
  >
    <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
  </svg>
);
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
      { name: "Botox & Skin Care", path: "/services/botox-skincare" },
      { name: "Clinics & Dentist", path: "/services/clinics-dentist" },
      { name: "Gym & Health Coach", path: "/services/gym-health-coach" },
      {
        name: "Business Consultation",
        path: "/services/business-consultation",
      },
      { name: "IT & SAAS", path: "/services/it-saas" },
    ],
    Solutions: [
      { name: "Salons & Spa", path: "/services/salons-spa" },
      { name: "Real Estate", path: "/services/real-estate-agents" },
      { name: "Therapists", path: "/services/therapists-counselors" },
      { name: "Insurance", path: "/services/insurance" },
    ],
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "hello@tryzeniq.com",
      color: "text-[#8caac8]",
      href: "mailto:hello@tryzeniq.com",
    },
    {
      icon: Phone,
      text: "+91 82381 69574",
      color: "text-[#8caac8]",
      href: "tel:+918238169574",
    },
    {
      icon: MapPin,
      text: "205, Earth plaza, Chapprabhatta",
      color: "text-[#8caac8]",
      href: "https://www.google.com/maps/dir/21.2596747,72.8309741/7R5J%2BR9V,+Chapprabhatta,+Ganeshpura,+Surat,+Gujarat+394520/@21.2596887,72.8285513,17z",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61576569900601",
      label: "Facebook",
      color: "hover:text-[#8caac8]",
    },
    { icon: XIcon, href: "#", label: "X", color: "hover:text-[#8caac8]" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/tryzen_iq/#",
      label: "Instagram",
      color: "hover:text-[#8caac8]",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/tryzeniq",
      label: "LinkedIn",
      color: "hover:text-[#8caac8]",
    },
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
                <div className="mb-[-20px]">
                  <img
                    src={Logo}
                    alt="TryzenIQ Logo"
                    className="h-32 w-auto invert"
                  />
                </div>
              </Link>

              <p className="text-gray-400 text-sm tracking-[1px] leading-relaxed">
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
                      className={`p-2 ${social.color} transition bg-[#8caac8] text-black hover:bg-[#8caac8] hover:text-black rounded-sm hover:scale-110 `}
                    >
                      <Icon className="w-5 h-5" />
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
                      className="flex items-center gap-3 text-gray-300 transition"
                    >
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 hover:text-white"
                      >
                        <div className="w-9 h-9 text-black bg-[#8caac8] rounded-sm flex items-center justify-center transition">
                          <Icon className={`w-5 h-5 text-black ${c.color}`} />
                        </div>
                        <span className="font-playfair font-extralight">
                          {c.text}
                        </span>
                      </a>
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

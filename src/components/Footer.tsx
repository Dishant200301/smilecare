import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
// Assuming Logo is a component or a direct path to an SVG
// For this example, let's assume it's an SVG that needs inversion
import Logo from "../../public/svgviewer-png-output.svg"; // Adjust path as needed

// X icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    className={className}
    fill="currentColor" // Ensures the icon inherits text color
  >
    <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
  </svg>
);

const Footer = () => {
  const [activeItem, setActiveItem] = useState("Home"); // Not directly used in footer, but kept from original
  const location = useLocation();

  const navItems = [{ name: "Home", path: "/" }]; // Not directly used in footer, but kept from original

  useEffect(() => {
    const current = navItems.find((item) => item.path === location.pathname);
    if (current) setActiveItem(current.name);
  }, [location.pathname, navItems]); // Added navItems to dependency array

  const footerLinks = {
    Services: [
      { name: "Botox & Skin Care", path: "/business-category/botox-skincare" },
      { name: "Clinics & Dentist", path: "/business-category/clinics-dentist" },
      { name: "Gym & Health Coach", path: "/business-category/gym-health-coach" },
      {
        name: "Business Consultation",
        path: "/business-category/business-consultation",
      },
      { name: "IT & SAAS", path: "/business-category/it-saas" },
    ],
    Solutions: [
      { name: "Salons & Spa", path: "/business-category/salons-spa" },
      { name: "Real Estate", path: "/business-category/real-estate-agents" },
      { name: "Therapists", path: "/business-category/therapists-counselors" },
      { name: "Insurance", path: "/business-category/insurance" },
    ],
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "hello@tryzeniq.com",
      href: "mailto:hello@tryzeniq.com",
    },
    {
      icon: Phone,
      text: "+91 82381 69574",
      href: "tel:+918238169574",
    },
    {
      icon: MapPin,
      text: "205, Earth plaza, Chapprabhatta",
      href: "https://www.google.com/maps/dir/21.2596747,72.8309741/7R5J%2BR9V,+Chapprabhatta,+Ganeshpura,+Surat,+Gujarat+394520/@21.2596887,72.8285513,17z",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61576569900601",
      label: "Facebook",
    },
    { icon: XIcon, href: "#", label: "X" }, // Consider using an actual Twitter/X link
    {
      icon: Instagram,
      href: "https://www.instagram.com/tryzen_iq/#",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/tryzeniq",
      label: "LinkedIn",
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Newsletter subscribed!");
    alert("Thanks for subscribing to our newsletter!");
  };

  return (
    <section className="pt-12 md:pt-16 bg-black relative">
      <footer className="relative border-t border-gray-800/60">
        {/* Removed animated background gradient for a cleaner Beam.ai look */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-cyan-900/5 animate-pulse" /> */}

        <div className="relative px-6 lg:px-12 pb-8 max-w-7xl mx-auto z-10">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12">
            {/* Column 1: Company Info */}
            <div className="flex flex-col">
              <Link to="/" onClick={() => setActiveItem("Home")}>
              <div className="mb-[-30px] mt-[-40px]">
              {/* Assuming Logo is a black SVG that needs to be inverted for dark background */}
                  <img
                    src={Logo}
                    alt="TryzenIQ Logo"
                    className="h-28 w-auto filter invert brightness-125" // Adjust height and invert for visibility
                  />
                </div>
              </Link>

              <p className="text-gray-300 text-sm tracking-wide leading-relaxed mt-4">
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
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-gray-400 hover:text-white transition-colors duration-200
                                 w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:border-white" // Subtle border and hover
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Services Quick Links */}
            <div className="space-y-5">
              <h3 className="text-white font-semibold text-lg relative pb-2">
                Services
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-white rounded-full" />
              </h3>
              <ul className="space-y-2">
                {footerLinks.Services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-200 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Solutions Quick Links */}
            <div className="space-y-5">
              <h3 className="text-white font-semibold text-lg relative pb-2">
                Solutions
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-white rounded-full" />
              </h3>
              <ul className="space-y-2">
                {footerLinks.Solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-200 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter Subscription */}
            <div className="space-y-5">
              <h3 className="text-white font-semibold text-lg relative pb-2">
                Subscribe to our Newsletter
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-white rounded-full" />
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Stay up to date with our latest news and offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email for newsletter"
                  className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-white to-white text-black font-semibold
                             hover:from-white hover:to-white transition-all duration-300 shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section: Copyright */}
          <div className="border-t border-gray-800/60 mt-12 pt-6 text-center">
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
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: 'Botox & Skin Care', path: '/botox-skincare' },
      { name: 'Clinics & Dentist', path: '/clinics-dentist' },
      { name: 'Gym & Health Coach', path: '/gym-health-coach' },
      { name: 'Business Consultation', path: '/business-consultation' },
      { name: 'IT & SAAS', path: '/it-saas' },
    ],
    Solutions: [
      { name: 'Salons & Spa', path: '/salons-spa' },
      { name: 'Real Estate', path: '/real-estate-agents' },
      { name: 'Therapists', path: '/therapists-counselors' },
      { name: 'Insurance', path: '/insurance' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400 hover:shadow-blue-400/30' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400 hover:shadow-sky-400/30' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400 hover:shadow-pink-400/30' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500 hover:shadow-blue-500/30' },
  ];
{/* <footer className="w-full px-4 mb-6">
<div className="max-w-7xl mx-auto bg-black rounded-2xl border border-gray-800 shadow-lg overflow-hidden px-6 py-12"> */}
  return (
    <section className='pt-13'>
  <footer className="relative  px-4 my-5 mx-5 rounded-3xl border border-gray-800 overflow-hidden bg-[#202020]"
    >

      <div className="relative pt-[84px] bg-[#202020] max-w-7xl px-6  mx-auto  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <a href="/" className="inline-flex items-center space-x-3 group">
              {/* <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div> */}
              <div className="text-3xl font-bold bg-white bg-clip-text text-transparent">
                TryzenIQ
              </div>
            </a>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed max-w-md">
              AI assistant for small businesses. Capture more leads, book more appointments, send reminders,
              sync with your CRM, and get actionable analytics — all automated.
            </p>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Send className="w-5 h-5 text-cyan-400" />
                Stay Updated
              </h3>
              <div className="w-full max-w-md">
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-12 px-4 pr-32 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  />
                  <button 
                    className="absolute right-2 top-2 h-8 px-4 text-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">Get product updates and tips. No spam, unsubscribe anytime.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-sm">hello@tryzeniq.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-white font-semibold text-lg relative">
                {category}
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 mr-0 group-hover:mr-2" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm flex items-center gap-2">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
              &copy; 2025 TryzenIQ. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm hidden md:block">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`group relative p-3 text-gray-400 ${social.color} transition-all duration-300 bg-gray-900/50 hover:bg-gray-800 rounded-full backdrop-blur-sm hover:shadow-lg transform hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {social.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="mt-8 h-px bg-[#202020] to-transparent" />
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

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
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="text-2xl font-bold hero-text-gradient">
                ZENIQ
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform your business with AI automation. We help companies streamline operations, 
              boost revenue, and provide 24/7 customer service through intelligent automation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@zeniq.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 ZenIQ. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 text-muted-foreground hover:text-primary transition-colors bg-secondary hover:bg-primary/10 rounded-lg"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// app/contact/page.tsx (Main Contact Page)
'use client'; // Assuming Next.js App Router and client component

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send, Calendar, Briefcase, LifeBuoy } from 'lucide-react'; // Added Calendar, Briefcase, LifeBuoy for other sections
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@zeniq.ai",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "123 Innovation Street, Suite 100"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8am - 6pm PST",
      description: "Weekend support available for enterprise clients"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
    alert('Thank you for your message! We will get back to you shortly.');
    // You might clear the form or show a success message
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      
      <main className="pt-24 md:pt-32 bg-black"> {/* Adjust padding for sticky nav */}
        {/* Hero Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-black-to-br from-background via-card to-background"> {/* Added subtle background gradient */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimateOnScroll animation="fade-in-up" delay={0}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"> {/* Larger text, tighter line-height */}
              Contact <span className="hero-text-gradient">Us</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={150}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed"> {/* Slightly larger text, improved line-height */}
                Ready to transform your business with AI automation? We're here to help you 
                get started and answer any questions you might have.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20"> {/* Reduced gap slightly for compactness */}
              {contactInfo.map((info, index) => (
                <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100 + 300}>
                  <div 
                    className="
                      bg-card border border-border rounded-2xl p-6 md:p-8 text-center h-full flex flex-col items-center justify-center
                      transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 {/* Added hover effects, full height, flex for centering */}
                    "
                    role="listitem"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-full inline-flex items-center justify-center"> {/* Larger, rounded icon container */}
                        <info.icon className="w-7 h-7 text-primary" aria-hidden="true" /> {/* Slightly smaller icon inside larger container */}
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{info.title}</h3>
                    <p className="text-primary font-body font-medium mb-2 break-words">{info.details}</p> {/* break-words for long details */}
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{info.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Contact Form & Additional Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"> {/* Adjusted gap */}
              {/* Contact Form */}
              <AnimateOnScroll animation="slide-in-left" delay={500}>
                <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-xl"> {/* Rounded-3xl, increased padding, added stronger shadow */}
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 hero-text-gradient"> {/* Larger heading, more bottom margin */}
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-body font-medium mb-2 text-muted-foreground">First Name</label>
                        <Input id="firstName" placeholder="John" required className="py-2.5 px-4" /> {/* Slightly taller input */}
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-body font-medium mb-2 text-muted-foreground">Last Name</label>
                        <Input id="lastName" placeholder="Doe" required className="py-2.5 px-4" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-body font-medium mb-2 text-muted-foreground">Email</label>
                      <Input id="email" type="email" placeholder="john@example.com" required className="py-2.5 px-4" />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-body font-medium mb-2 text-muted-foreground">Phone</label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="py-2.5 px-4" />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-body font-medium mb-2 text-muted-foreground">Company</label>
                      <Input id="company" placeholder="Your Company Name" className="py-2.5 px-4" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-body font-medium mb-2 text-muted-foreground">Message</label>
                      <Textarea 
                        id="message"
                        placeholder="Tell us about your business and how we can help..." 
                        rows={6}
                        required 
                        className="py-2.5 px-4 min-h-[120px]" // Min-height for consistency
                      />
                    </div>
                    
                    <Button type="submit" className="w-full group bg-white text-black hover:bg-[#eaeaea]">
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </AnimateOnScroll>

              {/* Additional Info Cards */}
              <div className="space-y-6 lg:space-y-8"> {/* Adjusted space-y */}
                <AnimateOnScroll animation="slide-in-right" delay={600}>
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm {/* Added shadow, slightly reduced padding */}
                    transition-all duration-300 ease-in-out hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full mr-3">
                        <Calendar className="w-6 h-6 text-primary" /> {/* New icon */}
                      </div>
                      <h3 className="text-xl font-heading font-semibold hero-text-gradient">
                        Schedule a Free Consultation
                      </h3>
                    </div>
                    <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                      Book a 30-minute consultation with our experts to discuss your 
                      business needs and see how our AI automation can help you grow.
                    </p>
                    <Button variant="zeniq-primary" size="zeniq-lg" className="w-full">
                      Book Free Consultation
                    </Button>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="slide-in-right" delay={700}>
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm
                    transition-all duration-300 ease-in-out hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full mr-3">
                        <Briefcase className="w-6 h-6 text-primary" /> {/* New icon */}
                      </div>
                      <h3 className="text-xl font-heading font-semibold hero-text-gradient">
                        Enterprise Sales
                      </h3>
                    </div>
                    <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                      Looking for enterprise solutions? Our dedicated sales team can 
                      help you with custom pricing and implementation plans.
                    </p>
                    <Button variant="zeniq-outline" size="zeniq-lg" className="w-full">
                      Contact Sales Team
                    </Button>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="slide-in-right" delay={800}>
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm
                    transition-all duration-300 ease-in-out hover:shadow-md ">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full mr-3">
                        <LifeBuoy className="w-6 h-6 text-primary" /> {/* New icon */}
                      </div>
                      <h3 className="text-xl font-heading font-semibold hero-text-gradient">
                        Technical Support
                      </h3>
                    </div>
                    <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                      Need help with your existing ZenIQ setup? Our technical support 
                      team is here to assist you.
                    </p>
                    <Button variant="zeniq-outline" size="zeniq-lg" className="w-full">
                      Get Support
                    </Button>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
       
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Scissors, Calendar, MessageSquare, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LightRaySection from '@/components/LightRaySection';
import ScheduleButton from '@/components/ScheduleButton';
import DemoButton from '@/components/DemoButton';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const SalonsSpa = () => {
  const features = [
    {
      icon: Calendar,
      title: "Advanced Booking System",
      description: "Multi-service scheduling with staff availability, treatment duration, and room management"
    },
    {
      icon: MessageSquare,
      title: "Client Communication Suite",
      description: "Automated appointment reminders, aftercare instructions, and promotional campaigns"
    },
    {
      icon: Users,
      title: "Staff & Resource Management",
      description: "Intelligent staff scheduling, performance tracking, and resource optimization"
    },
    {
      icon: Clock,
      title: "24/7 Booking Assistant",
      description: "AI-powered booking system handling inquiries, scheduling, and service recommendations"
    }
  ];

  const benefits = [
    "Increase bookings by 80%",
    "Reduce no-shows by 70%",
    "Improve client retention by 85%",
    "Save 20+ hours per week on admin",
    "Boost service upsells by 50%",
    "Enhance staff efficiency"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
              <title>Salon & Spa Automation — TryzenIQ</title>
              <meta name="description" content="Discover AI-powered solutions for every industry: automation, analytics, security, and more. Transform your business with TryzenIQ." />
              <meta property="og:title" content="Solutions — TryzenIQ" />
              <meta property="og:description" content="AI solutions for automation, analytics, and business growth. Trusted by leading industries." />
              <meta property="og:type" content="website" />
            </Helmet>
      <Navbar />
      
      <main className="pt-16 bg-black">
        {/* Hero Section */}
        <LightRaySection/>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="hero-text-gradient">Salon</span> & Spa Automation
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Transform your beauty business with AI-powered booking management, 
                  client communication, and staff optimization systems.
                </p>
                <ScheduleButton label="Schedule a Demo" to="/contact" />              

              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=60"
                  alt="Salon and spa services"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perfect for <span className="hero-text-gradient">Beauty Businesses</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Specialized automation tools designed to enhance your salon or spa operations and client experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="service-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Grow Your <span className="hero-text-gradient">Beauty</span> Business
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our salon and spa automation platform helps beauty businesses deliver exceptional 
                  client experiences while maximizing efficiency and profitability.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="stats-card">
                <h3 className="text-2xl font-bold hero-text-gradient mb-6">
                  Beauty Business Results
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>Booking Increase</span>
                    <span className="text-2xl font-bold text-green-400">+80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>No-Show Reduction</span>
                    <span className="text-2xl font-bold text-green-400">-70%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Client Retention</span>
                    <span className="text-2xl font-bold text-green-400">+85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Service Upsells</span>
                    <span className="text-2xl font-bold text-green-400">+50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-background border border-border rounded-2xl p-12 glow-effect">
              <Scissors className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Beautify Your <span className="hero-text-gradient">Business Operations</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Join successful salons and spas that have automated their operations and enhanced client satisfaction.
              </p>
              <DemoButton label='Start Free Trial'/>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />

    </div>
  );
};

export default SalonsSpa;
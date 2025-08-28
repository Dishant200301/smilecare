import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Users, Headphones, Rocket, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LightRaySection from '@/components/LightRaySection';
import DemoButton from '@/components/DemoButton';
import ScheduleButton from '@/components/ScheduleButton';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const ITSaaS = () => {
  const features = [
    {
      icon: Users,
      title: "Automated User Onboarding",
      description: "Streamlined user activation flows with AI-guided setup and personalized tutorials"
    },
    {
      icon: Headphones,
      title: "Intelligent Customer Support",
      description: "24/7 AI support bot handling tickets, documentation, and escalation management"
    },
    {
      icon: Rocket,
      title: "Product Adoption Analytics",
      description: "Real-time user behavior tracking and automated engagement campaigns"
    },
    {
      icon: Clock,
      title: "Subscription Management",
      description: "Automated billing, renewal reminders, and churn prevention workflows"
    }
  ];

  const benefits = [
    "Reduce support tickets by 80%",
    "Improve user onboarding completion by 95%",
    "Increase customer retention by 70%",
    "Save 30+ hours per week on customer success",
    "Boost feature adoption by 85%",
    "Enhance product stickiness"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
              <title>IT & SaaS Customer Success Automation — TryzenIQ</title>
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
                  <span className="hero-text-gradient">IT & SaaS</span> Customer Success Automation
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Scale your SaaS business with AI-powered customer onboarding, 
                  support automation, and intelligent user engagement systems.
                </p>
                <ScheduleButton label="Schedule a Demo" to="/contact" />              

              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60"
                  alt="IT and SaaS services"
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
                Built for <span className="hero-text-gradient">SaaS Success</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive automation tools designed to accelerate your SaaS growth and enhance customer experience.
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="stats-card">
                <h3 className="text-2xl font-bold hero-text-gradient mb-6">
                  SaaS Growth Metrics
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>Support Ticket Reduction</span>
                    <span className="text-2xl font-bold text-green-400">-80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Onboarding Completion</span>
                    <span className="text-2xl font-bold text-green-400">+95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Customer Retention</span>
                    <span className="text-2xl font-bold text-green-400">+70%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Feature Adoption</span>
                    <span className="text-2xl font-bold text-green-400">+85%</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Scale Your <span className="hero-text-gradient">SaaS</span> Efficiently
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our SaaS automation platform helps technology companies deliver exceptional 
                  customer experiences while scaling efficiently and reducing operational overhead.
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-background border border-border rounded-2xl p-12 glow-effect">
              <Code className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Accelerate Your <span className="hero-text-gradient">SaaS Growth</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Join successful SaaS companies that have automated their customer success and scaled efficiently.
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

export default ITSaaS;
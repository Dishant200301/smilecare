import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bot, Stethoscope, Dumbbell, Briefcase, Code, Scissors, Home, Heart, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Botox & Skin Care",
      description: "AI-powered appointment booking and customer engagement for beauty clinics",
      link: "/botox-skincare",
      features: ["Automated Booking", "Customer Reminders", "Treatment Tracking"]
    },
    {
      icon: Stethoscope,
      title: "Clinics and Dentist",
      description: "Automated patient management and appointment scheduling systems",
      link: "/clinics-dentist",
      features: ["Patient Management", "Appointment Scheduling", "Medical Records"]
    },
    {
      icon: Dumbbell,
      title: "Gym & Health Coach",
      description: "Member management and fitness consultation automation",
      link: "/gym-health-coach",
      features: ["Member Management", "Workout Tracking", "Nutrition Plans"]
    },
    {
      icon: Briefcase,
      title: "Business Consultation",
      description: "Professional consulting services with AI-driven client management",
      link: "/business-consultation",
      features: ["Client Management", "Project Tracking", "Automated Reports"]
    },
    {
      icon: Code,
      title: "IT & SAAS Services",
      description: "Technology solutions with automated customer support and onboarding",
      link: "/it-saas",
      features: ["Customer Support", "User Onboarding", "Technical Documentation"]
    },
    {
      icon: Scissors,
      title: "Salons & Spa",
      description: "Beauty service automation with smart booking and customer care",
      link: "/salons-spa",
      features: ["Smart Booking", "Service Management", "Customer Care"]
    },
    {
      icon: Home,
      title: "Real Estate Agents",
      description: "Property showing automation and lead management systems",
      link: "/real-estate-agents",
      features: ["Lead Management", "Property Listings", "Client Communication"]
    },
    {
      icon: Heart,
      title: "Therapists & Counselors",
      description: "Mental health practice automation with secure patient communications",
      link: "/therapists-counselors",
      features: ["Secure Communications", "Session Scheduling", "Progress Tracking"]
    },
    {
      icon: Wrench,
      title: "Insurance & Financial",
      description: "Financial services automation with claim processing and client management",
      link: "/insurance",
      features: ["Claim Processing", "Client Management", "Policy Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="hero-text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI automation solutions tailored for every industry. 
              Transform your business operations with our specialized services.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="service-card group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mr-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={service.link}>
                    <Button className="btn-primary w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
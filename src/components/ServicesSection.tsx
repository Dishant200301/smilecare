import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Stethoscope, Dumbbell, Briefcase, Code, Scissors, Home, Heart, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Botox & Skin Care",
      description: "AI-powered appointment booking and customer engagement for beauty clinics",
      link: "/botox-skincare",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=60"
    },
    {
      icon: Stethoscope,
      title: "Clinics and Dentist",
      description: "Automated patient management and appointment scheduling systems",
      link: "/clinics-dentist",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&auto=format&fit=crop&q=60"
    },
    {
      icon: Dumbbell,
      title: "Gym & Health Coach",
      description: "Member management and fitness consultation automation",
      link: "/gym-health-coach",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60"
    },
    {
      icon: Briefcase,
      title: "Business Consultation",
      description: "Professional consulting services with AI-driven client management",
      link: "/business-consultation",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&auto=format&fit=crop&q=60"
    },
    {
      icon: Code,
      title: "IT & SAAS Services",
      description: "Technology solutions with automated customer support and onboarding",
      link: "/it-saas",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=60"
    },
    {
      icon: Scissors,
      title: "Salons & Spa",
      description: "Beauty service automation with smart booking and customer care",
      link: "/salons-spa",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=60"
    },
    {
      icon: Home,
      title: "Real Estate Agents",
      description: "Property showing automation and lead management systems",
      link: "/real-estate-agents",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60"
    },
    {
      icon: Heart,
      title: "Therapists & Counselors",
      description: "Mental health practice automation with secure patient communications",
      link: "/therapists-counselors",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60"
    },
    {
      icon: Wrench,
      title: "Insurance & Financial",
      description: "Financial services automation with claim processing and client management",
      link: "/insurance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="hero-text-gradient">All In One Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Where We Help To Automate This Business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-6 h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 p-2 bg-primary/20 backdrop-blur-sm rounded-lg">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <Link to={service.link}>
                  <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary">
                    View Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-2xl p-8 glow-effect">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 hero-text-gradient">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of businesses that have automated their operations and increased their revenue with our AI solutions.
            </p>
            <Button className="btn-primary">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
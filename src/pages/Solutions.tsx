import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bot, Calendar, MessageSquare, BarChart3, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Solutions = () => {
  const solutions = [
    {
      icon: Bot,
      title: "AI Virtual Assistant",
      description: "24/7 intelligent customer service that never sleeps",
      benefits: [
        "Handles 80% of customer inquiries automatically",
        "Reduces response time from hours to seconds",
        "Available in multiple languages",
        "Learns from every interaction"
      ]
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated appointment booking and management system",
      benefits: [
        "Reduces no-shows by 45% with smart reminders",
        "Optimizes calendar for maximum efficiency",
        "Handles rescheduling automatically",
        "Integrates with existing calendar systems"
      ]
    },
    {
      icon: MessageSquare,
      title: "Automated Communication",
      description: "Personalized messaging across all channels",
      benefits: [
        "SMS, email, and voice message automation",
        "Personalized content for each customer",
        "Follow-up sequences that convert",
        "Multi-channel campaign management"
      ]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Data-driven insights to grow your business",
      benefits: [
        "Real-time performance dashboards",
        "Customer behavior analysis",
        "Revenue optimization recommendations",
        "Predictive analytics for forecasting"
      ]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security for your business data",
      benefits: [
        "End-to-end encryption",
        "GDPR and HIPAA compliance",
        "Regular security audits",
        "Secure data backup and recovery"
      ]
    },
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Get up and running in minutes, not months",
      benefits: [
        "5-minute setup process",
        "No technical expertise required",
        "Seamless integration with existing tools",
        "Dedicated onboarding support"
      ]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "Patient management, appointment scheduling, and medical communication automation",
      stats: "87% reduction in missed appointments"
    },
    {
      name: "Beauty & Wellness", 
      description: "Treatment booking, customer care, and service reminders for salons and spas",
      stats: "65% increase in repeat bookings"
    },
    {
      name: "Professional Services",
      description: "Client management, consultation booking, and follow-up automation",
      stats: "52% improvement in client retention"
    },
    {
      name: "Fitness & Sports",
      description: "Member management, class booking, and wellness tracking",
      stats: "73% increase in member engagement"
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
              Powerful <span className="hero-text-gradient">Solutions</span> for Every Business
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive AI automation platform adapts to your industry needs, 
              delivering measurable results that transform your business operations.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="service-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <solution.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{solution.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6">{solution.description}</p>

                  <div className="space-y-3">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by <span className="hero-text-gradient">Leading Industries</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our solutions are specifically designed to meet the unique challenges 
                and requirements of different industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <h3 className="text-2xl font-semibold mb-4 hero-text-gradient">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {industry.stats}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Average improvement across our clients
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card border border-border rounded-2xl p-12 glow-effect">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your <span className="hero-text-gradient">Business</span>?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Join thousands of businesses that have automated their operations and 
                increased their revenue with our AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button className="btn-primary">
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" className="btn-outline">
                  View Live Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
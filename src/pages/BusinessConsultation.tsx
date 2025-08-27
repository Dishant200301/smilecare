import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, Calendar, FileText, BarChart3, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LightRaySection from '@/components/LightRaySection';

const BusinessConsultation = () => {
  const features = [
    {
      icon: Calendar,
      title: "Intelligent Consultation Scheduling",
      description: "AI-powered booking system that matches clients with the right consultant and optimal time slots"
    },
    {
      icon: FileText,
      title: "Automated Project Management",
      description: "Streamlined proposal generation, contract management, and project milestone tracking"
    },
    {
      icon: BarChart3,
      title: "Client Progress Analytics",
      description: "Real-time project dashboards, ROI tracking, and automated progress reports for clients"
    },
    {
      icon: Clock,
      title: "24/7 Client Support Portal",
      description: "AI assistant handling initial inquiries, scheduling requests, and providing project updates"
    }
  ];

  const benefits = [
    "Increase consultation bookings by 90%",
    "Reduce project delivery time by 40%",
    "Improve client satisfaction by 95%",
    "Save 25+ hours per week on admin tasks",
    "Boost project profitability by 60%",
    "Enhance client communication efficiency"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16 bg-black">
        {/* Hero Section */}
        <LightRaySection/>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="hero-text-gradient">Business Consultation</span> Automation
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Streamline your consulting practice with AI-powered client management, 
                  project automation, and intelligent scheduling systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-primary">
                    Schedule Demo
                  </Button>
                  <Button variant="outline" className="btn-outline">
                    View Case Studies
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&fit=crop&q=60"
                  alt="Business consultation"
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
                Scale Your <span className="hero-text-gradient">Consulting Business</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional automation tools designed to help consultants deliver exceptional results efficiently.
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
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Deliver <span className="hero-text-gradient">Exceptional</span> Results
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our consulting automation platform helps business consultants focus on what they do best - 
                  providing strategic guidance while our AI handles the operational details.
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
                  Consulting Impact
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>Consultation Bookings</span>
                    <span className="text-2xl font-bold text-green-400">+90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Delivery Time</span>
                    <span className="text-2xl font-bold text-green-400">-40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Client Satisfaction</span>
                    <span className="text-2xl font-bold text-green-400">+95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Project Profitability</span>
                    <span className="text-2xl font-bold text-green-400">+60%</span>
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
              <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your <span className="hero-text-gradient">Consulting Practice</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Join leading consultants who have automated their operations and scaled their impact with our platform.
              </p>
              <Button className="btn-primary">
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessConsultation;
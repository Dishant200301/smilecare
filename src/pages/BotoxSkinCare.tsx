import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, Calendar, MessageSquare, BarChart3, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LightRaySection from '@/components/LightRaySection';

const BotoxSkinCare = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Appointment Booking",
      description: "AI-powered scheduling that optimizes your calendar and reduces no-shows by 65%"
    },
    {
      icon: MessageSquare,
      title: "Automated Client Communication",
      description: "Personalized follow-ups, treatment reminders, and aftercare instructions sent automatically"
    },
    {
      icon: BarChart3,
      title: "Treatment Analytics",
      description: "Track client progress, analyze treatment effectiveness, and optimize service offerings"
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description: "AI assistant handles consultations, pricing inquiries, and appointment requests round-the-clock"
    }
  ];

  const benefits = [
    "Increase appointment bookings by 85%",
    "Reduce no-shows by 65%",
    "Improve client retention by 70%",
    "Save 15+ hours per week on admin tasks",
    "Boost treatment upsells by 45%",
    "Enhance client satisfaction scores"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16 bg-black">
        {/* Hero Section */}
        <LightRaySection />
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="hero-text-gradient">Botox</span> & Skin Care Clinic Automation
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Streamline your beauty clinic operations with AI-powered appointment booking, 
                  client management, and automated communication systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-primary">
                    Schedule Demo
                  </Button>
                  <Button variant="outline" className="btn-outline">
                    View Success Stories
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=60"
                  alt="Botox and skincare clinic"
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
                Perfect for <span className="hero-text-gradient">Beauty Clinics</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Specialized features designed to enhance your beauty clinic's efficiency and client experience.
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
                  Success Metrics
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>Appointment Bookings</span>
                    <span className="text-2xl font-bold text-green-400">+85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>No-Show Reduction</span>
                    <span className="text-2xl font-bold text-green-400">-65%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Client Retention</span>
                    <span className="text-2xl font-bold text-green-400">+70%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Treatment Upsells</span>
                    <span className="text-2xl font-bold text-green-400">+45%</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Grow Your <span className="hero-text-gradient">Beauty Business</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our specialized automation platform is designed specifically for botox and skincare clinics, 
                  helping you manage clients, bookings, and treatments more efficiently.
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
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your <span className="hero-text-gradient">Beauty Clinic</span> Today
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Join hundreds of beauty clinics that have automated their operations and increased revenue with our platform.
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

export default BotoxSkinCare;
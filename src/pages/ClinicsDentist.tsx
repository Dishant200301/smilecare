import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Stethoscope, Calendar, FileText, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LightRaySection from '@/components/LightRaySection';

const ClinicsDentist = () => {
  const features = [
    {
      icon: Calendar,
      title: "Advanced Appointment Scheduling",
      description: "Intelligent scheduling system that manages complex appointment types and provider availability"
    },
    {
      icon: FileText,
      title: "Patient Record Management",
      description: "Automated patient intake, medical history tracking, and treatment plan management"
    },
    {
      icon: Users,
      title: "Patient Communication Hub",
      description: "Automated appointment reminders, treatment follow-ups, and health education messages"
    },
    {
      icon: Clock,
      title: "24/7 Patient Support",
      description: "AI-powered patient portal for appointment booking, prescription refills, and general inquiries"
    }
  ];

  const benefits = [
    "Reduce appointment no-shows by 70%",
    "Improve patient satisfaction by 90%",
    "Save 20+ hours per week on admin tasks",
    "Increase treatment compliance by 85%",
    "Streamline insurance processing",
    "Enhance care coordination"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16 bg-black">
        {/* Hero Section */}
        <LightRaySection />
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="hero-text-gradient">Medical Clinic</span> & Dental Practice Automation
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Streamline your healthcare practice with AI-powered patient management, 
                  appointment scheduling, and automated communication systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-primary">
                    Schedule Demo
                  </Button>
                  <Button variant="outline" className="btn-outline">
                    HIPAA Compliance Info
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&auto=format&fit=crop&q=60"
                  alt="Medical clinic"
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
                HIPAA-Compliant <span className="hero-text-gradient">Healthcare Solutions</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Secure, compliant, and efficient automation tools designed specifically for healthcare providers.
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
                  Improve <span className="hero-text-gradient">Patient Care</span> & Efficiency
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our healthcare automation platform helps medical and dental practices provide 
                  better patient care while reducing administrative burden.
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
                  Healthcare Impact
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>No-Show Reduction</span>
                    <span className="text-2xl font-bold text-green-400">-70%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Patient Satisfaction</span>
                    <span className="text-2xl font-bold text-green-400">+90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Admin Time Saved</span>
                    <span className="text-2xl font-bold text-green-400">20+ hrs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Treatment Compliance</span>
                    <span className="text-2xl font-bold text-green-400">+85%</span>
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
              <Stethoscope className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Modernize Your <span className="hero-text-gradient">Healthcare Practice</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Join leading healthcare providers who have transformed their patient care with our HIPAA-compliant automation platform.
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

export default ClinicsDentist;
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Calendar, Shield, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LightRaySection from '@/components/LightRaySection';

const TherapistsCounselors = () => {
  const features = [
    {
      icon: Calendar,
      title: "Secure Session Scheduling",
      description: "HIPAA-compliant booking system with flexible scheduling and automated reminders"
    },
    {
      icon: Shield,
      title: "Privacy-First Communication",
      description: "Encrypted messaging, secure video sessions, and confidential progress tracking"
    },
    {
      icon: MessageSquare,
      title: "Client Progress Monitoring",
      description: "Automated session notes, mood tracking, and treatment outcome analytics"
    },
    {
      icon: Clock,
      title: "24/7 Crisis Support Portal",
      description: "AI-powered emergency resource directory and immediate support contact system"
    }
  ];

  const benefits = [
    "Reduce no-shows by 75%",
    "Improve treatment adherence by 80%",
    "Enhance client engagement by 90%",
    "Save 15+ hours per week on admin",
    "Streamline insurance processing",
    "Maintain HIPAA compliance effortlessly"
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
                  <span className="hero-text-gradient">Therapist</span> & Counselor Practice Automation
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Enhance your mental health practice with secure, HIPAA-compliant automation 
                  for scheduling, client communication, and progress tracking.
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
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60"
                  alt="Therapy and counseling"
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
                HIPAA-Compliant <span className="hero-text-gradient">Mental Health Solutions</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Secure automation tools designed specifically for therapists and counselors to enhance client care.
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
                  Focus on <span className="hero-text-gradient">Healing</span>, Not Admin
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our mental health practice automation platform helps therapists and counselors 
                  spend more time with clients and less time on administrative tasks.
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
                  Practice Outcomes
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>No-Show Reduction</span>
                    <span className="text-2xl font-bold text-green-400">-75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Treatment Adherence</span>
                    <span className="text-2xl font-bold text-green-400">+80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Client Engagement</span>
                    <span className="text-2xl font-bold text-green-400">+90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Admin Time Saved</span>
                    <span className="text-2xl font-bold text-green-400">15+ hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Client Data is <span className="hero-text-gradient">Secure</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                We understand the critical importance of client confidentiality in mental health practice. 
                Our platform is built with the highest security standards and full HIPAA compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">HIPAA Compliant</h3>
                <p className="text-muted-foreground">Full compliance with healthcare privacy regulations</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
                <p className="text-muted-foreground">All communications and data are fully encrypted</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Infrastructure</h3>
                <p className="text-muted-foreground">Bank-level security with regular audits</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card border border-border rounded-2xl p-12 glow-effect">
              <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your <span className="hero-text-gradient">Mental Health Practice</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Join mental health professionals who have enhanced their practice with secure, compliant automation.
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

export default TherapistsCounselors;
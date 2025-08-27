import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, FileText, Calculator, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LightRaySection from '@/components/LightRaySection';

const Insurance = () => {
  const features = [
    {
      icon: FileText,
      title: "Automated Claim Processing",
      description: "AI-powered claim evaluation and processing that reduces processing time by 80%"
    },
    {
      icon: Calculator,
      title: "Smart Policy Management",
      description: "Intelligent policy recommendations and automated renewals for better customer retention"
    },
    {
      icon: Users,
      title: "Customer Service Automation",
      description: "24/7 AI assistant handling customer inquiries and policy questions instantly"
    },
    {
      icon: Clock,
      title: "Real-time Risk Assessment",
      description: "Advanced algorithms for instant risk evaluation and premium calculations"
    }
  ];

  const benefits = [
    "Reduce claim processing time by 80%",
    "Improve customer satisfaction by 95%",
    "Cut operational costs by 60%",
    "Increase policy sales by 45%",
    "24/7 automated customer support",
    "Streamlined compliance reporting"
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
                  <span className="hero-text-gradient">Insurance</span> & Financial Services Automation
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Transform your insurance operations with AI-powered claim processing, 
                  customer service automation, and intelligent policy management.
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
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60"
                  alt="Insurance automation"
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
                Key <span className="hero-text-gradient">Features</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive automation solutions designed specifically for insurance and financial services.
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
                  Transform Your <span className="hero-text-gradient">Insurance Business</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our AI automation platform helps insurance companies streamline operations, 
                  reduce costs, and provide exceptional customer experiences.
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
                  Proven Results
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>Claim Processing Speed</span>
                    <span className="text-2xl font-bold text-green-400">+80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Customer Satisfaction</span>
                    <span className="text-2xl font-bold text-green-400">+95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Operational Costs</span>
                    <span className="text-2xl font-bold text-green-400">-60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Policy Sales</span>
                    <span className="text-2xl font-bold text-green-400">+45%</span>
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
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Modernize Your <span className="hero-text-gradient">Insurance Operations</span>?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Join leading insurance companies that have transformed their operations with our AI automation platform.
              </p>
              <Button className="btn-primary">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Insurance;
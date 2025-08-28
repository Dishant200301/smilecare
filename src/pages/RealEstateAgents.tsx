import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home, Calendar, Search, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LightRaySection from '@/components/LightRaySection';
import ScheduleButton from '@/components/ScheduleButton';
import DemoButton from '@/components/DemoButton';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const RealEstateAgents = () => {
  const features = [
    {
      icon: Search,
      title: "Intelligent Lead Management",
      description: "AI-powered lead scoring, automated follow-ups, and nurture campaigns for maximum conversion"
    },
    {
      icon: Calendar,
      title: "Smart Showing Scheduler",
      description: "Automated property showing coordination with clients, photographers, and other agents"
    },
    {
      icon: TrendingUp,
      title: "Market Analytics Dashboard",
      description: "Real-time market insights, property valuations, and competitive analysis tools"
    },
    {
      icon: Clock,
      title: "24/7 Client Assistant",
      description: "AI chatbot handling property inquiries, scheduling viewings, and providing market information"
    }
  ];

  const benefits = [
    "Increase lead conversion by 85%",
    "Boost property showings by 75%",
    "Improve client response time by 90%",
    "Save 25+ hours per week on admin",
    "Enhance listing visibility by 60%",
    "Streamline transaction management"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
              <title>Real Estate Agent Automation — TryzenIQ</title>
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
                  <span className="hero-text-gradient">Real Estate</span> Agent Automation
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Supercharge your real estate business with AI-powered lead management, 
                  automated showing coordination, and intelligent client communication.
                </p>
                <ScheduleButton label="Schedule a Demo" to="/contact" />              

              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60"
                  alt="Real estate property"
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
                Built for <span className="hero-text-gradient">Real Estate Success</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive automation tools designed to help real estate agents close more deals and serve clients better.
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
                  Real Estate Impact
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>Lead Conversion</span>
                    <span className="text-2xl font-bold text-green-400">+85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Property Showings</span>
                    <span className="text-2xl font-bold text-green-400">+75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Response Time</span>
                    <span className="text-2xl font-bold text-green-400">+90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Listing Visibility</span>
                    <span className="text-2xl font-bold text-green-400">+60%</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Close More <span className="hero-text-gradient">Deals</span> Faster
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our real estate automation platform helps agents focus on building relationships 
                  and closing deals while AI handles lead nurturing and administrative tasks.
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
              <Home className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Elevate Your <span className="hero-text-gradient">Real Estate Business</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Join top-performing real estate agents who have automated their lead management and scaled their business.
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

export default RealEstateAgents;
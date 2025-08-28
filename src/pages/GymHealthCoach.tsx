import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dumbbell, Calendar, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LightRaySection from '@/components/LightRaySection';
import DemoButton from '@/components/DemoButton';
import ScheduleButton from '@/components/ScheduleButton';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const GymHealthCoach = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Class & Session Booking",
      description: "AI-powered scheduling for group classes, personal training, and facility usage optimization"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking & Analytics",
      description: "Automated fitness tracking, goal monitoring, and personalized workout recommendations"
    },
    {
      icon: Users,
      title: "Member Engagement Hub",
      description: "Automated check-ins, workout reminders, and motivational messaging to boost retention"
    },
    {
      icon: Clock,
      title: "24/7 Virtual Coach",
      description: "AI fitness assistant providing workout guidance, nutrition tips, and motivation round-the-clock"
    }
  ];

  const benefits = [
    "Increase member retention by 75%",
    "Boost class attendance by 60%",
    "Improve member engagement by 85%",
    "Reduce admin workload by 18+ hours/week",
    "Enhance personal training bookings by 55%",
    "Streamline membership management"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
              <title>Gym & Health Coach Automation — TryzenIQ</title>
              <meta name="description" content="Discover AI-powered solutions for every industry: automation, analytics, security, and more. Transform your business with TryzenIQ." />
              <meta property="og:title" content="Solutions — TryzenIQ" />
              <meta property="og:description" content="AI solutions for automation, analytics, and business growth. Trusted by leading industries." />
              <meta property="og:type" content="website" />
            </Helmet>
      <Navbar />
      
      <main className="pt-16 bg-black">
        {/* Hero Section */}
        <LightRaySection />
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="hero-text-gradient">Gym</span> & Health Coach Automation
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Transform your fitness business with AI-powered member management, 
                  automated scheduling, and personalized coaching systems.
                </p>
<ScheduleButton label="Schedule a Demo" to="/contact" />              
</div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60"
                  alt="Gym and fitness coaching"
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
                Perfect for <span className="hero-text-gradient">Fitness Businesses</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive automation tools designed to enhance member experience and grow your fitness business.
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
                  Fitness Results
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>Member Retention</span>
                    <span className="text-2xl font-bold text-green-400">+75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Class Attendance</span>
                    <span className="text-2xl font-bold text-green-400">+60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Member Engagement</span>
                    <span className="text-2xl font-bold text-green-400">+85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>PT Bookings</span>
                    <span className="text-2xl font-bold text-green-400">+55%</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Build a <span className="hero-text-gradient">Thriving</span> Fitness Community
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our fitness automation platform helps gyms, personal trainers, and health coaches 
                  deliver exceptional member experiences while growing their business.
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
              <Dumbbell className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Supercharge Your <span className="hero-text-gradient">Fitness Business</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Join successful gyms and coaches who have automated their operations and boosted member satisfaction.
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

export default GymHealthCoach;
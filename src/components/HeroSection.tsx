import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-gradient rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-gradient rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small intro text */}
        <div className="flex items-center justify-center space-x-2 mb-6 animate-fade-in-up">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
            Get 24/7 AI Employee That
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="hero-text-gradient">Automate</span> Your Booking<br />
          And <span className="hero-text-gradient">Maximize</span> Your Profit
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          We automate your entire business journey from leads, outreach and reminders 
          that save your time and boosting revenue.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button className="btn-primary group">
            SCHEDULE FREE MEETING
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="btn-outline">
            View Demo
          </Button>
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Get 24/7 AI Employee That</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-6">
            <span className="hero-text-gradient">Automate</span> Your Business <span className="hero-text-gradient">Profits</span>
          </h2>
          <Button className="btn-primary">
            FREE MEETING
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
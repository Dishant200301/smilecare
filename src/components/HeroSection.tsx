import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import GradientBlinds from './GradientBlinds'; // Adjust path if necessary

const HeroSection:React.FC= () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects container */}
      <div className="absolute inset-0 z-0">
        {/* GradientBlinds component as background */}
        <GradientBlinds
          className="absolute inset-0" // Makes it cover the entire parent div
          gradientColors={['#200055', '#400080', '#6000B0']} // Example colors, adjust as desired
          angle={20} // Example angle
          noise={0.5}
          blindCount={16}
          blindMinWidth={60}
          spotlightRadius={0.5}
          spotlightSoftness={1.5}
          spotlightOpacity={0.8}
          mouseDampening={0.15}
          distortAmount={0} // Slight distortion
          shineDirection="left"
          mixBlendMode="screen" // Blends nicely, experiment with "lighten", "overlay", etc.
        />

        {/* Existing Background glow effects, now layered on top of GradientBlinds */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-gradient rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-gradient rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content of the Hero Section, placed on top with z-index */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small intro text */}
        <div className="flex items-center justify-center space-x-2 mb-6 animate-fade-in-up">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
            Get 24/7 AI Employee That
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up text-white leading-tight" 
              style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Automate
            </span> Your Booking<br />
            And <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Maximize
            </span> Your Profit
          </h1>

        {/* Enhanced subtitle */}
                  <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" 
                     style={{ animationDelay: '0.4s' }}>
                    We automate your entire business journey from leads, outreach and reminders 
                    that save your time and boosting revenue.
                  </p>
        
                  {/* Enhanced CTA Buttons with glassmorphism */}
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" 
                       style={{ animationDelay: '0.6s' }}>
                    <button className="group bg-white/10 backdrop-blur-xl text-white border border-white/20 rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center">
                      SCHEDULE FREE MEETING
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="rounded-full border border-white/20 bg-black/30 backdrop-blur-xl text-white px-8 py-4 font-semibold transition-all duration-300 hover:bg-black/50 hover:border-white/30 hover:scale-105">
                      View Demo
                    </button>
                  </div>
      </div>
    </section>
  );
};

export default HeroSection;
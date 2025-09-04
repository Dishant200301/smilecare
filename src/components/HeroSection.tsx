import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import LightRays from "./LightRays";
import ShinyText from "./ShinyText";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects container */}
      <div className="absolute inset-0 z-0">
        {/* GradientBlinds component as background */}

        <div className="absolute inset-0 w-full h-full">
          {" "}
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="w-full h-full"
          />
        </div>
        
        {/* Existing Background glow effects, now layered on top of GradientBlinds */}
      </div>

      {/* Content of the Hero Section, placed on top with z-index */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-[100px] sm:px-6 lg:px-8 text-center">
        {/* Small intro text */}
        <div className="flex items-center justify-center space-x-2 mb-6 mt-10  ">
          {/* <Sparkles className="w-5 h-5 text-primary" /> */}
          <span className="text-sm font-medium text-muted-foreground bg-transparent px-4 py-2 rounded-full border border-[#61615f]">
            Get 24/7 AI Employee That
          </span>
        </div>

       <h1
  className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal uppercase tracking-wide mb-8 leading-tight autoShow"
>
  <ShinyText
    text="Automate"
    disabled={false}
    speed={2}
    className="hero-text-gradient bg-clip-text animate-gradient inline-block "
  />{" "}
  Your Booking
  <br />
  And{" "}
  <ShinyText
    text="Maximize"
    disabled={false}
    speed={2}
    className="hero-text-gradientbg-clip-text animate-gradient inline-block"
  />{" "}
  Your Profit
</h1>




        {/* Enhanced subtitle */}
        <p
          className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed animate-none"
          style={{ animationDelay: "0.4s", fontFamily: "Figtree" }}
        >
          We automate your entire business journey from leads, outreach and
          reminders that save your time and boosting revenue.
        </p>

        {/* Enhanced CTA Buttons with glassmorphism */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          style={{ animationDelay: "0.6s" }}
        >
          {/* Primary Button - Framer Style */}
          <button className="group relative flex items-center justify-between border border-gray-500 text-white font-semibold pl-6 pr-14 py-4 rounded-full overflow-hidden transition-all duration-700 ease-in-out">
            {/* Expanding circle background */}
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#f0ff8b] text-black z-10 
        transition-transform duration-700 ease-in-out group-hover:scale-[45]"
            />

            {/* Text */}
            <span
              className="relative z-20 transition-colors duration-700 ease-in-out group-hover:text-black"
              style={{ fontFamily: "inter", animationDelay: "0.2s" }}
            >
              SCHEDULE FREE MEETING
            </span>

            {/* Arrow icon */}
            <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
              <ArrowUpRight className="w-4 h-4 text-black duration-700 ease-in-out group-hover:text-black" />
            </span>
          </button>

          {/* Secondary Button */}
          {/* <button className="rounded-full border border-white/20 bg-black/30 backdrop-blur-xl text-white px-8 py-4 font-semibold transition-all duration-300 hover:bg-black/50 hover:border-white/30 hover:scale-105">
        View Demo
      </button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

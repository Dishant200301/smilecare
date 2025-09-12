import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Galaxy from "./Galaxy";

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Fixed Galaxy background */}
      <div className="absolute inset-0 w-full h-full bg-black z-0">
          {/* Only render Galaxy after component is loaded to prevent flash */}
          <Galaxy className="absolute inset-0 z-0" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-[100px] sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-normal uppercase tracking-wide mb-8 leading-tight">
          <span className="hero-text-gradient text-[#8caac8] inline-block">
            Automate{" "}
          </span>
          {" "}
          Your Booking
          <br />
          And{" "}
          <span className="hero-text-gradient text-[#8caac8] inline-block">
            {" "}
            Maximize
          </span>
          {" "}
          Your Profit
        </h1>

        <p
          className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "Figtree" }}
        >
          We automate your entire business journey from leads, outreach, and
          reminders that save time and boost revenue.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="group relative flex items-center justify-between border border-gray-500 text-white font-semibold pl-6 pr-14 py-4 rounded-full overflow-hidden transition-all duration-700 ease-in-out">
            <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#8caac8] text-black z-10 transition-transform duration-700 ease-in-out group-hover:scale-[45]" />
            <span
              className="relative z-20 transition-colors duration-700 ease-in-out group-hover:text-black"
              style={{ fontFamily: "inter" }}
            >
              SCHEDULE FREE MEETING
            </span>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
              <ArrowRight className="w-5 h-5 text-black" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

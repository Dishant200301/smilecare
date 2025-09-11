// src/components/StatsSection.tsx
import { TrendingUp, Calendar, Users } from "lucide-react";
import ShinyText from "./ShinyText";
import Tilt from "react-parallax-tilt";

// Yeh ab component ke bahar hai, is wajah se reload ya re-render par bhi same rahega
const stats = [
  {
    icon: TrendingUp,
    number: "1080",
    title: "Interested Leads",
    description: "Send Auto Reminders To Your Customers At Right Time",
    growth: "+42% increase",
    subtitle: "More engaged potential patients today",
  },
  {
    icon: Calendar,
    number: "360",
    title: "Book Consultation",
    description: "Send Auto Reminders To Your Customers At Right Time",
    growth: "+42% increase",
    subtitle: "Higher consultation booking rate today",
  },
  {
    icon: Users,
    number: "240",
    title: "Clinic Visitors",
    description: "Send Auto Reminders To Your Customers At Right Time",
    growth: "+30% increase",
    subtitle: "More patients showing up to clinic today",
  },
];

const StatsSection = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight font-playfair mb-6">
              Proven Results{" "}
              That Speak{" "}
              <ShinyText
                text="For Themselves"
                disabled={false}
                speed={2}
                className="hero-text-gradient inline-block"
              />
            </h2>

            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              See the transformative impact our clinic automation brings to
              healthcare practices worldwide
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Tilt
                key={index}
                glareEnable={true}
                glareColor="#8caac8"
                glareMaxOpacity={0}
                glareBorderRadius="16px"
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                transitionSpeed={800}
                className="w-full"
              >
                <div
                  className="group relative overflow-hidden rounded-2xl p-8 border border-white/10 bg-[#101010] 
        transition-all duration-300 hover:bg-[#0d0d0d] hover:shadow-[0_0_25px_#8caac8]/40"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animation: "fadeInUp 0.8s ease-out forwards",
                  }}
                >
                  {/* Shining gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
        -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                  />

                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="relative p-3 rounded-xl border border-white/10 bg-[#8caac8]">
                      <stat.icon className="w-6 h-6 text-black transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-[#8caac8]">
                        {stat.number}
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-200 group-hover:text-[#8caac8] relative z-10">
                    {stat.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed transition-colors group-hover:text-white/80 relative z-10">
                    {stat.description}
                  </p>

                  {/* Bottom Info */}
                  <div className="border-t border-white/10 pt-4 relative z-10">
                    <span
                      className="inline-block text-[#8caac8] font-semibold text-sm px-3 py-1 rounded-full 
            border border-white/10 bg-white/10"
                    >
                      {stat.growth}
                    </span>
                    <p className="mt-2 text-xs text-white/50 leading-relaxed transition-colors group-hover:text-white/70">
                      {stat.subtitle}
                    </p>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsSection;

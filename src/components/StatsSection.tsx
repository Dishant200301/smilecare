// src/components/StatsSection.tsx
import { TrendingUp, Calendar, Users } from "lucide-react";
import ShinyText from "./ShinyText";

const StatsSection = () => {
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

  return (
    <div className="bg-black relative overflow-hidden">
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight font-serif mb-6">
  Proven{" "}
  <ShinyText
    text="Results"
    disabled={false}
    speed={2}
    className="hero-text-gradient inline-block"
  />{" "}
  That Speak For{" "}
  <ShinyText
    text="Themselves"
    disabled={false}
    speed={2}
    className="hero-text-gradient inline-block"
  />
</h2>

            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              See the transformative impact our clinic automation brings to healthcare practices worldwide
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 
                transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="p-3 rounded-xl border border-cyan-500/20 bg-cyan-500/10 
                    group-hover:bg-cyan-500/20 transition-all duration-300"
                  >
                    <stat.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">
                      {stat.number}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {stat.title}
                </h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed group-hover:text-white/80 transition-colors">
                  {stat.description}
                </p>

                <div className="border-t border-white/10 pt-4">
                  <span className="text-green-400 font-semibold text-sm bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20 group-hover:bg-green-400/20 transition-colors">
                    {stat.growth}
                  </span>
                  <p className="mt-2 text-xs text-white/50 leading-relaxed group-hover:text-white/70">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          {/* <div className="text-center mt-16">
            <a
              href="/services"
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white 
              border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20
              hover:from-cyan-500/40 hover:via-purple-500/40 hover:to-pink-500/40
              transition-all duration-500 "
            >
              <span className="relative z-10">Explore All Services</span>
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default StatsSection;

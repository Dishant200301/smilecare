import { TrendingUp, Calendar, Users } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "1080",
      title: "Interested Leads",
      description: "Send Auto Reminders To Your Customers At Right Time",
      growth: "+42% increase",
      subtitle: "More engaged potential patients today"
    },
    {
      icon: Calendar,
      number: "360",
      title: "Book Consultation",
      description: "Send Auto Reminders To Your Customers At Right Time",
      growth: "+42% increase",
      subtitle: "Higher consultation booking rate today"
    },
    {
      icon: Users,
      number: "240",
      title: "Clinic Visitors",
      description: "Send Auto Reminders To Your Customers At Right Time",
      growth: "+30% increase",
      subtitle: "More patients showing up to clinic today"
    }
  ];

  return (
    <div className="bg-black">
<section className="py-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Section Header */}
          <div className="text-center mb-16 ">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent ">
              Proven Results That Speak For Themselves
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              See the transformative impact our clinic automation brings to healthcare practices worldwide
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white/5 backdrop-blur-sm rounded-xl  transition-all duration-300 border border-white/10">
                      <stat.icon className="w-6 h-6 text-blue-400 " />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl md:text-4xl font-bold text-white transition-colors duration-300">
                        {stat.number}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
                    {stat.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {stat.description}
                  </p>
                  
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 font-semibold text-sm bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                        {stat.growth}
                      </span>
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {stat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 hover:border-white/30 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Background Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl opacity-30"></div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        
      </section>
    </div>
  );
};

export default StatsSection;
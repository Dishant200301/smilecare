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
                className="group relative bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 
                transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-white/20"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white/5 backdrop-blur-sm rounded-xl 
                      transition-all duration-300 border border-white/10 group-hover:bg-white/10">
                      <stat.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl md:text-4xl font-bold text-white transition-colors duration-300 group-hover:text-blue-100">
                        {stat.number}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-200 transition-colors duration-300">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsSection;

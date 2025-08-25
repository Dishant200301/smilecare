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
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 hero-text-gradient">
            Proven Results That Speak For Themselves
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See the transformative impact our clinic automation brings to healthcare practices worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stats-card group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.number}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{stat.description}</p>
              
              <div className="border-t border-border pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-semibold text-sm">{stat.growth}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-glow-gradient rounded-full blur-3xl opacity-20 -z-10"></div>
      </div>
    </section>
  );
};

export default StatsSection;
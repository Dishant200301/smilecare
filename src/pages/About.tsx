import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Active Clients" },
    { icon: Target, number: "95%", label: "Customer Satisfaction" },
    { icon: Award, number: "50+", label: "Industry Awards" },
    { icon: TrendingUp, number: "300%", label: "Average ROI Increase" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop&q=60",
      bio: "Former AI researcher at Google with 15+ years in automation technology."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
      bio: "Lead engineer who built scalable AI systems for Fortune 500 companies."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
      bio: "Customer experience expert ensuring our clients achieve maximum value."
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
      bio: "Full-stack developer passionate about creating intuitive automation tools."
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with AI automation, staying ahead of industry trends."
    },
    {
      title: "Customer Success",
      description: "Your success is our success. We're committed to delivering measurable results for every client."
    },
    {
      title: "Transparency", 
      description: "Clear communication, honest pricing, and transparent processes in everything we do."
    },
    {
      title: "Reliability",
      description: "Our systems are built for 99.9% uptime, ensuring your business operations never stop."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="hero-text-gradient">ZenIQ</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're on a mission to revolutionize how businesses operate by making 
                AI automation accessible, powerful, and profitable for everyone.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center stats-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold hero-text-gradient mb-2">{stat.number}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="hero-text-gradient">Story</span>
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    ZenIQ was born from a simple observation: small and medium businesses 
                    were struggling to compete with large enterprises that had access to 
                    advanced automation technologies.
                  </p>
                  <p>
                    Founded in 2020 by a team of AI researchers and business automation 
                    experts, we set out to democratize AI technology and make it accessible 
                    to businesses of all sizes.
                  </p>
                  <p>
                    Today, we're proud to serve over 10,000 businesses worldwide, helping 
                    them automate their operations, reduce costs, and increase revenue 
                    through intelligent automation solutions.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="hero-text-gradient">Values</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="service-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <h3 className="text-xl font-semibold mb-4 hero-text-gradient">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="hero-text-gradient">Team</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The brilliant minds behind ZenIQ's innovative automation solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-2xl">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
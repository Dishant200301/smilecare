'use client'; // Assuming Next.js App Router and client component

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Award, TrendingUp, Sparkles, Handshake, ShieldCheck, Zap } from 'lucide-react'; // Added more icons for values section
import AnimateOnScroll from '@/components/AnimateOnScroll'; // Assuming this component is available
import React from 'react'; // Import React for component definition

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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxybaUaqtLxUbBoOU5L89nfEiq9YhGphPINg&s", // Added face detection for better crop
      bio: "Former AI researcher at Google with 15+ years in automation technology."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&faceea",
      bio: "Lead engineer who built scalable AI systems for Fortune 500 companies."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop&faceea",
      bio: "Customer experience expert ensuring our clients achieve maximum value."
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop&faceea",
      bio: "Full-stack developer passionate about creating intuitive automation tools."
    }
  ];

  const values = [
    {
      icon: Sparkles, // New icon
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with AI automation, staying ahead of industry trends."
    },
    {
      icon: Handshake, // New icon
      title: "Customer Success",
      description: "Your success is our success. We're committed to delivering measurable results for every client."
    },
    {
      icon: ShieldCheck, // New icon
      title: "Transparency", 
      description: "Clear communication, honest pricing, and transparent processes in everything we do."
    },
    {
      icon: Zap, // New icon
      title: "Reliability",
      description: "Our systems are built for 99.9% uptime, ensuring your business operations never stop."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      
      <main className="pt-24 md:pt-32 bg-black"> {/* Adjust padding for sticky nav */}
        {/* Hero Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-black-to-br from-background via-card to-background"> {/* Added subtle background gradient */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimateOnScroll animation="fade-in-up" delay={0}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"> {/* Larger text, tighter line-height */}
                About <span className="hero-text-gradient">TryzenIQ</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={150}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed"> {/* Slightly larger text, improved line-height */}
                We're on a mission to revolutionize how businesses operate by making 
                AI automation accessible, powerful, and profitable for everyone.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20"> {/* Adjusted gap for compactness */}
              {stats.map((stat, index) => (
                <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100 + 300}>
                  <div 
                    className="
                      bg-card border border-border rounded-2xl p-6 md:p-8 text-center h-full flex flex-col items-center justify-center
                      transition-all duration-300 ease-in-out hover:shadow-lg  hover:-translate-y-1 {/* Added hover effects, full height, flex for centering */}
                    "
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-full inline-flex items-center justify-center"> {/* Larger, rounded icon container */}
                        <stat.icon className="w-7 h-7 text-primary" aria-hidden="true" /> {/* Slightly smaller icon inside larger container */}
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-heading font-bold hero-text-gradient mb-2">{stat.number}</div> {/* Larger, bolder number */}
                    <div className="text-muted-foreground font-body text-sm md:text-base">{stat.label}</div> {/* Slightly larger label */}
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-black"> {/* Main section background changed to 'bg-card' for contrast */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"> {/* Adjusted gap */}
              <AnimateOnScroll animation="slide-in-left" delay={0}>
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight"> {/* Larger heading */}
                    Our <span className="hero-text-gradient">Story</span>
                  </h2>
                  <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed"> {/* Larger text, better line-height */}
                    <p>
                      TryzenIQ was born from a simple observation: small and medium businesses 
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
              </AnimateOnScroll>
              <AnimateOnScroll animation="slide-in-right" delay={150}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                    alt="Team collaboration"
                    className="rounded-3xl shadow-2xl w-full h-auto object-cover" // Rounded-3xl
                  />
                  {/* Subtle overlay for depth, could be interactive on hover too */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl"></div> 
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-in-up" delay={0}>
              <div className="text-center mb-12 md:mb-16"> {/* Adjusted margin */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 leading-tight"> {/* Larger heading */}
                  Our <span className="hero-text-gradient">Values</span>
                </h2>
                <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
                  The principles that guide everything we do and every decision we make.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"> {/* Changed to 4 columns on large, adjusted gap */}
              {values.map((value, index) => (
                <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100 + 200}>
                  <div 
                    className="
                      bg-card border border-border rounded-2xl p-6 md:p-8 text-center h-full flex flex-col items-center justify-start {/* Centered and full height */}
                      transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 {/* Added hover effects */}
                    "
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-full inline-flex items-center justify-center">
                        <value.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3 hero-text-gradient"> {/* Stronger heading */}
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-black"> {/* Main section background changed to 'bg-card' for contrast */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-in-up" delay={0}>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 leading-tight">
                  Meet Our <span className="hero-text-gradient">Team</span>
                </h2>
                <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
                  The brilliant minds behind TryzenIQ's innovative automation solutions.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"> {/* Adjusted gap */}
              {team.map((member, index) => (
                <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100 + 200}>
                  <div 
                    className="
                      bg-card border border-border rounded-2xl p-6 text-center h-full flex flex-col items-center
                      transition-all duration-300 ease-in-out hover:shadow-lg  hover:-translate-y-1 group {/* Apply card styling to entire member block */}
                    "
                  >
                    <div className="relative mb-6 w-36 h-36 overflow-hidden rounded-full border-4 border-primary/20 shadow-md"> {/* Circular image with border */}
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Optional: Add a subtle overlay for effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-body font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </AnimateOnScroll>
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
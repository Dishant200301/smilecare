import React, { useState, useRef, useEffect } from 'react';
import { Check, Star, Sparkles, ArrowRight, Users, Zap, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LightRays from '@/components/LightRays';

const Pricing = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef([]);

  const handleMouseMove = (event, index) => {
    const card = cardRefs.current[index];
    if (card) {
      const rect = card.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with AI automation",
      icon: Users,
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      features: [
        "Up to 500 automated interactions/month",
        "Basic appointment scheduling",
        "Email notifications",
        "Standard customer support",
        "Mobile app access",
        "Basic analytics dashboard"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses that need advanced automation features",
      icon: Zap,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      features: [
        "Up to 2,000 automated interactions/month",
        "Advanced appointment scheduling",
        "SMS & Email notifications",
        "Priority customer support",
        "Mobile app access",
        "Advanced analytics & reporting",
        "Custom integrations",
        "Multi-location support",
        "AI chatbot customization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$699",
      period: "/month",
      description: "For large organizations requiring enterprise-level features and support",
      icon: Shield,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      features: [
        "Unlimited automated interactions",
        "Enterprise appointment system",
        "SMS, Email & Voice notifications",
        "24/7 premium support",
        "Mobile app access",
        "Enterprise analytics suite",
        "Custom API access",
        "Unlimited locations",
        "White-label solutions",
        "Dedicated account manager",
        "Custom AI training",
        "Advanced security features"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 14-day free trial for all plans. No credit card required to get started."
    },
    {
      question: "What happens if I exceed my monthly limits?",
      answer: "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional capacity as needed."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes, we work with enterprise clients to create custom solutions that meet their specific needs. Contact our sales team for more information."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <div className="min-h-screen bg-black text-white">
          {/* Hero Section */}
            <div className="absolute inset-0 w-full h-full">  <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="w-full h-full"  />
</div>
          <section className="relative py-20 lg:py-32">
            <div className="absolute inset-0 bg-black blur-3xl"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2  bg-white/5 border border-white/10 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Simple, Transparent Pricing</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold  mb-6 leading-tight"
                 style={{fontFamily: 'Playfair Display',animationDelay: '0.2s'}}>
                Choose Your
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                style={{fontFamily: 'Playfair Display',animationDelay: '0.2s'}}>
                  Perfect Plan
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Unlock the power of AI automation for your business. All plans include our core features
                with varying levels of support and customization.
              </p>

              <div className="inline-flex items-center space-x-1 bg-white/5 border border-white/10 rounded-full p-1">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25">
                  Monthly
                </button>
                <button className="px-6 py-3 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Yearly (Save 20%)
                </button>
              </div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="relative pb-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
                {plans.map((plan, index) => {
                  const IconComponent = plan.icon;
                  return (
                    <div
                      key={index}
                      ref={(el) => (cardRefs.current[index] = el)}
                      className={`relative group cursor-pointer transition-all duration-500 ${plan.popular ? 'lg:scale-105 lg:-mt-8' : ''
                        }`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onMouseMove={(e) => handleMouseMove(e, index)}
                    >
                      {/* Card Background with Spotlight Effect */}
                      <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10 overflow-hidden">
                        {/* Spotlight Effect */}
                        {hoveredCard === index && (
                          <div
                            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                            style={{
                              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.1), transparent 40%)`,
                            }}
                          />
                        )}

                        {/* Gradient Border Effect */}
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                          style={{ padding: '1px' }}>
                          <div className="h-full w-full bg-slate-900 rounded-3xl"></div>
                        </div>

                        {/* Popular Badge */}
                        {plan.popular && (
                          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2 shadow-lg">
                              <Star className="w-4 h-4 fill-current" />
                              <span>Most Popular</span>
                            </div>
                          </div>
                        )}

                        {/* Card Content */}
                        <div className="relative z-10">
                          {/* Plan Header */}
                          <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center mt-[30px] w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-2">{plan.name}</h3>
                            <div className="flex items-baseline justify-center mb-4">
                              <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                {plan.price}
                              </span>
                              <span className="text-gray-400 ml-2 text-lg">{plan.period}</span>
                            </div>
                            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">{plan.description}</p>
                          </div>

                          {/* Features List */}
                          <div className="space-y-4 mb-10">
                            {plan.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start space-x-3 group/feature">
                                <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mt-0.5">
                                  <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm lg:text-base text-gray-300 leading-relaxed group-hover/feature:text-white transition-colors">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <button className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 group/btn ${plan.popular
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-[1.02]'
                              : 'bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/30'
                            }`}>
                            <span className="flex items-center justify-center space-x-2">
                              <span>Get Started</span>
                              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="relative py-20 lg:py-32">
            <div className="absolute inset-0 bg-black blur-3xl"></div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                  Frequently Asked
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Questions
                  </span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-300">
                  Get answers to common questions about our pricing and features.
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <h3 className="text-lg lg:text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed lg:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="relative py-20 lg:py-32">
            <div className="absolute inset-0 bg-vlack blur-3xl"></div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 mb-10">
                Join thousands of businesses already using our AI automation platform.
              </p>
              <button className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300">
                <span className="text-lg">Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </section>
        </div>
        </main>
        <Footer />
    </div>
  );
};

export default Pricing;
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with AI automation",
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, <span className="hero-text-gradient">Transparent</span> Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include our core AI automation features 
              with varying levels of support and customization.
            </p>
            <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full p-1">
              <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">Monthly</span>
              <span className="px-4 py-2 text-sm font-medium">Yearly (Save 20%)</span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative service-card ${
                    plan.popular 
                      ? 'ring-2 ring-primary glow-effect scale-105' 
                      : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold hero-text-gradient">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={
                      plan.popular 
                        ? "btn-primary w-full" 
                        : "btn-outline w-full"
                    }
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="hero-text-gradient">Questions</span>
              </h2>
              <p className="text-muted-foreground">
                Get answers to common questions about our pricing and features.
              </p>
            </div>

            <div className="space-y-8">
              {[
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
              ].map((faq, index) => (
                <div key={index} className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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

export default Pricing;
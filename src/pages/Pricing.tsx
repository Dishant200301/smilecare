import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import { Check, Star, Sparkles, ArrowRight, Users, Zap, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LightRays from '@/components/LightRays';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import PricingSection from '@/components/PricingSection';

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
      name: "Free",
      price: "$0",
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
      price: "$399",
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
        <Helmet>
          <title>Pricing — TryzenIQ</title>
          <meta name="description" content="Simple, transparent pricing for AI automation. Choose Free, Professional, or Enterprise to match your scale." />
          <meta property="og:title" content="Pricing — TryzenIQ" />
          <meta property="og:description" content="Plans for every stage: from getting started to enterprise-grade automation." />
        </Helmet>
        <div className="min-h-screen bg-black text-white">
          {/* Light Rays BG */}
         

          {/* Hero Section */}
          

          {/* Pricing Cards */}
          <PricingSection/>

        </div>
      </main>
      <Footer />
      <ScrollToTopButton />

    </div>
  );
};

export default Pricing;

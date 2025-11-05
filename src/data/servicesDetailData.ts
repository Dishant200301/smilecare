// src/data/servicesDetailData.ts
import {
  Bot,
  Search,
  Code,
  Palette,
  Database,
  TrendingUp,
  Zap,
  Globe,
  Sparkles,
  BarChart3,
  Users,
  Clock,
  Shield,
  Rocket,
  Cloud,
} from "lucide-react";

export const servicesDetailData = {
  "ai-automation": {
    slug: "ai-automation",
    metaTitle: "AI Automation Services | TryzenIQ",
    metaDescription:
      "Transform your business with intelligent AI automation solutions. Streamline workflows, reduce costs, and boost productivity.",
    title: "AI",
    subtitle: "Automation",
    // Changed heroImage to lottieSrc
    lottieSrc: "https://lottie.host/71a9e757-1008-4557-a6e7-1a713980eab4/TMGOmUplKI.lottie",
    heroDescription:
      "Harness the power of artificial intelligence to automate complex business processes, enhance decision-making, and drive innovation across your organization.",
    features: [
      {
        icon: Bot,
        title: "AI Chatbots",
        description: "Intelligent conversational AI for customer support and engagement",
        imageUrl:
          "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600",
      },
      {
        icon: Zap,
        title: "Process Automation",
        description: "Streamline repetitive tasks and workflows with smart automation",
        imageUrl:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
      },
      {
        icon: BarChart3,
        title: "Data Analytics",
        description: "AI-powered insights and predictive analytics for better decisions",
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      },
      {
        icon: Users,
        title: "Custom Integrations",
        description: "Seamlessly integrate AI into your existing systems",
        imageUrl:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      },
    ],
    benefits: [
      "Reduce operational costs by 60%",
      "Increase productivity by 85%",
      "Improve accuracy by 95%",
      "Save 30+ hours per week on manual tasks",
    ],
    metrics: [
      { label: "Cost Reduction", value: "-60%" },
      { label: "Productivity", value: "+85%" },
      { label: "Accuracy", value: "+95%" },
    ],
    ctaIcon: Bot,
    ctaTitle: "Transform Your Business with AI",
    ctaDescription: "Join leading companies leveraging AI automation for growth.",
    ctaButtonLabel: "Get Started",
    ctaHighlight: "Business with AI",
  },

  "seo": {
    slug: "seo",
    metaTitle: "SEO Services | TryzenIQ",
    metaDescription:
      "Boost your online visibility with expert SEO services. Drive organic traffic and dominate search rankings.",
    title: "SEO",
    subtitle: "Services",
    // Changed heroImage to lottieSrc
    lottieSrc: "https://lottie.host/3a7c33ec-10fe-47d8-8bcd-dd5c3c12cf7e/zeT8oLJSbU.lottie",
    heroDescription:
      "Elevate your online presence with comprehensive SEO strategies that drive organic traffic, improve rankings, and maximize ROI more effectively.",
    features: [
      {
        icon: Search,
        title: "Keyword Research",
        description: "In-depth analysis to target high-value search terms",
        imageUrl:
          "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600",
      },
      {
        icon: Code,
        title: "Technical SEO",
        description: "Optimize site structure, speed, and crawlability",
        imageUrl:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600",
      },
      {
        icon: Globe,
        title: "Content Optimization",
        description: "Create SEO-friendly content that ranks and converts",
        imageUrl:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
      },
      {
        icon: BarChart3,
        title: "Analytics & Reporting",
        description: "Track performance with detailed SEO metrics",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      },
    ],
    benefits: [
      "Increase organic traffic by 200%",
      "Improve search rankings by 150%",
      "Boost conversion rates by 75%",
      "Enhance brand visibility by 180%",
    ],
    metrics: [
      { label: "Organic Traffic", value: "+200%" },
      { label: "Search Rankings", value: "+150%" },
      { label: "Conversions", value: "+75%" },
    ],
    ctaIcon: Search,
    ctaTitle: "Dominate Search Results",
    ctaDescription: "Get found by customers actively searching for your services.",
    ctaButtonLabel: "Start Ranking",
    ctaHighlight: "Search Results",
  },

  "website-development": {
    slug: "website-development",
    metaTitle: "Website Development Services | TryzenIQ",
    metaDescription:
      "Custom web development solutions tailored to your business needs. Responsive, fast, and conversion-focused.",
    title: "Website",
    subtitle: "Development",
    // Changed heroImage to lottieSrc
    lottieSrc: "https://lottie.host/8c8ba641-1008-49b3-b9ef-4c66a01c7dc2/LWidHvr05h.lottie",
    heroDescription:
      "Build powerful, scalable websites that deliver exceptional user experiences and drive business growth with cutting-edge technologies.",
    features: [
      {
        icon: Code,
        title: "Custom Development",
        description: "Tailored solutions built with modern frameworks",
        imageUrl:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
      },
      {
        icon: Globe,
        title: "Responsive Design",
        description: "Mobile-first approach for all devices",
        imageUrl:
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600",
      },
      {
        icon: Zap,
        title: "Performance Optimization",
        description: "Lightning-fast loading speeds and smooth interactions",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      },
      {
        icon: Shield,
        title: "Security & Maintenance",
        description: "Ongoing support and security updates",
        imageUrl:
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600",
      },
    ],
    benefits: [
      "Increase user engagement by 90%",
      "Improve page load speed by 70%",
      "Boost mobile conversions by 85%",
      "Reduce bounce rate by 60%",
    ],
    metrics: [
      { label: "User Engagement", value: "+90%" },
      { label: "Load Speed", value: "+70%" },
      { label: "Mobile Conversions", value: "+85%" },
    ],
    ctaIcon: Code,
    ctaTitle: "Build Your Digital Presence",
    ctaDescription: "Create a website that converts visitors into customers.",
    ctaButtonLabel: "Start Building",
    ctaHighlight: "Digital Presence",
  },

  "graphics-design": {
    slug: "graphics-design",
    metaTitle: "Graphics Design Services | TryzenIQ",
    metaDescription:
      "Creative visual design that brings your brand to life. Logo design, branding, and marketing materials.",
    title: "Graphics",
    subtitle: "Design",
    // Changed heroImage to lottieSrc
    lottieSrc: "https://lottie.host/3d31e69f-ad21-48cd-93cb-7bd3a757621c/nN7UqPfcFy.lottie",
    heroDescription:
      "Transform your brand identity with stunning visual designs that captivate audiences and communicate your message effectively successfully.",
    features: [
      {
        icon: Palette,
        title: "Brand Identity",
        description: "Comprehensive branding and logo design",
        imageUrl:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600",
      },
      {
        icon: Sparkles,
        title: "Marketing Materials",
        description: "Eye-catching designs for all marketing channels",
        imageUrl:
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600",
      },
      {
        icon: Globe,
        title: "UI/UX Design",
        description: "User-centered interface and experience design",
        imageUrl:
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600",
      },
      {
        icon: TrendingUp,
        title: "Social Media Graphics",
        description: "Engaging visuals for social platforms",
        imageUrl:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600",
      },
    ],
    benefits: [
      "Increase brand recognition by 95%",
      "Boost engagement by 120%",
      "Improve conversion rates by 80%",
      "Enhance professional image by 100%",
    ],
    metrics: [
      { label: "Brand Recognition", value: "+95%" },
      { label: "Engagement", value: "+120%" },
      { label: "Conversions", value: "+80%" },
    ],
    ctaIcon: Palette,
    ctaTitle: "Elevate Your Brand Visually",
    ctaDescription: "Stand out with designs that make a lasting impression.",
    ctaButtonLabel: "Start Designing",
    ctaHighlight: "Brand Visually",
  },

  "custom-erp-system": {
    slug: "custom-erp-system",
    metaTitle: "Custom ERP System | TryzenIQ",
    metaDescription:
      "Enterprise resource planning solutions tailored to your business. Streamline operations and boost efficiency.",
    title: "Custom ERP",
    subtitle: "System",
    // Changed heroImage to lottieSrc
    lottieSrc: "https://lottie.host/93de780f-0c2d-4b33-bf22-b9a56c7f52db/NjmmHcBNUf.lottie",
    heroDescription:
      "Unify your business operations with a custom ERP system designed to optimize workflows, enhance collaboration, and drive growth successfully.",
    features: [
      {
        icon: Database,
        title: "Centralized Data",
        description: "Single source of truth for all business data",
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      },
      {
        icon: Zap,
        title: "Process Automation",
        description: "Automate workflows across departments",
        imageUrl:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
      },
      {
        icon: BarChart3,
        title: "Real-time Analytics",
        description: "Instant insights into business performance",
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      },
      {
        icon: Users,
        title: "Multi-user Access",
        description: "Role-based permissions and collaboration tools",
        imageUrl:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      },
    ],
    benefits: [
      "Reduce operational costs by 50%",
      "Increase productivity by 75%",
      "Improve data accuracy by 98%",
      "Streamline processes by 80%",
    ],
    metrics: [
      { label: "Cost Reduction", value: "-50%" },
      { label: "Productivity", value: "+75%" },
      { label: "Data Accuracy", value: "+98%" },
    ],
    ctaIcon: Database,
    ctaTitle: "Streamline Your Enterprise",
    ctaDescription: "Unify operations with a custom ERP solution.",
    ctaButtonLabel: "Get ERP Solution",
    ctaHighlight: "Your Enterprise",
  },
};

// Export array for backward compatibility
export const servicesDetail = Object.values(servicesDetailData);
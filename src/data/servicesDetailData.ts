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
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
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
    heroImage:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800",
    heroDescription:
      "Elevate your online presence with comprehensive SEO strategies that drive organic traffic, improve rankings, and maximize ROI.",
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
    heroImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800",
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
    heroImage:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
    heroDescription:
      "Transform your brand identity with stunning visual designs that captivate audiences and communicate your message effectively.",
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
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    heroDescription:
      "Unify your business operations with a custom ERP system designed to optimize workflows, enhance collaboration, and drive growth.",
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

  "digital-transformation": {
    slug: "digital-transformation",
    metaTitle: "Digital Transformation Services | TryzenIQ",
    metaDescription:
      "Guide your business through digital evolution. Strategy, implementation, and ongoing support.",
    title: "Digital",
    subtitle: "Transformation",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    heroDescription:
      "Navigate the digital landscape with confidence. We help businesses modernize operations, adopt new technologies, and thrive in the digital age.",
    features: [
      {
        icon: Rocket,
        title: "Digital Strategy",
        description: "Comprehensive roadmap for digital success",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      },
      {
        icon: Cloud,
        title: "Cloud Migration",
        description: "Seamless transition to cloud infrastructure",
        imageUrl:
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600",
      },
      {
        icon: Users,
        title: "Change Management",
        description: "Support teams through digital adoption",
        imageUrl:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      },
      {
        icon: TrendingUp,
        title: "Performance Tracking",
        description: "Monitor and optimize digital initiatives",
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      },
    ],
    benefits: [
      "Accelerate innovation by 90%",
      "Reduce IT costs by 45%",
      "Improve customer experience by 85%",
      "Increase agility by 70%",
    ],
    metrics: [
      { label: "Innovation Speed", value: "+90%" },
      { label: "IT Cost Reduction", value: "-45%" },
      { label: "Customer Experience", value: "+85%" },
    ],
    ctaIcon: Rocket,
    ctaTitle: "Lead the Digital Revolution",
    ctaDescription: "Transform your business for the digital future.",
    ctaButtonLabel: "Start Transformation",
    ctaHighlight: "Digital Revolution",
  },
};

// Export array for backward compatibility
export const servicesDetail = Object.values(servicesDetailData);

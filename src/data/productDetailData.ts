// src/data/productDetailData.ts
import {
  Database,
  Mail,
  FileText,
  PenTool,
  BarChart3,
  Zap,
  Users,
  Clock,
  Shield,
  TrendingUp,
  DollarSign,
  Globe,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export const productDetailData = {
  "asign-it-erp": {
    slug: "asign-it-erp",
    metaTitle: "Asign IT ERP System | TryzenIQ",
    metaDescription:
      "Complete enterprise resource planning solution to streamline business operations, inventory, and financial management.",
    title: "AsignIT ERP",
    subtitle: "Enterprise Solution",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    heroDescription:
      "Transform your business operations with our comprehensive ERP system. Manage inventory, finances, HR, and more from a single unified platform.",
    features: [
      {
        icon: Database,
        title: "Centralized Data",
        description: "Single source of truth for all business information",
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      },
      {
        icon: BarChart3,
        title: "Real-time Analytics",
        description: "Instant insights into business performance",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      },
      {
        icon: Users,
        title: "HR Management",
        description: "Complete payroll and employee management",
        imageUrl:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      },
      {
        icon: DollarSign,
        title: "Financial Accounting",
        description: "Advanced accounting and financial reporting",
        imageUrl:
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600",
      },
    ],
    benefits: [
      "Reduce operational costs by 40%",
      "Improve decision-making with real-time data",
      "Streamline workflows across departments",
      "Scale seamlessly as business grows",
    ],
    metrics: [
      { label: "Cost Reduction", value: "-40%" },
      { label: "Productivity", value: "+65%" },
      { label: "Data Accuracy", value: "+95%" },
    ],
    ctaIcon: Database,
    ctaTitle: "Transform Your Enterprise Operations",
    ctaDescription: "Join leading businesses using our ERP solution.",
    ctaButtonLabel: "Start Free Trial",
    ctaHighlight: "Enterprise Operations",
  },

  "bulk-email-automation": {
    slug: "bulk-email-automation",
    metaTitle: "Bulk Email Automation | TryzenIQ",
    metaDescription:
      "Powerful email automation platform for personalized campaigns, automated workflows, and detailed analytics.",
    title: "Email Automation",
    subtitle: "Marketing Platform",
    heroImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    heroDescription:
      "Scale your email marketing with intelligent automation. Send personalized campaigns to thousands of customers with advanced segmentation and tracking.",
    features: [
      {
        icon: Mail,
        title: "Mass Email Sending",
        description: "Send up to 100,000 emails per day",
        imageUrl:
          "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600",
      },
      {
        icon: Zap,
        title: "Automated Campaigns",
        description: "Set up drip campaigns and workflows",
        imageUrl:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
      },
      {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Track opens, clicks, and conversions",
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      },
      {
        icon: Users,
        title: "Smart Segmentation",
        description: "Target the right audience with precision",
        imageUrl:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      },
    ],
    benefits: [
      "Increase email open rates by 35%",
      "Save 20+ hours per week on manual tasks",
      "Improve customer engagement and retention",
      "Boost conversion rates with targeted campaigns",
    ],
    metrics: [
      { label: "Open Rates", value: "+35%" },
      { label: "Time Saved", value: "20+ hrs/week" },
      { label: "Conversions", value: "+45%" },
    ],
    ctaIcon: Mail,
    ctaTitle: "Scale Your Email Marketing",
    ctaDescription: "Reach more customers with intelligent automation.",
    ctaButtonLabel: "Get Started",
    ctaHighlight: "Email Marketing",
  },

  "bulk-ai-invoice-generator": {
    slug: "bulk-ai-invoice-generator",
    metaTitle: "Bulk AI Invoice Generator | TryzenIQ",
    metaDescription:
      "AI-powered invoicing system for automated invoice creation, payment tracking, and financial reporting.",
    title: "AI Invoice Generator",
    subtitle: "Smart Billing",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    heroDescription:
      "Automate your invoicing process with AI technology. Generate thousands of professional invoices, track payments, and manage finances effortlessly.",
    features: [
      {
        icon: FileText,
        title: "Bulk Generation",
        description: "Create 1000+ invoices per hour",
        imageUrl:
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600",
      },
      {
        icon: Sparkles,
        title: "AI Data Extraction",
        description: "Automatically extract data from receipts",
        imageUrl:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
      },
      {
        icon: DollarSign,
        title: "Payment Tracking",
        description: "Monitor payments and send reminders",
        imageUrl:
          "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600",
      },
      {
        icon: Globe,
        title: "Multi-Currency",
        description: "Support for 150+ currencies and tax systems",
        imageUrl:
          "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600",
      },
    ],
    benefits: [
      "Reduce invoicing time by 90%",
      "Minimize human errors in billing",
      "Get paid faster with automated reminders",
      "Improve cash flow management",
    ],
    metrics: [
      { label: "Time Saved", value: "-90%" },
      { label: "Error Reduction", value: "-95%" },
      { label: "Faster Payments", value: "+60%" },
    ],
    ctaIcon: FileText,
    ctaTitle: "Automate Your Invoicing Process",
    ctaDescription: "Generate professional invoices at scale with AI.",
    ctaButtonLabel: "Try It Free",
    ctaHighlight: "Invoicing Process",
  },

  "ai-blog-seo-automation": {
    slug: "ai-blog-seo-automation",
    metaTitle: "AI Blog SEO Automation | TryzenIQ",
    metaDescription:
      "Intelligent content optimization platform using AI to generate SEO-friendly blog posts and boost search rankings.",
    title: "AI Blog SEO",
    subtitle: "Content Automation",
    heroImage:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
    heroDescription:
      "Create and optimize SEO-friendly content at scale. Our AI-powered platform generates high-quality blog posts, optimizes for search engines, and tracks performance.",
    features: [
      {
        icon: PenTool,
        title: "AI Content Generation",
        description: "Generate SEO-optimized blog posts automatically",
        imageUrl:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
      },
      {
        icon: TrendingUp,
        title: "Keyword Research",
        description: "Find high-value keywords for your niche",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      },
      {
        icon: BarChart3,
        title: "Performance Tracking",
        description: "Monitor rankings and traffic growth",
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      },
      {
        icon: Clock,
        title: "Auto Publishing",
        description: "Schedule and publish content automatically",
        imageUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      },
    ],
    benefits: [
      "Increase organic traffic by 150%",
      "Publish 10x more content in less time",
      "Improve search engine rankings",
      "Reduce content creation costs by 60%",
    ],
    metrics: [
      { label: "Organic Traffic", value: "+150%" },
      { label: "Content Output", value: "10x more" },
      { label: "Cost Reduction", value: "-60%" },
    ],
    ctaIcon: PenTool,
    ctaTitle: "Boost Your Content Marketing",
    ctaDescription: "Create SEO-optimized content that ranks and converts.",
    ctaButtonLabel: "Start Creating",
    ctaHighlight: "Content Marketing",
  },
};

// Export array for backward compatibility
export const productsDetail = Object.values(productDetailData);

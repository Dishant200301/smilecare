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
  Phone,
  Package,
  Settings, // Added for ERP features
  Workflow, // Added for ERP features
  Layers, // Added for ERP features
  Award, // Added for SEO features
  Search, // Added for SEO features
  MessageSquare, // Added for AI Calling features
  Headphones, // Already present, but good to ensure
} from "lucide-react";

export const productDetailData = {
  "asign-it-erp": {
    slug: "asign-it-erp",
    metaTitle: "Asign IT ERP System | TryzenIQ",
    metaDescription:
      "Complete enterprise resource planning solution to streamline business operations, inventory, and financial management.",
    title: "AsignIT ERP",
    subtitle: "Solution",
    lottieSrc: "https://lottie.host/93de780f-0c2d-4b33-bf22-b9a56c7f52db/NjmmHcBNUf.lottie",
    heroDescription:
      "Transform your business operations with our comprehensive ERP system. Manage inventory, finances, HR, and more from a single unified platform.",
    // --- Sub Services --- (Already updated from previous iteration)
    subServices: [
      {
        icon: "Database",
        title: "Centralized Data Management",
        description: `Unify all business data securely within the platform, enabling real-time access and collaboration for your team. 
`      },
      {
        icon: "Users",
        title: "HR & Employee Management",
        description: `Streamline onboarding and performance reviews efficiently, automating payroll and attendance tracking for accuracy. 
`      },
      {
        icon: "DollarSign",
        title: "Financial Accounting",
        description: `Automate invoicing and expense management with support for multi-currency transactions and precise tax calculations. 
`      },
      {
        icon: "Package",
        title: "Inventory & Supply Chain",
        description: `Track stock levels in real-time with intelligent reorder alerts and automating purchase orders effortlessly. 
`      },
      {
        icon: "BarChart3",
        title: "Reporting & Analytics",
        description: `Customize dynamic dashboards to track key performance indicators, scheduling automated reports with easy export options. 
`      },
      {
        icon: "Shield",
        title: "Security & Compliance",
        description: `Implement robust role-based access controls to safeguard sensitive information and hosting securely in the cloud. 
`      }
    ],
    // --- Features Array (Why Choose Us and New "Our Features") ---
    features: [
      {
        icon: "Database", // Still for "Why Choose Us"
        title: "Why Choose Us for AsignIT ERP",
        description:
          "Empower your enterprise with a scalable ERP solution that integrates seamlessly and delivers measurable ROI from day one.",
        points: [
          "Reduce operational costs by 40%.",
          "Improve decisions with real-time data.",
          "Stream workflows efficiently.",
          "Scale seamlessly as business grows."
        ]
      },
      // --- New "Our Features" for AsignIT ERP ---
      {
        icon: "Settings", // Example icon for "Complete ERP Solution"
        title: "Complete ERP Solution",
        description: `A fully integrated suite covering all aspects of your business, from finance and HR to supply chain and customer relations, ensuring seamless operations.`,
      },
      {
        icon: "Workflow",
        title: "Customizable Workflows",
        description: `Tailor processes to match your unique business requirements, automating tasks and approvals for enhanced efficiency and control.`,
      },
      {
        icon: "Layers",
        title: "Modular & Scalable Design",
        description: `Start with essential modules and expand as your business grows, ensuring the system adapts to evolving needs without disruption. and control.`,
      },
    ],
    // --- CTA Section ---
    ctaIcon: "Database",
    ctaTitle: "Transform Your Enterprise Operations",
    ctaDescription: "Join leading businesses using our ERP solution.",
    ctaButtonLabel: "Start Free Trial",
    ctaHighlight: "Enterprise Operations"
  },
  "bulk-email-automation": {
    slug: "bulk-email-automation",
    metaTitle: "Bulk Email Automation | TryzenIQ",
    metaDescription:
      "Powerful email automation platform for personalized campaigns, automated workflows, and detailed analytics.",
    title: "Automated Email ",
    subtitle: "Workflows ",
    lottieSrc: "https://lottie.host/a57cc5a7-ba31-4672-a763-5e9cdb7af52d/hBOfHSkxMX.lottie",
    heroDescription:
      "Scale your email marketing with intelligent automation. Send personalized campaigns to thousands of customers with advanced segmentation and tracking.",
    // --- Sub Services ---
    subServices: [
      {
        icon: "Mail",
        title: "Mass Email Campaigns",
        description: `Send high-volume emails with 99.9% deliverability rates, personalizing dynamic content to resonate with each recipient. 
`      },
      {
        icon: "Zap",
        title: "Automated Workflows",
        description: `Trigger personalized emails along key user journeys, from welcome series to cart abandonment reminders. 
`      },
      {
        icon: "BarChart3",
        title: "Advanced Analytics",
        description: `Track opens, clicks, and conversions in real-time, analyzing heatmaps and engagement scores for optimization. 
`      },
      {
        icon: "Users",
        title: "Audience Segmentation",
        description: `Create intelligent lists based on behaviors and demographics, performing RFM analysis for precise targeting. 
`      },
      {
        icon: "Globe",
        title: "Multi-Channel Integration",
        description: `Extend campaigns to SMS and push notifications, linking with social media and landing pages for broader reach. 
`      },
      {
        icon: "Shield",
        title: "Security & Deliverability",
        description: `Authenticate with SPF, DKIM, and DMARC protocols to maximize inbox placement and managing bounces proactively. 
`      }
    ],
    // --- Features Array (Why Choose Us and New "Our Features") ---
    features: [
      {
        icon: "Mail", // Still for "Why Choose Us"
        title: "Why Choose Us for Email Automation",
        description:
          "Achieve superior email marketing results with our reliable, scalable platform that prioritizes deliverability and engagement.",
        points: [
          "Increase open rates by 35%.",
          "Save 20+ hours weekly on tasks.",
          "engagement, customer retention.",
          "Seamless integration tools."
        ]
      },
      // --- New "Our Features" for Email Automation ---
      {
        icon: "Zap", // Example icon for "Automated email campaigns"
        title: "Email Campaigns",
        description: `Set up trigger-based emails for welcome sequences, cart abandonment, and re-engagement, delivering messages at the perfect moment.`,
      },
      {
        icon: "TrendingUp",
        title: "A/B Testing & Optimization",
        description: `Test different subject lines, content, and calls-to-action to continuously improve campaign performance and maximize engagement.`,
      },
      {
        icon: "Palette",
        title: "Drag-and-Drop Email",
        description: `Create stunning, responsive email templates quickly with an intuitive editor, no coding required, ensuring brand consistency.`,
      },
    ],
    // --- CTA Section ---
    ctaIcon: "Mail",
    ctaTitle: "Scale Your Email Marketing",
    ctaDescription: "Reach more customers with intelligent automation.",
    ctaButtonLabel: "Get Started",
    ctaHighlight: "Email Marketing"
  },
  "bulk-ai-invoice-generator": {
    slug: "bulk-ai-invoice-generator",
    metaTitle: "Bulk AI Invoice Generator | TryzenIQ",
    metaDescription:
      "AI-powered invoicing system for automated invoice creation, payment tracking, and financial reporting.",
    title: "Invoice Generator",
    subtitle: "Smart Billing",
    lottieSrc: "https://lottie.host/4674d99c-65b3-4226-b4d0-f45b2a818fad/KD0kBScXQo.lottie",
    heroDescription:
      "Automate your invoicing process with AI technology. Generate thousands of professional invoices, track payments, and manage finances effortlessly.",
    // --- Sub Services ---
    subServices: [
      {
        icon: "FileText",
        title: "Bulk Invoice Generation",
        description: `Generate thousands of invoices in seconds using advanced AI, customizing templates to maintain brand all documents. 
`      },
      {
        icon: "Sparkles",
        title: "AI Data Extraction",
        description: `Extract key data from receipts and contracts automatically, utilizing OCR technology for even handwritten documents. 
`      },
      {
        icon: "DollarSign",
        title: "Payment Tracking & Reminders",
        description: `payment statuses in real-time automatically, sending scheduled reminders for overdue invoices to accelerate collections. 
`      },
      {
        icon: "BarChart3",
        title: "Financial Reporting",
        description: `Automate the creation of profit and loss statements, forecasting cash flow and projections with AI-driven precision. 
`      },
      {
        icon: "Users",
        title: "Client Portal Access",
        description: `Provide secure online access for clients to view and manage invoices, enabling direct payments and document sharing. 
`      },
      {
        icon: "Shield",
        title: "Compliance & Security",
        description: `Encrypt all data during storage and transmission, supporting electronic signatures and streamlined approvals. 
`      }
    ],
    // --- Features Array (Why Choose Us and New "Our Features") ---
    features: [
      {
        icon: "FileText", // Still for "Why Choose Us"
        title: "Why Choose Us for Bulk AI Invoice Generator",
        description:
          "Streamline your billing operations with AI precision, ensuring accuracy and efficiency at every step of the invoicing process.",
        points: [
          "Reduce invoicing time by 90%.",
          "Minimize billing human errors.",
          "Get paid faster using reminders.",
          "Improve cash flow management."
        ]
      },
      // --- New "Our Features" for AI Invoice Generator ---
      {
        icon: "Sparkles", // Example icon for "AI-powered invoicing"
        title: "AI-Powered Invoicing",
        description: `Leverage artificial intelligence to automate invoice creation, data entry, and categorization, drastically reducing manual effort.`,
      },
      {
        icon: "Monitor",
        title: "Real-time Payment Track",
        description: `Monitor invoice statuses, receive instant notifications for payments, and automate follow-ups for overdue accounts to maintain healthy cash flow.`,
      },
      {
        icon: "Repeat",
        title: "Recurring Invoice Automation",
        description: `Set up automated recurring invoices for subscriptions or regular services, saving time and ensuring consistent billing cycles. and control.`,
      },
    ],
    // --- CTA Section ---
    ctaIcon: "FileText",
    ctaTitle: "Automate Your Invoicing Process",
    ctaDescription: "Generate professional invoices at scale with AI.",
    ctaButtonLabel: "Try It Free",
    ctaHighlight: "Invoicing Process"
  },
  "ai-blog-seo-automation": {
    slug: "ai-blog-seo-automation",
    metaTitle: "AI Blog SEO Automation | TryzenIQ",
    metaDescription:
      "Intelligent content optimization platform using AI to generate SEO-friendly blog posts and boost search rankings.",
    title: "Blog Content",
    subtitle: "SEO Automation",
    lottieSrc: "https://lottie.host/3a7c33ec-10fe-47d8-8bcd-dd5c3c12cf7e/zeT8oLJSbU.lottie",
    heroDescription:
      "Create and optimize SEO-friendly content at scale. Our AI-powered platform generates high-quality blog posts, optimizes for search engines, and tracks performance.",
    // --- Sub Services ---
    subServices: [
      {
        icon: "PenTool",
        title: "AI Content Creation",
        description: `Generate complete blog posts from simple outlines, customizing tone and style to perfectly align with your brand voice. 
`      },
      {
        icon: "TrendingUp",
        title: "SEO Keyword Research",
        description: `Discover high-volume, low-competition keywords through in-depth analysis, identifying gaps in competitor strategies. 
`      },
      {
        icon: "BarChart3",
        title: "Performance Analytics",
        description: `Track search rankings and traffic growth in real-time, monitoring backlinks and uncovering new opportunities. 
`      },
      {
        icon: "Edit3",
        title: "On-Page Optimization",
        description: `Auto-generate optimized meta tags, headers, and alt text, suggesting strategic internal linking for better site authority. 
`      },
      {
        icon: "Globe",
        title: "Multi-Language Support",
        description: `Translate and localize content for global audiences, adding hreflang tags to enhance international SEO performance. 
`      },
      {
        icon: "Sparkles",
        title: "Content Enhancement",
        description: `Suggest complementary images and videos to enrich posts, adding engaging hooks and strategic CTAs for higher conversions. 
`      }
    ],
    // --- Features Array (Why Choose Us and New "Our Features") ---
    features: [
      {
        icon: "PenTool", // Still for "Why Choose Us"
        title: "Why Choose Us for AI Blog SEO Automation",
        description:
          "Supercharge your content strategy with AI that creates, optimizes, and analyzes for maximum SEO impact and audience growth.",
        points: [
          "Increase organic traffic by 150%.",
          "Publish 10x more content faster.",
          "Improve search engine rankings.",
          "Reduce creation costs by 60%."
        ]
      },
      // --- New "Our Features" for AI Blog SEO Automation ---
      {
        icon: "Award", // Example icon for "Automated content optimization"
        title: "Content Optimization",
        description: `AI-driven recommendations ensure your content is fully optimized for search engines, improving visibility and ranking potential.`,
      },
      {
        icon: "Search",
        title: "Real-time SEO Insights",
        description: `Get instant feedback on keyword usage, readability, and content structure, allowing for on-the-fly improvements to boost SEO performance.`,
      },
      {
        icon: "Code",
        title: "Schema Markup Generation",
        description: `Automatically generate structured data (schema markup) for your blog posts to enhance rich snippets and improve click-through rates.`,
      },
    ],
    // --- CTA Section ---
    ctaIcon: "PenTool",
    ctaTitle: "Boost Your Content Marketing",
    ctaDescription: "Create SEO-optimized content that ranks and converts.",
    ctaButtonLabel: "Start Creating",
    ctaHighlight: "Content Marketing"
  },
  "ai-calling-automation": {
    slug: "ai-calling-automation",
    metaTitle: "AI Calling Automation | TryzenIQ",
    metaDescription:
      "Revolutionary AI-powered voice automation for outbound calls, customer support, and sales engagement at scale.",
    title: "AI Calling",
    subtitle: "Voice Automation",
    lottieSrc: "https://lottie.host/3d4dfd7b-c260-44c3-8a80-49bd6d202364/lheUJCRS6H.lottie",
    heroDescription:
      "Revolutionize your communication strategy with AI-driven calling. Automate outbound sales calls, provide 24/7 customer support, and personalize interactions using advanced voice AI.",
    // --- Sub Services ---
    subServices: [
      {
        icon: "Phone",
        title: "Automated Outbound Calling",
        description: `Execute thousands of scheduled calls daily, personalizing scripts with customer-specific data for relevance. 
`      },
      {
        icon: "Zap",
        title: "Intelligent IVR & Routing",
        description: `Recognize natural voice commands for intuitive menu navigation, analyzing sentiment to route calls by priority. 
`      },
      {
        icon: "BarChart3",
        title: "Call Analytics & Transcription",
        description: `Transcribe calls with 100% accuracy in real-time, tracking success rates and conversion metrics for optimization. 
`      },
      {
        icon: "Headphones",
        title: "Customer Support Automation",
        description: `Deliver 24/7 self-service voice assistance for resolving FAQs and troubleshooting common issues efficiently. 
`      },
      {
        icon: "Users",
        title: "Sales Engagement",
        description: `Nurture leads through personalized voice interactions, handling objections with intelligent AI responses. 
`      },
      {
        icon: "Shield",
        title: "Compliance & Security",
        description: `Adhere strictly to TCPA and DNC regulations, encrypting all call recordings and storage for utmost security. 
`      }
    ],
    // --- Features Array (Why Choose Us and New "Our Features") ---
    features: [
      {
        icon: "Phone", // Still for "Why Choose Us"
        title: "Why Choose Us for AI Calling Automation",
        description:
          "Elevate your customer interactions with scalable, intelligent voice AI that delivers human-like conversations and measurable results.",
        points: [
          "Boost connection rates by 70%.",
          "Reduce call costs by 80%.",
          "Enhance satisfaction with 24/7 availability.",
          "Scale outreach without headcount increase."
        ]
      },
      // --- New "Our Features" for AI Calling Automation ---
      {
        icon: "Bot", // Example icon for "AI-powered calling"
        title: "AI-Powered Calling",
        description: `Utilize advanced AI voices to conduct natural, conversational calls for sales, support, and surveys, at unparalleled scale. and control.`,
      },
      {
        icon: "MessageSquare",
        title: "Sentiment Analysis",
        description: `AI analyzes customer sentiment during calls, allowing for dynamic script adjustments and prioritization of urgent cases for human agents.`,
      },
      {
        icon: "UserCheck",
        title: "CRM Integration",
        description: `Seamlessly integrate with your existing CRM to log call details, update customer profiles, and ensure consistent data across platforms.`,
      },
    ],
    // --- CTA Section ---
    ctaIcon: "Phone",
    ctaTitle: "Automate Your Voice Communications",
    ctaDescription: "Engage customers at scale with intelligent AI calling.",
    ctaButtonLabel: "Start Calling",
    ctaHighlight: "Voice Communications"
  },
};

export const productsDetail = Object.values(productDetailData);
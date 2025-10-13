// Product Data
export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  excerpt: string;
  image: string;
  features: string[];
  benefits: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  useCases: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  demo?: string;
}

const productsData: Product[] = [
  {
    id: "1",
    slug: "asign-it-erp",
    title: "Asign IT ERP System",
    category: "Enterprise",
    description:
      "Complete enterprise resource planning solution designed to streamline your business operations, from inventory management to financial accounting.",
    excerpt:
      "All-in-one ERP system for comprehensive business management and operational excellence.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    features: [
      "Comprehensive business management dashboard",
      "Real-time inventory & supply chain tracking",
      "Advanced financial accounting modules",
      "HR & payroll management system",
      "Multi-location support",
      "Custom reporting & analytics",
      "Role-based access control",
      "Cloud-based & on-premise deployment",
    ],
    benefits: [
      "Reduce operational costs by up to 40%",
      "Improve decision-making with real-time data",
      "Streamline workflows across departments",
      "Enhance productivity and efficiency",
      "Scale seamlessly as your business grows",
    ],
    pricing: {
      starter: "$299/month",
      professional: "$599/month",
      enterprise: "Custom pricing",
    },
    useCases: [
      {
        title: "Manufacturing",
        description:
          "Manage production schedules, inventory, and supply chain operations efficiently.",
      },
      {
        title: "Retail",
        description:
          "Track sales, inventory, and customer data across multiple locations.",
      },
      {
        title: "Distribution",
        description:
          "Optimize warehouse operations and streamline order fulfillment processes.",
      },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: "2",
    slug: "bulk-email-automation",
    title: "Bulk Email Automation",
    category: "Marketing",
    description:
      "Powerful email automation platform that helps you reach thousands of customers with personalized campaigns, automated workflows, and detailed analytics.",
    excerpt:
      "Scale your email marketing with intelligent automation and personalization.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
    features: [
      "Send up to 100,000 emails per day",
      "Drag-and-drop email builder",
      "Advanced segmentation & personalization",
      "Automated drip campaigns",
      "A/B testing for subject lines & content",
      "Real-time delivery & open rate tracking",
      "Spam score checker",
      "SMTP & API integration",
    ],
    benefits: [
      "Increase email open rates by 35%",
      "Save 20+ hours per week on manual tasks",
      "Improve customer engagement and retention",
      "Boost conversion rates with targeted campaigns",
      "Maintain high deliverability rates",
    ],
    pricing: {
      starter: "$49/month",
      professional: "$149/month",
      enterprise: "$399/month",
    },
    useCases: [
      {
        title: "E-commerce",
        description:
          "Send promotional campaigns, abandoned cart reminders, and product updates.",
      },
      {
        title: "SaaS Companies",
        description:
          "Onboard new users, share product updates, and nurture leads effectively.",
      },
      {
        title: "Agencies",
        description:
          "Manage multiple client campaigns with white-label solutions.",
      },
    ],
    techStack: ["React", "Python", "Redis", "MongoDB", "AWS SES"],
  },
  {
    id: "3",
    slug: "bulk-ai-invoice-generator",
    title: "Bulk AI Invoice Generator",
    category: "Finance",
    description:
      "AI-powered invoicing system that automates invoice creation, payment tracking, and financial reporting for businesses of all sizes.",
    excerpt:
      "Generate professional invoices at scale with AI-powered automation.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60",
    features: [
      "AI-powered data extraction from receipts",
      "Bulk invoice generation (1000+ invoices/hour)",
      "Multi-currency & tax support",
      "Automated payment reminders",
      "Custom branding & templates",
      "Recurring invoice automation",
      "Payment gateway integration",
      "Export to PDF, Excel, and accounting software",
    ],
    benefits: [
      "Reduce invoicing time by 90%",
      "Minimize human errors in billing",
      "Get paid faster with automated reminders",
      "Improve cash flow management",
      "Maintain professional brand consistency",
    ],
    pricing: {
      starter: "$79/month",
      professional: "$199/month",
      enterprise: "$499/month",
    },
    useCases: [
      {
        title: "Freelancers",
        description:
          "Create and send professional invoices to clients quickly and easily.",
      },
      {
        title: "Small Businesses",
        description:
          "Automate billing processes and track payments efficiently.",
      },
      {
        title: "Enterprises",
        description:
          "Handle high-volume invoicing with advanced automation and integrations.",
      },
    ],
    techStack: ["React", "Python", "TensorFlow", "PostgreSQL", "Stripe API"],
  },
  {
    id: "4",
    slug: "ai-blog-seo-automation",
    title: "AI Blog SEO Automation",
    category: "Content",
    description:
      "Intelligent content optimization platform that uses AI to generate SEO-friendly blog posts, optimize existing content, and boost search rankings.",
    excerpt:
      "Automate your content creation and SEO optimization with AI technology.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60",
    features: [
      "AI-powered content generation",
      "SEO keyword research & optimization",
      "Automated meta tags & descriptions",
      "Content scheduling & publishing",
      "Competitor analysis & insights",
      "Readability score optimization",
      "Internal linking suggestions",
      "Performance tracking & analytics",
    ],
    benefits: [
      "Increase organic traffic by 150%",
      "Publish 10x more content in less time",
      "Improve search engine rankings",
      "Reduce content creation costs by 60%",
      "Maintain consistent publishing schedule",
    ],
    pricing: {
      starter: "$99/month",
      professional: "$249/month",
      enterprise: "$599/month",
    },
    useCases: [
      {
        title: "Content Marketers",
        description:
          "Scale content production while maintaining quality and SEO best practices.",
      },
      {
        title: "Bloggers",
        description:
          "Generate engaging blog posts and optimize them for search engines.",
      },
      {
        title: "Digital Agencies",
        description:
          "Manage content for multiple clients with automated workflows.",
      },
    ],
    techStack: ["React", "GPT-4", "Node.js", "MongoDB", "Google Search API"],
  },
];

export default productsData;

// Utility function to get product by slug
export const getProductBySlug = (slug: string) =>
  productsData.find((product) => product.slug === slug);

// Utility function to get related products
export const getRelatedProducts = (currentSlug: string, limit: number = 3) =>
  productsData.filter((product) => product.slug !== currentSlug).slice(0, limit);

// Blog Data
export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    publishDate: string;
    readTime: number;
    category: string;
    tags: string[];
    image: string;
    featured: boolean;
  }
  
  const blogsData: BlogPost[] = [
    {
      id: "1",
      slug: "ai-automation-business-growth",
      title: "How AI Automation Drives Business Growth in 2025",
      excerpt:
        "Discover how AI automation is transforming businesses by streamlining operations, reducing costs, and boosting productivity across all industries.",
      content: `AI automation is revolutionizing the way businesses operate...`,
      author: "Alex Thompson",
      publishDate: "2025-01-15",
      readTime: 8,
      category: "AI Automation",
      tags: ["ai automation", "business growth", "digital transformation"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
      featured: true,
    },
    {
      id: "2",
      slug: "lead-generation-automation",
      title: "Automated Lead Generation: The Future of Sales",
      excerpt:
        "Learn how automated lead generation systems can help you capture, nurture, and convert more leads while saving time and resources.",
      content: `Lead generation is the lifeblood of any business...`,
      author: "Sarah Martinez",
      publishDate: "2025-02-05",
      readTime: 6,
      category: "Marketing Automation",
      tags: ["lead generation", "sales automation", "marketing"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
      featured: false,
    },
    {
      id: "3",
      slug: "ai-chatbots-customer-service",
      title: "AI Chatbots: Revolutionizing Customer Service",
      excerpt:
        "Explore how AI-powered chatbots are transforming customer service with 24/7 support, instant responses, and personalized interactions.",
      content: `Customer service is evolving rapidly with AI technology...`,
      author: "Michael Chen",
      publishDate: "2025-02-20",
      readTime: 7,
      category: "AI Technology",
      tags: ["chatbots", "customer service", "ai support"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=60",
      featured: true,
    },
    {
      id: "4",
      slug: "appointment-scheduling-automation",
      title: "Smart Appointment Scheduling: Save Time, Boost Revenue",
      excerpt:
        "Automated appointment scheduling eliminates no-shows, reduces admin work, and improves customer satisfaction for service-based businesses.",
      content: `Managing appointments manually is time-consuming and error-prone...`,
      author: "Jennifer Lee",
      publishDate: "2025-03-01",
      readTime: 5,
      category: "Business Automation",
      tags: ["scheduling", "appointment booking", "time management"],
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=60",
      featured: false,
    },
    {
      id: "5",
      slug: "email-automation-strategies",
      title: "5 Email Automation Strategies That Actually Work",
      excerpt:
        "Master email automation with these proven strategies to nurture leads, engage customers, and drive conversions on autopilot.",
      content: `Email marketing remains one of the most effective channels...`,
      author: "David Kumar",
      publishDate: "2025-03-12",
      readTime: 6,
      category: "Marketing Automation",
      tags: ["email marketing", "automation", "digital marketing"],
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop&q=60",
      featured: true,
    },
    {
      id: "6",
      slug: "ai-business-intelligence",
      title: "AI-Powered Business Intelligence: Make Data-Driven Decisions",
      excerpt:
        "Transform raw data into actionable insights with AI-powered business intelligence tools that help you make smarter decisions faster.",
      content: `In today's data-driven world, businesses need more than just data...`,
      author: "Rachel Foster",
      publishDate: "2025-03-25",
      readTime: 7,
      category: "Business Intelligence",
      tags: ["business intelligence", "data analytics", "ai insights"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      featured: false,
    },
    {
      id: "7",
      slug: "workflow-automation-productivity",
      title: "Workflow Automation: 10X Your Team's Productivity",
      excerpt:
        "Discover how workflow automation can eliminate repetitive tasks, reduce errors, and free up your team to focus on high-value work.",
      content: `Manual workflows are slowing down your business...`,
      author: "James Wilson",
      publishDate: "2025-04-05",
      readTime: 8,
      category: "Productivity",
      tags: ["workflow automation", "productivity", "efficiency"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
      featured: true,
    },
    {
      id: "8",
      slug: "crm-automation-guide",
      title: "CRM Automation: The Complete Guide for Growing Businesses",
      excerpt:
        "Learn how CRM automation helps you manage customer relationships, track sales pipelines, and close more deals with less effort.",
      content: `Customer relationship management is critical for business growth...`,
      author: "Emily Rodriguez",
      publishDate: "2025-04-15",
      readTime: 6,
      category: "CRM",
      tags: ["crm", "customer management", "sales automation"],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=60",
      featured: false,
    },
    {
      id: "9",
      slug: "ai-content-generation",
      title: "AI Content Generation: Create Quality Content at Scale",
      excerpt:
        "Explore how AI content generation tools can help you create blog posts, social media content, and marketing copy faster than ever.",
      content: `Content creation is essential for digital marketing success...`,
      author: "Sophia Anderson",
      publishDate: "2025-04-28",
      readTime: 5,
      category: "Content Marketing",
      tags: ["ai content", "content creation", "marketing automation"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60",
      featured: true,
    },
  ];
  
  export default blogsData;
  
  // Utility function to get featured blogs
  export const getFeaturedBlogs = () => blogsData.filter((blog) => blog.featured);
  
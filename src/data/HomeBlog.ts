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
  ];

  export default blogsData;
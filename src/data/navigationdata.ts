// Navigation Data Structure
export interface NavigationItem {
  name: string;
  slug: string;
  image: string;
  desc: string;
  color: string;
}

export interface MenuData {
  services: {
    title: string;
    items: NavigationItem[];
  };
  products: {
    title: string;
    items: NavigationItem[];
  };
}

export const navigationData: MenuData = {
  services: {
    title: "Services",
    items: [
      {
        name: "AI Automation",
        slug: "ai-automation",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=350&fit=crop",
        desc: "Intelligent automation solutions",
        color: "from-blue-500/30 to-cyan-500/30",
      },
      {
        name: "SEO",
        slug: "seo",
        image:
          "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&h=350&fit=crop",
        desc: "Search engine optimization",
        color: "from-green-500/30 to-emerald-500/30",
      },
      {
        name: "Website Development",
        slug: "website-development",
        image:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=350&fit=crop",
        desc: "Custom web solutions",
        color: "from-purple-500/30 to-pink-500/30",
      },
      {
        name: "Graphics Design",
        slug: "graphics-design",
        image:
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=350&fit=crop",
        desc: "Creative visual design",
        color: "from-orange-500/30 to-red-500/30",
      },
      {
        name: "Custom ERP System",
        slug: "custom-erp-system",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop",
        desc: "Enterprise resource planning",
        color: "from-indigo-500/30 to-purple-500/30",
      },
    ],
  },
  products: {
    title: "Products",
    items: [
      {
        name: "Asign IT ERP System",
        slug: "asign-it-erp",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",
        desc: "Complete ERP solution",
        color: "from-blue-500/30 to-indigo-500/30",
      },
      {
        name: "Email Automation",
        slug: "bulk-email-automation",
        image:
          "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=350&fit=crop",
        desc: "Automated email campaigns",
        color: "from-cyan-500/30 to-blue-500/30",
      },
      {
        name: "AI Invoice Generator",
        slug: "bulk-ai-invoice-generator",
        image:
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=350&fit=crop",
        desc: "AI-powered invoicing",
        color: "from-purple-500/30 to-pink-500/30",
      },
      {
        name: "AI Blog SEO Automation",
        slug: "ai-blog-seo-automation",
        image:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=350&fit=crop",
        desc: "Automated content optimization",
        color: "from-green-500/30 to-teal-500/30",
      },
      {
        name: "AI Calling Automation",
        slug: "ai-calling-automation",
        image:
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=350&fit=crop",
        desc: "AI-powered calling",
        color: "from-purple-500/30 to-pink-500/30",
      },
    ],
  },
};

// Main navigation links
export const mainNavLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Blog", path: "/blog" },
  {name:"Portfolio",path:"/portfolio"},
  { name: "Contact", path: "/contact" },
];

export default navigationData;

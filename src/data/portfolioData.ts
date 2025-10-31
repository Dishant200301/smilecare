// src/data/portfolioData.ts

export interface PortfolioCard {
  id: string; // Used for routing to the detail page
  category: 'AI & ML' | 'Web Development' | 'Mobile Apps' | 'Cloud Solutions' | 'Automation' | 'Web Application';
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string; // Placeholder for project card image
}

export const portfolioData: PortfolioCard[] = [
  {
    id: 'underthearch-portfolio',
    category: 'Web Application',
    title: 'UnderTheArch Portfolio',
    description: "A dynamic architectural portfolio platform showcasing innovative designs and projects. Features include cost estimation and a complete business management solution.",
    techStack: ['React', 'Node.js', 'Express', 'TailwindCSS'],
    imageUrl: '/images/projects/arch-portfolio.jpg', // Placeholder
  },
  {
    id: 'jp-sales-corporation',
    category: 'Web Development',
    title: 'JP Sales Corporation',
    description: "A corporate website for a leading steel manufacturer, presenting their extensive product range, manufacturing capabilities, and corporate information.",
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    imageUrl: '/images/projects/jp-sales.jpg', // Placeholder
  },
  {
    id: 'litcandles-minicommerce',
    category: 'Web Application',
    title: 'LitCandles MiniCommerce',
    description: "A beautiful mini-commerce website for a handcrafted candle company. Orders are managed through seamless WhatsApp integration for small business efficiency.",
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'WhatsApp API'],
    imageUrl: '/images/projects/litcandles.jpg', // Placeholder
  },
  {
    id: 'watchinsight-analytics',
    category: 'Web Development',
    title: 'WatchInsight Analytics',
    description: "A comprehensive luxury watch market analysis platform offering real-time price calculations and market insights for collectors and dealers.",
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    imageUrl: '/images/projects/watchinsight.jpg', // Placeholder
  },
  {
    id: 'lokichess-platform',
    category: 'Web Development',
    title: 'LokiChess Platform',
    description: "An interactive chess platform that combines traditional gameplay with modern features, including AI opponents and comprehensive player statistics.",
    techStack: ['React', 'Node.js', 'Express', 'Socket.io'],
    imageUrl: '/images/projects/lokichess.jpg', // Placeholder
  },
  {
    id: 'ai-newsletter-generator',
    category: 'AI & ML',
    title: 'AI Newsletter Generator',
    description: "An innovative platform that automatically generates comprehensive newsletters about artificial intelligence using advanced AI agents.",
    techStack: ['Python', 'Groq', 'LangChain', 'OpenAI API'],
    imageUrl: '/images/projects/ai-newsletter.jpg', // Placeholder
  },
  {
    id: 'shadow-mind-social-tools',
    category: 'AI & ML',
    title: 'Shadow Mind - Social Tools',
    description: "An intelligent social media analytics and content planning platform leveraging AI to provide data-driven insights and content calendars.",
    techStack: ['React', 'TypeScript', 'Flask', 'OpenAI'],
    imageUrl: '/images/projects/shadow-mind.jpg', // Placeholder
  },
];
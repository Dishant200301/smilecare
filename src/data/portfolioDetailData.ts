// src/data/portfolioDetailData.ts

export interface PortfolioDetail {
  id: string;
  category: 'AI & ML' | 'Web Development' | 'Mobile Apps' | 'Cloud Solutions' | 'Automation' | 'Web Application';
  title: string;
  heroImageUrl: string; // Larger image for the detail page
  liveDemoLink: string;
  descriptionFull: string[]; // Array of paragraphs for the main description
  features: string[];
  techStackDetailed: { name: string; icon: string }[]; // Example: { name: 'React', icon: 'RiReactjsLine' }
  challengeSolution: {
    challenge: string;
    solution: string;
  }
}

// NOTE: This array should match the IDs from portfolioData.ts
export const portfolioDetailData: PortfolioDetail[] = [
  {
    id: 'underthearch-portfolio',
    category: 'Web Application',
    title: 'UnderTheArch Portfolio',
    heroImageUrl: '/images/projects/detail-arch.jpg', // Placeholder
    liveDemoLink: '#',
    descriptionFull: [
      "The UnderTheArch project transformed a static architectural firm presence into a dynamic, full-featured business platform. It was built to not only showcase their portfolio but also to manage core business functions.",
      "Key features include a complex algorithm for interior cost estimation, a dedicated career opportunities portal, and a robust blog management system. The entire platform is managed via an advanced, secure admin panel built on Express/Node.js."
    ],
    features: [
      "Dynamic Architectural Showcase",
      "Interior Cost Estimation Tool",
      "Career & Recruitment Module",
      "Advanced Admin Panel for Content Management"
    ],
    techStackDetailed: [
      { name: 'React', icon: 'react' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'TailwindCSS', icon: 'tailwindcss' },
    ],
    challengeSolution: {
      challenge: "Integrating complex, sector-specific cost calculation algorithms into a user-friendly interface.",
      solution: "Developed a microservice architecture for the estimation engine, ensuring high performance and scalability, integrated via a REST API with the React frontend."
    }
  },
  // ... (Add details for all other projects following this structure)
  {
    id: 'ai-newsletter-generator',
    category: 'AI & ML',
    title: 'AI Newsletter Generator',
    heroImageUrl: '/images/projects/detail-ai.jpg', // Placeholder
    liveDemoLink: '#',
    descriptionFull: [
      "The AI Newsletter Generator is a revolutionary platform that automates the entire newsletter creation process. It leverages multiple large language models (LLMs) and advanced AI agents to curate, analyze, and summarize the latest AI industry news.",
      "The platform is designed to produce a weekly, comprehensive newsletter with minimal human intervention, saving countless hours for content teams while maintaining a high standard of quality and relevance."
    ],
    features: [
      "Automated Content Curation",
      "AI-Powered Summarization",
      "Sentiment Analysis of News",
      "Scheduled Email Delivery Integration"
    ],
    techStackDetailed: [
      { name: 'Python', icon: 'python' },
      { name: 'Groq', icon: 'groq' },
      { name: 'LangChain', icon: 'langchain' },
      { name: 'LLMs', icon: 'llm' },
      { name: 'FastAPI', icon: 'fastapi' },
    ],
    challengeSolution: {
      challenge: "Ensuring the AI-generated content maintains a coherent, human-readable tone and avoids factual hallucinations.",
      solution: "Implemented a multi-step LangChain process with a final 'Fact-Checker' agent that validates sources and restructures the output for readability before final delivery."
    }
  },
  {
    id: 'jp-sales-corporation',
    category: 'Web Development',
    title: 'JP Sales Corporation',
    heroImageUrl: '/images/projects/detail-jp-sales.jpg',
    liveDemoLink: '#',
    descriptionFull: [
      "JP Sales Corporation's website showcases their extensive steel manufacturing capabilities and product range. The platform serves as a comprehensive digital presence for one of the leading steel manufacturers.",
      "The website features detailed product catalogs, manufacturing process information, and corporate details, all presented in a professional and accessible manner."
    ],
    features: [
      "Product Catalog with Detailed Specifications",
      "Manufacturing Process Showcase",
      "Corporate Information Portal",
      "Responsive Design for All Devices"
    ],
    techStackDetailed: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Bootstrap', icon: 'bootstrap' },
    ],
    challengeSolution: {
      challenge: "Creating a professional corporate website that effectively communicates complex manufacturing capabilities to diverse audiences.",
      solution: "Developed a clean, structured website using Bootstrap for responsive design, with clear navigation and detailed product information organized for easy access."
    }
  },
  {
    id: 'litcandles-minicommerce',
    category: 'Web Application',
    title: 'LitCandles MiniCommerce',
    heroImageUrl: '/images/projects/detail-litcandles.jpg',
    liveDemoLink: '#',
    descriptionFull: [
      "LitCandles is a beautiful mini-commerce platform designed for a handcrafted candle business. The platform combines elegant product presentation with seamless WhatsApp integration for order management.",
      "This solution is perfect for small businesses, eliminating the need for complex payment gateways while maintaining a professional online presence."
    ],
    features: [
      "Beautiful Product Gallery",
      "WhatsApp Order Integration",
      "Product Filtering and Search",
      "Mobile-First Design"
    ],
    techStackDetailed: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'TailwindCSS', icon: 'tailwindcss' },
    ],
    challengeSolution: {
      challenge: "Creating an e-commerce experience without traditional payment processing while maintaining professionalism and ease of use.",
      solution: "Integrated WhatsApp API for direct order communication, allowing customers to browse products and place orders through a familiar messaging platform."
    }
  },
  {
    id: 'watchinsight-analytics',
    category: 'Web Development',
    title: 'WatchInsight Analytics',
    heroImageUrl: '/images/projects/detail-watchinsight.jpg',
    liveDemoLink: '#',
    descriptionFull: [
      "WatchInsight Analytics is a comprehensive platform for luxury watch market analysis. It provides real-time price calculations and market insights for collectors and dealers.",
      "The platform aggregates data from multiple sources to provide accurate market valuations and trend analysis for high-end timepieces."
    ],
    features: [
      "Real-Time Price Calculations",
      "Market Trend Analysis",
      "Watch Database with Specifications",
      "Dealer and Collector Tools"
    ],
    techStackDetailed: [
      { name: 'React', icon: 'react' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'PostgreSQL', icon: 'postgresql' },
    ],
    challengeSolution: {
      challenge: "Aggregating and analyzing data from multiple sources to provide accurate, real-time market valuations for luxury watches.",
      solution: "Built a robust data pipeline that collects, normalizes, and analyzes market data, presenting it through an intuitive dashboard with advanced filtering capabilities."
    }
  },
  {
    id: 'lokichess-platform',
    category: 'Web Development',
    title: 'LokiChess Platform',
    heroImageUrl: '/images/projects/detail-lokichess.jpg',
    liveDemoLink: '#',
    descriptionFull: [
      "LokiChess is an interactive chess platform that combines traditional gameplay with modern features. Players can compete against AI opponents or other players in real-time matches.",
      "The platform includes comprehensive player statistics, game analysis, and a rating system to track improvement over time."
    ],
    features: [
      "Real-Time Multiplayer Chess",
      "AI Opponents with Multiple Difficulty Levels",
      "Game Analysis and Statistics",
      "Player Rating System"
    ],
    techStackDetailed: [
      { name: 'React', icon: 'react' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'Socket.io', icon: 'socket.io' },
    ],
    challengeSolution: {
      challenge: "Implementing real-time gameplay with low latency while maintaining game state consistency across multiple clients.",
      solution: "Utilized Socket.io for real-time communication and implemented a robust game state management system that ensures synchronization between players."
    }
  },
  {
    id: 'shadow-mind-social-tools',
    category: 'AI & ML',
    title: 'Shadow Mind - Social Tools',
    heroImageUrl: '/images/projects/detail-shadow-mind.jpg',
    liveDemoLink: '#',
    descriptionFull: [
      "Shadow Mind is an intelligent social media analytics and content planning platform. It leverages AI to provide data-driven insights and automated content calendar generation.",
      "The platform helps social media managers optimize their content strategy by analyzing engagement patterns and suggesting optimal posting times."
    ],
    features: [
      "AI-Powered Content Analysis",
      "Automated Content Calendar",
      "Engagement Pattern Recognition",
      "Multi-Platform Analytics"
    ],
    techStackDetailed: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Flask', icon: 'flask' },
      { name: 'OpenAI', icon: 'openai' },
    ],
    challengeSolution: {
      challenge: "Processing and analyzing large volumes of social media data to provide actionable insights in real-time.",
      solution: "Developed an AI-powered analytics engine using OpenAI's API combined with custom machine learning models to identify patterns and generate content recommendations."
    }
  },
];
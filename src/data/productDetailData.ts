import {
  CheckSquare,
  History,
  ListChecks,
  Forward,
  CalendarClock,
  MapPin,
  Megaphone,
  Send,
  PlayCircle,
  Filter,
  LineChart,
  Eye,
  FilePlus,
  FolderOpen,
  Activity,
  Braces,
  Download,
  Brain,
  Map,
  Cpu,
  Network,
  PieChart,
  Share,
  Mic,
  PhoneCall,
  Calendar,
  RefreshCw,
  FileAudio,
  UserPlus,
  Lock,
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
  Settings,
  Workflow,
  Layers,
  Award,
  Search,
  MessageSquare,
  Headphones,
  Monitor,
  Repeat,
  Code,
  Image as ImageIcon,
  Palette,
  UserCheck,
  Bot,
  Server,
  ShoppingCart,
  Layout,
  Cloud,
  Printer,
  Smartphone,
  Link,
  Edit3,
  CheckCircle,
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
    videoSrc: "/assets/video/ERP.MP4",
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
        icon: "Database",
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
      {
        icon: "Shield",
        title: "Role-Based Access Control",
        description: "Five-tier role system: Super Admin, Admin, HOD, Manager, and Member. Granular permissions with department isolation and route protection for security.",
      },
      {
        icon: "Layers",
        title: "Multi-Tenancy Architecture",
        description: "Complete department isolation with cross-department visibility for admins. Department-specific locations, user management, task filtering, color coding.",
      },
      {
        icon: "CheckSquare",
        title: "Advanced Task Management",
        description: "Public, private, and scheduled tasks with priority levels, due dates, file attachments, tags, and location-based requirements. Multiple view modes available.",
      },
      {
        icon: "History",
        title: "Task Path Tracking",
        description: "Every task maintains complete history of all actions including creation, assignment, forwarding, status changes, and verification. Full accountability tracking.",
      },
      {
        icon: "ListChecks",
        title: "Create Checklist & Subtask",
        description: "Multiple checklist items per task with individual completion tracking. Pin subtasks, verify with approval workflow, track progress. Includes voice recording.",
      },
      {
        icon: "TrendingUp",
        title: "Real-Time Progress Tracking",
        description: "Add progress notes during task execution with timestamped updates. Track progress percentage (0-100%), view historical progress, enable real-time visibility.",
      },
      {
        icon: "Users",
        title: "Team Task",
        description: "Assign single tasks to multiple team members with individual progress tracking per member. Collaborative task management with team-wide notifications.",
      },
      {
        icon: "Forward",
        title: "Reassign or Forward a Task",
        description: "Forward tasks to other users while maintaining complete task history. Add notes during forwarding, automatic notifications to new assignees, seamless workflow.",
      },
      {
        icon: "CalendarClock",
        title: "Scheduled Task",
        description: "Automatically generate tasks from scheduled templates with multiple frequency options (daily, weekly, monthly, quarterly, yearly). Automatic assignment.",
      },
      {
        icon: "MapPin",
        title: "Attendance with Geo-Fencing",
        description: "Location-based attendance tracking with configurable geo-fencing (10-10,000m radius). Automatic check-in validation, multi-location support, nearest detection.",
      },
      {
        icon: "Globe",
        title: "Location-Wise Attendance",
        description: "Multi-location support with distance calculation and nearest location detection. Office and remote work modes, location-specific working hours, grace periods.",
      },
      {
        icon: "DollarSign",
        title: "Expense Approval Workflow",
        description: "Multi-stage approval workflow with HOD and Admin approval levels. Payment tracking with two-stage process (Approval → Payment), rejection reasons included.",
      },
      {
        icon: "FileText",
        title: "Document Vault",
        description: "Secure document storage with organization-level and department-level access control. Tag-based categorization, advanced search, upload permissions, metadata.",
      },
      {
        icon: "BarChart3",
        title: "Dashboard & Analytics",
        description: "Live dashboard updates with real-time statistics, performance metrics, and data visualization. Comprehensive reporting across all modules with instant updates.",
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
    videoSrc: "/assets/video/AI-Automation.MP4",
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
        icon: "Mail",
        title: "Why Choose Us for Email Automation",
        description:
          "Achieve superior email marketing results with our reliable, scalable platform that prioritizes deliverability and engagement.",
        points: [
          "Increase open rates by 35%.",
          "Save 20+ hours weekly on tasks.",
          "Boost customer retention.",
          "Seamless integration tools."
        ]
      },
      {
        icon: "Megaphone",
        title: "Campaign Management",
        description: "Create and run email campaigns with custom names and subject lines. Schedule when emails are sent, check campaign status, and monitor performance in real-time.",
      },
      {
        icon: "Users",
        title: "Contact Management",
        description: "Add and organize contacts manually or upload files (CSV/Excel). Group contacts for specific campaigns, keep lists clean with duplicate removal, and organize by categories.",
      },
      {
        icon: "Layout",
        title: "Email Templates",
        description: "Make emails look professional with custom designs. Save and reuse email templates, add personalization placeholders like {{Name}}, and create mobile-responsive layouts.",
      },
      {
        icon: "Send",
        title: "Bulk Email Sending",
        description: "Send emails to many people at once with automatic personalization. Use multiple Gmail accounts, schedule automated sends, and personalize each email automatically.",
      },
      {
        icon: "BarChart3",
        title: "Email Tracking & Analytics",
        description: "See who opened your emails and track link clicks. Monitor delivery success rates, generate performance reports, and use results to improve future campaigns.",
      },
      {
        icon: "UserCheck",
        title: "User Account Management",
        description: "Secure personal accounts with individual access control. Connect Gmail accounts, manage account settings, personal dashboard, and profile management.",
      },
      {
        icon: "PlayCircle",
        title: "Campaign Control",
        description: "Start, pause, and stop campaigns with full control. Track campaign status (Running/Completed/Paused), monitor open and click rates in real-time, and manage multiple campaigns.",
      },
      {
        icon: "Filter",
        title: "Advanced Contact Features",
        description: "Search and filter contacts with advanced options. Export contact lists, delete invalid email addresses, organize by categories, and maintain clean contact databases.",
      },
      {
        icon: "LineChart",
        title: "Performance Monitoring",
        description: "View detailed analytics on who opened emails and which links were clicked. Monitor delivery success rates, export analytics data, and track campaign performance over time.",
      },
      {
        icon: "Eye",
        title: "Email Preview & Testing",
        description: "Preview emails before sending to ensure quality. Test campaigns on small groups first, duplicate campaigns for reuse, and validate email content and design.",
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
    videoSrc: "/assets/video/Web-development.MP4",
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
        icon: "FileText",
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
      {
        icon: "FilePlus",
        title: "Invoice Creation",
        description: "Create professional invoices using your own HTML design templates. Upload custom templates, use personalization placeholders, preview templates, and generate professional PDFs with automatic numbering.",
      },
      {
        icon: "Database",
        title: "Client Data Management",
        description: "Prepare client lists using spreadsheets (Excel/CSV) with Name, Email, Amount (required) and optional fields. Upload and process bulk data, preview before processing, and validate client information.",
      },
      {
        icon: "Layout",
        title: "Template Management",
        description: "Save reusable invoice templates and name them for easy organization. Edit existing templates, preview with sample data, and use custom HTML designs with branding support.",
      },
      {
        icon: "Mail",
        title: "Email Sending",
        description: "Send invoices directly to clients via email with custom email messages. Use email templates, personalize with placeholders, and send invoices in bulk to multiple clients automatically.",
      },
      {
        icon: "Settings",
        title: "Email Configuration",
        description: "Connect Gmail accounts with app passwords or other email providers (Outlook, Yahoo). Secure credential storage with app passwords and SMTP configuration support.",
      },
      {
        icon: "FolderOpen",
        title: "Campaign Management",
        description: "Create invoice campaigns, name and organize them for easy tracking. View all campaigns, search by name, track campaign status, and manage complete campaign history.",
      },
      {
        icon: "Layers",
        title: "Bulk Operations",
        description: "Generate multiple PDFs at once from client lists and process large batches. Download all invoices as ZIP file, batch email sending, and generate invoices without sending if needed.",
      },
      {
        icon: "Activity",
        title: "Email Progress Tracking",
        description: "Real-time email sending progress with live progress bar and status updates. Track success and failure counts, view detailed sending logs, and receive error notifications.",
      },
      {
        icon: "Braces",
        title: "Placeholder System",
        description: "Complete placeholder support for client data: {{Name}}, {{Email}}, {{Amount}}, {{Product}}, {{Quantity}}, {{Address}}, {{invoice_number}}, {{current_date}}, and company details.",
      },
      {
        icon: "Download",
        title: "Export & Download",
        description: "Download individual invoices or all invoices as a single ZIP file. Export campaign data, save generated PDFs, and backup invoice files for record keeping.",
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
    videoSrc: "/assets/video/SEO.MP4",
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
        icon: "PenTool",
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
      {
        icon: "Globe",
        title: "Website Content Extraction",
        description: "Automatically extract all relevant content with intelligent crawling. Follows links within boundaries, processes hundreds of pages in batch, and tracks progress in real-time.",
      },
      {
        icon: "Brain",
        title: "AI-Powered Keyword Analysis",
        description: "Advanced AI analysis for content context and keyword intent. Suggests blog post types and provides SEO recommendations with meta titles, descriptions, and URLs.",
      },
      {
        icon: "Map",
        title: "Local Keyword Analysis",
        description: "Operate on your local system without API costs using multiple extraction methods. Classifies keywords into 15 intent categories and groups related keywords into clusters.",
      },
      {
        icon: "FileText",
        title: "12 Blog Post Types",
        description: "Generate professional content across 12 types including How-To Guides, Case Studies, Comparisons, Buyer's Guides, Listicles, Expert Opinions, and Technical Documentation.",
      },
      {
        icon: "TrendingUp",
        title: "SEO Optimization",
        description: "Automatically includes target keywords naturally with proper heading structure (H1, H2, H3). SEO-optimized titles, meta descriptions, and internal linking opportunities built-in.",
      },
      {
        icon: "Cpu",
        title: "Multiple AI Providers",
        description: "Choose between Groq (fast) or Gemini (advanced) for blog generation. Flexible AI model selection with customizable word count targets (1,000-3,000+ words).",
      },
      {
        icon: "Network",
        title: "Keyword Clustering",
        description: "Automatically groups related keywords into clusters by topic. Identifies main and secondary keywords, suggests long-tail keywords, and provides visual cluster representations.",
      },
      {
        icon: "PieChart",
        title: "Interactive Dashboards",
        description: "Visual representations with interactive charts showing keyword relationships and distributions. Intent distribution breakdowns, word clouds, treemaps, and content statistics.",
      },
      {
        icon: "CheckCircle",
        title: "Factual Accuracy",
        description: "Blog generation uses only information from your actual website content, ensuring accuracy and credibility. Maintains brand alignment and messaging consistency automatically.",
      },
      {
        icon: "Share",
        title: "Export Options",
        description: "Export generated blog posts in HTML format for websites or Markdown format for content management systems. All exports include proper formatting and SEO elements.",
      },
      {
        icon: "Database",
        title: "Data Management",
        description: "Centralized storage with complete crawl history, analysis tracking, and blog archive. Search and filter capabilities, version history for analyses, and export options.",
      },
      {
        icon: "Edit3",
        title: "Customizable Content",
        description: "Override default topics with your own ideas and add specific requirements for each blog post. Customize content length, select blog types, and provide additional instructions.",
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
    videoSrc: "/assets/video/AI-Automation.MP4",
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
        icon: "Phone",
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
      {
        icon: "Mic",
        title: "AI Voice Assistant",
        description: "Conversational AI that understands natural human speech and responds in real-time with human-like voice. Context-aware responses with conversation flow and understanding.",
      },
      {
        icon: "PhoneCall",
        title: "Outbound & Inbound Calling",
        description: "Automatically makes outgoing calls to leads or customers and handles incoming calls without human help. Full automation for outbound campaigns and inbound customer service.",
      },
      {
        icon: "Workflow",
        title: "Custom Call Flow",
        description: "Design conversation flows visually or dynamically with greetings, questions, responses, and transfers. Flexible script builder for personalized call experiences.",
      },
      {
        icon: "Calendar",
        title: "Call Scheduling & Follow-ups",
        description: "Automatically schedules callbacks for missed or busy numbers and sends timely reminders. Smart scheduling system with automated follow-up management and priority handling.",
      },
      {
        icon: "RefreshCw",
        title: "CRM Integration",
        description: "Syncs call results, lead details, and notes directly to your CRM like HubSpot, Salesforce, or custom systems. Seamless integration with popular CRM platforms.",
      },
      {
        icon: "FileAudio",
        title: "Call Recording & Transcription",
        description: "Records all conversations, generates text transcripts, and allows searching or analyzing them. Complete call documentation with searchable transcriptions.",
      },
      {
        icon: "BarChart3",
        title: "Analytics Dashboard",
        description: "Shows metrics like call duration, success rate, conversion rate, and sentiment analysis. Comprehensive analytics with real-time performance tracking.",
      },
      {
        icon: "UserPlus",
        title: "Human Escalation & Routing",
        description: "Transfers calls to human agents when AI can't handle complex queries or when user requests it. Smart routing with seamless escalation to human support.",
      },
      {
        icon: "Lock",
        title: "Data Privacy & Compliance",
        description: "Secure data encryption, consent management, and compliance with telecom and data protection laws like TRAI and GDPR. Enterprise-grade security and regulatory compliance.",
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
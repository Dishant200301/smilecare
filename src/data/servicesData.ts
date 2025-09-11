// src/data/servicesData.ts
import {
    Calendar,
    MessageSquare,
    BarChart3,
    Clock,
    FileText,
    Briefcase,
    Sparkles,
    Users,
    Shield,
    Dumbbell,
    Heart,
    Home,
    Scissors,
    Brain,
    DollarSign,
    CalendarIcon,
    BarChartIcon,
  } from "lucide-react";
  
  export const servicesData = {
    "botox-skincare": {
      slug: "botox-skincare",
      metaTitle: "Botox & Skin Care Clinic Automation — TryzenIQ",
      metaDescription:
        "Automate your beauty clinic with AI-powered booking, analytics, and client engagement.",
      title: "Botox & Skin Care",
      subtitle: "Clinic Automation",
      heroImage:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800",
      heroDescription:
        "Streamline your beauty clinic with AI-powered appointment booking, client management, and automated communication.",
      features: [
        {
          icon: Calendar,
          title: "Smart Booking",
          description: "AI-optimized scheduling for maximum efficiency",
          imageUrl:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        },
        {
          icon: Users,
          title: "Client Profiles",
          description: "Detailed service history and preferences",
          imageUrl:
            "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600",
        },
        {
          icon: BarChart3,
          title: "Treatment Analytics",
          description: "Track progress, analyze effectiveness, and optimize services",
          imageUrl:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
        },
        {
          icon: Clock,
          title: "24/7 Customer Support",
          description: "AI assistant handles consultations and pricing inquiries",
          imageUrl:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
        },
      ],
      benefits: [
        "Increase appointment bookings by 85%",
        "Reduce no-shows by 65%",
        "Improve client retention by 70%",
        "Save 15+ hours per week on admin tasks",
      ],
      metrics: [
        { label: "Bookings", value: "+85%" },
        { label: "No-Shows", value: "-65%" },
        { label: "Retention", value: "+70%" },
      ],
      ctaIcon: Sparkles,
      ctaTitle: "Transform Your Beauty Clinic Today",
      ctaDescription: "Join hundreds of clinics already using our automation platform.",
      ctaButtonLabel: "Start Free Trial",
      ctaHighlight: "Beauty Clinic",
    },
  
    "clinics-dentist": {
      slug: "clinics-dentist",
      metaTitle: "Dental & Medical Clinic Automation — TryzenIQ",
      metaDescription:
        "Streamline patient management, appointments, and medical workflows with AI automation.",
      title: "Clinics & Dentist",
      subtitle: "Practice Management",
      heroImage:
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800",
      heroDescription:
        "Automate patient scheduling, medical records, and practice management with intelligent healthcare solutions.",
      features: [
        {
          icon: Calendar,
          title: "Patient Scheduling",
          description: "Smart appointment booking with automated reminders",
          imageUrl:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600",
        },
        {
          icon: FileText,
          title: "Digital Records",
          description: "Secure patient management and medical history tracking",
          imageUrl:
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600",
        },
        {
          icon: BarChart3,
          title: "Practice Analytics",
          description: "Monitor patient flow, revenue, and treatment outcomes",
          imageUrl:
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600",
        },
        {
          icon: MessageSquare,
          title: "Patient Communication",
          description: "Automated follow-ups and treatment reminders",
          imageUrl:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
        },
      ],
      benefits: [
        "Reduce appointment no-shows by 70%",
        "Increase patient satisfaction by 80%",
        "Save 20+ hours per week on admin work",
        "Improve treatment compliance by 60%",
      ],
      metrics: [
        { label: "No-Shows", value: "-70%" },
        { label: "Patient Satisfaction", value: "+80%" },
        { label: "Admin Time Saved", value: "20+ hrs/week" },
      ],
      ctaIcon: Heart,
      ctaTitle: "Modernize Your Medical Practice",
      ctaDescription: "Transform patient care with intelligent automation.",
      ctaButtonLabel: "Schedule Demo",
      ctaHighlight: "Medical Practice",
    },
  
    "gym-health-coach": {
      slug: "gym-health-coach",
      metaTitle: "Gym & Health Coach Automation — TryzenIQ",
      metaDescription:
        "Automate member management, fitness consultations, and coaching workflows.",
      title: "Gym & Health Coach",
      subtitle: "Fitness Automation",
      heroImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      heroDescription:
        "Streamline member management, automate fitness consultations, and track client progress with AI-powered tools.",
      features: [
        {
          icon: Users,
          title: "Member Management",
          description: "Automated onboarding and membership tracking",
          imageUrl:
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600",
        },
        {
          icon: Calendar,
          title: "Session Scheduling",
          description: "Smart booking for personal training and classes",
          imageUrl:
            "https://images.unsplash.com/photo-1506629905607-45ff300ce3ec?w=600",
        },
        {
          icon: BarChart3,
          title: "Progress Tracking",
          description: "Monitor client fitness goals and achievements",
          imageUrl:
            "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600",
        },
        {
          icon: MessageSquare,
          title: "Automated Check-ins",
          description: "Regular progress updates and motivation messages",
          imageUrl:
            "https://images.unsplash.com/photo-1594737625785-a3a133f5f3f4?w=600",
        },
      ],
      benefits: [
        "Increase member retention by 75%",
        "Boost personal training bookings by 90%",
        "Reduce administrative tasks by 60%",
        "Improve client results by 85%",
      ],
      metrics: [
        { label: "Member Retention", value: "+75%" },
        { label: "PT Bookings", value: "+90%" },
        { label: "Client Results", value: "+85%" },
      ],
      ctaIcon: Dumbbell,
      ctaTitle: "Supercharge Your Fitness Business",
      ctaDescription: "Help more clients achieve their goals with automation.",
      ctaButtonLabel: "Get Started",
      ctaHighlight: "Fitness Business",
    },
  
    "business-consultation": {
      slug: "business-consultation",
      metaTitle: "Business Consultation Automation — TryzenIQ",
      metaDescription:
        "AI-powered solutions for consultants: scheduling, project automation, and analytics.",
      title: "Business Consultation",
      subtitle: "Automation",
      heroImage:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
      heroDescription:
        "Streamline your consulting practice with AI-powered client management, project automation, and intelligent scheduling.",
      features: [
        {
          icon: Calendar,
          title: "Intelligent Scheduling",
          description: "AI matches clients with the right consultant and slot",
          imageUrl:
            "https://images.unsplash.com/photo-1533749047139-189de3cf06d3?w=600",
        },
        {
          icon: FileText,
          title: "Project Management",
          description: "Automated proposals, contracts, and milestones",
          imageUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
        },
        {
          icon: BarChart3,
          title: "Analytics",
          description: "Real-time ROI tracking and dashboards",
          imageUrl:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
        },
        {
          icon: Clock,
          title: "24/7 Support",
          description: "AI assistant for inquiries and scheduling",
          imageUrl:
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600",
        },
      ],
      benefits: [
        "Increase consultation bookings by 90%",
        "Reduce delivery time by 40%",
        "Improve client satisfaction by 95%",
        "Boost profitability by 60%",
      ],
      metrics: [
        { label: "Consultation Bookings", value: "+90%" },
        { label: "Delivery Time", value: "-40%" },
        { label: "Satisfaction", value: "+95%" },
        { label: "Profitability", value: "+60%" },
      ],
      ctaIcon: Briefcase,
      ctaTitle: "Transform Your Consulting Practice",
      ctaDescription: "Scale your practice with AI-driven automation.",
      ctaButtonLabel: "Schedule a Demo",
      ctaHighlight: "Consulting Practice",
    },
  
    "it-saas": {
      slug: "it-saas",
      metaTitle: "IT & SaaS Service Automation — TryzenIQ",
      metaDescription:
        "Automate customer support, onboarding, and technical service delivery.",
      title: "IT & SaaS Services",
      subtitle: "Tech Automation",
      heroImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
      heroDescription:
        "Streamline technical support, automate customer onboarding, and enhance service delivery with AI-powered solutions.",
      features: [
        {
          icon: Shield,
          title: "Automated Support",
          description: "AI-powered ticketing and issue resolution",
          imageUrl:
            "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600",
        },
        {
          icon: Users,
          title: "Customer Onboarding",
          description: "Streamlined user setup and training workflows",
          imageUrl:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
        },
        {
          icon: BarChart3,
          title: "Performance Monitoring",
          description: "Real-time system health and user analytics",
          imageUrl:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
        },
        {
          icon: Clock,
          title: "24/7 Monitoring",
          description: "Continuous uptime monitoring and alerts",
          imageUrl:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
        },
      ],
      benefits: [
        "Reduce support response time by 80%",
        "Increase customer satisfaction by 85%",
        "Automate 70% of routine tasks",
        "Improve service uptime by 99.9%",
      ],
      metrics: [
        { label: "Response Time", value: "-80%" },
        { label: "Customer Satisfaction", value: "+85%" },
        { label: "Task Automation", value: "70%" },
      ],
      ctaIcon: Shield,
      ctaTitle: "Elevate Your Tech Services",
      ctaDescription: "Deliver exceptional IT support with automation.",
      ctaButtonLabel: "Start Trial",
      ctaHighlight: "Tech Services",
    },
  
    "salons-spa": {
      slug: "salons-spa",
      metaTitle: "Salon & Spa Automation — TryzenIQ",
      metaDescription:
        "Automate beauty service bookings, client management, and spa operations.",
      title: "Salons & Spa",
      subtitle: "Beauty Automation",
      heroImage:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
      heroDescription:
        "Transform your salon and spa operations with intelligent booking, client management, and automated marketing.",
      features: [
        {
          icon: Calendar,
          title: "Beauty Booking",
          description: "Smart scheduling for all beauty services",
          imageUrl:
            "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600",
        },
        {
          icon: Users,
          title: "Client Management",
          description: "Track preferences, history, and loyalty points",
          imageUrl:
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
        },
        {
          icon: Scissors,
          title: "Service Tracking",
          description: "Monitor treatments and stylist performance",
          imageUrl:
            "https://images.unsplash.com/photo-1562322140-8198f7c8a3a0?w=600",
        },
        {
          icon: MessageSquare,
          title: "Client Communication",
          description: "Automated reminders and follow-up messages",
          imageUrl:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600",
        },
      ],
      benefits: [
        "Increase bookings by 80%",
        "Reduce no-shows by 60%",
        "Boost client retention by 75%",
        "Save 12+ hours per week",
      ],
      metrics: [
        { label: "Bookings", value: "+80%" },
        { label: "No-Shows", value: "-60%" },
        { label: "Client Retention", value: "+75%" },
      ],
      ctaIcon: Scissors,
      ctaTitle: "Beautify Your Business Operations",
      ctaDescription: "Create amazing experiences with smart automation.",
      ctaButtonLabel: "Book Demo",
      ctaHighlight: "Business Operations",
    },
  
    "real-estate-agents": {
      slug: "real-estate-agents",
      metaTitle: "Real Estate Agent Automation — TryzenIQ",
      metaDescription:
        "Automate property showings, lead management, and client communications.",
      title: "Real Estate Agents",
      subtitle: "Property Automation",
      heroImage:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      heroDescription:
        "Streamline property management, automate lead nurturing, and close more deals with intelligent real estate tools.",
      features: [
        {
          icon: Home,
          title: "Property Management",
          description: "Automated listing and showing scheduling",
          imageUrl:
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600",
        },
        {
          icon: Users,
          title: "Lead Management",
          description: "Intelligent lead scoring and nurturing",
          imageUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
        },
        {
          icon: MessageSquare,
          title: "Client Communication",
          description: "Automated follow-ups and market updates",
          imageUrl:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600",
        },
        {
          icon: BarChart3,
          title: "Market Analytics",
          description: "Real-time market trends and pricing insights",
          imageUrl:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
        },
      ],
      benefits: [
        "Increase lead conversion by 85%",
        "Close deals 40% faster",
        "Manage 3x more properties",
        "Boost client satisfaction by 90%",
      ],
      metrics: [
        { label: "Lead Conversion", value: "+85%" },
        { label: "Deal Closure", value: "40% faster" },
        { label: "Property Management", value: "3x more" },
      ],
      ctaIcon: Home,
      ctaTitle: "Accelerate Your Real Estate Success",
      ctaDescription: "Close more deals with intelligent automation.",
      ctaButtonLabel: "Get Started",
      ctaHighlight: "Real Estate",
    },
  
    "therapists-counselors": {
      slug: "therapists-counselors",
      metaTitle: "Therapy & Counseling Practice Automation — TryzenIQ",
      metaDescription:
        "Secure patient management, appointment scheduling, and practice automation for mental health professionals.",
      title: "Therapists & Counselors",
      subtitle: "Mental Health Practice",
      heroImage:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
      heroDescription:
        "Enhance your mental health practice with secure patient management, automated scheduling, and confidential communication tools.",
      features: [
        {
          icon: Brain,
          title: "Secure Patient Management",
          description: "HIPAA-compliant records and session tracking",
          imageUrl:
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600",
        },
        {
          icon: Calendar,
          title: "Therapy Scheduling",
          description: "Automated appointment booking and reminders",
          imageUrl:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        },
        {
          icon: Shield,
          title: "Privacy Protection",
          description: "End-to-end encrypted communications",
          imageUrl:
            "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600",
        },
        {
          icon: BarChart3,
          title: "Progress Tracking",
          description: "Monitor patient outcomes and treatment goals",
          imageUrl:
            "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600",
        },
      ],
      benefits: [
        "Reduce no-shows by 75%",
        "Increase patient engagement by 80%",
        "Save 10+ hours per week on admin",
        "Improve treatment outcomes by 65%",
      ],
      metrics: [
        { label: "No-Shows", value: "-75%" },
        { label: "Patient Engagement", value: "+80%" },
        { label: "Treatment Outcomes", value: "+65%" },
      ],
      ctaIcon: Brain,
      ctaTitle: "Enhance Your Mental Health Practice",
      ctaDescription: "Support more patients with secure automation.",
      ctaButtonLabel: "Learn More",
      ctaHighlight: "Mental Health",
    },
  
    "insurance-financial": {
      slug: "insurance-financial",
      metaTitle: "Insurance & Financial Services Automation — TryzenIQ",
      metaDescription:
        "Automate claim processing, client management, and financial service delivery.",
      title: "Insurance & Financial",
      subtitle: "Services Automation",
      heroImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
      heroDescription:
        "Streamline financial services with automated claim processing, client onboarding, and intelligent risk assessment.",
      features: [
        {
          icon: DollarSign,
          title: "Claims Processing",
          description: "Automated claim review and approval workflows",
          imageUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
        },
        {
          icon: Users,
          title: "Client Onboarding",
          description: "Streamlined account setup and KYC processes",
          imageUrl:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
        },
        {
          icon: Shield,
          title: "Risk Assessment",
          description: "AI-powered risk analysis and fraud detection",
          imageUrl:
            "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600",
        },
        {
          icon: BarChart3,
          title: "Financial Analytics",
          description: "Real-time portfolio and performance tracking",
          imageUrl:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
        },
      ],
      benefits: [
        "Process claims 70% faster",
        "Reduce processing errors by 85%",
        "Increase client satisfaction by 80%",
        "Lower operational costs by 50%",
      ],
      metrics: [
        { label: "Claim Processing", value: "70% faster" },
        { label: "Error Reduction", value: "-85%" },
        { label: "Client Satisfaction", value: "+80%" },
      ],
      ctaIcon: DollarSign,
      ctaTitle: "Modernize Your Financial Services",
      ctaDescription: "Deliver faster, more accurate financial solutions.",
      ctaButtonLabel: "Request Demo",
      ctaHighlight: "Financial Services",
    },
  };
  
  // Export array for backward compatibility
  export const services = Object.values(servicesData);
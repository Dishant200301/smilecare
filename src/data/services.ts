// src/data/services.ts

export type Service = {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
};

export const services: Service[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=60",
    title: "Botox & Skin Care",
    description: "AI-powered appointment booking and customer engagement for beauty clinics",
    link: "/botox-skincare"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&auto=format&fit=crop&q=60",
    title: "Clinics and Dentist",
    description: "Automated patient management and appointment scheduling systems",
    link: "/clinics-dentist"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60",
    title: "Gym & Health Coach",
    description: "Member management and fitness consultation automation",
    link: "/gym-health-coach"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&auto=format&fit=crop&q=60",
    title: "Business Consultation",
    description: "Professional consulting services with AI-driven client management",
    link: "/business-consultation"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=60",
    title: "IT & SAAS Services",
    description: "Technology solutions with automated customer support and onboarding",
    link: "/it-saas"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=60",
    title: "Salons & Spa",
    description: "Beauty service automation with smart booking and customer care",
    link: "/salons-spa"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60",
    title: "Real Estate Agents",
    description: "Property showing automation and lead management systems",
    link: "/real-estate-agents"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60",
    title: "Therapists & Counselors",
    description: "Mental health practice automation with secure patient communications",
    link: "/therapists-counselors"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=60",
    title: "Insurance & Financial",
    description: "Financial services automation with claim processing and client management",
    link: "/insurance"
  }
];
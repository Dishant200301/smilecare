// src/data/servicesData.js
import { Calendar, MessageSquare, BarChart3, Clock, FileText, Briefcase, Sparkles } from "lucide-react";

const servicesData = {
  "botox-skincare": {
    metaTitle: "Botox & Skin Care Clinic Automation TryzenIQ",
    metaDescription: "Automate your beauty clinic with AI-powered booking, analytics, and client engagement.",
    title: "Botox & Skin Care",
    subtitle: "Clinic Automation",
    heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800",
    heroDescription: "Streamline your beauty clinic with AI-powered appointment booking, client management, and automated communication.",
    features: [
      { icon: Calendar, title: "Smart Appointment Booking", description: "AI-powered scheduling that reduces no-shows by 65%" },
      { icon: MessageSquare, title: "Automated Communication", description: "Follow-ups, reminders, and aftercare sent automatically" },
      { icon: BarChart3, title: "Treatment Analytics", description: "Track progress, analyze effectiveness, and optimize services" },
      { icon: Clock, title: "24/7 Customer Support", description: "AI assistant handles consultations and pricing inquiries" },
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
  },

  "business-consultation": {
    metaTitle: "Business Consultation Automation TryzenIQ",
    metaDescription: "AI-powered solutions for consultants: scheduling, project automation, and analytics.",
    title: "Business Consultation",
    subtitle: "Automation",
    heroImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
    heroDescription: "Streamline your consulting practice with AI-powered client management, project automation, and intelligent scheduling.",
    features: [
      { icon: Calendar, title: "Intelligent Scheduling", description: "AI matches clients with the right consultant and slot" },
      { icon: FileText, title: "Project Management", description: "Automated proposals, contracts, and milestones" },
      { icon: BarChart3, title: "Analytics", description: "Real-time ROI tracking and dashboards" },
      { icon: Clock, title: "24/7 Support", description: "AI assistant for inquiries and scheduling" },
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
  },

  // TODO: baki sab services isi tarah add karna hoga
};

export default servicesData;

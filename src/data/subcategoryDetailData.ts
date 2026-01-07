
export interface SubCategoryData {
  title: string;
  description: string;
  image: string;
  features: string[];
  serviceFeatures?: {
    icon: string;
    title: string;
  }[];
  blogTopics?: {
    icon: string;
    title: string;
  }[];
  blogImage?: string;
  serviceImage?: string;
  laptopMockup?: string;
  mobileMockup?: string;
  badExperienceImages?: string[];
}

export const subCategoryDetailData: Record<string, SubCategoryData> = {
  // Beauty & Personal Care
  "salon": {
    title: "Salon",
    description: "Transform your salon business with a stunning website that showcases your style and attracts more clients.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    features: [
      "Online Booking System",
      "Stylist Portfolios",
      "Service Menu & Pricing",
      "Client Testimonials",
      "Mobile Responsive Design",
      "Social Media Integration",
      "Gift Card Integration",
      "Location & Contact Info",
      "Special Offers Section",
      "SEO Optimized for Local Search"
    ],
    serviceFeatures: [
      {
        icon: "✂️",
        title: "Hair Styling Services"
      },
      {
        icon: "💅",
        title: "Nail & Beauty Care"
      },
      {
        icon: "🎨",
        title: "Color & Treatment"
      }
    ],
    blogTopics: [
      {
        icon: "📝",
        title: "Hair Care Tips"
      },
      {
        icon: "🌟",
        title: "Latest Trends"
      },
      {
        icon: "💡",
        title: "Style Guides"
      }
    ],
    blogImage: "/assets/subcategoryblog/Beauty.png",
    serviceImage: "/assets/subcategoryservices/Beauty-Services.png",
    laptopMockup: "/assets/mockup/selon-laptop.png",
    mobileMockup: "/assets/mockup/selon-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/hair 1-Photoroom.png",
      "/assets/Archive 22/hair 2-Photoroom.png"
    ]
  },
  "spa": {
    title: "Spa",
    description: "Create a relaxing online experience that mirrors your spa's tranquility and drives bookings.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    features: [
      "Treatment Menu Showcase",
      "Relaxing Visual Design",
      "Appointment Scheduling",
      "Therapist Profiles",
      "Gift Voucher System",
      "Membership Packages",
      "Gallery of Facilities",
      "Wellness Blog Integration",
      "Client Reviews",
      "Fast Loading Speed"
    ],
    blogImage: "/assets/subcategoryblog/Beauty.png",
    serviceImage: "/assets/subcategoryservices/Beauty-Services.png",
    laptopMockup: "/assets/mockup/spa-laptop.png",
    mobileMockup: "/assets/mockup/spa-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/spa 1-Photoroom.png",
      "/assets/Archive 22/spa 2-Photoroom.png"
    ]
  },
  "skin-clinic": {
    title: "Skin Clinic",
    description: "Build trust and expertise with a professional website for your dermatological and skin care services.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    features: [
      "Before & After Gallery",
      "Treatment Explanations",
      "Dermatologist Profiles",
      "Online Consultation Booking",
      "Skin Care Product Shop",
      "Patient Testimonials",
      "FAQ Section",
      "Clinic Tour Video",
      "Secure Patient Forms",
      "Local SEO Dominance"
    ],
    blogImage: "/assets/subcategoryblog/Beauty.png",
    serviceImage: "/assets/subcategoryservices/Beauty-Services.png",
    laptopMockup: "/assets/mockup/skin-laptop.png",
    mobileMockup: "/assets/mockup/skin-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/skin 1-Photoroom.png",
      "/assets/Archive 22/skin 2-Photoroom.png"
    ]
  },

  // Health & Medical Services
  "dentist": {
    title: "Dentist",
    description: "Grow your dental practice with a website that puts patients at ease and simplifies appointments.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    features: [
      "Appointment Request Form",
      "Service Explanations",
      "Dentist Team Bios",
      "Patient Reviews",
      "Emergency Care Info",
      "Insurance Information",
      "Smile Gallery",
      "Virtual Tour",
      "Mobile Friendly",
      "HIPAA Compliant Forms"
    ],
    blogImage: "/assets/subcategoryblog/Health.png",
    serviceImage: "/assets/subcategoryservices/health-Services.png",
    laptopMockup: "/assets/mockup/Dentist-laptop.png",
    mobileMockup: "/assets/mockup/Dentist-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/DENTIST 1-Photoroom.png",
      "/assets/Archive 22/DENTIST 2-Photoroom.png"
    ]
  },
  "physiotherapist": {
    title: "Physiotherapist",
    description: "Highlight your rehabilitation expertise and help patients find the care they need online.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    features: [
      "Online Booking",
      "Treatment Specialties",
      "Therapist Qualifications",
      "Patient Success Stories",
      "Exercise Video Library",
      "Insurance Guides",
      "Location Map",
      "Contact Forms",
      "Blog for Health Tips",
      "Fast & Secure"
    ],
    blogImage: "/assets/subcategoryblog/Health.png",
    serviceImage: "/assets/subcategoryservices/health-Services.png",
    laptopMockup: "/assets/mockup/Physiotherapy-laptop.png",
    mobileMockup: "/assets/mockup/Physiotherapy-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/phy 1-Photoroom.png",
      "/assets/Archive 22/phy 2-Photoroom.png"
    ]
  },
  "nutritionist": {
    title: "Nutritionist",
    description: "Inspire healthy living and attract clients with a vibrant and informative nutrition website.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    features: [
      "Meal Plan Examples",
      "Consultation Booking",
      "Success Stories",
      "Healthy Recipe Blog",
      "Nutrition Guides",
      "E-book Integration",
      "Newsletter Signup",
      "Social Proof",
      "Mobile Responsive",
      "SEO for Health Coaches"
    ],
    blogImage: "/assets/subcategoryblog/Nutritionist.png",
    serviceImage: "/assets/subcategoryservices/health-Services.png",
    laptopMockup: "/assets/mockup/nutricon-laptop.png",
    mobileMockup: "/assets/mockup/nutricon-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/nutri 1-Photoroom.png",
      "/assets/Archive 22/nutri 2-Photoroom.png"
    ]
  },
  "pet-care": {
    title: "Pet Care",
    description: "Showcase your love for animals and connect with pet owners through a friendly and reliable website.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    features: [
      "Service Packages",
      "Pet Sitter Profiles",
      "Booking Calendar",
      "Photo Gallery of Happy Pets",
      "Client Reviews",
      "Emergency Contact Info",
      "Pet Care Blog",
      "Service Area Map",
      "Mobile Friendly",
      "Social Media Feed"
    ],
    blogImage: "/assets/subcategoryblog/Petszone.png",
    serviceImage: "/assets/subcategoryservices/Local-Services.png",
    laptopMockup: "/assets/mockup/pet-laptop.png",
    mobileMockup: "/assets/mockup/pet-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/pet 1-Photoroom.png",
      "/assets/Archive 22/pet 2-Photoroom.png"
    ]
  },
  "multispeciality-hospital": {
    title: "Multispeciality Hospital",
    description: "Establish your hospital as a leader in healthcare with a comprehensive and accessible web presence.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    features: [
      "Department Directory",
      "Doctor Search",
      "Appointment Booking",
      "Emergency Information",
      "Patient Portal Access",
      "Health Checkup Packages",
      "Facilities Overview",
      "News & Events",
      "Insurance Partners",
      "Accessibility Features"
    ],
    blogImage: "/assets/subcategoryblog/Health.png",
    serviceImage: "/assets/subcategoryservices/health-Services.png",
    laptopMockup: "/assets/mockup/multispeciality-hospital-laptop.png",
    mobileMockup: "/assets/mockup/multispeciality-hospital-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/hospital 1-Photoroom.png",
      "/assets/Archive 22/hospital 2-Photoroom.png"
    ]
  },

  // Fitness & Coaching
  "gym": {
    title: "Gym",
    description: "Pump up your membership numbers with a high-energy website that showcases your gym's vibe.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    features: [
      "Class Schedule",
      "Membership Plans",
      "Trainer Profiles",
      "Facility Gallery",
      "Free Trial Sign-up",
      "Success Stories",
      "Virtual Tour",
      "Merchandise Shop",
      "Blog & Tips",
      "Mobile App Link"
    ],
    blogImage: "/assets/subcategoryblog/Yoga.png",
    serviceImage: "/assets/subcategoryservices/Yoga-Services.png",
    laptopMockup: "/assets/mockup/gym-laptop.png",
    mobileMockup: "/assets/mockup/gym-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/GYM 1.png",
      "/assets/Archive 22/GYM 2.png"
    ]
  },
  "yoga-studio": {
    title: "Yoga Studio",
    description: "Attract more yogis with a serene and beautiful website that reflects your studio's atmosphere.",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
    features: [
      "Class Timetable",
      "Instructor Bios",
      "Workshop Events",
      "Online Class Booking",
      "New Student Offers",
      "Retreat Information",
      "Peaceful Design",
      "Testimonials",
      "Newsletter Integration",
      "SEO for Local Studios"
    ],
    blogImage: "/assets/subcategoryblog/Yoga.png",
    serviceImage: "/assets/subcategoryservices/Yoga-Services.png",
    laptopMockup: "/assets/mockup/yoga-leptop.png",
    mobileMockup: "/assets/mockup/yoga-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/yoga 1-Photoroom.png",
      "/assets/Archive 22/yoga 2-Photoroom.png"
    ]
  },
  "dietitian": {
    title: "Dietitian",
    description: "Professional website solutions for dietitians to showcase expertise and manage client consultations.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
    features: [
      "Consultation Booking",
      "Dietary Programs",
      "Client Results",
      "Recipe Collections",
      "Health Blog",
      "E-commerce for Products",
      "Newsletter Signup",
      "Professional Bio",
      "Contact Forms",
      "Mobile Responsive"
    ],
    blogImage: "/assets/subcategoryblog/Nutritionist (2).png",
    serviceImage: "/assets/subcategoryservices/health-Services.png",
    laptopMockup: "/assets/mockup/diet-laptop.png",
    mobileMockup: "/assets/mockup/diet-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/nutri 1-Photoroom.png",
      "/assets/Archive 22/DIAT 2-Photoroom.png"
    ]
  },
  "therapy-club": {
    title: "Therapy Club",
    description: "Create a welcoming online space for your therapy club that encourages joining and participation.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    features: [
      "Membership Details",
      "Session Schedule",
      "Therapist Directory",
      "Community Events",
      "Resource Library",
      "Secure Member Area",
      "Blog & Articles",
      "Contact & Location",
      "Privacy Focused",
      "Calm Visuals"
    ],
    blogImage: "/assets/subcategoryblog/Health.png",
    serviceImage: "/assets/subcategoryservices/health-Services.png",
    laptopMockup: "/assets/mockup/therapy-laptop.png",
    mobileMockup: "/assets/mockup/therapy-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/therapy 1-Photoroom.png",
      "/assets/Archive 22/therapy 2-Photoroom.png"
    ]
  },

  // Home & Local Services
  "cleaning-services": {
    title: "Cleaning Services",
    description: "Sparkle online with a clean and professional website that makes booking your services a breeze.",
    image: "https://images.unsplash.com/photo-1581578731117-104f8a7469d0?w=800&q=80",
    features: [
      "Instant Quote Calculator",
      "Service Checklist",
      "Before & After Photos",
      "Customer Reviews",
      "Book Now Button",
      "Service Areas",
      "Trust Badges",
      "Team Introduction",
      "FAQ Section",
      "Local SEO Optimized"
    ],
    blogImage: "/assets/subcategoryblog/Local-Services.png",
    serviceImage: "/assets/subcategoryservices/Local-Services.png",
    laptopMockup: "/assets/mockup/Cleaning-laptop.png",
    mobileMockup: "/assets/mockup/Cleaning-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/clean 1-Photoroom.png",
      "/assets/Archive 22/clean 2-Photoroom.png"
    ]
  },
  "roofing-contractors": {
    title: "Roofing Contractors",
    description: "Build a solid reputation with a professional roofing website that showcases your projects and reliability.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80",
    features: [
      "Project Portfolio",
      "Free Estimate Form",
      "Service Descriptions",
      "Material Options",
      "Customer Testimonials",
      "Emergency Service Info",
      "Warranty Information",
      "Financing Options",
      "Local Map Pack SEO",
      "Mobile Friendly"
    ],
    blogImage: "/assets/subcategoryblog/Local-Services.png",
    serviceImage: "/assets/subcategoryservices/Local-Services.png",
    laptopMockup: "/assets/mockup/Roofing-laptop.png",
    mobileMockup: "/assets/mockup/Roofing-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/ROOFING 1-Photoroom.png",
      "/assets/Archive 22/ROOFING 2-Photoroom.png"
    ]
  },
  "solar-installation": {
    title: "Solar Installation",
    description: "Shine bright with a modern website that educates customers on solar benefits and generates leads.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    features: [
      "Savings Calculator",
      "Installation Process",
      "Case Studies",
      "Technology Explained",
      "Quote Request Form",
      "Environmental Impact",
      "Financing Guide",
      "Customer Reviews",
      "FAQ",
      "Fast Loading"
    ],
    blogImage: "/assets/subcategoryblog/Local-Services.png",
    serviceImage: "/assets/subcategoryservices/Local-Services.png",
    laptopMockup: "/assets/mockup/Solar-laptop.png",
    mobileMockup: "/assets/mockup/Solar-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/SOLAR 1-Photoroom.png",
      "/assets/Archive 22/SOLAR 2-Photoroom.png"
    ]
  },
  "plumbing-&-electrical": {
    title: "Plumbing & Electrical",
    description: "Be the first call for emergencies with a reliable and fast-loading website for your trade business.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    features: [
      "Emergency Call Button",
      "Service List",
      "Upfront Pricing Info",
      "Team Photos",
      "Customer Reviews",
      "Service Area Map",
      "Online Scheduling",
      "Tips & Advice Blog",
      "License & Insurance",
      "Local SEO"
    ],
    blogImage: "/assets/subcategoryblog/Local-Services.png",
    serviceImage: "/assets/subcategoryservices/Local-Services.png",
    laptopMockup: "/assets/mockup/Plumbing-laptop.png",
    mobileMockup: "/assets/mockup/Plumbing-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/plummber 1-Photoroom.png",
      "/assets/Archive 22/plummber 2-Photoroom.png"
    ]
  },

  // Professional Services
  "ca-firm": {
    title: "CA Firm",
    description: "Project professionalism and trust with a sleek website for your Chartered Accountancy firm.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    features: [
      "Service Overview",
      "Partner Profiles",
      "Client Testimonials",
      "Tax Resources",
      "Consultation Booking",
      "Secure Client Portal",
      "News & Updates",
      "Career Section",
      "Contact Forms",
      "Professional Design"
    ],
    blogImage: "/assets/subcategoryblog/Local-Services.png",
    serviceImage: "/assets/subcategoryservices/Local-Services.png",
    laptopMockup: "/assets/mockup/ca-firm-laptop.png",
    mobileMockup: "/assets/mockup/ca-firm-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/ca 1-Photoroom.png",
      "/assets/Archive 22/ca 2-Photoroom.png"
    ]
  },
  "it-services": {
    title: "IT Services",
    description: "Showcase your technical prowess with a cutting-edge website for your IT service business.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    features: [
      "Solution Case Studies",
      "Tech Stack Showcase",
      "Service Level Agreements",
      "Support Ticket Portal",
      "Client Logos",
      "Team Expertise",
      "Blog & Insights",
      "Contact for Quote",
      "Modern UI/UX",
      "SEO Optimized"
    ],
    blogImage: "/assets/subcategoryblog/Local-Services.png",
    serviceImage: "/assets/subcategoryservices/Local-Services.png",
    laptopMockup: "/assets/mockup/IT-laptop.png",
    mobileMockup: "/assets/mockup/IT-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/IT 1-Photoroom.png",
      "/assets/Archive 22/IT 2-Photoroom.png"
    ]
  },
  "insurance": {
    title: "Insurance",
    description: "Build confidence and generate leads with a clear and informative insurance agency website.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    features: [
      "Quote Request Forms",
      "Policy Types Explained",
      "Agent Finder",
      "Claims Information",
      "Customer Reviews",
      "FAQ Section",
      "Resource Center",
      "Contact Options",
      "Trust Signals",
      "Mobile Responsive"
    ],
    blogImage: "/assets/subcategoryblog/Local-Services.png",
    serviceImage: "/assets/subcategoryservices/Local-Services.png",
    laptopMockup: "/assets/mockup/Insurance-laptop.png",
    mobileMockup: "/assets/mockup/Insurance-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/INSURACE 1-Photoroom.png",
      "/assets/Archive 22/INSURANCE 2-Photoroom.png"
    ]
  },
  "business-consultants": {
    title: "Business Consultants",
    description: "Position yourself as an industry authority with a professional consulting website.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    features: [
      "Expertise Areas",
      "Consultant Bio",
      "Success Stories",
      "Methodology Explained",
      "Booking System",
      "Whitepapers & Guides",
      "Speaking Engagements",
      "Testimonials",
      "Newsletter",
      "Premium Design"
    ],
    blogImage: "/assets/subcategoryblog/Local-Services.png",
    serviceImage: "/assets/subcategoryservices/Local-Services.png",
    laptopMockup: "/assets/mockup/Business-laptop.png",
    mobileMockup: "/assets/mockup/Business-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/business 1-Photoroom.png",
      "/assets/Archive 22/ca 2-Photoroom.png"
    ]
  },

  // Creative & Event Services
  "photo-studio": {
    title: "Photo Studio",
    description: "Display your portfolio in high definition with a stunning photography studio website.",
    image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd552?w=800&q=80",
    features: [
      "High-Res Portfolio",
      "Session Pricing",
      "Booking Calendar",
      "Client Galleries",
      "Studio Tour",
      "Photographer Bio",
      "Blog with Tips",
      "Contact Form",
      "Social Media Links",
      "Fast Image Loading"
    ],
    blogImage: "/assets/subcategoryblog/Photography.png",
    serviceImage: "/assets/subcategoryservices/Event-Services.png",
    laptopMockup: "/assets/mockup/Photograhy-laptop.png",
    mobileMockup: "/assets/mockup/Photograhy-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/PHOTO 1-Photoroom.png",
      "/assets/Archive 22/PHOTO 2-Photoroom.png"
    ]
  },
  "event-planner": {
    title: "Event Planner",
    description: "Showcase your event magic and attract more clients with a beautiful event planning website.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    features: [
      "Event Gallery",
      "Service Packages",
      "Client Testimonials",
      "Vendor Partners",
      "Process Overview",
      "Inquiry Form",
      "About the Team",
      "Blog",
      "Social Proof",
      "Mobile Friendly"
    ],
    blogImage: "/assets/subcategoryblog/Photography.png",
    serviceImage: "/assets/subcategoryservices/Event-Services.png",
    laptopMockup: "/assets/mockup/Event-laptop.png",
    mobileMockup: "/assets/mockup/Event-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/event 1-Photoroom.png",
      "/assets/Archive 22/event 2-Photoroom.png"
    ]
  },
  "wedding-planner": {
    title: "Wedding Planner",
    description: "Create a romantic and elegant website that captures the hearts of couples planning their big day.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    features: [
      "Real Weddings Gallery",
      "Packages & Pricing",
      "Love Stories",
      "Planner Bio",
      "Consultation Booking",
      "Vendor Recommendations",
      "FAQ",
      "Contact Form",
      "Elegant Design",
      "SEO for Weddings"
    ],
    blogImage: "/assets/subcategoryblog/Photography.png",
    serviceImage: "/assets/subcategoryservices/Event-Services.png",
    laptopMockup: "/assets/mockup/Wedding-laptop.png",
    mobileMockup: "/assets/mockup/Wedding-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/WEDDING 1-Photoroom.png",
      "/assets/Archive 22/WEDDING 2-Photoroom.png"
    ]
  },
  "real-estate": {
    title: "Real Estate",
    description: "Close more deals with a professional real estate website featuring property listings and virtual tours.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    features: [
      "Property Search",
      "Featured Listings",
      "Virtual Tours",
      "Agent Profiles",
      "Mortgage Calculator",
      "Neighborhood Guides",
      "Market Reports",
      "Contact Agents",
      "Mobile Responsive",
      "Lead Capture Forms"
    ],
    blogImage: "/assets/subcategoryblog/Real-Estate.png",
    serviceImage: "/assets/subcategoryservices/Local-Services.png",
    laptopMockup: "/assets/mockup/Real-estate-laptop.png",
    mobileMockup: "/assets/mockup/Real-estate-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/REAL ESTAT 1-Photoroom.png",
      "/assets/Archive 22/REAL ESTAT 2-Photoroom.png"
    ]
  },
  "architect-&-interior": {
    title: "Architect & Interior",
    description: "Showcase your design vision with a minimalist and sophisticated architecture and interior design website.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    features: [
      "Project Portfolio",
      "Design Philosophy",
      "Service Process",
      "Team Bios",
      "Client Reviews",
      "Press & Awards",
      "Inquiry Form",
      "Blog",
      "High-Quality Images",
      "Modern Aesthetic"
    ],
    blogImage: "/assets/subcategoryblog/Real-Estate.png",
    laptopMockup: "/assets/mockup/Architect-laptop.png",
    mobileMockup: "/assets/mockup/Architect-phone.png",
    badExperienceImages: [
      "/assets/Archive 22/arch 1-Photoroom.png",
      "/assets/Archive 22/arch 2-Photoroom.png"
    ]
  }
};

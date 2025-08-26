import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

const Services = () => {
  // Projects data
  const projects = [
    {
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=60",
      category: "Beauty",
      title: "Botox & Skin Care",
      description: "AI-powered appointment booking and customer engagement for beauty clinics",
      link: "/botox-skincare"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&auto=format&fit=crop&q=60",
      category: "Healthcare",
      title: "Clinics and Dentist",
      description: "Automated patient management and appointment scheduling systems",
      link: "/clinics-dentist"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60",
      category: "Fitness",
      title: "Gym & Health Coach",
      description: "Member management and fitness consultation automation",
      link: "/gym-health-coach"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&auto=format&fit=crop&q=60",
      category: "Consulting",
      title: "Business Consultation",
      description: "Professional consulting services with AI-driven client management",
      link: "/business-consultation"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=60",
      category: "Technology",
      title: "IT & SAAS Services",
      description: "Technology solutions with automated customer support and onboarding",
      link: "/it-saas"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=60",
      category: "Beauty",
      title: "Salons & Spa",
      description: "Beauty service automation with smart booking and customer care",
      link: "/salons-spa"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60",
      category: "Real Estate",
      title: "Real Estate Agents",
      description: "Property showing automation and lead management systems",
      link: "/real-estate-agents"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60",
      category: "Mental Health",
      title: "Therapists & Counselors",
      description: "Mental health practice automation with secure patient communications",
      link: "/therapists-counselors"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=60",
      category: "Finance",
      title: "Insurance & Financial",
      description: "Financial services automation with claim processing and client management",
      link: "/insurance"
    }
  ];
  

  // Filter categories
  const categories = ["All", "Beauty", "Healthcare", "Fitness", "Consulting", "Technology", "Real Estate", "Mental Health", "Finance"];
  // State for active filter
  const [activeCategory, setActiveCategory] = useState("All");

  // Filtered projects
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Our <span className="text-purple-400">Projects</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Explore our diverse portfolio of architectural and design
              projects, transforming visions into reality.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="mb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeCategory === cat
                    ? "bg-white text-black shadow-md"
                    : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

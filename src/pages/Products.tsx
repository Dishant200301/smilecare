import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ShinyText from "@/components/ShinyText";

const products = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
    category: "Enterprise",
    title: "Asign IT ERP System",
    description: "Complete ERP solution for streamlined business operations and management.",
    link: "/products/asign-it-erp",
    subFeatures: [
      "Comprehensive business management",
      "Inventory & supply chain tracking",
      "Financial accounting modules",
      "HR & payroll management",
      "Real-time analytics dashboard",
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=60",
    category: "Marketing",
    title: "Bulk Email Automation",
    description: "Automated email campaigns to reach your audience at scale with precision.",
    link: "/products/bulk-email-automation",
    subFeatures: [
      "Mass email distribution",
      "Personalized email templates",
      "Campaign scheduling & automation",
      "Delivery tracking & analytics",
      "A/B testing capabilities",
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=60",
    category: "Finance",
    title: "Bulk AI Invoice Generator",
    description: "AI-powered invoicing system for automated, accurate billing at scale.",
    link: "/products/bulk-ai-invoice-generator",
    subFeatures: [
      "Automated invoice generation",
      "AI-powered data extraction",
      "Multi-currency support",
      "Payment tracking & reminders",
      "Custom branding & templates",
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60",
    category: "Content",
    title: "AI Blog SEO Automation",
    description: "Automated content optimization to boost your blog's search engine rankings.",
    link: "/products/ai-blog-seo-automation",
    subFeatures: [
      "AI-powered content generation",
      "SEO keyword optimization",
      "Meta tags & descriptions",
      "Content scheduling & publishing",
      "Performance analytics & insights",
    ],
  },
];

type ProductsProps = {
  limit?: number;
};

const Products: React.FC<ProductsProps> = ({ limit }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];



  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Products | TryzenIQ</title>
        <meta
          name="description"
          content="Explore our AI-powered products: ERP systems, email automation, invoice generation, and SEO tools for business growth."
        />
        <meta property="og:title" content="Products | TryzenIQ" />
        <meta
          property="og:description"
          content="Comprehensive AI automation products tailored to your business needs."
        />
      </Helmet>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-[170px] mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl gradient-text font-HindMadurai font-medium leading-tight mb-6">
              Our{" "}
              <span className="font-InstrumentSerif italic">
                Products
              </span>
            </h1>
            <p className="text-lg text-gray-300 font-HindMadurai max-w-3xl mx-auto leading-relaxed">
              Discover our suite of AI-powered products designed to automate
              and optimize your business operations.
            </p>
          </div>
        </section>

       

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, i) => (
              <a
                key={`${product.category}-${i}`}
                href={product.link}
                className="group relative block backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 transform border border-gray-800 hover:border-white/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[white] transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{product.description}</p>
                  {/* Sub Features */}
                  {product.subFeatures && (
                    <ul className="text-gray-400 text-sm space-y-2 mb-6">
                      {product.subFeatures.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-[white] rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex items-center gap-2 text-[white] font-semibold transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Products;

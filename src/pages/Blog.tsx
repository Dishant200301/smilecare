import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Calendar, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";
import blogsData from "../data/blogDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Helmet } from "react-helmet-async";

const Blogs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false); // State for mobile detection

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const stickyTopOffset = 80; // Define a fixed top offset for sticky cards on mobile

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Blog | TryzenIQ</title>
        <meta
          name="description"
          content="Stay informed with expert insights, tips, and guides on AI automation and business intelligence."
        />
      </Helmet>

      <Navbar />

      <main className="relative z-10">
        <section className="pt-32 md:pt-[170px] pb-20 px-4">
          <div className="container mx-auto px-4 md:px-6 lg:px-2 relative z-10 max-w-7xl">
            {/* Header Section */}
            <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-HindMadurai gradient-text font-medium leading-tight mb-6">
                Our Latest{" "}
                <span className="font-InstrumentSerif italic gradient-text">Articles</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 font-HindMadurai leading-relaxed max-w-3xl mx-auto mb-10">
                Stay informed with expert insights, tips, and guides on AI automation
                and business intelligence solutions.
              </p>
            </div>

            {/* Search and Filter Section */}
            <div className="mb-12 space-y-6">
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/10 transition-all"
                />
              </div>
            </div>
        
            {/* Blogs Grid or Stack */}
            {filteredBlogs.length > 0 ? (
              // Conditional rendering based on isMobile
              <div className={`${isMobile ? 'flex flex-col' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
                {filteredBlogs.map((blog, index) => (
                  <motion.div // Changed from div to motion.div
                    key={blog.id}
                    className={`${isMobile ? 'mobile-sticky-card' : ''}`} // Apply sticky class on mobile
                    // Mobile-only styles for stacking effect
                    style={isMobile ? { zIndex: index + 1, top: `${stickyTopOffset}px`, marginBottom: '20px' } : {}}
                    // Conditional initial animation: slide up on mobile, slide up from bottom on desktop
                    initial={isMobile ? { opacity: 0, y: -20 } : { opacity: 0, y: 50 }} // Adjusted initial y for mobile
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0 }}
                    viewport={{ once: true, amount: 0 }} // Trigger animation when 20% visible
                  >
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="  group relative block rounded-3xl overflow-hidden shadow-xl
                   hover:shadow-2xl hover:shadow-white/20 transition-all duration-500
                   transform border border-gray-900 hover:border-white/20" // Added bg-black and removed backdrop-blur-sm
                    >
                      {/* Image */}
                      <div className="relative w-full h-56 overflow-hidden">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 bg-black flex flex-col flex-grow">
                        {/* Meta Information */}
                        <div className="flex items-center gap-4 mb-4 text-xs text-gray-400 font-HindMadurai">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>
                              {new Date(blog.publishDate).toLocaleDateString(
                                "en-US",
                                { month: "short", day: "numeric", year: "numeric" }
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{blog.readTime} min read</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold font-HindMadurai leading-tight mb-3 text-white group-hover:text-white transition-colors duration-300 line-clamp-2">
                          {blog.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-sm text-gray-400 font-HindMadurai leading-relaxed mb-4 flex-grow line-clamp-3">
                          {blog.excerpt}
                        </p>

                        {/* Author & Read More */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                          <span className="text-xs font-medium text-gray-500 font-HindMadurai">
                            By {blog.author}
                          </span>
                          <div className="flex items-center gap-2 text-sm font-semibold font-HindMadurai text-white group-hover:gap-3 transition-all duration-300">
                            Read More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/5 rounded-full mb-6">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  No articles found
                </h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search or filter to find what you're looking
                  for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Blogs;
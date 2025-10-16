import React, { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Clock,
  User,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import blogsData, { BlogPost } from "../data/blogDetail";

// BlogCard Component
const BlogCard = ({ blog }: { blog: BlogPost }) => {
  return (
    <a
      key={blog.id}
      href={`/blog/${blog.slug}`}
      className="group flex flex-col bg-black rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out border border-gray-800 hover:border-white/30 h-full"
    >
      <section className="bg-black rounded-2xl overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden rounded-xl aspect-[16/9] m-4 mb-3">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-black backdrop-blur-sm text-white text-sm font-medium rounded-full font-HindMadurai">
              {blog.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 transition-colors duration-200 font-HindMadurai">
            {blog.title}
          </h3>

          <p className="text-text-secondary text-sm mb-3 line-clamp-2 font-HindMadurai">
            {blog.excerpt}
          </p>

          <a
            href={`/blog/${blogsData[0]?.slug || "#"}`}
            className="inline-flex items-center text-foreground text-sm font-semibold hover:text-text-secondary transition-colors font-HindMadurai"
          >
            Read More
            <ArrowRight className="ml-1 w-3 h-3" />
          </a>
        </div>
      </section>
    </a>
  );
};

// Main Carousel Component
const HomeBlogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const extendedBlogs = [
    ...blogsData.slice(-visibleCount),
    ...blogsData,
    ...blogsData.slice(0, visibleCount),
  ];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (currentIndex >= blogsData.length || currentIndex < 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (currentIndex >= blogsData.length) {
          setCurrentIndex(0);
        } else if (currentIndex < 0) {
          setCurrentIndex(blogsData.length - 1);
        }
      }, 500);
      return () => clearTimeout(timer);
    } else if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning, blogsData.length]);

  const getTransform = () => {
    const offset = currentIndex + visibleCount;
    let baseTranslate = (offset * 100) / visibleCount;
    return `translateX(-${baseTranslate}%)`;
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start ml-8 lg:items-center gap-8 mb-12">
          <div className="max-w-4xl text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-HindMadurai font-medium leading-tight">
              <span className="gradient-text">Our Latest</span>{" "}
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl gradient-text font-InstrumentSerif italic text-white">
                News & Insights
              </span>
            </h2>
            <p className="text-md sm:text-5xl md:text-2xl lg:text-2xl font-hindmadurai text-gray-400">
              Stay informed with expert analysis and industry trends.
            </p>
          </div>
          <div className="text-center w-full lg:w-auto flex-shrink-0">
            <a
              href="/blogs"
              className="group relative inline-flex items-center justify-between border border-gray-500 text-foreground font-semibold pl-6 pr-14 py-4 rounded-full overflow-hidden transition-all duration-200 ease-out"
            >
              <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white text-white z-10 transition-transform duration-700 ease-in-out group-hover:scale-[45]" />
              <span className="relative z-20 transition-colors duration-700 ease-in-out group-hover:text-black">
                View All Posts
              </span>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
                <ArrowRight className="w-5 h-5 text-black duration-200 ease-out group-hover:text-black" />
              </span>
            </a>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex"
              style={{
                transform: getTransform(),
                transition:
                  !isTransitioning ||
                  (currentIndex !== -1 && currentIndex !== blogsData.length)
                    ? "transform 500ms ease-in-out"
                    : "none",
              }}
            >
              {extendedBlogs.map((blog, idx) => {
                const actualIndex = idx - visibleCount;
                let isCenter = false;
                if (visibleCount === 3) {
                  isCenter =
                    actualIndex === (currentIndex % blogsData.length) + 1 ||
                    (currentIndex === blogsData.length - 1 &&
                      actualIndex === 0) ||
                    (currentIndex === 0 &&
                      actualIndex === blogsData.length - 1);
                } else {
                  isCenter = actualIndex === currentIndex % blogsData.length;
                }

                return (
                  <div
                    key={`${blog.id}-${idx}`}
                    className="px-2 md:px-3 transition-all duration-500"
                    style={{
                      minWidth: `${100 / visibleCount}%`,
                      transform: isCenter ? "scale(1)" : "scale(0.95)",
                      opacity: isCenter ? 1 : 0.7,
                    }}
                  >
                    <BlogCard blog={blog} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            aria-label="Previous blog posts"
            className="absolute top-1/2 -left-4 -translate-y-1/2 p-3 bg-black border border-gray-600 text-foreground rounded-full shadow-lg hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none z-10 hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            aria-label="Next blog posts"
            className="absolute top-1/2 -right-4 -translate-y-1/2 p-3 bg-black border border-gray-600 text-foreground rounded-full shadow-lg hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none z-10 hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogs;

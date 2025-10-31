import React, { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import blogsData, { BlogPost } from "../data/blogDetail";

const BlogCard = ({ blog }: { blog: BlogPost }) => (
  <a
    href={`/blogs/${blog.slug}`}
    className="group flex flex-col bg-black h-full  relative rounded-3xl overflow-hidden shadow-xl
                   hover:shadow-2xl hover:shadow-white/20 transition-all duration-500
                   transform border border-gray-900 hover:border-white/20"
  >
    <section className="bg-black h-full flex flex-col ">
      <div className="relative overflow-hidden rounded-xl aspect-[16/9] m-4 mb-3 ">
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
        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 font-HindMadurai">
          {blog.title}
        </h3>
        <p className="text-text-secondary text-sm mb-3 line-clamp-2 font-HindMadurai">
          {blog.excerpt}
        </p>

        <span className="inline-flex items-center text-foreground text-sm font-semibold hover:text-text-secondary transition-colors font-HindMadurai">
          Read More <ArrowRight className="ml-1 w-3 h-3" />
        </span>
      </div>
    </section>
  </a>
);

const HomeBlogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Responsive visible card count
  useEffect(() => { 
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite loop setup
  const extendedBlogs = [
    ...blogsData.slice(-visibleCount),
    ...blogsData,
    ...blogsData.slice(0, visibleCount),
  ];

  const totalSlides = extendedBlogs.length;

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Smooth infinite logic
  useEffect(() => {
    const transitionDuration = 1000;
    const resetTransition = () => {
      setIsAnimating(false);
      if (currentIndex === blogsData.length) {
        setCurrentIndex(0);
      } else if (currentIndex === -1) {
        setCurrentIndex(blogsData.length - 1);
      }
    };

    const timer = setTimeout(resetTransition, transitionDuration);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Smooth transform calculation
  const getTransform = () => {
    const offset = currentIndex + visibleCount;
    const translateX = `translateX(-${(offset * 100) / visibleCount}%)`;
    return translateX;
  };

  return (
    <section className="pt-10 pb-10 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center text-center w-full mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-HindMadurai font-medium leading-tight">
              <span className="gradient-text">Our Latest</span>{" "}
              <span className="gradient-text font-InstrumentSerif italic text-white">
                News & Insights
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex"
              style={{
                transform: getTransform(),
                transition: isAnimating ? "transform 1s ease-out" : "none",
              }}
              onTransitionEnd={() => setIsAnimating(false)}
            >
              {extendedBlogs.map((blog, idx) => (
                <div
                  key={`${blog.id}-${idx}`}
                  className="px-2 md:px-3"
                  style={{
                    minWidth: `${100 / visibleCount}%`,
                  }}
                >
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop / Laptop arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 -translate-y-1/2 p-3 bg-black border border-gray-600 text-white rounded-full shadow-lg hover:bg-white hover:text-black transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 -translate-y-1/2 p-3 bg-black border border-gray-600 text-white rounded-full shadow-lg hover:bg-white hover:text-black transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
        <div className="text-center w-full lg:w-auto mt-12">
             <a
                          href="/blogs"
                          className="group relative inline-flex items-center justify-between border border-gray-500 
                                          text-white font-semibold pl-6 pr-14 py-3 rounded-full overflow-hidden 
                                          transition-all duration-200 ease-out"
                        >
                          <span
                            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white text-black z-10 
                           transition-transform duration-700 ease-in-out group-hover:scale-[45]"
                          />
            
                          <span className="relative z-20 transition-colors duration-700 ease-in-out group-hover:text-black">
                            Explore More
                          </span>
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
                            <ArrowRight className="w-5 h-5 text-black duration-200 ease-out group-hover:text-black" />
                          </span>
                        </a>
          </div>
      </div>

      
    </section>
  );
};

export default HomeBlogs;

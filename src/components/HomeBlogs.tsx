import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import blogsData, { BlogPost } from "../data/HomeBlog";
import GradientButton from "./GradientButton";

const BlogCard = ({ blog }: { blog: BlogPost }) => (
  <a
    href={`/blogs/${blog.slug}`}
    className="group flex flex-col bg-black h-full relative rounded-3xl 
      overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-white/20 
      transition-all duration-500 border border-gray-900 hover:border-white/20"
  >
    <section className="bg-black h-full flex flex-col">
      <div className="relative overflow-hidden rounded-xl aspect-[16/9] m-4 mb-3">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-2 bg-black backdrop-blur-sm text-white text-sm rounded-full font-HindMadurai">
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

        <span className="inline-flex items-center text-foreground text-sm font-semibold font-HindMadurai group-hover:text-text-secondary transition-colors">
          Read More <ArrowRight className="ml-1 w-3 h-3" />
        </span>
      </div>
    </section>
  </a>
);

const HomeBlogs = () => {
  const [index, setIndex] = useState(3);
  const [visible, setVisible] = useState(3);
  const [disableAnim, setDisableAnim] = useState(false);

  // Responsive visible
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Build infinite loop array
  const slides = [
    ...blogsData.slice(-visible),
    ...blogsData,
    ...blogsData.slice(0, visible),
  ];

  const total = slides.length;

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  // Loop logic
  useEffect(() => {
    if (index === total - visible) {
      setTimeout(() => {
        setDisableAnim(true);
        setIndex(visible);
      }, 1000);
    }

    if (index === 0) {
      setTimeout(() => {
        setDisableAnim(true);
        setIndex(total - visible * 2);
      }, 1000);
    }
  }, [index]);

  useEffect(() => {
    if (disableAnim) {
      setTimeout(() => {
        setDisableAnim(false);
      }, 20);
    }
  }, [disableAnim]);

  return (
    <section className="pt-10 pb-10 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center text-center w-full mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0 }}
        >
          
          <div className="relative z-20 w-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 p-4">
            
            {/* Left Title */}
            <h2 className="text-center lg:text-left text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-5xl font-HindMadurai font-medium leading-tight">
              
              Our Latest{" "}
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-5xl gradient-text font-InstrumentSerif italic text-white">
                
                News & Insights
              </span>
            </h2>
            {/* Right Button */}
           <GradientButton title="Explore More" link="/blogs" />

          </div>
        </motion.div>
        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${(index * 100) / visible}%)`,
                transition: disableAnim ? "none" : "transform 1s ease",
              }}
            >
              {slides.map((blog, i) => (
                <div
                  key={i}
                  className="px-2 md:px-3"
                  style={{
                    minWidth: `${100 / visible}%`,
                  }}
                >
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 -left-4 -translate-y-1/2 p-3 bg-black border border-gray-600 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 -right-4 -translate-y-1/2 p-3 bg-black border border-gray-600 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogs;

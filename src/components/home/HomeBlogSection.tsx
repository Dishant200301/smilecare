import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import { BLOG_POSTS } from "@/data/blogPosts";

const HomeBlogSection = () => {
    // Get first 8 posts
    const posts = BLOG_POSTS.slice(0, 8);
    const [mobileIndex, setMobileIndex] = useState(0);

    const nextSlide = () => {
        setMobileIndex((prev) => (prev + 1) % posts.length);
    };

    const prevSlide = () => {
        setMobileIndex((prev) => (prev - 1 + posts.length) % posts.length);
    };

    return (
        <section className="py-10 bg-background overflow-hidden scroll-smooth">
            <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto mb-12 px-2 sm:px-4 md:px-6 lg:px-0">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        {/* Label */}
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                            <span className="text-dental-pink font-roboto font-semibold tracking-wider uppercase text-sm">
                                OUR BLOG
                            </span>
                        </div>
                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-black leading-tight">
                            Latest News
                        </h2>
                    </div>

                    {/* Button */}
                    <Link
                        to="/blog"
                        className="group bg-dental-pink text-white md:px-8 md:py-3 px-6 py-2 rounded-full font-roboto font-medium transition-all duration-300 flex items-center gap-2"
                    >
                        View all Post
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Desktop/Tablet Infinite Scroll Container */}
            <div className="hidden md:flex w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto p-2 relative flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
                <div className="flex items-stretch justify-start animate-scroll-left hover:[animation-play-state:paused]">
                    {/* First set of posts */}
                    {posts.map((post) => (
                        <div key={post.id} className="w-[280px] sm:w-[320px] md:w-[350px] flex-shrink-0 mx-4 h-full">
                            <BlogCard post={post} />
                        </div>
                    ))}
                    {/* Duplicate set of posts for seamless loop */}
                    {posts.map((post) => (
                        <div key={`dup-${post.id}`} className="w-[280px] sm:w-[320px] md:w-[350px] flex-shrink-0 mx-4 h-full">
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Manual Carousel */}
            <div className="md:hidden w-[92%] mx-auto flex flex-col items-center">
                <div className="w-full text-center mb-8">
                    <BlogCard post={posts[mobileIndex]} />
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-dental-pink/20 text-dental-pink flex items-center justify-center hover:bg-dental-pink hover:text-white transition-all duration-300"
                        aria-label="Previous post"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-dental-pink/20 text-dental-pink flex items-center justify-center hover:bg-dental-pink hover:text-white transition-all duration-300"
                        aria-label="Next post"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeBlogSection;

import { useState } from "react";
import { Mail } from "lucide-react";
import BlogHero from "@/components/blog/BlogHero";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogCard from "@/components/blog/BlogCard";
import { BLOG_POSTS } from "@/data/blogPosts";

const CATEGORIES = ["All", "Braces", "Factcheck", "Health", "Prevention", "Treatment"];

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.categories.includes(activeCategory));

    return (
        <div className="min-h-screen bg-background">
            <BlogHero />

            <section className="py-16 w-[92%] max-w-4xl md:max-w-4xl lg:max-w-7xl mx-auto relative">
                <BlogFilters
                    categories={CATEGORIES}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;

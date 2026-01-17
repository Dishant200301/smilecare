import { Facebook, Twitter, Linkedin, Phone, Tag } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface BlogArticleProps {
    post: BlogPost;
}

const BlogArticle = ({ post }: BlogArticleProps) => {
    return (
        <article className="pt-12 pb-16">
            {/* Category Row */}
            <div className="flex items-center gap-3 mb-6">
                <Tag className="w-3 h-3 text-dental-pink fill-dental-pink" />
                {post.categories.map((cat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        {idx > 0 && <span className="w-1 h-1 rounded-full bg-black opacity-20"></span>}
                        <span className="font-roboto text-[17px] text-gray-600">{cat}</span>
                    </div>
                ))}
            </div>

            {/* Title */}
            <div className="mb-10">
                <h1 className="font-playfair text-[40px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] tracking-[-1.8px] text-dental-text mb-6">
                    {post.title}
                </h1>
                <div className="w-[88px] h-[3px] bg-dental-pink"></div>
            </div>

            {/* Hero Image */}
            <div className="w-full max-w-[1200px] mb-12">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto rounded-lg shadow-sm max-h-[600px] object-cover"
                />
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="lg:w-[770px]">
                    <div className="font-roboto text-[16px] leading-[24px] text-black space-y-8">
                        {post.content.slice(0, 3).map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}

                        {/* Blockquote */}
                        {post.blockquote && (
                            <div className="py-10 flex flex-col items-center text-center">
                                <div className="w-[180px] h-[2px] bg-dental-pink mb-8"></div>
                                <blockquote className="font-playfair text-[25px] leading-[1.4] text-dental-text max-w-[600px] mb-8">
                                    {post.blockquote}
                                </blockquote>
                                <div className="w-[180px] h-[2px] bg-dental-pink"></div>
                            </div>
                        )}

                        {post.content.slice(3).map((paragraph, idx) => (
                            <p key={idx + 3}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* Side Metadata */}
                <div className="lg:w-[300px] lg:pl-8">
                    <div className="space-y-6 sticky top-24">
                        <div className="grid grid-cols-[100px_1fr] gap-y-4 text-[15px] font-roboto">
                            <span className="font-bold text-dental-text">Written by:</span>
                            <span className="text-gray-600">{post.author}</span>

                            <span className="font-bold text-dental-text">Year:</span>
                            <span className="text-gray-600">{post.date.year}</span>

                            <span className="font-bold text-dental-text">Category:</span>
                            <span className="text-gray-600">{post.categories.join(", ")}</span>
                        </div>

                        <div className="flex gap-3 mt-8">
                            {/* Social Icons - using colored circles */}
                            <a href="#" className="w-9 h-9 rounded-full bg-[#3B5998] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                                <Facebook size={18} fill="currentColor" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                                <Twitter size={18} fill="currentColor" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-[#007BB5] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                                <Linkedin size={18} fill="currentColor" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-[#3FBD50] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                                <Phone size={18} fill="currentColor" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogArticle;

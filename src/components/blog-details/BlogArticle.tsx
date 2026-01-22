import { Calendar, User, Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { BlogPost } from "@/types/blog";
import { BLOG_POSTS } from "@/data/blogPosts";
import { Link } from "react-router-dom";

interface BlogArticleProps {
    post: BlogPost;
}

const BlogArticle = ({ post }: BlogArticleProps) => {
    // Get related blog posts (excluding current post)
    const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 5);

    // Random avatar image
    const avatarImages = [
        "/image/team-member-1.png",
        "/image/team-member-2.png",
        "/image/team-member-3.png"
    ];
    const randomAvatar = avatarImages[Math.floor(Math.random() * avatarImages.length)];

    return (
        <article className="py-12 lg:py-16 bg-white">
            <div className="w-[92%] max-w-4xl md:max-w-4xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">

                    {/* Left Column - 65% (8 columns) */}
                    <div className="lg:col-span-8 mt-12 lg:pr-8 lg:border-r lg:border-[#e5e7eb]">

                        {/* Title */}
                        <h1 className="font-playfair font-bold text-[32px] md:text-[40px] lg:text-[48px] text-[#1a1a1a] leading-[1.2] mb-6 text-left">
                            {post.title}
                        </h1>

                        {/* Author, Category, Date Row */}
                        <div className="flex flex-wrap items-center gap-4 mb-8">
                            {/* Avatar */}
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                    <img
                                        src={randomAvatar}
                                        alt={post.author}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="font-roboto text-[14px] text-[#1a1a1a] font-medium">{post.author}</span>
                            </div>

                            {/* Category */}
                            <div className="flex items-center gap-2">
                                <span className="font-roboto text-[14px] text-[#6b7280]">{post.categories[0]}</span>
                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-[#6b7280]" />
                                <span className="font-roboto text-[14px] text-[#6b7280]">
                                    {post.date.month} {post.date.day}, {post.date.year}
                                </span>
                            </div>
                        </div>

                        {/* Main Image */}
                        <div className="w-full mb-10 rounded-3xl overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* First Section - Heading and 2 Paragraphs */}
                        <div className="mb-8">
                            <h2 className="font-playfair font-bold text-[24px] md:text-[28px] text-[#1a1a1a] mb-4 leading-[1.3] text-left">
                                {post.excerpt}
                            </h2>
                            {post.content.slice(0, 2).map((paragraph, idx) => (
                                <p key={idx} className="font-roboto text-[16px] text-[#6b7280] leading-[1.8] mb-4 line-clamp-3">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Second Section - Heading and Paragraphs */}
                        {post.content.length > 2 && (
                            <div className="mb-8">
                                <h2 className="font-playfair font-bold text-[24px] md:text-[28px] text-[#1a1a1a] mb-4 leading-[1.3] text-left">
                                    Key insights and recommendations
                                </h2>
                                {post.content.slice(2, 4).map((paragraph, idx) => (
                                    <p key={idx + 2} className="font-roboto text-[16px] text-[#6b7280] leading-[1.8] mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}

                        {/* Third Section - Heading and Paragraph */}
                        {post.content.length > 4 && (
                            <div className="mb-8">
                                <h2 className="font-playfair font-bold text-[24px] md:text-[28px] text-[#1a1a1a] mb-4 leading-[1.3] text-left">
                                    Understanding the connection
                                </h2>
                                {post.content.slice(4, 5).map((paragraph, idx) => (
                                    <p key={idx + 4} className="font-roboto text-[16px] text-[#6b7280] leading-[1.8] mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}

                        {/* Fourth Section - Heading and Paragraph */}
                        {post.content.length > 5 && (
                            <div className="mb-8">
                                <h2 className="font-playfair font-bold text-[24px] md:text-[28px] text-[#1a1a1a] mb-4 leading-[1.3] text-left">
                                    Types of Treatment
                                </h2>
                                {post.content.slice(5, 6).map((paragraph, idx) => (
                                    <p key={idx + 5} className="font-roboto text-[16px] text-[#6b7280] leading-[1.8] mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}

                        {/* Fifth Section - Heading, Paragraph and Bullet Points */}
                        {post.content.length > 6 && (
                            <div className="mb-8">
                                <h2 className="font-playfair font-bold text-[24px] md:text-[28px] text-[#1a1a1a] mb-4 leading-[1.3] text-left">
                                    Prevention and Care
                                </h2>
                                {post.content.slice(6, 7).map((paragraph, idx) => (
                                    <p key={idx + 6} className="font-roboto text-[16px] text-[#6b7280] leading-[1.8] mb-4">
                                        {paragraph}
                                    </p>
                                ))}

                                <ul className="space-y-3 ml-6">
                                    {post.content.slice(7).map((item, idx) => (
                                        <li key={idx + 7} className="font-roboto text-[16px] text-[#6b7280] leading-[1.8] list-disc">
                                            {item.substring(0, 150)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>

                    {/* Right Column - 35% (4 columns) - Sticky Sidebar */}
                    <div className="lg:col-span-4 lg:pl-0">
                        <div className="lg:sticky lg:top-32 space-y-8 mt-12">

                            {/* Share To Section */}
                            <div>
                                <h3 className="font-playfair font-bold text-[20px] text-[#1a1a1a] mb-4 text-left">
                                    Share to
                                </h3>

                                {/* Social Media Icons */}
                                <div className="flex gap-3 mb-6">
                                    <a href="#" className="w-10 h-10 rounded-lg border border-[#e5e7eb] flex items-center justify-center hover:bg-[#f8f9fa] transition-colors">
                                        <Facebook className="w-5 h-5 text-[#1a1a1a]" />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-lg border border-[#e5e7eb] flex items-center justify-center hover:bg-[#f8f9fa] transition-colors">
                                        <Twitter className="w-5 h-5 text-[#1a1a1a]" />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-lg border border-[#e5e7eb] flex items-center justify-center hover:bg-[#f8f9fa] transition-colors">
                                        <Linkedin className="w-5 h-5 text-[#1a1a1a]" />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-lg border border-[#e5e7eb] flex items-center justify-center hover:bg-[#f8f9fa] transition-colors">
                                        <Instagram className="w-5 h-5 text-[#1a1a1a]" />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-lg border border-[#e5e7eb] flex items-center justify-center hover:bg-[#f8f9fa] transition-colors">
                                        <Mail className="w-5 h-5 text-[#1a1a1a]" />
                                    </a>
                                </div>

                                {/* Horizontal Line */}
                                <div className="border-b border-[#e5e7eb]"></div>
                            </div>

                            {/* Related Blog Section */}
                            <div>
                                <h3 className="font-playfair font-bold text-[20px] text-[#1a1a1a] mb-6 text-left">
                                    Related Articles
                                </h3>

                                {/* Related Blog Items */}
                                <div className="space-y-4">
                                    {relatedPosts.map((relatedPost) => (
                                        <Link
                                            key={relatedPost.id}
                                            to={`/blog/${relatedPost.slug}`}
                                            className="flex gap-4 group hover:bg-[#f8f9fa] p-2 rounded-2xl transition-colors"
                                        >
                                            {/* Left - Image */}
                                            <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                                                <img
                                                    src={relatedPost.image}
                                                    alt={relatedPost.title}
                                                    className="w-full h-full object-cover transition-transform duration-300"
                                                />
                                            </div>

                                            {/* Right - Content */}
                                            <div className="flex-1">
                                                <h4 className="font-playfair font-semibold text-[15px] text-[#1a1a1a] mb-2 line-clamp-2 group-hover:text-[#2B7A9B] transition-colors">
                                                    {relatedPost.title}
                                                </h4>
                                                <p className="font-roboto text-[13px] text-[#6b7280] line-clamp-2 leading-[1.6]">
                                                    {relatedPost.excerpt}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </article>
    );
};

export default BlogArticle;

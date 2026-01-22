import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <Link to={`/blog/${post.slug}`} className="block h-full group">
            <div className="bg-[#fafafa] rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">

                {/* Image */}
                <div className="rounded-3xl overflow-hidden p-4 pb-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-[220px] object-cover rounded-3xl transition-transform duration-500 "
                    />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">

                    {/* Heading */}
                    <h3 className="font-playfair font-bold text-[20px] md:text-[22px] text-[#1a1a1a] mb-3 leading-[1.3] group-hover:text-[#2B7A9B] transition-colors">
                        {post.title}
                    </h3>

                    {/* Paragraph - 2 lines */}
                    <p className="font-roboto text-[15px] text-[#6b7280] leading-[1.6] line-clamp-2 mb-4 flex-grow">
                        {post.excerpt}
                    </p>

                    {/* Bottom Section - Icon and Text */}
                    <div className="flex items-center gap-4 text-[#6b7280]">
                        {/* Date */}
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-roboto text-[14px]">
                                {post.date.month} {post.date.day}, {post.date.year}
                            </span>
                        </div>

                        {/* Read Time */}
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="font-roboto text-[14px]">
                                {post.readTime}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default BlogCard;

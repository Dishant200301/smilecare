import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface BlogPrevNextProps {
    prevPost: BlogPost;
}

const BlogPrevNext = ({ prevPost }: BlogPrevNextProps) => {
    return (
        <div className="border-t border-black/10 py-10 mb-10">
            <Link to={`/blog/${prevPost.slug}`} className="flex items-center gap-6 group cursor-pointer max-w-max">
                <div className="relative w-[70px] h-[70px] rounded-full overflow-hidden flex-shrink-0">
                    <img
                        src={prevPost.image}
                        alt={prevPost.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 rounded-full bg-dental-pink flex items-center justify-center">
                            <ArrowLeft className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-roboto text-[14px] text-gray-500 uppercase tracking-wide">Previous</span>
                    </div>
                    <h4 className="font-playfair text-[20px] text-dental-text group-hover:text-dental-pink transition-colors line-clamp-1">
                        {prevPost.title}
                    </h4>
                </div>
            </Link>
        </div>
    );
};

export default BlogPrevNext;

import { Link } from "react-router-dom";
import { ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <Link to={`/blog/${post.slug}`} className="block h-full">
            <Card className="border-none shadow-sm bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden rounded-xl h-full flex flex-col cursor-pointer">
                <CardHeader className="p-0 relative overflow-hidden aspect-[4/3]">
                    <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-dental-dark text-white rounded-full w-12 h-12 flex flex-col items-center justify-center font-playfair shadow-md z-10">
                        <span className="text-lg font-bold leading-none">{post.date.day}</span>
                        <span className="text-[10px] uppercase tracking-wider">{post.date.month}</span>
                    </div>
                </CardHeader>
                <CardContent className="pt-6 px-5 pb-2 flex-grow">
                    <div className="flex flex-wrap gap-2 mb-3 items-center">
                        <Tag className="w-3 h-3 text-dental-pink fill-dental-pink" />
                        {post.categories.map((cat, idx) => (
                            <span key={idx} className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                {cat}{idx < post.categories.length - 1 ? ", " : ""}
                            </span>
                        ))}
                    </div>
                    <h3 className="font-playfair text-[25px] font-normal text-dental-text mb-3 leading-[32px] line-clamp-2 group-hover:text-dental-pink transition-colors">
                        {post.title}
                    </h3>
                    <p className="font-roboto text-gray-500 text-[14px] leading-[21px] line-clamp-3 mb-4 font-light">
                        {post.excerpt}
                    </p>
                </CardContent>
                <CardFooter className="px-5 pb-6 pt-0">
                    <Button variant="link" className="p-0 h-auto text-dental-pink hover:text-dental-blue font-roboto-condensed font-bold text-[14px] uppercase tracking-widest flex items-center gap-2 transition-colors">
                        Read more <ArrowRight className="w-3 h-3" />
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default BlogCard;

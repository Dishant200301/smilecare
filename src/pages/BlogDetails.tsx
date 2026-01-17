import { useParams, Navigate } from "react-router-dom";
import BlogHeader from "@/components/blog-details/BlogHeader";
import BlogArticle from "@/components/blog-details/BlogArticle";
import BlogComments from "@/components/blog-details/BlogComments";
import BlogPrevNext from "@/components/blog-details/BlogPrevNext";
import { BLOG_POSTS } from "@/data/blogPosts";

const BlogDetails = () => {
    const { slug } = useParams();
    const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
    const post = BLOG_POSTS[postIndex];

    if (!post) {
        return <div className="container mx-auto py-20 text-center">Post not found</div>;
    }

    // Get previous post (or last post if current is first)
    const prevPostIndex = postIndex > 0 ? postIndex - 1 : BLOG_POSTS.length - 1;
    const prevPost = BLOG_POSTS[prevPostIndex];

    return (
        <div className="min-h-screen bg-background">
            <BlogHeader />

            <div className="container mx-auto px-5 md:px-10 lg:px-[62.5px]">
                <BlogArticle post={post} />
                <BlogComments />
                <BlogPrevNext prevPost={prevPost} />
            </div>
        </div>
    );
};

export default BlogDetails;

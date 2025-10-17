import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import blogsData from "../data/blogDetail";
import RelatedBlogCard from "../components/RelatedBlogCard";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import BackButton from "@/components/BackButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogsData.find((b) => b.slug === slug);

  // Define colors from Framer tokens for direct use in style attributes
  const blogColors = {
    white: "rgb(255, 255, 255)",
    grayLight: "rgb(164, 164, 164)",
    grayMedium: "rgb(90, 90, 90)",
    dark: "rgb(0, 7, 3)",
    green: "rgb(30, 145, 93)",
    lightBg: "rgb(239, 245, 241)",
    borderLight: "rgb(222, 222, 222)",
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-HindMadurai">
            Blog Post Not Found
          </h1>
          <p className="mb-6 text-gray-400">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 bg-white text-black hover:bg-gray-200"
          >
            <ArrowLeft className="mr-2" size={20} /> Back 
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Filter out the current blog and get up to 3 other related articles
  const relatedArticles = blogsData
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3); // Take first 3 for display

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>{blog.title} | TryzenIQ Blog</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 md:pt-[100px] pb-14 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 lg:ml-12"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </Link>
            </div>

            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-HindMadurai gradient-text font-medium leading-tight mb-6">
                {blog.title}
              </h1>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
                {blog.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(blog.publishDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
              </div>
            </div>

            {/* Main Blog Image */}
            <div className="w-full max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none leading-relaxed">
              {/* Hardcoded content structure from Framer HTML as blogsData content is plain text */}
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                Navigating the financial landscape of a startup is akin to
                sailing uncharted waters. With limited resources and high
                ambitions, startups face unique financial challenges that can
                significantly impact their growth trajectory. In this article,
                we delve into some of the most common financial hurdles and
                provide actionable strategies to overcome them.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold font-HindMadurai mt-12 mb-6 text-white border-l-4 border-white pl-4">
                Understanding Your Motivations
              </h2>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                One of the most direct ways to make a difference is by
                volunteering with local organizations. Nonprofits often rely on
                volunteers to fulfill their missions, whether it’s helping at a
                food bank, participating in clean-up drives, or mentoring youth.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold font-HindMadurai mt-12 mb-6 text-white border-l-4 border-white pl-4">
                Explore Your Values and Passions
              </h2>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Tighten your belt:
                </strong>{" "}
                Implement cost-cutting measures without compromising quality.
              </p>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Accelerate revenue:
                </strong>{" "}
                Explore strategies to expedite invoice payments and reduce
                collection periods.
              </p>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Optimize spending:{" "}
                </strong>
                Prioritize expenses, negotiate better deals with suppliers, and
                explore cost-effective alternatives.
              </p>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Explore financing options:{" "}
                </strong>
                Consider short-term loans, lines of credit, or invoice factoring
                to bridge cash flow gaps.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold font-HindMadurai mt-12 mb-6 text-white border-l-4 border-white pl-4">
                Challenge 2: Securing Funding
              </h2>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                Many cities have environmental programs that focus on issues
                such as tree planting, beach clean-ups, and energy conservation.
                Getting involved in these efforts not only benefits the planet
                but also strengthens community ties.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold font-HindMadurai mt-12 mb-6 text-white border-l-4 border-white pl-4">
                Assess Your Strengths and Skills
              </h2>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Develop a compelling pitch:{" "}
                </strong>
                Clearly articulate your business model, market opportunity, and
                financial projections.
              </p>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Build strong relationships:{" "}
                </strong>
                Network with potential investors and industry influencers.
              </p>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Consider alternative funding sources:{" "}
                </strong>
                Explore crowdfunding, angel investors, and government grants.
              </p>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Bootstrap as much as possible:
                </strong>{" "}
                Maximize your initial investment by being frugal and efficient.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold font-HindMadurai mt-12 mb-6 text-white border-l-4 border-white pl-4">
                Get Involved in Your Local Community
              </h2>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                Organize a meeting or discussion group to share ideas and
                brainstorm solutions for your community. When people gather to
                discuss and solve problems, they often come up with effective
                and innovative approaches.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold font-HindMadurai mt-12 mb-6 text-white border-l-4 border-white pl-4">
                Join Community Initiatives
              </h2>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Tighten your belt:
                </strong>{" "}
                Implement cost-cutting measures without compromising quality.
              </p>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Accelerate revenue:
                </strong>{" "}
                Explore strategies to expedite invoice payments and reduce
                collection periods.
              </p>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Optimize spending:{" "}
                </strong>
                Prioritize expenses, negotiate better deals with suppliers, and
                explore cost-effective alternatives.
              </p>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Explore financing options:{" "}
                </strong>
                Consider short-term loans, lines of credit, or invoice factoring
                to bridge cash flow gaps.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold font-HindMadurai mt-12 mb-6 text-white border-l-4 border-white pl-4">
                Engage in Political and Civic Processes
              </h2>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                Raising capital is crucial for startup growth, but it's often a
                daunting task.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold font-HindMadurai mt-12 mb-6 text-white border-l-4 border-white pl-4">
                Support Local Businesses
              </h2>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Develop a compelling pitch:{" "}
                </strong>
                Clearly articulate your business model, market opportunity, and
                financial projections.
              </p>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Build strong relationships:
                </strong>{" "}
                Network with potential investors and industry influencers.
              </p>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Consider alternative funding sources:
                </strong>{" "}
                Explore crowdfunding, angel investors, and government grants.
              </p>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">
                  Bootstrap as much as possible:
                </strong>{" "}
                Maximize your initial investment by being frugal and efficient.
              </p>

              {/* Second image within content */}
              <div className="relative w-full rounded-2xl overflow-hidden my-12 border border-white/10">
                <img
                  decoding="async"
                  src="https://framerusercontent.com/images/fcqidY49P3MlO3TzGU3xsjn6Qk.png"
                  alt="AI automation illustration"
                  className="w-full h-auto object-cover object-center"
                />
              </div>

              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                Navigating the financial landscape of a startup is akin to
                sailing uncharted waters. With limited resources and high
                ambitions, startups face unique financial challenges that can
                significantly impact their growth trajectory. In this article,
                we delve into some of the most common financial hurdles and
                provide actionable strategies to overcome them.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        <section className="py-16 md:py-20 lg:py-24 px-4">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-HindMadurai gradient-text font-medium leading-tight mb-4">
                Related{" "}
                <span className="font-InstrumentSerif italic">Articles</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Continue exploring our AI automation insights and expert advice
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <RelatedBlogCard
                  key={article.id}
                  slug={article.slug}
                  title={article.title}
                  image={article.image}
                  publishDate={article.publishDate}
                  description={article.excerpt}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default BlogDetail;

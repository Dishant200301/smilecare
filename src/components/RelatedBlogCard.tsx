import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

interface RelatedBlogCardProps {
  slug: string;
  title: string;
  image: string;
  publishDate: string;
  description: string;
}

const RelatedBlogCard: React.FC<RelatedBlogCardProps> = ({
  slug,
  title,
  image,
  publishDate,
  description,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Link
      to={`/blog/${slug}`}
      className="group relative block rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(publishDate)}</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default RelatedBlogCard;

interface BlogFiltersProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const BlogFilters = ({ categories, activeCategory, onCategoryChange }: BlogFiltersProps) => {
    return (
        <div className="flex flex-wrap items-center gap-8 mb-12 border-b border-gray-100 pb-4">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`text-[15px] font-medium transition-all duration-300 relative pb-3 ${activeCategory === category
                            ? "text-dental-pink font-bold"
                            : "text-gray-500 hover:text-dental-pink"
                        }`}
                    aria-pressed={activeCategory === category}
                >
                    {category}
                    {activeCategory === category && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-dental-pink rounded-full" />
                    )}
                </button>
            ))}
        </div>
    );
};

export default BlogFilters;

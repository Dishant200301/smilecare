interface BlogFiltersProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const BlogFilters = ({ categories, activeCategory, onCategoryChange }: BlogFiltersProps) => {
    return (
        <div className="overflow-x-auto mb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex justify-start md:justify-center items-center gap-3 md:gap-4 rounded-3xl mx-auto p-1 max-w-[700px] min-w-max">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`
                            px-4 py-2 md:px-6 md:py-3
                            rounded-3xl
                            whitespace-nowrap
                            font-roboto font-medium text-[14px] md:text-[15px]
                            transition-all duration-300 ease-in-out
                            ${activeCategory === category
                                ? "bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end text-white "
                                : "bg-[#fafafa] text-[#6b7280] hover:bg-[#eef1f6] hover:text-[#2B7A9B] hover:shadow-sm"
                            }
                        `}
                        aria-pressed={activeCategory === category}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogFilters;

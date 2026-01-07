import { motion } from 'framer-motion';

interface ComparisonRow {
    topic: string;
    single: string;
    multi: string;
}

const InvestmentComparison = () => {
    const comparisonData: ComparisonRow[] = [
        {
            topic: "SEO Keyword Coverage",
            single: "Limited to 4-5 core keywords",
            multi: "Target 50-200+ keywords across services, blogs, FAQs."
        },
        {
            topic: "Google Ranking Opportunities",
            single: "Only Ranks Homepage-Related Terms",
            multi: "Ranks for homepage, services + blogs + local keywords."
        },
        {
            topic: "Content Depth",
            single: "Shallow-Brief Sections for Each Service",
            multi: "Deep, dedicated service pages + educational blogs"
        },
        {
            topic: "Organic Traffic Potential",
            single: "Low-Minimal Visibility",
            multi: "Multiple entry points long-form blogs & FAQs."
        },
        {
            topic: "Google Visibility",
            single: "Rarely Shown",
            multi: "Shows up more in Google due to detailed content."
        },
        {
            topic: "Bounce Rate",
            single: "Higher-One Scroll and Exit",
            multi: "Lower visitors explore more pages."
        },
        {
            topic: "Local SEO Performance",
            single: "Weak-No Location-Specific Pages",
            multi: "Strong — city/service area pages boost local reach."
        },
        {
            topic: "Conversion Funnel",
            single: "CTA Only in One Page",
            multi: "Multiple CTAs across blogs, pages, sidebars."
        },
        {
            topic: "Authority & Trust Building",
            single: "Limited-No Proof Of Expertise",
            multi: "Blogs, guides & testimonials build credibility."
        },
        {
            topic: "Tracking User Behaviour",
            single: "Limited Insight-few Interactions To track",
            multi: "Full insights — views, scroll depth, bounce, interests."
        }
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">



                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-[1.5rem] overflow-hidden border border-white/10"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-3 gap-0 border-b border-white/10">
                        <div className="bg-white/10 p-2 sm:p-6 flex items-center justify-center border-r border-white/10">
                            <h3 className="font-HindMadurai font-bold text-xs sm:text-lg text-white text-center">Topic</h3>
                        </div>
                        <div className="bg-white/5 p-2 sm:p-6 flex items-center justify-center border-r border-white/10">
                            <h3 className="font-HindMadurai font-bold text-xs sm:text-lg text-white text-center">Single Page<br />Website</h3>
                        </div>
                        <div className="bg-white/5 p-6 flex items-center justify-center">
                            <h3 className="font-HindMadurai font-bold text-xs sm:text-lg text-white text-center">Multi-Page Website<br />+ Blogging</h3>
                        </div>
                    </div>

                    {/* Table Rows */}
                    <div>
                        {comparisonData.map((row, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-3 gap-0 border-t border-white/10"
                            >
                                <div className="bg-white/5 p-2 sm:p-5 flex items-center border-r border-white/10">
                                    <span className="font-HindMadurai font-semibold text-xs sm:text-base text-white">
                                        {row.topic}
                                    </span>
                                </div>

                                <div className="bg-black/20 p-2 sm:p-5 flex items-center justify-center border-r border-white/10">
                                    <span className="text-[10px] sm:text-sm font-HindMadurai font-medium text-white/80 text-center leading-relaxed">
                                        {row.single}
                                    </span>
                                </div>

                                <div className="bg-black/20 p-2 sm:p-5 flex items-center justify-center">
                                    <span className="text-[10px] sm:text-sm font-HindMadurai font-semibold text-white text-center leading-relaxed">
                                        {row.multi}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default InvestmentComparison;

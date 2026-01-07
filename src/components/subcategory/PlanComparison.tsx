import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface ComparisonRow {
    useCase: string;
    starter: { value: string; type: "check" | "cross" | "warning" };
    growth: { value: string; type: "check" | "cross" | "warning" };
}

const PlanComparison = () => {
    const comparisonData: ComparisonRow[] = [
        {
            useCase: "Custom Home Page",
            starter: { value: "1 time", type: "check" },
            growth: { value: "5 Revisions", type: "check" }
        },
        {
            useCase: "Multiple Services Pages",
            starter: { value: "Only 1", type: "cross" },
            growth: { value: "10 Pages", type: "check" }
        },
        {
            useCase: "Form Inquiry Setup",
            starter: { value: "Yes", type: "check" },
            growth: { value: "Yes", type: "check" }
        },
        {
            useCase: "Unlimited SEO Keywords",
            starter: { value: "5-10 Keywords", type: "cross" },
            growth: { value: "Unlimited Keywords", type: "check" }
        },
        {
            useCase: "Blog Posts & Content",
            starter: { value: "No Blogs", type: "cross" },
            growth: { value: "Unlimited Blogs", type: "check" }
        },
        {
            useCase: "Built for Lead Generation",
            starter: { value: "Low customisation", type: "warning" },
            growth: { value: "Yes, Lead customisation", type: "check" }
        },
        {
            useCase: "Google Analytics & Clarity",
            starter: { value: "Basic Analytics", type: "warning" },
            growth: { value: "Advanced Analytics", type: "check" }
        },
        {
            useCase: "Scalable Long-Term",
            starter: { value: "Highly Scalable", type: "cross" },
            growth: { value: "Highly Scalable", type: "check" }
        },
        {
            useCase: "AI Automation Trial",
            starter: { value: "Not Available", type: "cross" },
            growth: { value: "14 Day Free Trial", type: "check" }
        }
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
            <div className="max-w-5xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl sm:text-5xl md:text-6xl font-medium gradient-text tracking-tight pb-2 mb-4 leading-tight font-HindMadurai"
                    >
                        Investment <span className="text-muted font-InstrumentSerif italic">Comparison</span>
                    </motion.h2>
                </motion.div>

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
                            <h3 className="font-HindMadurai font-bold text-xs sm:text-lg text-white text-center">Use Case</h3>
                        </div>
                        <div className="bg-white/5 p-2 sm:p-6 flex items-center justify-center border-r border-white/10">
                            <h3 className="font-HindMadurai font-bold text-xs sm:text-lg text-white text-center">1 Page<br />Starter Plan</h3>
                        </div>
                        <div className="bg-white/5 p-2 sm:p-6 flex items-center justify-center">
                            <h3 className="font-HindMadurai font-bold text-xs sm:text-lg text-white text-center">Website to<br />Grow & Win Fast</h3>
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
                                        {row.useCase}
                                    </span>
                                </div>

                                <div className="bg-black/20 p-2 sm:p-5 flex items-center justify-center border-r border-white/10">
                                    <div className="flex items-center gap-2 flex-nowrap">
                                        {row.starter.type === "check" && (
                                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-black stroke-[2.5]" />
                                            </div>
                                        )}
                                        {row.starter.type === "cross" && (
                                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                                                <X className="w-3 h-3 text-black stroke-[2.5]" />
                                            </div>
                                        )}
                                        {row.starter.type === "warning" && (
                                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                                                <span className="text-black text-xs font-bold leading-none">!</span>
                                            </div>
                                        )}
                                        <span className="text-[10px] sm:text-sm font-HindMadurai font-medium text-white whitespace-nowrap leading-none">
                                            {row.starter.value}
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-black/20 p-2 sm:p-5 flex items-center justify-center">
                                    <div className="flex items-center gap-2 flex-nowrap">
                                        {row.growth.type === "check" && (
                                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-black stroke-[2.5]" />
                                            </div>
                                        )}
                                        {row.growth.type === "cross" && (
                                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                                                <X className="w-3 h-3 text-black stroke-[2.5]" />
                                            </div>
                                        )}
                                        {row.growth.type === "warning" && (
                                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                                                <span className="text-black text-xs font-bold leading-none">!</span>
                                            </div>
                                        )}
                                        <span className="text-[10px] sm:text-sm font-HindMadurai font-semibold text-white whitespace-nowrap leading-none">
                                            {row.growth.value}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};


export default PlanComparison;

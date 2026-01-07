import { motion } from "framer-motion";
import { X } from "lucide-react";

interface BadWebExperienceProps {
    heroImages?: string[];
}

const BadWebExperience = ({ heroImages = [] }: BadWebExperienceProps) => {
    const badPoints = [
        "No Clear Brand Identity + Not secure",
        "No clear call to actions",
        "No trust or social proof on HeroSection",
        "Not Fully mobile optimized",
        "No service pages arrangements",
        "Text hard + No Real Booking Flow",
        "Hard to Navigate different services",
        "Slow to loading images and site",
        "Far too much going on site",
        "Weak Local SEO & Unclear tittle"
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-5xl md:text-5xl font-medium gradient-text tracking-tight pb-2 mb-10 leading-tight font-HindMadurai">
                            80% Of Visitors Never Return After A <span className="text-muted font-InstrumentSerif italic">Bad Web Experience</span>
                        </h2>

                        <div className="space-y-4">
                            {badPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 bg-white/10 p-1 rounded-full">
                                        <X className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-lg md:text-lg text-gray-400 font-HindMadurai">{point}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Images Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        {heroImages.slice(0, 2).map((img, index) => (
                            <div
                                key={index}
                                className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                <img
                                    src={img}
                                    alt={`Example ${index + 1}`}
                                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BadWebExperience;

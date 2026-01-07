import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface GoodWebExperienceProps {
    image: string;
    features?: string[];
}

const GoodWebExperience = ({ image, features }: GoodWebExperienceProps) => {
    const defaultFeatures = [
        "Strong Brand Identity + SSL Security",
        "Strategic CTAs to book more appointments",
        "Hero section with Reviews & Testimonials",
        "100% Responsive on All Device",
        "Structured Service Pages + Blogs",
        "Easy Read + Clear Booking flow",
        "Easy To Navigate Menu",
        "Faster Loading Custom coded",
        "Clear Content + Seamless Online Booking",
        "Smart SEO, keywords, and locations setup"
    ];

    const displayFeatures = features || defaultFeatures;

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Image (Good Website Preview) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Abstract decorative elements */}
                        <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl opacity-50" />

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">

                            {/* Website Image */}
                            <img
                                src={image}
                                alt="High Converting Website Example"
                                className="w-full h-auto md:h-[588px] object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-5xl md:text-[44px] font-medium gradient-text pb-2 mb-10 font-HindMadurai">
                            Websites That Bring You More Clients With <span className="text-muted font-InstrumentSerif italic">Ai Automation</span>
                        </h2>

                        <div className="space-y-4">
                            {displayFeatures.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 bg-white/10 p-1 rounded-full">
                                        <Check className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-lg md:text-lg text-gray-400 font-HindMadurai">{point}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GoodWebExperience;

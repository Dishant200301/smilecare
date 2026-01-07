import { motion } from "framer-motion";
import { Check } from "lucide-react";

const AnalyticsSection = () => {
    const features = [
        "Who visits & from where",
        "Traffic numbers & trends",
        "SEO & campaign tracking"
    ];

    return (
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left Side - Analytics Dashboard Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative order-1 lg:order-1"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-2xl p-4">
                            {/* Google Analytics Header */}
                            <img src="/assets/logo/Analytics.png" alt="" className="w-full h-auto" />


                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-2"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-5xl font-medium text-white mb-4 font-HindMadurai leading-tight">
                            Who + How Many + <span className="gradient-text font-InstrumentSerif italic">Where From</span>
                        </h2>
                        <p className="text-xl md:text-xl text-muted font-light font-HindMadurai mb-6">
                            See your visitors come from (Google, Social media, Ads)
                        </p>

                        {/* Feature List */}
                        <div className="space-y-3">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-black stroke-[3]" />
                                    </div>
                                    <span className="text-lg font-light font-HindMadurai text-white/80">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AnalyticsSection;

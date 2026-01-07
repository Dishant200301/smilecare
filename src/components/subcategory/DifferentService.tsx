import { motion } from "framer-motion";

interface DifferentServiceProps {
    image: string;
    blogImage?: string;
    serviceImage?: string;
    serviceFeatures?: any[]; // Keeping interface compatible but unused for now as we hardcode the structure
}

const DifferentService = ({ image, blogImage, serviceImage }: DifferentServiceProps) => {

    const serviceFeatures = [
        {
            icon: <img src="/assets/logo/Different-icon-1.png" alt="One-Stop Solution" className="w-12 h-12 md:w-14 md:h-14 object-contain" />,
            title: "One-Stop",
            subtitle: "Solution"
        },
        {
            icon: <img src="/assets/logo/Different-icon-2.png" alt="Available Anywhere" className="w-12 h-12 md:w-14 md:h-14 object-contain" />,
            title: "Available",
            subtitle: "Anywhere"
        },
        {
            icon: <img src="/assets/logo/Different-icon-3.png" alt="Reliable & Trustworthy" className="w-12 h-12 md:w-14 md:h-14 object-contain" />,
            title: "Reliable &",
            subtitle: "Trustworthy"
        }
    ];

    const blogFeatures = [
        {
            icon: <img src="/assets/logo/Informative-icon-1.png" alt="Problem Solving" className="w-12 h-12 md:w-14 md:h-14 object-contain" />,
            title: "Problem",
            subtitle: "Solving"
        },
        {
            icon: <img src="/assets/logo/Informative-icon-2.png" alt="Expert Analysis" className="w-12 h-12 md:w-14 md:h-14 object-contain" />,
            title: "Expert",
            subtitle: "Analysis"
        },
        {
            icon: <img src="/assets/logo/Informative-icon-3.png" alt="Knowledge Boost" className="w-12 h-12 md:w-14 md:h-14 object-contain" />,
            title: "Knowledge",
            subtitle: "Boost"
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden space-y-24">
            <div className="max-w-7xl mx-auto">

                {/* Section 1: Different Service */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl ">

                            <img
                                src={serviceImage || image}
                                alt="Different Service Preview"
                                className="w-full h-auto sm:h-[324px] object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-2 font-HindMadurai">
                            Different <span className="gradient-text font-InstrumentSerif italic">Service</span>
                        </h2>
                        <p className="text-xl md:text-xl text-muted font-light font-HindMadurai mb-10">
                            For Different Targeted Customers
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            {serviceFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-[#131316] rounded-2xl p-4 flex flex-col items-center justify-center text-center aspect-square border border-[#262626] transition-colors duration-300"
                                >
                                    <div className="mb-3 invert">{feature.icon}</div>
                                    <h3 className="font-HindMadurai font-bold text-sm sm:text-base md:text-[20px] text-white leading-tight">
                                        {feature.title}<br />{feature.subtitle}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Section 2: Informative Blogs */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mt-20">

                    {/* Left: Content (Order 2 on mobile, 1 on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-2 font-HindMadurai">
                            Informative <span className="gradient-text font-InstrumentSerif italic">Blogs</span>
                        </h2>
                        <p className="text-xl md:text-xl text-muted font-light font-HindMadurai mb-10">
                            Target Questions With Keywords
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            {blogFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-[#131316] rounded-2xl p-4 flex flex-col items-center justify-center text-center aspect-square border border-[#262626] transition-colors duration-300"
                                >
                                    <div className="mb-3 invert">{feature.icon}</div>
                                    <h3 className="font-HindMadurai font-bold text-sm sm:text-base md:text-[20px] text-white leading-tight">
                                        {feature.title}<br />{feature.subtitle}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Image (Order 1 on mobile, 2 on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl">

                            <img
                                src={blogImage || image}
                                alt="Informative Blogs Preview"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DifferentService;

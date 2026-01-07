import { motion } from "framer-motion";

interface MobileUIShowcaseProps {
    image: string;
}

const MobileUIShowcase = ({ image }: MobileUIShowcaseProps) => {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

                    {/* Left Phone Group (Two Devices) */}
                    <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 items-center">
                        {/* Phone 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative w-[280px] mx-auto transform hover:-translate-y-2 transition-transform duration-500"
                        >
                            <div className="bg-[#1a1a1a] rounded-[3.5rem] p-3 border-[6px] border-[#2a2a2a] shadow-2xl">
                                <div className="bg-black rounded-[2.8rem] overflow-hidden aspect-[9/19] relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-20" />
                                    <img
                                        src={image}
                                        alt="Mobile UI 1"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Phone 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative w-[280px] mx-auto transform hover:-translate-y-2 transition-transform duration-500"
                        >
                            <div className="bg-[#1a1a1a] rounded-[3.5rem] p-3 border-[6px] border-[#2a2a2a] shadow-2xl">
                                <div className="bg-black rounded-[2.8rem] overflow-hidden aspect-[9/19] relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-20" />
                                    <img
                                        src={image}
                                        alt="Mobile UI 2"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Center Divider Line */}
                    <div className="hidden lg:block w-3 h-[600px] bg-white/40 rounded-full mx-4" />

                    {/* Right Phone (Single Device) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative w-[280px] mx-auto transform hover:-translate-y-2 transition-transform duration-500"
                    >
                        <div className="bg-[#1a1a1a] rounded-[3.5rem] p-3 border-[6px] border-[#2a2a2a] shadow-2xl">
                            <div className="bg-black rounded-[2.8rem] overflow-hidden aspect-[9/19] relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-20" />
                                <img
                                    src={image}
                                    alt="Mobile UI 3"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default MobileUIShowcase;

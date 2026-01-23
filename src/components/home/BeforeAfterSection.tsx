import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import BeforeAfterImage from "./BeforeAfterImage";

// Using placeholder images since explicit before/after images were not found in the public list
// You should upload 'before-1.png' etc to public/image/ or replace these paths
import before1 from "/image/service/before-image-1.png";
import after1 from "/image/service/after-image-1.png";
import before2 from "/image/service/before-image-2.png";
import after2 from "/image/service/after-image-2.png";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        }
    }
};

const beforeAfterData = [
    { beforeImage: before1, afterImage: after1, alt: "Dental Treatment 1" },
    { beforeImage: before2, afterImage: after2, alt: "Dental Treatment 2" },
];

const BeforeAfterSection = () => {
    return (
        <section className="bg-white py-10 lg:py-16 relative overflow-hidden">
            <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-0 relative">

                {/* Large Background Text Watermark */}
                <div className="absolute inset-0 flex items-start justify-start pointer-events-none select-none overflow-hidden">
                    <span
                        className="text-[220px] lg:text-[420px] font-bold text-[#E8E4DF] leading-none opacity-30 -ml-4"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                        }}
                    >
                    </span>
                </div>

                {/* Header Block */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="mb-14 lg:mb-20 relative z-10"
                >
                    {/* 1. Top Label */}
                    <div className="text-center mb-4">
                        <span className="text-[#1D70B8] font-bold tracking-widest text-sm uppercase block">
                            OUR RESULTS
                        </span>
                    </div>

                    {/* 2. Main Heading */}
                    <motion.h2
                        variants={fadeInUp}
                        className="
                            font-playfair text-center text-black font-bold
                         text-2xl sm:text-4xl lg:text-5xl
                            leading-[1.1]
                            max-w-[800px] mx-auto mb-4
                        "
                    >
                        Before & after: witness the power of dentistry
                    </motion.h2>


                </motion.div>

                {/* Image Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12 relative z-10"
                >
                    {beforeAfterData.map((item, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <BeforeAfterImage {...item} />
                        </motion.div>
                    ))}
                </motion.div>


            </div>
        </section>
    );
};

export default BeforeAfterSection;

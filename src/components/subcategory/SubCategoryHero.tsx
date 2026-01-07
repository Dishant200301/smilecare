import { motion } from "framer-motion";

interface SubCategoryHeroProps {
    title: string;
}

const SubCategoryHero = ({ title }: SubCategoryHeroProps) => {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
            {/* Background Gradient/Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-brand-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[20%] w-[250px] h-[250px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

                {/* Eyebrow Text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg md:text-xl text-gray-400 mb-6 font-HindMadurai font-medium tracking-wide"
                >
                    at tryzeniq, we help you...
                </motion.p>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.0,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl gradient-text pb-1 font-sans font-medium leading-tight"
                >
                    Grow {title} Business With
                </motion.h1>

                <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                    viewport={{ once: true }}
                    className="block mt-2 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-serif italic text-gray-300"
                >
                    Website & AI Automations
                </motion.span>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-8"
                >
                    <button className="group relative flex items-center justify-between text-white bg-black font-semibold pl-4 pr-14 py-3 rounded-full overflow-hidden transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl border border-gray-500">
                        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white z-10 transition-transform duration-700 ease-in-out group-hover:scale-[50]" />
                        <span className="relative z-20 transition-colors duration-700 group-hover:text-black">
                            GET FREE WEBSITE
                        </span>
                        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
                            <svg className="w-5 h-5 text-black transition-colors duration-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </motion.div>

            </div>

            <style>{`
                .gradient-text {
                    background: linear-gradient(to right, #ffffff, #a0a0a0);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }
            `}</style>
        </section>
    );
};

export default SubCategoryHero;

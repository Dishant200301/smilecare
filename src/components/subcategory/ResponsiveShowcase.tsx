import { motion } from "framer-motion";

interface ResponsiveShowcaseProps {
    image: string;
    laptopMockup?: string;
    mobileMockup?: string;
}

const ResponsiveShowcase = ({ image, laptopMockup, mobileMockup }: ResponsiveShowcaseProps) => {
    const annotations = [
        { label: "Organized Header", targetTop: "15%" },
        { label: "Clear Headline", targetTop: "28%" },
        { label: "Information", targetTop: "36%" },
        { label: "USP Trustful Icons", targetTop: "44%" },
        { label: "Clear Call to Action", targetTop: "52%" },
        { label: "Website Section", targetTop: "75%" }
    ];

    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl gradient-text font-medium text-white tracking-tight mb-2 font-HindMadurai p-2"
                    >
                        Looks {" "}
                        <span className="text-muted font-InstrumentSerif italic">Perfect</span>
                        {" "}
                        Every Time
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-light font-HindMadurai"
                    >
                        Laptop | Tablet | Mobile
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Laptop + Annotations */}
                    <div className="md:col-span-8 lg:col-span-9 relative flex flex-col items-center">
                        <div className="relative w-full max-w-[900px]">

                            {/* Annotations Container (Desktop/Tablet only) */}
                            <div className="hidden md:block absolute top-0 bottom-0 -left-4 lg:-left-16 w-1/3 z-20 pointer-events-none">
                                <div className="relative h-full w-full">
                                    {annotations.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                                            className="absolute w-full flex items-center justify-end"
                                            style={{ top: item.targetTop }}
                                        >
                                            <div className="flex items-center gap-3 pr-4">
                                                <span className="text-white font-HindMadurai font-medium text-sm lg:text-base whitespace-nowrap shadow-black drop-shadow-md">
                                                    {item.label}
                                                </span>
                                                {/* Connector Line */}
                                                <div className="relative h-[1px] bg-[#000000] w-12 lg:w-24">
                                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#000000] rounded-full" />
                                                </div>
                                            </div>
                                            {/* Angled line to screen (simulated with absolute positioning logic or just pointing towards it) */}
                                            {/* For simplicity and robustness, we point the line towards the laptop edge. 
                                                The 'targetTop' positions the row. The line extends right. 
                                                The laptop screen starts roughly where the line ends. */}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Laptop Mockup */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10 mx-auto md:mx-0 md:ml-[10%] lg:ml-[5%] w-full"
                            >
                                <div className="relative w-full">
                                    {laptopMockup ? (
                                        <img
                                            src={laptopMockup}
                                            alt="Laptop View"
                                            className="relative z-20 w-full"
                                        />
                                    ) : (
                                        <>
                                            {/* Mockup Frame */}
                                            <img
                                                src="/assets/logo/laptop-mockup.png"
                                                alt="Laptop Frame"
                                                className="relative z-20 w-full pointer-events-none"
                                            />

                                            {/* Screen Content */}
                                            <div className="absolute top-[12.5%] left-[13.4%] w-[73.5%] h-[76%] z-10 overflow-hidden bg-black">
                                                <img
                                                    src={image}
                                                    alt="Desktop View"
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </motion.div>

                        </div>
                        <p className="text-white font-HindMadurai font-medium text-lg mt-8">Laptop | Desktop View</p>
                    </div>

                    {/* Right Column: Mobile */}
                    <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative w-[180px] sm:w-[200px] lg:w-[220px]"
                        >
                            <div className="relative w-full">
                                {mobileMockup ? (
                                    <img
                                        src={mobileMockup}
                                        alt="Mobile View"
                                        className="relative z-20 w-full"
                                    />
                                ) : (
                                    <>
                                        {/* Mockup Frame */}
                                        <img
                                            src="/assets/logo/mobile-mockup.png"
                                            alt="Mobile Frame"
                                            className="relative z-20 w-full pointer-events-none"
                                        />

                                        {/* Screen Content */}
                                        <div className="absolute top-[2.5%] left-[6.5%] w-[87%] h-[95%] z-10 overflow-hidden rounded-[2rem] bg-black">
                                            <img
                                                src={image}
                                                alt="Mobile View"
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                        <p className="text-white font-HindMadurai font-medium text-lg mt-8">Mobile View</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ResponsiveShowcase;

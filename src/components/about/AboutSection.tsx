import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";
import founderImage from "/image/about/aboutsection-image-3.png"; // Placeholder for Dianne Russell
import smallImage from "/image/about/aboutsection-image-2.png"; // Placeholder for small image
import mainImage from "/image/about/aboutsection-image.png"; // Placeholder for main office image

// Counter Component
const Counter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            let animationFrame: number;

            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const percentage = Math.min(progress / (duration * 1000), 1);

                setCount(Math.floor(end * percentage));

                if (percentage < 1) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };

            animationFrame = requestAnimationFrame(animate);

            return () => cancelAnimationFrame(animationFrame);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}</span>;
};

const AboutSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-white overflow-hidden">
            <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column - Images */}
                    <div className="relative">

                        {/* Main Image */}
                        <div className="rounded-[40px] overflow-hidden w-full h-[400px] sm:h-[500px] lg:h-[600px] shadow-lg">
                            <img
                                src={mainImage}
                                alt="Dental Clinic"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute bottom-0 right-0 translate-x-0 translate-y-0 lg:translate-x-[10%] lg:translate-y-[10%] scale-[0.6] sm:scale-[0.8] lg:scale-100 origin-bottom-right w-[280px] h-[260px] z-20">

                            {/* Outer shell (for cut illusion) */}
                            <div className="relative w-full h-full rounded-[52px] bg-white">

                                {/* INVERTED TOP CORNER */}
                                <span
                                    className="absolute -top-[48px] right-0 w-[48px] h-[48px]
  rounded-br-[10px]
  pointer-events-none"
                                />



                                {/* INVERTED LEFT CORNER */}
                                <span
                                    className="absolute bottom-0 -left-[48px] w-[48px] h-[48px]
  rounded-br-[10px]
  pointer-events-none"
                                />


                                {/* Inner Card */}
                                <div className="absolute inset-[10px] rounded-[42px] overflow-hidden bg-[#3B5998]">

                                    {/* Background Image */}
                                    <img
                                        src={smallImage}
                                        alt="Experience"
                                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black/60" />

                                    {/* Content */}
                                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
                                        <div className="text-[56px] font-bold leading-none mb-2">
                                            <Counter end={25} />+
                                        </div>
                                        <p className="text-[18px] leading-snug max-w-[150px]">
                                            experience in medical services
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Right Column - Content */}
                    <div className="lg:pl-8 mt-12 lg:mt-0">
                        {/* Label with Icon */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full bg-[#E6F0FF] flex items-center justify-center text-[#3B5998]">
                                <Heart className="w-4 h-4" />
                            </div>
                            <span className="font-roboto font-bold text-[#3B5998] uppercase tracking-wider text-sm">
                                About Us
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-playfair font-bold text-[30px] md:text-[48px] lg:text-[48px] text-[#1a1a1a] leading-[1.1] mb-6">
                            Commitment to your smile's health and beauty
                        </h2>

                        {/* Paragraph */}
                        <p className="font-roboto text-[14px] lg:text-[18px] text-[#6b7280] leading-[1.6] mb-4">
                            The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments. With dental practices throughout the world.
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 gap-8 mb-6 border-b border-gray-100">
                            {/* Stat 1 */}
                            <div>
                                <div className="font-playfair font-bold text-[30px] md:text-[48px] lg:text-[48px] text-[#3B5998] mb-2 flex items-center">
                                    <Counter end={98} />%
                                </div>
                                <p className="font-roboto text-[12px] md:text-[16px] lg:text-[16px] text-[#4b5563] leading-tight mb-4">
                                    Invisalign Treatment <br /> Complete
                                </p>
                            </div>

                            {/* Stat 2 */}
                            <div>
                                <div className="font-playfair font-bold text-[30px] md:text-[48px] lg:text-[48px] text-[#3B5998] mb-2 flex items-center">
                                    <Counter end={100} />%
                                </div>
                                <p className="font-roboto text-[12px] md:text-[16px] lg:text-[16px] text-[#4b5563] leading-tight">
                                    Patient Satisfaction <br /> Rate
                                </p>
                            </div>
                        </div>

                        {/* Founder Section */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img
                                    src={founderImage}
                                    alt="Dianne Russell"
                                    className="w-12 h-12 md:w-full md:h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-playfair font-bold text-[16px] md:text-[20px] text-[#1a1a1a]">
                                    Dianne Russell
                                </h4>
                                <p className="font-roboto text-[12px] md:text-[14px] text-[#6b7280]">
                                    Co founder
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;

import { Button } from "@/components/ui/button";
import { ArrowRight, Link } from "lucide-react";
import dentistImage from "/image/dentist-1.png";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

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

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white pb-12 sm:pb-16 lg:pb-32 pt-20 sm:pt-24 lg:pt-28">
            <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-0">
                {/* Main Gray Card Container */}
                <div className="relative rounded-t-[24px] sm:rounded-t-[32px] lg:rounded-t-[40px] rounded-b-[24px] sm:rounded-b-[32px] lg:rounded-b-[40px] bg-[#e4eefa] overflow-hidden">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Left Side: Content */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 relative px-6 sm:px-8 md:px-12 lg:px-16 pt-12 sm:pt-14 lg:pt-16 pb-8 sm:pb-12 md:pb-48 lg:pb-64">

                            {/* Pill Badge replaced with Label */}
                            <span className="text-[#1D70B8] font-bold tracking-widest text-sm uppercase block mb-3 text-center md:text-left">
                                WELCOME
                            </span>

                            {/* Headline */}
                            <h1 className="mb-4 sm:mb-6 font-playfair text-3xl sm:text-4xl md:text-[34px] lg:text-4xl xl:text-[56px] font-bold leading-[1.1] md:leading-[1.0] lg:leading-[1.0] tracking-tight text-[#1E2024] md:max-w-4xl lg:max-w-4xl">
                                Experience <span className="text-[#1D70B8]">Dental Excellence</span> with a Gentle Touch
                            </h1>

                            {/* Paragraph */}
                            <p className="mb-6 sm:mb-8 lg:mb-10 max-w-lg text-sm sm:text-[12px] lg:text-lg text-[#7B828E] leading-relaxed">
                                Speed up your dental care with our ultimate expertise. Enjoy high-quality, personalized treatment for a seamless, stunning smile.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row md:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto">
                                <a
                                    href="/appointment"
                                    className="h-11 sm:h-12 md:h-10 lg:h-11 rounded-full bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end  hover:bg-[#3D4047] text-white px-6 sm:px-8 text-sm font-semibold shadow-md transition-all  inline-flex items-center justify-center gap-2"
                                >
                                    Appointment
                                    <ArrowRight className="h-4 w-4  " />
                                </a>
                                <a
                                    href="/services"
                                    className="h-11 sm:h-12 md:h-10 lg:h-11 rounded-full bg-white hover:bg-gray-50 text-[#313439] px-6 sm:px-8 py-3 text-sm font-semibold border border-[#C7C7C7] transition-all inline-flex items-center justify-center gap-2"
                                >
                                    Services
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="relative lg:absolute lg:bottom-0 lg:right-0 lg:h-full lg:w-1/2 flex items-end justify-center lg:justify-end rounded-b-[24px] sm:rounded-b-[32px] lg:rounded-br-[40px] lg:rounded-bl-none overflow-hidden order-2 lg:order-none">
                            <div className="relative w-full h-[320px] sm:h-[400px] md:h-[400px] lg:h-[600px] xl:h-[700px] flex items-end justify-center">
                                <img
                                    src={dentistImage}
                                    alt="Dr. Clara Lee"
                                    className="h-full w-auto object-contain object-bottom"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Stats Bar - Bottom Left with Cutout Effect */}
                    <div className="absolute bottom-0 left-0 z-20">
                        <div className="relative bg-white rounded-tr-[40px] pt-10 pb-8 pl-6 sm:pl-6 lg:pl-16 hidden md:block pr-6 sm:pr-12 lg:pr-24 ">
                            {/* Decorative Corner Masks */}
                            <div className="absolute -top-8 left-0 w-8 h-8 bg-[#e4eefa] rounded-bl-[40px] shadow-[-8px_8px_0_8px_white]"></div>
                            <div className="absolute bottom-0 -right-8 w-8 h-8 bg-[#e4eefa] rounded-bl-[40px] shadow-[-8px_8px_0_8px_white]"></div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 lg:gap-x-12 gap-y-4 md:gap-y-4 lg:gap-y-6">
                                <div className="flex flex-col">
                                    <h2 className="text-[24px] md:text-[20px] lg:text-[40px] font-playfair font-bold text-dental-pink leading-none tracking-tight">
                                        <Counter end={500} />+
                                    </h2>
                                    <p className="text-[10px] md:text-[9px] lg:text-sm font-medium text-muted-foreground mt-1 font-roboto">Happy Patients</p>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-[24px] md:text-[20px] lg:text-[40px] font-playfair font-bold text-dental-pink leading-none tracking-tight">
                                        <Counter end={50} />+
                                    </h2>
                                    <p className="text-[10px] md:text-[9px] lg:text-sm font-medium text-muted-foreground mt-1 font-roboto">Expert Doctors</p>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-[24px] md:text-[20px] lg:text-[40px] font-playfair font-bold text-dental-pink leading-none tracking-tight">
                                        <Counter end={150} />+
                                    </h2>
                                    <p className="text-[10px] md:text-[9px] lg:text-sm font-medium text-muted-foreground mt-1 font-roboto">Awards Won</p>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-[24px] md:text-[20px] lg:text-[40px] font-playfair font-bold text-dental-pink leading-none tracking-tight">
                                        <Counter end={20} />+
                                    </h2>
                                    <p className="text-[10px] md:text-[9px] lg:text-sm font-medium text-muted-foreground mt-1 font-roboto">Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

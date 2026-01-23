import React from 'react';
// import {
//     Stethoscope,
//     Sparkles,
//     HandCoins,
//     Phone,
//     Cpu
// } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhyChooseSection = () => {

    // Left side features (Align Right)
    const leftFeatures = [
        {
            icon: (
                <div
                    className="w-8 h-8 md:w-10 md:h-10 bg-dental-pink"
                    style={{
                        maskImage: 'url("/image/icon/why-choose-us-icon-1.svg")',
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskImage: 'url("/image/icon/why-choose-us-icon-1.svg")',
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center'
                    }}
                />
            ),
            title: "Experienced Doctor",
            description: "The goal of our clinic is to provide friendly, caring dentistry and the."
        },
        {
            icon: (
                <div
                    className="w-8 h-8 md:w-10 md:h-10 bg-dental-pink"
                    style={{
                        maskImage: 'url("/image/icon/why-choose-us-icon-2.svg")',
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskImage: 'url("/image/icon/why-choose-us-icon-2.svg")',
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center'
                    }}
                />
            ),
            title: "Personalized Care",
            description: "The goal of our clinic is to provide friendly, caring dentistry and the."
        },
        {
            icon: (
                <div
                    className="w-8 h-8 md:w-10 md:h-10 bg-dental-pink"
                    style={{
                        maskImage: 'url("/image/icon/why-choose-us-icon-3.svg")',
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskImage: 'url("/image/icon/why-choose-us-icon-3.svg")',
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center'
                    }}
                />
            ),
            title: "Flexible Payment Options",
            description: "The goal of our clinic is to provide friendly, caring dentistry and the."
        }
    ];

    // Right side features (Align Left)
    const rightFeatures = [
        {
            icon: (
                <div
                    className="w-8 h-8 md:w-10 md:h-10 bg-dental-pink"
                    style={{
                        maskImage: 'url("/image/icon/why-choose-us-icon-4.svg")',
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskImage: 'url("/image/icon/why-choose-us-icon-4.svg")',
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center'
                    }}
                />
            ),
            title: "Emergency Services",
            description: "The goal of our clinic is to provide friendly, caring dentistry and the."
        },
        {
            icon: (
                <div
                    className="w-8 h-8 md:w-10 md:h-10 bg-dental-pink"
                    style={{
                        maskImage: 'url("/image/icon/why-choose-us-icon-5.svg")',
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskImage: 'url("/image/icon/why-choose-us-icon-5.svg")',
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center'
                    }}
                />
            ),
            title: "Positive Patient Reviews",
            description: "The goal of our clinic is to provide friendly, caring dentistry and the."
        },
        {
            icon: (
                <div
                    className="w-8 h-8 md:w-10 md:h-10 bg-dental-pink"
                    style={{
                        maskImage: 'url("/image/icon/why-choose-us-icon-6.svg")',
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskImage: 'url("/image/icon/why-choose-us-icon-6.svg")',
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center'
                    }}
                />
            ),
            title: "Latest Technology",
            description: "The goal of our clinic is to provide friendly, caring dentistry and the."
        }
    ];

    const FeatureItem = ({ icon, title, description, align = "left" }: { icon: React.ReactNode, title: string, description: string, align?: "left" | "right" }) => (
        <div
            className={`flex items-start gap-4 md:gap-5 group ${align === 'right' ? 'flex-row text-left md:flex-row-reverse md:text-right' : 'flex-row text-left'}`}
        >
            <div
                className="flex-shrink-0 mt-1 transition-transform duration-300 "
            >
                {icon}
            </div>
            <div className={`space-y-2`}>
                <h3 className="font-playfair font-bold text-lg md:text-xl text-dental-dark group-hover:text-dental-blue transition-colors duration-300">
                    {title}
                </h3>
                <p className={`font-roboto text-sm md:text-[15px] text-muted-foreground leading-relaxed max-w-[300px] ${align === 'right' ? 'md:ml-auto' : ''}`}>
                    {description}
                </p>
            </div>
        </div>
    );

    return (
        <section className="py-10 lg:py-16 bg-[#F0F8FF]/30 overflow-hidden">
            <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-0 lg:px-0">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-2">
                    <span className="text-[#1D70B8] font-bold tracking-widest text-sm uppercase block mb-3">
                        WHY CHOOSE US
                    </span>

                    <h2
                        className="text-2xl sm:text-4xl lg:text-5xl font-playfair font-bold text-dental-dark"
                    >
                        Diagnosis of <span className="text-dental-dark">Dental Diseases</span>
                    </h2>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 items-center relative">

                    {/* Left Column - Features (Align Right for desktop/tablet visually facing center) */}
                    <div className="order-1 flex flex-col gap-10 md:gap-12 pl-4 md:pl-0">
                        {leftFeatures.map((feature, index) => (
                            <FeatureItem key={index} {...feature} align="right" />
                        ))}
                    </div>

                    {/* Center Column - Tooth Image */}
                    {/* Responsive Order: 
                        Mobile: order-2 (Middle of stack) 
                        Tablet: order-3 col-span-2 (Bottom, full width)
                        Desktop: order-2 col-span-1 (Center) 
                    */}
                    <div className="order-2 md:order-3 md:col-span-2 lg:order-2 lg:col-span-1 flex justify-center py-0 md:py-12 lg:py-0 relative">
                        {/* Decorative Circle Background */}
                        <div
                            className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]"
                        >

                            {/* The Tooth Image */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 p-4 md:p-0">
                                <img
                                    src="/image/3d-tooth-1.png"
                                    alt="Healthy Tooth"
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Features (Align Left) */}
                    {/* Responsive Order:
                        Mobile: order-3 (Bottom)
                        Tablet: order-2 (Right side)
                        Desktop: order-3 (Right side)
                    */}
                    <div className="order-3 md:order-2 lg:order-3 flex flex-col gap-10 md:gap-12 pl-4 md:pl-0">
                        {rightFeatures.map((feature, index) => (
                            <FeatureItem key={index} {...feature} align="left" />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;

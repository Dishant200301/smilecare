import { ChevronRight } from "lucide-react";
import insuranceWoman from "/image/service-image-3.png";
import { Button } from "@/components/ui/button";

const InsurancePartnersSection = () => {
    return (
        <section className="relative py-12 sm:py-16 lg:pt-10 lg:pb-16 bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end overflow-hidden">
            <div className="absolute top-0 left-0 right-0 z-[25] pointer-events-none">
                <img
                    src="/image/hero-bg-3.png"
                    className="w-full h-auto object-cover"
                    alt="curve top"
                />
            </div>
            {/* ==================== LAYER 1: BACKGROUND ==================== */}
            <div className="absolute inset-0 z-[1]">
                <img
                    src="/image/service-image-5.png"
                    className="w-full h-full object-cover opacity-90"
                    alt="background pattern"
                />
            </div>

            {/* ==================== LAYER 4: BOTTOM CURVE (Always on top of images) ==================== */}
            <div className="absolute bottom-0 left-0 right-0 z-[40] pointer-events-none">
                <img
                    src="/image/hero-bg-4.png"
                    className="w-full h-auto object-cover"
                    alt="bottom curve overlay"
                />
            </div>

            {/* ==================== CONTENT CONTAINER ==================== */}
            <div className="container relative z-[30] max-w-[1425px] mx-auto px-6 sm:px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* ==================== MOBILE/TABLET: ORDER 1 (Content First) | DESKTOP: ORDER 1 (Left Side) ==================== */}
                    <div className="order-1">

                        {/* Small Heading */}
                        <h2 className="font-playfair text-[#333C4A] text-[24px] lg:text-[40px] leading-[28px] lg:leading-[40px] font-normal tracking-[-0.8px] mb-2 lg:mb-3">
                            All Dental Services Covered
                        </h2>

                        {/* Main Heading */}
                        <h3 className="font-playfair text-[48px] lg:text-[80px] leading-[52px] lg:leading-[80px] font-bold text-white tracking-[-2.4px] mb-4 lg:mb-6 drop-shadow-[0_6px_10px_rgba(0,0,0,0.1)]">
                            Insurance Partners
                        </h3>

                        {/* Paragraph */}
                        <p className="text-white font-roboto font-light text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] mb-6 lg:mb-8 max-w-[567px]">
                            The following insurances are currently accepted at SmileCare. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                        </p>

                        {/* ==================== ICONS GRID ==================== */}
                        {/* Mobile/Tablet: 2 cols | Small Desktop: 3 cols | Large Desktop: 4 cols */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 lg:mb-10">
                            {[
                                "/image/icon/service/insurance-icon-1.png",
                                "/image/icon/service/insurance-icon-2.png",
                                "/image/icon/service/insurance-icon-3.png",
                                "/image/icon/service/insurance-icon-4.png"
                            ].map((icon, i) => (
                                <div key={i} className="flex items-center justify-center">
                                    <img
                                        src={icon}
                                        alt={`Insurance partner ${i + 1}`}
                                        className="object-contain w-[120px] h-[120px] lg:w-[197px] lg:h-[197px]"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* ==================== BUTTONS (Equal Padding) ==================== */}
                        <div className="flex flex-col sm:flex-row gap-4">

                            {/* Button 1 – White Background */}
                            <Button
                                className="flex items-center justify-center w-full sm:w-auto
                     bg-white text-[#333C4A] hover:bg-white/90
                     font-roboto text-[15px] sm:text-[16px]
                     px-6 sm:px-8 py-5 sm:py-7
                     rounded-[4px]
                     shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)]
                     transition-opacity">
                                View Full List Of Accepted Plans
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>

                            {/* Button 2 – Gradient (EXACT same padding as Button 1) */}
                            <Button
                                className="flex items-center justify-center w-full sm:w-auto
                     px-6 sm:px-8 py-5 sm:py-7
                     bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end
                     text-white font-['Roboto_Condensed'] text-[15px] sm:text-[16px]
                     rounded-[4px]
                     shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)]
                     hover:opacity-90 transition-opacity">
                                No Insurance? Check The Options
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* ==================== MOBILE/TABLET: ORDER 2 (Images After Content) | DESKTOP: ORDER 2 (Right Side) ==================== */}
                    <div className="order-2 relative flex justify-center lg:justify-end items-end min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">

                        {/* ==================== LAYER 2: SERVICE IMAGE (Absolute positioned, slight offset) ==================== */}
                        <img
                            src="/image/service-image-5.png"
                            alt="service decoration"
                            className="absolute 
                   top-[-20px] sm:top-[-30px] lg:top-[-40px]
                   left-[-15px] sm:left-[-20px] lg:left-[-30px]
                   w-[200px] sm:w-[280px] md:w-[350px] lg:w-[420px] xl:w-[520px]
                   opacity-90 z-[5]"
                        />

                        {/* ==================== LAYER 3: WOMAN IMAGE (Main, overlapping bottom curve) ==================== */}
                        <img
                            src={insuranceWoman}
                            alt="Woman checking insurance on phone"
                            className="relative object-contain z-[10]
                   w-full 
                   max-w-[400px] sm:max-w-[600px] md:max-w-[700px] 
                   lg:max-w-[820px] xl:max-w-[1100px]
                   drop-shadow-2xl 
                   mb-[-40px] sm:mb-[-50px] lg:mb-[-60px]
                   animate-fade-up"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsurancePartnersSection;

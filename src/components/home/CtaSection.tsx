import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import ctaImage from "/image/happy.png";

const CtaSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end w-full overflow-hidden lg:py-6">

            {/* DESKTOP BACKGROUND */}
            <div className="absolute inset-0 z-0 hidden lg:block">
                <img src="/image/hero-bg-5.png" className="w-full h-full object-cover" />
            </div>

            {/* TOP CURVE */}
            <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
                <img src="/image/hero-bg-3.png" className="w-full h-auto object-cover" />
            </div>

            {/* BOTTOM CURVE */}
            <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
                <img src="/image/hero-bg-4.png" className="w-full h-auto object-cover" />
            </div>

            {/* MAIN CONTAINER */}
            <div className="container mx-auto px-6 lg:px-16 pt-10 lg:py-0 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* ==== CONTENT FIRST on mobile/tablet | CONTENT RIGHT on desktop ==== */}
                    <div className="order-1 lg:order-2 text-left space-y-4 sm:space-y-6">

                        {/* Small Heading */}
                        <h3 className="
          font-playfair font-normal
          text-[#333C4A]
          text-[28px] sm:text-[34px] lg:text-[40px]
          leading-[32px] sm:leading-[36px] lg:leading-[40px]
          tracking-[-0.8px]
        ">
                            Ready To Go?
                        </h3>

                        {/* Big Heading */}
                        <h2 className="
          font-playfair font-bold text-white
          text-[42px] sm:text-[58px] lg:text-[80px]
          leading-[46px] sm:leading-[64px] lg:leading-[80px]
          tracking-[-2.4px]
          drop-shadow-[0px_6px_10px_rgba(0,0,0,0.1)]
        ">
                            Apply For Your<br />Free Ticket
                        </h2>

                        {/* Paragraph */}
                        <p className="
          font-roboto font-light text-white/90
          text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px]
          leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[30px]
          max-w-[664px]
        ">
                            Bring to the table win-win survival strategies to ensure proactive domination.
                            At the end of the day, going forward, a new normal that has evolved from a
                            streamlined cloud generated solution.
                        </p>

                        {/* Button */}
                        <Button
                            className="
            bg-white text-[#333C4A]
            font-roboto text-[14px] sm:text-[15px] lg:text-[16px]
            px-6 sm:px-8
            py-3 sm:py-4 lg:py-[20px]
            rounded-[4px]
            shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)]
            inline-flex items-center
            hover:bg-white/95 transition
          "
                        >
                            View Detailed Process
                            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>

                    </div>

                    {/* ==== IMAGE BELOW CONTENT on mobile/tablet | LEFT SIDE on desktop ==== */}
                    <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                        <img
                            src={ctaImage}
                            alt="Ticket Image"
                            className="
            w-full 
            max-w-[300px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[476px]
            h-auto
            object-contain
            drop-shadow-2xl
          "
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CtaSection;

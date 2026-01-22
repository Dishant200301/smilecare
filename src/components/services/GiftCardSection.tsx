import { ChevronRight } from "lucide-react";
import giftCardWoman from "/image/service-image-1.png";
import { Button } from "@/components/ui/button";

const GiftCardSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end overflow-hidden pt-16 ">

            {/* TOP CURVE */}
            <div className="absolute top-0 left-0 right-0 z-[25] pointer-events-none">
                <img
                    src="/image/hero-bg-3.png"
                    className="w-full h-auto object-cover"
                    alt="curve top"
                />
            </div>

            {/* BOTTOM CURVE */}
            <div className="absolute bottom-0 left-0 right-0 z-[25] pointer-events-none">
                <img
                    src="/image/hero-bg-4.png"
                    className="w-full h-auto object-cover"
                    alt="curve bottom"
                />
            </div>

            {/* BACKGROUND OVERLAY */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="/image/service-image-4-1.png"
                    className="w-full h-full object-cover"
                    alt="background"
                />
            </div>

            <div className=" pl-6 lg:pl-28 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT — mobile/tablet FIRST, desktop LEFT */}
                    <div className="order-1">
                        <h2 className="font-playfair font-normal text-[20px] lg:text-[40px] text-[#333C4A]">
                            Enjoy 10% Off
                        </h2>

                        <h3 className="font-playfair font-bold text-[50px]  lg:text-[110px] text-white leading-none mb-2 drop-shadow">
                            Gift Card
                        </h3>

                        <p className="text-white font-roboto text-md mb-12 max-w-2xl">
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from a streamlined cloud generated solution.
                        </p>

                        {/* SERVICE ICON GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            <div className="flex items-center gap-4">
                                <img src="/image/icon/service/gift-icon-1.png" className="" />
                                <span className="text-white text-lg">General Dentistry</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/image/icon/service/gift-icon-2.png" className="w-16 h-14 -mr-4" />
                                <span className="text-white text-lg">Teeth Whitening</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/image/icon/service/gift-icon-3.png" />
                                <span className="text-white text-lg">Aesthetic Dentistry</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/image/icon/service/gift-icon-4.png" />
                                <span className="text-white text-lg">Child Dentistry</span>
                            </div>
                        </div>

                        <Button className="bg-white text-dental-text hover:bg-white/90 font-roboto text-base px-8 py-7 flex items-center">
                            View Full Offer <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>

                    {/* RIGHT IMAGE — mobile/tablet BELOW content, desktop RIGHT */}
                    <div className="order-2 relative flex justify-end lg:justify-end">
                        <img
                            src={giftCardWoman}
                            alt="Gift Card Woman"
                            className="w-full max-w-[600px] md:max-w-[750px] lg:max-w-[900px] object-contain
                   relative bottom-0"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GiftCardSection;

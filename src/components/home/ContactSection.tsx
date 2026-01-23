import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
    const navigate = useNavigate();
    const [gifKey, setGifKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setGifKey((prev) => prev + 1);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="py-16 lg:py-12 bg-white overflow-hidden">
            <div className="w-[92%] max-w-4xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Left Column - Content */}
                    <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-2 max-w-[640px] lg:ml-4 xl:ml-6">
                        <span className="text-[#1D70B8] font-bold text-sm uppercase block ">
                            GET STARTED
                        </span>
                        <h1 className="font-playfair font-bold text-[#1E2024] text-[26px] md:text-[36px] lg:text-[48px] xl:text-[52px]  leading-[1.15] tracking-tight">
                            Build and Ship Your Website Faster
                        </h1>

                        <p className="font-roboto text-[#64748B] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[20px] leading-[1.6]">
                            Speed up your website build with our ultimate UI kits for Framer.
                            Enjoy high-quality, customizable elements for a seamless, stunning user experience.
                        </p>

                        <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                            <button onClick={() => navigate("/about")} className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 bg-white hover:bg-[#165e9a]  hover:text-white border border-slate-300 text-[#1E2024] font-bold rounded-xl transition-all shadow-sm text-sm sm:text-base whitespace-nowrap">
                                Learn more
                            </button>
                            <button onClick={() => navigate("/contact")} className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 bg-[#165e9a]  text-white font-bold rounded-xl transition-all shadow-sm text-sm sm:text-base whitespace-nowrap">
                                Contact Us
                            </button>

                           
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="flex-1 flex w-full justify-center lg:justify-end">
                        <div className="relative w-full flex justify-center lg:justify-center">
                            <img
                                key={gifKey}
                                src={`/image/icon/New team members.gif?t=${gifKey}`}
                                alt="New Team Members"
                                className="w-64 h-64 md:w-96 md:h-96 lg:w-[530px] lg:h-[530px] object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;

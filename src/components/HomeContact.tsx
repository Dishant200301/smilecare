import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const HomeContact = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

                    {/* ==================== MOBILE/TABLET: ORDER 1 (Form First) | DESKTOP: ORDER 2 (Right Side) ==================== */}
                    <div className="space-y-4 sm:space-y-6 md:space-y-7 lg:space-y-8 order-1 lg:order-2 w-full">

                        {/* Header → Heading 3 */}
                        <div className="md:h-auto lg:h-[96px]">
                            {/* Small → Write To Our */}
                            <h3 className="font-playfair font-normal text-[#191919] text-[24px] leading-[28px] sm:text-[28px] sm:leading-[32px] md:text-[32px] md:leading-[36px] lg:text-[36px] lg:leading-[36px] tracking-[-0.72px]">
                                Write To Our
                            </h3>

                            {/* Dental Office */}
                            <h1 className="font-playfair font-bold text-[#FDABB7] text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] md:text-[50px] md:leading-[54px] lg:text-[60px] lg:leading-[60px] tracking-[-1.8px] mt-3 sm:mt-4 md:mt-5 lg:mt-[26px]">
                                Dental Office
                            </h1>
                        </div>

                        {/* Paragraph */}
                        <p className="text-[#000000] font-roboto text-[14px] leading-[20px] sm:text-[15px] sm:leading-[22px] md:text-[15px] md:leading-[23px] lg:text-[16px] lg:leading-[24px]">
                            Contact our office and we will contact you back regarding the intervention
                            you require. Organically grow the holistic world view of disruptive innovation
                            via workplace diversity and empowerment.
                        </p>

                        {/* Form - Contact form */}
                        <form className="space-y-3 sm:space-y-4 md:space-y-[18px] lg:space-y-[20px] lg:h-[415.92px]">

                            {/* Input - Name */}
                            <Input
                                placeholder="Enter your Name *"
                                className="h-[48px] sm:h-[50px] lg:h-[52px] bg-white shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)] rounded-[4px] border-0 text-[14px] sm:text-[15px] lg:text-[16px] placeholder:text-[rgba(34,34,34,0.5)] px-4"
                            />

                            {/* Input - Email */}
                            <Input
                                type="email"
                                placeholder="Enter your Email Address *"
                                className="h-[48px] sm:h-[50px] lg:h-[52px] bg-white shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)] rounded-[4px] border-0 text-[14px] sm:text-[15px] lg:text-[16px] placeholder:text-[rgba(34,34,34,0.5)] px-4"
                            />

                            {/* Textarea - Message */}
                            <Textarea
                                placeholder="Enter your Message *"
                                className="h-[100px] sm:h-[120px] md:h-[140px] lg:h-[156px] bg-white shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)] rounded-[4px] border-0 resize-none text-[14px] sm:text-[15px] lg:text-[16px] placeholder:text-[rgba(34,34,34,0.5)] px-4 py-3"
                            />

                            {/* Button - Submit */}
                            <Button
                                type="submit"
                                className="w-full sm:w-auto sm:min-w-[180px] md:min-w-[190px] lg:w-[194.63px] h-[50px] sm:h-[52px] lg:h-[59.42px] bg-gradient-to-r from-[#FDABB7] to-[#333C4A] text-white font-['Roboto_Condensed'] text-[15px] sm:text-[16px] leading-[16px] shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)] rounded-[4px] hover:opacity-90 transition-opacity"
                            >
                                Submit Your Message
                            </Button>
                        </form>
                    </div>

                    {/* ==================== MOBILE/TABLET: ORDER 2 (Map After Form) | DESKTOP: ORDER 1 (Left Side) ==================== */}
                    <div className="relative order-2 lg:order-1 w-full flex justify-center lg:justify-start">
                        {/* Container - Responsive Heights */}
                        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[650px] lg:h-[600px]   overflow-hidden">
                            {/* ==================== LAYER 1: Background Image (z-10, non-interactive) ==================== */}
                            <div className="absolute inset-0 z-10 pointer-events-none">
                                <img
                                    src="/image/home-contact-bg.png"
                                    alt=""
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>


                            {/* ==================== LAYER 2: Map Container (z-0, interactive) ==================== */}
                            <div className="absolute inset-0 scale-[1.18] sm:scale-[1.16] md:scale-[1.14] lg:scale-[1.12] origin-center">
                                {/* Google Maps iframe */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.5403553154845!2d19.054840776903203!3d47.49530897117547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc7f3f888d49%3A0x3c1c1f0c0c1f0c1c!2sDeák%20Ferenc%20Street%2C%20Budapest!5e0!3m2!1sen!2shu!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 'none', outline: 'none' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full border-0 outline-none"
                                    title="Office Location Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeContact;

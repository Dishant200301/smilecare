import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const ContactForm = () => {
    return (
        <section className="py-20 container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Left Column: Map */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-[500px] aspect-square rounded-full overflow-hidden shadow-xl border-4 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.669848478575!2d19.05032531562679!3d47.49633897917737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc41b371aaab%3A0x1e184d3c840787a3!2sBudapest%2C%20De%C3%A1k%20Ferenc%20u.%2019%2C%201052%20Hungary!5e0!3m2!1sen!2sus!4v1625689432943!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Dental Office Location"
                        ></iframe>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="w-full lg:w-1/2">
                    <div className="mb-8">
                        <h3 className="font-roboto text-[20px] md:text-[24px] text-gray-600 font-normal mb-1">
                            Write To Our
                        </h3>
                        <h2 className="font-playfair text-[40px] font-bold text-dental-pink leading-tight">
                            Dental Office
                        </h2>
                    </div>

                    <p className="font-roboto text-[16px] text-gray-500 mb-8 max-w-[500px]">
                        Distinctively re-engineer revolutionary meta-services, change management and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities.
                    </p>

                    <form className="space-y-6 max-w-[500px]">
                        <Input
                            placeholder="Enter your name *"
                            className="bg-white border-none shadow-[1px_1px_3px_rgba(34,34,34,0.2)] h-[52px] pl-5 rounded-[4px]"
                        />
                        <Input
                            placeholder="Enter your email address *"
                            className="bg-white border-none shadow-[1px_1px_3px_rgba(34,34,34,0.2)] h-[52px] pl-5 rounded-[4px]"
                        />
                        <Textarea
                            placeholder="Enter your message *"
                            className="bg-white border-none shadow-[1px_1px_3px_rgba(34,34,34,0.2)] min-h-[150px] pl-5 pt-4 rounded-[4px] resize-none"
                        />

                        <Button
                            type="submit"
                            className="w-full h-[52px] bg-gradient-to-r from-dental-pink to-[#333C4A] hover:opacity-90 text-white font-roboto-condensed font-bold text-[14px] uppercase tracking-widest rounded-[4px] flex items-center justify-center gap-2"
                        >
                            Submit Your Message
                            <Send className="w-4 h-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

const HomeContact = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="max-w-5xl mx-auto">
                    {/* Contact Form Card */}
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-10 lg:p-12">

                        {/* Header with Icon */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-[#1D70B8]/10 flex items-center justify-center">
                                <Activity className="w-5 h-5 text-[#1D70B8]" strokeWidth={2} />
                            </div>
                            <h3 className="font-playfair text-lg sm:text-xl font-semibold text-[#1D70B8]">
                                Contact Us
                            </h3>
                        </div>

                        {/* Main Heading */}
                        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4 leading-tight">
                            Reach out for questions
                        </h2>

                        {/* Description */}
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                            We take the time to understand your individual needs and goals, creating customized treatment plans to help you achieve optimal oral health.
                        </p>

                        {/* Form */}
                        <form className="space-y-6">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-[#1e293b]">
                                    Full Name
                                </label>
                                <Input
                                    placeholder="Enter Your Name"
                                    className="h-12 sm:h-14 bg-slate-50 border border-slate-200 rounded-xl text-base placeholder:text-slate-400 focus:border-[#1D70B8] focus:ring-2 focus:ring-[#1D70B8]/20 transition-all"
                                />
                            </div>

                            {/* Email and Phone - Side by Side */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {/* Your Email */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-[#1e293b]">
                                        Your Email
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="h-12 sm:h-14 bg-slate-50 border border-slate-200 rounded-xl text-base placeholder:text-slate-400 focus:border-[#1D70B8] focus:ring-2 focus:ring-[#1D70B8]/20 transition-all"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-[#1e293b]">
                                        Phone Number
                                    </label>
                                    <Input
                                        type="tel"
                                        placeholder="Enter Your Number"
                                        className="h-12 sm:h-14 bg-slate-50 border border-slate-200 rounded-xl text-base placeholder:text-slate-400 focus:border-[#1D70B8] focus:ring-2 focus:ring-[#1D70B8]/20 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-[#1e293b]">
                                    Message
                                </label>
                                <Textarea
                                    placeholder="Write Message..."
                                    className="min-h-[160px] bg-slate-50 border border-slate-200 rounded-xl text-base placeholder:text-slate-400 focus:border-[#1D70B8] focus:ring-2 focus:ring-[#1D70B8]/20 transition-all resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full sm:w-auto px-8 h-12 sm:h-14 bg-[#1D70B8] hover:bg-[#1557a0] text-white font-roboto font-semibold text-base rounded-xl shadow-md hover:shadow-lg transition-all"
                            >
                                Submit Now
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;

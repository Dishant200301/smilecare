import { useParams } from "react-router-dom";
import { serviceDetails } from "../data/serviceDetails";
import { Phone, Mail, Calendar } from "lucide-react";
import ContactSection from "@/components/home/ContactSection";

const ServiceDetail = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const service = serviceDetails.find(s => s.id === serviceId);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-playfair">Service not found</h1>
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* Main Content Container */}
            <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto py-12 lg:py-16 px-2 sm:px-4 md:px-0 lg:px-0">

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-15">

                    {/* Left Column - 70% width (8 columns) */}
                    <div className="lg:col-span-8 lg:pr-8 lg:border-r lg:border-[#e5e7eb] lg:mt-4">

                        {/* Service Image */}
                        <div className="rounded-[20px] overflow-hidden mb-8 mt-12">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-[300px] md:h-[400px] object-cover"
                                onError={(e) => {
                                    // Fallback to a placeholder if image doesn't exist
                                    e.currentTarget.src = "/placeholder.svg";
                                }}
                            />
                        </div>

                        {/* Service Title and Subtitle */}
                        <div className="mb-8">
                            <h1 className="font-playfair font-bold text-[32px] md:text-[40px] lg:text-[48px] text-[#1a1a1a] ">
                                {service.title}
                            </h1>
                            <p className="font-roboto text-[14px] font-medium md:text-[20px] text-[#6b7280]">
                                {service.subtitle}
                            </p>
                        </div>

                        {/* Service Content Sections */}
                        <div className="space-y-8">
                            {service.sections.map((section, index) => (
                                <div key={index}>
                                    {section.heading && (
                                        <h2 className="font-playfair font-bold text-[20px] md:text-[24px] lg:text-[28px] text-[#1a1a1a] mb-4">
                                            {section.heading}
                                        </h2>
                                    )}
                                    {section.content && (
                                        <p className="font-roboto text-[15px] md:text-[16px] text-[#6b7280] leading-[1.8]">
                                            {section.content}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Right Column - 30% width (4 columns) - Sticky Sidebar */}
                    <div className="lg:col-span-4 lg:pl-4">
                        <div className="lg:sticky lg:top-32 space-y-6">

                            {/* Office Hours Card */}
                            <div className="rounded-[20px]">
                                <h3 className="font-playfair font-bold text-[20px] md:text-[24px] text-[#1a1a1a] mb-4 text-left">
                                    Contact us
                                </h3>

                                {/* Horizontal line below Contact us */}
                                <div className="border-b border-[#e5e7eb] mb-6"></div>

                                {/* Hours */}
                                <div className="mb-6">
                                    <div className="space-y-2">
                                        <div className="flex justify-start gap-6 items-left">
                                            <span className="font-roboto font-medium text-[15px] text-[#1a1a1a]">
                                                Mon - Fri
                                            </span>
                                            <span className="font-roboto text-[15px] text-left text-[#6b7280]">
                                                8:00am - 5:00pm
                                            </span>
                                        </div>
                                        <div className="flex justify-start gap-6 items-left mt-4">
                                            <span className="font-roboto font-medium text-[15px] text-[#1a1a1a]">
                                                Sat - Sun
                                            </span>
                                            <span className="font-roboto text-[15px] text-left text-[#6b7280]">
                                                Closed
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Cards */}
                                <div className="space-y-2">

                                    {/* Call Card */}
                                    <a
                                        href="tel:801-555-1234"
                                        className="block bg-[#f8f9fa] rounded-[30px] p-6 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <h4 className="font-playfair font-semibold text-[18px] text-[#1a1a1a] mb-1">
                                                    Call
                                                </h4>
                                                <p className="font-roboto text-[16px] text-[#6b7280]">
                                                    801-555-1234
                                                </p>
                                            </div>
                                            <div className="w-10 h-10 rounded-[12px] bg-[#e4eefa] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                                <Phone className="w-5 h-5 text-[#2B7A9B]" />
                                            </div>
                                        </div>
                                    </a>

                                    {/* Email Card */}
                                    <a
                                        href="mailto:hello@SmileCare.com"
                                        className="block bg-[#f8f9fa] rounded-[30px] p-6 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <h4 className="font-playfair font-semibold text-[18px] text-[#1a1a1a] mb-1">
                                                    Email
                                                </h4>
                                                <p className="font-roboto text-[16px] text-[#6b7280]">
                                                    hello@SmileCare.com
                                                </p>
                                            </div>
                                            <div className="w-10 h-10 rounded-[12px] bg-[#e4eefa] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                                <Mail className="w-5 h-5 text-[#2B7A9B]" />
                                            </div>
                                        </div>
                                    </a>

                                    {/* Appointment Card */}
                                    <a
                                        href="/contact"
                                        className="block bg-[#f8f9fa] rounded-[30px] p-6 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <h4 className="font-playfair font-semibold text-[18px] text-[#1a1a1a] mb-1">
                                                    Get an appointment
                                                </h4>
                                                <p className="font-roboto text-[16px] text-[#6b7280]">
                                                    Send a request
                                                </p>
                                            </div>
                                            <div className="w-10 h-10 rounded-[12px] bg-[#e4eefa] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                                <Calendar className="w-5 h-5 text-[#2B7A9B]" />
                                            </div>
                                        </div>
                                    </a>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <ContactSection />
        </div>
    );
};

export default ServiceDetail;

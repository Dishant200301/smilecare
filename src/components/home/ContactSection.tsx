import { Phone, Mail, Calendar, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const ContactSection = () => {
    return (
        <section className="py-16 lg:py-20 bg-white">
            <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-0">

                {/* Heading and Description */}
                <div className="mb-12 text-center lg:text-left">
                    <h2 className="font-playfair font-bold text-[36px] lg:text-[48px] text-[#1a1a1a] mb-4">
                        Contact us
                    </h2>
                    <p className="font-roboto text-[15px] lg:text-[16px] text-[#6b7280] max-w-2xl mx-auto lg:mx-0">
                        We would love to hear from you, please reach out to us anytime!
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column - 65% width (8 columns) */}
                    <div className="lg:col-span-9">

                        {/* First Row - 3 Contact Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

                            {/* Call us Card - Clickable */}
                            <a
                                href="tel:801-555-1234"
                                className="bg-[#f8f9fa] rounded-[16px] p-6 flex flex-col justify-between min-h-[160px] transition-all duration-300 hover:bg-[#eef1f6] group"
                            >
                                <div className="w-12 h-12 rounded-[12px] bg-[#e4eefa] flex items-center justify-center transition-transform duration-300">
                                    <Phone className="w-5 h-5 text-[#2B7A9B]" />
                                </div>
                                <div className="mt-auto">
                                    <h3 className="font-playfair font-semibold text-[18px] text-[#1a1a1a] mb-1">
                                        Call us
                                    </h3>
                                    <p className="font-roboto text-[16px] text-[#6b7280]">
                                        801-555-1234
                                    </p>
                                </div>
                            </a>

                            {/* Email us Card - Clickable */}
                            <a
                                href="mailto:hello@SmileCare.com"
                                className="bg-[#f8f9fa] rounded-[16px] p-6 flex flex-col justify-between min-h-[180px] transition-all duration-300 hover:bg-[#eef1f6] group"
                            >
                                <div className="w-12 h-12 rounded-[12px] bg-[#e4eefa] flex items-center justify-center transition-transform duration-300">
                                    <Mail className="w-5 h-5 text-[#2B7A9B]" />
                                </div>
                                <div className="mt-auto">
                                    <h3 className="font-playfair font-semibold text-[18px] text-[#1a1a1a] mb-1">
                                        Email us
                                    </h3>
                                    <p className="font-roboto text-[16px] text-[#6b7280]">
                                        hello@SmileCare.com
                                    </p>
                                </div>
                            </a>

                            {/* Get an appointment Card - Clickable */}
                            <a
                                href="/contact"
                                className="bg-[#f8f9fa] rounded-[16px] p-6 flex flex-col justify-between min-h-[160px] transition-all duration-300 hover:bg-[#eef1f6] group"
                            >
                                <div className="w-12 h-12 rounded-[12px] bg-[#e4eefa] flex items-center justify-center transition-transform duration-300">
                                    <Calendar className="w-5 h-5 text-[#2B7A9B]" />
                                </div>
                                <div className="mt-auto">
                                    <h3 className="font-playfair font-semibold text-[18px] text-[#1a1a1a] mb-1">
                                        Get an appointment
                                    </h3>
                                    <p className="font-roboto text-[16px] text-[#6b7280]">
                                        Send a request
                                    </p>
                                </div>
                            </a>
                        </div>

                        {/* Second Row - Full Width Visit us Card with Map - Clickable */}
                        <a
                            href="https://maps.google.com/?q=527+Crentist+Ave+Lehi+UT+84043"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#f8f9fa] rounded-[16px] p-8 relative overflow-hidden min-h-[300px] flex flex-col justify-between transition-all duration-300 hover:bg-[#eef1f6] group"
                        >
                            {/* Google Maps Background */}
                            <div className="absolute inset-0 opacity-5">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7364524421!2d-111.8507!3d40.3916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIzJzI5LjgiTiAxMTHCsDUxJzAyLjUiVw!5e0!3m2!1sen!2sus!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="pointer-events-none"
                                ></iframe>
                            </div>

                            {/* Icon at Top */}
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-[12px] bg-[#e4eefa] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <MapPin className="w-5 h-5 text-[#2B7A9B]" />
                                </div>
                            </div>

                            {/* Content at Bottom */}
                            <div className="relative z-10 mt-auto">
                                <h3 className="font-playfair font-semibold text-[18px] text-[#1a1a1a] mb-1">
                                    Visit us
                                </h3>
                                <p className="font-roboto text-[16px] text-[#6b7280]">
                                    527 Crentist Ave, Lehi UT 84043
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Right Column - 35% width (4 columns) - Office Hours */}
                    <div className="lg:col-span-3">
                        <div className="bg-white">

                            {/* Office Hours */}
                            <h3 className="font-playfair font-bold text-[20px] lg:text-[24px] text-[#1a1a1a] mb-6 text-center md:text-left">
                                Office hours
                            </h3>

                            <div className="space-y-4 mb-8">
                                {[
                                    { day: "Monday", hours: "8:00am - 5:00pm" },
                                    { day: "Tuesday", hours: "8:00am - 5:00pm" },
                                    { day: "Wednesday", hours: "8:00am - 5:00pm" },
                                    { day: "Thursday", hours: "8:00am - 5:00pm" },
                                    { day: "Friday", hours: "8:00am - 5:00pm" },
                                    { day: "Saturday", hours: "Closed" },
                                    { day: "Sunday", hours: "Closed" }
                                ].map((item, index) => (
                                    <div key={index} className="grid grid-cols-2 gap-2 md:gap-4">
                                        <span className="font-roboto text-[15px] text-[#1a1a1a] text-left">
                                            {item.day}
                                        </span>
                                        <span className="font-roboto text-[15px] text-[#6b7280] text-left md:text-left">
                                            {item.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Social Media */}
                            <div className="text-center md:text-left">
                                <p className="font-roboto text-[14px] text-[#6b7280] mb-4">
                                    Connect on social media
                                </p>
                                <div className="flex gap-4 justify-center md:justify-start">
                                    <a href="#" className="text-[#6b7280] hover:text-[#2B7A9B] transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="text-[#6b7280] hover:text-[#2B7A9B] transition-colors">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="text-[#6b7280] hover:text-[#2B7A9B] transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;

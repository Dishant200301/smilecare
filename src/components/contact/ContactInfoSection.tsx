import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfoSection = () => {
    const contactInfo = [
        {
            icon: Phone,
            title: "Call us",
            info: "801-555-1234",
            link: "tel:8015551234",
            bgColor: "bg-slate-50"
        },
        {
            icon: Mail,
            title: "Email us",
            info: "hello@smilebright.com",
            link: "mailto:hello@smilebright.com",
            bgColor: "bg-slate-50"
        },
        {
            icon: MapPin,
            title: "Visit us",
            info: "527 Crentist Ave, Lehi",
            link: "https://maps.google.com/?q=527+Crentist+Ave+Lehi",
            bgColor: "bg-slate-50",
            hasMap: true
        }
    ];

    return (
        <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10">

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                    {contactInfo.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                            <a
                                key={index}
                                href={contact.link}
                                target={contact.hasMap ? "_blank" : undefined}
                                rel={contact.hasMap ? "noopener noreferrer" : undefined}
                                className={`
                                    ${contact.bgColor}
                                    relative
                                    rounded-3xl p-8 sm:p-10
                                    transition-all duration-300
                                    border border-slate-100
                                    group
                                    overflow-hidden
                                `}
                            >
                                {/* Map Background for Visit us card */}
                                {contact.hasMap && (
                                    <div className="absolute inset-0 opacity-10 transition-opacity duration-300">
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
                                )}

                                {/* MOBILE/TABLET LAYOUT: Horizontal (Title/Info Left, Icon Right) */}
                                <div className="flex lg:hidden items-start justify-between gap-4 relative z-10">
                                    {/* Left: Title and Info */}
                                    <div className="flex-1">
                                        <h3 className="font-playfair text-2xl sm:text-3xl md:text-2xl font-bold text-slate-700 mb-2">
                                            {contact.title}
                                        </h3>
                                        <p className="text-base sm:text-lg text-slate-600 transition-colors duration-300">
                                            {contact.info}
                                        </p>
                                    </div>

                                    {/* Right: Icon Circle */}
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm transition-shadow duration-300">
                                            <Icon className="w-7 h-7 text-[#1D70B8]" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>

                                {/* DESKTOP LAYOUT: Vertical (Icon Top, Title/Info Below) - UNCHANGED */}
                                <div className="hidden lg:block relative z-10">
                                    {/* Icon Circle */}
                                    <div className="mb-6">
                                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm transition-shadow duration-300">
                                            <Icon className="w-7 h-7 text-[#1D70B8]" strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-playfair text-2xl sm:text-3xl md:text-2xl font-bold text-slate-700 mb-3">
                                        {contact.title}
                                    </h3>

                                    {/* Info */}
                                    <p className="text-base sm:text-lg text-slate-600 transition-colors duration-300">
                                        {contact.info}
                                    </p>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactInfoSection;

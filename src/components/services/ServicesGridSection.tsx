import ServiceCard from "./ServiceCard";

const ServicesGridSection = () => {
    const services = [
        {
            icon: "/image/icon/service/icon-1.png",
            title: "Dental Implants",
            description: "Replace missing teeth with permanent, natural-looking implants. Our advanced techniques ensure comfort and long-lasting results for your smile.",
            link: "/services/dental-implants"
        },
        {
            icon: "/image/icon/service/icon-2.png",
            title: "General Dentistry",
            description: "Comprehensive dental care for the whole family. From routine checkups to preventive care, we keep your teeth healthy and strong.",
            link: "/services/general-dentistry"
        },
        {
            icon: "/image/icon/service/icon-3.png",
            title: "Emergency Dental Care",
            description: "Immediate care when you need it most. Our emergency services are available to address urgent dental issues and relieve pain quickly.",
            link: "/services/emergency-care"
        },
        {
            icon: "/image/icon/service/icon-4.png",
            title: "Dental Prosthesis",
            description: "Custom-fitted dentures and bridges to restore your smile. We create comfortable, natural-looking prosthetics tailored to your needs.",
            link: "/services/prosthesis"
        },
        {
            icon: "/image/icon/service/icon-5.png",
            title: "Teeth Whitening",
            description: "Professional whitening treatments for a brighter smile. Safe, effective procedures that deliver noticeable results in just one visit.",
            link: "/services/whitening"
        },
        {
            icon: "/image/icon/service/icon-6.png",
            title: "Orthodontic Braces",
            description: "Straighten your teeth with modern braces and aligners. Our orthodontic solutions create beautiful, healthy smiles for all ages.",
            link: "/services/braces"
        },
        {
            icon: "/image/icon/service/icon-7.png",
            title: "Root Canal Treatment",
            description: "Save infected teeth with gentle root canal therapy. Our painless procedures preserve your natural teeth and prevent extraction.",
            link: "/services/root-canal"
        },
        {
            icon: "/image/icon/service/icon-8.png",
            title: "Pediatric Dentistry",
            description: "Specialized dental care for children in a friendly environment. We make dental visits fun and comfortable for your little ones.",
            link: "/services/pediatric"
        }
    ];

    return (
        <section className="py-16 lg:py-20 bg-white">
            <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-0 lg:px-0">

                {/* Heading Section */}
                <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16 mt-12 md:mt-16">
                    <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e293b] mb-4 sm:mb-6">
                        Our Services
                    </h1>

                    <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                        Comprehensive dental care tailored to your needs. From preventive services to advanced treatments, we're here to help you achieve optimal oral health.
                    </p>
                </div>

                {/* Services Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            link={service.link}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesGridSection;

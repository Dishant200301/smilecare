import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const services = [
    {
        title: "Root Canals",
        image: "/image/service/root-canal.jpg",
        link: "/services/root-canal"
    },
    {
        title: "Routine Cleaning",
        image: "/image/service/general-dentistry.jpg",
        link: "/services/general-dentistry"
    },
    {
        title: "Veneers",
        image: "/image/service/dental-prosthesis.jpg",
        link: "/services/prosthesis"
    },
    {
        title: "Cosmetic Dentistry",
        image: "/image/service/teeth-whitening.jpg",
        link: "/services/whitening"
    },
    {
        title: "Dental Implants",
        image: "/image/service/dental-implants.jpg",
        link: "/services/dental-implants"
    },
    {
        title: "Orthodontics",
        image: "/image/service/orthodontic-braces.jpg",
        link: "/services/braces"
    }
];

const HomeServiceSection = () => {
    return (
        <section className="py-10 lg:py-16 bg-white overflow-hidden">
            <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto mb-12 px-2 sm:px-4 md:px-0 lg:px-0">
                {/* Header Layout */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
                    <div className="max-w-2xl space-y-2">
                        <span className="text-[#1D70B8] font-bold tracking-widest text-sm uppercase block mb-1 text-center md:text-left">
                            OUR SERVICES
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-dental-dark text-center md:text-left">
                            Browse our services
                        </h2>

                    </div>

                    <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center px-6 py-2 md:px-4 md:py-2 lg:px-8 lg:py-3 rounded-full bg-dental-pink text-white hover:bg-dental-blue hover:text-white transition-all duration-300 font-label font-medium group"
                        >
                            View all services
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>


            {/* Marquee Section - Full Width */}
            <div className="relative w-full">
                {/* Gradient Masks positioned to match navbar spacing */}
                <div className="absolute left-0 top-0 bottom-0 w-[4%] md:w-[calc((100%-896px)/2)] lg:w-[calc((100%-1280px)/2)] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-[4%] md:w-[calc((100%-896px)/2)] lg:w-[calc((100%-1280px)/2)] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex gap-6 animate-scroll-left hover:pause w-max">
                    {/* Double the list for infinite loop */}
                    {[...services, ...services].map((service, index) => (
                        <Link
                            to={service.link}
                            key={index}
                            className="relative group w-[260px] sm:w-[320px] md:w-[300px] lg:w-[300px] h-[350px] md:h-[400px] flex-shrink-0 rounded-[2rem] overflow-hidden cursor-pointer "
                        >
                            {/* Image */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />

                            {/* Pill Label */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-4 flex justify-center">
                                <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-label font-medium tracking-wide text-sm md:text-base text-center shadow-lg group-hover:bg-white/30 transition-all duration-300">
                                    {service.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServiceSection;

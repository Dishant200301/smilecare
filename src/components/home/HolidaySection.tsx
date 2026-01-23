import budapestImage from "/image/holiday-image.png";

const HolidaySection = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white" >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ===== CONTENT — Mobile/Tablet First, Desktop Left ===== */}
                    <div className="space-y-6 sm:space-y-8 order-1 lg:order-1">

                        {/* Heading */}
                        <div>
                            <span className="text-[#1D70B8] font-bold tracking-widest text-sm uppercase block mb-3">
                                DENTAL TOURISM
                            </span>
                            <h2 className="
            text-dental-text font-playfair
            text-[40px] sm:text-[48px] lg:text-[58px]
            leading-none
          ">
                                Your Dental
                            </h2>

                            <h2 className="
            text-dental-pink font-playfair font-bold
            text-[80px] sm:text-[130px] lg:text-[160px]
            leading-none
          ">
                                Holiday
                            </h2>
                        </div>

                        {/* Icons Grid */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            {[
                                { icon: "/image/icon/travel.png", text: "Travel" },
                                { icon: "/image/icon/sightseeing.png", text: "Sightseeing" },
                                { icon: "/image/icon/car.png", text: "Car Parking" },
                                { icon: "/image/icon/translator.png", text: "Translator" },
                                { icon: "/image/icon/accommodation.png", text: "Accommodation" },
                                { icon: "/image/icon/tickets.png", text: "Free Tickets" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <img
                                        src={item.icon}
                                        alt={item.text}
                                        className="w-7 h-7 sm:w-8 sm:h-8"
                                    />
                                    <span className="text-dental-text font-roboto text-[15px] sm:text-[17px] lg:text-lg">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== IMAGE — Mobile/Tablet Below Content | Desktop Right ===== */}
                    <div className="relative flex justify-center order-2 lg:order-2">
                        <img
                            src={budapestImage}
                            alt="Budapest cityscape"
                            className="
            w-full 
            max-w-[340px] sm:max-w-[480px] md:max-w-[580px] 
            lg:max-w-[650px]
            h-auto object-contain
          "
                        />
                    </div>

                </div>
            </div>
        </section >
    );
};

export default HolidaySection;

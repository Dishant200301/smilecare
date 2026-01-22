import dentistImage from "/image/dentist-1.png";

const NaturalSmileSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end overflow-hidden min-h-[800px] lg:min-h-[933px]">

            {/* BG Desktop */}
            <div className="absolute inset-0 hidden lg:block z-0">
                <img src="/image/hero-bg-5.png" className="w-full h-full object-cover" />
            </div>

            {/* Top Curve */}
            <div className="absolute top-0 left-0 right-0 z-20">
                <img src="/image/hero-bg-3.png" className="w-full object-cover" />
            </div>

            {/* IMAGE (Always bottom, no padding/margin) */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center lg:justify-end">
                <img
                    src={dentistImage}
                    className="
        block w-auto max-w-none
        h-[300px] sm:h-[380px] md:h-[480px] lg:h-[886px]
        object-contain m-0 p-0 lg:mr-24
      "
                />


            </div>

            {/* Bottom Curve */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
                <img src="/image/hero-bg-4.png" className="w-full object-cover" />
            </div>

            {/* CONTENT */}
            <div className="container mx-auto px-6 lg:px-12 relative z-30 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                    {/* CONTENT LEFT-ALIGNED ON ALL DEVICES */}
                    <div
                        className="
          order-1
          text-left
          max-w-[550px]
          space-y-8
          animate-fade-left
          mx-auto lg:mx-0
        "
                    >
                        <div>
                            <h3 className="font-playfair text-[#333C4A]
            text-[24px] sm:text-[36px] lg:text-[40px]
            leading-tight tracking-[-0.8px]">
                                We Can Help You Have A
                            </h3>

                            <h1 className="font-playfair font-bold text-white
            text-[46px] sm:text-[60px] lg:text-[80px]
            leading-none tracking-[-2.4px] drop-shadow-lg mt-3">
                                Natural Smile
                            </h1>
                        </div>

                        <div className="space-y-6 lg:space-y-7">
                            <div className="w-[180px] h-[2px] bg-white opacity-70"></div>

                            <p className="font-playfair text-white
            text-[18px] sm:text-[22px] lg:text-[25px]
            leading-[32px] lg:leading-[38px]">
                                We at SmileCare are focused on helping you.
                                Dynamically reinvent market-driven opportunities and interfaces.
                            </p>

                            <div className="w-[180px] h-[2px] bg-white opacity-70"></div>
                        </div>

                        <div className="pt-2">
                            <img
                                src="/image/signature.png"
                                className="w-[140px] sm:w-[180px] lg:w-[200px]"
                            />

                            <p className="font-playfair text-white
            text-[22px] sm:text-[26px] lg:text-[30px] leading-tight mt-4">
                                Everest Whiting
                            </p>
                            <p className="font-roboto text-white text-[14px] lg:text-[15px] opacity-90 mt-1">
                                Clinic Director
                            </p>
                        </div>
                    </div>

                    <div className="order-2 hidden lg:block"></div>

                </div>
            </div>

        </section>
    );
};

export default NaturalSmileSection;

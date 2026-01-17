import heroCouple from "/image/about-hero.png";

const BlogHero = () => {
    return (
        <section className="relative bg-dental-pink w-full min-h-[600px] lg:h-[100vh] overflow-hidden">

            {/* BG Layer */}
            <div className="absolute inset-0 bg-dental-pink z-0"></div>

            {/* Desktop Background Image */}
            <div className="absolute inset-0 z-10 hidden lg:block">
                <img
                    src="/image/about-hero-1.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            {/* MOBILE / TABLET IMAGE (Below Content) */}
            <div className="lg:hidden absolute bottom-0 left-0 right-0 z-20 flex justify-center items-end">
                <img
                    src={heroCouple}
                    alt="Couple"
                    className="w-[340px] sm:w-[450px] md:w-[540px] h-auto object-contain animate-fade-up"
                />
            </div>

            {/* DESKTOP IMAGE (Right Side) */}
            <div className="hidden lg:flex absolute inset-0 z-20 items-end justify-end pb-0 lg:pr-24">
    <img
      src={heroCouple}
      alt="Couple"
      className="w-[720px] h-auto object-contain animate-fade-up"
    />
  </div>

            {/* BOTTOM WAVE IMAGE */}
            <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
                <img src="/image/hero-bg-2.png" className="w-full h-auto object-cover" />
            </div>

            {/* CONTENT AREA */}
            <div className="relative z-40 container max-w-[1024px] mx-auto px-6 sm:px-6 lg:mx-20">

                <div className="flex flex-col lg:hidden pt-24">

                    <h1 className="
            font-playfair font-bold text-white
            text-[62px] leading-[50px]
            sm:text-[60px] sm:leading-[68px]
            tracking-[-2.4px] mb-4 animate-fade-down
          ">
                        Our Blogs
                    </h1>

                    <p className="
            font-roboto font-light text-white 
            text-[16px] leading-[24px] opacity-85 
            max-w-[540px] animate-fade-down
          ">
                        Distinctively re-engineer revolutionary meta-services, change
                        management and premium architectures. Intrinsically incubate intuitive
                        opportunities and real-time potentialities.
                    </p>

                </div>

                {/* DESKTOP LAYOUT */}
                <div className="hidden lg:grid grid-cols-2 items-center min-h-[585px]">

                    {/* LEFT CONTENT */}
                    <div className="animate-fade-left relative top-[54px]">

                        <h1 className="
              font-playfair font-bold text-white
              text-[80px] leading-[80px]
              tracking-[-2.4px] mb-[26px]
            ">
                            Our Blogs
                        </h1>

                        <p className="
              font-roboto font-light text-white 
              text-[20px] leading-[30px] opacity-85 
              max-w-[547.4px]
            ">
                            Distinctively re-engineer revolutionary meta-services, change
                            management and premium architectures. Intrinsically incubate intuitive
                            opportunities and real-time potentialities.
                        </p>

                    </div>

                    {/* Right side image is absolute positioned already */}

                </div>

            </div>
        </section>
    );
};

export default BlogHero;

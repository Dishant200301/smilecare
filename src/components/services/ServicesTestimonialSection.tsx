import testimonialPatient from "/image/testimonial-patient.png";

const ServicesTestimonialSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">

                {/* HEADER */}
                <div className="max-w-3xl mx-auto text-center">

                    {/* Small heading */}
                    <h2 className="
        font-playfair 
        font-normal 
        text-[#333C4A]
        text-[32px] 
        sm:text-[40px] 
        lg:text-[57.6px]
        leading-none 
        tracking-[-1.1px]
        mb-4
      ">
                        Sharing Is
                    </h2>

                    {/* Big heading */}
                    <h3 className="
        font-playfair 
        font-bold 
            text-transparent bg-clip-text bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end
        text-[70px] 
        sm:text-[100px] 
        lg:text-[160px]
        leading-none 
        tracking-[-4px]
        mb-8
      ">
                        Caring
                    </h3>

                    {/* Paragraph */}
                    <p className="
        font-roboto 
        text-[#191919] 
        font-light
        text-[15px]
        sm:text-[18px]
        lg:text-[20px]
        leading-[26px]
        sm:leading-[28px]
        lg:leading-[30px]
        max-w-xl
        mx-auto
        mb-16
      ">
                        Organically grow the holistic world view of disruptive innovation
                    </p>
                </div>

                {/* IMAGE + DECORATIVE DOTS */}
                <div className="relative w-full flex justify-center mb-16">

                    {/* Figma dots */}
                    <div className="absolute top-10 right-1/3 w-3 h-3 rounded-full bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end/30"></div>
                    <div className="absolute bottom-14 left-1/4 w-2 h-2 rounded-full bg-[#62EBE2]/30"></div>

                    {/* Testimonial Person Image */}
                    <img
                        src={testimonialPatient}
                        alt="Client"
                        className="
          w-[180px] 
          h-[180px] 
          sm:w-[220px] 
          sm:h-[220px] 
          lg:w-[260px] 
          lg:h-[260px] 
          rounded-full 
          object-cover 
          mx-auto
        "
                    />
                </div>

                {/* QUOTE + NAME */}
                <div className="max-w-2xl mx-auto text-center">

                    {/* Divider */}
                    <div className="h-[2px] w-[180px] bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end mx-auto mb-8"></div>

                    {/* Quote lines */}
                    <p className="font-playfair text-[22px] sm:text-[24px] lg:text-[25px] font-normal leading-[36px] text-black">
                        "After ages of having a nagging bad tooth I decided
                        to have it taken out, feel so much better now,
                        great friendly dentist and staff."
                    </p>

                    {/* Divider */}
                    <div className="h-[2px] w-[180px] bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end mx-auto mt-8 mb-8"></div>

                    {/* Name */}
                    <h4 className="
        font-playfair 
        font-bold 
            text-transparent bg-clip-text bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end 
        text-[24px] 
        sm:text-[26px] 
        lg:text-[28px] 
        tracking-[-0.5px]
        mb-2
      ">
                        Kevin Thomas
                    </h4>

                    {/* Position */}
                    <p className="font-roboto text-sm text-transparent bg-clip-text bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end">Bold Themes</p>

                </div>
            </div>
        </section>
    );
};

export default ServicesTestimonialSection;

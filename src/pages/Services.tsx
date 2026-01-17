import { Stethoscope, Sparkles, Plus, Heart, Baby, Shield, ArrowRightIcon, ChevronRight } from "lucide-react";
import heroCouple from "/image/about-hero.png";
import giftCardWoman from "/image/service-image-1.png";
import teethComparison from "/image/service-image-2.png";
import insuranceWoman from "/image/service-image-3.png";
import testimonialPatient from "/image/testimonial-patient.png";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: "/image/icon/service/icon-1.png",
      name: "Dental Implants",
      description: "Interactively actualize processes with convergence. Synergistically deliver performance methods.",
      color: "text-dental-pink"
    },
    {
      icon: "/image/icon/service/icon-2.png",
      name: "General Dentistry",
      description: "Energistically fabricate an expanded array of niche markets through robust dental end user products.",
      color: "text-dental-text"
    },
    {
      icon: "/image/icon/service/icon-3.png",
      name: "Urgent Surgery",
      description: "Distinctive enable enabled sources and cost effective principle centered information about products.",
      color: "text-dental-blue"
    },
    {
      icon: "/image/icon/service/icon-4.png",
      name: "Prosthesis",
      description: "Globally myocardinate supply chains distinctive quality vectors through interoperable services.",
      color: "text-dental-blue"
    },
    {
      icon: "/image/icon/service/icon-5.png",
      name: "Whitening",
      description: "Holistically predominate testing procedures for reliable supply chains via cutting edge deliverables.",
      color: "text-dental-pink"
    },
    {
      icon: "/image/icon/service/icon-6.png",
      name: "Braces",
      description: "Objectively integrate emerging core competencies before communities than client-centric data.",
      color: "text-dental-text"
    },
    {
      icon: "/image/icon/service/icon-7.png",
      name: "Urgent Surgery",
      description: "Distinctive enable enabled sources and cost effective principle centered information about products.",
      color: "text-dental-blue"
    },
    {
      icon: "/image/icon/service/icon-8.png",
      name: "Dental Implants",
      description: "Interactively actualize processes with convergence. Synergistically deliver performance methods.",
      color: "text-dental-pink"
    },
    {
      icon: "/image/icon/service/icon-9.png",
      name: "General Dentistry",
      description: "Energistically fabricate an expanded array of niche markets through robust dental end user products.",
      color: "text-dental-text"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-dental-pink w-full min-h-[600px] lg:h-[650px] overflow-hidden">

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
            className="w-[340px] sm:w-[450px] md:w-[540px] h-auto object-contain px-4 animate-fade-up"
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
        <div className="relative z-40 container max-w-[1425px] mx-auto px-6 sm:px-6 lg:mx-20">

          <div className="flex flex-col lg:hidden pt-24">

            <h1 className="
              font-playfair font-bold text-white
              text-[58px] leading-[50px]
              sm:text-[60px] sm:leading-[68px]
              tracking-[-2.4px] mb-4 animate-fade-down
            ">
              Our Services
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
                Our Services
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

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">

          {/* Heading Section */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-[28px] sm:text-[36px] md:text-[40px] text-dental-text mb-4">
              Healthy Smiles
            </h2>

            <h3 className="font-playfair font-bold text-[50px] sm:text-[60px] md:text-[80px] text-dental-pink leading-none mb-6">
              Everyday!
            </h3>

            <p className="font-roboto text-[14px] sm:text-[15px] md:text-[16px] text-dental-dark max-w-2xl mx-auto leading-[22px] md:leading-[26px]">
              Get your day started with a smile: check our services to see what we can help you with!
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
            {services.map((service, index) => (
              <div key={index} className="text-center max-w-[300px] mx-auto">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-[75px] h-[75px]"
                  />
                </div>

                {/* Name */}
                <h4 className="font-playfair text-[22px] md:text-[25px] text-[#000] mb-4 tracking-[-0.5px]">
                  {service.name}
                </h4>

                {/* Description */}
                <p className="font-roboto text-[14px] md:text-[15px] text-[#000]/70 leading-[22px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Gift Card Section */}
      <section className="relative bg-dental-pink overflow-hidden pt-16 ">

        {/* TOP CURVE */}
        <div className="absolute top-0 left-0 right-0 z-[25] pointer-events-none">
          <img
            src="/image/hero-bg-3.png"
            className="w-full h-auto object-cover"
            alt="curve top"
          />
        </div>

        {/* BOTTOM CURVE */}
        <div className="absolute bottom-0 left-0 right-0 z-[25] pointer-events-none">
          <img
            src="/image/hero-bg-4.png"
            className="w-full h-auto object-cover"
            alt="curve bottom"
          />
        </div>

        {/* BACKGROUND OVERLAY */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/image/service-image-4-1.png"
            className="w-full h-full object-cover"
            alt="background"
          />
        </div>

        <div className=" pl-6 lg:pl-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT — mobile/tablet FIRST, desktop LEFT */}
            <div className="order-1">
              <h2 className="font-playfair font-normal text-[20px] lg:text-[40px] text-[#333C4A]">
                Enjoy 10% Off
              </h2>

              <h3 className="font-playfair font-bold text-[50px]  lg:text-[110px] text-white leading-none mb-2 drop-shadow">
                Gift Card
              </h3>

              <p className="text-white font-roboto text-md mb-12 max-w-2xl">
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from a streamlined cloud generated solution.
              </p>

              {/* SERVICE ICON GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-center gap-4">
                  <img src="/image/icon/service/gift-icon-1.png" className=""/>
                  <span className="text-white text-lg">General Dentistry</span>
                </div>
                <div className="flex items-center gap-4">
                  <img src="/image/icon/service/gift-icon-2.png" className="w-16 h-14 -mr-4"/>
                  <span className="text-white text-lg">Teeth Whitening</span>
                </div>
                <div className="flex items-center gap-4">
                  <img src="/image/icon/service/gift-icon-3.png" />
                  <span className="text-white text-lg">Aesthetic Dentistry</span>
                </div>
                <div className="flex items-center gap-4">
                  <img src="/image/icon/service/gift-icon-4.png" />
                  <span className="text-white text-lg">Child Dentistry</span>
                </div>
              </div>

              <Button className="bg-white text-dental-text hover:bg-white/90 font-roboto text-base px-8 py-7 flex items-center">
                View Full Offer <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* RIGHT IMAGE — mobile/tablet BELOW content, desktop RIGHT */}
            <div className="order-2 relative flex justify-end lg:justify-end">
              <img
                src={giftCardWoman}
                alt="Gift Card Woman"
                className="w-full max-w-[600px] md:max-w-[750px] lg:max-w-[900px] object-contain
                     relative bottom-0"
              />
            </div>

          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">

          {/* GRID SYSTEM */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ========= IMAGE FIRST IN MOBILE ========= */}
            <div className="order-2 lg:order-2 relative flex justify-center">
              <img
                src={teethComparison}
                alt="Before and after teeth whitening"
                className="w-full max-w-lg mx-auto h-auto"
              />
            </div>

            {/* ========= CONTENT FIRST IN DESKTOP ========= */}
            <div className="order-1 lg:order-1">

              {/* HEADINGS */}
              <h2 className="font-playfair text-[40px] sm:text-[48px] lg:text-[57.6px] text-[#333C4A] leading-none tracking-[-1.1px]">
                How Will I
              </h2>

              <h3 className="font-playfair font-bold text-[90px] sm:text-[110px] lg:text-[160px] text-[#FDABB7] leading-none tracking-[-4.8px] mb-6">
                Look?
              </h3>

              {/* PARAGRAPH */}
              <p className="font-roboto text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-[#191919] mb-10">
                Teeth whitening is one of the quickest ways to improve your smile.
                Many patients are amazed that one trip to DentiCare can change their teeth
                dramatically.
              </p>

              {/* STATISTICS */}
              <div className="grid grid-cols-3 md:grid-cols-3 gap-8 mb-12 ">

                {/* BLOCK 1 */}
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-[5.8px] border-dashed border-[#FDABB7] flex items-center justify-center mx-auto mb-4">
                    <span className="font-playfair text-[32px] text-[#181818] tracking-[-1.6px]">
                      91%
                    </span>
                  </div>
                  <p className="font-roboto text-[14px] text-[#333C4A] leading-tight">
                    Dental<br />Satisfaction
                  </p>
                </div>

                {/* BLOCK 2 */}
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-[5.8px] border-dashed border-[#62EBE2] flex items-center justify-center mx-auto mb-4">
                    <span className="font-playfair text-[32px] text-[#181818] tracking-[-1.6px]">
                      97%
                    </span>
                  </div>
                  <p className="font-roboto text-[14px] text-[#333C4A] leading-tight">
                    Success Rate
                  </p>
                </div>

                {/* BLOCK 3 */}
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-[5.8px] border-dashed border-[#333C4A] flex items-center justify-center mx-auto mb-4">
                    <span className="font-playfair text-[32px] text-[#181818] tracking-[-1.6px]">
                      95%
                    </span>
                  </div>
                  <p className="font-roboto text-[14px] text-[#333C4A] leading-tight">
                    Travel Satisfaction
                  </p>
                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">

                {/* Button 1 */}
                <Button
                  className="w-full sm:w-auto h-[50px] sm:h-[52px] lg:h-[59px]
              bg-gradient-to-r from-[#333C4A] to-[#FDABB7]
              text-white font-['Roboto_Condensed'] text-[16px]
              shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)]
              rounded-[4px] flex items-center justify-center"
                >
                  Other Examples
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>

                {/* Button 2 */}
                <Button
                  className="w-full sm:w-auto h-[50px] sm:h-[52px] lg:h-[59px]
              bg-gradient-to-r from-[#FDABB7] to-[#333C4A]
              text-white font-['Roboto_Condensed'] text-[16px]
              shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)]
              rounded-[4px] flex items-center justify-center"
                >
                  Request A Quote
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="relative py-12 sm:py-16 lg:pt-10 lg:pb-16 bg-dental-pink overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-[25] pointer-events-none">
          <img
            src="/image/hero-bg-3.png"
            className="w-full h-auto object-cover"
            alt="curve top"
          />
        </div>
        {/* ==================== LAYER 1: BACKGROUND ==================== */}
        <div className="absolute inset-0 z-[1]">
          <img
            src="/image/service-image-5.png"
            className="w-full h-full object-cover opacity-90"
            alt="background pattern"
          />
        </div>

        {/* ==================== LAYER 4: BOTTOM CURVE (Always on top of images) ==================== */}
        <div className="absolute bottom-0 left-0 right-0 z-[40] pointer-events-none">
          <img
            src="/image/hero-bg-4.png"
            className="w-full h-auto object-cover"
            alt="bottom curve overlay"
          />
        </div>

        {/* ==================== CONTENT CONTAINER ==================== */}
        <div className="container relative z-[30] max-w-[1425px] mx-auto px-6 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* ==================== MOBILE/TABLET: ORDER 1 (Content First) | DESKTOP: ORDER 1 (Left Side) ==================== */}
            <div className="order-1">

              {/* Small Heading */}
              <h2 className="font-playfair text-[#333C4A] text-[24px] lg:text-[40px] leading-[28px] lg:leading-[40px] font-normal tracking-[-0.8px] mb-2 lg:mb-3">
                All Dental Services Covered
              </h2>

              {/* Main Heading */}
              <h3 className="font-playfair text-[48px] lg:text-[80px] leading-[52px] lg:leading-[80px] font-bold text-white tracking-[-2.4px] mb-4 lg:mb-6 drop-shadow-[0_6px_10px_rgba(0,0,0,0.1)]">
                Insurance Partners
              </h3>

              {/* Paragraph */}
              <p className="text-white font-roboto font-light text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] mb-6 lg:mb-8 max-w-[567px]">
                The following insurances are currently accepted at Denticare. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
              </p>

              {/* ==================== ICONS GRID ==================== */}
              {/* Mobile/Tablet: 2 cols | Small Desktop: 3 cols | Large Desktop: 4 cols */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 lg:mb-10">
                {[
                  "/image/icon/service/insurance-icon-1.png",
                  "/image/icon/service/insurance-icon-2.png",
                  "/image/icon/service/insurance-icon-3.png",
                  "/image/icon/service/insurance-icon-4.png"
                ].map((icon, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <img
                      src={icon}
                      alt={`Insurance partner ${i + 1}`}
                      className="object-contain w-[120px] h-[120px] lg:w-[197px] lg:h-[197px]"
                    />
                  </div>
                ))}
              </div>

              {/* ==================== BUTTONS (Equal Padding) ==================== */}
              <div className="flex flex-col sm:flex-row gap-4">

                {/* Button 1 – White Background */}
                <Button
                  className="flex items-center justify-center w-full sm:w-auto
                       bg-white text-[#333C4A] hover:bg-white/90
                       font-roboto text-[15px] sm:text-[16px]
                       px-6 sm:px-8 py-5 sm:py-7
                       rounded-[4px]
                       shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)]
                       transition-opacity">
                  View Full List Of Accepted Plans
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>

                {/* Button 2 – Gradient (EXACT same padding as Button 1) */}
                <Button
                  className="flex items-center justify-center w-full sm:w-auto
                       px-6 sm:px-8 py-5 sm:py-7
                       bg-gradient-to-r from-[#333C4A] to-[#FDABB7]
                       text-white font-['Roboto_Condensed'] text-[15px] sm:text-[16px]
                       rounded-[4px]
                       shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)]
                       hover:opacity-90 transition-opacity">
                  No Insurance? Check The Options
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* ==================== MOBILE/TABLET: ORDER 2 (Images After Content) | DESKTOP: ORDER 2 (Right Side) ==================== */}
            <div className="order-2 relative flex justify-center lg:justify-end items-end min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">

              {/* ==================== LAYER 2: SERVICE IMAGE (Absolute positioned, slight offset) ==================== */}
              <img
                src="/image/service-image-5.png"
                alt="service decoration"
                className="absolute 
                     top-[-20px] sm:top-[-30px] lg:top-[-40px]
                     left-[-15px] sm:left-[-20px] lg:left-[-30px]
                     w-[200px] sm:w-[280px] md:w-[350px] lg:w-[420px] xl:w-[520px]
                     opacity-90 z-[5]"
              />

              {/* ==================== LAYER 3: WOMAN IMAGE (Main, overlapping bottom curve) ==================== */}
              <img
                src={insuranceWoman}
                alt="Woman checking insurance on phone"
                className="relative object-contain z-[10]
                     w-full 
                     max-w-[400px] sm:max-w-[600px] md:max-w-[700px] 
                     lg:max-w-[820px] xl:max-w-[1100px]
                     drop-shadow-2xl 
                     mb-[-40px] sm:mb-[-50px] lg:mb-[-60px]
                     animate-fade-up"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Testimonial Section */}
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
        text-[#FDABB7]
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
            <div className="absolute top-10 right-1/3 w-3 h-3 rounded-full bg-[#FDABB7]/30"></div>
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
            <div className="h-[2px] w-[180px] bg-[#FDABB7] mx-auto mb-8"></div>

            {/* Quote lines */}
            <p className="font-playfair text-[22px] sm:text-[24px] lg:text-[25px] font-normal leading-[36px] text-black">
              "After ages of having a nagging bad tooth I decided
              to have it taken out, feel so much better now,
              great friendly dentist and staff."
            </p>

            {/* Divider */}
            <div className="h-[2px] w-[180px] bg-[#FDABB7] mx-auto mt-8 mb-8"></div>

            {/* Name */}
            <h4 className="
        font-playfair 
        font-bold 
        text-[#FDABB7] 
        text-[24px] 
        sm:text-[26px] 
        lg:text-[28px] 
        tracking-[-0.5px]
        mb-2
      ">
              Kevin Thomas
            </h4>

            {/* Position */}
            <p className="font-roboto text-sm text-[#FDABB7]">Bold Themes</p>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;

import { Stethoscope, Sparkles, Baby, ScissorsIcon, User, Facebook, Twitter, Linkedin } from "lucide-react";
import heroCouple from "/image/about-hero.png";
import visionDentist from "/image/about-dentist-1.png";
import missionDentist from "/image/about-dentist-2.png";
import tourismWoman from "/image/about-tourism-woman.jpg";
import teamMember1 from "/image/team-member-1.png";
import teamMember2 from "/image/team-member-2.png";
import teamMember3 from "/image/team-member-3.png";
import { Button } from "@/components/ui/button";

const About = () => {
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
  <div className="relative z-40 container max-w-[1425px] mx-auto px-6 lg:mx-16 sm:px-6 lg:pl-[50.5px]">

    {/* =========================== */}
    {/* MOBILE & TABLET CONTENT FIRST */}
    {/* =========================== */}
    <div className="flex flex-col lg:hidden pt-24">

      <h1 className="
        font-playfair font-bold text-white
        text-[72px] leading-[50px]
        sm:text-[60px] sm:leading-[68px]
        tracking-[-2.4px] mb-4 animate-fade-down
      ">
        About Us
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

    {/* =========================== */}
    {/* DESKTOP LAYOUT: LEFT CONTENT / RIGHT IMAGE */}
    {/* =========================== */}
    <div className="hidden lg:grid grid-cols-2 items-center min-h-[585px]">

      {/* LEFT CONTENT */}
      <div className="animate-fade-left relative top-[54px]">

        <h1 className="
          font-playfair font-bold text-white
          text-[80px] leading-[80px]
          tracking-[-2.4px] mb-[26px]
        ">
          About Us
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




      {/* Vision Section */}
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
  <div className="container mx-auto px-6 sm:px-6 lg:px-4">

    {/* Main Grid */}
    <div className="
      grid grid-cols-1 
      lg:grid-cols-2 
      gap-8 md:gap-12 lg:gap-16 
      items-center
    ">

      <div className="order-1 lg:order-1 flex justify-center">
        <img
          src={visionDentist}
          alt="Professional dentist"
          className="
            w-full 
            max-w-[360px]
            sm:max-w-[480px]
            md:max-w-[600px]
            lg:max-w-[520px]
            h-auto 
            rounded-full 
            object-cover 
            animate-fade-up
          "
        />
      </div>

      <div className="order-2 lg:order-2 animate-fade-left">

        {/* Header */}
        <div className="mb-2 lg:mb-4">

          {/* Sub-heading */}
          <h2 className="
            font-playfair font-normal
            text-[28px] sm:text-[32px] lg:text-[40px]
            leading-[32px] sm:leading-[36px] lg:leading-[40px]
            tracking-[-0.8px]
            text-[#333C4A]
            
          ">
            Our Vision
          </h2>

          {/* Heading */}
          <h3 className="
            font-playfair font-bold
            text-[48px] sm:text-[60px] lg:text-[70px]
            leading-[52px] sm:leading-[64px] lg:leading-[80px]
            tracking-[-2.4px]
            text-[#FDABB7]
          ">
            A perfect Smile
          </h3>
        </div>

        {/* Paragraph */}
        <p className="
          font-roboto font-light
          text-[16px] sm:text-[18px] lg:text-[20px]
          leading-[24px] sm:leading-[27px] lg:leading-[30px]
          text-[#191919]
          max-w-[567.38px]
          mb-5
        ">
          Podcasting operational change management inside of workflows to establish a 
          framework. Taking seamless key performance indicators offline to maximise 
          the long tail. Keeping your eye on the ball while performing a deep dive on 
          the start-up mentality to derive convergence on cross-platform integration.
        </p>

        {/* --------------------------- */}
        {/* STATS GRID                  */}
        {/* Mobile → 1 column           */}
        {/* Tablet+Desktop → 3 columns  */}
        {/* --------------------------- */}
        <div className="
          grid 
          grid-cols-3 
          sm:grid-cols-1 
          md:grid-cols-3 
          gap-6 lg:gap-8
        ">
          <div className="text-center lg:text-left group">
            <div className="
              font-playfair 
              text-[40px] sm:text-[50px] lg:text-6xl 
              text-dental-text 
              mb-2 
              group-hover:scale-110 transition-transform duration-300
            ">
              100%
            </div>
            <div className="font-roboto text-[12px] sm:text-[14px] lg:text-base text-dental-text">
              Client Satisfaction
            </div>
          </div>

          <div className="text-center lg:text-left group">
            <div className="
              font-playfair 
              text-[40px] sm:text-[50px] lg:text-6xl 
              text-dental-text 
              mb-2 
              group-hover:scale-110 transition-transform duration-300
            ">
              6.5h
            </div>
            <div className="font-roboto text-[12px] sm:text-[14px] lg:text-base text-dental-text">
              Working Time
            </div>
          </div>

          <div className="text-center lg:text-left group">
            <div className="
              font-playfair 
              text-[40px] sm:text-[50px] lg:text-6xl 
              text-dental-text 
              mb-2 
              group-hover:scale-110 transition-transform duration-300
            ">
              250+
            </div>
            <div className="font-roboto text-[12px] sm:text-[14px] lg:text-base text-dental-text">
              Clients Per Month
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Mission Section */}
      <section className=" lg:py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-6 lg:px-12">

          {/* GRID: Mobile/Tablet = vertical stack | Desktop = 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* CONTENT AREA - Mobile/Tablet: Order 1 (top) | Desktop: Order 1 (left) */}
            <div className="order-1">

              {/* SUB HEADING */}
              <h2 className="font-playfair text-[32px] sm:text-[36px] md:text-[40px] 
          text-dental-text mb-3">
                Our Mission
              </h2>

              {/* MAIN HEADING */}
              <h3 className="font-playfair font-bold text-dental-pink 
          text-[48px] sm:text-[60px] md:text-[72px] lg:text-[80px]
          leading-none tracking-[-2px] mb-6">
                Care For You
              </h3>

              {/* PARAGRAPH */}
              <p className="font-roboto text-[16px] sm:text-[17px] md:text-[18px] 
          text-dental-dark leading-relaxed mb-10 max-w-[600px]">
                Efficiently unleash cross-media information without cross-media value.
                Quickly maximize timely deliverables for real-time schemas. Dramatically
                maintain clicks-and-mortar solutions without functional solutions.
              </p>

              {/* ICONS GRID - Mobile: 1 col | Tablet+Desktop: 2 cols */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">

                {/* ITEM 1 */}
                <div className="flex items-center gap-4">
                  <img src="/image/icon/general-icon.png" className="w-12 h-12" alt="" />
                  <span className="font-roboto text-base text-dental-text">General Dentistry</span>
                </div>

                {/* ITEM 2 */}
                <div className="flex items-center gap-4">
                  <img src="/image/icon/teeth-icon.png" className="w-16 h-16" alt="" />
                  <span className="font-roboto text-base text-dental-text">Teeth Whitening</span>
                </div>

                {/* ITEM 3 */}
                <div className="flex items-center gap-4">
                  <img src="/image/icon/aesthetic-icon.png" className="w-12 h-12" alt="" />
                  <span className="font-roboto text-base text-dental-text">Aesthetic Dentistry</span>
                </div>

                {/* ITEM 4 */}
                <div className="flex items-center gap-4">
                  <img src="/image/icon/child-icon.png" className="w-14 h-14" alt="" />
                  <span className="font-roboto text-base text-dental-text">Child Dentistry</span>
                </div>

                {/* ITEM 5 */}
                <div className="flex items-center gap-4">
                  <img src="/image/icon/oral.png" className="w-14 h-14" alt="" />
                  <span className="font-roboto text-base text-dental-text">Oral Surgery</span>
                </div>

                {/* ITEM 6 */}
                <div className="flex items-center gap-4">
                  <img src="/image/icon/tooth.png" className="w-14 h-14" alt="" />
                  <span className="font-roboto text-base text-dental-text">Tooth Extraction</span>
                </div>

              </div>
            </div>

            {/* IMAGE - Mobile/Tablet: Order 2 (bottom) | Desktop: Order 2 (right) */}
            <div className="order-2 flex justify-center lg:justify-end">
              <img
                src={missionDentist}
                alt="Professional dentist"
                className="w-full max-w-[360px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[520px] 
          h-auto rounded-full object-cover animate-fade-up"
              />
            </div>

          </div>

        </div>
      </section>




      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2
              className="font-playfair font-normal 
        text-[#333C4A] 
        text-[32px] sm:text-[36px] md:text-[40px] 
        leading-[40px] tracking-[-0.8px] mb-3">
              Our Team
            </h2>

            <h3
              className="font-playfair font-bold 
        text-[#FDABB7] 
        text-[48px] sm:text-[60px] md:text-[70px] lg:text-[80px] 
        leading-[50px] sm:leading-[70px] md:leading-[80px] 
        tracking-[-2.4px] mb-5">
              Dedicated To You!
            </h3>

            <p
              className="font-roboto font-light 
        text-[#191919] text-[16px] sm:text-[18px] md:text-[20px] 
        leading-[26px] sm:leading-[28px] md:leading-[30px] 
        max-w-[550px] mx-auto">
              Organically grow the holistic world view of disruptive innovation
            </p>
          </div>

          {/* TEAM GRID: MOBILE=1 TABLET=1 DESKTOP=3 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* CARD 1 */}
            <div className="text-center">
              <img
                src={teamMember1}
                className="w-[250px] h-[250px] rounded-full object-cover mx-auto mb-6"
                alt="Everest Whiting"
              />

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mb-5">
                <div className="w-9 h-9 rounded-full bg-[#3B5998] flex justify-center items-center">
                  <Facebook className="w-[16px] h-[16px] text-white" />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#1DA1F2] flex justify-center items-center">
                  <Twitter className="w-[16px] h-[16px] text-white" />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#007BB5] flex justify-center items-center">
                  <Linkedin className="w-[16px] h-[16px] text-white" />
                </div>
              </div>

              <h4 className="font-playfair text-[30px] leading-[30px] text-[#333C4A] tracking-[-0.9px] mb-1">
                Everest {" "}
                <span className="font-bold">Whiting</span>
              </h4>

              <p className="font-roboto text-[15px] leading-[22px] text-[#333C4A] uppercase tracking-wide mb-4">
                CLINIC DIRECTOR
              </p>

              <p className="font-roboto text-[16px] leading-[24px] text-[#000]/80 max-w-xl mx-auto">
                Emphatic and enjoying treating a wide range of patients, including children,
                oral hygiene and education is important to me as to my patients.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="text-center">
              <img
                src={teamMember2}
                className="w-[250px] h-[250px] rounded-full object-cover mx-auto mb-6"
                alt="Teresa Ford"
              />

              <div className="flex justify-center gap-4 mb-5">
                <div className="w-9 h-9 rounded-full bg-[#3B5998] flex justify-center items-center">
                  <Facebook className="w-[16px] h-[16px] text-white" />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#1DA1F2] flex justify-center items-center">
                  <Twitter className="w-[16px] h-[16px] text-white" />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#007BB5] flex justify-center items-center">
                  <Linkedin className="w-[16px] h-[16px] text-white" />
                </div>
              </div>

              <h4 className="font-playfair text-[30px] leading-[30px] text-[#333C4A] tracking-[-0.9px] mb-1">
                Teresa {" "}
                <span className="font-bold">Ford</span>
              </h4>

              <p className="font-roboto text-[15px] leading-[22px] text-[#333C4A] uppercase tracking-wide mb-4">
                SENIOR ORTHODONTIST
              </p>

              <p className="font-roboto text-[16px] leading-[24px] text-[#000]/80  mx-auto max-w-xl">
                The qualities of excellent communication and trust form part of our
                commitment to you and I have carefully chosen a great team of people.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="text-center">
              <img
                src={teamMember3}
                className="w-[250px] h-[250px] rounded-full object-cover mx-auto mb-6"
                alt="Stephanie Ryan"
              />

              <div className="flex justify-center gap-4 mb-5">
                <div className="w-9 h-9 rounded-full bg-[#3B5998] flex justify-center items-center">
                  <Facebook className="w-[16px] h-[16px] text-white" />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#1DA1F2] flex justify-center items-center">
                  <Twitter className="w-[16px] h-[16px] text-white" />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#007BB5] flex justify-center items-center">
                  <Linkedin className="w-[16px] h-[16px] text-white" />
                </div>
              </div>

              <h4 className="font-playfair text-[30px] leading-[30px] text-[#333C4A] tracking-[-0.9px] mb-1">
                Stephanie {" "}
                <span className="font-bold">Ryan</span>
              </h4>

              <p className="font-roboto text-[15px] leading-[22px] text-[#333C4A] uppercase tracking-wide mb-4">
                SENIOR DENTAL SURGEON
              </p>

              <p className="font-roboto text-[16px] leading-[24px] text-[#000]/80 max-w-xl mx-auto">
                Committed to delivering dentistry of the highest quality, Stephanie achieved
                numerous awards over Europe and United States. Now he is in DentiCare.
              </p>
            </div>

          </div>

          {/* BUTTON */}
          <div className="text-center mt-14">
            <button
              className="w-full sm:w-auto px-12 py-4 
        bg-gradient-to-r from-[#FDABB7] to-[#333C4A] 
        text-white text-[16px] font-['Roboto_Condensed'] rounded-[4px]
        shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)]">
              Read More About Our Team
            </button>
          </div>

        </div>
      </section>




    </div>
  );
};

export default About;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  MapPin,
  Camera,
  Car,
  MessageSquare,
  Home as HomeIcon,
  Ticket,
  Stethoscope,
  Siren,
  FileText,
  Sparkles,
  Grid3x3,
  ChevronRight
} from "lucide-react";
import heroImage from "/image/hero-couple.jpg";
import budapestImage from "/image/holiday-image.png";
import dentistImage from "/image/dentist-1.png";
import referImage from "/image/girl.png";
import ctaImage from "/image/happy.png";
import ServiceCards from "@/components/ServiceCards";
import HomeContact from "@/components/HomeContact";
import { useState } from "react";

const items = [
  { img: "/image/home-service-1.png", title: "Accommodations" },
  { img: "/image/home-service-2.png", title: "Sightseeing" },
  { img: "/image/home-service-3.png", title: "Bars & Pubs" },
  { img: "/image/home-service-4.png", title: "Transport" },
];


const PillIcon = () => (
  <img src="/image/icon/pill.png" alt="" className="w-12 h-12 mt-1" />
);
const StethoscopeIcon = () => (
  <img src="/image/icon/stethoscope.png" alt="" className="w-10 h-10 mt-2" />
);
const SirenIcon = () => (
  <img src="/image/icon/siren.png" alt="" className="w-16 h-12" />
);
const FileTextIcon = () => (
  <img src="/image/icon/file-text.png" alt="" className="w-12 h-10 mt-4" />
);
const SparklesIcon = () => (
  <img src="/image/icon/sparkles.png" alt="" className="w-16 h-14" />
);
const Grid3x3Icon = () => (
  <img src="/image/icon/Braces.png" alt="" className="w-16 h-14" />
);


const Home = () => {
  const [activeTab, setActiveTab] = useState("refer");

  return (
    <div className="min-h-screen  overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen  flex items-center lg:px-16 overflow-hidden">
        {/* ===== BACKGROUND IMAGE ===== */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image/hero-bg-1.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* ===== BOTTOM CURVE ===== */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"> <img src="/image/hero-bg-2.png" alt="" className="w-full h-auto object-cover" /> </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="container mx-auto px-6 lg:pr-16 lg:pl-8 relative z-10 pt-16 sm:pt-20 lg:pt-0">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ============================= */}
            {/* CONTENT – MOBILE/TABLET FIRST */}
            {/* ============================= */}
            <div className="order-1 lg:order-1 space-y-6  text-left">

              <div>
                {/* Time To */}
                <h2 className="
            text-dental-dark font-playfair
            text-[42px] sm:text-[55px] lg:text-[68px]
            leading-[1] tracking-[-1px]
          ">
                  Time To
                </h2>

                {/* Smile! */}
                <h1 className="
            text-white font-playfair font-bold
            text-[90px] sm:text-[120px] lg:text-[160px] xl:text-[190px]
            leading-none tracking-[-3px]
            drop-shadow-[0_6px_10px_rgba(0,0,0,0.1)]
          ">
                  Smile!
                </h1>
              </div>

              <p className="
          text-white/90 font-roboto
          text-[16px] sm:text-[18px] lg:text-[20px]
          max-w-[480px] leading-[26px] sm:leading-[30px]
        ">
                Enjoy our new dental offers and travel destinations, they're online
                immediately. Choose your service or destination and start smiling again!
              </p>

              <Button className="
          bg-white text-dental-text
          hover:bg-white/90 hover:shadow-xl transition-all duration-300
          px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-8
          text-[14px] sm:text-[16px]
          rounded-md inline-flex items-center
        ">
                Start Your Dental Travel
                <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            {/* ==================================== */}
            {/* IMAGE – MOBILE/TABLET AFTER CONTENT  */}
            {/* DESKTOP RIGHT SIDE FIXED + NO GAPS   */}
            {/* ==================================== */}
            <div className="
        order-2 lg:order-2 relative
        flex justify-center lg:justify-end
        z-10
      ">
              <img
                src={heroImage}
                alt="Couple Smiling"
                className="
            w-[720px] h-auto animate-fade-up

            max-w-[330px] sm:max-w-[480px] md:max-w-[600px]
            lg:max-w-[780px] xl:max-w-[900px] 2xl:max-w-[1100px]
            object-contain
            relative
            m-0 p-0
            "
              />
            </div>

          </div>
        </div>

      </section >



      {/* Holiday Section */}
      < section className="py-16 sm:py-20 lg:py-24 bg-white" >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ===== CONTENT — Mobile/Tablet First, Desktop Left ===== */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-1">

              {/* Heading */}
              <div>
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

              {/* Paragraph */}
              <p className="
          text-dental-text font-roboto
          text-[16px] sm:text-[18px] lg:text-[20px]
          leading-[26px] sm:leading-[28px]
          max-w-lg
        ">
                It is well known that Hungary has become a main tourism destination.
                Americans have chosen Budapest the second most beautiful city in the world.
                Hungary has also developed to a top level in dental care and a remarkable
                dental tourism location for foreign and domestic patients.
              </p>

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


      <ServiceCards />


      {/* Natural Smile Section - CSS to Tailwind Conversion */}
      <section className="relative bg-[#FDABB7] overflow-hidden min-h-[800px] lg:min-h-[933px]">

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
                  We at DentiCare are focused on helping you.
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



      <section className="relative py-20 bg-white overflow-hidden">
        <div className="">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

            {/* ============================
          CONTENT (Always no overlap)
      ============================= */}
            <div className="order-1 lg:order-2 space-y-4 animate-fade-left container mx-auto px-6 lg:pl-16 lg:pr-24">
              <div>
                <h3 className="font-playfair text-[#333C4A] text-[28px] sm:text-[38px] lg:text-[42px] leading-tight">
                  Reward Awaits When
                </h3>

                <h1 className="font-playfair font-bold text-[#FDABB7]
            text-[54px] sm:text-[62px] lg:text-[70px] leading-tight tracking-[-2px]">
                  You Refer A Friend
                </h1>
              </div>

              <p className="font-roboto text-[#191919]
          text-[16px] sm:text-[18px] leading-[27px] max-w-[580px]">
                If you’ve been happy with the care you’ve received and would like to
                share dental referrals with your friends and family, DentiCare invites
                you to take part in our dental referrals rewards program.
              </p>

              {/* Tabs */}
              <div className="flex items-center gap-12">
                <p
                  className={`font-['Roboto_Condensed'] text-[16px] cursor-pointer ${activeTab === "refer" ? "text-[#191919]" : "text-[#191919]/60"
                    }`}
                  onClick={() => setActiveTab("refer")}
                >
                  Refer a friend now
                </p>

                <p
                  className={`font-['Roboto_Condensed'] text-[16px] cursor-pointer ${activeTab === "how" ? "text-[#191919]" : "text-[#191919]/60"
                    }`}
                  onClick={() => setActiveTab("how")}
                >
                  How it works?
                </p>
              </div>

              {/* Footer line with dot */}
              <div className="relative w-full flex items-center justify-center mt-4 mb-6">
                <div className="w-full h-[1px] bg-black/10"></div>

                {activeTab === "refer" ? (
                  <div className="absolute left-[16%] lg:left-[8%] w-[12px] h-[12px] bg-[#FDABB7] rounded-full"></div>
                ) : (
                  <div className="absolute left-[75%] lg:left-[34%] w-[12px] h-[12px] bg-[#FDABB7] rounded-full"></div>
                )}
              </div>

              {/* Tab Content */}
              {activeTab === "refer" ? (
                <form className="space-y-5">
                  <input
                    placeholder="Your name *"
                    className="w-full max-w-[580px] h-[52px] px-4 rounded-md
                bg-white border border-gray-300 shadow-sm focus:border-[#FDABB7]"
                  />

                  <input
                    type="email"
                    placeholder="Your Email Address *"
                    className="w-full max-w-[580px] h-[52px] px-4 rounded-md
                bg-white border border-gray-300 shadow-sm focus:border-[#FDABB7]"
                  />

                  <input
                    placeholder="Who you Referred *"
                    className="w-full max-w-[580px] h-[52px] px-4 rounded-md
                bg-white border border-gray-300 shadow-sm focus:border-[#FDABB7]"
                  />

                  <textarea
                    placeholder="Additional Comments or referral date"
                    className="w-full max-w-[580px] h-[156px] p-4 rounded-md
                bg-white border border-gray-300 shadow-sm resize-none focus:border-[#FDABB7]"
                  ></textarea>

                  <Button className="bg-gradient-to-r from-dental-pink to-dental-dark text-white 
              font-roboto text-[16px] px-8 py-6">
                    Refer Your Friend
                  </Button>
                </form>
              ) : (
                <div className="space-y-4 max-w-[580px] text-[16px] sm:text-[18px] 
            font-roboto text-[#191919] leading-[28px]">
                  <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                </div>
              )}
            </div>

            {/* ===================================
          IMAGE WITH *ZERO* PADDING & MARGIN
      ==================================== */}
            <div className="order-2 lg:order-1 w-full h-full flex justify-center lg:justify-start">

              <img
                src="/image/girl.png"
                alt=""
                className="
            w-full
            max-w-none     /* stops auto max-width shrink */
            object-contain
            block          /* removes default inline gap */
            m-0 p-0        /* removes margin/padding */
          "
              />
            </div>

          </div>
        </div>
      </section>






      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-16">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-[#333C4A] text-[32px] sm:text-[38px] lg:text-[40px] tracking-[-0.8px]">
              Healthy Smiles
            </h2>

            <h2 className="font-playfair font-bold text-[#FDABB7] 
            text-[60px] sm:text-[72px] lg:text-[80px] leading-[1] tracking-[-2.4px] mt-2">
              Everyday!
            </h2>

            <p className="font-roboto text-[#191919] text-[15px] sm:text-[16px] lg:text-[20px]
            max-w-[520px] mx-auto mt-6 leading-[26px] opacity-80">
              Get your day started with a smile: check our services to see what we can help you with!
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-16">

            {/* MAP LOOP */}
            {[
              {
                icon: PillIcon,
                title: "Dental Implants",
                desc: "Interactively actualize processes with convergence. Synergistically deliver performance methods.",
                color: "#FDABB7",
              },
              {
                icon: StethoscopeIcon,
                title: "General Dentistry",
                desc: "Energistically fabricate an expanded array of niche markets through robust dental end user products.",
                color: "#191919"
              },
              {
                icon: SirenIcon,
                title: "Urgent Surgery",
                desc: "Distinctive enable enabled sources and cost effective principle centered information about products.",
                color: "#62EBE2"
              },
              {
                icon: FileTextIcon,
                title: "Prosthesis",
                desc: "Globally myocardinate supply chains distinctive quality vectors through interoperable services.",
                color: "#62EBE2"
              },
              {
                icon: SparklesIcon,
                title: "Whitening",
                desc: "Holistically predominate testing procedures for reliable supply chains via cutting edge deliverables.",
                color: "#FDABB7"
              },
              {
                icon: Grid3x3Icon,
                title: "Braces",
                desc: "Objectively integrate emerging core competencies before communities than client-centric data.",
                color: "#191919"
              },
            ].map((service, index) => (
              <div key={index} className="text-center px-4 space-y-4">

                {/* ICON SAME SIZE EVERYWHERE */}
                <div className="flex justify-center">
                  <service.icon
                    className="w-[75px] h-[75px]"
                    style={{ color: service.color }}
                  />
                </div>

                {/* TITLE */}
                <h3 className="font-playfair text-[22px] sm:text-[24px] lg:text-[25px] text-[#000] tracking-[-0.75px]">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="font-roboto text-[14px] sm:text-[15px] lg:text-[15px] text-[#000] leading-[22px] opacity-70 max-w-[260px] mx-auto">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>

          {/* BUTTON */}
          <div className="text-center">
            <Button
              className="
          bg-gradient-to-r from-[#333C4A] to-[#FDABB7]
          text-white font-roboto text-[16px]
          px-8 py-6 rounded-[4px]
          shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)]
        "
            >
              Full List Of Services
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

        </div>
      </section>


      {/* CTA Section - Ready To Go? */}
      <section className="relative bg-[#FDABB7] w-full overflow-hidden lg:py-6">

        {/* DESKTOP BACKGROUND */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <img src="/image/hero-bg-5.png" className="w-full h-full object-cover" />
        </div>

        {/* TOP CURVE */}
        <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
          <img src="/image/hero-bg-3.png" className="w-full h-auto object-cover" />
        </div>

        {/* BOTTOM CURVE */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <img src="/image/hero-bg-4.png" className="w-full h-auto object-cover" />
        </div>

        {/* MAIN CONTAINER */}
        <div className="container mx-auto px-6 lg:px-16 pt-10 lg:py-0 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* ==== CONTENT FIRST on mobile/tablet | CONTENT RIGHT on desktop ==== */}
            <div className="order-1 lg:order-2 text-left space-y-4 sm:space-y-6">

              {/* Small Heading */}
              <h3 className="
          font-playfair font-normal
          text-[#333C4A]
          text-[28px] sm:text-[34px] lg:text-[40px]
          leading-[32px] sm:leading-[36px] lg:leading-[40px]
          tracking-[-0.8px]
        ">
                Ready To Go?
              </h3>

              {/* Big Heading */}
              <h2 className="
          font-playfair font-bold text-white
          text-[42px] sm:text-[58px] lg:text-[80px]
          leading-[46px] sm:leading-[64px] lg:leading-[80px]
          tracking-[-2.4px]
          drop-shadow-[0px_6px_10px_rgba(0,0,0,0.1)]
        ">
                Apply For Your<br />Free Ticket
              </h2>

              {/* Paragraph */}
              <p className="
          font-roboto font-light text-white/90
          text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px]
          leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[30px]
          max-w-[664px]
        ">
                Bring to the table win-win survival strategies to ensure proactive domination.
                At the end of the day, going forward, a new normal that has evolved from a
                streamlined cloud generated solution.
              </p>

              {/* Button */}
              <Button
                className="
            bg-white text-[#333C4A]
            font-roboto text-[14px] sm:text-[15px] lg:text-[16px]
            px-6 sm:px-8
            py-3 sm:py-4 lg:py-[20px]
            rounded-[4px]
            shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)]
            inline-flex items-center
            hover:bg-white/95 transition
          "
              >
                View Detailed Process
                <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>

            </div>

            {/* ==== IMAGE BELOW CONTENT on mobile/tablet | LEFT SIDE on desktop ==== */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <img
                src={ctaImage}
                alt="Ticket Image"
                className="
            w-full 
            max-w-[300px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[476px]
            h-auto
            object-contain
            drop-shadow-2xl
          "
              />
            </div>

          </div>
        </div>
      </section>


      {/* Contact Section */}
      {/* Contact Section - New Component */}
      <HomeContact />
    </div >
  );
};

export default Home;

import React from "react";

// Types
interface TestimonialType {
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

// Testimonials Row 1
const testimonialsRow1: TestimonialType[] = [
  {
    name: "@callmevlad",
    title: "Co-founder & CEO @webflow",
    quote:
      "Wow, this is absolutely incredible – huge props to the @relume_io team for bringing these amazing AI superpowers to more Webflow visual developers!",
    avatar:
      "https://framerusercontent.com/images/Y9KmJAQ4w53hsc4jJojfokLZ7D8.jpg?scale-down-to=512",
  },
  {
    name: "@rrabrot",
    title: "Designer & Webflow developer",
    quote:
      "Bro what?! Are you telling I was able to produce all of this with just one prompt? As soon as that happened, I signed up for the highest tier plan RIGHT AWAY.",
    avatar:
      "https://framerusercontent.com/images/Ky8xfxIZ6aXUUztI3YWXxaM.jpg?scale-down-to=512",
  },
  {
    name: "@SoyBalta",
    title: "Designer & Webflow developer",
    quote:
      "Finally an AI tool that I will ACTUALLY include as part of my workflow. I love how seamless it is from start to finish.",
    avatar:
      "https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg?scale-down-to=512",
  },
  {
    name: "@DannPetty",
    title: "Designer & Content Creator",
    quote:
      "This is pure magic. ✨ → Sitemaps in seconds → Wireframes in minutes → Full copy written with AI → Layered wireframes to Figma.",
    avatar:
      "https://framerusercontent.com/images/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg?scale-down-to=512",
  },
  {
    name: "@gabelopez",
    title: "Designer",
    quote:
      "Very excited for @relume_io's new AI-powered generative website builder. The messaging and positioning: 'to empower you, not replace you'.",
    avatar:
      "https://framerusercontent.com/images/w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg?scale-down-to=512",
  },
  {
    name: "@bryant",
    title: "Co-founder @webflow",
    quote:
      "This is the most exciting AI website product I've seen — great work Relume team!!! Looks especially powerful for serious web professionals.",
    avatar:
      "https://framerusercontent.com/images/Q2Af4Sm9MCv82WCNdQDN3ZOYgI.jpg?scale-down-to=512",
  },
];

// Testimonials Row 2
const testimonialsRow2: TestimonialType[] = [
  {
    name: "@callmevlad",
    title: "Co-founder & CEO @webflow",
    quote:
      "Wow, this is absolutely incredible – huge props to the @relume_io team for bringing these amazing AI superpowers to more Webflow visual developers!",
    avatar:
      "https://framerusercontent.com/images/Y9KmJAQ4w53hsc4jJojfokLZ7D8.jpg?scale-down-to=512",
  },
  {
    name: "@rrabrot",
    title: "Designer & Webflow developer",
    quote:
      "Bro what?! Are you telling I was able to produce all of this with just one prompt? As soon as that happened, I signed up for the highest tier plan RIGHT AWAY.",
    avatar:
      "https://framerusercontent.com/images/Ky8xfxIZ6aXUUztI3YWXxaM.jpg?scale-down-to=512",
  },
  {
    name: "@SoyBalta",
    title: "Designer & Webflow developer",
    quote:
      "Finally an AI tool that I will ACTUALLY include as part of my workflow. I love how seamless it is from start to finish.",
    avatar:
      "https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg?scale-down-to=512",
  },
  {
    name: "@DannPetty",
    title: "Designer & Content Creator",
    quote:
      "This is pure magic. ✨ → Sitemaps in seconds → Wireframes in minutes → Full copy written with AI → Layered wireframes to Figma.",
    avatar:
      "https://framerusercontent.com/images/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg?scale-down-to=512",
  },
  {
    name: "@gabelopez",
    title: "Designer",
    quote:
      "Very excited for @relume_io's new AI-powered generative website builder. The messaging and positioning: 'to empower you, not replace you'.",
    avatar:
      "https://framerusercontent.com/images/w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg?scale-down-to=512",
  },
  {
    name: "@bryant",
    title: "Co-founder @webflow",
    quote:
      "This is the most exciting AI website product I've seen — great work Relume team!!! Looks especially powerful for serious web professionals.",
    avatar:
      "https://framerusercontent.com/images/Q2Af4Sm9MCv82WCNdQDN3ZOYgI.jpg?scale-down-to=512",
  },
];

// Testimonial Card
const TestimonialCard: React.FC<{ testimonial: TestimonialType }> = ({
  testimonial,
}) => {
  const { name, title, quote, avatar } = testimonial;

  return (
    <div className="relative flex flex-col justify-between p-6 h-auto min-h-[220px] w-[340px] rounded-2xl border border-white/10 overflow-hidden">
      {/* Grid Blur Overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-0"
        style={{
          backgroundImage: `url(https://framerusercontent.com/images/5AXsK3MyGYovv57LsfY0T3kRQU.png)`,
          backgroundRepeat: "repeat",
          backgroundSize: "40px auto",
          opacity: 0.25,
          filter: "blur(1px)",
          maskImage: `linear-gradient(180deg, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)`,
          WebkitMaskImage: `linear-gradient(180deg, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Avatar + Name */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={avatar}
              alt={`Avatar of ${name}`}
              className="absolute inset-0 object-cover w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h5 className="text-base text-white font-semibold">{name}</h5>
            <h6 className="text-sm text-gray-400">{title}</h6>
          </div>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">{quote}</p>
      </div>
    </div>
  );
};

// Main Section
const TestimonialSection: React.FC = () => {
  // duplicate row so that animation loops seamlessly
  const duplicatedRow1 = [...testimonialsRow1, ...testimonialsRow1];
  const duplicatedRow2 = [...testimonialsRow2, ...testimonialsRow2];

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative gap-[60px] font-sans">
      {/* Title */}
      <div className="flex flex-col items-center gap-8">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:mt-12">
            <div className="mb-2">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl gradient-text font-HindMadurai font-medium leading-tight">
                Our{" "}
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl gradient-text font-InstrumentSerif italic text-white">
                  Testimonials
                </span>
              </h1>
            </div>
            <span className="text-md sm:text-5xl md:text-3xl lg:text-2xl font-InstrumentSerif text-gray-400">
              What our clients say
            </span>
          </div>
        </div>
      </div>

      {/* Rows */}
      <div
        className="w-full relative overflow-hidden"
        style={{ height: "460px" }}
      >
        {/* Top Row (Right → Left) */}
        <section className="py-2 overflow-hidden">
          <ul className="flex w-fit items-center gap-6 animate-infinite-scroll-ltr">
            {duplicatedRow1.map((t, i) => (
              <li key={`row1-${i}`} className="flex-shrink-0">
                <TestimonialCard testimonial={t} />
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom Row (Left → Right) */}
        <section className="py-2 overflow-hidden">
          <ul className="flex w-fit items-center gap-6 animate-infinite-scroll-rtl">
            {duplicatedRow2.map((t, i) => (
              <li key={`row2-${i}`} className="flex-shrink-0">
                <TestimonialCard testimonial={t} />
              </li>
            ))}
          </ul>
        </section>

        {/* Side gradient fade */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-20" />
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
};

export default TestimonialSection;

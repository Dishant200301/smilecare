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
    name: "Michael Anderson",
    title: "Head of Operations",
    quote:
      "The level of security Inno offers for our assets is unparalleled. I feel confident that our financial data is in safe hands.",
    avatar:
      "https://framerusercontent.com/images/Y9KmJAQ4w53hsc4jJojfokLZ7D8.jpg?scale-down-to=512",
  },
  {
    name: "Emily Johnson",
    title: "Chief Financial Officer",
    quote:
      "Inno's services have completely transformed the way we handle our financial operations. Their innovative solutions have made a significant impact on our efficiency.",
    avatar:
      "https://framerusercontent.com/images/Ky8xfxIZ6aXUUztI3YWXxaM.jpg?scale-down-to=512",
  },
  {
    name: "Olivia Taylor",
    title: "Product Manager",
    quote:
      "Inno's services have enabled us to streamline our processes, saving us both time and money. Their team truly understands the needs of modern businesses.",
    avatar:
      "https://framerusercontent.com/images/w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg?scale-down-to=512",
  },
  {
    name: "Grace Miller",
    title: "Operations Manager",
    quote:
      "The transparency and reliability of Inno's services have improved our operational efficiency, allowing us to focus on growth.",
    avatar:
      "https://framerusercontent.com/images/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg?scale-down-to=512",
  },
  {
    name: "Lucas Davis",
    title: "Strategy Consultant",
    quote:
      "Inno's insights and strategic advice have been invaluable in guiding our financial decisions. They are a trusted partner.",
    avatar:
      "https://framerusercontent.com/images/Q2Af4Sm9MCv82WCNdQDN3ZOYgI.jpg?scale-down-to=512",
  },
  {
    name: "Ava Moore",
    title: "Business Analyst",
    quote:
      "The analytics and reporting tools provided by Inno have given us deeper insights into our performance, helping us make informed decisions.",
    avatar:
      "https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg?scale-down-to=512",
  },
];

// Testimonials Row 2
const testimonialsRow2: TestimonialType[] = [
  {
    name: "Grace Miller",
    title: "Operations Manager",
    quote:
      "The transparency and reliability of Inno's services have improved our operational efficiency, allowing us to focus on growth.",
    avatar:
      "https://framerusercontent.com/images/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg?scale-down-to=512",
  },
  {
    name: "Lucas Davis",
    title: "Strategy Consultant",
    quote:
      "Inno's insights and strategic advice have been invaluable in guiding our financial decisions. They are a trusted partner.",
    avatar:
      "https://framerusercontent.com/images/Q2Af4Sm9MCv82WCNdQDN3ZOYgI.jpg?scale-down-to=512",
  },
  {
    name: "Ava Moore",
    title: "Business Analyst",
    quote:
      "The analytics and reporting tools provided by Inno have given us deeper insights into our performance, helping us make informed decisions.",
    avatar:
      "https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg?scale-down-to=512",
  },
  {
    name: "Grace Miller",
    title: "Operations Manager",
    quote:
      "The transparency and reliability of Inno's services have improved our operational efficiency, allowing us to focus on growth.",
    avatar:
      "https://framerusercontent.com/images/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg?scale-down-to=512",
  },
  {
    name: "Lucas Davis",
    title: "Strategy Consultant",
    quote:
      "Inno's insights and strategic advice have been invaluable in guiding our financial decisions. They are a trusted partner.",
    avatar:
      "https://framerusercontent.com/images/Q2Af4Sm9MCv82WCNdQDN3ZOYgI.jpg?scale-down-to=512",
  },
  {
    name: "Ava Moore",
    title: "Business Analyst",
    quote:
      "The analytics and reporting tools provided by Inno have given us deeper insights into our performance, helping us make informed decisions.",
    avatar:
      "https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg?scale-down-to=512",
  },
];

// Testimonial Card
const TestimonialCard: React.FC<{ testimonial: TestimonialType }> = ({
  testimonial,
}) => {
  const { name, title, quote, avatar } = testimonial;

  return (
    <div
      className="relative flex flex-col justify-between p-6 h-auto min-h-[220px] w-[340px] rounded-2xl border border-white/10 overflow-hidden"
     

    >
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
    <section className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative gap-[60px] font-sans">
      {/* Title */}
      <div className="flex flex-col items-center gap-6 text-center w-full">
        <h2 className="text-5xl font-bold leading-tight font-serif">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-[#8caac8]">
            Clients
          </span>
        </h2>
        <p className="text-base text-gray-400 max-w-2xl">
          Protect your assets and transactions with our advanced encryption
          technology and decentralized infrastructure.
        </p>
      </div>

      {/* Rows */}
      <div className="w-full relative overflow-hidden" style={{ height: "460px" }}>
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

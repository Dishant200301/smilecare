import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import ShinyText from "./ShinyText";

// Features data
const features = {
  pro: [
    "One-on-one consultations or coaching",
    "Personalized content requests",
    "Discounts on digital products",
  ],
  light: [
    "Access to all standard blog posts",
    "Email newsletters",
    "Community forum or discussion group",
  ],
  basic: [
    "Access to exclusive blog posts, tutorials, and case studies",
    "Downloadable resources",
    "Monthly Q&A or live webinars",
  ],
};

const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M9 5l7 7-7 7"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 🔹 Animated Number Component
function AnimatedNumber({ value }: { value: number }) {
  const count = useMotionValue(value);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 0.6, ease: "easeOut" });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
}

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Prices for monthly and annually (numbers only for animation)
  const pricing = {
    light: isAnnual ? 10 : 12,
    pro: isAnnual ? 25 : 29,
    enterprise: isAnnual ? 35 : 39,
  };

  return (
    <section className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24">
        {/* Heading */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <h1
  className="text-4xl md:text-5xl font-bold text-[#fafafa]  mb-6"
  style={{ fontFamily: "Playfair Display" }}
>
  PRICING
</h1>

<h3
  className="text-2xl sm:text-4xl md:text-5xl text-center font-light mb-6 font-roboto"
>
  <ShinyText
    text="Affordable"
    disabled={false}
    speed={2}
    className="hero-text-gradient
 bg-clip-text animate-gradient inline-block"
  />{" "}
  plans to unlock <br className="hidden md:block" />{" "}
  <ShinyText
    text="premium"
    disabled={false}
    speed={2}
    className="hero-text-gradient
bg-clip-text animate-gradient inline-block"
  />{" "}
  content and features
</h3>


          <p className="text-base md:text-lg text-gray-400 text-center max-w-2xl mb-12">
            Whether you're looking for one-time access or ongoing benefits, we
            offer flexible pricing options to ensure you get the most value.
          </p>

          {/* Toggle Switch */}
          <div className="relative flex items-center bg-[#1e1e2e] border border-[#f0ff8b] rounded-full mb-12">
            {/* Sliding Indicator */}
            <motion.div
              className="absolute top-0 bottom-0 w-1/2 rounded-full bg-[#f0ff8b]"
              initial={false}
              animate={{ x: isAnnual ? "100%" : "0%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />

            {/* Monthly Button */}
            <button
              className={`relative  px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual ? "text-black" : "text-white"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>

            {/* Annually Button */}
            <button
              className={`relative px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                isAnnual ? "text-black" : "text-white"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Light */}
          <Card
            title="Light"
            price={pricing.light}
            features={features.light}
            color="bg-[#374a34]"
          />

          {/* Pro */}
          <Card
            title="Pro"
            price={pricing.pro}
            features={features.pro}
            color="bg-[#451930]"
          />

          {/* Enterprise */}
          <Card
            title="Enterprise"
            price={pricing.enterprise}
            features={features.basic}
            color="bg-[#202633]"
          />
        </div>
      </div>
    </section>
  );
}

// 🔹 Card Component
function Card({
  title,
  price,
  features,
  color,
}: {
  title: string;
  price: number;
  features: string[];
  color: string;
}) {
  return (
    <div className="group relative md:col-span-2 lg:col-span-1 h-[360px]">
      {/* Default view */}
      <div className="absolute inset-0 bg-[#f0ff8b] border border-transparent rounded-3xl pl-8 pr-6 pt-8 pb-6 flex flex-col transition-all duration-500 ease-out transform group-hover:opacity-0">
        <span className="inline-flex w-fit items-center rounded-full bg-transparent border border-black text-black px-4 py-2 text-xs font-medium mb-8">
          {title}
        </span>

        <div className="flex-1 flex items-center justify-center">
          <div className="text-slate-900 text-7xl md:text-8xl font-light leading-none">
            $<AnimatedNumber value={price} />
          </div>
        </div>

        <p className="text-slate-800/90 text-sm leading-relaxed pr-10">
          {title === "Light"
            ? "Enjoy access to a limited selection of articles and basic features, ideal for occasional visitors."
            : title === "Pro"
            ? "Get unlimited access to all content, exclusive resources, and priority support for the ultimate experience."
            : "Unlock additional content, features, and resources, perfect for users who want more access."}
        </p>

        <div className="mt-auto flex justify-end">
          <button
            className={`w-12 h-12 mt-6 ${color} hover:bg-slate-600 rounded-full flex items-center justify-center transition-all duration-300`}
          >
            <ArrowIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Hover view */}
      <div className="absolute inset-0 bg-[#202633] border border-[#f0ff8b] rounded-3xl pl-8 pr-6 pt-8 pb-6 flex flex-col opacity-0 transition-all duration-500 ease-out group-hover:opacity-100">
        <span className="inline-flex w-fit items-center rounded-full border border-lime-300 text-lime-400 px-4 py-2 text-xs font-medium mb-8">
          {title}
        </span>

        <ul className="space-y-4 text-white text-sm flex-1">
          {features.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-lg leading-none">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-[#ffffff] text-sm leading-relaxed">
          {title === "Light"
            ? "Get unlimited access to all content, exclusive resources, and priority support for the ultimate experience."
            : title === "Pro"
            ? "Unlock additional content, features, and resources, perfect for users who want more access."
            : "Get unlimited access to all content, exclusive resources, and priority support for the ultimate experience."}
        </p>

        <div className="mt-auto flex justify-end">
          <button className="w-12 h-12 rounded-full border border-lime-300 flex items-center justify-center transition-all duration-300">
            <ArrowIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

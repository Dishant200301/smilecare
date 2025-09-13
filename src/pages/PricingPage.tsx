import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ShinyText from "@/components/ShinyText";

// 🔹 Features data
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

// 🔹 Arrow Icon
const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
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

// 🔹 Main Pricing Section
export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Prices for monthly & annually
  const pricing = {
    light: isAnnual ? 10 : 12,
    pro: isAnnual ? 25 : 29,
    enterprise: isAnnual ? 35 : 39,
  };

  return (
    <section className="relative w-full bg-black text-white">
      <Helmet>
        <title>Pricing — TryzenIQ</title>
        <meta
          name="description"
          content="Simple, transparent pricing for AI automation. Choose the plan that suits your business."
        />
      </Helmet>

      <Navbar />

      <div className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24">
        {/* Heading */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center pt-[80px]">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-extralight bg-white bg-clip-text text-transparent mb-6 text-center"
            style={{ fontFamily: "Playfair Display" }}
          >
            Transparent{" "}
            <ShinyText
              text="Pricing"
              className="hero-text-gradient bg-clip-text text-transparent"
            />
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed font-playfair font-extralight">
            Straightforward and transparent pricing designed to deliver real
            value, offering flexible options that adapt seamlessly to businesses
            of every size.
          </p>

          {/* Toggle Switch */}
          <div className="relative flex items-center bg-[#1e1e2e] border border-[#8caac8] rounded-full mb-16 mt-16 w-[260px]">
            {/* Sliding Indicator */}
            <motion.div
              className="absolute top-0 bottom-0 w-1/2 rounded-full bg-[#8caac8]"
              initial={false}
              animate={{ x: isAnnual ? "100%" : "0%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />

            {/* Monthly Button */}
            <button
              className={`relative z-10 w-1/2 px-4 py-4 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual ? "text-black" : "text-white"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>

            {/* Annually Button */}
            <button
              className={`relative z-10 w-1/2 px-4 py-4 rounded-full text-sm font-medium transition-all duration-300 ${
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
            description="Enjoy access to a limited selection of articles and basic features, ideal for occasional visitors."
            background="#8caac8"
          />

          {/* Pro */}
          <Card
            title="Pro"
            price={pricing.pro}
            features={features.pro}
            description="Get unlimited access to all content, exclusive resources, and priority support for the ultimate experience."
            background="#8caac8"
          />

          {/* Enterprise */}
          <Card
            title="Enterprise"
            price={pricing.enterprise}
            features={features.basic}
            description="Unlock additional content, features, and resources, perfect for users who want more access."
            background="#8caac8"
          />
        </div>
      </div>

      <Footer />
      <ScrollToTopButton />
    </section>
  );
}

// 🔹 Card Component
function Card({
  title,
  price,
  features,
  description,
  background,
}: {
  title: string;
  price: number;
  features: string[];
  description: string;
  background: string;
}) {
  return (
    <div className="group relative md:col-span-2 lg:col-span-1 h-[360px]">
      {/* Default view */}
      <div
        className="absolute inset-0 border border-transparent rounded-3xl p-8 flex flex-col transition-all duration-500 ease-out group-hover:opacity-0"
        style={{ background }}
      >
        {/* Title pill */}
        <span className="inline-flex w-fit items-center rounded-full border border-black text-black px-4 py-2 text-xs font-medium mb-6">
          {title}
        </span>

        {/* Price */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-slate-900 text-7xl md:text-8xl font-light leading-none">
            $<AnimatedNumber value={price} />
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-800/90 text-sm leading-relaxed mt-4 pr-12 font-playfair font-extralight">
          {description}
        </p>

        {/* Arrow bottom-right */}
        <div className="absolute bottom-6 right-6">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center transition-all duration-300">
            <ArrowIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Hover view */}
      <motion.div
        className="absolute inset-0 bg-[#000000] border border-[#8caac8] rounded-3xl p-8 flex flex-col"
        initial={{ opacity: 0, y: 20, x: -10 }}
        whileHover={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Title pill */}
        <span className="inline-flex w-fit items-center rounded-full border border-[#8caac8] text-[#8caac8] px-4 py-2 text-xs font-medium mb-6">
          {title}
        </span>

        {/* Features */}
        <ul className="space-y-4 text-white text-sm flex-1">
          {features.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-lg leading-none">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Description */}
        <p className="text-white text-sm leading-relaxed mt-4 pr-12 font-playfair font-extralight">
          {description}
        </p>

        {/* Arrow bottom-right */}
        <div className="absolute bottom-6 right-6">
          <button className="w-12 h-12 border border-[#8caac8] rounded-full flex items-center justify-center transition-all duration-300">
            <ArrowIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useNavigate } from "react-router-dom";
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

// Arrow Icon
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

// Animated Number Component
function AnimatedNumber({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
}

// Pricing Section
export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricing = {
    light: isAnnual ? 10 : 12,
    pro: isAnnual ? 29 : 39,
    enterprise: isAnnual ? 30 : 35,
  };

  return (
    <section className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-12 md:py-20">
        {/* Heading */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <h1
            className="text-4xl md:text-5xl lg:text-5xl font-extralight mb-6
              text-center leading-[1.2]"
            style={{ fontFamily: "Playfair Display" }}
          >
            <span className="bg-white bg-clip-text text-transparent">
              Transparent{" "}
            </span>
            <ShinyText
              text="Pricing"
              className="hero-text-gradient bg-clip-text text-transparent inline-block align-baseline"
            />
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
            Straightforward and transparent pricing designed to deliver real
            value, offering flexible options that adapt seamlessly to businesses
            of every size.
          </p>

          {/* Toggle Switch */}
          <div className="relative flex items-center bg-[#1e1e2e] border border-[white] rounded-full mb-12 mt-12 w-[260px]">
            <motion.div
              className="absolute top-0 bottom-0 w-1/2 rounded-full bg-[white]"
              initial={false}
              animate={{ x: isAnnual ? "100%" : "0%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />

            <button
              className={`relative z-10 w-1/2 px-4 py-4 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual ? "text-black" : "text-white"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>

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
          <Card
            title="Light"
            price={pricing.light}
            features={features.light}
            description="Enjoy access to a limited selection of articles and basic features, ideal for occasional visitors."
            background="white"
          />

          <Card
            title="Pro"
            price={pricing.pro}
            features={features.pro}
            description="Get unlimited access to all content, exclusive resources, and priority support for the ultimate experience."
            background="white"
          />

          <Card
            title="Enterprise"
            price={pricing.enterprise}
            features={features.basic}
            description="Unlock additional content, features, and resources, perfect for users who want more access."
            background="white"
          />
        </div>
      </div>
    </section>
  );
}

// Card with smooth hover animation from Code 1
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
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="group relative md:col-span-2 lg:col-span-1 h-[380px] cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      // whileHover={{ y: -8 }}
      // transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0"
        style={{ background, filter: "blur(20px)", scale: 1.1 }}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      />

      {/* Main Card Container */}
      <motion.div
        className="absolute inset-0 rounded-3xl overflow-hidden"
        style={{
          background: isHovered ? "rgba(0, 0, 0, 0.95)" : background,
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Content */}
        <div className="relative p-8 h-full flex flex-col">
          {/* Title pill */}
          <motion.span
            className="inline-flex w-fit items-center rounded-full px-4 py-2 text-xs font-medium mb-6"
            style={{
              border: isHovered
                ? "1px solid rgba(255,255,255,0.2)"
                : "1px solid rgba(0,0,0,0.2)",
              color: isHovered ? "white" : "black",
              backgroundColor: isHovered
                ? "rgba(255,255,255,0.1)"
                : "rgba(255,255,255,0.2)",
            }}
          >
            {title}
          </motion.span>

          {/* Price or Features */}
          <div className="flex-1 flex items-center justify-center">
            <motion.div
              animate={{
                scale: isHovered ? 0 : 1,
                opacity: isHovered ? 0 : 1,
                rotateX: isHovered ? 90 : 0,
              }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="absolute"
              style={{ color: isHovered ? "white" : "rgba(0,0,0,0.9)" }}
            >
              <div className="text-6xl md:text-7xl font-light leading-none">
                $<AnimatedNumber value={price} />
              </div>
            </motion.div>

            {/* Features List */}
            <motion.ul
              className="space-y-3 text-white text-sm w-full"
              initial={{ scale: 0, opacity: 0, rotateX: -90 }}
              animate={{
                scale: isHovered ? 1 : 0,
                opacity: isHovered ? 1 : 0,
                rotateX: isHovered ? 0 : -90,
              }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              {features.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{
                    x: isHovered ? 0 : -20,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: isHovered ? index * 0.1 + 0.2 : 0,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  <span className="text-[white] text-lg leading-none mt-0.5">
                    ✓
                  </span>
                  <span className="leading-snug">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Description */}
          <motion.p
            className="text-sm leading-relaxed mt-4 pr-12 font-light"
            style={{
              color: isHovered
                ? "rgba(255,255,255,0.8)"
                : "rgba(0,0,0,0.7)",
              fontFamily: "Playfair Display, serif",
            }}
          >
            {description}
          </motion.p>

          {/* Arrow bottom-right */}
          <div className="absolute bottom-6 right-6">
            <motion.button
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: isHovered ? "transparent" : "black",
                border: isHovered ? "1px solid rgba(255,255,255,0.3)" : "none",
              }}
              whileHover={{ scale: 1.1, rotate: 45 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowIcon className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

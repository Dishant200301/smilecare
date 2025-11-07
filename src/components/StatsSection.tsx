import React from "react";
import {
  Brain,
  Globe,
  Code2,
  Palette,
  Database,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // Import Lottie component

// --- Service Interface ---
interface Service {
  title: string;
  description: string;
  bgColorClass: string;
  // Removed imageSrc and imageAlt
  lottieSrc: string; // Added Lottie source URL
  gridClasses?: string;
  link: string;
  bullets?: string[];
}

// --- Service Data ---
const services: Service[] = [
  {
    title: "SEO Optimization",
    description:
      "Enhance your online visibility with advanced SEO strategies that drive organic traffic.",
    bgColorClass: "bg-black",
    lottieSrc:
      "https://lottie.host/3a7c33ec-10fe-47d8-8bcd-dd5c3c12cf7e/zeT8oLJSbU.lottie",
    link: "/services/seo",
  },
  {
    title: "AI Automation",
    description:
      "Leverage intelligent automation to streamline workflows and boost productivity with cutting-edge AI tools.",
    bgColorClass: "bg-black",
    lottieSrc:
      "https://lottie.host/71a9e757-1008-4557-a6e7-1a713980eab4/TMGOmUplKI.lottie",
    gridClasses: "md:col-span-2",
    link: "/services/ai-automation",
  },
  {
    title: "Web Development",
    description:
      "Craft fast, responsive, and engaging websites tailored to your brand's vision.",
    bgColorClass: "bg-black",
    lottieSrc:
      "https://lottie.host/8c8ba641-1008-49b3-b9ef-4c66a01c7dc2/LWidHvr05h.lottie",
    gridClasses: "md:row-span-1",
    link: "/services/website-development",
  },
  {
    title: "Custom ERP Solutions",
    description:
      "Custom ERP solutions tailored to streamline your business operations with integrated modules for inventory management.",
    bgColorClass: "bg-black",
    lottieSrc:
      "https://lottie.host/93de780f-0c2d-4b33-bf22-b9a56c7f52db/NjmmHcBNUf.lottie",
    gridClasses: "md:col-span-2",
    link: "/services/custom-erp-system",
  },
  {
    title: "Graphics Design",
    description:
      "Bring ideas to life through creative, visually stunning designs that communicate your brand's identity effectively.",
    bgColorClass: "bg-black",
    lottieSrc:
      "https://lottie.host/3d31e69f-ad21-48cd-93cb-7bd3a757621c/nN7UqPfcFy.lottie",
    gridClasses: "md:col-span-2",
    link: "/services/graphics-design",
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="text-white pt-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Heading --- */}
        <div className="flex flex-col items-center gap-8 text-center mb-8">
          <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl lg:text-5xl font-HindMadurai font-medium leading-tight">
              Our{" "}
              <span className="gradient-text font-InstrumentSerif italic text-white">
                Services
              </span>
            </h2>
          </motion.div>
        </div>

        {/* --- Responsive Layout Switch --- */}
        <div>
          {/* 👇 Mobile + Tablet (Stacked Scroll Animation) */}
          <div className="block lg:hidden stacked-cards-container">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className={`stacked-card-item relative group px-8 pb-0 md:px-12 rounded-3xl border border-gray-800 hover:border-white/30 transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden cursor-pointer hover:scale-[1.02] hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-white/20 ${service.bgColorClass}`}
              >
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="flex-grow ">
                    {/* Ensure icon color is white for contrast */}
                    <h3 className="text-2xl font-semibold text-white mt-10">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-gray-400">{service.description}</p>
                    {/* 🔹 Show bullets only on desktop */}
                    {service.bullets && (
                      <ul className="mt-3 text-gray-400 block">
                        {service.bullets.map((bullet, idx) => (
                          <li key={idx} className="list-disc ml-5">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                {/* Replaced img with motion.div containing DotLottieReact */}
                <div className="relative bottom-0 left-0 w-[calc(100%+64px)] -ml-8 -mr-8 overflow-hidden rounded-xl p-5">
                  <motion.div
                    className="w-full h-[250px] rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110"
                    initial={{ scale: 1 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DotLottieReact
                      src={service.lottieSrc}
                      loop
                      autoplay
                      className="w-full h-full filter grayscale" // Apply grayscale filter
                    />
                  </motion.div>
                </div>
              </a>
            ))}
          </div>

          {/* 💻 Laptop + Desktop (Grid Layout with Animation & Bullets) */}
          <motion.div
            className="hidden lg:grid grid-cols-1 md:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1, // Stagger cards for a nicer entry
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {services.map((service, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.a
                  key={index}
                  href={service.link}
                  variants={{
                    hidden: { opacity: 0, x: isLeft ? -50 : 50, y: 30 },
                    visible: { opacity: 1, x: 0, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`group relative px-8 pb-0 rounded-3xl border border-gray-800 hover:border-white/30 transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden cursor-pointer scale-[1.02] hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-white/20 ${
                    service.bgColorClass
                  } ${service.gridClasses || ""}`}
                >
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-grow ">
                    {/* Ensure icon color is white for contrast */}
                    <h3 className="text-2xl font-semibold text-white mt-10">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-gray-400">{service.description}</p>
                    {/* 🔹 Show bullets only on desktop */}
                    {service.bullets && (
                      <ul className="mt-3 text-gray-400 block">
                        {service.bullets.map((bullet, idx) => (
                          <li key={idx} className="list-disc ml-5">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {/* Replaced img with motion.div containing DotLottieReact */}
                  <div className="relative bottom-0 left-0 w-[calc(100%+64px)] -ml-8 -mr-8 overflow-hidden rounded-xl p-5">
                    <motion.div
                      className="w-full h-[250px] rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110"
                      initial={{ scale: 1 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <DotLottieReact
                      src={service.lottieSrc}
                      loop
                      autoplay
                      className={`h-full object-contain filter grayscale transition-all duration-500 ease-out 
                        ${service.title === "SEO Optimization" ? "scale-110 md:scale-150 p-6" : ""}
                        ${service.title === "AI Automation" ? "scale-110 md:scale-150 p-6 -mt-8" : ""}
                        ${service.title === "Web Development" ? "scale-110 md:scale-150 -mt-4" : ""}
                        ${service.title === "Custom ERP Solutions" ? "scale-110 md:scale-150 p-8 " : ""}
                        ${service.title === "Graphics Design" ? "scale-110 md:scale-150 p-6 -mt-2" : ""}
                      `}
                    />
                    </motion.div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

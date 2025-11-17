import { motion } from "framer-motion";
import React from "react";

// Types
interface TestimonialType {
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

// Consolidate all 18 unique testimonials into one array
const allUniqueTestimonials: TestimonialType[] = [
  // --- Row 1: AI Automation ---
  {
    name: "@DataDrivenDev",
    title: "Automation Engineer @TechSphere",
    quote:
      "The AI automation solutions completely transformed our workflow — repetitive tasks are now handled flawlessly. We saved countless hours every week!",
    avatar: "https://picsum.photos/id/1011/512",
  },
  {
    name: "@SmartOpsLena",
    title: "Operations Head @NextLogic",
    quote:
      "Integrating their intelligent automation was seamless. Our process efficiency jumped by nearly 40%, and the accuracy is unmatched.",
    avatar: "https://picsum.photos/id/1021/512",
  },
  {
    name: "@AI_Michael",
    title: "Product Lead @CloudCircuit",
    quote:
      "Their automation framework is pure brilliance — from data handling to workflow execution, everything is powered by AI precision.",
    avatar: "https://picsum.photos/id/1043/512",
  },
  {
    name: "@TechieNora",
    title: "CTO @SmartDynamics",
    quote:
      "We’ve tried multiple automation tools, but this one’s intelligence layer stands out. It learns, adapts, and optimizes in real time.",
    avatar: "https://picsum.photos/id/1039/512",
  },
  {
    name: "@InnovateRaj",
    title: "Founder @VisionIQ",
    quote:
      "Our operations scaled effortlessly after implementing their AI workflows. It’s the smartest business move we made this year.",
    avatar: "https://picsum.photos/id/1005/512",
  },
  {
    name: "@CodeWithAmy",
    title: "Software Architect @BrightStack",
    quote:
      "Automation that actually feels intelligent — we’ve reduced manual dependency drastically and improved delivery speed across departments.",
    avatar: "https://picsum.photos/id/100/512",
  },

  // --- Row 2: SEO & Web Development ---
  {
    name: "@SEOProJake",
    title: "Digital Marketing Lead @RankUpMedia",
    quote:
      "Their SEO strategy gave our website the boost it needed — our organic traffic doubled within three months.",
    avatar: "https://picsum.photos/id/1062/512",
  },
  {
    name: "@CodeQueenEmma",
    title: "Full Stack Developer @WebNexus",
    quote:
      "The custom web solution delivered by this team was beyond expectations — fast, secure, and beautifully designed.",
    avatar: "https://picsum.photos/id/1004/512",
  },
  {
    name: "@AnalyticsAaron",
    title: "Marketing Strategist @DataPulse",
    quote:
      "They not only optimized our site but also set up detailed analytics tracking. We now make smarter SEO decisions every week.",
    avatar: "https://picsum.photos/id/1025/512",
  },
  {
    name: "@UXBella",
    title: "UI/UX Designer @PixelCrafters",
    quote:
      "Working with their dev team was effortless. The responsive design, speed, and SEO integration were all spot-on.",
    avatar: "https://picsum.photos/id/1070/512",
  },
  {
    name: "@GrowthMark",
    title: "Founder @StartupLabs",
    quote:
      "Our startup site was live in record time — sleek, fast, and optimized from day one. Couldn’t ask for a better development partner.",
    avatar: "https://picsum.photos/id/107/512",
  },
  {
    name: "@WebWizardKiran",
    title: "Frontend Developer @TechLoom",
    quote:
      "Every project we’ve built together has ranked and performed exceptionally. Their SEO and dev synergy is unmatched.",
    avatar: "https://picsum.photos/id/1027/512",
  },

  // --- Row 3: Graphics Design & ERP Systems ---
  {
    name: "@DesignByLia",
    title: "Creative Director @StudioEdge",
    quote:
      "Their design team nailed our rebranding! Fresh visuals, elegant UI, and consistent brand identity across platforms.",
    avatar: "https://picsum.photos/id/1069/512",
  },
  {
    name: "@VisualGuruTom",
    title: "Art Lead @CreateSpace",
    quote:
      "They bring ideas to life beautifully — every graphic element feels premium and purpose-driven.",
    avatar: "https://picsum.photos/id/1044/512",
  },
  {
    name: "@ERPExpertNina",
    title: "Systems Manager @DataLink",
    quote:
      "Their ERP system simplified our resource management drastically. Real-time tracking and smart insights make daily ops effortless.",
    avatar: "https://picsum.photos/id/1049/512",
  },
  {
    name: "@TechOpsLeo",
    title: "Operations Director @ProManage",
    quote:
      "Migrating to their custom ERP was smooth and well-supported. Our departments are finally in perfect sync.",
    avatar: "https://picsum.photos/id/1052/512",
  },
  {
    name: "@CreativeSana",
    title: "Freelance Designer",
    quote:
      "Loved working with their design team — collaborative, creative, and consistently on brand. My go-to for visual projects.",
    avatar: "https://picsum.photos/id/1015/512",
  },
  {
    name: "@EnterpriseArun",
    title: "CEO @InfyLogic",
    quote:
      "The ERP solution gave us end-to-end visibility across operations. Performance and reporting have both improved dramatically.",
    avatar: "https://picsum.photos/id/1023/512",
  },
];


// Testimonial Card (remains unchanged)
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
  // Divide the 18 unique testimonials into three distinct sets of 6
  const row1Testimonials = allUniqueTestimonials.slice(0, 6);
  const row2Testimonials = allUniqueTestimonials.slice(6, 12);

  // Duplicate each row's content for seamless animation looping
  const duplicatedRow1 = [...row1Testimonials, ...row1Testimonials];
  const duplicatedRow2 = [...row2Testimonials, ...row2Testimonials];

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative gap-[30px] font-sans">
      {/* Title */}
      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:mt-12">
            <div className="mb-2">
              <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-5xl font-HindMadurai font-medium leading-tight">
                Our{" "}
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-5xl gradient-text font-InstrumentSerif italic text-white">
                  Testimonials
                </span>
              </h2>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Rows Container */}
      {/* Increased height to accommodate three rows */}
      <motion.div
        className="w-full relative overflow-hidden flex flex-col gap-4" // Added flex-col and gap for spacing
        style={{ height: "auto" }} // Set height to auto or calculate based on card height + gap
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Row 1 (Right → Left - Slower) */}
        <section className="py-2 overflow-hidden">
          <ul className="flex w-fit items-center gap-6 animate-infinite-scroll-ltr">
            {duplicatedRow1.map((t, i) => (
              <li key={`row1-${i}`} className="flex-shrink-0">
                <TestimonialCard testimonial={t} />
              </li>
            ))}
          </ul>
        </section>

        {/* Row 2 (Left → Right - Medium) */}
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
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
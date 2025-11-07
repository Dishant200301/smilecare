import React from "react";
import LogoItem from "./LogoItem"; // Assuming LogoItem.tsx handles individual logo display
import { motion } from "framer-motion";

interface Logo {
  src: string;
  alt: string;
}

const allUniqueLogos: Logo[] = [
  // --- Existing Logos (12) ---
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1024px-Google_Sheets_logo_%282014-2020%29.svg.png",
    alt: "Google Sheets",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png",
    alt: "Google Calendar",
  },
  {
    src: "/image/Tensorflow.png",
    alt: "Tensorflow",
  },
  {
    src: "https://framerusercontent.com/images/oPgTqr50Dc4O1PDSqn5V1Hq8.png",
    alt: "GitHub",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
    alt: "Slack",
  },
  {
    src: "/image/Framer.png",
    alt: "Framer",
  },
  {
    src: "/image/openai3.png", // Local asset
    alt: "OpenAI",
  },
  {
    src: "/image/gmail.png", // Local asset
    alt: "Gmail",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    alt: "Figma",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    alt: "Notion",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/trello.svg",
    alt: "Trello",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
    alt: "Jira",
  },
  // --- New Logos (6) ---
  {
    src: "/image/Claude.png",
    alt: "Claude AI",
  },
  {
    src: "/image/Grok.png", 
    alt: "Grok",
  },
  {
    src: "/image/Copilot.png",
    alt: "Microsoft Copilot",
  },
  {
    src: "/image/Xai.png",
    alt: "xAI",
  },
  {
    src: "/image/gemini2.png", // Local asset
    alt: "Gemini",
  },
  {
    src: "/image/Google_ai_studio_logo.png",
    alt: "Google AI Studio",
  },
];

// Marquee component remains the same, it will duplicate the received logo array for infinite scroll
const Marquee: React.FC<{
  logos: Logo[];
  animationClass: string;
}> = ({ logos, animationClass }) => {
  // We duplicate the logos multiple times to ensure a smooth, continuous loop
  const duplicatedLogos = [...logos, ...logos, ...logos]; 

  return (
    <div
      className="relative w-full overflow-hidden py-2
                    [mask-image:linear-gradient(to_right,transparent_12%,#000_50%,#000_50%,transparent_88%)]"
    >
      <ul className={`flex w-max items-center gap-4 ${animationClass}`}>
        {duplicatedLogos.map((logo, index) => (
          <li key={`${logo.alt}-${index}`} className="flex-shrink-0">
            <LogoItem src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const IntegrationsSection: React.FC = () => {
  // Divide the 18 unique logos into three distinct sets of 6
  const row1Logos = allUniqueLogos.slice(0, 6);      // Logos 1-6
  const row2Logos = allUniqueLogos.slice(6, 12);     // Logos 7-12
  const row3Logos = allUniqueLogos.slice(12, 18);    // Logos 13-18

  return (
    <section className="text-white py-10 bg-black">
      <div className="flex flex-col items-center justify-center w-full px-4 text-white">
        <motion.div
          className="text-center mb-6 text-[#d5dbe6]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-5xl font-HindMadurai font-medium leading-tight">
            <span className="gradient-text">Seamless Tool</span>{" "}
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-5xl gradient-text font-InstrumentSerif italic text-white">
              Integrations
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="w-full flex flex-col gap-3 mt-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* First line: 6 unique logos, scrolling left slowly */}
          <Marquee
            logos={row1Logos}
            animationClass="animate-marquee-left-slow"
          />
          {/* Second line: 6 other unique logos, scrolling right at medium speed */}
          <Marquee
            logos={row2Logos}
            animationClass="animate-marquee-right-medium"
          />
          {/* Third line: the last 6 unique logos, scrolling left quickly */}
          <Marquee
            logos={row3Logos}
            animationClass="animate-marquee-left-fast"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
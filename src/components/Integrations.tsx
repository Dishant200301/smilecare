import React from "react";
import LogoItem from "./LogoItem";

interface Logo {
  src: string;
  alt: string;
}

const uniqueLogos: Logo[] = [
  
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1024px-Google_Sheets_logo_%282014-2020%29.svg.png",
    alt: "Google Sheets",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png",
    alt: "Google Calendar",
  },
  {
    src: "https://framerusercontent.com/images/xPf4BTNLBEnCwXWtNwW7QvFlGk.png",
    alt: "AWS",
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
    src: "../public/gemini2.png",
    alt: "Gemini",
  },
  {
    src: "../public/openai3.png",
    alt: "OpenAI",
  },
  {
    src: "../public/gmail.png",
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
];

const Marquee: React.FC<{
  logos: Logo[];
  animationClass: string;
}> = ({ logos, animationClass }) => {
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
  const row1Logos = uniqueLogos;
  const row2Logos = [...uniqueLogos.slice(5), ...uniqueLogos.slice(0, 5)];
  const row3Logos = [...uniqueLogos.slice(10), ...uniqueLogos.slice(0, 10)];

  return (
    <section className="text-white py-20 bg-black">
      <div className="flex flex-col items-center justify-center w-full px-4 text-white">
        <div className="text-center mb-12 text-[#d5dbe6]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-HindMadurai font-medium leading-tight">
            <span className="gradient-text">Seamless Tool</span>{" "}
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl gradient-text font-InstrumentSerif italic text-white">
              Integrations
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mt-4">
            Boost productivity effortlessly
          </p>
        </div>

        <div className="w-full flex flex-col gap-3 mt-2">
          <Marquee
            logos={row1Logos}
            animationClass="animate-marquee-left-slow"
          />
          <Marquee
            logos={row2Logos}
            animationClass="animate-marquee-right-medium"
          />
          <Marquee
            logos={row3Logos}
            animationClass="animate-marquee-left-fast"
          />
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
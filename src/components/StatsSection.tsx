import React from "react";
import {
  Brain,
  Globe,
  Code2,
  Palette,
  Database,
  ArrowRight,
} from "lucide-react";

// --- Service Interface ---
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColorClass: string;
  imageSrc: string;
  imageAlt: string;
  gridClasses?: string;
  link: string;
  bullets?: string[];
}

// --- Service Data ---
const services: Service[] = [
  {
    title: "SEO Optimization",
    description:
      "Enhance your online visibility with advanced SEO strategies that drive organic traffic and measurable results.",
    icon: <Globe className="w-10 h-10 text-black" />,
    bgColorClass: "bg-black",
    imageSrc: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=300",
    imageAlt: "SEO analytics dashboard",
    link: "/services/seo",
  },
  {
    title: "AI Automation",
    description:
      "Leverage intelligent automation to streamline workflows and boost productivity with cutting-edge AI tools.",
    icon: <Brain className="w-10 h-10 text-black" />,
    bgColorClass: "bg-black",
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    imageAlt: "AI Automation interface",
    gridClasses: "md:col-span-2",
    link: "/services/ai-automation",
    bullets: [
      "Workflow with machine learning",
      "Intelligent processing and analysis",
      "Automated decision-making system",
      "Custom AI model integration",
    ],
  },
  {
    title: "Website Development",
    description:
      "Craft fast, responsive, and engaging websites tailored to your brand's vision and user experience goals.",
    icon: <Code2 className="w-10 h-10 text-black" />,
    bgColorClass: "bg-black",
    imageSrc: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300",
    imageAlt: "Website design preview",
    gridClasses: "md:row-span-1",
    link: "/services/website-development",
  },
  {
    title: "Custom ERP Solutions",
    description:
      "Custom ERP solutions tailored to streamline your business operations with integrated modules for inventory management, financial tracking, human resources, and customer relationship management.",
    icon: <Database className="w-10 h-10 text-black" />,
    bgColorClass: "bg-black",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    imageAlt: "Custom ERP system interface",
    gridClasses: "md:col-span-3",
    link: "/services/custom-erp-system",
    bullets: [
      "Custom ERP solutions tailored to your business needs",
      "Automated repetitive tasks and reduce errors",
      "Real-time data analytics to drive informed decision-making",
    ],
  },
  {
    title: "Graphics Design",
    description:
      "Bring ideas to life through creative, visually stunning designs that communicate your brand's identity effectively.",
    icon: <Palette className="w-10 h-10 text-black" />,
    bgColorClass: "bg-black",
    imageSrc: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300",
    imageAlt: "Graphic design mockup",
    link: "/services/graphics-design",
    
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="text-white pt-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Heading --- */}
        <div className="flex flex-col items-center gap-8">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-HindMadurai font-medium leading-tight">
                Our{" "}
                <span className="gradient-text font-InstrumentSerif italic text-white">
                  Services
                </span>
              </h2>
              <span className="text-md sm:text-5xl md:text-2xl lg:text-2xl font-hindmadurai text-gray-400">
                Empowering your business with innovation.
              </span>
            </div>
          </div>
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
                <div className="flex-grow pb-8">
                  {service.icon}
                  <h3 className="text-2xl font-semibold text-white transition-all mt-4">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-400">{service.description}</p>
                  {service.bullets && (
                    <ul className="mt-3 text-gray-400">
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className="list-disc ml-5">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div
                  className={`relative bottom-0 left-0 w-[calc(100%+64px)] -ml-8 -mr-8 overflow-hidden rounded-xl ${
                    service.title === "Custom ERP Solutions"
                      ? "px-8 py-5"
                      : "p-5"
                  }`}
                >
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="w-full h-[250px] object-cover rounded-xl transform scale-[1.03] opacity-90 group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* 💻 Laptop + Desktop (Grid Layout) */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className={`group relative px-8 pb-0 rounded-3xl border border-gray-800 hover:border-white/30 transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden cursor-pointer hover:scale-[1.02] hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-white/20 ${service.bgColorClass} ${service.gridClasses || ""}`}
              >
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="flex-grow pb-8">
                  {service.icon}
                  <h3 className="text-2xl font-semibold text-white transition-all mt-4">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-400">{service.description}</p>
                  {service.bullets && (
                    <ul className="mt-3 text-gray-400">
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className="list-disc ml-5">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div
                  className={`relative bottom-0 left-0 w-[calc(100%+64px)] -ml-8 -mr-8 overflow-hidden rounded-xl ${
                    service.title === "Custom ERP Solutions"
                      ? "px-8 py-5"
                      : "p-5"
                  }`}
                >
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="w-full h-[250px] object-cover rounded-xl transform scale-[1.03] opacity-90 group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* --- Explore Button --- */}
        <div className="text-center mt-12">
          <a
            href="/services"
            className="group relative inline-flex items-center justify-between border border-gray-500 text-white font-semibold pl-6 pr-14 py-4 rounded-full overflow-hidden transition-all duration-200 ease-out"
          >
            <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white text-black z-10 transition-transform duration-700 ease-in-out group-hover:scale-[45]" />
            <span className="relative z-20 transition-colors duration-700 ease-in-out group-hover:text-black font-inter">
              Explore All Services
            </span>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
              <ArrowRight className="w-5 h-5 text-black duration-200 ease-out group-hover:text-black" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const PillIcon = () => (
    <img src="/image/icon/pill.png" alt="" className="w-12 h-12 mt-1" />
);
const StethoscopeIcon = () => (
    <img src="/image/icon/stethoscope.png" alt="" className="w-10 h-10 mt-2" />
);
const SirenIcon = () => (
    <img src="/image/icon/siren.png" alt="" className="w-16 h-12" />
);
const FileTextIcon = () => (
    <img src="/image/icon/file-text.png" alt="" className="w-12 h-10 mt-4" />
);
const SparklesIcon = () => (
    <img src="/image/icon/sparkles.png" alt="" className="w-16 h-14" />
);
const Grid3x3Icon = () => (
    <img src="/image/icon/Braces.png" alt="" className="w-16 h-14" />
);

const HealthySmilesSection = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 lg:px-16">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-[#333C4A] text-[32px] sm:text-[38px] lg:text-[40px] tracking-[-0.8px]">
                        Healthy Smiles
                    </h2>

                    <h2 className="font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end 
            text-[60px] sm:text-[72px] lg:text-[80px] leading-[1] tracking-[-2.4px] mt-2">
                        Everyday!
                    </h2>

                    <p className="font-roboto text-[#191919] text-[15px] sm:text-[16px] lg:text-[20px]
            max-w-[520px] mx-auto mt-6 leading-[26px] opacity-80">
                        Get your day started with a smile: check our services to see what we can help you with!
                    </p>
                </div>

                {/* SERVICES GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-16">

                    {/* MAP LOOP */}
                    {[
                        {
                            icon: PillIcon,
                            title: "Dental Implants",
                            desc: "Interactively actualize processes with convergence. Synergistically deliver performance methods.",
                            color: "#1D70B8",
                        },
                        {
                            icon: StethoscopeIcon,
                            title: "General Dentistry",
                            desc: "Energistically fabricate an expanded array of niche markets through robust dental end user products.",
                            color: "#191919"
                        },
                        {
                            icon: SirenIcon,
                            title: "Urgent Surgery",
                            desc: "Distinctive enable enabled sources and cost effective principle centered information about products.",
                            color: "#62EBE2"
                        },
                        {
                            icon: FileTextIcon,
                            title: "Prosthesis",
                            desc: "Globally myocardinate supply chains distinctive quality vectors through interoperable services.",
                            color: "#62EBE2"
                        },
                        {
                            icon: SparklesIcon,
                            title: "Whitening",
                            desc: "Holistically predominate testing procedures for reliable supply chains via cutting edge deliverables.",
                            color: "#1D70B8"
                        },
                        {
                            icon: Grid3x3Icon,
                            title: "Braces",
                            desc: "Objectively integrate emerging core competencies before communities than client-centric data.",
                            color: "#191919"
                        },
                    ].map((service, index) => (
                        <div key={index} className="text-center px-4 space-y-4">

                            {/* ICON SAME SIZE EVERYWHERE */}
                            <div className="flex justify-center">
                                <service.icon
                                    // @ts-ignore
                                    className="w-[75px] h-[75px]"
                                    style={{ color: service.color }}
                                />
                            </div>

                            {/* TITLE */}
                            <h3 className="font-playfair text-[22px] sm:text-[24px] lg:text-[25px] text-[#000] tracking-[-0.75px]">
                                {service.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="font-roboto text-[14px] sm:text-[15px] lg:text-[15px] text-[#000] leading-[22px] opacity-70 max-w-[260px] mx-auto">
                                {service.desc}
                            </p>
                        </div>
                    ))}

                </div>

                {/* BUTTON */}
                <div className="text-center">
                    <Button
                        className="
          bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end
          text-white font-roboto text-[16px]
          px-8 py-6 rounded-[4px]
          shadow-[1px_1px_3px_1px_rgba(34,34,34,0.2)]
        "
                    >
                        Full List Of Services
                        <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default HealthySmilesSection;

import { Facebook, Youtube, Instagram, Twitter } from "lucide-react";
import teamMember1 from "/image/team-member-1.png";
import teamMember2 from "/image/team-member-2.png";
import teamMember3 from "/image/team-member-3.png";
import teamMember4 from "/image/team-member-4.png";

const teamData = [
    {
        id: 1,
        name: "Dr. Johan Joe",
        role: "Lead Dentist",
        image: teamMember2,
    },
    {
        id: 2,
        name: "Dr. Mike Johnson",
        role: "Senior Dentist",
        image: teamMember1,
    },
    {
        id: 3,
        name: "Dr. Alison Banson",
        role: "Orthodontist",
        image: teamMember3,
    },
    {
        id: 4,
        name: "Dr. Christopher Case",
        role: "Periodontist",
        image: teamMember4, // Reusing image 1 as placeholder for 4th member
    },
];

const AboutTeam = () => {
    return (
        <section className="py-20 lg:py-24 bg-white mx-auto">
            <div className="w-[92%] md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-0">
                {/* HEADER */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-dental-pink font-semibold tracking-widest text-sm md:text-base uppercase">OUR TEAM</span>
                    </div>

                    <h2 className="font-playfair font-bold text-4xl lg:text-5xl sm:text-5xl lg:text-[56px] text-dental-dark mb-4">
                        Our <span className="text-dental-pink">Friendly</span> Dentists Team
                    </h2>


                </div>

                {/* TEAM GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamData.map((member) => (
                        <div key={member.id} className="group">
                            {/* Card Image Container */}
                            <div className="relative bg-[#e4eefa] rounded-[30px] overflow-hidden mb-6 aspect-[4/5] flex items-end justify-center shadow-sm">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
                                />

                                {/* Social Overlay - Bottom to Top Animation */}
                                <div className="
  absolute inset-x-0 bottom-0 pb-5
  flex justify-center gap-3
  translate-y-full opacity-0
  group-hover:translate-y-0 group-hover:opacity-100
  transition-all duration-500 ease-out
">
                                    {[
                                        { Icon: Facebook, link: "#" },
                                        { Icon: Youtube, link: "#" },
                                        { Icon: Instagram, link: "#" },
                                        { Icon: Twitter, link: "#" },
                                    ].map(({ Icon, link }, i) => (
                                        <a
                                            key={i}
                                            href={link}
                                            className="
        w-10 h-10
        rounded-lg
        bg-dental-dark/90
        backdrop-blur-md
        flex items-center justify-center
        text-white
        shadow-md
        hover:bg-dental-pink
        transition-all duration-300 ease-out
      "
                                            style={{
                                                transitionDelay: `${i * 60}ms`,
                                            }}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>

                            </div>

                            {/* Info */}
                            <div className="text-center">
                                <h3 className="font-playfair font-bold text-2xl text-dental-dark mb-1">
                                    {member.name}
                                </h3>
                                <p className="font-roboto text-dental-pink text-base font-medium">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;

import React from "react";
import { Phone, Video } from "lucide-react";

const leadershipTeam = [
  {
    name: "Tilak Viradiya",
    role: "CTO",
    imageUrl:
      "/team_member/tilak.png",
  },
  {
    name: "Keyur Moradiya",
    role: "CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    name: "Amit Lakhani",
    role: "CMO",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
  },
];

const developmentTeam = [
  {
    name: "Tirth Gabani",
    role: "Full Stack Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
  },
  {
    name: "Dishant Kasodariya",
    role: "MERN Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
  },
  {
    name: "Ket Vithani",
    role: "Node.js Backend Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
  },
  {
    name: "Senil Patel",
    role: "React Frontend Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
  },
];

const TeamSection = () => {
  const handleContactClick = () => {
    console.log("Navigate to contact");
  };

  const renderCard = (member: { name: string; role: string; imageUrl: string }, delay: number) => (
    <div
      className="group relative overflow-hidden rounded-3xl shadow-xl opacity-0 translate-y-10 animate-[fadeInUp_0.6s_ease-out_forwards]"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Team Image */}
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out rounded-3xl"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-3xl pointer-events-none"></div>

      {/* Name overlay with blur */}
      <div className="absolute bottom-3 left-3 right-3 bg-white/10 backdrop-blur-md rounded-3xl p-4 text-center border border-white/10 transition-all duration-500 group-hover:bg-white/20">
        <h3 className="text-lg font-medium">{member.name}</h3>
        <p className="text-sm text-gray-300">{member.role}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-black text-white py-20 sm:py-24 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl gradient-text font-medium leading-tight font-HindMadurai">
            Our team of{" "}
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic gradient-text">
              experts
            </span>{" "}
            are here to help
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400 px-4">
            Get support 24/7, with our award-winning support network of growth experts.
          </p>

          {/* Buttons */}
          <div className="hidden lg:block">
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <button
                onClick={handleContactClick}
                className="group relative flex items-center justify-between border border-gray-700 bg-black text-white font-normal pl-8 pr-8 py-3 rounded-full overflow-hidden transition-all duration-700 ease-in-out hover:border-gray-500 shadow-md hover:shadow-lg"
              >
                <Phone className="mr-2 w-5 h-5" /> Book a call
              </button>
              <button
                onClick={handleContactClick}
                className="group relative flex items-center justify-between border border-gray-700 bg-white text-black font-normal pl-8 pr-8 py-3 rounded-full overflow-hidden transition-all duration-700 ease-in-out hover:border-gray-500 shadow-md hover:shadow-lg"
              >
                <Video className="mr-2 w-5 h-5" /> Book a demo
              </button>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-medium text-center mb-6 font-HindMadurai gradient-text text-gray-200">
            Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {leadershipTeam.map((member, i) => renderCard(member, i * 0.1))}
          </div>
        </div>

        {/* Development Team */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-medium text-center font-HindMadurai gradient-text mb-6 text-gray-200">
             Team Members
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {developmentTeam.map((member, i) => renderCard(member, i * 0.1))}
          </div>
        </div>
      </div>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;

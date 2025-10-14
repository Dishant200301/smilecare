import React from "react";
import { Phone, Video } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const teamMembers = [
  {
    name: "Tilak Viradiya",
    role: "Growth Strategist",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
  },
  {
    name: "Keyur Moradiya",
    role: "Marketing Expert",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    name: "Amit Lakhani",
    role: "Customer Success Lead",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
  },
  {
    name: "Tirth Gabani",
    role: "Product Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
  },
  {
    name: "Dishant Kasodariya",
    role: "Frontend Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",

  }
];

const TeamSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-b from-black via-gray-950 to-black text-white py-20 sm:py-24 relative overflow-hidden">
      {/* Subtle background blur or noise */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl gradient-text font-medium leading-tight">
            Our team of{" "}
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic">
              experts{" "}
            </span>
            are here to help
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400 px-4">
            Get support 24/7, with our award-winning support network of growth
            experts.
          </p>
          {/* Buttons */}
          <div className="hidden lg:block">
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <div className="hidden lg:block">
              <button
                onClick={() => navigate("/contact")}
                className="group relative flex items-center justify-between border border-gray-700 bg-black text-white font-normal font-HindMadurai pl-8 pr-8 py-3 px-3 rounded-full overflow-hidden transition-all duration-700 ease-in-out hover:border-gray-500 shadow-md hover:shadow-lg"
              >
                <Phone className="mr-2 w-5 h-5" /> Book a call
                <span className="relative z-20 group-hover:text-white group-focus:text-white">
                </span>
              </button>
            </div>
            <button
                onClick={() => navigate("/contact")}
                className="group relative flex items-center justify-between border border-gray-700 bg-white text-black font-normal font-HindMadurai pl-8 pr-8 py-3 px-3 rounded-full overflow-hidden transition-all duration-700 ease-in-out hover:border-gray-500 shadow-md hover:shadow-lg"
              >
                <Video className="mr-2 w-5 h-5" /> Book a demo
                <span className="relative z-20 group-hover:text-white group-focus:text-white">
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 sm:gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              {/* Name card overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/10 transition-all duration-500 group-hover:bg-white/20">
                <h3 className="text-lg font-[500]">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

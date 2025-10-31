import React from "react";
import { motion } from "framer-motion";
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
      "/team_member/keyur_moradiya.png",
  },
  {
    name: "Amit Lakhani",
    role: "CMO",
    imageUrl:
      "/team_member/Amit_CMO.png",
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
      "/team_member/dishant.jpg",
  },
  {
    name: "Ket Vithani",
    role: "Python Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
  },
  {
    name: "Senil Patel",
    role: "React Frontend Developer",
    imageUrl:
      "/team_member/senil.jpg",
  },
];

const TeamSection = () => {
  const handleContactClick = () => {
    console.log("Navigate to contact");
  };

  const renderCard = (member: { name: string; role: string; imageUrl: string }, delay: number) => (
    <motion.div
      className="group relative overflow-hidden rounded-3xl shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true }}
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
    </motion.div>
  );

  return (
    <section className="bg-black text-white py-20 sm:py-24 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-HindMadurai font-medium leading-tight">
            Our team of{" "}
            <span className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl italic gradient-text">
              experts
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400 px-4">
            Get support 24/7, with our award-winning support network of growth experts.
          </p>

         
        </motion.div>

        {/* Leadership Team */}
        <div className="mb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {leadershipTeam.map((member, i) => renderCard(member, i * 0.1))}
          </div>
        </div>

        {/* Development Team */}
        <div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {developmentTeam.map((member, i) => renderCard(member, i * 0.1))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

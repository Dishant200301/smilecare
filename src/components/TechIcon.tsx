import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaBootstrap, 
  FaAws, 
  FaDocker 
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiTypescript, 
  SiPostgresql, 
  SiRedis, 
  SiKubernetes, 
  SiSocketdotio, 
  SiFlask, 
  SiOpenai, 
  SiFastapi, 
  SiLangchain 
} from 'react-icons/si';
import { TbBrain, TbBolt } from 'react-icons/tb';
import { IconType } from 'react-icons';

interface TechIconProps {
  iconName: string;
}

const iconMap: { [key: string]: { icon: IconType; color: string } } = {
  react: { icon: FaReact, color: '#61DAFB' },
  nodejs: { icon: FaNodeJs, color: '#339933' },
  express: { icon: SiExpress, color: '#FFFFFF' },
  mongodb: { icon: SiMongodb, color: '#47A248' },
  tailwindcss: { icon: SiTailwindcss, color: '#06B6D4' },
  python: { icon: FaPython, color: '#3776AB' },
  groq: { icon: TbBolt, color: '#F97316' },
  langchain: { icon: SiLangchain, color: '#1C3C3C' },
  llm: { icon: TbBrain, color: '#8B5CF6' },
  fastapi: { icon: SiFastapi, color: '#009688' },
  html: { icon: FaHtml5, color: '#E34F26' },
  css: { icon: FaCss3Alt, color: '#1572B6' },
  javascript: { icon: FaJs, color: '#F7DF1E' },
  typescript: { icon: SiTypescript, color: '#3178C6' },
  bootstrap: { icon: FaBootstrap, color: '#7952B3' },
  postgresql: { icon: SiPostgresql, color: '#4169E1' },
  redis: { icon: SiRedis, color: '#DC382D' },
  aws: { icon: FaAws, color: '#FF9900' },
  docker: { icon: FaDocker, color: '#2496ED' },
  kubernetes: { icon: SiKubernetes, color: '#326CE5' },
  'socket.io': { icon: SiSocketdotio, color: '#010101' },
  flask: { icon: SiFlask, color: '#FFFFFF' },
  openai: { icon: SiOpenai, color: '#412991' },
};

const TechIcon = ({ iconName }: TechIconProps) => {
  const techData = iconMap[iconName.toLowerCase()];
  const IconComponent = techData?.icon || FaReact;
  const iconColor = techData?.color || '#FFFFFF';
  
  // Get the display name from the iconName (capitalize first letter)
  const displayName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
  
  return (
    <div className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 text-sm hover:border-white/30 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300 cursor-default shadow-lg hover:shadow-xl">
      <IconComponent 
        className="text-lg group-hover:scale-110 transition-transform duration-300" 
        style={{ color: iconColor }}
      />
      <span className="text-white/90 font-HindMadurai font-medium group-hover:text-white transition-colors duration-300">{displayName}</span>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
    </div>
  );
};

export default TechIcon;
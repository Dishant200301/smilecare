import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ScheduleButtonProps {
  to?: string;
  label: string;
  onClick?: () => void;
}

const ScheduleButton: React.FC<ScheduleButtonProps> = ({ to, label, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="relative group px-8 py-4 bg-white text-black hover:text-black hover:bg-linear-gradient(90deg, #1CB5E0 0%, #000851 100%)    
                 rounded-full hover:scale-105 transition-all duration-500 origin-right 
                 flex items-center justify-center overflow-hidden"
    >
      <span className="relative z-10 font-semibold">{label}</span>
      <ArrowRight className="relative z-10 w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />

      {/* Fix overlay background */}
    </button>
  );
};

export default ScheduleButton;

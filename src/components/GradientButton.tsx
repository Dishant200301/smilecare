import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface GradientButtonProps {
  title: string;
  link: string;
}

const GradientButton = ({ title, link }: GradientButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(link)}
      className="border border-gray-500 hover:bg-background group relative flex items-center justify-between 
      text-white font-semibold pl-4 pr-11 py-2 rounded-full overflow-hidden 
      transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl"
    >
      <span
        className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center 
        w-7 h-7 rounded-full bg-white z-10 transition-transform duration-700 
        ease-in-out group-hover:scale-[50]"
      />

      <span className="relative z-20 transition-colors duration-700 group-hover:text-black">
        {title}
      </span>

      <span className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8">
        <ArrowRight className="w-5 h-5 ml-1 text-black transition-colors duration-700" />
      </span>
    </button>
  );
};

export default GradientButton;

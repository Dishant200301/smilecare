import React from "react";
import { useNavigate } from "react-router-dom";

interface DemoButtonProps {
  to?: string;
  label: string;
  onClick?: () => void;
}

const DemoButton: React.FC<DemoButtonProps> = ({ to, label, onClick }) => {
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
      className="relative inline-flex items-center justify-center px-8 py-3 
                 rounded-full bg-white border border-white/30
                 text-sm font-semibold tracking-wide cursor-pointer 
                 overflow-hidden group"
    >
      <span
        className="absolute inset-0 bg-[#b3da70] rounded-full 
                   origin-right scale-x-0 group-hover:scale-x-100 
                   transition-transform duration-500 ease-out"
      ></span>

      <span
        className="relative text-black group-hover:text-black  transition-colors duration-300"
        style={{ fontFamily: "Figtree", animationDelay: "0.2s" }}
      >
        {label}
      </span>
    </button>
  );
};

export default DemoButton;

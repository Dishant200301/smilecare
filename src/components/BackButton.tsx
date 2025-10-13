import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    // ✅ Auto-detect route and navigate accordingly
    if (location.pathname.startsWith("/blogs")) {
      navigate("/blogs");
    } else if (location.pathname.startsWith("/insurance")) {
      navigate("/insurance");
    } else {
      // fallback - go home or previous page
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`flex items-center gap-2 px-4 py-2 
        text-orange-600 font-medium rounded-full 
        hover:text-orange-700 hover:bg-orange-100 
        transition-all duration-200 hover:scale-105 active:scale-95
        ${className}`}
    >
      <ArrowLeft className="w-5 h-5" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;

import React from "react";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href?: string;
  label?: string;
};

const Button: React.FC<ButtonProps> = ({
  href = "/contact",
  label = "Get Started",
}) => {
  return (
    <div className="text-center mt-12 lg:text-left">
      <a
        href={href}
        className="group relative inline-flex items-center justify-between border border-gray-500 
                   text-white font-semibold pl-6 pr-14 py-4 rounded-full overflow-hidden 
                   transition-all duration-500 ease-in-out"
      >
        {/* Background expand on hover */}
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center 
                     w-9 h-9 rounded-full bg-[white] text-black z-10 
                     transition-transform duration-500 ease-in-out group-hover:scale-[45]"
        />
        {/* Button text */}
        <span className="relative z-20 transition-colors duration-500 ease-in-out group-hover:text-black">
          {label}
        </span>
        {/* Arrow icon */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
          <ArrowRight className="w-5 h-5 text-black duration-500 ease-in-out group-hover:text-black" />
        </span>
      </a>
    </div>
  );
};

export default Button;

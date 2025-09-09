import React from "react";

const OfficeMap: React.FC = () => {
  return (
    <div className="relative w-[1230px] h-[450px] rounded-2xl overflow-hidden shadow-lg group">
      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.674116019643!2d72.7694695745058!3d21.161085382143565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e04d9bb1c67%3A0x7fd528e7d64a96b0!2sHappy%20Hallmark%20Shoppers!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        className="border-0"
      ></iframe>

      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-white">
          <a className="text-2xl font-bold">Visit Our Office</a>
          <p className="text-sm text-gray-200">Come see our work in person</p>
        </div>
      </div>
    </div>
  );
};

export default OfficeMap;

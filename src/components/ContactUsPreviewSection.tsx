import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

// Dummy images for the slideshow
const images = [
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Business meeting
"https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
"https://plus.unsplash.com/premium_photo-1661758211006-d41106e4be4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
"https://plus.unsplash.com/premium_photo-1683133974170-762dc561d292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
];

const ContactUsPreviewSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000 milliseconds = 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    // Outer section container with dark background and padding
    <section className="bg-black py-10 px-6">
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center
                   bg-[#0d0d0d] rounded-3xl p-8 md:p-12 border border-slate-700/50
                   shadow-2xl shadow-purple-500/10"
      >
        {/* Left Half: Heading + Contact Us button */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="mb-6">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <h2 className="font-HindMadurai font-medium leading-tight text-white">
                Contact us to a free
              </h2>
            </div>
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-InstrumentSerif italic text-white">
              landing page for your business.
            </span>
          </div>
          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Let us help you kickstart your online presence with a powerful and
            effective landing page tailored to your needs.
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <a
            href="/contact"
              onClick={() => console.log("Contact Us button clicked")}
              className="group relative inline-flex items-center justify-between border border-gray-500
                         text-white font-semibold pl-6 pr-14 py-4 rounded-full overflow-hidden
                         transition-all duration-200 ease-out focus:outline-none"
            >
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center
                           w-9 h-9 rounded-full bg-white text-black z-10
                           transition-transform duration-700 ease-in-out group-hover:scale-[45]"
              />
              <span
                className="relative z-20 transition-colors duration-700 ease-in-out group-hover:text-black"
                style={{ fontFamily: "inter", animationDelay: "0.2s" }}
              >
                Contact Us
              </span>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
                <ArrowRight className="w-5 h-5 text-black duration-200 ease-out group-hover:text-black" />
              </span>
            </a>
          </div>
        </div>

        {/* Right Half: Image Slideshow */}
        <div
          className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg
                     border border-slate-700/50 flex-shrink-0"
        >
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Business slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover
                          transition-opacity duration-1000 ease-in-out
                          ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
              // The z-index below ensures the image renders above previous images,
              // but it's largely managed by opacity. No real need for z-index here.
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUsPreviewSection;
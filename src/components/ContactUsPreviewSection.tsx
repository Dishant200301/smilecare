import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import GradientButton from "./GradientButton";

// Dummy images for the slideshow
const images = [
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Business meeting
  "https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "https://plus.unsplash.com/premium_photo-1661758211006-d41106e4be4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3N8ZXN8MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "https://plus.unsplash.com/premium_photo-1683133974170-762dc561d292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
];

const ContactUsPreviewSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-12 md:py-24 px-6">
      <motion.div
        className="max-w-[1220px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center
                    rounded-3xl p-2 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Half: Heading + Contact Us button */}
        <motion.div
          className="flex flex-col justify-center text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-HindMadurai gradient-text font-medium leading-tight">
                Connect Now
              </h2>
            </div>
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl gradient-text font-InstrumentSerif italic text-white">
              website for your business.
            </span>
            <p className="hidden sm:block text-md text-gray-400 mt-2 leading-relaxed max-w-md">
              We are here to help you with your business website and web application development.
            </p>
          </motion.div>

          <motion.div
            className="w-full flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <GradientButton title="Contact Us" link="/contact" />

          </motion.div>
        </motion.div>

        {/* Right Half: Image Slideshow - Animates from Right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
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
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUsPreviewSection;
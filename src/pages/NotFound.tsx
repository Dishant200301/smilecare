// src/pages/NotFound.tsx
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const navItems = [{ name: "Return to Home", path: "/" }];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState("");

  const isActive = (name: string) => activeItem === name;

  const handleNavigation = (path: string, name: string) => {
    navigate(path);
    setActiveItem(name);
  };

  useEffect(() => {
    console.error("404 Error: Tried to access:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Oops! Page not found TryzenIQ AI Solutions." />
        <meta property="og:title" content="404 Not Found TryzenIQ" />
        <meta property="og:description" content="The page you are looking for does not exist." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      {/* Center Content */}
      <div className="flex flex-1 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          {/* Black & White Lottie Animation */}
          <div className="w-56 h-56 sm:w-64 sm:h-64 mx-auto mb-2">
            <DotLottieReact
              src="https://lottie.host/796d51b3-3fa0-4e42-af33-38571bd156de/7ATuVH5HYm.lottie"
              loop
              autoplay
              className="w-full h-full filter grayscale"
            />
          </div>

          

          <p className="text-lg font-HindMadurai text-gray-400 mb-6">
            Oops! Page not found
          </p>

          {/* Button */}
          <div className="flex items-center justify-center font-HindMadurai">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path, item.name)}
                className="relative px-6 py-2.5 bg-black border border-gray-500 hover:bg-background hover:text-white rounded-full font-medium transition-all duration-300 overflow-hidden"
              >
                {isActive(item.name) && (
                  <div className="absolute inset-0 rounded-full z-0" />
                )}

                <span
                  className={`relative z-10 ${
                    isActive(item.name)
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

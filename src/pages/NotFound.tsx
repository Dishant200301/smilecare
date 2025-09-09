// src/pages/NotFound.tsx
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import LightRaySection from "@/components/LightRaySection";

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
        <meta
          name="description"
          content="Oops! Page not found — TryzenIQ AI Solutions."
        />
        <meta property="og:title" content="404 Not Found — TryzenIQ" />
        <meta
          property="og:description"
          content="The page you are looking for does not exist."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      {/* <LightRaySection /> */}

      {/* Center Content */}
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-6">
            Oops! Page not found
          </p>

          {/* Gradient Button */}
          <div className="flex items-center justify-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path, item.name)}
                className="relative px-6 py-3 bg-white/10 rounded-full font-medium transition-all duration-300 overflow-hidden"
              >
                {isActive(item.name) && (
                  <div className="absolute inset-0  rounded-full z-0" />
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
        </div>
      </div>
    </div>
  );
};

export default NotFound;

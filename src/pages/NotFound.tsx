// src/pages/NotFound.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import LightRaySection from "@/components/LightRaySection";

const navItems = [
  { name: "Return to Home", path: "/" },
];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const current = navItems.find((item) => item.path === location.pathname);
    if (current) setActiveItem(current.name);
  }, [location.pathname]);

  const isActive = (name: string) => activeItem === name;

  const handleNavigation = (path: string, name: string) => {
    navigate(path);
    setActiveItem(name);
  };

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
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
      <LightRaySection />

      {/* Center Content */}
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-6">Oops! Page not found</p>

          {/* Gradient Button */}
          <div className="flex items-center justify-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path, item.name)}
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 group ${
                  isActive(item.name)
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white bg-white/5"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.name) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import LightRaySection from "@/components/LightRaySection";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="items-center justify-center bg-black">
      <Helmet>
              <title>404 Error: Page Not Found — TryzenIQ</title>
              <meta name="description" content="Discover AI-powered solutions for every industry: automation, analytics, security, and more. Transform your business with TryzenIQ." />
              <meta property="og:title" content="Solutions — TryzenIQ" />
              <meta property="og:description" content="AI solutions for automation, analytics, and business growth. Trusted by leading industries." />
              <meta property="og:type" content="website" />
            </Helmet>
      <Navbar/>
      <LightRaySection/>
      <div className="pt-[280px] text-center">

        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

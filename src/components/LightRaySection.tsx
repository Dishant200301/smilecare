"use client";

import React from "react";
import LightRays from "@/components/LightRays";

interface LightRaySectionProps {
  className?: string;
}

const LightRaySection: React.FC<LightRaySectionProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 w-full h-full ${className || ""}`}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="w-full h-full"
      />
    </div>
  );
};

export default LightRaySection;

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

// Example DemoButton component (replace if you already have one)
interface DemoButtonProps {
  label: string;
  to: string;
}

const DemoButton: React.FC<DemoButtonProps> = ({ label, to }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className="px-6 py-3 bg-[#ffffff] text-black uppercase font-serif rounded-full transition-colors duration-300"
    >
      {label}
    </button>
  );
};

const CTASection: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement | null>(null);

  return (
    // ✅ Correct JSX syntax — no stray {}
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ctaRef}
          className="relative overflow-hidden bg-card/80 border border-border/50 rounded-2xl p-12 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl"
        >
          {/* Spotlight overlay (optional, commented) */}
          {/* <div 
            className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
            style={{ zIndex: 1 }}
          ></div> */}

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your{" "}
              <span className="hero-text-gradient">Business</span>?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto transition-colors duration-300">
              Join thousands of businesses that have automated their operations
              and increased their revenue with our AI solutions.
            </p>
            <DemoButton label="Schedule Free Consultation" to="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

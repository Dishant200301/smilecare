import React, { useRef, useState, useEffect, useCallback } from "react";
import SendIcon from "./icons/SendIcon";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [fogHeight, setFogHeight] = useState<number>(0);

  // Use useCallback to memoize the calculation function for stability
  const calculateFogHeight = useCallback(() => {
    if (sectionRef.current && ctaRef.current) {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const ctaRect = ctaRef.current.getBoundingClientRect();

      // Calculate height from the bottom of the section up to the TOP of the CTA button.
      // Add a small positive offset to make the fog slightly creep behind the button for a better blend.
      const newHeight = sectionRect.bottom - ctaRect.top + 20;
      setFogHeight(newHeight);
    }
  }, []);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    // Initial calculation on mount
    calculateFogHeight();

    // Use ResizeObserver to recalculate on window/element resize for responsiveness
    const resizeObserver = new ResizeObserver(calculateFogHeight);
    resizeObserver.observe(sectionElement);

    // Cleanup observer on unmount
    return () => {
      resizeObserver.unobserve(sectionElement);
    };
  }, [calculateFogHeight]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Fog Wrapper - Height is now dynamic and controlled by state */}
      <div
        className="fogwrapper absolute bottom-0 left-0 right-0 z-0"
        style={{ height: `${fogHeight}px` }}
      >
        <div id="foglayer_01" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div id="foglayer_02" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div id="foglayer_03" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div id="foglayer_04" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div id="foglayer_05" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
      </div>

      {/* Content container */}
      <div className="relative w-full max-w-7xl mx-auto z-10">
        <div className="relative text-white rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden">
          <div className="relative z-20 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl gradient-text font-sans font-medium leading-tight pb-2">
              Transforming Ideas Into
            </h1>
            <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl gardient-text font-serif italic text-gray-300">
              Automated Intelligence
            </span>

            {/* CTA Button - Add ref to this container */}
            <div ref={ctaRef} className="flex justify-center mt-8 mb-12">
              <button onClick={() => navigate("/contact")}
                className="group relative flex items-center justify-between text-white bg-black font-semibold pl-8 pr-16 py-4 rounded-full overflow-hidden transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl border border-gray-500"
              >
                <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white z-10 transition-transform duration-700 ease-in-out group-hover:scale-[50]" />
                <span className="relative z-20 transition-colors duration-700 group-hover:text-black">
                  Send Message
                </span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10">
                  <SendIcon className="w-5 h-5 text-black transition-colors duration-700" />
                </span>
              </button>
            </div>
            {/* Video Section */}
            <div className="relative w-full max-w-4xl mx-auto z-30">
      <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-black">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&showinfo=0&rel=0"
          title="YouTube video player"
          className="w-full h-full"
          allowFullScreen
        />
      </div>
    </div>
          </div>
        </div>
      </div>

      <style>{`
        .gradient-text {
          background: linear-gradient(to right, #ffffff, #a0a0a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }

        .fogwrapper {
          pointer-events: none;
          filter: blur(3px) brightness(1.2) contrast(1.1);
          mask-image: linear-gradient(to top, rgba(0,0,0,1) 25%, transparent 100%);
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 25%, transparent 100%);
          transition: height 0.3s ease-out;
        }

        .fogwrapper::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(to top, #000 30%, transparent 100%);
        }

        #foglayer_01,
        #foglayer_02,
        #foglayer_03,
        #foglayer_04,
        #foglayer_05 {
          height: 100%;
          position: absolute;
          width: 200%;
          bottom: 0;
        }

        #foglayer_01 .image01,
        #foglayer_01 .image02,
        #foglayer_02 .image01,
        #foglayer_02 .image02,
        #foglayer_03 .image01,
        #foglayer_03 .image02,
        #foglayer_04 .image01,
        #foglayer_04 .image02,
        #foglayer_05 .image01,
        #foglayer_05 .image02 {
          float: left;
          height: 100%;
          width: 50%;
        }

        #foglayer_01 .image01,
        #foglayer_01 .image02 {
          background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png") center center/cover no-repeat;
          filter: brightness(1.5) saturate(0.5);
        }
        #foglayer_02 .image01,
        #foglayer_02 .image02,
        #foglayer_03 .image01,
        #foglayer_03 .image02,
        #foglayer_04 .image01,
        #foglayer_04 .image02 {
          background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog2.png") center center/cover no-repeat;
          filter: brightness(1.7) saturate(0.4);
        }
        #foglayer_05 .image01,
        #foglayer_05 .image02 {
          background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png") center center/cover no-repeat;
          filter: brightness(2.8) saturate(0.2);
        }

        @keyframes foglayer_opacity {
          0% { opacity: 0.3; }
          22% { opacity: 0.7; }
          40% { opacity: 0.5; }
          58% { opacity: 0.6; }
          80% { opacity: 0.4; }
          100% { opacity: 0.3; }
        }

        @keyframes foglayer_moveme {
          0% { left: 0; }
          100% { left: -100%; }
        }

        @keyframes foglayer_bob {
          0% { transform: translateY(0); }
          25% { transform: translateY(-15px); }
          50% { transform: translateY(5px); }
          75% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        #foglayer_01 {
          animation: foglayer_opacity 15s linear infinite, foglayer_moveme 30s linear infinite, foglayer_bob 12s ease-in-out infinite;
        }
        #foglayer_02 {
          animation: foglayer_opacity 21s linear infinite, foglayer_moveme 28s linear infinite, foglayer_bob 15s ease-in-out infinite;
        }
        #foglayer_03 {
          animation: foglayer_opacity 25s linear infinite, foglayer_moveme 32s linear infinite, foglayer_bob 10s ease-in-out infinite;
        }
        #foglayer_04 {
          animation: foglayer_opacity 18s linear infinite, foglayer_moveme 35s linear infinite, foglayer_bob 18s ease-in-out infinite;
        }
        #foglayer_05 {
          animation: foglayer_opacity 28s linear infinite, foglayer_moveme 26s linear infinite, foglayer_bob 14s ease-in-out infinite;
        }

        @media only screen and (max-width: 767px) {
          #foglayer_01 .image01,
          #foglayer_01 .image02,
          #foglayer_02 .image01,
          #foglayer_02 .image02,
          #foglayer_03 .image01,
          #foglayer_03 .image02,
          #foglayer_04 .image01,
          #foglayer_04 .image02,
          #foglayer_05 .image01,
          #foglayer_05 .image02 {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
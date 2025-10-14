import React from "react";
import { Send } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full mt-10 pt-24 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Fog Wrapper - Behind everything */}
      <div className="fogwrapper absolute inset-0 z-0">
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
      </div>

      {/* Content container */}
      <div className="relative w-full max-w-8xl mx-auto z-10">
        <div className="relative text-white rounded-3xl p-8 py-28 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-2xl shadow-gray-900/50">
          <div className="relative z-20 max-w-4xl mx-auto text-center">
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              <h1
                className="text-3xl sm:text-4xl md:text-6xl gradient-text lg:text-6xl font-HindMadurai  font-medium leading-tight"
                >
                Transforming Ideas{" "}
                Into
              </h1>

              <span className="text-md sm:text-5xl md:text-3xl lg:text-5xl font-InstrumentSerif italic text-white">
                Automated Intelligence
              </span>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-8 mb-12">
              <button className="group relative flex items-center justify-between text-white bg-black font-semibold pl-8 pr-16 py-4 rounded-full overflow-hidden transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl border border-gray-500">
                
                <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white z-10 transition-transform duration-700 ease-in-out group-hover:scale-[50]" />
                <span className="relative z-20 transition-colors duration-700 group-hover:text-black">
                  Send Message
                </span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10">
                  <Send className="w-5 h-5 text-black transition-colors duration-700" />
                </span>
              </button>
            </div>

            {/* Video */}
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
        /* ---------- Fog Wrapper ---------- */
        .fogwrapper {
          height: 100%;
          position: absolute;
          top: 0;
          width: 100%;
          filter: blur(2px) brightness(1.4) contrast(1.1);
          pointer-events: none;
        }

        /* ---------- Fog Layers ---------- */
        #foglayer_01,
        #foglayer_02,
        #foglayer_03 {
          height: 100%;
          position: absolute;
          width: 200%;
        }

        #foglayer_01 .image01,
        #foglayer_01 .image02,
        #foglayer_02 .image01,
        #foglayer_02 .image02,
        #foglayer_03 .image01,
        #foglayer_03 .image02 {
          float: left;
          height: 100%;
          width: 50%;
          background-blend-mode: lighten;
          opacity: 0.9;
        }

        /* ---------- Whiter Fog Textures ---------- */
        #foglayer_01 .image01,
        #foglayer_01 .image02 {
          background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png")
            center center/cover no-repeat;
          filter: brightness(1.5) saturate(0.5);
        }
        #foglayer_02 .image01,
        #foglayer_02 .image02,
        #foglayer_03 .image01,
        #foglayer_03 .image02 {
          background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog2.png")
            center center/cover no-repeat;
          filter: brightness(1.7) saturate(0.4);
        }

        /* ---------- Keyframe Layer 1 ---------- */
        @keyframes foglayer_01_opacity {
          0% {
            opacity: 0.3;
          }
          22% {
            opacity: 0.7;
          }
          40% {
            opacity: 0.5;
          }
          58% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.4;
          }
          100% {
            opacity: 0.3;
          }
        }

        /* ---------- Keyframe Layer 2 ---------- */
        @keyframes foglayer_02_opacity {
          0% {
            opacity: 0.6;
          }
          25% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.3;
          }
          80% {
            opacity: 0.5;
          }
          100% {
            opacity: 0.6;
          }
        }

        /* ---------- Keyframe Layer 3 ---------- */
        @keyframes foglayer_03_opacity {
          0% {
            opacity: 0.9;
          }
          27% {
            opacity: 0.5;
          }
          52% {
            opacity: 0.8;
          }
          68% {
            opacity: 0.6;
          }
          100% {
            opacity: 0.9;
          }
        }

        /* ---------- Moving Fog ---------- */
        @keyframes foglayer_moveme {
          0% {
            left: 0;
          }
          100% {
            left: -100%;
          }
        }

        /* ---------- Animation Bindings ---------- */
        #foglayer_01 {
          animation: foglayer_01_opacity 10s linear infinite,
            foglayer_moveme 15s linear infinite;
        }
        #foglayer_02,
        #foglayer_03 {
          animation: foglayer_02_opacity 21s linear infinite,
            foglayer_moveme 13s linear infinite;
        }

        /* ---------- Responsive ---------- */
        @media only screen and (max-width: 767px) {
          #foglayer_01 .image01,
          #foglayer_01 .image02,
          #foglayer_02 .image01,
          #foglayer_02 .image02,
          #foglayer_03 .image01,
          #foglayer_03 .image02 {
            width: 100%;
          }
        }

       
      `}</style>
    </section>
  );
};

export default HeroSection;

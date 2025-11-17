import React, { useRef, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SendIcon from "./icons/SendIcon";
import { motion, useScroll, useTransform } from "framer-motion"; // Import useScroll and useTransform

const HeroSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [fogHeight, setFogHeight] = useState<number>(0);
    const navigate = useNavigate();

  // Framer Motion: Get scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Trigger when section starts entering, ends leaving
  });

  const yFog1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]); // Closest, moves most
  const yFog2 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const yFog3 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const yFog4 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const yFog5 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const yFog6 = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const yFog7 = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]); // Furthest, moves least (or not at all)

  const calculateFogHeight = useCallback(() => {
    if (sectionRef.current && titleRef.current) {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const titleRect = titleRef.current.getBoundingClientRect();

      const newHeight = sectionRect.bottom - titleRect.top + 20; // This assumes titleRef.top is relative to viewport.
      const viewportToSectionBottom = window.innerHeight - sectionRect.bottom;
      const viewportToTitleTop = window.innerHeight - titleRect.top;
      const heightFromSectionBottomToTitleTop = viewportToTitleTop - viewportToSectionBottom + 20;

      setFogHeight(Math.max(0, heightFromSectionBottomToTitleTop));
    }
  }, []);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    calculateFogHeight();

    const resizeObserver = new ResizeObserver(calculateFogHeight);
    resizeObserver.observe(sectionElement);
    // Observe the title too, as its position can change due to responsive layout shifts
    if (titleRef.current) {
      resizeObserver.observe(titleRef.current);
    }


    return () => {
      resizeObserver.unobserve(sectionElement);
      if (titleRef.current) {
        resizeObserver.unobserve(titleRef.current);
      }
    };
  }, [calculateFogHeight]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }} // Initial fade-in transition
      viewport={{ once: true }}
      className="relative" // Ensure this div acts as a positioning context for the absolute section
    >
      <section
        ref={sectionRef}
        className="relative w-full min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
      >
        {/* Fog Wrapper - Height is now dynamic and controlled by state */}
        <div
          className="fogwrapper absolute bottom-0 left-0 right-0 z-0"
          style={{ height: `${fogHeight}px` }}
        >
          {/* Fog layers for animation - now motion.div with parallax */}
          {/* Framer Motion will handle the 'y' transform, making it smooth */}
          <motion.div id="foglayer_01" className="fog" style={{ y: yFog1 }}>
            <div className="image01"></div>
            <div className="image02"></div>
          </motion.div>
          <motion.div id="foglayer_02" className="fog" style={{ y: yFog2 }}>
            <div className="image01"></div>
            <div className="image02"></div>
          </motion.div>
          <motion.div id="foglayer_03" className="fog" style={{ y: yFog3 }}>
            <div className="image01"></div>
            <div className="image02"></div>
          </motion.div>
          <motion.div id="foglayer_04" className="fog" style={{ y: yFog4 }}>
            <div className="image01"></div>
            <div className="image02"></div>
          </motion.div>
          <motion.div id="foglayer_05" className="fog" style={{ y: yFog5 }}>
            <div className="image01"></div>
            <div className="image02"></div>
          </motion.div>
          <motion.div id="foglayer_06" className="fog" style={{ y: yFog6 }}>
            <div className="image01"></div>
            <div className="image02"></div>
          </motion.div>
          <motion.div id="foglayer_07" className="fog" style={{ y: yFog7 }}>
            <div className="image01"></div>
            <div className="image02"></div>
          </motion.div>
        </div>

        {/* Content container */}
        <div className="relative w-full max-w-7xl mx-auto z-10">
          <div className="relative text-white rounded-3xl p-4 sm:p-12 md:p-16 lg:p-20 overflow-hidden">
            <div className="relative z-20 max-w-4xl mx-auto text-center">
              <motion.h1
                ref={titleRef}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.0,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true }}
                className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl gradient-text pb-1 font-sans font-medium leading-tight"
              >
                Transforming Ideas Into
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.0,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true }}
                className="block mt-2 text-2xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl font-serif italic text-gray-300"
              >
                Automated Intelligence
              </motion.span>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true }}
                className="flex justify-center mt-8 mb-10"
              >
                <button
                  onClick={() => navigate("/about")}
                  className="group relative flex items-center justify-between text-white bg-black font-semibold pl-4 pr-14 py-3 rounded-full overflow-hidden transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl border border-gray-500"
                >
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9  rounded-full bg-white z-10 transition-transform duration-700 ease-in-out group-hover:scale-[50]" />
                  <span className="relative z-20 transition-colors duration-700 group-hover:text-black">
                    Learn More
                  </span>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9">
                    <SendIcon className="w-5 h-5 text-black transition-colors duration-700" />
                  </span>
                  
                </button>
              </motion.div>

              {/* Video Section */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 1.3,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true }}
                className="relative w-full max-w-4xl mx-auto z-30"
              >
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-black">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&showinfo=0&rel=0"
                    title="YouTube video player"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <style>{`
          /* Add this for global smooth scrolling behavior */
          html {
            scroll-behavior: smooth;
          }

          .gradient-text {
            background: linear-gradient(to right, #ffffff, #a0a0a0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }

          .fogwrapper {
            pointer-events: none;
            mask-image: linear-gradient(to top, rgba(0,0,0,1) 25%, transparent 100%);
            -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 25%, transparent 100%);
            transition: height 0.3s ease-out; /* Smooth transition for height changes */
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
          #foglayer_05,
          #foglayer_06,
          #foglayer_07 {
            height: 100%;
            position: absolute;
            width: 200%; /* Keep this for the horizontal animation */
            bottom: 0;
            /* Framer Motion's 'y' property on motion.div will override any 'transform: translateY'
               from traditional CSS animations, so ensure 'bottom: 0' and 'height: 100%' position
               it correctly *before* the parallax takes over. */
            /* Add pointer-events: none; to fog layers too, if needed, to prevent interference with content */
            pointer-events: none;
          }

          #foglayer_01 .image01, #foglayer_01 .image02,
          #foglayer_02 .image01, #foglayer_02 .image02,
          #foglayer_03 .image01, #foglayer_03 .image02,
          #foglayer_04 .image01, #foglayer_04 .image02,
          #foglayer_05 .image01, #foglayer_05 .image02,
          #foglayer_06 .image01, #foglayer_06 .image02,
          #foglayer_07 .image01, #foglayer_07 .image02 {
            float: left;
            height: 100%;
            width: 50%; /* Each image takes half the 200% width, so the full fog layer covers the section */
          }

          #foglayer_01 .image01, #foglayer_01 .image02 {
            background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png") center center/cover no-repeat;
            filter: brightness(1.5) saturate(0.5);
          }
          #foglayer_02 .image01, #foglayer_02 .image02,
          #foglayer_03 .image01, #foglayer_03 .image02,
          #foglayer_04 .image01, #foglayer_04 .image02 {
            background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog2.png") center center/cover no-repeat;
            filter: brightness(1.7) saturate(0.4);
          }
          #foglayer_05 .image01, #foglayer_05 .image02 {
            background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png") center center/cover no-repeat;
            filter: brightness(2.8) saturate(0.2);
          }
          #foglayer_06 .image01, #foglayer_06 .image02 {
            background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog2.png") center center/cover no-repeat;
            filter: brightness(1.9) saturate(0.3);
          }
          #foglayer_07 .image01, #foglayer_07 .image02 {
            background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png") center center/cover no-repeat;
            filter: brightness(2.5) saturate(0.4);
          }

          /* Keep existing fog animations for horizontal movement and opacity */
          /* Note: 'foglayer_bob' uses transform: translateY, which will conflict
             with Framer Motion's 'y' transform. You should remove 'foglayer_bob'
             from the animation list if you want Framer Motion to fully control the Y position.
             If you want the subtle vertical bobbing *on top* of the parallax, you might
             need to apply it to an inner div or use Framer Motion's keyframes.
             For now, removing it to avoid conflict. */
          @keyframes foglayer_opacity { 0% { opacity: 0.3; } 22% { opacity: 0.7; } 40% { opacity: 0.5; } 58% { opacity: 0.6; } 80% { opacity: 0.4; } 100% { opacity: 0.3; } }
          @keyframes foglayer_moveme { 0% { left: 0; } 100% { left: -100%; } }
          // @keyframes foglayer_bob { 0% { transform: translateY(0); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0); } }

          #foglayer_01 { animation: foglayer_opacity 15s linear infinite, foglayer_moveme 55s linear infinite; } // Removed foglayer_bob
          #foglayer_02 { animation: foglayer_opacity 21s linear infinite, foglayer_moveme 60s linear infinite; } // Removed foglayer_bob
          #foglayer_03 { animation: foglayer_opacity 25s linear infinite, foglayer_moveme 40s linear infinite; } // Removed foglayer_bob
          #foglayer_04 { animation: foglayer_opacity 18s linear infinite, foglayer_moveme 30s linear infinite; } // Removed foglayer_bob
          #foglayer_05 { animation: foglayer_opacity 28s linear infinite, foglayer_moveme 75s linear infinite; } // Removed foglayer_bob
          #foglayer_06 { animation: foglayer_opacity 22s linear infinite, foglayer_moveme 35s linear infinite; } // Removed foglayer_bob
          #foglayer_07 { animation: foglayer_opacity 19s linear infinite, foglayer_moveme 68s linear infinite; } // Removed foglayer_bob

          @media only screen and (max-width: 767px) {
            #foglayer_01 .image01, #foglayer_01 .image02,
            #foglayer_02 .image01, #foglayer_02 .image02,
            #foglayer_03 .image01, #foglayer_03 .image02,
            #foglayer_04 .image01, #foglayer_04 .image02,
            #foglayer_05 .image01, #foglayer_05 .image02,
            #foglayer_06 .image01, #foglayer_06 .image02,
            #foglayer_07 .image01, #foglayer_07 .image02 {
              width: 100%; /* Ensures images stack or behave well on small screens */
            }
          }
        `}</style>
      </section>
    </motion.div>
  );
};

export default HeroSection;
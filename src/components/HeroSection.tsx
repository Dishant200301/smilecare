import React, { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [fogDensity, setFogDensity] = useState<number>(11);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    while (canvas.firstChild) {
      canvas.removeChild(canvas.firstChild);
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    class Fog {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      width: number;
      height: number;
      me: HTMLDivElement;
      direction: number;
      velocity: number;
      opacity: number;
      baseOpacity: number;
      mouseInfluence: number;
      rotationAngle: number;
      scaleValue: number;

      constructor(
        x: number,
        y: number,
        size: { w: number; h: number },
        direction: number,
        velocity: number,
        opacity: number
      ) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.width = size.w;
        this.height = size.h;
        this.me = document.createElement("div");
        this.direction = direction;
        this.velocity = velocity;
        this.opacity = opacity;
        this.baseOpacity = opacity;
        this.mouseInfluence = Math.random() * 0.3 + 0.1;
        this.rotationAngle = 0;
        this.scaleValue = 1;
      }

      create() {
        this.me.style.width = `${this.width}px`;
        this.me.style.height = `${this.height}px`;
        // Enhanced dark fog gradient with deeper blacks and higher opacity for cinematic effect
        this.me.style.background =
          "radial-gradient(circle, rgba(5,5,10,0.98) 0%, rgba(15,15,25,0.85) 30%, rgba(25,25,35,0.6) 50%, rgba(35,35,45,0.3) 70%, transparent 100%)";
        this.me.style.position = "absolute";
        this.me.style.opacity = `${this.opacity}`;
        this.me.style.filter = "blur(150px)";
        this.me.style.borderRadius = "50%";
        this.me.style.transition = "opacity 0.3s ease-out";
        this.me.style.mixBlendMode = "multiply";
        if (canvas) {
          canvas.appendChild(this.me);
        }
      }

      animation() {
        const fogCenterX = this.x + this.width / 2;
        const fogCenterY = this.y + this.height / 2;
        const dx = mouseX - fogCenterX;
        const dy = mouseY - fogCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 500;

        const mouseOffsetX = (dx / maxDistance) * 50 * this.mouseInfluence;
        const mouseOffsetY = (dy / maxDistance) * 50 * this.mouseInfluence;

        if (distance < maxDistance) {
          const opacityMultiplier = distance / maxDistance;
          this.opacity = this.baseOpacity * (0.5 + opacityMultiplier * 0.5);
        } else {
          this.opacity = this.baseOpacity;
        }

        const angle = Math.atan2(dy, dx);
        this.rotationAngle += (angle - this.rotationAngle) * 0.05;

        const targetScale =
          distance < maxDistance ? 1 + (1 - distance / maxDistance) * 0.15 : 1;
        this.scaleValue += (targetScale - this.scaleValue) * 0.05;

        if (this.direction === 0) {
          this.baseX -= this.velocity;
          if (canvas && this.baseX + this.width < 0)
            this.baseX = canvas.clientWidth;
        } else {
          this.baseX += this.velocity;
          if (canvas && this.baseX > canvas.clientWidth)
            this.baseX = -this.width;
        }

        this.x = this.baseX + mouseOffsetX;
        this.y = this.baseY + mouseOffsetY;

        this.me.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${
          this.rotationAngle * 10
        }deg) scale(${this.scaleValue})`;
        this.me.style.opacity = `${this.opacity}`;
      }
    }

    const fogs: Fog[] = [];

    const createFogs = () => {
      fogs.forEach((fog) => fog.me.remove());
      fogs.length = 0;
      if (!canvas) return;

      const canvasWidth = canvas.clientWidth;
      const canvasHeight = canvas.clientHeight;

      // Enhanced fog configurations with more particles concentrated in bottom area
      const fogConfigs = [
        { x: 0.15, y: 0.65, w: 500, h: 500, dir: 0, vel: 0.25, op: 0.9 },
        { x: 0.85, y: 0.7, w: 400, h: 400, dir: 1, vel: 0.3, op: 0.85 },
        { x: 0.3, y: 0.75, w: 600, h: 600, dir: 0, vel: 0.2, op: 0.95 },
        { x: 0.7, y: 0.8, w: 450, h: 450, dir: 1, vel: 0.28, op: 0.9 },
        { x: 0.5, y: 0.85, w: 700, h: 700, dir: 0, vel: 0.18, op: 1.0 },
        { x: 0.9, y: 0.75, w: 350, h: 350, dir: 1, vel: 0.35, op: 0.8 },
        { x: 0.1, y: 0.8, w: 550, h: 550, dir: 0, vel: 0.22, op: 0.88 },
        { x: 0.6, y: 0.9, w: 400, h: 400, dir: 1, vel: 0.32, op: 0.85 },
      ];

      const numFogs = Math.min(fogDensity, fogConfigs.length);
      for (let i = 0; i < numFogs; i++) {
        const config = fogConfigs[i];
        fogs.push(
          new Fog(
            canvasWidth * config.x,
            canvasHeight * config.y,
            { w: config.w, h: config.h },
            config.dir,
            config.vel,
            config.op
          )
        );
      }
      fogs.forEach((fog) => fog.create());
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas?.getBoundingClientRect();
      if (rect) {
        targetMouseX = e.clientX - rect.left;
        targetMouseY = e.clientY - rect.top;
      }
    };

    const updateMousePosition = () => {
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;
    };

    let animationFrameId: number;
    const animate = () => {
      updateMousePosition();
      fogs.forEach((fog) => fog.animation());
      animationFrameId = requestAnimationFrame(animate);
    };

    createFogs();
    animate();

    const handleResize = () => createFogs();

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      fogs.forEach((fog) => fog.me.remove());
    };
  }, [fogDensity]);

  return (
    <section className="relative w-full bg-background pt-24 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Content container - Higher z-index so fog stays behind */}
      <div className="relative w-full max-w-8xl mx-auto z-10">
        <div className="relative bg-white/95 backdrop-blur-sm text-black rounded-3xl p-8 py-28 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-2xl shadow-gray-900/50">
          <div className="relative z-20 max-w-4xl mx-auto text-center">
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            <h1
  className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-HindMadurai  font-medium leading-tight"
  style={{
    background:
      "radial-gradient(circle at center, #000000 50%, #4a4a4a 60%, #7f8fa6 100%)",
    WebkitBackgroundClip: "text",
    color: "transparent ",
  }}
>
Transforming Ideas  <span style={{ color: '#000000' }}>Into</span>
</h1>

              <span className="text-md sm:text-5xl md:text-3xl lg:text-5xl font-InstrumentSerif italic text-black">
                Automated Intelligence
              </span>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-8 mb-12">
              <button
                type="button"
                className="group relative flex items-center justify-between text-white bg-background font-semibold pl-8 pr-16 py-4 rounded-full overflow-hidden transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl"
              >
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
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>

          {/* CSS Fog Animation Layers - Extra dark black fog */}
          <div className="absolute inset-0 w-full mt-[350px] h-[100%] pointer-events-none overflow-hidden z-[1]">
            {/* Fog Layer 1 - Very dark fog */}
            <div
              className="absolute hfull w-[200%] animate-fog-layer-1"
              style={{ mixBlendMode: "darken" }}
            >
              <div
                className="float-left h-full w-1/2 bg-cover bg-center bg-no-repeat opacity-90"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png')",
                  filter:
                    "invert(0.2) brightness(0.4) contrast(1.5) grayscale(0.8)",
                }}
              />
              <div
                className="float-left h-full w-1/2 bg-cover bg-center bg-no-repeat opacity-90"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png')",
                  filter:
                    "invert(0.2) brightness(0.4) contrast(1.5) grayscale(0.8)",
                }}
              />
            </div>

            {/* Fog Layer 2 - Extra dark fog */}
            <div
              className="absolute h-[ w-[200%] animate-fog-layer-2"
              style={{ mixBlendMode: "darken" }}
            >
              <div
                className="float-left h-full w-1/2 bg-cover bg-center bg-no-repeat opacity-95"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog2.png')",
                  filter:
                    "invert(0.15) brightness(0.3) contrast(1.8) grayscale(0.9)",
                }}
              />
              <div
                className="float-left h-full w-1/2 bg-cover bg-center bg-no-repeat opacity-95"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog2.png')",
                  filter:
                    "invert(0.15) brightness(0.3) contrast(1.8) grayscale(0.9)",
                }}
              />
            </div>

            {/* Fog Layer 3 - Darkest black fog */}
            <div
              className="absolute h-full w-[200%] animate-fog-layer-3"
              style={{ mixBlendMode: "darken" }}
            >
              <div
                className="float-left h-full w-1/2 bg-cover bg-center bg-no-repeat opacity-100"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog2.png')",
                  filter:
                    "invert(0.1) brightness(0.2) contrast(2) grayscale(1)",
                }}
              />
              <div
                className="float-left h-full w-1/2 bg-cover bg-center bg-no-repeat opacity-100"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog2.png')",
                  filter:
                    "invert(0.1) brightness(0.2) contrast(2) grayscale(1)",
                }}
              />
            </div>
          </div>

          {/* Merged Gradient Mask - Seamless transition */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-[2]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, white 0%, rgba(255,255,255,1.9) 30%, rgba(255,255,255,0.6) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8) 100%)",
              }}
            ></div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-96 pointer-events-none z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

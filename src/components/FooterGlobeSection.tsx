import React, { useEffect, useRef } from "react";

export default function FooterGlobeSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let centerX: number, centerY: number, radius: number;

    const updateCanvasSize = () => {
      const size = Math.min(window.innerWidth, 960);
      canvas.width = size;
      canvas.height = size;
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
      radius = canvas.width * 0.4;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const dots: Array<{ x: number; y: number; z: number }> = [];
    const numLat = 60;
    const numLon = 60;

    for (let i = 0; i < numLat; i++) {
      const lat = (i / numLat) * Math.PI;
      for (let j = 0; j < numLon; j++) {
        const lon = (j / numLon) * 2 * Math.PI;
        const x = Math.sin(lat) * Math.cos(lon);
        const y = Math.cos(lat);
        const z = Math.sin(lat) * Math.sin(lon);
        dots.push({ x, y, z });
      }
    }

    let rotation = 0;
    const northernHemisphereDots = dots.filter((dot) => dot.y >= 0);

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rotation += 0.004;
      const pitch = 0.5; // Tilt the globe forward

      const projectedDots = northernHemisphereDots
        .map((dot) => {
          // Y-axis rotation (spin)
          const rotatedX =
            dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
          const rotatedZ =
            dot.x * Math.sin(rotation) + dot.z * Math.cos(rotation);

          // X-axis rotation (tilt)
          const tiltedY = dot.y * Math.cos(pitch) - rotatedZ * Math.sin(pitch);
          const tiltedZ = dot.y * Math.sin(pitch) + rotatedZ * Math.cos(pitch);
            
          return { x: rotatedX, y: tiltedY, z: tiltedZ };
        })
        .sort((a, b) => a.z - b.z);

      projectedDots.forEach((dot) => {
        if (dot.z >= 0) {
          const screenX = centerX + dot.x * radius;
          const screenY = centerY - dot.y * radius;
          const depthFactor = (dot.z + 1) / 2;
          const alpha = 0.2 + depthFactor * 0.8;
          const size = 1 + depthFactor * 2.5;

          ctx.beginPath();
          ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fill();

          if (dot.z > 0.6) {
            ctx.beginPath();
            ctx.arc(screenX, screenY, size * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${alpha * 0.1})`;
            ctx.fill();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      <section className="relative min-h-[700px] -mb-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-full max-w-3xl aspect-square"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 70%)",
              maskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 70%)",
            }}
          >
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{
                width: "100%",
                height: "100%",
                contain: "size layout paint",
              }}
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-96 pointer-events-none z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black"></div>
          </div>
      </section>
    </div>
  );
}
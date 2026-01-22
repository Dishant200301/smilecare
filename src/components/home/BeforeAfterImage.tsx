import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterImageProps {
    beforeImage: string;
    afterImage: string;
    alt: string;
}

const BeforeAfterImage = ({ beforeImage, afterImage, alt }: BeforeAfterImageProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const percentage = (x / rect.width) * 100;
            setSliderPosition(percentage);
        }
    }, []);

    const onMouseMove = useCallback((e: MouseEvent) => {
        if (isDragging) {
            handleMove(e.clientX);
        }
    }, [isDragging, handleMove]);

    const onTouchMove = useCallback((e: TouchEvent) => {
        if (isDragging) {
            handleMove(e.touches[0].clientX);
        }
    }, [isDragging, handleMove]);

    const onMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
            window.addEventListener("touchmove", onTouchMove);
            window.addEventListener("touchend", onMouseUp);
        } else {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onMouseUp);
        };
    }, [isDragging, onMouseMove, onMouseUp, onTouchMove]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[3/2] rounded-[30px] overflow-hidden cursor-ew-resize select-none border border-border"
            onMouseDown={(e) => {
                setIsDragging(true);
                handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
                setIsDragging(true);
                handleMove(e.touches[0].clientX);
            }}
        >
            {/* After Image (Background) */}
            <img
                src={afterImage}
                alt={`After ${alt}`}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
            />



            {/* Before Image (Overlaid, clipped) */}
            <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage}
                    alt={`Before ${alt}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                />


            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-transparent rounded-full border-2 border-white flex items-center justify-center">
                    <ChevronLeft className="w-5 h-5 text-white gap-2-mr-1" strokeWidth={3} />
                    <ChevronRight className="w-5 h-5 text-white -ml-1" strokeWidth={3} />
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterImage;

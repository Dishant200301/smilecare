import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { cubicBezier } from "framer-motion"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fadeInUp = (delay: number) => ({
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay / 1000, // delay in seconds
      ease: cubicBezier(0, 0, 0.58, 1), // easeOut equivalent
    },
  },
});

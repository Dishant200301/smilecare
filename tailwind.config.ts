import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", '"Inter Placeholder"', "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        figtree: ["Figtree", "sans-serif"],
        instrument: ['"Instrument Serif"', "serif"],
        Figtree: ['"Figtree Variable"', "sans-serif"],
        sans: ['"Clash Display"', "sans-serif"],
        Poppins: ['"Poppins"', "sans-serif"],
      },
      fontSize: {
        "base-xs": "12px",
        "h6-framer": "1rem",
        "h5-framer": "1.125rem",
        "h2-framer": "3rem",
        "p-framer": "1rem",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ZenIQ custom
        "hero-gradient-start": "hsl(var(--hero-gradient-start))",
        "hero-gradient-end": "hsl(var(--hero-gradient-end))",
        "stats-bg": "hsl(var(--stats-bg))",
        "service-card-bg": "hsl(var(--service-card-bg))",
        "service-card-hover": "hsl(var(--service-card-hover))",
        "glow-primary": "hsl(var(--glow-primary))",
        "glow-secondary": "hsl(var(--glow-secondary))",

        "dark-bg": "#1a1a2e",
        "light-green": "#d0ff70",
        "dark-green": "#4f6c44",
        "dark-hover": "#2a0a38",
        "light-hover-bg": "#3a4e33",

        // Inno custom
        "inno-light-gray": "rgb(219, 219, 219)",
        "inno-dark-gray": "rgb(52, 52, 52)",
        "inno-semi-dark-gray": "rgba(59, 59, 59, .65)",
        "inno-dark-brown": "rgb(51, 37, 33)",
        "inno-off-white": "rgb(247, 247, 247)",
        "inno-peach": "rgb(255, 236, 224)",
        "inno-semi-blue-92": "rgba(79, 82, 255, .92)",
        "inno-blue": "rgb(68, 51, 255)",
        "inno-blue-800": "rgb(28, 27, 83)",
        "inno-very-dark-blue": "rgb(3, 4, 18)",
        "inno-medium-blue": "rgb(106, 130, 252)",
        "inno-semi-medium-blue": "rgba(115, 122, 255, .59)",
        "inno-dark-purple": "rgb(36, 24, 82)",
        "inno-semi-dark-purple": "rgba(31, 25, 51, .92)",
        "badge-bg": "rgba(38, 35, 48, 0.4)",
        "badge-border": "rgba(120, 120, 120, 0.33)",
        "card-border": "rgba(255, 255, 255, 0.15)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, hsl(var(--hero-gradient-start)), hsl(var(--hero-gradient-end)))",
        "glow-gradient":
          "radial-gradient(circle at center, hsl(var(--glow-primary) / 0.3) 0%, transparent 70%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "infinite-scroll-reverse": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(50%)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "scale-in": "scale-in 0.3s ease-out",
        blob: "blob 7s infinite ease-in-out",
        "infinite-scroll": "infinite-scroll var(--duration) linear infinite",
        "infinite-scroll-reverse":
          "infinite-scroll-reverse var(--duration) linear infinite",
        scroll: "scroll 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
};

export default config;

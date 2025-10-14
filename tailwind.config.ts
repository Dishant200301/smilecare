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
        HindMadurai: ["Hind Madurai", "sans-serif"],
        InstrumentSerif: ['"Instrument Serif"', "serif"],
        
      },
      fontSize: {
        "base-xs": "12px",
        "h6-framer": "1rem",
        "h5-framer": "1.125rem",
        "h2-framer": "3rem",
        "p-framer": "1rem",
      },
      colors: {
        /* ===== Theme Colors - Use these tokens ===== */
        // Core
        black: "hsl(var(--color-black))",
        white: "hsl(var(--color-white))",
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        
        // Brand
        brand: {
          DEFAULT: "hsl(var(--color-brand-primary))",
          primary: "hsl(var(--color-brand-primary))",
          secondary: "hsl(var(--color-brand-secondary))",
          accent: "hsl(var(--color-brand-accent))",
        },
        
        // Cards
        card: {
          DEFAULT: "hsl(var(--color-card-bg))",
          bg: "hsl(var(--color-card-bg))",
          dark: "hsl(var(--color-card-dark-bg))",
          border: "hsl(var(--color-card-border))",
          foreground: "hsl(var(--color-text-primary))",
        },
        
        // Text
        text: {
          DEFAULT: "hsl(var(--color-text-primary))",
          primary: "hsl(var(--color-text-primary))",
          secondary: "hsl(var(--color-text-secondary))",
          muted: "hsl(var(--color-text-muted))",
          "on-dark": "hsl(var(--color-text-on-dark))",
          "on-dark-muted": "hsl(var(--color-text-on-dark-muted))",
        },
        
        // Interactive
        link: {
          DEFAULT: "hsl(var(--color-link))",
          hover: "hsl(var(--color-link-hover))",
        },
        button: {
          primary: "hsl(var(--color-button-primary))",
          "primary-hover": "hsl(var(--color-button-primary-hover))",
        },
        
        // Status
        success: "hsl(var(--color-success))",
        warning: "hsl(var(--color-warning))",
        error: "hsl(var(--color-error))",
        info: "hsl(var(--color-info))",
        
        // Borders
        border: {
          DEFAULT: "hsl(var(--color-border-dark))",
          light: "hsl(var(--color-border-light))",
          dark: "hsl(var(--color-border-dark))",
        },
        divider: "hsl(var(--color-divider))",
        
        /* ===== Legacy Support ===== */
        primary: {
          DEFAULT: "hsl(var(--color-brand-primary))",
          foreground: "hsl(var(--color-text-on-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-text-secondary))",
          foreground: "hsl(var(--color-text-on-dark))",
        },
        muted: {
          DEFAULT: "hsl(var(--color-text-muted))",
          foreground: "hsl(var(--color-text-muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--color-brand-primary))",
          foreground: "hsl(var(--color-text-primary))",
        },
        destructive: {
          DEFAULT: "hsl(var(--color-error))",
          foreground: "hsl(var(--color-text-on-dark))",
        },
        input: "hsl(var(--color-border-dark))",
        ring: "hsl(var(--color-brand-primary))",
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
        'dark-purple-bg': 'rgb(2, 0, 19)', 
        'card-bg-dark': 'rgb(3, 1, 22)', // Dark background of logo cards
        'card-bg-gradient-start': 'rgb(24, 19, 42)', // Radial gradient start
        'card-bg-gradient-end': 'rgb(36, 31, 54)',   // Radial gradient end
        'border-purple': 'rgb(47, 47, 106)', // Border color for badge and cards
        'text-light-grey': 'rgb(152, 162, 179)', // Subtitle text color
        'badge-gradient-start': 'rgba(34, 21, 83, 0)', // Badge gradient start (transparent)
        'badge-gradient-end': 'rgb(18, 7, 60)', 
        'card-green': '#e8f7ec',    // From 'Free Marketing Tools'
        'card-purple': '#efe8f7',   // From 'Social Media Glossary'
        'card-blue': '#e8f0f7',     // From 'Best Time to Post'
        'card-orange': '#f7f0e8',   // From 'Social Media Resources'
        'card-red': '#f7e8e8',   
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, hsl(var(--hero-gradient-start)), hsl(var(--hero-gradient-end)))",
        "glow-gradient":
          "radial-gradient(circle at center, hsl(var(--glow-primary) / 0.3) 0%, transparent 70%)",
          'radial-gradient-overlay': 'radial-gradient(123.159% 73.6111% at 50% 50%, var(--tw-colors-card-bg-gradient-start) 0%, var(--tw-colors-card-bg-gradient-end) 68.0994%)',
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
        scrollLtr: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        scrollRtl: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "infinite-scroll-ltr": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "infinite-scroll-rtl": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        'marquee-left-3x': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.3333%)' }, // Scrolls 1/3 of the total width for 3 sets
        },
        'marquee-right-3x': {
          '0%': { transform: 'translateX(-33.3333%)' }, // Starts from position of one set
          '100%': { transform: 'translateX(0%)' },      // Scrolls back to start for 3 sets
        },
        dropdownFade: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          }
        },
        imageFade: {
          from: {
            opacity: "0",
            transform: "scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          }
        },
        // Fog animations
        "fog-layer-1-opacity": {
          "0%": { opacity: "0.1" },
          "22%": { opacity: "0.4" },
          "40%": { opacity: "0.2" },
          "58%": { opacity: "0.3" },
          "80%": { opacity: "0.15" },
          "100%": { opacity: "0.1" },
        },
        "fog-layer-2-opacity": {
          "0%": { opacity: "0.4" },
          "25%": { opacity: "0.7" },
          "50%": { opacity: "0.5" },
          "80%": { opacity: "0.6" },
          "100%": { opacity: "0.4" },
        },
        "fog-layer-3-opacity": {
          "0%": { opacity: "0.7" },
          "27%": { opacity: "0.9" },
          "52%": { opacity: "0.8" },
          "68%": { opacity: "1" },
          "100%": { opacity: "0.7" },
        },
        "move-right-to-left": {
          "0%": { left: "0" },
          "100%": { left: "-100%" },
        },
        "move-left-to-right": {
          "0%": { left: "-100%" },
          "100%": { left: "0" },
        },
        'cloud-pan': {
          '0%': { transform: 'translateX(25%) translateY(10%) rotate(0deg)' },
          '50%': { transform: 'translateX(0%) translateY(0%) rotate(180deg)' },
          '100%': { transform: 'translateX(25%) translateY(10%) rotate(360deg)' },
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
        scrollLtr: "scrollLtr 40s linear infinite",
        scrollRtl: "scrollRtl 40s linear infinite",
        "infinite-scroll-ltr": "infinite-scroll-ltr 30s linear infinite",
        "infinite-scroll-rtl": "infinite-scroll-rtl 30s linear infinite",
        'marquee-left-slow': 'marquee-left-3x 60s linear infinite',
        'marquee-left-medium': 'marquee-left-3x 45s linear infinite',
        'marquee-left-fast': 'marquee-left-3x 35s linear infinite',
        'marquee-right-slow': 'marquee-right-3x 60s linear infinite',
        'marquee-right-medium': 'marquee-right-3x 45s linear infinite',
        'marquee-right-fast': 'marquee-right-3x 35s linear infinite',
        // Fog layer animations
        "fog-layer-1": "fog-layer-1-opacity 10s linear infinite, move-right-to-left 15s linear infinite",
        "fog-layer-2": "fog-layer-2-opacity 21s linear infinite, move-left-to-right 13s linear infinite",
        "fog-layer-3": "fog-layer-3-opacity 12s linear infinite, move-right-to-left 13s linear infinite",
        'cloud-1': 'cloud-pan 60s linear infinite',
        'cloud-2': 'cloud-pan 90s linear infinite',
        'cloud-3': 'cloud-pan 120s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
};

export default config;

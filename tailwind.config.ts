import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        floatTech: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "tech-tile": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "tech-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "tech-entry": {
          "0%": { opacity: "0", transform: "translateY(10px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "glow-line": {
          "0%, 100%": { opacity: "0.2", transform: "scaleX(1)" },
          "50%": { opacity: "1", transform: "scaleX(1.2)" },
        },
        // 'glow-line': {
        //   '0%, 100%': { opacity: '0.2', transform: 'scaleX(1)' },
        //   '50%': { opacity: '1', transform: 'scaleX(1.2)' },
        // },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slow-reverse": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px hsl(217 91% 60% / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(217 91% 60% / 0.6)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "premium-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        "premium-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 30px hsl(217 91% 60% / 0.4), 0 0 60px hsl(270 70% 50% / 0.2)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow:
              "0 0 50px hsl(217 91% 60% / 0.6), 0 0 100px hsl(270 70% 50% / 0.4)",
            transform: "scale(1.02)",
          },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%) skewX(-15deg)" },
          "100%": { transform: "translateX(200%) skewX(-15deg)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-y": {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },
        "bounce-in": {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        morphing: {
          "0%, 100%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
          "25%": { borderRadius: "58% 42% 75% 25% / 76% 46% 54% 24%" },
          "50%": { borderRadius: "50% 50% 33% 67% / 55% 27% 73% 45%" },
          "75%": { borderRadius: "33% 67% 58% 42% / 63% 68% 32% 37%" },
        },
      },
	  perspective: {
        '1000px': '1000px',
      },
	  
      boxShadow: {
        'projects-premium': "0 15px 35px rgba(0,0,0,0.2)",
        'projects-glow': "0 0 20px rgba(255,255,255,0.1)",
        'projects-hover': "0 0 30px rgba(255,255,255,0.15)",
      },
      transitionTimingFunction: {
        'projects-premium': "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        "tech-float": "floatTech 6s ease-in-out infinite",
        "tech-tile": "tech-tile 0.5s ease-out forwards",
        "glow-line": "glow-line 2.5s ease-in-out infinite",
        "tech-entry": "tech-entry 0.4s ease-out forwards",
        marquee: "marquee 60s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-slow-reverse": "float-slow-reverse 6s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "premium-float": "premium-float 8s ease-in-out infinite",
        "premium-glow": "premium-glow 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "fade-in-down": "fade-in-down 0.8s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        shine: "shine 2s ease-in-out infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "gradient-y": "gradient-y 3s ease infinite",
        "bounce-in": "bounce-in 0.8s ease-out",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.8s ease-out",
        morphing: "morphing 20s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-secondary": "var(--gradient-secondary)",
        "gradient-mesh": "var(--gradient-mesh)",
        "gradient-card": "var(--gradient-card)",
      },
      //   boxShadow: {
      //     glow: "var(--shadow-glow)",
      //     card: "var(--shadow-card)",
      //     premium: "var(--shadow-premium)",
      //     hover: "var(--shadow-hover)",
      //   },
      backdropBlur: {
        xs: "2px",
      },
      //   transitionTimingFunction: {
      //     premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      //     bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      //   },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

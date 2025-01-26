import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "15": "15px",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          green: "hsl(var(--primary-green))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
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
        blue: {
          100: "hsl(var(--blue-100))",
          600: "hsl(var(--blue-600))",
        },
        gray: {
          "7": "hsl(var(--gray-7))",
          "soft-100": "hsl(var(--gray-soft-100))",
          "soft-300": "hsl(var(--gray-soft-300))",
          "soft-400": "hsl(var(--gray-soft-400))",
          "soft-500": "hsl(var(--gray-soft-500))",
          "soft-700": "hsl(var(--gray-soft-700))",
          "soft-900": "hsl(var(--gray-soft-900))",
        },
        green: {
          "mint-300": "hsl(var(--green-mint-300))",
          "mint-700": "hsl(var(--green-mint-700))",
          "700": "hsl(var(--green-700))",
        },
        slate: {
          "700": "hsl(var(--slate-700))",
        },
        red: {
          "50": "hsl(var(--red-50))",
          "700": "hsl(var(--red-700))",
        },
        orange: {
          "700": "hsl(var(--orange-700))",
        },
        yellow: {
          "100": "hsl(var(--yellow-100))",
          "600": "hsl(var(--yellow-600))",
        }
      },
      fontSize: {
        "10": "0.625rem", // 10px
        "13": "0.8125rem", // 13px
        "15": "0.9375rem", // 15px
      },
      boxShadow: {
        light:
          "0px 1px 2px rgba(0, 0, 0, 0.101961), 0px 1px 3px rgba(0, 0, 0, 0.0509804)",
        lighter: "0px 16px 18px rgba(0, 0, 0, 0.06)",
      },
      fill: {
        "gray-soft-300": "hsl(var(--gray-soft-300))",
      },
      keyframes: {
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

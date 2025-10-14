import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Palette
        background:          "hsl(var(--background))",       // Ivory White / Midnight Navy
        foreground:          "hsl(var(--foreground))",       // Charcoal on light / Ivory on dark

        // Card backgrounds + text
        card: {
          DEFAULT:           "hsl(var(--card))",             // Ivory White on light / Charcoal on dark
          "foreground":      "hsl(var(--card-foreground))",  // Charcoal on light / Ivory on dark
        },

        // Muted panels / placeholders
        muted: {
          DEFAULT:           "hsl(var(--muted))",            // Frosted Blue
          "foreground":      "hsl(var(--muted-foreground))", // Slate Steel
        },

        // Primary brand accent
        primary: {
          DEFAULT:           "hsl(var(--primary))",          // Teal Tech
          "foreground":      "hsl(var(--primary-foreground))", // Midnight Navy on teal
        },

        // Secondary accent (if you still need Slate Steel)
        secondary: {
          DEFAULT:           "hsl(var(--secondary))",        // Slate Steel
          "foreground":      "hsl(var(--secondary-foreground))",
        },

        // Alerts / destructive
        destructive: {
          DEFAULT:           "hsl(var(--destructive))",      // Coral Pop
          "foreground":      "hsl(var(--destructive-foreground))",
        },

        // Borders / metallic accents
        border:              "hsl(var(--border))",           // Sterling Silver

        // Panels / shadows
        panel:               "hsl(var(--panel))",            // Frosted Blue
      },
      ringColor: {
        DEFAULT:            "hsl(var(--primary))",           // Teal Tech focus ring
      },
      borderColor: {
        DEFAULT:            "hsl(var(--border))",            // Sterling Silver by default
      },
      borderRadius: {
        lg:                 "var(--radius)",
        md:                 "calc(var(--radius) - 2px)",
        sm:                 "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
      },
      animation: {
        "accordion-down":  "accordion-down 0.2s ease-out",
        "accordion-up":    "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

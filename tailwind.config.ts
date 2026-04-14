import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#f9f9f6",
        "inverse-primary": "#ffb4a1",
        "surface-container": "#eeeeeb",
        "tertiary-container": "#008098",
        "on-secondary-container": "#197048",
        "on-secondary-fixed": "#002111",
        "secondary-fixed-dim": "#85d8a7",
        "outline-variant": "#e0bfb7",
        "surface": "#f9f9f6",
        "on-tertiary-fixed": "#001f27",
        "surface-variant": "#e2e3e0",
        "on-secondary": "#ffffff",
        "on-error-container": "#93000a",
        "on-primary-fixed": "#3c0800",
        "on-primary-container": "#fffbff",
        "on-background": "#1a1c1b",
        "on-tertiary-container": "#f9fdff",
        "outline": "#8c716a",
        "surface-dim": "#dadad7",
        "secondary": "#116c44",
        "inverse-on-surface": "#f1f1ee",
        "on-primary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e8e8e5",
        "tertiary": "#006579",
        "on-surface": "#1a1c1b",
        "surface-tint": "#ab3514",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed-variant": "#005231",
        "error": "#ba1a1a",
        "secondary-container": "#9ef1bf",
        "primary": "#a83212",
        "primary-container": "#ca4a28",
        "on-surface-variant": "#59413b",
        "inverse-surface": "#2f312f",
        "on-primary-fixed-variant": "#891e00",
        "tertiary-fixed-dim": "#65d5f3",
        "surface-container-highest": "#e2e3e0",
        "surface-container-low": "#f4f4f1",
        "primary-fixed": "#ffdbd2",
        "tertiary-fixed": "#b1ecff",
        "on-error": "#ffffff",
        "primary-fixed-dim": "#ffb4a1",
        "surface-bright": "#f9f9f6",
        "secondary-fixed": "#a1f4c2",
        "error-container": "#ffdad6",
        "on-tertiary-fixed-variant": "#004e5e"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["var(--font-manrope)", "sans-serif"],
        "body": ["var(--font-manrope)", "sans-serif"],
        "label": ["var(--font-manrope)", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;

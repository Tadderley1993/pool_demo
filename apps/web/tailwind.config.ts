import type { Config } from "tailwindcss";

// ─────────────────────────────────────────────────────────────────────────────
// TAILWIND CONFIG — AquaCare / Pool Service SaaS Demo
//
// Editorial design system: darker navy primary, gold secondary, serif headlines,
// sharp corners. To retheme for a different client: update hex values here and
// in src/config/brand.ts — nothing else needs to change.
// ─────────────────────────────────────────────────────────────────────────────

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // ── Color Tokens ─────────────────────────────────────────────────────
      colors: {
        // Primary (near-black editorial navy)
        "primary":                    "#000d22",
        "on-primary":                 "#ffffff",
        "primary-container":          "#0a2342",
        "on-primary-container":       "#768baf",
        "primary-fixed":              "#d5e3ff",
        "primary-fixed-dim":          "#b2c7ef",
        "on-primary-fixed":           "#021c3a",
        "on-primary-fixed-variant":   "#324768",
        "inverse-primary":            "#b2c7ef",

        // Secondary (gold / amber)
        "secondary":                  "#775a19",
        "on-secondary":               "#ffffff",
        "secondary-container":        "#fed488",
        "on-secondary-container":     "#785a1a",
        "secondary-fixed":            "#ffdea5",
        "secondary-fixed-dim":        "#e9c176",
        "on-secondary-fixed":         "#261900",
        "on-secondary-fixed-variant": "#5d4201",

        // Tertiary (deep dark teal)
        "tertiary":                   "#060e13",
        "on-tertiary":                "#ffffff",
        "tertiary-container":         "#1b2429",
        "on-tertiary-container":      "#828b92",
        "tertiary-fixed":             "#dbe4eb",
        "tertiary-fixed-dim":         "#bfc8cf",
        "on-tertiary-fixed":          "#141d22",
        "on-tertiary-fixed-variant":  "#3f484e",

        // Error
        "error":                      "#ba1a1a",
        "on-error":                   "#ffffff",
        "error-container":            "#ffdad6",
        "on-error-container":         "#93000a",

        // Surface / Background
        "background":                 "#f8f9fa",
        "on-background":              "#191c1d",
        "surface":                    "#f8f9fa",
        "on-surface":                 "#191c1d",
        "surface-variant":            "#e1e3e4",
        "on-surface-variant":         "#44474e",
        "surface-tint":               "#4a5f81",
        "surface-bright":             "#f8f9fa",
        "surface-dim":                "#d9dadb",
        "surface-container-lowest":   "#ffffff",
        "surface-container-low":      "#f3f4f5",
        "surface-container":          "#edeeef",
        "surface-container-high":     "#e7e8e9",
        "surface-container-highest":  "#e1e3e4",
        "inverse-surface":            "#2e3132",
        "inverse-on-surface":         "#f0f1f2",

        // Outline
        "outline":                    "#74777e",
        "outline-variant":            "#c4c6cf",
      },

      // ── Typography ────────────────────────────────────────────────────────
      fontFamily: {
        "sans":     ["var(--font-manrope)", "Manrope", "sans-serif"],
        "headline": ["var(--font-noto-serif)", "Noto Serif", "serif"],
        "body":     ["var(--font-manrope)", "Manrope", "sans-serif"],
        "label":    ["var(--font-manrope)", "Manrope", "sans-serif"],
      },

      // ── Border Radius (editorial — sharper) ──────────────────────────────
      borderRadius: {
        DEFAULT: "0.125rem",
        lg:      "0.25rem",
        xl:      "0.5rem",
        "2xl":   "0.75rem",
        "3xl":   "1rem",
        "4xl":   "1.25rem",
        full:    "9999px",
      },
    },
  },
  plugins: [],
};

export default config;

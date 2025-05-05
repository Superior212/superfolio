import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--neutral-700)",
        secondary: "var(--neutral-500)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
    ".dark": {
      "--neutral-50": theme("colors.neutral.950"),
      "--neutral-100": theme("colors.neutral.900"),
      "--neutral-200": theme("colors.neutral.800"),
      "--neutral-300": theme("colors.neutral.700"),
      "--neutral-400": theme("colors.neutral.600"),
      "--neutral-500": theme("colors.neutral.400"),
      "--neutral-600": theme("colors.neutral.300"),
      "--neutral-700": theme("colors.neutral.200"),
      "--neutral-800": theme("colors.neutral.100"),
      "--neutral-900": theme("colors.neutral.50"),
      "--neutral-950": theme("colors.neutral.50"),
      "--white": theme("colors.neutral.900"),
      "--black": theme("colors.neutral.50"),
    },
  });
}

export default config;

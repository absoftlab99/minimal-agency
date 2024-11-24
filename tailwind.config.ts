import type { Config } from "tailwindcss";
import daisyui from "daisyui"


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0d6efd",
          "secondary": "#6c757d",
          "accent": "#074da3",
          "neutral": "#212529",
          "base-100": "#def2ff",
          "info": "#3abff8",
          "success": "#198754",
          "warning": "#ffc107",
          "error": "#dc3545",
        }
      },
    ],
  },
  plugins: [
    daisyui,
  ],
} satisfies Config;

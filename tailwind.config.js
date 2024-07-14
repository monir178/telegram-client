import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#0088cc", // Telegram's primary blue color
          "secondary": "#ffffff",
          "accent": "#e7e7e7",
          "neutral": "#ffffff",
          "base-100": "#ffffff",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",




        },
        dark: {
          "primary": "#0088cc", // Telegram's primary blue color
          "secondary": "#17212b", // Dark background
          "accent": "#242f3d", // Dark accent
          "neutral": "#242f3d", // Neutral dark background
          "base-100": "#1c1c1c", // Base background for dark mode
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",


        },
      },
    ],
  },
};

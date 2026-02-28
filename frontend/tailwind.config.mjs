/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5d7968",
        secondary: "#f2a33c",
        accent: "#e5f0e9",
        "dark-base": "#1a1c1b",
      },
      fontFamily: {
        display: ["Outfit", "system-ui", "sans-serif"],
        body: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
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
      fontSize: {
        13: "13px",
        14: "14px",
        12: "12px",
      },
      boxShadow: {
        customShadow: "0px 4px 7px 0px rgba(43, 43, 43, 0.10)",
      },
      colors: {
        primaryColor: "#edf2f8",
        yellow: "#ffe3a3",
        blackColor: "#030303",
        whiteColor: "#ffff",
        errorColor: "rgba(220,  38, 38,1)",
        100: "#d3d4de",
        200: "#a6a9be",
        300: "#7a7f9d",
        400: "#4d547d",
        500: "#21295c",
        600: "#191F45",
        700: "#141937",
        800: "#0d1025",
        900: "#070812",
        grey: {
          0: "#ffffff",
          10: "#f6f6f6",
          50: "#f0f0f0",
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
          1000: "#000000", // manually adjusted
        },
        primary: {
          // blue
          100: "#d3d4de",
          200: "#a6a9be",
          300: "#7a7f9d",
          400: "#4d547d",
          500: "#21295c",
          600: "#191F45",
          700: "#141937",
          800: "#0d1025",
          900: "#070812",
        },
        secondary: {
          50: "#f0f0f0",
          100: "#fff6e0",
          200: "#ffedc2",
          300: "#ffe3a3",
          400: "#ffda85",
          500: "#ffd166",
          600: "#cca752",
          700: "#997d3d",
          800: "#665429",
          900: "#332a14",
        },
      },
      spacing: {
        55: "55px",
        300: "300px",
        100: "100px",
        750: "750px",
        18: "18px",
        16: "14vh",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

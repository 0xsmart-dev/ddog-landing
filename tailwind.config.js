/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      header: "rgba(251, 251, 251, 0.88)",
      body: "#7E8097",
      line: "#1E2436",
      brand: "#3CE5B5",
      card2: "#1C2230",
      card: "#161B27",
      input: "#0E101B",
      back: "#171a29",
      main: "rgba(251, 251, 251, 0.7)",
      white: "#fff",
      black: "#000",
    },
    extend: {
      animation: {
        shine: "shine 1.5s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
    screens: {
      sm: { max: "768px", min: "350px" },
      md: "768px",
      lg: "1024px",
      ll: "1220px",
      xl: { min: "1440px" },
    },
  },
  plugins: [],
};

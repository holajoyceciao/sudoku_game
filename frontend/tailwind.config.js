/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#0072e3",
        bgDarkColor: "#d6dae0",
        bgLightColor: "#eaeef4",
        textLightColor: "#94a3b7",
      },
    },
  },
  plugins: [],
};

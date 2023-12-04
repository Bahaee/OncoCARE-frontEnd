/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mistyRosePink: "#DBBCC3",
        softSkyBlue: "#F5F8FF",
        semiTransparentSkyBlue: "#215EE9",
      },
    },
  },
  plugins: [],
};

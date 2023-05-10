/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: { min: "300px", max: "600px" },
    },
    extend: {},
  },
  plugins: [],
};

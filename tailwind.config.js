/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6060",
        secondary: "#F6F6F6",
      },
      fontFamily: {
        Montserrat: '"Montserrat", sans-serif',
      },
      backgroundImage: {
        Home_Banner: "url('./assets/Home_Banner.webp')",
        A_Propos_Banner: "url('./assets/A_Propos_Banner.webp')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary_1: "hsl(238, 29%, 16%)",
        primary_2: "hsl(14, 88%, 65%)",
        primary_3: "hsl(273, 75%, 66%)",
        primary_4: "hsl(240, 73%, 65%)",
        primary_5: "hsl(237, 12%, 33%)",
        primary_6: "hsl(240, 6%, 50%)",
        primary_7: "hsl(240, 5%, 91%)",
      },
    },
  },
  plugins: [require("./plugins/openVariant")],
};

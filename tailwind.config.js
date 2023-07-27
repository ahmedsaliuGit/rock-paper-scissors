/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Condensed", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-text": "hsl(229, 25%, 31%)",
        "score-text": "hsl(229, 64%, 46%)",
        "header-outline": "hsl(217, 16%, 45%)",
        "cygan-from": "hsl(189, 59%, 53%))",
        "cygan-to": "hsl(189, 58%, 57%)",
        "background-from": "hsl(214, 47%, 23%)",
        "background-to": "hsl(237, 49%, 15%)",
        "scissors-from": "hsl(39, 89%, 49%))",
        "scissors-to": "hsl(40, 84%, 53%)",
        "rock-from:": "hsl(349, 71%, 52%) ",
        "rock-to": "hsl(349, 70%, 56%)",
        "paper-from": " hsl(230, 89%, 62%)",
        "paper-to": "hsl(230, 89%, 65%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

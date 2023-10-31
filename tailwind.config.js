/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        home: "#ECECEC",
        aboutme: "#ffade0",
        experience: "#e1a8f0",
        leadership: "#bb99ff",
        projects: "#99c9ff",
        contactus: "#ECECEC",
        white: "#ffffff",
        textColor: "#1c1c21",
        purpleShade: "#8c52ff",
      },
      gradientColorStopPositions: {
        33: '33%',
      },
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
        grotesk: ["Hanken Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "blob": "url('/src/blob.png')",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'wood': "url('/img/wood.jpg')"
      },
    },
  },
  plugins: [require("daisyui")],
};

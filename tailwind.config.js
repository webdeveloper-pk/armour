/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "light-white": "#f2f2f2",
        "lighter-white": "#f2f2f2",
        "lightest-white": "#efefef",
        "light-gray": "#a8a8a8",
        "lighter-gray": "#bfbfbf",
        "lightest-gray": "#7B7A7A",
        "medium-gray": "#efefef",
        "dark-gray": "#bcbcbc",
        "carbon-black": "rgba(64, 64, 64, 0.22)",
        "light-black": "#1a1a1a",
        "lighter-black": "#404040",
        "lightest-black": "#545454",
        "light-blue": "#5B86E5",
      },
    },
  },
  plugins: [],
};

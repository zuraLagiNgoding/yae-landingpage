/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        gold: "#d3c95f",
        pink: "#E99BBF",
        red: "#DA4167",
        metal: "#2B303A",
        linen: "#FFF6EB"
      },
      backgroundColor: {
        gold: "#d3c95f",
        pink: "#E99BBF",
        red: "#DA4167",
        metal: "#2B303A",
        linen: "#FFF6EB"
      },
      borderColor: {
        gold: "#d3c95f",
        pink: "#E99BBF",
        red: "#DA4167",
        metal: "#2B303A",
        linen: "#FFF6EB"
      },
    },
  },
  plugins: [],
}

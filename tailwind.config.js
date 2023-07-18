module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}


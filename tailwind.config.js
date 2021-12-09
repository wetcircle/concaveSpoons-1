module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light': 'hsl(0, 0%, 100%)',
        'dark-blue': 'hsl(236, 21%, 26%)',
        'darker-blue': 'hsl(235, 16%, 14%)',
        'darkest-blue': 'hsl(234, 17%, 12%)',
        'grayish-blue': 'hsl(237, 18%, 59%)',
        'soft-red': 'hsl(345, 95%, 68%)',
      },
    },
    colors: {
      gray: {
        medium: "#1c1c1c",
        medium2: "#1c1c1c"
      },
      yellow: {
        medium: "#FFF5BD"
      },
    }
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],
}

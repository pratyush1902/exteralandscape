/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          deep: '#0d2217',
          DEFAULT: '#173426', // Logo exact pine green
          light: '#234d38',
        },
        emerald: {
          DEFAULT: '#173426', // Aliased to logo pine green
          light: '#234d38',
        },
        moss: {
          light: '#a4b7a0',
          DEFAULT: '#73896d', // Logo exact soft sage/moss layer
          dark: '#586b53',
        },
        sage: {
          light: '#a4b7a0',
          DEFAULT: '#73896d',
        },
        earth: {
          light: '#c89d75',
          DEFAULT: '#9b6c42', // Logo exact terracotta / clay soil tone & "LANDSCAPE" font
          hover: '#855b35',
          dark: '#6d4828',
        },
        gold: {
          DEFAULT: '#9b6c42', // Aliased to logo bronze/earth tone
          hover: '#855b35',
          light: '#f4ece2',
        },
        cream: {
          DEFAULT: '#f8f6f0',
          card: '#f1ede4',
        },
        dark: '#141c17',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'infinite-scroll-y': 'infinite-scroll-y 25s linear infinite',
        'infinite-scroll-x': 'infinite-scroll-x 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll-y': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-164%)' },
        },
        'infinite-scroll-x': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};

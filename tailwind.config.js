/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js}"],
  theme: {
    extend: {
      colors: {
        "juw-frame": "#D6E7F0",
        "juw-border": "#8B4A3B",
        "juw-accent": "#9FD3E8",
      },
    },
  },
  plugins: [],
};

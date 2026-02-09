/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./sidebar.html", "./src/**/*.{ts,tsx}", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#f97316",
        "brand-rose": "#fb7185"
      },
      boxShadow: {
        "soft": "0 12px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

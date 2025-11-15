/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          white: "var(--text-white)",
          footer_light: "var(--text-footer-ligh)",
          text_banner: "var(--text-cta-banner)",
          p: "var(--text-paragraph)",
          card_p: "var(--text-card-p)",
          card_title: "var(--text-card-heading)",
        },
        brand: {
          blue: "var(--brand-blue)",
          purple: "var(--brand-purple)"
        },
        button: {
          dark: "var(--button-dark)"
        }
      },
    },
  },
  plugins: [],
};

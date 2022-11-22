/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss: {},
    autoprefixer: {},
  ],
  purge: {
    content: [
     "./src/App.svelte",
    ],
    enabled: production // disable purge in dev
  },
}

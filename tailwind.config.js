/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.js" // Tambahkan baris ini
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // Tambahkan baris ini
  ],
}

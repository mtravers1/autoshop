/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('https://thecarkeyreplacementcenter.myshopify.com/cdn/shop/files/image-1880x360.png?v=1728168454&width=1880')",
      }
    }
  },
  plugins: [],
}


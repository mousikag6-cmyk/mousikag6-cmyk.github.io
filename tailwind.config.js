/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mocha: {
          DEFAULT: '#5B4632',
          light: '#725942',
          dark: '#3F3022',
          deep: '#2F2318'
        },
        champagne: {
          DEFAULT: '#F4D9A0',
          light: '#FBF2DD',
          soft: '#F8E9C5',
          dark: '#E0BF7E'
        },
        burntAmber: {
          DEFAULT: '#C8792C',
          light: '#DC8F43',
          dark: '#AE621D',
          hover: '#BA6E24'
        },
        warm: {
          bg: '#FAF7F2',
          surface: '#FFFDF9',
          card: '#FFFFFF',
          cream: '#F4ECE1',
          border: 'rgba(91, 70, 50, 0.12)',
          borderGold: 'rgba(244, 217, 160, 0.6)'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(91, 70, 50, 0.06)',
        'warm-md': '0 6px 20px rgba(91, 70, 50, 0.08)',
        'warm-lg': '0 12px 30px rgba(91, 70, 50, 0.12)',
        'gold-glow': '0 0 25px rgba(244, 217, 160, 0.45)',
        'amber-glow': '0 4px 20px rgba(200, 121, 44, 0.35)',
      }
    },
  },
  plugins: [],
}

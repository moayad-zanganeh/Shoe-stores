import { addDynamicIconSelectors } from '@iconify/tailwind';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './main.js'],
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
};
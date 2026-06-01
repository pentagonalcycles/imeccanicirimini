/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Merriweather'", 'Georgia', 'serif'],
        body: ["'Open Sans'", 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#1a1a2e',
        secondary: '#f5f0eb',
        accent: '#c8a97e',
        dark: '#111111',
        light: '#ffffff',
      },
    },
  },
  plugins: [],
};

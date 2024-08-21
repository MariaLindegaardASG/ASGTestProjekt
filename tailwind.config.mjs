/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: ["./src/**/*.{html,ts,scss}",
    "./node_modules/flowbite/**/*.js" 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin
  ],
}
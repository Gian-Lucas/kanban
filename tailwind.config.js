/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        input: "0px 4px 16px 0px rgba(22, 22, 22, 0.10)",
        card: "0px 4px 16px 0px #EAE2FD",
      },
    },
  },
  plugins: [],
};

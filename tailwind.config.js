/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Add paths to all your template files
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        secondary: "#6c757d",
        success: "#28a745",
        danger: "#dc3545",
        warning: "#ffc107",
        info: "#17a2b8",
        light: "#f8f9fa",
        dark: "#343a40",
        themeblack: "#000000",
        textred: "#FF5555",
        textwhite: "#F8F8F8",
        selectedborder: "#F6B60B"
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#002234",
        lightBlue: "#5FBAEA",
        darkBlue: "#003754",
      },
      fontFamily: {
        PoppinsRegular: "Poppins-Regular",
        PoppinsThinItalic: "Poppins-ThinItalic",
        PoppinsThin: "Poppins-Thin",
        PoppinsSemiBold: "Poppins-SemiBold",
      },
      boxShadow: {
        myshad: "5px 5px 76px 28px rgba(95,186,234,0.68)",
      },
    },
  },
  plugins: [],
};

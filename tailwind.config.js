/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
      },
      screens: {
        xs: "475px", // Custom breakpoint
        sm: "640px", // Tailwind default breakpoint
        md: "768px", // Tailwind default breakpoint
        lg: "1024px", // Tailwind default breakpoint
        xl: "1280px", // Tailwind default breakpoint
        "2xl": "1536px", // Tailwind default breakpoint
        // Anda bisa menambahkan lebih banyak breakpoint sesuai kebutuhan
      },
    },
  },
  plugins: [],
};

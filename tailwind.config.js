/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        doctor: "url('src/assets/images/doctor.jpg')",
      },
    },
  },
  plugins: [],
};

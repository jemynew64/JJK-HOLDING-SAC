/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green-1": "#2B5906", // 2B5906
        "custom-green-2": "#049443", // 049443
        "custom-green-3": "#244A39", // 244A39
      },
    },
  },
  plugins: [],
};

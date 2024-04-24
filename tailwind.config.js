/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./src/**/*.{js,jsx}",
"udbhavwebsite/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1e0121",
        secondary: "#f5e4f7",
        tertiary: "#2b072e",
        bluee: "151030",
        lightbluee: "050816",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
       backgroundImage: {
        "hero-pattern": "url('/src/assets/heroo.jpg')",
        "orange":"url('/src/assets/17374.jpg')"
       }
    },
  },
  plugins: [],
});
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    colors: {
      accent: "#582be8",

      // dark background palette
      dark_background: "#090d11",
      dark_container: "#0e1117",
      dark_sub_container: "#161b22",
      dark_input: "#080a10",
      dark_secondary_button: "#21262c",

      // dark text palette
      dark_primary: "#fff",
      dark_secondary: "#ffffcc",
      dark_tertiary: "#ffff99",

      // dark border
      dark_border: "#30363d",

      // light background palette
      light_background: "#fff",
      light_container: "#f7fafc",
      light_sub_container: "#edf2f6",
      light_input: "#fafbfc",
      light_secondary_button: "#fafbfc",

      // light text palette
      light_primary: "#2d3748",
      light_secondary: "#4a5568",
      light_tertiary: "#586069",

      // light border
      light_border: "#e1e4e8",
    },
    extend: {
      fontFamily: {
        inter: ['"Inter"', "system-ui"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

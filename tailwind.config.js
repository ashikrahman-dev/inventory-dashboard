// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./src/components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {

    fontFamily: {
      roobert: "'Roobert', sans",
    },
    

    colors: {
      //Primary colors
      main_purple: "#2E00FF",
      main_dark: "#0B0140",
      main_light: "#F5F3FD",

      //Secondary Color
      secondary: "#4AF8E3",
      secondary_shade: "#FFF3EE",
      secondary_light: "#F3EADA",

      //Dark Color
      dark1: "#06021C",
      dark2: "#33313E",
      dark3: "#5D5B70",
      dark4: "#BAB8CF",
      dark5: "#E6E5ED",
      dark6: "#F4F2F7",
      dark7: "#F9F8FC",

      //Status Color
      info_color: "#219FFF",
      info_shade: "#E9F6FF",

      success_color: "#17BD8D",
      success_shade: "#E9FBF6",

      warning_color: "#FFA114",
      warning_shade: "#FFF7EB",

      danger_color: "#FF4E3E",
      danger_shade: "#FEF4F3",

      //Base colors
      white: "#FFFFFF",
      black: "#000000",

    },

    extend: {


    },
  },
  plugins: [],
}
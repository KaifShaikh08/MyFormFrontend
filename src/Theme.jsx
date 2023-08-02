// theme/chakra-theme.js
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light", // Adjust to 'dark' for dark mode by default
  useSystemColorMode: false,
};

const colors = {
  light: {
    background: "#F8F8F8",
    text: "#333",
  },
  dark: {
    background: "#111",
    text: "#EEE",
  },
};

const fonts = {
  heading: "Arial, sans-serif",
  body: "Arial, sans-serif",
};

const Theme = extendTheme({ config, colors, fonts });

export default Theme;

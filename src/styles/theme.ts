export default {
  colors: {
    backgroundColor: {
      mainBg: "#F8FAFA",
      secondaryBg: "#ffea87",
      darkBg: "#22223b",
      mediumGray: "#DDDDDD",
    },
    fontColor: {
      primaryColor: "#2A3A77",
      secondaryColor: "#0067AA",
      yellowColor: "#FFEA20",
      whiteColor: "#FFFFFF",
    },
  },
  fonts: {
    default: "'Open Sans', sans-serif",
    secondary: "'Montserrat', sans-serif",
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 600,
    },
    sizes: {
      xsmall: "8rem",
      small: "1.6rem",
      medium: "2.4rem",
      large: "3.2rem",
      xlarge: "4.0rem",
      xxlarge: "4.8rem",
      huge: "5.6rem",
      xhuge: "6.4rem",
    },
    style: {
      normal: "normal",
      italic: "italic",
      oblique: "oblique",
    },
  },
  media: {
    lteMedium: "(max-width: 768px)",
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
  transition: {
    fast: "all 0.3s ease-in-out;",
    normal: "all 1s ease-in-out;",
    slow: "all 2s ease-in-out;",
  },
} as const;

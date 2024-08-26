import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      fontFamily: {
        ClashGroteskExtralight: "ClashGrotesk-Extralight",
        ClashGroteskLight: "ClashGrotesk-Light",
        ClashGroteskRegular: "ClashGrotesk-Regular",
        ClashGroteskMedium: "ClashGrotesk-Medium",
        ClashGroteskSemiBold: "ClashGrotesk-SemiBold",
        ClashGroteskBold: "ClashGrotesk-Bold",
        ClashGroteskVariable: "ClashGrotesk-Variable",
        Kugile: "Kugile",
      },

      backgroundImage: {
        goldenButtonGradient:
          "linear-gradient(90deg, #FFB169 0%, #593F26 100%)",
        goldenTextGradient:
          "linear-gradient(99.06deg, #FFB169 23.07%, #996A3F 76.93%)",
        heraTextGradient: "linear-gradient(180deg, #2F2924 0%, #070707 79.49%)",
        discordSectionBg: "linear-gradient(90deg, #FFB169 0%, #975110 100%)",
      },

      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },

      colors: {
        blackShade: "#0F0F0F",
        vanilla: "#D0C0B1",
        ChineseBlack: "#131313",
        Rajah: "#F6AB65",
        RawUmber: "#856343",
        Apricot: "#FFB169",
      },

      borderRadius: {},

      keyframes: {},

      animation: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

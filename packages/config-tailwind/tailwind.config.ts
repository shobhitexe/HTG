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
        bronzeButtonGradient:
          "linear-gradient(90deg, #FFB169 0%, #E9903D 100%)",
        leaderBorderHeaderGradient:
          "linear-gradient(180deg, #F0A764 0%, #96693F 100%)",

        silverTextGradient:
          "linear-gradient(94.77deg, #FFFFFF 16.46%, #999999 83.54%)",
        pricingButtonGradient:
          "linear-gradient(104.89deg, #FFB169 20.88%, #CD7B28 79.12%)",
        referralPointsGradientBG:
          "linear-gradient(270deg, #070707 3.25%, #62462C 100%)",

        goldButtonBg: "url('/images/buttons/gold.png')",
        silverbuttonBg: "url('/images/buttons/silver.png')",
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
        SilverFoil: "#B0B0B0",
        Gray: "#818181",
        RaisinBlack: "#232323",
        AmericanSilver: "#D1D1D1",
        RoyalOrange: "#FF9E44",
      },

      borderRadius: {},

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

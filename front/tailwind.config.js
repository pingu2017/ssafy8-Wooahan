/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: `jit`,
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      iceBlue: "#1fb6ff",
      red: "#e3342f",
      deepBlue: "#0800ff",
      yellow: "#eeff00",
      palePupple: "#ea6aed",
      lightGray: "#c9bfc9",
      white: "#ffffff",
      sharkGray: "#4d5666",
      deepPink: "#f7a3e3",
      sample: "#fcfb00",
      beige: "#fcf0c7",
      // 기본 컬러
      mainBlack: colors.black,
      mainWhite: colors.white,
      mainSlate: colors.slate,
      mainGray: colors.gray,
      mainZinc: colors.zinc,
      mainNeutral: colors.neutral,
      mainStone: colors.stone,
      mainRed: colors.red,
      mainOrange: colors.orange,
      mainAmber: colors.amber,
      mainYellow: colors.yellow,
      mainLime: colors.lime,
      mainGreen: colors.green,
      mainEmerald: colors.emerald,
      mainTeal: colors.teal,
      mainCyan: colors.cyan,
      mainSky: colors.sky,
      mainBlue: colors.blue,
      mainIndigo: colors.indigo,
      mainViolet: colors.violet,
      mainPurple: colors.purple,
      mainFuchsia: colors.fuchsia,
      mainPink: colors.pink,
      mainRose: colors.rose,
      mainTransparent: colors.transparent,
    },
    fontFamily: {
      netmarbleB: ["netmarbleB"],
      netmarbleL: ["netmarbleL"],
      netmarbleM: ["netmarbleM"],
      MaplestoryBold: ["MaplestoryBold"],
      MaplestoryLight: ["MaplestoryLight"],
      MaplestoryOTFBold: ["MaplestoryOTFBold"],
    },
    extend: {
      keyframes: {
        intro: {
          from: { transform: "translateY(300%) scale(0.5)" },
          to: { transform: "translateY(-300%) scale(1.0)" },
        },
        goTrain: {
          "0%": { transform: "translateX(700px) " },
          "100%": { transform: "translateX(-1400px)" },
        },
        oneTrain: {
          "0%": { transform: "translateX(0px) " },
          "100%": { transform: "translateX(-1400px)" },
        },
        snow1: {
          "0%": { transform: "translateX(450px) translateY(-30px)" },
          "100%": { transform: "translateX(250px) translateY(350px)" },
        },
        snow2: {
          "0%": { transform: "translateX(100px) translateY(-20px)" },
          "100%": { transform: "translateX(250px) translateY(350px)" },
        },
        snow3: {
          "0%": { transform: "translateX(150px) translateY(-70px)" },
          "100%": { transform: "translateX(50px) translateY(350px)" },
        },
        snow4: {
          "0%": { transform: "translateX(250px) translateY(-40px)" },
          "100%": { transform: "translateX(150px) translateY(350px)" },
        },
        snow5: {
          "0%": { transform: "translateX(350px) translateY(-50px)" },
          "100%": { transform: "translateX(250px) translateY(350px)" },
        },
        snow6: {
          "0%": { transform: "translateX(50px) translateY(-60px)" },
          "100%": { transform: "translateX(0px) translateY(350px)" },
        },
        snow7: {
          "0%": { transform: "translateX(400px) translateY(-80px)" },
          "100%": { transform: "translateX(650px) translateY(350px)" },
        },
        snow8: {
          "0%": { transform: "translateX(550px) translateY(-30px)" },
          "100%": { transform: "translateX(750px) translateY(350px)" },
        },
        snow9: {
          "0%": { transform: "translateX(750px) translateY(-20px)" },
          "100%": { transform: "translateX(650px) translateY(350px)" },
        },
        snow10: {
          "0%": { transform: "translateX(200px) translateY(-10px)" },
          "100%": { transform: "translateX(450px) translateY(350px)" },
        },
        snow11: {
          "0%": { transform: "translateX(600px) translateY(-40px)" },
          "100%": { transform: "translateX(450px) translateY(350px)" },
        },
        snow12: {
          "0%": { transform: "translateX(300px) translateY(-50px)" },
          "100%": { transform: "translateX(550px) translateY(350px)" },
        },
        "scale-up-center": {
          "0%": {
            "-webkit-transform": "scale(0.5)",
            transform: "scale(0.5)",
          },
          "100%": {
            "-webkit-transform": "scale(1)",
            transform: "scale(1)",
          },
        },
        mybounce: {
          "0%": {
            "-webkit-transform": "translateY(0)",
            transform: "translateY(0)",
            "-webkit-animation-timing-function": "ease-in",
            "animation-timing-function": "ease-in",
          },
          "50%": {
            "-webkit-transform": "translateY(1.5vh)",
            transform: "translateY(1.5vh)",
            "-webkit-animation-timing-function": "ease-out",
            "animation-timing-function": "ease-out",
          },
          "100%": {
            "-webkit-transform": "translateY(0)",
            transform: "translateY(0)",
            "-webkit-animation-timing-function": "ease-in",
            "animation-timing-function": "ease-in",
          },
        },
      },
      animation: {
        intro: "intro 4s linear infinite",
        goTrain: "goTrain 10s linear infinite",
        oneTrain: "oneTrain 1.5s linear",
        snow1: "snow1 13s linear infinite",
        snow2: "snow2 13s linear infinite",
        snow3: "snow3 15s linear infinite",
        snow4: "snow4 11s linear infinite",
        snow5: "snow5 17s linear infinite",
        snow6: "snow6 14s linear infinite",
        snow7: "snow7 15s linear infinite",
        snow8: "snow8 11s linear infinite",
        snow9: "snow9 16s linear infinite",
        snow10: "snow10 17s linear infinite",
        snow11: "snow11 12s linear infinite",
        snow12: "snow12 12s linear infinite",
        "scale-up-center":
          "scale-up-center 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        bounce: "mybounce 1.3s infinite",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        loading:
          "-2px 0 var(--tw-shadow-color), 0 2px var(--tw-shadow-color), 2px 0 var(--tw-shadow-color), 0 -2px var(--tw-shadow-color)",
      },
    },
    textFillColor: (theme) => theme("borderColor"),
    textStrokeColor: (theme) => theme("borderColor"),
    textStrokeWidth: (theme) => theme("borderWidth"),
    paintOrder: {
      fsm: { paintOrder: "fill stroke markers" },
      fms: { paintOrder: "fill markers stroke" },
      sfm: { paintOrder: "stroke fill markers" },
      smf: { paintOrder: "stroke markers fill" },
      mfs: { paintOrder: "markers fill stroke" },
      msf: { paintOrder: "markers stroke fill" },
    },
  },
  variants: {
    // all the following default to ['responsive']
    textFillColor: ["responsive"],
    textStrokeColor: ["responsive"],
    textStrokeWidth: ["responsive"],
    paintOrder: ["responsive"],
  },
  plugins: [
    require("tailwindcss-text-fill-stroke")(), // no options to configure
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};

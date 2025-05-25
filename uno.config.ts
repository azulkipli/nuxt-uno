import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

// import presetWind4 from "@unocss/preset-wind4";

export default defineConfig({
  // ...UnoCSS options
  // content: {
  //   pipeline: {
  //     include: [
  //       // the default
  //       /\.(vue|svelte|[jt]sx|mdx?|astro|html)($|\?)/,
  //       // include js/ts files
  //       './**/*.{vue,js,ts,jsx,tsx}',
  //     ],
  //     // exclude files
  //     // exclude: []
  //   },
  // },
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});

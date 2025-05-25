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
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});

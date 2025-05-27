import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import extratorUna from "@una-ui/extractor-vue-script";
import presetUna from "@una-ui/preset";
import prefixes from "@una-ui/preset/prefixes";

// import presetWind4 from "@unocss/preset-wind4";

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetUna(),
  ],
  extractors: [
    extratorUna({
      prefixes,
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      'no-console': 'off', // allow console.log in TypeScript files,
      'vue/html-self-closing': 'off', // allow self-closing tags in Vue files
      'vue/no-multiple-template-root': 'off', // allow multiple root elements in Vue files
      'vue/multi-word-component-names': 'off', // allow multi-word component names in Vue files
    }
  },
)

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ['src/api/**/*.ts']
      // rules: [
      //   camelcase: 'off'
      // ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue']
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
    // '@typescript-eslint/no-floating-promises': ['warn']
  }
}
